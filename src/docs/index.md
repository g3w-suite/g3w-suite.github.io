# G3W-SUITE 3.11 Manual

G3W-SUITE is a framework based on Django and Python that integrates QGIS components to build a Geographic Information System and publish QGIS projects on the Web.

The current release (3.11) is compatible with QGIS 3.44 LTR (Server and Desktop). G3W-SUITE includes:

- **QGIS Desktop** for managing geographic data and creating cartographic projects.
- **QGIS Server** for publishing QGIS projects as OGC services.
- **G3W-ADMIN** for project management, access control, OGC proxy and REST API.
- **G3W-CLIENT** for consulting and interacting with OGC services.
- **The optional geographic portal** for accessing information, thematic groups and WebGIS services.

Through the web interface, administrators can publish and organize QGIS projects, manage users and roles, configure search tools, enable online editing and functional modules, and assign access permissions.

## Getting started

Follow the [Quick Start](quick-start.md) to publish your own project, or use the [demo tutorial](demo.md#demo-tutorial) to practice with prepared data.

- [G3W-SUITE 3.11 Manual](index.md)
- [Quick Start](quick-start.md)
- [Demo](demo.md)
- [Publish a WebGIS service](demo-publish.md)
- [Try layer tools in the demo](demo-widgets.md)
- [Try online editing](demo-editing.md)
- [Components of G3W-SUITE](components.md)
- [Versions and compatibility](versions.md)

## Install and maintain

Use Docker for a containerized deployment, or follow the manual installation guide if you manage the system packages and services yourself.

- [Docker installation](docker.md)
- [Manual installation](install.md)
- [Docker environment variables](docker_env.md)
- [Settings](settings.md)
- [Social login](social_authentication.md)
- [Double Factor Authentication (2FA)](twofa.md)

## Prepare and publish a WebGIS

- [Manage QGIS data](datamanagement.md)
- [QGIS: project settings](projectsettings.md)
- [Project properties](projectsettings-properties.md)
- [Layer properties](projectsettings-layers.md)
- [WebGIS roles and organization](user_groups_organization.md)
- [Access policy examples](organization-examples.md)
- [Administration panel](g3wsuite_administration.md)
- [Users and macro-groups](admin-users.md)
- [Cartographic groups](admin-cartographic-groups.md)
- [Manage cartographic groups](admin-group-management.md)
- [Publish and update WebGIS services](admin-publishing.md)
- [G3W-SUITE base layers](base_layers.md)
- [Group base layers and languages](admin-base-layers.md)
- [Layer tools](admin-widgets-setup.md)
- [Layer visibility and constraints](admin-widgets-controls.md)
- [Search widgets](admin-search.md)
- [Configure charts](admin-charts.md)

For the complete workflow, see [publish and update WebGIS services](admin-publishing.md).

## Use and customize the WebGIS

- [Access portal](g3wsuite_access_portal.md)
- [Map client](g3wsuite_client.md)
- [Map navigation and queries](client-map-interaction.md)
- [Map queries and results](client-map-queries.md)
- [Layers and attribute table](client-layers.md)
- [Map tools](client-tools-and-toc.md)
- [Bottom panel and time series](client-bottom-session.md)
- [Online editing](g3wsuite_editing.md)
- [Prepare a project for editing](editing-project-settings.md)
- [Editing permissions](editing-administration-settings.md)
- [Editing tools](editing-client-tools.md)
- [Editing related records](editing-relations.md)
- [Editing constraints](editing-constraints.md)
- [Geocoding](editing-geocoding.md)
- [Branding](branding.md)

## Integrate and contribute

- [Editing via IFRAME](g3wsuite_editing_iframe.md)
- [Elasticsearch integration](elasticsearch.md)
- [Translate G3W-SUITE](translation.md)

![G3W-SUITE administration panel](/img/installation-english-admin.avif)
![G3W-SUITE cartographic client](/img/installation-english-client.avif)

<script type="application/json" data-i18n>
  {
    "it": {
      "**G3W-ADMIN** for project management, access control, OGC proxy and REST API.": "**G3W-ADMIN** per la gestione dei progetti, il controllo degli accessi, il proxy OGC e le API REST.",
      "**G3W-CLIENT** for consulting and interacting with OGC services.": "**G3W-CLIENT** per consultare e utilizzare i servizi OGC.",
      "**QGIS Desktop** for managing geographic data and creating cartographic projects.": "**QGIS Desktop** per gestire i dati geografici e creare progetti cartografici.",
      "**QGIS Server** for publishing QGIS projects as OGC services.": "**QGIS Server** per pubblicare i progetti QGIS come servizi OGC.",
      "**The optional geographic portal** for accessing information, thematic groups and WebGIS services.": "**Il portale geografico opzionale** per accedere alle informazioni, ai gruppi tematici e ai servizi WebGIS.",
      "Access policy examples": "Esempi di criteri di accesso",
      "Access portal": "Portale di accesso",
      "Administration panel": "Pannello di amministrazione",
      "Bottom panel and time series": "Pannello inferiore e serie temporali",
      "Branding": "Personalizzazione del marchio",
      "Cartographic groups": "Gruppi cartografici",
      "Components": "Componenti",
      "Components of G3W-SUITE": "Componenti di G3W-SUITE",
      "Configure charts": "Configurare i grafici",
      "Demo": "Demo",
      "Demo tutorial": "Tutorial della demo",
      "Docker environment variables": "Variabili d'ambiente di Docker",
      "Docker installation": "Installazione con Docker",
      "Double Factor Authentication (2FA)": "Autenticazione a due fattori (2FA)",
      "Editing constraints": "Vincoli per la modifica",
      "Editing permissions": "Permessi di modifica",
      "Editing related records": "Modificare i record correlati",
      "Editing tools": "Strumenti di modifica",
      "Editing via IFRAME": "Modifica tramite IFRAME",
      "Elasticsearch": "Elasticsearch",
      "Elasticsearch integration": "Integrazione Elasticsearch",
      "Follow the [Quick Start](quick-start.md) to publish your own project, or use the [demo tutorial](demo.md#demo-tutorial) to practice with prepared data.": "Segui la [guida rapida](quick-start.md) per pubblicare un tuo progetto, oppure esercitati con i dati già pronti seguendo il [tutorial della demo](demo.md#demo-tutorial).",
      "For the complete workflow, see [publish and update WebGIS services](admin-publishing.md).": "Per il flusso completo, consulta [pubblicare e aggiornare servizi WebGIS](admin-publishing.md).",
      "G3W-SUITE 3.11 Manual": "Manuale G3W-SUITE 3.11",
      "G3W-SUITE administration panel": "Pannello di amministrazione di G3W-SUITE",
      "G3W-SUITE base layers": "Livelli di base di G3W-SUITE",
      "G3W-SUITE cartographic client": "Client cartografico di G3W-SUITE",
      "G3W-SUITE is a framework based on Django and Python that integrates QGIS components to build a Geographic Information System and publish QGIS projects on the Web.": "G3W-SUITE è un framework basato su Django e Python che integra componenti QGIS per creare un sistema informativo geografico e pubblicare progetti QGIS sul web.",
      "Geocoding": "Geocodifica",
      "Getting started": "Per iniziare",
      "Group base layers and languages": "Layer di base e lingue dei gruppi",
      "Install and maintain": "Installare e mantenere",
      "Integrate and contribute": "Integrare e contribuire",
      "Layer properties": "Proprietà dei layer",
      "Layer tools": "Strumenti dei layer",
      "Layer visibility and constraints": "Visibilità e vincoli dei layer",
      "Layers and attribute table": "Layer e tabella degli attributi",
      "Manage QGIS data": "Gestire i dati QGIS",
      "Manage cartographic groups": "Gestire i gruppi cartografici",
      "Manual": "Manuale",
      "Manual installation": "Installazione manuale",
      "Map client": "Client cartografico",
      "Map navigation and queries": "Navigazione e interrogazione della mappa",
      "Map queries and results": "Interrogazioni e risultati della mappa",
      "Map tools": "Strumenti della mappa",
      "Online editing": "Modifica online",
      "Prepare a project for editing": "Preparare un progetto per la modifica",
      "Prepare and publish a WebGIS": "Preparare e pubblicare un WebGIS",
      "Project properties": "Proprietà del progetto",
      "Publish a WebGIS service": "Pubblicare un servizio WebGIS",
      "Publish and update WebGIS services": "Pubblicare e aggiornare i servizi WebGIS",
      "QGIS: project settings": "QGIS: impostazioni del progetto",
      "Quick Start": "Guida rapida",
      "Search widgets": "Widget di ricerca",
      "Settings": "Impostazioni",
      "Social login": "Accesso con account social",
      "Technological infrastructure": "Infrastruttura tecnologica",
      "The current release (3.11) is compatible with QGIS 3.44 LTR (Server and Desktop). G3W-SUITE includes:": "La versione attuale (3.11) è compatibile con QGIS 3.44 LTR (Server e Desktop). G3W-SUITE comprende:",
      "Through the web interface, administrators can publish and organize QGIS projects, manage users and roles, configure search tools, enable online editing and functional modules, and assign access permissions.": "Dall'interfaccia web gli amministratori possono pubblicare e organizzare progetti QGIS, gestire utenti e ruoli, configurare gli strumenti di ricerca, abilitare la modifica online e i moduli funzionali e assegnare i permessi di accesso.",
      "Translate G3W-SUITE": "Tradurre G3W-SUITE",
      "Try layer tools in the demo": "Provare gli strumenti dei layer nella demo",
      "Try online editing": "Provare la modifica online",
      "Tutorial": "Tutorial",
      "Use Docker for a containerized deployment, or follow the manual installation guide if you manage the system packages and services yourself.": "Usa Docker per un'installazione in container, oppure segui la guida all'installazione manuale se gestisci direttamente i pacchetti e i servizi di sistema.",
      "Use and customize the WebGIS": "Usare e personalizzare il WebGIS",
      "Users and macro-groups": "Utenti e macrogruppi",
      "Versions and compatibility": "Versioni e compatibilità",
      "WebGIS roles and organization": "Ruoli e organizzazione WebGIS"
    }
  }
</script>
