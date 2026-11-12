<main id="main-content">

# {{t 'Open Source Ecosystem'}}

{{t 'G3W-SUITE is made of modular components, all available on'}} [GitHub](https://github.com/g3w-suite) {{t 'under the MPL-2 licence.'}}

- {{t 'web map client'}}
- {{t 'QGIS publishing'}}
- {{t 'online editing'}}
- {{t 'relational editing'}}
- {{t 'multi-user feature-lock'}}
- query builder
- {{t 'joins & relations 1:N / N:M'}}
- DataPlotly
- {{t 'QGIS print layouts'}}
- {{t 'atlases'}}
- {{t 'OSM base maps'}}
- {{t 'geolocation'}}
- {{t 'tablet & smartphone'}}
- {{t 'geographic constraints'}}
- {{t 'alphanumeric constraints'}}
- {{t 'permissions management'}}
- PostgreSQL / PostGIS
- Oracle Spatial
- SQLite / SpatiaLite
- GeoPackage
- Shapefile
- raster
- WMS / WFS
- {{t 'cadastre'}}
- CDU
- {{t 'civic address register'}}
- RNDT / INSPIRE
- PDND
- {{t 'public administration'}}

## **{{t 'Server module - Python / Django'}}** G3W-ADMIN

![{{t 'G3W-ADMIN - administration panel'}}](https://user-images.githubusercontent.com/9614886/189155796-6feff629-b500-4e38-b7c2-d98b53ae7564.png)

{{t 'The server module of G3W-SUITE. Written in Python on Django LTS, it publishes QGIS projects as WebGIS services, preserving styles, forms and relations. Manages users, groups, access permissions and functional modules that can be activated per project.'}}

[g3w-suite/g3w-admin](https://github.com/g3w-suite/g3w-admin "github-button")

## **{{t 'Map client - JavaScript / Vue'}}** G3W-CLIENT

![{{t 'G3W-CLIENT - cartographic viewer interface'}}](https://g3w-suite.readthedocs.io/en/latest/_images/g3wclient_interface.png)

{{t 'The WebGIS cartographic viewer. Written in JavaScript with Vue.js, it connects to the QGIS server and provides map navigation, custom searches, web editing (including offline mode), DataPlotly chart visualisation, print layouts and much more.'}}

[g3w-suite/g3w-client](https://github.com/g3w-suite/g3w-client "github-button")

## **{{t 'Optional module - Python'}}** G3W-ADMIN-PROCESSING

![{{t 'G3W-ADMIN-PROCESSING - workflow schema'}}](https://raw.githubusercontent.com/g3w-suite/g3w-admin-processing/dev/doc/img/qprocessing_schema.png)

{{t 'Integrates QGIS Processing API directly into G3W-SUITE. Upload a'}} `.model3` {{t 'file in the administration panel and your geoprocessing algorithms become immediately available in the web client, with support for both synchronous and asynchronous (batch) execution.'}}

[g3w-suite/g3w-admin-processing](https://github.com/g3w-suite/g3w-admin-processing "github-button")

## **Deployment - Docker** G3W-SUITE-DOCKER

{{t 'The official Docker stack to run G3W-SUITE with a single command. Includes NGINX, PostgreSQL/PostGIS, QGIS Server and all required services, pre-configured and ready to use. This is the recommended installation method for both development and production.'}}

![{{t 'G3W-SUITE-DOCKER - services structure'}}](https://github.com/g3w-suite/g3w-suite-docker/raw/dev/docs/img/docker.png)

[g3w-suite/g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker "github-button")

## **{{t 'Optional module - CSS / JS'}}** G3W-ADMIN-FRONTEND

![{{t 'G3W-ADMIN-FRONTEND - public portal'}}](/img/site-frontend.png)

{{t 'A customisable public portal for G3W-SUITE. Replaces the default login screen with a branded landing page showing logo, title and the list of published cartographic groups - fully configurable per installation.'}}

[g3w-suite/g3w-admin-frontend](https://github.com/g3w-suite/g3w-admin-frontend "github-button")

## **{{t 'Optional module - Python - MIT'}}** G3W-ADMIN-PDND

{{t 'G3W-SUITE integration with the Italian'}} **Piattaforma Digitale Nazionale Dati** {{t '(PDND). Adds voucher token authentication as required by the Italian interoperability guidelines, enabling WebGIS APIs compliant with AgID standards.'}}

![{{t 'G3W-ADMIN-PDND - PDND integration schema'}}](https://raw.githubusercontent.com/g3w-suite/g3w-admin-pdnd/dev/doc/img/pdnd_schema.png)

[g3w-suite/g3w-admin-pdnd](https://github.com/g3w-suite/g3w-admin-pdnd "github-button")

## **{{t 'Built-in plugin - JavaScript / Vue - MPL-2'}}** G3W-CLIENT-PLUGIN-EDITING

![{{t 'G3W-CLIENT-PLUGIN-EDITING - vector editing tools'}}](https://user-images.githubusercontent.com/9614886/218463168-a4bfb50d-214a-45e5-b1b6-1bfcbe146e5e.png)

{{t 'A JavaScript plugin for'}} **{{t 'collaborative editing of geometries and attributes'}}** {{t 'directly in the map client. Authorised users can create, modify and delete vector features using advanced snap, split and multi-relation tools. The code is now maintained inside'}} `g3w-admin`.

[g3w-admin / editing](https://github.com/g3w-suite/g3w-admin/tree/dev/g3w-admin/editing "github-button")

## {{t 'Contribute to the project'}}

{{t 'Check out the public roadmap, join the community discussions or sponsor G3W-SUITE development.'}}

[{{t 'g3w-suite on GitHub'}}](https://github.com/g3w-suite "github-button") [{{t 'Public roadmap'}}](https://github.com/orgs/g3w-suite/projects/12 "outline-button") [{{t 'Discussions'}}](https://github.com/g3w-suite/community/discussions "outline-button")

</main>

<script type="application/json" data-i18n>
  {
    "it": {
      "(PDND). Adds voucher token authentication as required by the Italian interoperability guidelines, enabling WebGIS APIs compliant with AgID standards.": "(PDND). Aggiunge l'autenticazione tramite voucher token richiesta dalle linee guida di interoperabilità italiane, abilitando l'esposizione di API WebGIS conformi agli standard AgID.",
      "A JavaScript plugin for": "Plugin JavaScript per la",
      "A customisable public portal for G3W-SUITE. Replaces the default login screen with a branded landing page showing logo, title and the list of published cartographic groups - fully configurable per installation.": "Portale pubblico personalizzabile per G3W-SUITE. Sostituisce la schermata di accesso predefinita con una pagina di atterraggio con logo, titolo e lista dei gruppi cartografici pubblicati, configurabile per ogni installazione.",
      "Built-in plugin - JavaScript / Vue - MPL-2": "Plugin integrato - JavaScript / Vue - MPL-2",
      "Check out the public roadmap, join the community discussions or sponsor G3W-SUITE development.": "Consulta la roadmap pubblica, partecipa alle discussioni della community o sponsorizza lo sviluppo di G3W-SUITE.",
      "Contribute to the project": "Contribuisci al progetto",
      "Discussions": "Discussioni",
      "G3W-ADMIN - administration panel": "G3W-ADMIN - pannello di amministrazione",
      "G3W-ADMIN-FRONTEND - public portal": "G3W-ADMIN-FRONTEND - portale pubblico",
      "G3W-ADMIN-PDND - PDND integration schema": "G3W-ADMIN-PDND - schema di integrazione PDND",
      "G3W-ADMIN-PROCESSING - workflow schema": "G3W-ADMIN-PROCESSING - schema di funzionamento",
      "G3W-CLIENT - cartographic viewer interface": "G3W-CLIENT - interfaccia viewer cartografico",
      "G3W-CLIENT-PLUGIN-EDITING - vector editing tools": "G3W-CLIENT-PLUGIN-EDITING - strumenti di editing vettoriale",
      "G3W-SUITE integration with the Italian": "Integrazione di G3W-SUITE con la",
      "G3W-SUITE is made of modular components, all available on": "G3W-SUITE è strutturato in componenti modulari, tutti disponibili su",
      "G3W-SUITE is made of modular open source components on GitHub: g3w-admin, g3w-client, g3w-suite-docker, g3w-admin-processing, g3w-admin-frontend and g3w-admin-pdnd. Explore the project architecture.": "G3W-SUITE &egrave; composto da moduli open source su GitHub: g3w-admin, g3w-client, g3w-suite-docker, g3w-admin-processing, g3w-admin-frontend e g3w-admin-pdnd. Scopri l'architettura del progetto.",
      "G3W-SUITE-DOCKER - services structure": "G3W-SUITE-DOCKER - struttura dei servizi",
      "Integrates QGIS Processing API directly into G3W-SUITE. Upload a": "Integra le API di QGIS Processing direttamente in G3W-SUITE. Carica un file",
      "Map client - JavaScript / Vue": "Client cartografico - JavaScript / Vue",
      "OSM base maps": "carte di base OSM",
      "Open Source Ecosystem": "Ecosistema Open Source",
      "Open Source Ecosystem - G3W-Suite": "Ecosistema Open Source - G3W-Suite",
      "Optional module - CSS / JS": "Modulo opzionale - CSS / JS",
      "Optional module - Python": "Modulo opzionale - Python",
      "Optional module - Python - MIT": "Modulo opzionale - Python - MIT",
      "Public roadmap": "Roadmap pubblica",
      "QGIS print layouts": "stampa layout QGIS",
      "QGIS publishing": "pubblicazione QGIS",
      "Server module - Python / Django": "Componente server - Python / Django",
      "The WebGIS cartographic viewer. Written in JavaScript with Vue.js, it connects to the QGIS server and provides map navigation, custom searches, web editing (including offline mode), DataPlotly chart visualisation, print layouts and much more.": "Il viewer cartografico WebGIS. Scritto in JavaScript con Vue.js, si collega al server QGIS e offre navigazione della mappa, ricerche personalizzate, editing su web (anche in modalità offline), visualizzazione grafici DataPlotly, stampa e molto altro.",
      "The official Docker stack to run G3W-SUITE with a single command. Includes NGINX, PostgreSQL/PostGIS, QGIS Server and all required services, pre-configured and ready to use. This is the recommended installation method for both development and production.": "Lo stack Docker ufficiale per avviare G3W-SUITE con un singolo comando. Include NGINX, PostgreSQL/PostGIS, QGIS Server e tutti i servizi necessari, già configurati. È il metodo di installazione raccomandato sia in sviluppo che in produzione.",
      "The server module of G3W-SUITE. Written in Python on Django LTS, it publishes QGIS projects as WebGIS services, preserving styles, forms and relations. Manages users, groups, access permissions and functional modules that can be activated per project.": "Il modulo server di G3W-SUITE. Scritto in Python su Django LTS, pubblica i progetti QGIS come servizi WebGIS mantenendo stili, form e relazioni. Gestisce utenti, gruppi, permessi di accesso e moduli funzionali attivabili per singolo progetto.",
      "alphanumeric constraints": "vincoli alfanumerici",
      "atlases": "atlanti",
      "cadastre": "catasto",
      "civic address register": "civici e stradario",
      "collaborative editing of geometries and attributes": "modifica collaborativa delle geometrie e degli attributi",
      "directly in the map client. Authorised users can create, modify and delete vector features using advanced snap, split and multi-relation tools. The code is now maintained inside": "direttamente sul client cartografico. Permette agli utenti autorizzati di creare, modificare ed eliminare feature vettoriali con strumenti avanzati di snap, split e multi-relazione. Il codice è ora mantenuto all'interno di",
      "file in the administration panel and your geoprocessing algorithms become immediately available in the web client, with support for both synchronous and asynchronous (batch) execution.": "nel pannello di amministrazione e i tuoi algoritmi di geoprocessing diventano immediatamente disponibili nel client web, con supporto per elaborazione sincrona e asincrona (batch).",
      "g3w-suite on GitHub": "g3w-suite su GitHub",
      "geographic constraints": "vincoli geografici",
      "geolocation": "geolocalizzazione",
      "joins & relations 1:N / N:M": "join e relazioni 1:N / N:M",
      "multi-user feature-lock": "feature-lock multiutente",
      "online editing": "editing online",
      "permissions management": "gestione permessi",
      "public administration": "Pubblica Amministrazione",
      "relational editing": "editing relazionale",
      "tablet & smartphone": "tablet e smartphone",
      "under the MPL-2 licence.": "con licenza MPL-2.",
      "web map client": "client cartografico"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Open Source Ecosystem - G3W-Suite",
    "description": "G3W-SUITE is made of modular open source components on GitHub: g3w-admin, g3w-client, g3w-suite-docker, g3w-admin-processing, g3w-admin-frontend and g3w-admin-pdnd. Explore the project architecture."
  }
</script>