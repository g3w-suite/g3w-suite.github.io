# Explore G3W-SUITE

## <span id="demo-3-11"></span>Stable demo - 3.11

Try the stable branch on QGIS 3.44 LTR.

- [Open the 3.11 demo](https://v311.g3wsuite.it/)
- [Release notes 3.11](/en/news/v3.11/)

## <span id="demo-3-10"></span>Maintenance demo - 3.10

Try the maintenance branch on QGIS 3.40 LTR.

- [Open the 3.10 demo](https://v310.g3wsuite.it/it/map/demo-310/)
- [Release notes 3.10](/en/news/v3.10/)

## <span id="demo-dev"></span>Development branch - 4.0

The next major version is under active development on QGIS 4.0 LTR.

- [Follow development on GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev)

## <span id="branches"></span>Supported branches and compatibility

Use the branch table to check the QGIS, Python and Django versions, support status, documentation and release notes.

| {{t 'Branch'}} | {{t 'QGIS'}} | {{t 'QGIS API'}} | {{t 'Python'}} | {{t 'Django'}} | {{t 'Status'}} | {{t 'Release date'}} | {{t 'Documentation ENG'}} | {{t 'Release notes'}} |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **dev (4.0)** | 4.0 LTR | integrate | 3.12 | 4.2 | {{t 'Continuing development'}} | {{t 'November 2026'}} | - | - |
| **3.11.x** | **3.44 LTR** | integrate | 3.12 | 4.2 | {{t 'Bug fixing'}} | {{t '09 April 2026'}} | [ENG](/docs/) | [3.11](/en/news/v3.11/) |
| **3.10.x** | **3.40 LTR** | integrate | 3.12 | 4.2 | {{t 'Bug fixing'}} | {{t '30 July 2025'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.10.x/index.html) | [3.10](/en/news/v3.10/) |
| **3.9.x** | 3.34 LTR | integrate | 3.12 | 4.2 | {{t 'No longer supported'}} | {{t '23 January 2025'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.9.x/index.html) | [3.9](/en/news/v3.9/) |
| **3.8.x** | **3.34 LTR** | integrate | 3.10 | 3.2 | {{t 'No longer supported'}} | {{t '18 June 2024'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.8.x/index.html) | [3.8](/en/news/v3.8/) |
| **3.7.x** | 3.28 LTR | integrate | 3.10 | 3.2 | {{t 'No longer supported'}} | {{t '13 December 2023'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.7.x/) | [3.7](/en/news/v3.7/) |
| **3.6** | **3.28 LTR** | integrate | 3.10 | 3.2 | {{t 'No longer supported'}} | {{t '17 May 2023'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.6.x/) | [3.6](/en/news/v3.6/) |
| **3.5** | 3.22 LTR | integrate | 3.6 | 2.2 | {{t 'No longer supported'}} | {{t '15 November 2022'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.5.x/) | [3.5](/en/news/v3.5/) |
| **3.4** | **3.22 LTR** | integrate | 3.6 | 2.2 | {{t 'No longer supported'}} | {{t '05 April 2022'}} | [ENG](https://g3w-suite.readthedocs.io/en/v.3.4.x/index.html) | [3.4](/en/news/v3.4/) |
| **3.3** | 3.16 LTR | integrate | 3.6 | 2.2 | {{t 'No longer supported'}} | {{t '07 October 2021'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.3.x/index.html) | [3.3](/en/news/v3.3/) |
| **3.2** | **3.16 LTR** | integrate | 3.6 | 2.2 | {{t 'No longer supported'}} | {{t '07 April 2021'}} | [ENG](https://g3w-suite.readthedocs.io/en/v.3.2.x/index.html) | [3.2](/en/news/v3.2/) |
| **3.1** | 3.10 LTR | integrate | 3.6 | 2.2 | {{t 'No longer supported'}} | {{t '11 November 2020'}} | [ENG](https://g3w-suite.readthedocs.io/en/v3.1.x/index.html) | [3.1](/en/news/v3.1/) |

## <span id="features"></span>From QGIS project to operational WebGIS

G3W-SUITE publishes your QGIS projects as WebGIS services, keeping the cartography and workflows your team already uses.

### Publish and organize

Publish projects while retaining their styles, forms, relations and print layouts. Organize services in thematic cartographic groups and manage users, roles and permissions for each project.

![{{t 'QGIS WebGIS publishing workflow'}}](/img/site-qgis-web-publishing-preview.jpg)

### Collaborate and edit

Enable geometric, attribute and relational editing in the browser. Configure forms, widgets and geographic or alphanumeric constraints, and use feature locks to coordinate multi-user editing. The responsive client also supports field work on tablets and smartphones, including offline editing.

### Search, analyze and share

Give users custom searches, query tools, geolocation, base maps and metadata from the QGIS project. Explore data with DataPlotly charts and QGIS print layouts, including atlases, or run QGIS Processing models from the web client. CSW, RNDT and INSPIRE integrations support information discovery and public-sector workflows.

### Connect your data

Work with PostgreSQL/PostGIS, Oracle Spatial, MSSQL, SQLite/SpatiaLite, GeoPackage, Shapefile, virtual layers and raster data, as well as WMS and WFS services.

### What you can explore in the demo

The live demo shows a WebGIS management application for buildings and related maintenance, built from a QGIS project. Sign in to browse data, search, view charts and print reports based on geographic atlases.

![{{t 'WebGIS map interface'}}](/img/site-g3w-suite-interface-screenshot.png)

To try geometric and relational editing, use the public demo account:

- user: **viewer1**
- password: **G3wsuite123**

G3W-SUITE uses multi-user feature locks, so a feature being edited by another user may be temporarily unavailable.

## <span id="components"></span>Core components and extensions

The core components are released under the MPL-2 licence, while optional integrations may use their own licence. All source repositories are available on [GitHub](https://github.com/g3w-suite).

- **G3W-ADMIN** — the Python/Django server that publishes QGIS projects and manages users, groups, permissions and project modules. [Source code](https://github.com/g3w-suite/g3w-admin)

  [Read about G3W-ADMIN](/en/explore/g3w-admin/)

- **G3W-CLIENT** — the JavaScript/Vue map client for navigation, search, editing, charts and print layouts. [Source code](https://github.com/g3w-suite/g3w-client)

  [Read about G3W-CLIENT](/en/explore/g3w-client/)

- **G3W-ADMIN-PROCESSING** — an optional integration that runs uploaded `.model3` QGIS Processing models synchronously or in batches. [Source code](https://github.com/g3w-suite/g3w-admin-processing)

  [Read about G3W-ADMIN-PROCESSING](/en/explore/g3w-admin-processing/)

- **G3W-ADMIN-FRONTEND** — an optional branded public portal for published cartographic groups. [Source code](https://github.com/g3w-suite/g3w-admin-frontend)

  [Read about G3W-ADMIN-FRONTEND](/en/explore/g3w-admin-frontend/)

- **G3W-ADMIN-PDND** — an optional PDND integration for voucher-token authentication, released under the MIT licence. [Source code](https://github.com/g3w-suite/g3w-admin-pdnd)

  [Read about G3W-ADMIN-PDND](/en/explore/g3w-admin-pdnd/)

- **Collaborative editing** — editing tools are maintained inside `g3w-admin`, including snapping, splitting and multi-relation workflows.

  [Read about collaborative editing](/en/explore/g3w-client-plugin-editing/)

- **G3W-SUITE-DOCKER** — the official deployment stack with NGINX, PostgreSQL/PostGIS, QGIS Server and the services needed to run the platform. [Source code](https://github.com/g3w-suite/g3w-suite-docker)

  [Read about G3W-SUITE-DOCKER](/en/explore/g3w-suite-docker/)

## <span id="hosting"></span>Choose how to run G3W-SUITE

G3W-SUITE is open source and can be self-hosted with Docker. The [Quick Start guide](/en/docs/quick-start/) walks through publishing a project; see the [Docker installation guide](/docs/docker/) for deployment details.

If you prefer managed infrastructure, GIS3W offers a hosting service with a dedicated Ubuntu LTS server, SSL, daily backups, a tuned PostgreSQL/PostGIS database, updates and technical support.

[Ask about managed hosting](#footer-help-title "primary-button") [Quick Start (self-hosted)](/en/docs/quick-start/ "outline-button")

<script type="application/json" data-i18n>
  {
    "it": {
      "**Collaborative editing** — editing tools are maintained inside `g3w-admin`, including snapping, splitting and multi-relation workflows.": "**Modifica collaborativa** — gli strumenti di editing sono mantenuti in `g3w-admin` e comprendono snap, split e flussi di lavoro con relazioni multiple.",
      "**G3W-ADMIN** — the Python/Django server that publishes QGIS projects and manages users, groups, permissions and project modules. [Source code](https://github.com/g3w-suite/g3w-admin)": "**G3W-ADMIN** — il server Python/Django che pubblica progetti QGIS e gestisce utenti, gruppi, permessi e moduli per progetto. [Codice sorgente](https://github.com/g3w-suite/g3w-admin)",
      "**G3W-ADMIN-FRONTEND** — an optional branded public portal for published cartographic groups. [Source code](https://github.com/g3w-suite/g3w-admin-frontend)": "**G3W-ADMIN-FRONTEND** — portale pubblico personalizzabile opzionale per i gruppi cartografici pubblicati. [Codice sorgente](https://github.com/g3w-suite/g3w-admin-frontend)",
      "**G3W-ADMIN-PDND** — an optional PDND integration for voucher-token authentication, released under the MIT licence. [Source code](https://github.com/g3w-suite/g3w-admin-pdnd)": "**G3W-ADMIN-PDND** — integrazione opzionale con PDND per l'autenticazione tramite voucher token, distribuita con licenza MIT. [Codice sorgente](https://github.com/g3w-suite/g3w-admin-pdnd)",
      "**G3W-ADMIN-PROCESSING** — an optional integration that runs uploaded `.model3` QGIS Processing models synchronously or in batches. [Source code](https://github.com/g3w-suite/g3w-admin-processing)": "**G3W-ADMIN-PROCESSING** — integrazione opzionale che esegue modelli QGIS Processing `.model3` caricati, in modo sincrono o in batch. [Codice sorgente](https://github.com/g3w-suite/g3w-admin-processing)",
      "**G3W-CLIENT** — the JavaScript/Vue map client for navigation, search, editing, charts and print layouts. [Source code](https://github.com/g3w-suite/g3w-client)": "**G3W-CLIENT** — client cartografico JavaScript/Vue per navigazione, ricerca, modifica, grafici e layout di stampa. [Codice sorgente](https://github.com/g3w-suite/g3w-client)",
      "**G3W-SUITE-DOCKER** — the official deployment stack with NGINX, PostgreSQL/PostGIS, QGIS Server and the services needed to run the platform. [Source code](https://github.com/g3w-suite/g3w-suite-docker)": "**G3W-SUITE-DOCKER** — stack di distribuzione ufficiale con NGINX, PostgreSQL/PostGIS, QGIS Server e i servizi necessari per eseguire la piattaforma. [Codice sorgente](https://github.com/g3w-suite/g3w-suite-docker)",
      "05 April 2022": "05 Aprile 2022",
      "07 April 2021": "07 Aprile 2021",
      "07 October 2021": "07 Ottobre 2021",
      "09 April 2026": "09 Aprile 2026",
      "11 November 2020": "11 Novembre 2020",
      "13 December 2023": "13 Dicembre 2023",
      "15 November 2022": "15 Novembre 2022",
      "17 May 2023": "17 Maggio 2023",
      "18 June 2024": "18 Giugno 2024",
      "23 January 2025": "23 Gennaio 2025",
      "30 July 2025": "30 Luglio 2025",
      "Branch": "Branch",
      "Bug fixing": "Correzione bug",
      "Choose how to run G3W-SUITE": "Scegli come eseguire G3W-SUITE",
      "Collaborate and edit": "Collabora e modifica",
      "Connect your data": "Collega i tuoi dati",
      "Continuing development": "Sviluppo continuo",
      "Core components and extensions": "Componenti principali ed estensioni",
      "Development branch - 4.0": "Branch di sviluppo - 4.0",
      "Django": "Django",
      "Documentation ENG": "Documentazione ENG",
      "Enable geometric, attribute and relational editing in the browser. Configure forms, widgets and geographic or alphanumeric constraints, and use feature locks to coordinate multi-user editing. The responsive client also supports field work on tablets and smartphones, including offline editing.": "Abilita la modifica geometrica, degli attributi e delle relazioni nel browser. Configura moduli, widget e vincoli geografici o alfanumerici e usa il blocco delle feature per coordinare la modifica multiutente. Il client responsive supporta anche il lavoro sul campo da tablet e smartphone, inclusa la modalità offline.",
      "Explore G3W-SUITE": "Esplora G3W-SUITE",
      "Explore G3W-SUITE - G3W-Suite": "Esplora G3W-SUITE - G3W-Suite",
      "From QGIS project to operational WebGIS": "Dal progetto QGIS al WebGIS operativo",
      "G3W-SUITE is open source and can be self-hosted with Docker. The [Quick Start guide](/en/docs/quick-start/) walks through publishing a project; see the [Docker installation guide](/docs/docker/) for deployment details.": "G3W-SUITE è open source e può essere installata autonomamente con Docker. La [guida rapida](/en/docs/quick-start/) illustra la pubblicazione di un progetto; consulta la [guida all'installazione Docker](/docs/docker/) per i dettagli sulla distribuzione.",
      "G3W-SUITE publishes WebGIS services from QGIS projects and provides collaborative editing, analysis and flexible deployment options.": "G3W-SUITE pubblica servizi WebGIS da progetti QGIS e offre editing collaborativo, analisi e opzioni flessibili di distribuzione.",
      "G3W-SUITE publishes your QGIS projects as WebGIS services, keeping the cartography and workflows your team already uses.": "G3W-SUITE pubblica i progetti QGIS come servizi WebGIS, mantenendo la cartografia e i flussi di lavoro già utilizzati dal tuo team.",
      "G3W-SUITE uses multi-user feature locks, so a feature being edited by another user may be temporarily unavailable.": "G3W-SUITE usa il blocco delle feature per la modifica multiutente; una feature modificata da un altro utente potrebbe quindi non essere temporaneamente disponibile.",
      "Give users custom searches, query tools, geolocation, base maps and metadata from the QGIS project. Explore data with DataPlotly charts and QGIS print layouts, including atlases, or run QGIS Processing models from the web client. CSW, RNDT and INSPIRE integrations support information discovery and public-sector workflows.": "Offri agli utenti ricerche personalizzate, strumenti di interrogazione, geolocalizzazione, mappe di base e metadati del progetto QGIS. Esplora i dati con i grafici DataPlotly e i layout di stampa QGIS, inclusi gli atlanti, oppure esegui modelli QGIS Processing dal client web. Le integrazioni CSW, RNDT e INSPIRE supportano la ricerca delle informazioni e i flussi di lavoro della Pubblica Amministrazione.",
      "If you prefer managed infrastructure, GIS3W offers a hosting service with a dedicated Ubuntu LTS server, SSL, daily backups, a tuned PostgreSQL/PostGIS database, updates and technical support.": "Se preferisci un'infrastruttura gestita, GIS3W offre un servizio di hosting con server Ubuntu LTS dedicato, SSL, backup giornalieri, database PostgreSQL/PostGIS ottimizzato, aggiornamenti e supporto tecnico.",
      "Maintenance demo - 3.10": "Demo di manutenzione - 3.10",
      "No longer supported": "Non più supportato",
      "November 2026": "Novembre 2026",
      "Publish and organize": "Pubblica e organizza",
      "Publish projects while retaining their styles, forms, relations and print layouts. Organize services in thematic cartographic groups and manage users, roles and permissions for each project.": "Pubblica i progetti mantenendo stili, moduli, relazioni e layout di stampa. Organizza i servizi in gruppi cartografici tematici e gestisci utenti, ruoli e permessi per ogni progetto.",
      "Python": "Python",
      "QGIS": "QGIS",
      "QGIS API": "API QGIS",
      "QGIS WebGIS publishing workflow": "Flusso di pubblicazione WebGIS da QGIS",
      "Read about G3W-ADMIN": "Scopri G3W-ADMIN",
      "Read about G3W-ADMIN-FRONTEND": "Scopri G3W-ADMIN-FRONTEND",
      "Read about G3W-ADMIN-PDND": "Scopri G3W-ADMIN-PDND",
      "Read about G3W-ADMIN-PROCESSING": "Scopri G3W-ADMIN-PROCESSING",
      "Read about G3W-CLIENT": "Scopri G3W-CLIENT",
      "Read about G3W-SUITE-DOCKER": "Scopri G3W-SUITE-DOCKER",
      "Read about collaborative editing": "Scopri la modifica collaborativa",
      "Release date": "Data di rilascio",
      "Release notes": "Note di rilascio",
      "Search, analyze and share": "Cerca, analizza e condividi",
      "Stable demo - 3.11": "Demo stabile - 3.11",
      "Status": "Stato",
      "Supported branches and compatibility": "Branch supportati e compatibilità",
      "The core components are released under the MPL-2 licence, while optional integrations may use their own licence. All source repositories are available on [GitHub](https://github.com/g3w-suite).": "I componenti principali sono rilasciati con licenza MPL-2, mentre le integrazioni opzionali possono avere licenze proprie. Tutti i repository del codice sorgente sono disponibili su [GitHub](https://github.com/g3w-suite).",
      "The live demo shows a WebGIS management application for buildings and related maintenance, built from a QGIS project. Sign in to browse data, search, view charts and print reports based on geographic atlases.": "La demo mostra un'applicazione WebGIS per la gestione degli edifici e dei relativi interventi di manutenzione, basata su un progetto QGIS. Accedi per consultare i dati, effettuare ricerche, visualizzare grafici e stampare report basati su atlanti geografici.",
      "The next major version is under active development on QGIS 4.0 LTR.": "La prossima versione principale è in fase di sviluppo attivo con QGIS 4.0 LTR.",
      "To try geometric and relational editing, use the public demo account:": "Per provare la modifica geometrica e relazionale, usa l'account pubblico della demo:",
      "Try the maintenance branch on QGIS 3.40 LTR.": "Prova il branch di manutenzione con QGIS 3.40 LTR.",
      "Try the stable branch on QGIS 3.44 LTR.": "Prova il branch stabile con QGIS 3.44 LTR.",
      "Use the branch table to check the QGIS, Python and Django versions, support status, documentation and release notes.": "Consulta la tabella per verificare le versioni di QGIS, Python e Django, lo stato del supporto, la documentazione e le note di rilascio.",
      "WebGIS map interface": "Interfaccia cartografica WebGIS",
      "What you can explore in the demo": "Cosa puoi esplorare nella demo",
      "Work with PostgreSQL/PostGIS, Oracle Spatial, MSSQL, SQLite/SpatiaLite, GeoPackage, Shapefile, virtual layers and raster data, as well as WMS and WFS services.": "Lavora con PostgreSQL/PostGIS, Oracle Spatial, MSSQL, SQLite/SpatiaLite, GeoPackage, Shapefile, layer virtuali e dati raster, oltre che con servizi WMS e WFS.",
      "[Ask about managed hosting](#footer-help-title \"primary-button\") [Quick Start (self-hosted)](/en/docs/quick-start/ \"outline-button\")": "[Richiedi informazioni sull'hosting](#footer-help-title \"primary-button\") [Guida rapida (self-hosted)](/en/docs/quick-start/ \"outline-button\")",
      "[Follow development on GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev)": "[Segui lo sviluppo su GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev)",
      "[Open the 3.10 demo](https://v310.g3wsuite.it/it/map/demo-310/)": "[Apri la demo 3.10](https://v310.g3wsuite.it/it/map/demo-310/)",
      "[Open the 3.11 demo](https://v311.g3wsuite.it/)": "[Apri la demo 3.11](https://v311.g3wsuite.it/)",
      "[Release notes 3.10](/en/news/v3.10/)": "[Note di rilascio 3.10](/en/news/v3.10/)",
      "[Release notes 3.11](/en/news/v3.11/)": "[Note di rilascio 3.11](/en/news/v3.11/)",
      "password: **G3wsuite123**": "password: **G3wsuite123**",
      "user: **viewer1**": "utente: **viewer1**"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Explore G3W-SUITE - G3W-Suite",
    "description": "G3W-SUITE publishes WebGIS services from QGIS projects and provides collaborative editing, analysis and flexible deployment options."
  }
</script>
