# Introduction

**G3W-SUITE manages and publishes interactive map projects created with [QGIS](https://qgis.org) through a modular client-server application.**

The manual covers:
* **organization and optimization of data and QGIS projects for web publishing**
* **organization of cartographic contents in a hierarchical way: macro groups and cartographic groups**
* **user management and access control systems for consultation and management of webgis services**
* **management of the online editing function for the creation of web cartographic management systems**
* **publishing and managing QGIS projects as WebGis services**
* **creation of searches, visualization of graphics created with the DataPlotly plugin and definition of constraints (geographic and alphanumeric) on visualization and editing permissions**

**The current release (3.11) is compatible with `QGIS 3.44.x LTR` (Server and Desktop).**

![Screenshot: Demo QGIS Project](/img/manual-english-demo-qgis-project.avif)

![Screenshot: Demo Webgis Project](/img/manual-english-demo-webgis-project.avif)

## Versions and compatibility

[Compare supported versions and their requirements](versions.md).

## Technological infrastructure

The publishing system is based on a series of OS tools and software

* **`PostgreSQL/PostGis`**: for the management of application data
* **`PostgreSQL/PostGis` or `SpatiaLite`**: for the management of geographic data
* **`QGIS Server LTR`** as OGC services server
* **`G3W-ADMIN` - the Administration component**: developed in **`Python`** using **`Django`**
* **`G3W-CLIENT` - the Cartographic client**: based on **`OpenLayers3`** and developed with **reactive tecnology by `Vue.js`**
* The main libraries used for the management and the visualization of the geographical part and the interaction with the user are: **`OpenLayer, Boostrap, jQuery, Lodash` and `Vue.js`**.
* **`Gulp.js`** as task runner

![Screenshot: Architecture](/img/manual-english-architecture.avif)

Below is a diagram relating to the standard workflow

![Screenshot: Architecture Workflow](/img/manual-english-architecture-workflow.avif)

### Main contributors
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
    "**G3W-SUITE manages and publishes interactive map projects created with [QGIS](https://qgis.org) through a modular client-server application.**": "**G3W-SUITE gestisce e pubblica progetti cartografici interattivi creati con [QGIS](https://qgis.org) tramite un'applicazione modulare client-server.**",
    "**The current release (3.11) is compatible with `QGIS 3.44.x LTR` (Server and Desktop).**": "**La versione attuale (3.11) è compatibile con `QGIS 3.44.x LTR` (Server e Desktop).**",
    "**`G3W-ADMIN` - the Administration component**: developed in **`Python`** using **`Django`**": "**`G3W-ADMIN` - il componente di amministrazione**: sviluppato in **`Python`** con **`Django`**",
    "**`G3W-CLIENT` - the Cartographic client**: based on **`OpenLayers3`** and developed with **reactive tecnology by `Vue.js`**": "**`G3W-CLIENT` - il client cartografico**: basato su **`OpenLayers3`** e sviluppato con la **tecnologia reattiva di `Vue.js`**",
    "**`Gulp.js`** as task runner": "**`Gulp.js`** come task runner",
    "**`PostgreSQL/PostGis` or `SpatiaLite`**: for the management of geographic data": "**`PostgreSQL/PostGIS` o `SpatiaLite`**: per la gestione dei dati geografici",
    "**`PostgreSQL/PostGis`**: for the management of application data": "**`PostgreSQL/PostGIS`**: per la gestione dei dati applicativi",
    "**`QGIS Server LTR`** as OGC services server": "**`QGIS Server LTR`** come server per i servizi OGC",
    "**creation of searches, visualization of graphics created with the DataPlotly plugin and definition of constraints (geographic and alphanumeric) on visualization and editing permissions**": "**creazione di ricerche, visualizzazione dei grafici generati dal plugin DataPlotly e definizione di vincoli (geografici e alfanumerici) per la visualizzazione e i permessi di modifica**",
    "**management of the online editing function for the creation of web cartographic management systems**": "**gestione della funzione di modifica online per creare sistemi di gestione cartografica sul web**",
    "**organization and optimization of data and QGIS projects for web publishing**": "**organizzazione e ottimizzazione dei dati e dei progetti QGIS per la pubblicazione sul web**",
    "**organization of cartographic contents in a hierarchical way: macro groups and cartographic groups**": "**organizzazione gerarchica dei contenuti cartografici: macrogruppi e gruppi cartografici**",
    "**publishing and managing QGIS projects as WebGis services**": "**pubblicazione e gestione di progetti QGIS come servizi WebGIS**",
    "**user management and access control systems for consultation and management of webgis services**": "**gestione degli utenti e sistemi di controllo degli accessi per la consultazione e la gestione dei servizi WebGIS**",
    "At the moment, the suite does not use a classic versioning system; these branches are available.": "Al momento la suite non utilizza un sistema di versionamento classico; sono disponibili i seguenti branch.",
    "Below is a diagram relating to the standard workflow": "Di seguito è riportato un diagramma del flusso di lavoro standard.",
    "Branch": "Branch",
    "Bug fixing": "Correzione dei bug",
    "Compare supported versions and their requirements": "Confronta le versioni supportate e i relativi requisiti",
    "Continuous development": "Sviluppo continuo",
    "Django version": "Versione Django",
    "Introduction": "Introduzione",
    "Main contributors": "Principali contributori",
    "No longer supported": "Non più supportato",
    "Python version": "Versione di Python",
    "QGIS API": "API QGIS",
    "Screenshot: Architecture": "Schermata: architettura",
    "Screenshot: Architecture Workflow": "Schermata: flusso di lavoro dell'architettura",
    "Screenshot: Demo QGIS Project": "Schermata: progetto QGIS demo",
    "Screenshot: Demo Webgis Project": "Schermata: progetto WebGIS demo",
    "Status": "Stato",
    "Technological infrastructure": "Infrastruttura tecnologica",
    "The main libraries used for the management and the visualization of the geographical part and the interaction with the user are: **`OpenLayer, Boostrap, jQuery, Lodash` and `Vue.js`**.": "Le principali librerie utilizzate per gestire e visualizzare la componente geografica e per l'interazione con l'utente sono: **`OpenLayers, Bootstrap, jQuery, Lodash` e `Vue.js`**.",
    "The manual covers:": "Il manuale tratta:",
    "The publishing system is based on a series of OS tools and software": "Il sistema di pubblicazione si basa su una serie di strumenti e software per sistemi operativi.",
    "Used": "Utilizzata",
    "Version": "Versione",
    "Versions and compatibility": "Versioni e compatibilit?"
  }
}
</script>
