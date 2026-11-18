---
title: Docker environment variables
description: Set these environment variables when deploying G3W-SUITE with Docker.
---

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
The password used during initial setup. If `docker-compose.yml` passes `G3WSUITE_ADMIN_PASS` instead, correct `services.g3w-suite.environment` as shown in the [installation guide](docker-installation.md#run). The optional Huey stack already passes `G3WSUITE_ADMIN_PASSWORD`.

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
