# Docker environment variables

Set these environment variables when deploying G3W-SUITE with [Docker](https://github.com/g3w-suite/g3w-suite-docker).

Add them to the deployment `.env` file. Compose must also pass each variable to the service that uses it.

These notes describe the Docker `v3.11.x` branch; its `.env.example` and Compose files are not interchangeable with development-branch configuration.

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
The password used during initial setup. Use `docker-compose-consumer.yml`, which passes this variable to the application. The `v3.11.x` default Compose file passes `G3WSUITE_ADMIN_PASS` instead; change that entry to `G3WSUITE_ADMIN_PASSWORD` before starting a new installation.

## Other not required settings

### Caching system

### `TILESTACHE_CACHE_TOKEN`
A custom unique token to use for internal caching request.
The Docker example settings provide a shared fallback token; set a unique value for each deployment.

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

The Gunicorn configuration is created in the shared volume on first startup and is not overwritten on later starts. The generated file reads these environment variables; review `/shared-volume/gunicorn.conf.py` if it has been customized.

### QGIS server variables

QGIS environment variables can be set as described in the [QGIS Server manual](https://docs.qgis.org/3.44/en/docs/server_manual/config.html#environment-variables); add them to the relevant Compose service.

The following varaible are just set into docker-compose files:

### `PGSERVICEFILE`
Put your pg services into `./secrets/pg_service.conf`, the conf file will be mounted into
docker container at runtime to PGSERVICEFILE path position.

### `QGIS_SERVER_LOG_FILE`

### `QGIS_SERVER_LOG_LEVEL`

### Openrouteservice

The `v3.11.x` example `.env` lists `ORS_API_ENDPOINT`, `ORS_API_KEY`, `ORS_MAX_RANGES` and `ORS_MAX_LOCATIONS`, but the Compose files pass differently named endpoint and key variables and the mounted Docker settings do not read them. Configure the corresponding Django settings in `config/g3w-suite/settings_docker.py` instead; see [Openrouteservice settings](settings.md#openrouteservice-settings).

### Frontend module

### `FRONTEND`
If `true`, the startup script activates the bundled `frontend` module in the mounted settings on first activation.

<script type="application/json" data-i18n>
{
  "it": {
    "A custom unique token to use for internal caching request.": "Token univoco personalizzato da usare per le richieste interne alla cache.",
    "Add them to the deployment `.env` file. Compose must also pass each variable to the service that uses it.": "Aggiungile al file `.env` della distribuzione. Compose deve anche passare ogni variabile al servizio che la utilizza.",
    "Caching system": "Sistema di cache",
    "Dafault value is: `/shared-volume/tile_cache/`.": "Il valore predefinito è: `/shared-volume/tile_cache/`.",
    "Database connections parameters": "Parametri di connessione al database",
    "Database host value connect to.": "Valore dell'host del database a cui connettersi.",
    "Database name of G3W-SUITE database connect to.": "Nome del database G3W-SUITE a cui connettersi.",
    "Database port value connect to.": "Valore della porta del database a cui connettersi.",
    "Database username password to connect to G3W-SUITE database.": "Password dell'utente per connettersi al database G3W-SUITE.",
    "Database username to connect to G3W-SUITE database.": "Nome utente per connettersi al database G3W-SUITE.",
    "Default value is: `256`.": "Il valore predefinito è: `256`.",
    "Default: 'https://api.openrouteservice.org/v2'.": "Predefinito: 'https://api.openrouteservice.org/v2'.",
    "Default: 2.": "Predefinito: 2.",
    "Default: 6.": "Predefinito: 6.",
    "Default: `200`.": "Predefinito: `200`.",
    "Default: `8`.": "Predefinito: `8`.",
    "Docker environment variables": "Variabili d'ambiente di Docker",
    "Frontend module": "Modulo frontend",
    "G3W-SUITE with docker is deployed with Gunicorn.": "G3W-SUITE viene distribuito con Docker utilizzando Gunicorn.",
    "Gunicorn settings": "Impostazioni di Gunicorn",
    "If `true`, the startup script activates the bundled `frontend` module in the mounted settings on first activation.": "Se impostato su `true`, lo script di avvio attiva il modulo `frontend` incluso nelle impostazioni montate alla prima attivazione.",
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
    "Put your pg services into `./secrets/pg_service.conf`, the conf file will be mounted into": "Inserisci i servizi pg nel file `./secrets/pg_service.conf`; il file verrà montato nel",
    "QGIS environment variables can be set as described in the [QGIS Server manual](https://docs.qgis.org/3.44/en/docs/server_manual/config.html#environment-variables); add them to the relevant Compose service.": "Le variabili d'ambiente QGIS si possono impostare come descritto nel [manuale di QGIS Server](https://docs.qgis.org/3.44/en/docs/server_manual/config.html#environment-variables); aggiungile al servizio Compose interessato.",
    "QGIS server variables": "Variabili del server QGIS",
    "Requirements variables": "Variabili obbligatorie",
    "Set these environment variables when deploying G3W-SUITE with [Docker](https://github.com/g3w-suite/g3w-suite-docker).": "Imposta queste variabili d'ambiente per distribuire G3W-SUITE con [Docker](https://github.com/g3w-suite/g3w-suite-docker).",
    "The Docker example settings provide a shared fallback token; set a unique value for each deployment.": "Le impostazioni Docker di esempio forniscono un token di ripiego condiviso; impostane uno univoco per ogni distribuzione.",
    "The Gunicorn configuration is created in the shared volume on first startup and is not overwritten on later starts. The generated file reads these environment variables; review `/shared-volume/gunicorn.conf.py` if it has been customized.": "La configurazione di Gunicorn viene creata nel volume condiviso al primo avvio e non viene sovrascritta agli avvii successivi. Il file generato legge queste variabili d'ambiente; controlla `/shared-volume/gunicorn.conf.py` se è stato personalizzato.",
    "The `v3.11.x` example `.env` lists `ORS_API_ENDPOINT`, `ORS_API_KEY`, `ORS_MAX_RANGES` and `ORS_MAX_LOCATIONS`, but the Compose files pass differently named endpoint and key variables and the mounted Docker settings do not read them. Configure the corresponding Django settings in `config/g3w-suite/settings_docker.py` instead; see [Openrouteservice settings](settings.md#openrouteservice-settings).": "Il file `.env` di esempio `v3.11.x` elenca `ORS_API_ENDPOINT`, `ORS_API_KEY`, `ORS_MAX_RANGES` e `ORS_MAX_LOCATIONS`, ma i file Compose passano variabili con nomi diversi per endpoint e chiave e le impostazioni Docker montate non le leggono. Configura invece le impostazioni Django corrispondenti in `config/g3w-suite/settings_docker.py`; consulta [Impostazioni Openrouteservice](settings.md#openrouteservice-settings).",
    "The domain to which the application will respond.": "Il dominio a cui risponderà l'applicazione.",
    "The follow variables re for set the connection to G3W-SUITE administration database.": "Le seguenti variabili servono a configurare la connessione al database di amministrazione di G3W-SUITE.",
    "The following varaible are just set into docker-compose files:": "Le seguenti variabili sono impostate solo nei file docker-compose:",
    "The login used for the superuser account. Only works when setup a new environment.": "Credenziali di accesso per l'account superutente. Funziona solo durante la configurazione di un nuovo ambiente.",
    "The password used during initial setup. Use `docker-compose-consumer.yml`, which passes this variable to the application. The `v3.11.x` default Compose file passes `G3WSUITE_ADMIN_PASS` instead; change that entry to `G3WSUITE_ADMIN_PASSWORD` before starting a new installation.": "Password usata durante la configurazione iniziale. Usa `docker-compose-consumer.yml`, che passa questa variabile all'applicazione. Il file Compose predefinito `v3.11.x` passa invece `G3WSUITE_ADMIN_PASS`: sostituiscila con `G3WSUITE_ADMIN_PASSWORD` prima di avviare una nuova installazione.",
    "The path on which the docker permanent volume will be mounted with the application data inside.": "Percorso in cui verrà montato il volume Docker permanente contenente i dati dell'applicazione.",
    "These notes describe the Docker `v3.11.x` branch; its `.env.example` and Compose files are not interchangeable with development-branch configuration.": "Queste note riguardano il branch Docker `v3.11.x`; il suo `.env.example` e i suoi file Compose non sono intercambiabili con la configurazione del branch di sviluppo.",
    "Thi is used to compensate the python/gunicorn memory leaks.": "Serve a compensare le perdite di memoria di Python/Gunicorn.",
    "Tile width/height tile map dimension.": "Dimensioni in larghezza/altezza delle tile della mappa.",
    "Usually then number of workers is equal to number of processor x 2.": "Di solito il numero di worker corrisponde al numero di processori moltiplicato per 2.",
    "docker container at runtime to PGSERVICEFILE path position.": "container Docker all'avvio, nel percorso indicato da PGSERVICEFILE."
  }
}
</script>
