# <span id="features"></span>Open Source Ecosystem

G3W-SUITE is made of modular open source components, available on [GitHub](https://github.com/g3w-suite).

- web map client
- QGIS publishing
- online editing
- relational editing
- multi-user feature-lock
- query builder
- joins & relations 1:N / N:M
- DataPlotly
- QGIS print layouts
- atlases
- OSM base maps
- geolocation
- tablet & smartphone
- geographic constraints
- alphanumeric constraints
- permissions management
- PostgreSQL / PostGIS
- Oracle Spatial
- SQLite / SpatiaLite
- GeoPackage
- Shapefile
- raster
- WMS / WFS
- cadastre
- CDU
- civic address register
- RNDT / INSPIRE
- PDND
- public administration

[Features](/en/about/#features) · [Demo](/en/docs/demos/) · [Components](/en/about/#components) · [People](/en/about/#people) · [Versions and compatibility](/en/docs/versions/)

## <span id="components"></span>[G3W-ADMIN](/en/docs/components/g3w-admin/)

![{{t 'G3W-ADMIN administration interface'}}](/img/site-webgis-management-preview.jpg)

**Server component · Python / Django**

The server module of G3W-SUITE. Written in Python on Django LTS, it publishes QGIS projects as WebGIS services, preserving styles, forms and relations. Manages users, groups, access permissions and functional modules that can be activated per project.

[g3w-suite/g3w-admin](https://github.com/g3w-suite/g3w-admin "github-button") [Features](/en/docs/components/g3w-admin/ "outline-button")

## [G3W-CLIENT](/en/docs/components/g3w-client/)

![{{t 'G3W-CLIENT web map interface'}}](/img/site-webgis-client-preview.jpg)

**Map client · JavaScript / Vue**

The WebGIS cartographic viewer. Written in JavaScript with Vue.js, it connects to the QGIS server and provides map navigation, custom searches, web editing (including offline mode), DataPlotly chart visualisation, print layouts and much more.

[g3w-suite/g3w-client](https://github.com/g3w-suite/g3w-client "github-button") [Features](/en/docs/components/g3w-client/ "outline-button")

## [G3W-ADMIN-PROCESSING](/en/docs/components/g3w-admin-processing/)

![{{t 'QGIS Processing model builder'}}](/img/site-model-builder-overview.png)

**Optional module · Python**

Integrates QGIS Processing API directly into G3W-SUITE. Upload a `.model3` file in the administration panel and your geoprocessing algorithms become immediately available in the web client, with support for both synchronous and asynchronous (batch) execution.

[g3w-suite/g3w-admin-processing](https://github.com/g3w-suite/g3w-admin-processing "github-button") [Features](/en/docs/components/g3w-admin-processing/ "outline-button")

## [G3W-SUITE-DOCKER](/en/docs/components/g3w-suite-docker/)

![{{t 'G3W-SUITE Docker services diagram'}}](/img/site-g3w-suite-docker.png)

**Deployment · Docker**

The official Docker stack to run G3W-SUITE with a single command. Includes NGINX, PostgreSQL/PostGIS, QGIS Server and all required services, pre-configured and ready to use. This is the recommended installation method for both development and production.

[g3w-suite/g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker "github-button") [Features](/en/docs/components/g3w-suite-docker/ "outline-button")

## [G3W-ADMIN-PORTAL](/en/docs/components/g3w-admin-portal/)

![{{t 'G3W-SUITE public portal'}}](/img/site-frontend.png)

**Optional module · CSS / JavaScript**

A customisable public portal for G3W-SUITE. Replaces the default login screen with a branded landing page showing logo, title and the list of published cartographic groups - fully configurable per installation.

[g3w-suite/g3w-admin-portal](https://github.com/g3w-suite/g3w-admin-portal "github-button") [Features](/en/docs/components/g3w-admin-portal/ "outline-button")

## [G3W-ADMIN-PDND](/en/docs/components/g3w-admin-pdnd/)

![{{t 'PDND interoperability diagram'}}](/img/site-g3w-admin-pdnd.png)

**Optional module · Python · MIT**

G3W-SUITE integration with the Italian **Piattaforma Digitale Nazionale Dati** (PDND). Adds voucher token authentication as required by the Italian interoperability guidelines, enabling WebGIS APIs compliant with AgID standards.

[g3w-suite/g3w-admin-pdnd](https://github.com/g3w-suite/g3w-admin-pdnd "github-button") [Features](/en/docs/components/g3w-admin-pdnd/ "outline-button")

## [G3W-CLIENT-PLUGIN-EDITING](/en/docs/components/g3w-client-plugin-editing/)

![{{t 'G3W-CLIENT editing tools'}}](/img/manual-english-demo-editing-web.png)

**Built-in plugin · JavaScript / Vue · MPL-2**

A JavaScript plugin for **collaborative editing of geometries and attributes** directly in the map client. Authorised users can create, modify and delete vector features using advanced snap, split and multi-relation tools. The code is now maintained inside `g3w-admin`.

[g3w-admin / editing](https://github.com/g3w-suite/g3w-admin/tree/dev/g3w-admin/editing "github-button") [Features](/en/docs/components/g3w-client-plugin-editing/ "outline-button")

## <span id="participate"></span>Contribute to the project

Check out the public roadmap, join the community discussions or sponsor G3W-SUITE development.

[g3w-suite on GitHub](https://github.com/g3w-suite "github-button") [Public roadmap](https://github.com/orgs/g3w-suite/projects/12 "outline-button") [Discussions](https://github.com/g3w-suite/community/discussions "outline-button")

### <span id="governing-board"></span><span id="people"></span>{{t 'Governing board'}}

- [![Francesco Boccacci](https://github.com/volterra79.png?size=240) Francesco Boccacci (@volterra79)](/en/about/francesco-boccacci/)
- [![Leonardo Lami](https://github.com/leolami.png?size=240) Leonardo Lami](/en/about/leonardo-lami/)
- [![Matteo Tosi](https://github.com/Raruto.png?size=240) Matteo Tosi (@Raruto)](/en/about/matteo-tosi/)
- [![Walter Lorenzetti](https://github.com/wlorenzetti.png?size=240) Walter Lorenzetti (@wlorenzetti)](/en/about/walter-lorenzetti/)

### <span id="team"></span>Contributors

- [![Alessandro Pasotti](https://github.com/elpaso.png?size=240) Alessandro Pasotti (@elpaso)](/en/about/alessandro-pasotti/)
- [![Andrea Antonello](https://github.com/moovida.png?size=240) Andrea Antonello (@moovida)](/en/about/andrea-antonello/)
- [![Tudor Barascu](https://github.com/tudorbarascu.png?size=240) Tudor Barascu (@tudorbarascu)](/en/about/tudor-barascu/)

<script type="application/json" data-i18n>
  {
    "it": {
      "**Built-in plugin · JavaScript / Vue · MPL-2**": "**Plugin integrato · JavaScript / Vue · MPL-2**",
      "**Deployment · Docker**": "**Distribuzione · Docker**",
      "**Map client · JavaScript / Vue**": "**Client cartografico · JavaScript / Vue**",
      "**Optional module · CSS / JavaScript**": "**Modulo opzionale · CSS / JavaScript**",
      "**Optional module · Python · MIT**": "**Modulo opzionale · Python · MIT**",
      "**Optional module · Python**": "**Modulo opzionale · Python**",
      "**Server component · Python / Django**": "**Componente server · Python / Django**",
      "A JavaScript plugin for **collaborative editing of geometries and attributes** directly in the map client. Authorised users can create, modify and delete vector features using advanced snap, split and multi-relation tools. The code is now maintained inside `g3w-admin`.": "Plugin JavaScript per la **modifica collaborativa delle geometrie e degli attributi** direttamente nel client cartografico. Gli utenti autorizzati possono creare, modificare ed eliminare feature vettoriali usando strumenti avanzati di snap, split e multi-relazione. Il codice è ora mantenuto all'interno di `g3w-admin`.",
      "A customisable public portal for G3W-SUITE. Replaces the default login screen with a branded landing page showing logo, title and the list of published cartographic groups - fully configurable per installation.": "Portale pubblico personalizzabile per G3W-SUITE. Sostituisce la schermata di accesso predefinita con una pagina di atterraggio con logo, titolo e lista dei gruppi cartografici pubblicati, configurabile per ogni installazione.",
      "Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration.": "Porta i progetti QGIS nel lavoro quotidiano con un WebGIS open source e modulare, pensato per la collaborazione.",
      "Check out the public roadmap, join the community discussions or sponsor G3W-SUITE development.": "Consulta la roadmap pubblica, partecipa alle discussioni della community o sponsorizza lo sviluppo di G3W-SUITE.",
      "Components": "Componenti",
      "Contribute to the project": "Contribuisci al progetto",
      "Contributors": "Contributori",
      "Discussions": "Discussioni",
      "Features": "Funzionalità",
      "G3W-ADMIN administration interface": "Interfaccia di amministrazione G3W-ADMIN",
      "G3W-CLIENT editing tools": "Strumenti di modifica di G3W-CLIENT",
      "G3W-CLIENT web map interface": "Interfaccia cartografica web G3W-CLIENT",
      "G3W-SUITE Docker services diagram": "Schema dei servizi Docker di G3W-SUITE",
      "G3W-SUITE integration with the Italian **Piattaforma Digitale Nazionale Dati** (PDND). Adds voucher token authentication as required by the Italian interoperability guidelines, enabling WebGIS APIs compliant with AgID standards.": "Integrazione di G3W-SUITE con la **Piattaforma Digitale Nazionale Dati** (PDND). Aggiunge l'autenticazione tramite voucher token richiesta dalle linee guida di interoperabilità italiane, abilitando l'esposizione di API WebGIS conformi agli standard AgID.",
      "G3W-SUITE is made of modular open source components, available on [GitHub](https://github.com/g3w-suite).": "G3W-SUITE è composto da componenti modulari open source, disponibili su [GitHub](https://github.com/g3w-suite).",
      "G3W-SUITE public portal": "Portale pubblico G3W-SUITE",
      "Governing board": "Consiglio direttivo",
      "Integrates QGIS Processing API directly into G3W-SUITE. Upload a `.model3` file in the administration panel and your geoprocessing algorithms become immediately available in the web client, with support for both synchronous and asynchronous (batch) execution.": "Integra le API di QGIS Processing direttamente in G3W-SUITE. Carica un file `.model3` nel pannello di amministrazione: gli algoritmi di geoprocessing diventano subito disponibili nel client web, sia con esecuzione sincrona sia asincrona (batch).",
      "OSM base maps": "carte di base OSM",
      "Open Source Ecosystem": "Ecosistema Open Source",
      "Open Source Ecosystem - G3W-Suite": "Ecosistema Open Source - G3W-Suite",
      "PDND interoperability diagram": "Schema di interoperabilità PDND",
      "People": "Persone",
      "Public roadmap": "Roadmap pubblica",
      "QGIS Processing model builder": "Model Builder di QGIS Processing",
      "QGIS print layouts": "stampa layout QGIS",
      "QGIS publishing": "pubblicazione QGIS",
      "The WebGIS cartographic viewer. Written in JavaScript with Vue.js, it connects to the QGIS server and provides map navigation, custom searches, web editing (including offline mode), DataPlotly chart visualisation, print layouts and much more.": "Il viewer cartografico WebGIS. Scritto in JavaScript con Vue.js, si collega al server QGIS e offre navigazione della mappa, ricerche personalizzate, editing su web (anche in modalità offline), visualizzazione grafici DataPlotly, stampa e molto altro.",
      "The official Docker stack to run G3W-SUITE with a single command. Includes NGINX, PostgreSQL/PostGIS, QGIS Server and all required services, pre-configured and ready to use. This is the recommended installation method for both development and production.": "Lo stack Docker ufficiale per avviare G3W-SUITE con un singolo comando. Include NGINX, PostgreSQL/PostGIS, QGIS Server e tutti i servizi necessari, già configurati. È il metodo di installazione raccomandato sia in sviluppo che in produzione.",
      "The server module of G3W-SUITE. Written in Python on Django LTS, it publishes QGIS projects as WebGIS services, preserving styles, forms and relations. Manages users, groups, access permissions and functional modules that can be activated per project.": "Il modulo server di G3W-SUITE. Scritto in Python su Django LTS, pubblica i progetti QGIS come servizi WebGIS mantenendo stili, form e relazioni. Gestisce utenti, gruppi, permessi di accesso e moduli funzionali attivabili per singolo progetto.",
      "Versions and compatibility": "Versioni e compatibilità",
      "alphanumeric constraints": "vincoli alfanumerici",
      "atlases": "atlanti",
      "cadastre": "catasto",
      "civic address register": "civici e stradario",
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
      "web map client": "client cartografico"
    }
  }
</script>
<script type="application/json" data-i18n-meta>
  {
    "title": "Open Source Ecosystem - G3W-Suite",
    "description": "Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration."
  }
</script>
