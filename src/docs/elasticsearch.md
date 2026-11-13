# Elasticsearch integration (QES module)

Starting from version 3.10, G3W-SUITE ships with the **`qes`** module (QGIS Elasticsearch), an optional component that indexes QGIS layer features into [Elasticsearch](https://www.elastic.co/elasticsearch) to provide fast, full-text search across the published WebGIS projects.

The module is part of the [g3w-admin](https://github.com/g3w-suite/g3w-admin) codebase (`g3w-admin/qes/`) and is activated by adding `qes` to the `G3WADMIN_LOCAL_MORE_APPS` list in `local_settings.py`.

## Overview

When the module is enabled, G3W-SUITE will:

- create one Elasticsearch index per user (`qgis_features_<user_pk>`, or `qgis_features_anonymous` for unauthenticated access) containing the features the user is authorized to see;
- index attribute values and a derived `text_content` field used for full-text search;
- keep the indexes synchronized with editing operations through Django signals (create / update / delete on vector layers managed by the `editing` module);
- expose a REST endpoint that returns search hits for a given query within a project.

Per-user indexes are used to respect G3W-SUITE permissions: each user only searches the subset of features they have access to.

## Requirements

- An Elasticsearch server reachable from G3W-ADMIN. The reference version used by the official Docker images is **Elasticsearch 8.18.x**.
- The following Python packages (already declared in the g3w-admin `requirements.txt`):
    - `django-elasticsearch-dsl==8.0`
    - `elasticsearch` (installed as a transitive dependency)

When `qes` is listed in `G3WADMIN_LOCAL_MORE_APPS`, G3W-SUITE automatically adds `django_elasticsearch_dsl` to `INSTALLED_APPS`.

## Deploy with Docker

The official `docker-compose.ltr.yml` / `docker-compose.latest.yml` files in [g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker) include an `elasticsearch` service ready to use:

```yaml
elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.18.1
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - ES_JAVA_OPTS=-Xms512m -Xmx512m
    volumes:
      - esdata:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"
```

The G3W-SUITE container reaches it through the internal Docker network at `http://elasticsearch:9200`.

## Manual installation

If you are not using the provided Docker compose stack, install and start an Elasticsearch 8.x instance on a host reachable by G3W-ADMIN, then configure the connection as described below.

For installation instructions refer to the official documentation: <https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html>.

## Configuration

Add `qes` to the local apps and configure the Elasticsearch connection in `local_settings.py`:

```python
G3WADMIN_LOCAL_MORE_APPS = [
    # ...
    'qes',
]

# Elasticsearch connection
ELASTICSEARCH_DSL = {
    'default': {
        'hosts': 'http://elasticsearch:9200',
        # 'http_auth': ('username', 'password'),  # if security is enabled
    }
}

# Activate/deactivate indexing of QGIS projects
QES_INDEXING_PROJECT = True
```

### Available settings

``ELASTICSEARCH_DSL``
^^^^^^^^^^^^^^^^^^^^^

Standard [`django-elasticsearch-dsl`](https://django-elasticsearch-dsl.readthedocs.io/) connection dictionary. The `default` alias is the one used by the QES indexer. Use `http_auth` to provide credentials when X-Pack security is enabled.

``QES_INDEXING_PROJECT``
^^^^^^^^^^^^^^^^^^^^^^^^

Default: `True`. Master switch that enables (or disables) the automatic indexing of QGIS projects in Elasticsearch. When set to `False` the `qes` module is loaded but does not index anything and the search API returns no results.

``QES_INDEXING_FIELDS``
^^^^^^^^^^^^^^^^^^^^^^^

Default: `{}` (index every attribute). Optional dictionary, keyed by QGIS layer id, that restricts the fields that will be indexed. Example:

```python
QES_INDEXING_FIELDS = {
    'cities10000eu20171228095720113': ['name', 'country', 'population'],
}
```

Layers that are not listed in `QES_INDEXING_FIELDS` are still fully indexed; layers that are listed are limited to the declared field names.

``QES_SEARCH_QUERY``
^^^^^^^^^^^^^^^^^^^^

Elasticsearch query template used by the search endpoint. The placeholder `'$query_text'` is replaced at runtime with the text submitted by the user. The default template combines `match_phrase`, `match` (with operator `and`), `wildcard` and a fuzzy `multi_match` over the `text_content` field to balance precision and recall. Override it only if you need to tune relevance.

``QES_SEARCH_SORT``
^^^^^^^^^^^^^^^^^^^

Default sort applied to search hits. Defaults to ascending `layer_id`:

```python
QES_SEARCH_SORT = {
    "layer_id": {"order": "asc"}
}
```

``QES_INDEXING_CRON_SCHEDULE``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Default: `None`. When set to a [Huey `crontab`](https://huey.readthedocs.io/) expression, the periodic task `es_project_cron_indexing` is scheduled and runs a full re-indexing on the defined schedule. Example — re-index every four hours:

```python
from huey import crontab
QES_INDEXING_CRON_SCHEDULE = crontab(hour='*/4')
```

This requires the Huey consumer to be running (see the *consumer* Docker compose recipe in [docker.md](docker.md)).

``QES_INDEXING_CRON_PRJIDS``
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Optional, used together with `QES_INDEXING_CRON_SCHEDULE`. Space-separated list of QGIS project ids to restrict the cron-driven re-indexing to a subset of projects. If omitted, every project is re-indexed.

```python
QES_INDEXING_CRON_PRJIDS = '1 2 3'
```

## Indexing projects

### One-shot indexing from the command line

The `qes_indexer` management command performs a full indexing of one or more QGIS projects for every user that has permission to access them:

```bash
# Index every project
python manage.py qes_indexer

# Index only the given project ids
python manage.py qes_indexer --prj_ids 1 2 3
```

A separate per-user index named `qgis_features_<user_pk>` is created for each user with `view_project` permission on the indexed projects.

### Automatic incremental indexing

When `QES_INDEXING_PROJECT = True`, G3W-SUITE listens to project save / delete and to editing commits on vector layers and updates the corresponding documents automatically. No manual action is required after the initial indexing.

### Scheduled re-indexing

Set `QES_INDEXING_CRON_SCHEDULE` (see above) to run a full re-indexing on a regular basis through the Huey consumer.

## Search API

The module exposes a per-project search endpoint backed by `QesSearchAPIView`. Issue a `GET` request to the project search URL with a `q` query parameter, for example:

```
GET /api/qes/search/<project_type>/<project_id>/?q=<text>
```

The endpoint honours the standard G3W-SUITE project permissions: anonymous users only see results from projects shared with the anonymous user, authenticated users see the subset of features that match their grants.

The response is a JSON list of hits. Each hit contains:

- `score` — Elasticsearch relevance score
- `project_id`, `project_name`
- `layer_id`, `layer_name`
- `feature_id`
- `attributes` — the indexed attribute values
- `highlights` — Elasticsearch highlighting on `text_content` and `attributes.*`

## Troubleshooting

- **No results / empty indexes** — verify that `QES_INDEXING_PROJECT` is `True`, that the Elasticsearch service is reachable at the configured host, and that the `qes_indexer` command completes without errors. The module logs to the `elasticsearch` Python logger (`[QES-elasticsearch]` log tag).
- **Authentication errors** — if your Elasticsearch instance has security enabled, set `http_auth` in `ELASTICSEARCH_DSL['default']`.
- **Stale data after editing** — the receivers only update documents for the project / layer being modified. To rebuild from scratch run `python manage.py qes_indexer --prj_ids <id>`.

<script type="application/json" data-i18n>
  {
    "it": {
      "**Authentication errors** — if your Elasticsearch instance has security enabled, set `http_auth` in `ELASTICSEARCH_DSL['default']`.": "**Errori di autenticazione** — se l'istanza Elasticsearch usa la sicurezza, impostare `http_auth` in `ELASTICSEARCH_DSL['default']`.",
      "**No results / empty indexes** — verify that `QES_INDEXING_PROJECT` is `True`, that the Elasticsearch service is reachable at the configured host, and that the `qes_indexer` command completes without errors. The module logs to the `elasticsearch` Python logger (`[QES-elasticsearch]` log tag).": "**Nessun risultato / indici vuoti** — verificare che `QES_INDEXING_PROJECT` sia `True`, che il servizio Elasticsearch sia raggiungibile all'host configurato e che il comando `qes_indexer` termini senza errori. Il modulo registra i log tramite il logger Python `elasticsearch` (tag di log `[QES-elasticsearch]`).",
      "**Stale data after editing** — the receivers only update documents for the project / layer being modified. To rebuild from scratch run `python manage.py qes_indexer --prj_ids <id>`.": "**Dati non aggiornati dopo la modifica** — i receiver aggiornano solo i documenti del progetto o del layer modificato. Per ricostruire gli indici da zero, eseguire `python manage.py qes_indexer --prj_ids <id>`.",
      "`attributes` — the indexed attribute values": "`attributes` — i valori degli attributi indicizzati",
      "`elasticsearch` (installed as a transitive dependency)": "`elasticsearch` (installato come dipendenza transitiva)",
      "`feature_id`": "`feature_id`",
      "`highlights` — Elasticsearch highlighting on `text_content` and `attributes.*`": "`highlights` — evidenziazioni Elasticsearch in `text_content` e `attributes.*`",
      "`layer_id`, `layer_name`": "`layer_id`, `layer_name`",
      "`project_id`, `project_name`": "`project_id`, `project_name`",
      "`score` — Elasticsearch relevance score": "`score` — punteggio di rilevanza Elasticsearch",
      "A separate per-user index named `qgis_features_<user_pk>` is created for each user with `view_project` permission on the indexed projects.": "Per ciascun utente con il permesso `view_project` sui progetti indicizzati viene creato un indice personale denominato `qgis_features_<user_pk>`.",
      "Add `qes` to the local apps and configure the Elasticsearch connection in `local_settings.py`:": "Aggiungere `qes` alle app locali e configurare la connessione a Elasticsearch in `local_settings.py`:",
      "An Elasticsearch server reachable from G3W-ADMIN. The reference version used by the official Docker images is **Elasticsearch 8.18.x**.": "Un server Elasticsearch raggiungibile da G3W-ADMIN. La versione di riferimento usata dalle immagini Docker ufficiali è **Elasticsearch 8.18.x**.",
      "Automatic incremental indexing": "Indicizzazione incrementale automatica",
      "Available settings": "Impostazioni disponibili",
      "Configuration": "Configurazione",
      "create one Elasticsearch index per user (`qgis_features_<user_pk>`, or `qgis_features_anonymous` for unauthenticated access) containing the features the user is authorized to see;": "crea un indice Elasticsearch per ogni utente (`qgis_features_<user_pk>` oppure `qgis_features_anonymous` per gli accessi non autenticati), contenente gli elementi che l'utente è autorizzato a visualizzare;",
      "Default sort applied to search hits. Defaults to ascending `layer_id`:": "Ordinamento predefinito dei risultati di ricerca. Per impostazione predefinita, `layer_id` viene ordinato in modo crescente:",
      "Default: `None`. When set to a [Huey `crontab`](https://huey.readthedocs.io/) expression, the periodic task `es_project_cron_indexing` is scheduled and runs a full re-indexing on the defined schedule. Example — re-index every four hours:": "Valore predefinito: `None`. Se impostato su un'espressione [Huey `crontab`](https://huey.readthedocs.io/), pianifica l'attività periodica `es_project_cron_indexing` ed esegue una reindicizzazione completa secondo la pianificazione definita. Esempio — reindicizzazione ogni quattro ore:",
      "Default: `True`. Master switch that enables (or disables) the automatic indexing of QGIS projects in Elasticsearch. When set to `False` the `qes` module is loaded but does not index anything and the search API returns no results.": "Valore predefinito: `True`. Interruttore generale che abilita o disabilita l'indicizzazione automatica dei progetti QGIS in Elasticsearch. Se impostato su `False`, il modulo `qes` viene caricato ma non indicizza nulla e l'API di ricerca non restituisce risultati.",
      "Default: `{}` (index every attribute). Optional dictionary, keyed by QGIS layer id, that restricts the fields that will be indexed. Example:": "Valore predefinito: `{}` (indicizza tutti gli attributi). Dizionario facoltativo, indicizzato per ID del layer QGIS, che limita i campi da indicizzare. Esempio:",
      "Deploy with Docker": "Distribuzione con Docker",
      "Elasticsearch integration (QES module)": "Integrazione con Elasticsearch (modulo QES)",
      "Elasticsearch query template used by the search endpoint. The placeholder `'$query_text'` is replaced at runtime with the text submitted by the user. The default template combines `match_phrase`, `match` (with operator `and`), `wildcard` and a fuzzy `multi_match` over the `text_content` field to balance precision and recall. Override it only if you need to tune relevance.": "Modello di query Elasticsearch utilizzato dall'endpoint di ricerca. Il segnaposto `'$query_text'` viene sostituito in fase di esecuzione con il testo inserito dall'utente. Il modello predefinito combina `match_phrase`, `match` (con l'operatore `and`), `wildcard` e un `multi_match` fuzzy sul campo `text_content` per bilanciare precisione e richiamo. Sovrascriverlo solo se è necessario modificare la rilevanza.",
      "expose a REST endpoint that returns search hits for a given query within a project.": "espone un endpoint REST che restituisce i risultati di una ricerca per una determinata query all'interno di un progetto.",
      "For installation instructions refer to the official documentation: <https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html>.": "Per le istruzioni di installazione, consultare la documentazione ufficiale: <https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html>.",
      "If you are not using the provided Docker compose stack, install and start an Elasticsearch 8.x instance on a host reachable by G3W-ADMIN, then configure the connection as described below.": "Se non si usa lo stack Docker Compose fornito, installare e avviare un'istanza Elasticsearch 8.x su un host raggiungibile da G3W-ADMIN, quindi configurare la connessione come descritto di seguito.",
      "index attribute values and a derived `text_content` field used for full-text search;": "indicizza i valori degli attributi e un campo derivato `text_content`, utilizzato per le ricerche full-text;",
      "Indexing projects": "Indicizzazione dei progetti",
      "keep the indexes synchronized with editing operations through Django signals (create / update / delete on vector layers managed by the `editing` module);": "mantiene gli indici sincronizzati con le operazioni di modifica tramite i segnali Django (creazione, aggiornamento ed eliminazione nei layer vettoriali gestiti dal modulo `editing`);",
      "Layers that are not listed in `QES_INDEXING_FIELDS` are still fully indexed; layers that are listed are limited to the declared field names.": "I layer non elencati in `QES_INDEXING_FIELDS` vengono comunque indicizzati completamente; per quelli elencati l'indicizzazione è limitata ai nomi di campo dichiarati.",
      "Manual installation": "Installazione manuale",
      "One-shot indexing from the command line": "Indicizzazione singola dalla riga di comando",
      "Optional, used together with `QES_INDEXING_CRON_SCHEDULE`. Space-separated list of QGIS project ids to restrict the cron-driven re-indexing to a subset of projects. If omitted, every project is re-indexed.": "Facoltativo, da usare insieme a `QES_INDEXING_CRON_SCHEDULE`. Elenco separato da spazi di ID dei progetti QGIS per limitare la reindicizzazione pianificata a un sottoinsieme di progetti. Se omesso, vengono reindicizzati tutti i progetti.",
      "Overview": "Panoramica",
      "Per-user indexes are used to respect G3W-SUITE permissions: each user only searches the subset of features they have access to.": "Gli indici distinti per utente rispettano i permessi di G3W-SUITE: ciascun utente può cercare solo nel sottoinsieme di elementi a cui ha accesso.",
      "Requirements": "Requisiti",
      "Scheduled re-indexing": "Reindicizzazione pianificata",
      "Search API": "API di ricerca",
      "Set `QES_INDEXING_CRON_SCHEDULE` (see above) to run a full re-indexing on a regular basis through the Huey consumer.": "Impostare `QES_INDEXING_CRON_SCHEDULE` (vedere sopra) per eseguire regolarmente una reindicizzazione completa tramite il consumer Huey.",
      "Standard [`django-elasticsearch-dsl`](https://django-elasticsearch-dsl.readthedocs.io/) connection dictionary. The `default` alias is the one used by the QES indexer. Use `http_auth` to provide credentials when X-Pack security is enabled.": "Dizionario standard delle connessioni di [`django-elasticsearch-dsl`](https://django-elasticsearch-dsl.readthedocs.io/). L'alias `default` è quello utilizzato dall'indicizzatore QES. Usare `http_auth` per fornire le credenziali quando è abilitata la sicurezza X-Pack.",
      "Starting from version 3.10, G3W-SUITE ships with the **`qes`** module (QGIS Elasticsearch), an optional component that indexes QGIS layer features into [Elasticsearch](https://www.elastic.co/elasticsearch) to provide fast, full-text search across the published WebGIS projects.": "Dalla versione 3.10, G3W-SUITE include il modulo **`qes`** (QGIS Elasticsearch), un componente facoltativo che indicizza gli elementi dei layer QGIS in [Elasticsearch](https://www.elastic.co/elasticsearch) per offrire ricerche full-text rapide nei progetti WebGIS pubblicati.",
      "The `qes_indexer` management command performs a full indexing of one or more QGIS projects for every user that has permission to access them:": "Il comando di gestione `qes_indexer` esegue un'indicizzazione completa di uno o più progetti QGIS per ogni utente autorizzato ad accedervi:",
      "The endpoint honours the standard G3W-SUITE project permissions: anonymous users only see results from projects shared with the anonymous user, authenticated users see the subset of features that match their grants.": "L'endpoint rispetta i normali permessi di progetto di G3W-SUITE: gli utenti anonimi visualizzano solo i risultati dei progetti condivisi con l'utente anonimo, mentre gli utenti autenticati vedono gli elementi corrispondenti alle autorizzazioni assegnate.",
      "The following Python packages (already declared in the g3w-admin `requirements.txt`):": "I seguenti pacchetti Python (già dichiarati in `requirements.txt` di g3w-admin):",
      "The G3W-SUITE container reaches it through the internal Docker network at `http://elasticsearch:9200`.": "Il container G3W-SUITE lo raggiunge tramite la rete Docker interna all'indirizzo `http://elasticsearch:9200`.",
      "The module exposes a per-project search endpoint backed by `QesSearchAPIView`. Issue a `GET` request to the project search URL with a `q` query parameter, for example:": "Il modulo espone un endpoint di ricerca per progetto basato su `QesSearchAPIView`. Inviare una richiesta `GET` all'URL di ricerca del progetto con un parametro di query `q`, ad esempio:",
      "The module is part of the [g3w-admin](https://github.com/g3w-suite/g3w-admin) codebase (`g3w-admin/qes/`) and is activated by adding `qes` to the `G3WADMIN_LOCAL_MORE_APPS` list in `local_settings.py`.": "Il modulo fa parte del codice di [g3w-admin](https://github.com/g3w-suite/g3w-admin) (`g3w-admin/qes/`) e si attiva aggiungendo `qes` all'elenco `G3WADMIN_LOCAL_MORE_APPS` in `local_settings.py`.",
      "The official `docker-compose.ltr.yml` / `docker-compose.latest.yml` files in [g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker) include an `elasticsearch` service ready to use:": "I file ufficiali `docker-compose.ltr.yml` / `docker-compose.latest.yml` in [g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker) includono un servizio `elasticsearch` pronto all'uso:",
      "The response is a JSON list of hits. Each hit contains:": "La risposta è un elenco JSON di risultati. Ciascun risultato contiene:",
      "This requires the Huey consumer to be running (see the *consumer* Docker compose recipe in [docker.md](docker.md)).": "È necessario che il consumer Huey sia in esecuzione (vedere la configurazione Docker Compose del *consumer* in [docker.md](docker.md)).",
      "Troubleshooting": "Risoluzione dei problemi",
      "When `QES_INDEXING_PROJECT = True`, G3W-SUITE listens to project save / delete and to editing commits on vector layers and updates the corresponding documents automatically. No manual action is required after the initial indexing.": "Quando `QES_INDEXING_PROJECT = True`, G3W-SUITE intercetta il salvataggio e l'eliminazione dei progetti, nonché il commit delle modifiche ai layer vettoriali, e aggiorna automaticamente i documenti corrispondenti. Dopo l'indicizzazione iniziale non è necessario alcun intervento manuale.",
      "When `qes` is listed in `G3WADMIN_LOCAL_MORE_APPS`, G3W-SUITE automatically adds `django_elasticsearch_dsl` to `INSTALLED_APPS`.": "Quando `qes` è incluso in `G3WADMIN_LOCAL_MORE_APPS`, G3W-SUITE aggiunge automaticamente `django_elasticsearch_dsl` a `INSTALLED_APPS`.",
      "When the module is enabled, G3W-SUITE will:": "Quando il modulo è abilitato, G3W-SUITE:"
    }
  }
</script>
