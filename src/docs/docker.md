# Docker installation

This repository contains scripts and recipes for deploy of the G3W-SUITE web-gis application with Docker and Docker compose .

## Server sizing

CPU, memory and storage needs depend on the number of users, the complexity of the maps, the data and the enabled services. This guide does not prescribe a universal minimum: test the deployment with representative projects and concurrent users before choosing production capacity.

Monitor container CPU and memory usage with `docker stats`. Check free space on the shared volume with `df -h <shared-volume-path>`; allow room for the database, project data, uploads, tile cache and backups.

For a cloud deployment, choose a Linux host that supports the required Docker images and Docker Compose. Use persistent storage, plan backups and provide a domain and HTTPS for public access.

## Deploy

Follow steps to deploy G3W-SUITE on a Ubuntu Server (20.04)

Clone the stable Docker branch and enter its directory:

```bash
git clone --branch v3.11.x https://github.com/g3w-suite/g3w-suite-docker.git
cd g3w-suite-docker
```

### Configuration 

Create a file `.env` (or copy `.env.example` and rename it in `.env`) and place it in the main directory, the file
will contain the database credentials (change `<your password>`) and other settings:

```bash
# External hostname, for docker internal network aliases
WEBGIS_PUBLIC_HOSTNAME=demo.g3wsuite.it

# This volume is persistent and mounted by all
# containers as /shared-volume
WEBGIS_DOCKER_SHARED_VOLUME=./shared-volume

# Super User account
G3WSUITE_ADMIN_USERNAME=admin
G3WSUITE_ADMIN_PASSWORD=<your_password>

# DB setup
G3WSUITE_POSTGRES_USER_LOCAL=g3wsuite
G3WSUITE_POSTGRES_PASS=<your_password>
G3WSUITE_POSTGRES_DBNAME=g3wsuite
G3WSUITE_POSTGRES_HOST=postgis
G3WSUITE_POSTGRES_PORT=5432

PGSERVICEFILE=/pg_service/pg_service.conf
```

Description of other *environment variables* that can be used, are available on [Docker environment variables](docker_env)

### Run

```bash
docker compose -f docker-compose-consumer.yml up -d
```

If all went well, G3W-SUITE run on http://localhost:8080

![Login Page](/img/installation-english-login-page.avif)

## G3W-SUITE with consumer image
The consumer Compose file starts the Huey worker for background processing and passes the initial administrator password to the application. In the stable branch, `docker-compose.yml` passes `G3WSUITE_ADMIN_PASS` instead of `G3WSUITE_ADMIN_PASSWORD`; correct that entry before using it for a new installation.

## Builds

Docker compose will download images from docker hub (https://hub.docker.com/u/g3wsuite), 
but is also possible build main image of G3W-SUITE and other docker-compose images. 

#### G3W-SUITE

The main suite docker image can be built with:

```bash
docker build --build-arg G3W_SUITE_BRANCH=v.3.11.x -f Dockerfile.g3wsuite.dockerfile -t g3wsuite/g3w-suite:local-v3.11 .
```

The build argument selects the stable admin branch. Without it, the setup script clones `dev`, even when using the stable Docker checkout. The Dockerfile uses the `g3wsuite/g3w-suite-deps-ltr:v3.11.x` base image.

To run a locally built image, change the image tag in the selected Compose file for both the application and consumer services.

#### Postgis

The stable Compose files use `kartoza/postgis:16-3.4`.

## Setups

### PG_SERVICE

To use of PostgreSql Service, put your service setups into `./secrets/pg_service.conf`,
the conf file will be mounted into docker container at runtime to PGSERVICEFILE path position.

### HTTPS additional setup

For HTTPS, configure the hostname in `.env` and `config/nginx/nginx.conf`, including the administrator email in the latter. Ensure the domain resolves to the server and HTTP port 80 reaches the Nginx port 8080 for the ACME challenge; the provided Compose file publishes 8080, not 80.

With the HTTP configuration running, obtain a certificate before switching the includes in `config/nginx/nginx.conf` from `django` to `django_ssl` and restarting the selected stack. The repository's `run_certbot.sh` invokes an interactive container and recreates the default Compose stack, not the consumer stack; adapt and test certificate issuance and renewal for your deployment rather than assuming it works unattended in cron.


### Volumes

Data, projects, uploads and the database are stored in a shared mounted volume `shared-volume`, the volume should be on a persistent storage device and a backup
policy must be enforced.

The stable `.env.example` uses `./shared-volume`. Set `WEBGIS_DOCKER_SHARED_VOLUME` in `.env` to a persistent location suitable for production.

### First time setup

Set a strong administrator password in `.env` before starting a new installation. The `.env.example` file contains example credentials that must be changed.

Sign in to the administration panel with `G3WSUITE_ADMIN_USERNAME` and `G3WSUITE_ADMIN_PASSWORD`. Setup runs only once per shared volume and sets passwords on existing users as well; use a fresh database and volume for a new installation. After initialization, change passwords in the administration interface, not by editing `.env`.

### Caching

Tile cache can be configured and cleared per-layer through the webgis admin panel and lasts forever until it is disabled or cleared.

> Tip: enable cache on linestring and polygon layers.

### Editing

Editing module is active by default, to avoid simultaneous feature editing by two or more users, the editing module works with a feature lock system.
This locking system can remain active if users do not exit the editing state correctly, to avoid this it is advisable to activate a cron job on host machine that checks the features that have been locked for more than 4 hours and frees them:

```
0 * * * * cd /path/to/g3w-suite-docker && docker compose -f docker-compose-consumer.yml exec -T g3w-suite python3 /code/g3w-admin/manage.py check_features_locked
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

PostgreSQL runs in a Docker container. From the Docker checkout, connect as the configured database user:

```bash
docker compose -f docker-compose-consumer.yml exec postgis sh -c 'psql -U "$POSTGRES_USER" -d "${POSTGRES_DBNAME%%,*}"'
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
    "![Login Page](/img/installation-english-login-page.avif)": "![Pagina di accesso](/img/installation-english-login-page.avif)",
    "A custom CSS is added to the pages, the file is located in `config/g3w-suite/overrides/static/style.css` and can be modified directly, changes are effective immediately.": "Alle pagine viene aggiunto un CSS personalizzato; il file si trova in `config/g3w-suite/overrides/static/style.css` e può essere modificato direttamente. Le modifiche sono applicate immediatamente.",
    "Become postgres user": "Passare all'utente postgres",
    "Builds": "Build",
    "CPU, memory and storage needs depend on the number of users, the complexity of the maps, the data and the enabled services. This guide does not prescribe a universal minimum: test the deployment with representative projects and concurrent users before choosing production capacity.": "Le esigenze di CPU, memoria e archiviazione dipendono dal numero di utenti, dalla complessità delle mappe, dai dati e dai servizi attivi. Questa guida non prescrive un minimo universale: prova l'installazione con progetti rappresentativi e utenti simultanei prima di scegliere le risorse per la produzione.",
    "Caching": "Cache",
    "Check the container name": "Verificare il nome del container",
    "Clone the stable Docker branch and enter its directory:": "Clona il branch Docker stabile e accedi alla sua directory:",
    "Configuration": "Configurazione",
    "Connect to postgis": "Connettersi a PostGIS",
    "Contributors": "Collaboratori",
    "Create a file `.env` (or copy `.env.example` and rename it in `.env`) and place it in the main directory, the file": "Crea un file `.env` (oppure copia `.env.example` e rinominalo `.env`) e inseriscilo nella directory principale; il file",
    "Currently, the volume is mounted in `/tmp/shared-volume-g3wsuite-dev`. In production": "Attualmente il volume è montato in `/tmp/shared-volume-g3wsuite-dev`. Negli ambienti di produzione",
    "Data, projects, uploads and the database are stored in a shared mounted volume `shared-volume`, the volume should be on a persistent storage device and a backup": "Dati, progetti, caricamenti e database sono archiviati nel volume condiviso montato `shared-volume`. Il volume deve trovarsi su un dispositivo di archiviazione persistente e deve essere prevista una politica di backup",
    "Deploy": "Distribuzione",
    "Description of other *environment variables* that can be used, are available on [Docker environment variables](docker_env)": "La descrizione delle altre *variabili d'ambiente* utilizzabili è disponibile nella pagina [Variabili d'ambiente di Docker](docker_env).",
    "Docker compose will download images from docker hub (https://hub.docker.com/u/g3wsuite),": "Docker Compose scarica immagini da Docker Hub (https://hub.docker.com/u/g3wsuite),",
    "Docker installation": "Installazione con Docker",
    "Editing": "Modifica",
    "Editing module is active by default, to avoid simultaneous feature editing by two or more users, the editing module works with a feature lock system.": "Il modulo di modifica è attivo per impostazione predefinita. Per evitare che due o più utenti modifichino contemporaneamente la stessa entità, il modulo utilizza un sistema di blocco delle entità.",
    "First time setup": "Configurazione iniziale",
    "Follow steps to deploy G3W-SUITE on a Ubuntu Server (20.04)": "Segui questi passaggi per distribuire G3W-SUITE su Ubuntu Server (20.04).",
    "For HTTPS, configure the hostname in `.env` and `config/nginx/nginx.conf`, including the administrator email in the latter. Ensure the domain resolves to the server and HTTP port 80 reaches the Nginx port 8080 for the ACME challenge; the provided Compose file publishes 8080, not 80.": "Per HTTPS, configura il nome host in `.env` e `config/nginx/nginx.conf`, indicando nel secondo anche l'email dell'amministratore. Verifica che il dominio punti al server e che la porta HTTP 80 raggiunga la porta 8080 di Nginx per la verifica ACME; il file Compose fornito pubblica la 8080, non la 80.",
    "For a cloud deployment, choose a Linux host that supports the required Docker images and Docker Compose. Use persistent storage, plan backups and provide a domain and HTTPS for public access.": "Per una distribuzione cloud, scegli un server Linux che supporti le immagini Docker necessarie e Docker Compose. Usa archiviazione persistente, pianifica i backup e prevedi un dominio e HTTPS per l'accesso pubblico.",
    "Front-end App": "Applicazione front-end",
    "G3W-SUITE use `huey` for bach processing (https://github.com/coleifer/huey), so if you want to use it,": "G3W-SUITE usa `huey` per l'elaborazione in background (https://github.com/coleifer/huey); se vuoi utilizzarlo,",
    "G3W-SUITE with consumer image": "G3W-SUITE con immagine consumer",
    "General rules (in no particular order: they are all mandatory):": "Regole generali (l'ordine non è significativo; sono tutte obbligatorie):",
    "HTTPS additional setup": "Configurazione aggiuntiva di HTTPS",
    "If all went well, G3W-SUITE run on http://localhost:8080": "Se tutto è andato a buon fine, G3W-SUITE è disponibile all'indirizzo http://localhost:8080",
    "In the above example the container name is `g3wsuitedocker_postgis_1`": "Nell'esempio precedente, il nome del container è `g3wsuitedocker_postgis_1`.",
    "Log into the container": "Accedere al container",
    "Monitor container CPU and memory usage with `docker stats`. Check free space on the shared volume with `df -h <shared-volume-path>`; allow room for the database, project data, uploads, tile cache and backups.": "Monitora l'uso di CPU e memoria dei container con `docker stats`. Controlla lo spazio libero sul volume condiviso con `df -h <shared-volume-path>`; prevedi spazio per il database, i dati dei progetti, i file caricati, la cache delle tile e i backup.",
    "Performances optimization": "Ottimizzazione delle prestazioni",
    "Plese refer to the [Add new stack](https://docs.portainer.io/v/ce-2.9/user/docker/stacks/add) section to learn how to deploy the `docker-compose-consumer.yml` stack with Portainer (>= v2.1.1).": "Consulta la sezione [Aggiungere un nuovo stack](https://docs.portainer.io/v/ce-2.9/user/docker/stacks/add) per scoprire come distribuire lo stack `docker-compose-consumer.yml` con Portainer (>= v2.1.1).",
    "Portainer (https://www.portainer.io) is a docker-based web application used to edit and manage Docker applications in a simple and intuitive way.": "Portainer (https://www.portainer.io) è un'applicazione web basata su Docker che consente di modificare e gestire le applicazioni Docker in modo semplice e intuitivo.",
    "Portainer usage": "Utilizzo di Portainer",
    "Postgis": "PostGIS",
    "Postgis image can be built with:": "L'immagine PostGIS può essere creata con:",
    "PostgreSQL administration": "Amministrazione di PostgreSQL",
    "PostgreSQL runs in a Docker container. From the Docker checkout, connect as the configured database user:": "PostgreSQL è in esecuzione in un container Docker. Dalla copia Docker, connettiti con l'utente configurato per il database:",
    "Run": "Esecuzione",
    "Server sizing": "Dimensionamento del server",
    "Set a strong administrator password in `.env` before starting a new installation. The `.env.example` file contains example credentials that must be changed.": "Imposta una password amministratore robusta in `.env` prima di avviare una nuova installazione. Il file `.env.example` contiene credenziali di esempio da modificare.",
    "Set the environment variable": "Imposta la variabile d'ambiente",
    "Setups": "Configurazioni",
    "Sign in to the administration panel with `G3WSUITE_ADMIN_USERNAME` and `G3WSUITE_ADMIN_PASSWORD`. Setup runs only once per shared volume and sets passwords on existing users as well; use a fresh database and volume for a new installation. After initialization, change passwords in the administration interface, not by editing `.env`.": "Accedi al pannello di amministrazione con `G3WSUITE_ADMIN_USERNAME` e `G3WSUITE_ADMIN_PASSWORD`. La configurazione iniziale viene eseguita una sola volta per volume condiviso e imposta le password anche agli utenti esistenti: per una nuova installazione usa un database e un volume nuovi. Dopo l'inizializzazione, modifica le password nell'interfaccia di amministrazione, non nel file `.env`.",
    "Style customization": "Personalizzazione dello stile",
    "Templates can now be overridden by placing the overrides in the `config/g3w-suite/overrides/templates`, a Docker service restart is required to make the changes effective.": "I template possono essere sostituiti collocando le versioni personalizzate in `config/g3w-suite/overrides/templates`; per applicare le modifiche è necessario riavviare il servizio Docker.",
    "The Docker hub name for this image is `g3wsuite/postgis:11.0-2.5`": "Il nome di questa immagine su Docker Hub è `g3wsuite/postgis:11.0-2.5`.",
    "The build argument selects the stable admin branch. Without it, the setup script clones `dev`, even when using the stable Docker checkout. The Dockerfile uses the `g3wsuite/g3w-suite-deps-ltr:v3.11.x` base image.": "L'argomento di build seleziona il branch stabile di admin. Senza di esso lo script clona `dev`, anche nella copia Docker stabile. Il Dockerfile usa l'immagine base `g3wsuite/g3w-suite-deps-ltr:v3.11.x`.",
    "The consumer Compose file starts the Huey worker for background processing and passes the initial administrator password to the application. In the stable branch, `docker-compose.yml` passes `G3WSUITE_ADMIN_PASS` instead of `G3WSUITE_ADMIN_PASSWORD`; correct that entry before using it for a new installation.": "Il file Compose consumer avvia il worker Huey per le elaborazioni in background e passa all'applicazione la password iniziale dell'amministratore. Nel branch stabile, `docker-compose.yml` passa `G3WSUITE_ADMIN_PASS` invece di `G3WSUITE_ADMIN_PASSWORD`: correggi questa voce prima di usarlo per una nuova installazione.",
    "The image is build from `https://github.com/g3w-suite/g3w-admin.git --branch dev` and from a dependencies base image `Dockerfile.g3wsuite-deps.ltr.dockerfile`, the dependencies image can be built with:": "L'immagine viene creata da `https://github.com/g3w-suite/g3w-admin.git --branch dev` e dall'immagine base delle dipendenze `Dockerfile.g3wsuite-deps.ltr.dockerfile`; l'immagine delle dipendenze può essere creata con:",
    "The logo is also overridden (through `config/g3w-suite/settings_docker.py` which is mounted as a volume), changes to the settings file require the Docker service to be restarted.": "Anche il logo può essere sostituito (tramite `config/g3w-suite/settings_docker.py`, montato come volume); le modifiche al file delle impostazioni richiedono il riavvio del servizio Docker.",
    "The main suite docker image can be built with:": "L'immagine Docker principale della suite può essere creata con:",
    "The stable Compose files use `kartoza/postgis:16-3.4`.": "I file Compose stabili usano `kartoza/postgis:16-3.4`.",
    "The stable `.env.example` uses `./shared-volume`. Set `WEBGIS_DOCKER_SHARED_VOLUME` in `.env` to a persistent location suitable for production.": "Il file `.env.example` stabile usa `./shared-volume`. Imposta `WEBGIS_DOCKER_SHARED_VOLUME` in `.env` su un percorso persistente adatto alla produzione.",
    "This can be done by modifying the `.env` file.": "È possibile farlo modificando il file `.env`.",
    "This locking system can remain active if users do not exit the editing state correctly, to avoid this it is advisable to activate a cron job on host machine that checks the features that have been locked for more than 4 hours and frees them:": "Questo blocco può rimanere attivo se gli utenti non escono correttamente dalla modalità di modifica. Per evitarlo, è consigliabile attivare sul computer host un cron job che individui le entità bloccate da oltre 4 ore e le sblocchi:",
    "This repository contains scripts and recipes for deploy of the G3W-SUITE web-gis application with Docker and Docker compose .": "Questo repository contiene script e istruzioni per distribuire l'applicazione WebGIS G3W-SUITE con Docker e Docker Compose.",
    "This will set the front end app as the default app": "In questo modo l'applicazione front-end diventa quella predefinita.",
    "Tile cache can be configured and cleared per-layer through the webgis admin panel and lasts forever until it is disabled or cleared.": "La cache delle tile può essere configurata e svuotata per singolo layer dal pannello di amministrazione del WebGIS e rimane attiva finché non viene disabilitata o svuotata.",
    "Tip: enable cache on linestring and polygon layers.": "Suggerimento: attiva la cache sui layer lineari e poligonali.",
    "To active https with LetsEncrypt just follow the following instructions:": "Per attivare HTTPS con Let's Encrypt, segui queste istruzioni:",
    "To run a locally built image, change the image tag in the selected Compose file for both the application and consumer services.": "Per eseguire un'immagine compilata localmente, modifica il tag dell'immagine nel file Compose selezionato sia per il servizio applicativo sia per il consumer.",
    "To use of PostgreSql Service, put your service setups into `./secrets/pg_service.conf`,": "Per utilizzare il servizio PostgreSQL, inserisci le configurazioni nel file `./secrets/pg_service.conf`;",
    "Usually is sufficient make build of main docker image g3wsuite/g3w-suite:dev,": "Di solito è sufficiente creare l'immagine Docker principale g3wsuite/g3w-suite:dev;",
    "Volumes": "Volumi",
    "With the HTTP configuration running, obtain a certificate before switching the includes in `config/nginx/nginx.conf` from `django` to `django_ssl` and restarting the selected stack. The repository's `run_certbot.sh` invokes an interactive container and recreates the default Compose stack, not the consumer stack; adapt and test certificate issuance and renewal for your deployment rather than assuming it works unattended in cron.": "Con la configurazione HTTP attiva, ottieni un certificato prima di sostituire gli include `django` con `django_ssl` in `config/nginx/nginx.conf` e riavviare lo stack selezionato. Il file `run_certbot.sh` del repository avvia un container interattivo e ricrea lo stack Compose predefinito, non quello consumer; adatta e verifica l'emissione e il rinnovo del certificato per la tua distribuzione, senza presumere che funzioni automaticamente con cron.",
    "activate 301 redirect into `config/nginx/django.conf`": "attiva il reindirizzamento 301 in `config/nginx/django.conf`",
    "but is also possible build main image of G3W-SUITE and other docker-compose images.": "ma è anche possibile creare l'immagine principale di G3W-SUITE e le altre immagini Docker Compose.",
    "check the domain name in the `.env` file and in `config/nginx/django_ssl.conf`": "verifica il nome di dominio nel file `.env` e in `config/nginx/django_ssl.conf`",
    "do not turn on by default base-layers XYZ such as (Google base maps)": "non attivare per impostazione predefinita layer di base XYZ come Google Maps",
    "do not use rule-based/categorized rendering on layers with too many categories (example: elec_penwell_public_power), they are unreadable anyway": "non usare una resa basata su regole o categorie per layer con troppe categorie (ad esempio elec_penwell_public_power), perché diventano comunque illeggibili",
    "enable redering simplification for not-point layers, set it to `Distance` `1.2` and check `Enable provider simplification if available`": "attiva la semplificazione della resa per i layer non puntuali, impostala su `Distance` `1.2` e seleziona `Enable provider simplification if available`",
    "environments it is encouraged to change this to a permanent location.": "è consigliabile spostarlo in una posizione permanente.",
    "if you disabled HTTPS, you can move `config/nginx/django_ssl.conf` back to its original location now, and restart the Docker compose to finally enable HTTPS": "se hai disattivato HTTPS, puoi riportare `config/nginx/django_ssl.conf` nella posizione originale e riavviare Docker Compose per riattivare HTTPS",
    "launch `./run_certbot.sh`": "avvia `./run_certbot.sh`",
    "make sure the certs are renewed by adding a cron job with `crontab -e` and add the following line:": "assicurati che i certificati vengano rinnovati aggiungendo un cron job con `crontab -e` e inserisci la riga seguente:",
    "move `config/_nginx/django_ssl.conf` to `config/nginx/django_ssl.conf`": "sposta `config/_nginx/django_ssl.conf` in `config/nginx/django_ssl.conf`",
    "policy must be enforced.": "regolare.",
    "restart compose": "riavvia Compose",
    "run: `docker pull certbot/certbot`": "esegui: `docker pull certbot/certbot`",
    "set scale-dependent visibility for the entire layer or for some filtered features (example: show only major roads until at scale 1:1E+6)": "imposta la visibilità dipendente dalla scala per l'intero layer o per alcune entità filtrate (ad esempio, mostra solo le strade principali fino alla scala 1:1E+6)",
    "start the project with only a few layers turned on by default": "avvia il progetto con pochi layer attivi per impostazione predefinita",
    "the build of dependence image g3wsuite/g3w-suite-deps-ltr:dev is done to update last QGIS LTR version.": "l'immagine delle dipendenze g3wsuite/g3w-suite-deps-ltr:dev serve ad aggiornare all'ultima versione LTR di QGIS.",
    "the conf file will be mounted into docker container at runtime to PGSERVICEFILE path position.": "all'avvio il file di configurazione verrà montato nel container Docker nel percorso indicato da PGSERVICEFILE.",
    "use `docker-compose-consumer.yml` file on deploy:": "usa il file `docker-compose-consumer.yml` durante la distribuzione:",
    "when using rule-based/categorized classification or scale-dependent visibility create indexes on the column(s) involved in the rule expression (example: \"create index idx_elec_penwell_ious on elec_penwell_ious (owner);\" )": "quando usi una classificazione basata su regole/categorie o una visibilità dipendente dalla scala, crea indici sulle colonne coinvolte nell'espressione della regola (ad esempio: \"create index idx_elec_penwell_ious on elec_penwell_ious (owner);\" )",
    "will contain the database credentials (change `<your password>`) and other settings:": "conterrà le credenziali del database (sostituisci `<your password>`) e altre impostazioni:"
  }
}
</script>
