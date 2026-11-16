# About

**G3W-SUITE helps teams bring the geographic knowledge they create in QGIS into the work of everyone who needs it. Publish existing projects as WebGIS, so people can explore, share and edit information together.**

We believe maps are most useful when they stay connected to the data and expertise behind them—and are ready to support real work and better decisions.

[Features](#features) · [Demo](#demo-3-11) · [Components](#components) · [People](#people)

![{{t 'G3W-SUITE WebGIS client'}}](/img/site-webgis-client-preview.jpg)

## <span id="components"></span>Components and extensions

G3W-SUITE combines an administration server and a map client with optional integrations. Explore each component for its documentation and source code.

The core components use the MPL-2 licence; optional integrations may use their own licence. All source repositories are available on [GitHub](https://github.com/g3w-suite).

### G3W-ADMIN

![{{t 'G3W-ADMIN administration interface'}}](/img/site-webgis-management-preview.jpg)

**Server component · Python / Django**

Publish QGIS projects as WebGIS services and manage users, permissions and modules from the administration panel.

[Explore G3W-ADMIN](/en/about/g3w-admin/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-admin "github-button")

### G3W-CLIENT

![{{t 'G3W-CLIENT web map interface'}}](/img/site-webgis-client-preview.jpg)

**Map client · JavaScript / Vue**

Explore maps, search data, view charts and edit features in the browser.

[Explore G3W-CLIENT](/en/about/g3w-client/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-client "github-button")

### G3W-ADMIN-PROCESSING

![{{t 'QGIS Processing model builder'}}](/img/site-model-builder-overview.png)

**Optional module · Python**

Run QGIS Processing models through the web client and make their results available to users.

[Explore G3W-ADMIN-PROCESSING](/en/about/g3w-admin-processing/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-admin-processing "github-button")

### G3W-SUITE-DOCKER

![{{t 'G3W-SUITE architecture workflow'}}](/img/manual-english-architecture-workflow.png)

**Deployment · Docker**

Deploy G3W-SUITE and its supporting services with the official Docker stack.

[Explore G3W-SUITE-DOCKER](/en/about/g3w-suite-docker/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-suite-docker "github-button")

### G3W-ADMIN-FRONTEND

![{{t 'G3W-SUITE public portal'}}](/img/site-frontend.png)

**Optional module · CSS / JavaScript**

Present published cartographic groups through a customizable public portal.

[Explore G3W-ADMIN-FRONTEND](/en/about/g3w-admin-frontend/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-admin-frontend "github-button")

### G3W-ADMIN-PDND

**Optional module · Python**

Connect G3W-SUITE to Italy's Public Digital Data Platform (PDND) authentication services.

[Explore G3W-ADMIN-PDND](/en/about/g3w-admin-pdnd/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-admin-pdnd "github-button")

### Collaborative editing

![{{t 'G3W-CLIENT editing tools'}}](/img/manual-english-editing-client-tool.png)

**Built-in functionality · JavaScript / Vue**

Edit geographic features and related records together using forms and rules configured in QGIS.

[Explore collaborative editing](/en/about/g3w-client-plugin-editing/ "outline-button") [Source code](https://github.com/g3w-suite/g3w-admin/tree/dev/g3w-admin/editing "github-button")

## <span id="principles"></span>What guides us

### Start with the work you already have

Build on QGIS projects, styles, forms, relations and print layouts teams already rely on—without rebuilding their mapping work from scratch.

### Make maps useful

A map is a starting point, not the end of the workflow. Search, editing, user roles and permissions, and field access help turn geographic information into tools people can use every day.

### Keep the ecosystem open

G3W-SUITE is open source under the MPL 2.0 licence and developed in the open. Its modular architecture lets teams choose the components they need and gives contributors room to improve the project together.

## <span id="features"></span>From QGIS to the web

### Publish and organize

Publish projects with their styles, forms, relations and print layouts. Organize maps into groups and manage users and permissions.

### Collaborate and edit

Edit geometries, attributes and related records in the browser, with configurable forms and multi-user feature locks.

### Explore and analyze

Search and query maps, view DataPlotly charts, print atlases and run QGIS Processing models from the web.

### Connect your data

Use spatial databases, files and raster layers alongside WMS and WFS services. Responsive maps support work on desktop and mobile devices.

## <span id="demo-3-11"></span>Try the live demo

Explore a building and maintenance management project in the stable G3W-SUITE 3.11 demo, based on QGIS 3.44 LTR. Search the map, view charts and print reports.

To try geometric and relational editing, sign in with the public demo account:

- user: **viewer1**
- password: **G3wsuite123**

Features being edited by another user may be temporarily locked.

[Open the stable demo](https://v311.g3wsuite.it/ "primary-button") [Release notes 3.11](/en/news/v3.11/ "outline-button")

### <span id="demo-3-10"></span>Other versions

The maintenance demo uses G3W-SUITE 3.10 and QGIS 3.40 LTR.

[Open the 3.10 demo](https://v310.g3wsuite.it/it/map/demo-310/) · [Release notes 3.10](/en/news/v3.10/)

### <span id="demo-dev"></span>Development branch

Follow development of the next major version on [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).

## <span id="hosting"></span>Run G3W-SUITE

Install the open-source platform yourself with Docker, or contact Gis3W about managed hosting and professional support.

[Docker installation guide](/en/docs/docker/ "outline-button") [Ask about hosting](#footer-help-title "outline-button")

## <span id="branches"></span>Versions and compatibility

Check supported branches, QGIS compatibility, documentation and release notes.

[Compare versions](/en/about/versions/ "outline-button")

## <span id="people"></span>People behind the project

G3W-SUITE grows through the people who use, support and contribute to it. Its development is shared openly, shaped by real needs and improved through collaboration.

### <span id="governing-board"></span>Governing board

- [![Francesco Boccacci](https://github.com/volterra79.png?size=240) Francesco Boccacci (@volterra79)](/en/about/francesco-boccacci/)
- [![Leonardo Lami](https://github.com/leolami.png?size=240) Leonardo Lami](/en/about/leonardo-lami/)
- [![Matteo Tosi](https://github.com/Raruto.png?size=240) Matteo Tosi (@Raruto)](/en/about/matteo-tosi/)
- [![Walter Lorenzetti](https://github.com/wlorenzetti.png?size=240) Walter Lorenzetti (@wlorenzetti)](/en/about/walter-lorenzetti/)

### <span id="team"></span>Team

- [![Alessandro Pasotti](https://github.com/elpaso.png?size=240) Alessandro Pasotti (@elpaso)](/en/about/alessandro-pasotti/)
- [![Andrea Antonello](https://github.com/moovida.png?size=240) Andrea Antonello (@moovida)](/en/about/andrea-antonello/)
- [![Tudor Barascu](https://github.com/tudorbarascu.png?size=240) Tudor Barascu (@tudorbarascu)](/en/about/tudor-barascu/)

## <span id="participate"></span>Explore and take part

Explore what G3W-SUITE can do: browse the components, read the documentation or start with the Quick Start guide. Questions, ideas and contributions are welcome in the community.

[Explore the components](/en/about/#components "primary-button") [Read the documentation](/en/docs/ "outline-button") [Join the community](/en/community/ "outline-button")

Follow the [project news](/en/news/).

<script type="application/json" data-i18n>
  {
    "it": {
      "**Built-in functionality · JavaScript / Vue**": "**Funzionalità integrata · JavaScript / Vue**",
      "**Deployment · Docker**": "**Distribuzione · Docker**",
      "**G3W-SUITE helps teams bring the geographic knowledge they create in QGIS into the work of everyone who needs it. Publish existing projects as WebGIS, so people can explore, share and edit information together.**": "**G3W-SUITE aiuta i team a portare le conoscenze geografiche create in QGIS nel lavoro quotidiano di tutte le persone che ne hanno bisogno. Pubblica i progetti esistenti come WebGIS, così da esplorare, condividere e modificare le informazioni insieme.**",
      "**Map client · JavaScript / Vue**": "**Client cartografico · JavaScript / Vue**",
      "**Optional module · CSS / JavaScript**": "**Modulo opzionale · CSS / JavaScript**",
      "**Optional module · Python**": "**Modulo opzionale · Python**",
      "**Server component · Python / Django**": "**Componente server · Python / Django**",
      "A map is a starting point, not the end of the workflow. Search, editing, user roles and permissions, and field access help turn geographic information into tools people can use every day.": "Una mappa è il punto di partenza, non la fine del flusso di lavoro. Ricerca, modifica, ruoli e permessi utente e accesso dal campo aiutano a trasformare le informazioni geografiche in strumenti per il lavoro quotidiano.",
      "About": "Il progetto",
      "About - G3W-Suite": "Il progetto - G3W-Suite",
      "Ask about hosting": "Richiedi informazioni sull'hosting",
      "Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration.": "Porta i progetti QGIS nel lavoro quotidiano con un WebGIS open source e modulare, pensato per la collaborazione.",
      "Build on QGIS projects, styles, forms, relations and print layouts teams already rely on—without rebuilding their mapping work from scratch.": "Valorizza i progetti QGIS, gli stili, i moduli, le relazioni e i layout di stampa su cui i team fanno già affidamento, senza ricostruire da zero il lavoro cartografico.",
      "Check supported branches, QGIS compatibility, documentation and release notes.": "Consulta i branch supportati, la compatibilità con QGIS, la documentazione e le note di rilascio.",
      "Collaborate and edit": "Collabora e modifica",
      "Collaborative editing": "Modifica collaborativa",
      "Compare versions": "Confronta le versioni",
      "Components": "Componenti",
      "Components and extensions": "Componenti ed estensioni",
      "Connect G3W-SUITE to Italy's Public Digital Data Platform (PDND) authentication services.": "Collega G3W-SUITE ai servizi di autenticazione della Piattaforma Digitale Nazionale Dati (PDND).",
      "Connect your data": "Collega i tuoi dati",
      "Deploy G3W-SUITE and its supporting services with the official Docker stack.": "Installa G3W-SUITE e i servizi di supporto con lo stack Docker ufficiale.",
      "Development branch": "Branch di sviluppo",
      "Docker installation guide": "Guida all'installazione Docker",
      "Edit geographic features and related records together using forms and rules configured in QGIS.": "Modifica insieme feature geografiche e record collegati usando moduli e regole configurati in QGIS.",
      "Edit geometries, attributes and related records in the browser, with configurable forms and multi-user feature locks.": "Modifica geometrie, attributi e record collegati nel browser, con moduli configurabili e blocco delle feature per il lavoro multiutente.",
      "Explore G3W-ADMIN": "Scopri G3W-ADMIN",
      "Explore G3W-ADMIN-FRONTEND": "Scopri G3W-ADMIN-FRONTEND",
      "Explore G3W-ADMIN-PDND": "Scopri G3W-ADMIN-PDND",
      "Explore G3W-ADMIN-PROCESSING": "Scopri G3W-ADMIN-PROCESSING",
      "Explore G3W-CLIENT": "Scopri G3W-CLIENT",
      "Explore G3W-SUITE-DOCKER": "Scopri G3W-SUITE-DOCKER",
      "Explore a building and maintenance management project in the stable G3W-SUITE 3.11 demo, based on QGIS 3.44 LTR. Search the map, view charts and print reports.": "Esplora un progetto per la gestione di edifici e manutenzioni nella demo stabile di G3W-SUITE 3.11, basata su QGIS 3.44 LTR. Cerca sulla mappa, consulta i grafici e stampa i report.",
      "Explore and analyze": "Esplora e analizza",
      "Explore and take part": "Esplora e partecipa",
      "Explore collaborative editing": "Scopri la modifica collaborativa",
      "Explore maps, search data, view charts and edit features in the browser.": "Esplora le mappe, cerca dati, consulta i grafici e modifica le feature nel browser.",
      "Explore what G3W-SUITE can do: browse the components, read the documentation or start with the Quick Start guide. Questions, ideas and contributions are welcome in the community.": "Scopri cosa offre G3W-SUITE: esplora i componenti, consulta la documentazione o parti dalla guida rapida. Domande, idee e contributi sono benvenuti nella community.",
      "Features": "Funzionalità",
      "Features being edited by another user may be temporarily locked.": "Le feature in modifica da parte di un altro utente possono essere temporaneamente bloccate.",
      "Follow development of the next major version on [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).": "Segui lo sviluppo della prossima versione principale su [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).",
      "Follow the [project news](/en/news/).": "Segui le [novità del progetto](/en/news/).",
      "From QGIS to the web": "Da QGIS al web",
      "G3W-ADMIN administration interface": "Interfaccia di amministrazione G3W-ADMIN",
      "G3W-CLIENT editing tools": "Strumenti di modifica di G3W-CLIENT",
      "G3W-CLIENT web map interface": "Interfaccia cartografica web G3W-CLIENT",
      "G3W-SUITE WebGIS client": "Client WebGIS di G3W-SUITE",
      "G3W-SUITE architecture workflow": "Schema di funzionamento di G3W-SUITE",
      "G3W-SUITE combines an administration server and a map client with optional integrations. Explore each component for its documentation and source code.": "G3W-SUITE combina un server di amministrazione e un client cartografico con integrazioni opzionali. Esplora ogni componente per la documentazione e il codice sorgente.",
      "G3W-SUITE grows through the people who use, support and contribute to it. Its development is shared openly, shaped by real needs and improved through collaboration.": "G3W-SUITE cresce grazie alle persone che la usano, la sostengono e vi contribuiscono. Il suo sviluppo è condiviso apertamente, parte da esigenze reali e migliora attraverso la collaborazione.",
      "G3W-SUITE is open source under the MPL 2.0 licence and developed in the open. Its modular architecture lets teams choose the components they need and gives contributors room to improve the project together.": "G3W-SUITE è open source con licenza MPL 2.0 e viene sviluppato apertamente. La sua architettura modulare permette ai team di scegliere i componenti di cui hanno bisogno e ai contributori di migliorare insieme il progetto.",
      "G3W-SUITE public portal": "Portale pubblico G3W-SUITE",
      "Governing board": "Governing board",
      "Install the open-source platform yourself with Docker, or contact Gis3W about managed hosting and professional support.": "Installa autonomamente la piattaforma open source con Docker, oppure contatta Gis3W per hosting gestito e supporto professionale.",
      "Keep the ecosystem open": "Mantieni aperto l'ecosistema",
      "Make maps useful": "Rendi utili le mappe",
      "Open the 3.10 demo": "Apri la demo 3.10",
      "Open the stable demo": "Apri la demo stabile",
      "Other versions": "Altre versioni",
      "People": "Persone",
      "People behind the project": "Le persone dietro al progetto",
      "Present published cartographic groups through a customizable public portal.": "Presenta i gruppi cartografici pubblicati attraverso un portale pubblico personalizzabile.",
      "Publish QGIS projects as WebGIS services and manage users, permissions and modules from the administration panel.": "Pubblica i progetti QGIS come servizi WebGIS e gestisci utenti, permessi e moduli dal pannello di amministrazione.",
      "Publish and organize": "Pubblica e organizza",
      "Publish projects with their styles, forms, relations and print layouts. Organize maps into groups and manage users and permissions.": "Pubblica i progetti con i loro stili, moduli, relazioni e layout di stampa. Organizza le mappe in gruppi e gestisci utenti e permessi.",
      "QGIS Processing model builder": "Model Builder di QGIS Processing",
      "Release notes 3.10": "Note di rilascio 3.10",
      "Release notes 3.11": "Note di rilascio 3.11",
      "Run G3W-SUITE": "Usa G3W-SUITE",
      "Run QGIS Processing models through the web client and make their results available to users.": "Esegui modelli QGIS Processing dal client web e rendi disponibili i risultati agli utenti.",
      "Search and query maps, view DataPlotly charts, print atlases and run QGIS Processing models from the web.": "Cerca e interroga le mappe, visualizza grafici DataPlotly, stampa atlanti ed esegui modelli QGIS Processing dal web.",
      "Source code": "Codice sorgente",
      "Start with the work you already have": "Parti dal lavoro che esiste già",
      "The core components use the MPL-2 licence; optional integrations may use their own licence. All source repositories are available on [GitHub](https://github.com/g3w-suite).": "I componenti principali usano la licenza MPL-2; le integrazioni opzionali possono avere licenze proprie. Tutti i repository del codice sorgente sono disponibili su [GitHub](https://github.com/g3w-suite).",
      "The maintenance demo uses G3W-SUITE 3.10 and QGIS 3.40 LTR.": "La demo di manutenzione usa G3W-SUITE 3.10 e QGIS 3.40 LTR.",
      "To try geometric and relational editing, sign in with the public demo account:": "Per provare la modifica geometrica e relazionale, accedi con l'account pubblico della demo:",
      "Try the live demo": "Prova la demo",
      "Use spatial databases, files and raster layers alongside WMS and WFS services. Responsive maps support work on desktop and mobile devices.": "Usa database spaziali, file e layer raster insieme a servizi WMS e WFS. Le mappe responsive supportano il lavoro da desktop e dispositivi mobili.",
      "Versions and compatibility": "Versioni e compatibilità",
      "We believe maps are most useful when they stay connected to the data and expertise behind them—and are ready to support real work and better decisions.": "Crediamo che le mappe siano davvero utili quando restano collegate ai dati e alle competenze che le hanno generate, e quando possono supportare attività concrete e decisioni migliori.",
      "What guides us": "Cosa ci guida",
      "[Explore the components](/en/about/#components \"primary-button\") [Read the documentation](/en/docs/ \"outline-button\") [Join the community](/en/community/ \"outline-button\")": "[Esplora i componenti](/en/about/#components \"primary-button\") [Consulta la documentazione](/en/docs/ \"outline-button\") [Partecipa alla community](/en/community/ \"outline-button\")",
      "password: **G3wsuite123**": "password: **G3wsuite123**",
      "user: **viewer1**": "utente: **viewer1**"
    }
  }
</script>
<script type="application/json" data-i18n-meta>
  {
    "title": "About - G3W-Suite",
    "description": "Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration."
  }
</script>
