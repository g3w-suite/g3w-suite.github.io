# Components of G3W-SUITE

## Versions and compatibility

This manual follows G3W-ADMIN 3.11.4, which ships with G3W-CLIENT 4.1.5. For Docker deployments, use the `v3.11.x` branch of G3W-SUITE-DOCKER.

[Compare supported versions and their requirements](versions.md).

For technical background, see the generated DeepWiki pages for [G3W-CLIENT](https://deepwiki.com/g3w-suite/g3w-client), [G3W-ADMIN](https://deepwiki.com/g3w-suite/g3w-admin) and [G3W-SUITE-DOCKER](https://deepwiki.com/g3w-suite/g3w-suite-docker). They may describe a different revision; follow this manual for the stable release.

## Technological infrastructure

The publishing system is based on a series of OS tools and software

* **`PostgreSQL/PostGis`**: for the management of application data
* **`PostgreSQL/PostGis` or `SpatiaLite`**: for the management of geographic data
* **`QGIS Server LTR`** as OGC services server
* **`G3W-ADMIN` - the Administration component**: developed in **`Python`** using **`Django`**
* **`G3W-CLIENT` - the map client**: built with **OpenLayers 10** and **Vue 2**
* The main libraries used for the management and the visualization of the geographical part and the interaction with the user are: **`OpenLayer, Boostrap, jQuery, Lodash` and `Vue.js`**.
* **`Gulp.js`** as task runner

```mermaid {{t 'G3W-CLIENT exchanges REST and OGC requests with G3W-ADMIN, which uses PostgreSQL, PostGIS and QGIS Server'}}
flowchart TB
  client["G3W-CLIENT<br/>OpenLayers + Vue.js"]
  admin["G3W-ADMIN<br/>Django"]
  app[("PostgreSQL<br/>{{t 'Application data'}}")]
  geo[("PostgreSQL + PostGIS<br/>{{t 'Geographic data'}}")]
  server["QGIS Server"]
  client <-->|REST API| admin
  client <-->|{{t 'OGC services'}}| admin
  admin <--> app
  admin <--> geo
  admin <-->|OWS proxy| server
  server <--> geo
```

Below is a diagram relating to the standard workflow

```mermaid {{t 'A publisher uploads a QGIS project and sets its permissions; the web client initializes through G3W-ADMIN, which then proxies OGC requests to QGIS Server'}}
sequenceDiagram
  actor Publisher as {{t 'Publisher'}}
  participant Client as G3W-CLIENT
  participant Admin as G3W-ADMIN
  participant Server as QGIS Server
  Publisher->>Admin: {{t 'Upload QGIS project and configure permissions and options'}}
  Note right of Admin: {{t 'Store project and layer information in the database'}}
  Client->>Admin: {{t 'Request initial project configuration'}}
  Admin->>Server: GetProjectSettings
  Server-->>Admin: {{t 'Additional project information'}}
  Admin-->>Client: {{t 'Stored and retrieved project configuration'}}
  Client->>Admin: {{t 'Request OGC service'}}
  Admin->>Server: {{t 'Forward OWS request'}}
  Server-->>Admin: {{t 'OWS response'}}
  Admin-->>Client: {{t 'Forward OWS response'}}
```

## G3W-ADMIN

![G3W-ADMIN administration interface](/img/manual-english-g3wadmin-django-administration.avif)

G3W-ADMIN is the Django server application at the core of G3W-SUITE. It publishes web maps from QGIS projects and provides the administration tools to manage them.

### Publish and administer

Publish QGIS projects through QGIS Server, organize them into cartographic groups, and manage users, groups, permissions and project settings.

### Extend the platform

Optional modules add capabilities such as QGIS Processing integration and authentication through public-sector services.

[View the G3W-ADMIN source repository](https://github.com/g3w-suite/g3w-admin) · [Read the administration guide](/docs/admin-publishing/)

## G3W-CLIENT

![G3W-CLIENT web map interface](/img/manual-english-g3wclient-interface.avif)

G3W-CLIENT is the browser-based map application for exploring and working with data published by G3W-SUITE.

### Explore and work with maps

Use map navigation, search, identify and query tools, print layouts, charts and data tables. When enabled for a project, users can also edit features and related records directly in the browser.

### Adapted to each project

The client uses the QGIS project configuration for layers, forms, styles and map content, and supports responsive use on desktop and mobile devices.

[View the G3W-CLIENT source repository](https://github.com/g3w-suite/g3w-client) · [Read the client guide](/docs/g3wsuite_client/)

## G3W-ADMIN-PROCESSING

![QGIS Processing model builder](/img/site-g3wsuite-processing.avif)

G3W-ADMIN-PROCESSING integrates QGIS Processing models with G3W-SUITE, making selected geoprocessing workflows available through the web client.

### Run processing models

Administrators can upload QGIS `.model3` files and configure them for execution. Depending on the model and deployment, jobs can run synchronously or in batches.

The module is an optional extension and requires a compatible G3W-SUITE installation and QGIS Processing environment.

[View the G3W-ADMIN-PROCESSING source repository](https://github.com/g3w-suite/g3w-admin-processing) · [Read about Processing in the manual](/docs/)

## G3W-SUITE-DOCKER

```mermaid {{t 'G3W-SUITE publication flow: QGIS projects are uploaded to G3W-ADMIN, which uses QGIS Server to serve maps to G3W-CLIENT'}}
flowchart LR
  project["{{t 'QGIS project'}}"] -->|{{t 'Upload and configure'}}| admin["G3W-ADMIN"]
  admin <-->|GetProjectSettings / OWS| server["QGIS Server"]
  admin <-->|REST / OGC| client["G3W-CLIENT"]
```

G3W-SUITE-DOCKER provides a Docker-based deployment stack for running G3W-SUITE and its supporting services.

### Run the platform with containers

The stack brings together the application, QGIS Server, NGINX and PostgreSQL/PostGIS services. It is a starting point for self-hosted deployments; production environments should be configured and maintained for their own operational requirements.

Use the [Quick Start guide](/en/docs/quick-start/) to publish a first project and the [Docker documentation](/docs/docker/) for setup details.

[View the G3W-SUITE-DOCKER source repository](https://github.com/g3w-suite/g3w-suite-docker)

## G3W-ADMIN-PORTAL

![G3W-SUITE public portal](/img/manual-english-g3wsuite-portal-frontend.avif)

G3W-ADMIN-PORTAL is an optional portal for presenting published cartographic groups through a public-facing interface.

### A branded entry point

The frontend can provide a separate landing page for an organization, helping visitors find and open the WebGIS projects made available to them.

It complements the G3W-ADMIN publishing tools and can be adapted to the identity and needs of a deployment.

[View the G3W-ADMIN-PORTAL source repository](https://github.com/g3w-suite/g3w-admin-portal)

## G3W-ADMIN-PDND

![G3W-SUITE login screen](/img/manual-english-socialauth-login-screen.avif)

G3W-ADMIN-PDND is an optional integration for connecting G3W-SUITE to Italy's Public Digital Data Platform (PDND) authentication services.

### Authentication for public services

The integration supports authentication through PDND voucher tokens. It is intended for deployments that need to connect their G3W-SUITE instance with public-sector services.

This component is released under the MIT licence. Check its repository for installation requirements and configuration details.

[View the G3W-ADMIN-PDND source repository](https://github.com/g3w-suite/g3w-admin-pdnd)

## Collaborative editing

![G3W-CLIENT editing tools](/img/manual-english-editing-client-tool.avif)

G3W-SUITE's editing tools let authorized users update geographic features and related records from the web client, using forms and rules configured in QGIS.

### Work together on geographic data

Editing can be enabled for selected layers and user groups. Geometry, attributes and relations can be managed in the browser, while feature locks help prevent conflicting edits by multiple users.

The editing capabilities are maintained in the G3W-ADMIN and G3W-CLIENT projects rather than in a separate plugin repository.

[Read the editing guide](/docs/editing-client-tools/)

## Main contributors
* Walter Lorenzetti - Gis3W ([@wlorenzetti](https://github.com/wlorenzetti))
* Leonardo Lami - Gis3W ([@leolami](https://github.com/leolami/))
* Francesco Boccacci - Gis3W ([@volterra79](https://github.com/volterra79))
* Matteo Tosi - Gis3W ([@raruto](https://github.com/raruto))
* Andrea Antonello - Hidrologys ([@moovida](https://github.com/moovida))
* Alessandro Pasotti - QCooperative ([@elpaso](https://github.com/elpaso))
* Luigi Pirelli - QCooperative ([@luipir](https://github.com/luipir))
* Mazano - Kartoza ([@NyakudyaA](https://github.com/NyakudyaA)) (Dockerization refactoring)
* Tudor Barascu - QTIBIA Engineering/QCooperative ([@tudorbarascu](https://github.com/tudorbarascu))
* Alexander Bruy ([@alexbruy](https://github.com/alexbruy))
* David Mariscal Fernández ([davidxmariscalxfernandez@gmail.com](mailto:davidxmariscalxfernandez@gmail.com))
