# Quick Start

To publish your own project, you need QGIS Desktop, a running G3W-SUITE instance, and an account that can publish to a cartographic group. If you also need to create the group, check that your account has that permission.

If you do not have an instance yet, [install G3W-SUITE with Docker](docker.md) or [follow the demo tutorial with prepared data](demo.md#demo-tutorial).

## Steps

### 1. Create your QGIS project

Create a cartographic project with the layers, symbology, forms and print layouts your workflow requires.

Organize your projects and geographic data on your computer as described in the [manual](/docs/datamanagement/#organization-of-data-and-projects).

![QGIS project](/img/site-qgis.avif)

<iframe class="step__video" src="https://www.youtube.com/embed/-GV9xUoJKD4" title="{{t 'Quick Start step 1: create your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 2. Upload your geographic data

If your project uses local files such as Shapefile, GeoPackage, SpatiaLite or raster data, upload them to the server before publishing. The [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) module preserves the organization of your local data. For PostgreSQL/PostGIS or Oracle Spatial, allow the suite to connect to the database.

<iframe class="step__video" src="https://www.youtube.com/embed/8wKBoxxIs-4" title="{{t 'Quick Start step 2: upload your geographic data'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 3. Create a cartographic group

Choose an existing [cartographic group](admin-cartographic-groups.md#add-group) or create one if your account allows it. Services in the same group must use the group's coordinate reference system.

<iframe class="step__video" src="https://www.youtube.com/embed/P7hKruymHj4" title="{{t 'Quick Start step 3: create a cartographic group'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 4. Publish your QGIS project

Upload the `.qgs` or `.qgz` file to the cartographic group. No plugin is needed: the WebGIS service inherits the settings and functions configured in the QGIS project.

After saving, check that the project appears in the group's project list. Open it with **View map** and check that the expected layers load. See [Publish and update WebGIS services](admin-publishing.md) for permissions, publication options, and updates.

<iframe class="step__video" src="https://www.youtube.com/embed/gaxsTFC5uoo" title="{{t 'Quick Start step 4: publish your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

<script type="application/json" data-i18n>
{
  "it": {
    "1. Create your QGIS project": "1. Crea il tuo progetto QGIS",
    "2. Upload your geographic data": "2. Carica i tuoi dati geografici",
    "3. Create a cartographic group": "3. Crea un gruppo cartografico",
    "4. Publish your QGIS project": "4. Pubblica il tuo progetto QGIS",
    "After saving, check that the project appears in the group's project list. Open it with **View map** and check that the expected layers load. See [Publish and update WebGIS services](admin-publishing.md) for permissions, publication options, and updates.": "Dopo aver salvato, verifica che il progetto compaia nell'elenco del gruppo. Aprilo con **Visualizza mappa** e controlla che vengano caricati i layer previsti. Consulta [Pubblicare e aggiornare servizi WebGIS](admin-publishing.md) per permessi, opzioni di pubblicazione e aggiornamenti.",
    "Choose an existing [cartographic group](admin-cartographic-groups.md#add-group) or create one if your account allows it. Services in the same group must use the group's coordinate reference system.": "Scegli un [gruppo cartografico](admin-cartographic-groups.md#add-group) esistente o creane uno se il tuo account lo consente. I servizi dello stesso gruppo devono usare il sistema di riferimento del gruppo.",
    "Create a cartographic project with the layers, symbology, forms and print layouts your workflow requires.": "Crea un progetto cartografico con i layer, la simbologia, i moduli e i layout di stampa necessari al tuo flusso di lavoro.",
    "If you do not have an instance yet, [install G3W-SUITE with Docker](docker.md) or [follow the demo tutorial with prepared data](demo.md#demo-tutorial).": "Se non hai ancora un'istanza, [installa G3W-SUITE con Docker](docker.md) oppure [segui il tutorial della demo con i dati già pronti](demo.md#demo-tutorial).",
    "If your project uses local files such as Shapefile, GeoPackage, SpatiaLite or raster data, upload them to the server before publishing. The [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) module preserves the organization of your local data. For PostgreSQL/PostGIS or Oracle Spatial, allow the suite to connect to the database.": "Se il progetto usa file locali come Shapefile, GeoPackage, SpatiaLite o dati raster, caricali sul server prima della pubblicazione. Il modulo [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) mantiene l'organizzazione dei dati locali. Per PostgreSQL/PostGIS o Oracle Spatial, consenti alla suite di accedere al database.",
    "Organize your projects and geographic data on your computer as described in the [manual](/docs/datamanagement/#organization-of-data-and-projects).": "Organizza i progetti e i dati geografici sul tuo computer come descritto nel [manuale](/docs/datamanagement/#organization-of-data-and-projects).",
    "QGIS project": "Progetto QGIS",
    "Quick Start": "Guida rapida",
    "Quick Start step 1: create your QGIS project": "Guida rapida 1: crea il tuo progetto QGIS",
    "Quick Start step 2: upload your geographic data": "Guida rapida 2: carica i tuoi dati geografici",
    "Quick Start step 3: create a cartographic group": "Guida rapida 3: crea un gruppo cartografico",
    "Quick Start step 4: publish your QGIS project": "Guida rapida 4: pubblica il tuo progetto QGIS",
    "Steps": "Passaggi",
    "To publish your own project, you need QGIS Desktop, a running G3W-SUITE instance, and an account that can publish to a cartographic group. If you also need to create the group, check that your account has that permission.": "Per pubblicare un tuo progetto ti servono QGIS Desktop, un'istanza G3W-SUITE attiva e un account che possa pubblicare in un gruppo cartografico. Se devi anche creare il gruppo, verifica che l'account abbia il permesso necessario.",
    "Upload the `.qgs` or `.qgz` file to the cartographic group. No plugin is needed: the WebGIS service inherits the settings and functions configured in the QGIS project.": "Carica il file `.qgs` o `.qgz` nel gruppo cartografico. Non serve alcun plugin: il servizio WebGIS eredita le impostazioni e le funzioni configurate nel progetto QGIS."
  }
}
</script>
