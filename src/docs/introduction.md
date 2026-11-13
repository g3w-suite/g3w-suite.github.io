# Introduction

**G3W-SUITE is a modular client-server application for the management and publication of interactive map projects.**

The framework was born from the need to have a software capable of **publishing, in total autonomy and in a simple and fast way on a webgis client, cartographic projects realized with [QGIS](https://qgis.org).**

The following aspects will be analyzed within the manual:
* **organization and optimization of data and QGIS projects for web publishing**
* **organization of cartographic contents in a hierarchical way: macro groups and cartographic groups**
* **user management and access control systems for consultation and management of webgis services**
* **management of the online editing function for the creation of web cartographic management systems**
* **publishing and managing QGIS projects as WebGis services**
* **creation of searches, visualization of graphics created with the DataPlotly plugin and definition of constraints (geographic and alphanumeric) on visualization and editing permissions**
 
**The current release (3.11) is compatible with `QGIS 3.44.x LTR` (Server and Desktop).**

![Screenshot: Demo QGIS Project](/img/manual-english-demo-qgis-project.png)

![Screenshot: Demo Webgis Project](/img/manual-english-demo-webgis-project.png)

### Version

At the moment, the suite does not use a classic versioning system; these branches are available.

| Branch   | Python version | Django version | QGIS        | QGIS API | Status                 |
|----------|----------------|----------------|-------------|----------|------------------------|
| dev      |                |                | 4.0         | Used     | Continuous development |
| v3.11    | 3.12           | 4.2            | 3.44        | Used     | Bug fixing             |
| v3.10    | 3.12           | 4.2            | 3.40        | Used     | Bug fixing             |
| v3.9     | 3.12           | 4.2            | 3.34        | Used     | No longer supported   |
| v3.8     | 3.10           | 3.2            | 3.34        | Used     | No longer supported   |
| v3.7     | 3.10           | 3.2            | 3.28        | Used     | No longer supported   |
| v3.6     | 3.10           | 3.2            | 3.22        | Used     | No longer supported   |
| v3.5     | 3.10           | 2.2            | 3.22        | Used     | No longer supported   |
| v3.4     | 3.8            | 2.2            | 3.22        | Used     | No longer supported   |
| v3.3     | 3.6            | 2.2            | 3.16        | Used     | No longer supported   |
| v3.2     | 3.6            | 2.2            | 3.16        | Used     | No longer supported   |
| v3.1     | 3.6            | 2.2            | 3.10        | Used     | No longer supported   |
| v3.0     | 3.6            | 2.2            | 3.10        | Used     | No longer supported   |

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
      "**G3W-SUITE is a modular client-server application for the management and publication of interactive map projects.**": "**G3W-SUITE è un'applicazione modulare client-server per la gestione e la pubblicazione di progetti cartografici interattivi.**",
      "**The current release (3.11) is compatible with `QGIS 3.44.x LTR` (Server and Desktop).**": "**La versione attuale (3.11) è compatibile con `QGIS 3.44.x LTR` (Server e Desktop).**",
      "**creation of searches, visualization of graphics created with the DataPlotly plugin and definition of constraints (geographic and alphanumeric) on visualization and editing permissions**": "**creazione di ricerche, visualizzazione dei grafici generati dal plugin DataPlotly e definizione di vincoli (geografici e alfanumerici) per la visualizzazione e i permessi di modifica**",
      "**management of the online editing function for the creation of web cartographic management systems**": "**gestione della funzione di modifica online per creare sistemi di gestione cartografica sul web**",
      "**organization and optimization of data and QGIS projects for web publishing**": "**organizzazione e ottimizzazione dei dati e dei progetti QGIS per la pubblicazione sul web**",
      "**organization of cartographic contents in a hierarchical way: macro groups and cartographic groups**": "**organizzazione gerarchica dei contenuti cartografici: macrogruppi e gruppi cartografici**",
      "**publishing and managing QGIS projects as WebGis services**": "**pubblicazione e gestione di progetti QGIS come servizi WebGIS**",
      "**user management and access control systems for consultation and management of webgis services**": "**gestione degli utenti e sistemi di controllo degli accessi per la consultazione e la gestione dei servizi WebGIS**",
      "At the moment, the suite does not use a classic versioning system; these branches are available.": "Al momento la suite non utilizza un sistema di versionamento classico; sono disponibili i seguenti branch.",
      "Branch": "Branch",
      "Bug fixing": "Correzione dei bug",
      "Continuous development": "Sviluppo continuo",
      "Django version": "Versione Django",
      "Introduction": "Introduzione",
      "Main contributors": "Principali contributori",
      "No longer supported": "Non più supportato",
      "Python version": "Versione di Python",
      "QGIS API": "API QGIS",
      "Screenshot: Demo QGIS Project": "Schermata: progetto QGIS demo",
      "Screenshot: Demo Webgis Project": "Schermata: progetto WebGIS demo",
      "Status": "Stato",
      "The following aspects will be analyzed within the manual:": "Nel manuale verranno approfonditi i seguenti aspetti:",
      "The framework was born from the need to have a software capable of **publishing, in total autonomy and in a simple and fast way on a webgis client, cartographic projects realized with [QGIS](https://qgis.org).**": "La suite nasce dall'esigenza di disporre di un software capace di **pubblicare progetti cartografici realizzati con [QGIS](https://qgis.org) su un client WebGIS, in completa autonomia e in modo semplice e rapido.**",
      "Used": "Utilizzata",
      "Version": "Versione"
    }
  }
</script>

