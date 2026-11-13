# Docker environment variables

The following environment variables used to deploy G3W-SUITE by docker (https://github.com/g3w-suite/g3w-suite-docker).

They must added to `.env` deploy file.

## Requirements variables

### `WEBGIS_PUBLIC_HOSTNAME`

The domain to which the application will respond.

### `WEBGIS_DOCKER_SHARED_VOLUME`

The path on which the docker permanent volume will be mounted with the application data inside.

### Database connections parameters

The follow variables re for set the connection to G3W-SUITE administration database.

### `G3WSUITE_POSTGRES_USER_LOCAL`
Database username to connect to G3W-SUITE database.
If you are going to use docker postgis image, it'll be created on first run of container.

### `G3WSUITE_POSTGRES_PASS`
Database username password to connect to G3W-SUITE database.
If you are going to use docker postgis image, it'll be created on first run of container.

### `G3WSUITE_POSTGRES_DBNAME`
Database name of G3W-SUITE database connect to.
If you are going to use docker postgis image, it'll be created on first run of container.

### `G3WSUITE_POSTGRES_HOST`
Database host value connect to.
If you are going to use docker postgis image, it'll be set to `postgis`

### `G3WSUITE_POSTGRES_PORT`
Database port value connect to.
If you are going to use docker postgis image, it'll be set to `5432`

### `G3WSUITE_ADMIN_USERNAME`
The login used for the superuser account. Only works when setup a new environment.

### `G3WSUITE_ADMIN_PASSWORD`
The password used for the superuser account. It will also be used as default password for new accounts.

## Other not required settings

### Caching system

### `TILESTACHE_CACHE_TOKEN`
A custom unique token to use for internal caching request.
Default value is : `374h5g96831hsgetvmkdel`.

### `TILESTACHE_CACHE_BUFFER_SIZE`
Tile width/height tile map dimension.
Default value is: `256`.

### `G3WSUITE_TILECACHE_PATH`
Internal path to folder to save tiles of map.
Dafault value is: `/shared-volume/tile_cache/`.

### Gunicorn settings

G3W-SUITE with docker is deployed with Gunicorn.

### `G3WSUITE_GUNICORN_NUM_WORKERS`
Number of workers Gunicorn has to start with.
Default: `8`.
Usually then number of workers is equal to number of processor x 2.

### `G3WSUITE_GUNICORN_MAX_REQUESTS`
Number of requests after that gunicorn worker restart.
Default: `200`.
Thi is used to compensate the python/gunicorn memory leaks.

### QGIS server variables

Every QGIS environment variables available as specified on manual
https://docs.qgis.org/3.22/en/docs/server_manual/config.html#environment-variables
can be set, important is remember to add thy to `docker-compose.yml` o  `docker-compose-consument.yml`.

The following varaible are just set into docker-compose files:

### `PGSERVICEFILE`
Put your pg services into `./scripts/pg_service.conf file`, the conf file will be mounted into
docker container at runtime to PGSERVICEFILE path position.

### `QGIS_SERVER_LOG_FILE`

### `QGIS_SERVER_LOG_LEVEL`

### Openrouteservice

### `ORS_API_ENDPOINT`
Openrouteservice API end point.
Default: 'https://api.openrouteservice.org/v2'.

### `ORS_API_KEY`
Openrouteservice API key
Optional, can be blank if the key is not required by the endpoint

### `ORS_MAX_RANGES`
Max number of ranges (it depends on the server configuration)
Default: 6.

### `ORS_MAX_LOCATIONS`
Max number of locations(it depends on the server configuration)
Default: 2.

### Frontend module

### `FRONTEND`
If `true` install and activate G3W-SUITEfrontend module https://github.com/g3w-suite/g3w-admin-frontend

<script type="application/json" data-i18n>
{
  "it": {
    "A custom unique token to use for internal caching request.": "Token univoco personalizzato da usare per le richieste interne alla cache.",
    "Caching system": "Sistema di cache",
    "can be set, important is remember to add thy to `docker-compose.yml` o  `docker-compose-consument.yml`.": "Ricorda di aggiungerle a `docker-compose.yml` o `docker-compose-consument.yml`.",
    "Dafault value is: `/shared-volume/tile_cache/`.": "Il valore predefinito è: `/shared-volume/tile_cache/`.",
    "Database connections parameters": "Parametri di connessione al database",
    "Database host value connect to.": "Valore dell'host del database a cui connettersi.",
    "Database name of G3W-SUITE database connect to.": "Nome del database G3W-SUITE a cui connettersi.",
    "Database port value connect to.": "Valore della porta del database a cui connettersi.",
    "Database username password to connect to G3W-SUITE database.": "Password dell'utente per connettersi al database G3W-SUITE.",
    "Database username to connect to G3W-SUITE database.": "Nome utente per connettersi al database G3W-SUITE.",
    "Default value is : `374h5g96831hsgetvmkdel`.": "Il valore predefinito è: `374h5g96831hsgetvmkdel`.",
    "Default value is: `256`.": "Il valore predefinito è: `256`.",
    "Default: 'https://api.openrouteservice.org/v2'.": "Predefinito: 'https://api.openrouteservice.org/v2'.",
    "Default: 2.": "Predefinito: 2.",
    "Default: 6.": "Predefinito: 6.",
    "Default: `200`.": "Predefinito: `200`.",
    "Default: `8`.": "Predefinito: `8`.",
    "docker container at runtime to PGSERVICEFILE path position.": "container Docker all'avvio, nel percorso indicato da PGSERVICEFILE.",
    "Docker environment variables": "Variabili d'ambiente di Docker",
    "Every QGIS environment variables available as specified on manual": "È possibile impostare tutte le variabili d'ambiente QGIS elencate nel manuale",
    "Frontend module": "Modulo frontend",
    "G3W-SUITE with docker is deployed with Gunicorn.": "G3W-SUITE viene distribuito con Docker utilizzando Gunicorn.",
    "Gunicorn settings": "Impostazioni di Gunicorn",
    "https://docs.qgis.org/3.22/en/docs/server_manual/config.html#environment-variables": "https://docs.qgis.org/3.22/en/docs/server_manual/config.html#environment-variables",
    "If `true` install and activate G3W-SUITEfrontend module https://github.com/g3w-suite/g3w-admin-frontend": "Se impostato su `true`, installa e attiva il modulo G3W-SUITEfrontend https://github.com/g3w-suite/g3w-admin-frontend",
    "If you are going to use docker postgis image, it'll be created on first run of container.": "Se utilizzi l'immagine Docker di PostGIS, verrà creato al primo avvio del container.",
    "If you are going to use docker postgis image, it'll be set to `5432`": "Se utilizzi l'immagine Docker di PostGIS, verrà impostato su `5432`.",
    "If you are going to use docker postgis image, it'll be set to `postgis`": "Se utilizzi l'immagine Docker di PostGIS, verrà impostato su `postgis`.",
    "Internal path to folder to save tiles of map.": "Percorso interno della cartella in cui salvare le tile della mappa.",
    "Max number of locations(it depends on the server configuration)": "Numero massimo di posizioni (dipende dalla configurazione del server)",
    "Max number of ranges (it depends on the server configuration)": "Numero massimo di intervalli (dipende dalla configurazione del server)",
    "Number of requests after that gunicorn worker restart.": "Numero di richieste dopo il quale il worker Gunicorn viene riavviato.",
    "Number of workers Gunicorn has to start with.": "Numero di worker che Gunicorn deve avviare.",
    "Openrouteservice": "Openrouteservice",
    "Openrouteservice API end point.": "Endpoint dell'API Openrouteservice.",
    "Openrouteservice API key": "Chiave API di Openrouteservice",
    "Optional, can be blank if the key is not required by the endpoint": "Facoltativo; può essere lasciato vuoto se l'endpoint non richiede la chiave",
    "Other not required settings": "Altre impostazioni facoltative",
    "Put your pg services into `./scripts/pg_service.conf file`, the conf file will be mounted into": "Inserisci i servizi pg nel file `./scripts/pg_service.conf`; il file verrà montato nel",
    "QGIS server variables": "Variabili del server QGIS",
    "Requirements variables": "Variabili obbligatorie",
    "The domain to which the application will respond.": "Il dominio a cui risponderà l'applicazione.",
    "The follow variables re for set the connection to G3W-SUITE administration database.": "Le seguenti variabili servono a configurare la connessione al database di amministrazione di G3W-SUITE.",
    "The following environment variables used to deploy G3W-SUITE by docker (https://github.com/g3w-suite/g3w-suite-docker).": "Le seguenti variabili d'ambiente vengono utilizzate per distribuire G3W-SUITE con Docker (https://github.com/g3w-suite/g3w-suite-docker).",
    "The following varaible are just set into docker-compose files:": "Le seguenti variabili sono impostate solo nei file docker-compose:",
    "The login used for the superuser account. Only works when setup a new environment.": "Credenziali di accesso per l'account superutente. Funziona solo durante la configurazione di un nuovo ambiente.",
    "The password used for the superuser account. It will also be used as default password for new accounts.": "Password dell'account superutente. Sarà utilizzata anche come password predefinita per i nuovi account.",
    "The path on which the docker permanent volume will be mounted with the application data inside.": "Percorso in cui verrà montato il volume Docker permanente contenente i dati dell'applicazione.",
    "They must added to `.env` deploy file.": "Devono essere aggiunte al file di distribuzione `.env`.",
    "Thi is used to compensate the python/gunicorn memory leaks.": "Serve a compensare le perdite di memoria di Python/Gunicorn.",
    "Tile width/height tile map dimension.": "Dimensioni in larghezza/altezza delle tile della mappa.",
    "Usually then number of workers is equal to number of processor x 2.": "Di solito il numero di worker corrisponde al numero di processori moltiplicato per 2."
  }
}
</script>
