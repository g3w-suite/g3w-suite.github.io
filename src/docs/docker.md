# Dockerization

This repository contains scripts and recipes for deploy of the G3W-SUITE web-gis application with Docker and Docker compose .

## Deploy

Follow steps to deploy G3W-SUITE on a Ubuntu Server (20.04)

### Configuration 

Create a file `.env` (or copy `.env.example` and rename it in `.env`) and place it in the main directory, the file
will contain the database credentials (change `<your password>`) and other settings:

```bash
# External hostname, for docker internal network aliases
WEBGIS_PUBLIC_HOSTNAME=demo.g3wsuite.it/

# This volume is persistent and mounted by all
# containers as /shared-volume
WEBGIS_DOCKER_SHARED_VOLUME=/tmp/shared-volume-g3w-suite

# Super User account
G3WSUITE_ADMIN_USERNAME=admin
G3WSUITE_ADMIN_PASSWORD=<your_password>

# DB setup
G3WSUITE_POSTGRES_USER_LOCAL=g3wsuite
G3WSUITE_POSTGRES_PASS=<your_password>
G3WSUITE_POSTGRES_DBNAME=g3wsuite
G3WSUITE_POSTGRES_HOST=postgis
G3WSUITE_POSTGRES_PORT=5432
```

Description of other *environment variables* that can be used, are available on [Docker environment variables](docker_env)

### Run

```bash
docker-compose up -d
```

If all went well, G3W-SUITE run on http://localhost:8080

![Login Page](/img/installation-english-login-page.png)

## G3W-SUITE with consumer image
G3W-SUITE use `huey` for bach processing (https://github.com/coleifer/huey), so if you want to use it,
use `docker-compose-consumer.yml` file on deploy:
```bash
docker-compose -f docker-compose-consumer.yml up -d
```

## Builds

Docker compose will download images from docker hub (https://hub.docker.com/u/g3wsuite), 
but is also possible build main image of G3W-SUITE and other docker-compose images. 

#### G3W-SUITE

The main suite docker image can be built with:

```bash
docker build -f Dockerfile.g3wsuite.dockerfile -t g3wsuite/g3w-suite:dev --no-cache .
```

The image is build from `https://github.com/g3w-suite/g3w-admin.git --branch dev` and from a dependencies base image `Dockerfile.g3wsuite-deps.ltr.dockerfile`, the dependencies image can be built with:

```bash
docker build -f Dockerfile.g3wsuite-deps.ltr.dockerfile -t g3wsuite/g3w-suite-deps-ltr:dev --no-cache .
```

Usually is sufficient make build of main docker image g3wsuite/g3w-suite:dev, 
the build of dependence image g3wsuite/g3w-suite-deps-ltr:dev is done to update last QGIS LTR version.

#### Postgis

Postgis image can be built with:

```bash
docker build -f Dockerfile.postgis.dockerfile -t g3wsuite/postgis:11.0-2.5 .
```

The Docker hub name for this image is `g3wsuite/postgis:11.0-2.5`

## Setups

### PG_SERVICE

To use of PostgreSql Service, put your service setups into `./scripts/pg_service.conf file`, 
the conf file will be mounted into docker container at runtime to PGSERVICEFILE path position.

### HTTPS additional setup

To active https with LetsEncrypt just follow the following instructions:

- move `config/_nginx/django_ssl.conf` to `config/nginx/django_ssl.conf`
- check the domain name in the `.env` file and in `config/nginx/django_ssl.conf`
- run: `docker pull certbot/certbot`
- launch `./run_certbot.sh`
- activate 301 redirect into `config/nginx/django.conf`
- restart compose
- make sure the certs are renewed by adding a cron job with `crontab -e` and add the following line:
  `0 3 * * * /<path_to_your_docker_files>/run_certbot.sh`
- if you disabled HTTPS, you can move `config/nginx/django_ssl.conf` back to its original location now, and restart the Docker compose to finally enable HTTPS


### Volumes

Data, projects, uploads and the database are stored in a shared mounted volume `shared-volume`, the volume should be on a persistent storage device and a backup
policy must be enforced.

Currently, the volume is mounted in `/tmp/shared-volume-g3wsuite-dev`. In production
environments it is encouraged to change this to a permanent location.
This can be done by modifying the `.env` file.

### First time setup

- log into the application web administation panel using default credentials (_admin/admin_)
- change the password for the admin user and for any other example user that may be present

### Caching

Tile cache can be configured and cleared per-layer through the webgis admin panel and lasts forever until it is disabled or cleared.

> Tip: enable cache on linestring and polygon layers.

### Editing

Editing module is active by default, to avoid simultaneous feature editing by two or more users, the editing module works with a feature lock system.
This locking system can remain active if users do not exit the editing state correctly, to avoid this it is advisable to activate a cron job on host machine that checks the features that have been locked for more than 4 hours and frees them:

```
0 */1 * * * docker exec -e DISPLAY=:99 g3w-suite-docker_g3w-suite_1 python3 /code/g3w-admin/manage.py check_features_locked
```

## Front-end App

Set the environment variable
```
FRONTEND=True
```
This will set the front end app as the default app

## Style customization

Templates can now be overridden by placing the overrides in the `config/g3w-suite/overrides/templates`, a Docker service restart is required to make the changes effective.

The logo is also overridden (through `config/g3w-suite/settings_docker.py` which is mounted as a volume), changes to the settings file require the Docker service to be restarted.

A custom CSS is added to the pages, the file is located in `config/g3w-suite/overrides/static/style.css` and can be modified directly, changes are effective immediately.

## Performances optimization

General rules (in no particular order: they are all mandatory):

1. set scale-dependent visibility for the entire layer or for some filtered features (example: show only major roads until at scale 1:1E+6)
2. when using rule-based/categorized classification or scale-dependent visibility create indexes on the column(s) involved in the rule expression (example: "create index idx_elec_penwell_ious on elec_penwell_ious (owner);" )
3. start the project with only a few layers turned on by default
4. do not turn on by default base-layers XYZ such as (Google base maps)
5. do not use rule-based/categorized rendering on layers with too many categories (example: elec_penwell_public_power), they are unreadable anyway
6. enable redering simplification for not-point layers, set it to `Distance` `1.2` and check `Enable provider simplification if available`

## PostgreSQL administration

Postgres is running into a Docker container, in order to access the container, you can follow the instruction below:

### Check the container name

```bash
$ docker ps | grep postgis
84ef6a8d23e6        g3wsuite/postgis:11.0-2.5       "/bin/sh -c /docker-…"   2 days ago          Up 2 days           0.0.0.0:5438->5432/tcp           g3wsuitedocker_postgis_1
```

In the above example the container name is `g3wsuitedocker_postgis_1`

### Log into the container

```bash
$ docker exec -it g3wsuitedocker_postgis_1 bash
```

### Become postgres user

```bash
root@84ef6a8d23e6:/# su - postgres
```

### Connect to postgis

```bash
postgres@84ef6a8d23e6:~$ psql
psql (11.2 (Debian 11.2-1.pgdg90+1))
Type "help" for help.

postgres=#
```

## Portainer usage
Portainer (https://www.portainer.io) is a docker-based web application used to edit and manage Docker applications in a simple and intuitive way.

Plese refer to the [Add new stack](https://docs.portainer.io/v/ce-2.9/user/docker/stacks/add) section to learn how to deploy the `docker-compose-consumer.yml` stack with Portainer (>= v2.1.1).

### Contributors
* Walter Lorenzetti - Gis3W ([@wlorenzetti](https://github.com/wlorenzetti))
* Alessandro Pasotti - ItOpen ([@elpaso](https://github.com/elpaso))
* Mazano - Kartoza ([@NyakudyaA](https://github.com/NyakudyaA))
* Matteo Tosi - Gis3w ([@Raruto](https://github.com/Raruto))

<script type="application/json" data-i18n>
{
  "it": {
    "![Login Page](/img/installation-english-login-page.png)": "![Pagina di accesso](/img/installation-english-login-page.png)",
    "A custom CSS is added to the pages, the file is located in `config/g3w-suite/overrides/static/style.css` and can be modified directly, changes are effective immediately.": "Alle pagine viene aggiunto un CSS personalizzato; il file si trova in `config/g3w-suite/overrides/static/style.css` e può essere modificato direttamente. Le modifiche sono applicate immediatamente.",
    "activate 301 redirect into `config/nginx/django.conf`": "attiva il reindirizzamento 301 in `config/nginx/django.conf`",
    "Become postgres user": "Passare all'utente postgres",
    "Builds": "Build",
    "but is also possible build main image of G3W-SUITE and other docker-compose images.": "ma è anche possibile creare l'immagine principale di G3W-SUITE e le altre immagini Docker Compose.",
    "Caching": "Cache",
    "change the password for the admin user and for any other example user that may be present": "modifica la password dell'utente admin e di qualsiasi altro utente di esempio eventualmente presente",
    "Check the container name": "Verificare il nome del container",
    "check the domain name in the `.env` file and in `config/nginx/django_ssl.conf`": "verifica il nome di dominio nel file `.env` e in `config/nginx/django_ssl.conf`",
    "Configuration": "Configurazione",
    "Connect to postgis": "Connettersi a PostGIS",
    "Contributors": "Collaboratori",
    "Create a file `.env` (or copy `.env.example` and rename it in `.env`) and place it in the main directory, the file": "Crea un file `.env` (oppure copia `.env.example` e rinominalo `.env`) e inseriscilo nella directory principale; il file",
    "Currently, the volume is mounted in `/tmp/shared-volume-g3wsuite-dev`. In production": "Attualmente il volume è montato in `/tmp/shared-volume-g3wsuite-dev`. Negli ambienti di produzione",
    "Data, projects, uploads and the database are stored in a shared mounted volume `shared-volume`, the volume should be on a persistent storage device and a backup": "Dati, progetti, caricamenti e database sono archiviati nel volume condiviso montato `shared-volume`. Il volume deve trovarsi su un dispositivo di archiviazione persistente e deve essere prevista una politica di backup",
    "Deploy": "Distribuzione",
    "Description of other *environment variables* that can be used, are available on [Docker environment variables](docker_env)": "La descrizione delle altre *variabili d'ambiente* utilizzabili è disponibile nella pagina [Variabili d'ambiente di Docker](docker_env).",
    "do not turn on by default base-layers XYZ such as (Google base maps)": "non attivare per impostazione predefinita layer di base XYZ come Google Maps",
    "do not use rule-based/categorized rendering on layers with too many categories (example: elec_penwell_public_power), they are unreadable anyway": "non usare una resa basata su regole o categorie per layer con troppe categorie (ad esempio elec_penwell_public_power), perché diventano comunque illeggibili",
    "Docker compose will download images from docker hub (https://hub.docker.com/u/g3wsuite),": "Docker Compose scarica immagini da Docker Hub (https://hub.docker.com/u/g3wsuite),",
    "Dockerization": "Dockerizzazione",
    "Editing": "Modifica",
    "Editing module is active by default, to avoid simultaneous feature editing by two or more users, the editing module works with a feature lock system.": "Il modulo di modifica è attivo per impostazione predefinita. Per evitare che due o più utenti modifichino contemporaneamente la stessa entità, il modulo utilizza un sistema di blocco delle entità.",
    "enable redering simplification for not-point layers, set it to `Distance` `1.2` and check `Enable provider simplification if available`": "attiva la semplificazione della resa per i layer non puntuali, impostala su `Distance` `1.2` e seleziona `Enable provider simplification if available`",
    "environments it is encouraged to change this to a permanent location.": "è consigliabile spostarlo in una posizione permanente.",
    "First time setup": "Configurazione iniziale",
    "Follow steps to deploy G3W-SUITE on a Ubuntu Server (20.04)": "Segui questi passaggi per distribuire G3W-SUITE su Ubuntu Server (20.04).",
    "Front-end App": "Applicazione front-end",
    "G3W-SUITE use `huey` for bach processing (https://github.com/coleifer/huey), so if you want to use it,": "G3W-SUITE usa `huey` per l'elaborazione in background (https://github.com/coleifer/huey); se vuoi utilizzarlo,",
    "G3W-SUITE with consumer image": "G3W-SUITE con immagine consumer",
    "General rules (in no particular order: they are all mandatory):": "Regole generali (l'ordine non è significativo; sono tutte obbligatorie):",
    "HTTPS additional setup": "Configurazione aggiuntiva di HTTPS",
    "If all went well, G3W-SUITE run on http://localhost:8080": "Se tutto è andato a buon fine, G3W-SUITE è disponibile all'indirizzo http://localhost:8080",
    "if you disabled HTTPS, you can move `config/nginx/django_ssl.conf` back to its original location now, and restart the Docker compose to finally enable HTTPS": "se hai disattivato HTTPS, puoi riportare `config/nginx/django_ssl.conf` nella posizione originale e riavviare Docker Compose per riattivare HTTPS",
    "In the above example the container name is `g3wsuitedocker_postgis_1`": "Nell'esempio precedente, il nome del container è `g3wsuitedocker_postgis_1`.",
    "launch `./run_certbot.sh`": "avvia `./run_certbot.sh`",
    "log into the application web administation panel using default credentials (_admin/admin_)": "accedi al pannello web di amministrazione dell'applicazione usando le credenziali predefinite (_admin/admin_)",
    "Log into the container": "Accedere al container",
    "make sure the certs are renewed by adding a cron job with `crontab -e` and add the following line:": "assicurati che i certificati vengano rinnovati aggiungendo un cron job con `crontab -e` e inserisci la riga seguente:",
    "move `config/_nginx/django_ssl.conf` to `config/nginx/django_ssl.conf`": "sposta `config/_nginx/django_ssl.conf` in `config/nginx/django_ssl.conf`",
    "Performances optimization": "Ottimizzazione delle prestazioni",
    "Plese refer to the [Add new stack](https://docs.portainer.io/v/ce-2.9/user/docker/stacks/add) section to learn how to deploy the `docker-compose-consumer.yml` stack with Portainer (>= v2.1.1).": "Consulta la sezione [Aggiungere un nuovo stack](https://docs.portainer.io/v/ce-2.9/user/docker/stacks/add) per scoprire come distribuire lo stack `docker-compose-consumer.yml` con Portainer (>= v2.1.1).",
    "policy must be enforced.": "regolare.",
    "Portainer (https://www.portainer.io) is a docker-based web application used to edit and manage Docker applications in a simple and intuitive way.": "Portainer (https://www.portainer.io) è un'applicazione web basata su Docker che consente di modificare e gestire le applicazioni Docker in modo semplice e intuitivo.",
    "Portainer usage": "Utilizzo di Portainer",
    "Postgis": "PostGIS",
    "Postgis image can be built with:": "L'immagine PostGIS può essere creata con:",
    "Postgres is running into a Docker container, in order to access the container, you can follow the instruction below:": "PostgreSQL è in esecuzione in un container Docker. Per accedere al container, segui le istruzioni riportate di seguito:",
    "PostgreSQL administration": "Amministrazione di PostgreSQL",
    "restart compose": "riavvia Compose",
    "Run": "Esecuzione",
    "run: `docker pull certbot/certbot`": "esegui: `docker pull certbot/certbot`",
    "set scale-dependent visibility for the entire layer or for some filtered features (example: show only major roads until at scale 1:1E+6)": "imposta la visibilità dipendente dalla scala per l'intero layer o per alcune entità filtrate (ad esempio, mostra solo le strade principali fino alla scala 1:1E+6)",
    "Set the environment variable": "Imposta la variabile d'ambiente",
    "Setups": "Configurazioni",
    "start the project with only a few layers turned on by default": "avvia il progetto con pochi layer attivi per impostazione predefinita",
    "Style customization": "Personalizzazione dello stile",
    "Templates can now be overridden by placing the overrides in the `config/g3w-suite/overrides/templates`, a Docker service restart is required to make the changes effective.": "I template possono essere sostituiti collocando le versioni personalizzate in `config/g3w-suite/overrides/templates`; per applicare le modifiche è necessario riavviare il servizio Docker.",
    "the build of dependence image g3wsuite/g3w-suite-deps-ltr:dev is done to update last QGIS LTR version.": "l'immagine delle dipendenze g3wsuite/g3w-suite-deps-ltr:dev serve ad aggiornare all'ultima versione LTR di QGIS.",
    "the conf file will be mounted into docker container at runtime to PGSERVICEFILE path position.": "all'avvio il file di configurazione verrà montato nel container Docker nel percorso indicato da PGSERVICEFILE.",
    "The Docker hub name for this image is `g3wsuite/postgis:11.0-2.5`": "Il nome di questa immagine su Docker Hub è `g3wsuite/postgis:11.0-2.5`.",
    "The image is build from `https://github.com/g3w-suite/g3w-admin.git --branch dev` and from a dependencies base image `Dockerfile.g3wsuite-deps.ltr.dockerfile`, the dependencies image can be built with:": "L'immagine viene creata da `https://github.com/g3w-suite/g3w-admin.git --branch dev` e dall'immagine base delle dipendenze `Dockerfile.g3wsuite-deps.ltr.dockerfile`; l'immagine delle dipendenze può essere creata con:",
    "The logo is also overridden (through `config/g3w-suite/settings_docker.py` which is mounted as a volume), changes to the settings file require the Docker service to be restarted.": "Anche il logo può essere sostituito (tramite `config/g3w-suite/settings_docker.py`, montato come volume); le modifiche al file delle impostazioni richiedono il riavvio del servizio Docker.",
    "The main suite docker image can be built with:": "L'immagine Docker principale della suite può essere creata con:",
    "This can be done by modifying the `.env` file.": "È possibile farlo modificando il file `.env`.",
    "This locking system can remain active if users do not exit the editing state correctly, to avoid this it is advisable to activate a cron job on host machine that checks the features that have been locked for more than 4 hours and frees them:": "Questo blocco può rimanere attivo se gli utenti non escono correttamente dalla modalità di modifica. Per evitarlo, è consigliabile attivare sul computer host un cron job che individui le entità bloccate da oltre 4 ore e le sblocchi:",
    "This repository contains scripts and recipes for deploy of the G3W-SUITE web-gis application with Docker and Docker compose .": "Questo repository contiene script e istruzioni per distribuire l'applicazione WebGIS G3W-SUITE con Docker e Docker Compose.",
    "This will set the front end app as the default app": "In questo modo l'applicazione front-end diventa quella predefinita.",
    "Tile cache can be configured and cleared per-layer through the webgis admin panel and lasts forever until it is disabled or cleared.": "La cache delle tile può essere configurata e svuotata per singolo layer dal pannello di amministrazione del WebGIS e rimane attiva finché non viene disabilitata o svuotata.",
    "Tip: enable cache on linestring and polygon layers.": "Suggerimento: attiva la cache sui layer lineari e poligonali.",
    "To active https with LetsEncrypt just follow the following instructions:": "Per attivare HTTPS con Let's Encrypt, segui queste istruzioni:",
    "To use of PostgreSql Service, put your service setups into `./scripts/pg_service.conf file`,": "Per utilizzare il servizio PostgreSQL, inserisci le configurazioni del servizio nel file `./scripts/pg_service.conf`;",
    "use `docker-compose-consumer.yml` file on deploy:": "usa il file `docker-compose-consumer.yml` durante la distribuzione:",
    "Usually is sufficient make build of main docker image g3wsuite/g3w-suite:dev,": "Di solito è sufficiente creare l'immagine Docker principale g3wsuite/g3w-suite:dev;",
    "Volumes": "Volumi",
    "when using rule-based/categorized classification or scale-dependent visibility create indexes on the column(s) involved in the rule expression (example: \"create index idx_elec_penwell_ious on elec_penwell_ious (owner);\" )": "quando usi una classificazione basata su regole/categorie o una visibilità dipendente dalla scala, crea indici sulle colonne coinvolte nell'espressione della regola (ad esempio: \"create index idx_elec_penwell_ious on elec_penwell_ious (owner);\" )",
    "will contain the database credentials (change `<your password>`) and other settings:": "conterrà le credenziali del database (sostituisci `<your password>`) e altre impostazioni:"
  }
}
</script>
