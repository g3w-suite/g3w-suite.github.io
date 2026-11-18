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

## <span id="g3w-client-plugin-editing"></span>Collaborative editing

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

<script type="application/json" data-i18n>
{
  "it": {
    "**`G3W-ADMIN` - the Administration component**: developed in **`Python`** using **`Django`**": "**`G3W-ADMIN` - il componente di amministrazione**: sviluppato in **`Python`** con **`Django`**",
    "**`G3W-CLIENT` - the map client**: built with **OpenLayers 10** and **Vue 2**": "**`G3W-CLIENT` - il client cartografico**: realizzato con **OpenLayers 10** e **Vue 2**",
    "**`Gulp.js`** as task runner": "**`Gulp.js`** come task runner",
    "**`PostgreSQL/PostGis` or `SpatiaLite`**: for the management of geographic data": "**`PostgreSQL/PostGIS` o `SpatiaLite`**: per la gestione dei dati geografici",
    "**`PostgreSQL/PostGis`**: for the management of application data": "**`PostgreSQL/PostGIS`**: per la gestione dei dati applicativi",
    "**`QGIS Server LTR`** as OGC services server": "**`QGIS Server LTR`** come server per i servizi OGC",
    "A branded entry point": "Un portale personalizzato",
    "A publisher uploads a QGIS project and sets its permissions; the web client initializes through G3W-ADMIN, which then proxies OGC requests to QGIS Server": "Chi pubblica carica un progetto QGIS e ne imposta i permessi; il client web si inizializza tramite G3W-ADMIN, che poi inoltra le richieste OGC a QGIS Server",
    "Adapted to each project": "Adattato a ogni progetto",
    "Additional project information": "Informazioni aggiuntive sul progetto",
    "Administrators can upload QGIS `.model3` files and configure them for execution. Depending on the model and deployment, jobs can run synchronously or in batches.": "Gli amministratori possono caricare file QGIS `.model3` e configurarli per l'esecuzione. In base al modello e alla distribuzione, i processi possono essere eseguiti in modo sincrono o in batch.",
    "Application data": "Dati applicativi",
    "Authentication for public services": "Autenticazione per i servizi pubblici",
    "Below is a diagram relating to the standard workflow": "Di seguito è riportato un diagramma del flusso di lavoro standard.",
    "Collaborative editing": "Modifica collaborativa",
    "Compare supported versions and their requirements": "Confronta le versioni supportate e i relativi requisiti",
    "Components of G3W-SUITE": "Componenti di G3W-SUITE",
    "Editing can be enabled for selected layers and user groups. Geometry, attributes and relations can be managed in the browser, while feature locks help prevent conflicting edits by multiple users.": "La modifica può essere abilitata per layer e gruppi di utenti selezionati. Geometrie, attributi e relazioni possono essere gestiti nel browser; il blocco delle feature aiuta a prevenire modifiche in conflitto tra più utenti.",
    "Explore and work with maps": "Esplora e lavora con le mappe",
    "Extend the platform": "Estendi la piattaforma",
    "For technical background, see the generated DeepWiki pages for [G3W-CLIENT](https://deepwiki.com/g3w-suite/g3w-client), [G3W-ADMIN](https://deepwiki.com/g3w-suite/g3w-admin) and [G3W-SUITE-DOCKER](https://deepwiki.com/g3w-suite/g3w-suite-docker). They may describe a different revision; follow this manual for the stable release.": "Per approfondire, consulta le pagine generate da DeepWiki per [G3W-CLIENT](https://deepwiki.com/g3w-suite/g3w-client), [G3W-ADMIN](https://deepwiki.com/g3w-suite/g3w-admin) e [G3W-SUITE-DOCKER](https://deepwiki.com/g3w-suite/g3w-suite-docker). Potrebbero descrivere una revisione diversa: per la versione stabile fai riferimento a questo manuale.",
    "Forward OWS request": "Inoltra la richiesta OWS",
    "Forward OWS response": "Inoltra la risposta OWS",
    "G3W-ADMIN administration interface": "Interfaccia di amministrazione G3W-ADMIN",
    "G3W-ADMIN is the Django server application at the core of G3W-SUITE. It publishes web maps from QGIS projects and provides the administration tools to manage them.": "G3W-ADMIN è l'applicazione server Django alla base di G3W-SUITE. Pubblica mappe web dai progetti QGIS e offre gli strumenti di amministrazione per gestirle.",
    "G3W-ADMIN-PDND is an optional integration for connecting G3W-SUITE to Italy's Public Digital Data Platform (PDND) authentication services.": "G3W-ADMIN-PDND è un'integrazione opzionale per collegare G3W-SUITE ai servizi di autenticazione della Piattaforma Digitale Nazionale Dati (PDND).",
    "G3W-ADMIN-PORTAL is an optional portal for presenting published cartographic groups through a public-facing interface.": "G3W-ADMIN-PORTAL è un portale opzionale che presenta i gruppi cartografici pubblicati attraverso un'interfaccia rivolta al pubblico.",
    "G3W-ADMIN-PROCESSING integrates QGIS Processing models with G3W-SUITE, making selected geoprocessing workflows available through the web client.": "G3W-ADMIN-PROCESSING integra i modelli QGIS Processing con G3W-SUITE e rende disponibili determinati flussi di geoprocessing tramite il client web.",
    "G3W-CLIENT editing tools": "Strumenti di modifica di G3W-CLIENT",
    "G3W-CLIENT exchanges REST and OGC requests with G3W-ADMIN, which uses PostgreSQL, PostGIS and QGIS Server": "G3W-CLIENT scambia richieste REST e OGC con G3W-ADMIN, che usa PostgreSQL, PostGIS e QGIS Server",
    "G3W-CLIENT is the browser-based map application for exploring and working with data published by G3W-SUITE.": "G3W-CLIENT è l'applicazione cartografica basata su browser per esplorare e utilizzare i dati pubblicati da G3W-SUITE.",
    "G3W-CLIENT web map interface": "Interfaccia cartografica web di G3W-CLIENT",
    "G3W-SUITE login screen": "Schermata di accesso a G3W-SUITE",
    "G3W-SUITE public portal": "Portale pubblico G3W-SUITE",
    "G3W-SUITE publication flow: QGIS projects are uploaded to G3W-ADMIN, which uses QGIS Server to serve maps to G3W-CLIENT": "Flusso di pubblicazione di G3W-SUITE: i progetti QGIS vengono caricati in G3W-ADMIN, che usa QGIS Server per fornire le mappe a G3W-CLIENT",
    "G3W-SUITE's editing tools let authorized users update geographic features and related records from the web client, using forms and rules configured in QGIS.": "Gli strumenti di modifica di G3W-SUITE consentono agli utenti autorizzati di aggiornare feature geografiche e record correlati dal client web, utilizzando moduli e regole configurati in QGIS.",
    "G3W-SUITE-DOCKER provides a Docker-based deployment stack for running G3W-SUITE and its supporting services.": "G3W-SUITE-DOCKER fornisce uno stack basato su Docker per eseguire G3W-SUITE e i servizi di supporto.",
    "Geographic data": "Dati geografici",
    "It complements the G3W-ADMIN publishing tools and can be adapted to the identity and needs of a deployment.": "Completa gli strumenti di pubblicazione di G3W-ADMIN e può essere adattato all'identità e alle esigenze di ogni installazione.",
    "Main contributors": "Principali contributori",
    "OGC services": "Servizi OGC",
    "OWS response": "Risposta OWS",
    "Optional modules add capabilities such as QGIS Processing integration and authentication through public-sector services.": "I moduli opzionali aggiungono funzionalità come l'integrazione con QGIS Processing e l'autenticazione tramite servizi della Pubblica Amministrazione.",
    "Publish QGIS projects through QGIS Server, organize them into cartographic groups, and manage users, groups, permissions and project settings.": "Pubblica progetti QGIS tramite QGIS Server, organizzali in gruppi cartografici e gestisci utenti, gruppi, permessi e impostazioni dei progetti.",
    "Publish and administer": "Pubblica e amministra",
    "Publisher": "Chi pubblica",
    "QGIS Processing model builder": "Model Builder di QGIS Processing",
    "QGIS project": "Progetto QGIS",
    "Read about Processing in the manual": "Consulta il manuale su Processing",
    "Read the administration guide": "Consulta la guida di amministrazione",
    "Read the client guide": "Consulta la guida al client",
    "Read the editing guide": "Consulta la guida alla modifica",
    "Request OGC service": "Richiede un servizio OGC",
    "Request initial project configuration": "Richiede la configurazione iniziale del progetto",
    "Run processing models": "Esegui modelli di processing",
    "Run the platform with containers": "Esegui la piattaforma con i container",
    "Store project and layer information in the database": "Memorizza nel database le informazioni sul progetto e sui layer",
    "Stored and retrieved project configuration": "Configurazione del progetto, memorizzata e integrata",
    "Technological infrastructure": "Infrastruttura tecnologica",
    "The client uses the QGIS project configuration for layers, forms, styles and map content, and supports responsive use on desktop and mobile devices.": "Il client utilizza la configurazione del progetto QGIS per layer, moduli, stili e contenuti cartografici, ed è fruibile da desktop e dispositivi mobili.",
    "The editing capabilities are maintained in the G3W-ADMIN and G3W-CLIENT projects rather than in a separate plugin repository.": "Le funzionalità di modifica sono mantenute nei progetti G3W-ADMIN e G3W-CLIENT, non in un repository di plugin separato.",
    "The frontend can provide a separate landing page for an organization, helping visitors find and open the WebGIS projects made available to them.": "Il frontend può offrire a un'organizzazione una pagina di accesso dedicata, aiutando i visitatori a trovare e aprire i progetti WebGIS messi a loro disposizione.",
    "The integration supports authentication through PDND voucher tokens. It is intended for deployments that need to connect their G3W-SUITE instance with public-sector services.": "L'integrazione supporta l'autenticazione tramite voucher token PDND. È pensata per le installazioni che devono collegare G3W-SUITE ai servizi della Pubblica Amministrazione.",
    "The main libraries used for the management and the visualization of the geographical part and the interaction with the user are: **`OpenLayer, Boostrap, jQuery, Lodash` and `Vue.js`**.": "Le principali librerie utilizzate per gestire e visualizzare la componente geografica e per l'interazione con l'utente sono: **`OpenLayers, Bootstrap, jQuery, Lodash` e `Vue.js`**.",
    "The module is an optional extension and requires a compatible G3W-SUITE installation and QGIS Processing environment.": "Il modulo è un'estensione opzionale e richiede un'installazione compatibile di G3W-SUITE e un ambiente QGIS Processing.",
    "The publishing system is based on a series of OS tools and software": "Il sistema di pubblicazione si basa su una serie di strumenti e software per sistemi operativi.",
    "The stack brings together the application, QGIS Server, NGINX and PostgreSQL/PostGIS services. It is a starting point for self-hosted deployments; production environments should be configured and maintained for their own operational requirements.": "Lo stack integra l'applicazione, QGIS Server, NGINX e i servizi PostgreSQL/PostGIS. È un punto di partenza per installazioni autonome; gli ambienti di produzione devono essere configurati e gestiti in base ai propri requisiti operativi.",
    "This component is released under the MIT licence. Check its repository for installation requirements and configuration details.": "Questo componente è rilasciato con licenza MIT. Consulta il repository per i requisiti di installazione e i dettagli di configurazione.",
    "This manual follows G3W-ADMIN 3.11.4, which ships with G3W-CLIENT 4.1.5. For Docker deployments, use the `v3.11.x` branch of G3W-SUITE-DOCKER.": "Questo manuale fa riferimento a G3W-ADMIN 3.11.4, che include G3W-CLIENT 4.1.5. Per le installazioni Docker, usa il ramo `v3.11.x` di G3W-SUITE-DOCKER.",
    "Upload QGIS project and configure permissions and options": "Carica il progetto QGIS e configura permessi e opzioni",
    "Upload and configure": "Carica e configura",
    "Use map navigation, search, identify and query tools, print layouts, charts and data tables. When enabled for a project, users can also edit features and related records directly in the browser.": "Usa gli strumenti di navigazione, ricerca, identificazione e interrogazione, i layout di stampa, i grafici e le tabelle dati. Se abilitata nel progetto, è possibile modificare feature e record correlati direttamente dal browser.",
    "Use the [Quick Start guide](/en/docs/quick-start/) to publish a first project and the [Docker documentation](/docs/docker/) for setup details.": "Segui la [guida rapida](/en/docs/quick-start/) per pubblicare il primo progetto e consulta la [documentazione Docker](/docs/docker/) per i dettagli di configurazione.",
    "Version": "Versione",
    "Versions and compatibility": "Versioni e compatibilit?",
    "View the G3W-ADMIN source repository": "Visualizza il repository sorgente di G3W-ADMIN",
    "View the G3W-ADMIN-PDND source repository": "Visualizza il repository sorgente di G3W-ADMIN-PDND",
    "View the G3W-ADMIN-PORTAL source repository": "Visualizza il repository sorgente di G3W-ADMIN-PORTAL",
    "View the G3W-ADMIN-PROCESSING source repository": "Visualizza il repository sorgente di G3W-ADMIN-PROCESSING",
    "View the G3W-CLIENT source repository": "Visualizza il repository sorgente di G3W-CLIENT",
    "View the G3W-SUITE-DOCKER source repository": "Visualizza il repository sorgente di G3W-SUITE-DOCKER",
    "Work together on geographic data": "Collabora sui dati geografici"
  }
}
</script>
