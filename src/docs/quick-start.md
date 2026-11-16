# Quick Start

Already running G3W-SUITE, or want to try publishing a project on the online demo? Start with these four steps.

## Steps

### 1. Create your QGIS project

Create a cartographic project with the layers, symbology, forms and print layouts your workflow requires.

Organize your projects and geographic data on your computer as described in the [manual](/docs/datamanagement/#organization-of-data-and-projects).

![QGIS project](/img/site-qgis.jpg)

<iframe class="step__video" src="https://www.youtube.com/embed/-GV9xUoJKD4" title="{{t 'Quick Start step 1: create your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 2. Upload your geographic data

If your project uses local files such as Shapefile, GeoPackage, SpatiaLite or raster data, upload them to the server before publishing. The [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) module preserves the organization of your local data. For PostgreSQL/PostGIS or Oracle Spatial, allow the suite to connect to the database.

<iframe class="step__video" src="https://www.youtube.com/embed/8wKBoxxIs-4" title="{{t 'Quick Start step 2: upload your geographic data'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 3. Create a cartographic group

Create a [Cartographic Group](/docs/admin-users/#add-group-users) to organize WebGIS services by theme and function. Services in the same group must use the group's coordinate reference system.

<iframe class="step__video" src="https://www.youtube.com/embed/P7hKruymHj4" title="{{t 'Quick Start step 3: create a cartographic group'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 4. Publish your QGIS project

Upload the `.qgs` or `.qgz` file to the cartographic group. No plugin is needed: the WebGIS service inherits the settings and functions configured in the QGIS project.

For further setup, see the [administration manual](/docs/g3wsuite_administration/#publication-of-new-webgis-services), the [online tutorial](/docs/demo/) or the [Docker installation guide](/docs/docker/).

<iframe class="step__video" src="https://www.youtube.com/embed/gaxsTFC5uoo" title="{{t 'Quick Start step 4: publish your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

[Try the online demo](/en/docs/demos/#demo-3-11)

<script type="application/json" data-i18n>
{
  "it": {
    "1. Create your QGIS project": "1. Crea il tuo progetto QGIS",
    "2. Upload your geographic data": "2. Carica i tuoi dati geografici",
    "3. Create a cartographic group": "3. Crea un gruppo cartografico",
    "4. Publish your QGIS project": "4. Pubblica il tuo progetto QGIS",
    "Already running G3W-SUITE, or want to try publishing a project on the online demo? Start with these four steps.": "Hai già installato G3W-SUITE o vuoi provare a pubblicare un progetto nella demo online? Segui questi quattro passaggi.",
    "Create a [Cartographic Group](/docs/admin-users/#add-group-users) to organize WebGIS services by theme and function. Services in the same group must use the group's coordinate reference system.": "Crea un [Gruppo Cartografico](/docs/admin-users/#add-group-users) per organizzare i servizi WebGIS per tema e funzione. I servizi dello stesso gruppo devono usare il sistema di riferimento del gruppo.",
    "Create a cartographic project with the layers, symbology, forms and print layouts your workflow requires.": "Crea un progetto cartografico con i layer, la simbologia, i moduli e i layout di stampa necessari al tuo flusso di lavoro.",
    "For further setup, see the [administration manual](/docs/g3wsuite_administration/#publication-of-new-webgis-services), the [online tutorial](/docs/demo/) or the [Docker installation guide](/docs/docker/).": "Per ulteriori informazioni, consulta il [manuale di amministrazione](/docs/g3wsuite_administration/#publication-of-new-webgis-services), il [tutorial online](/docs/demo/) o la [guida all'installazione Docker](/docs/docker/).",
    "If your project uses local files such as Shapefile, GeoPackage, SpatiaLite or raster data, upload them to the server before publishing. The [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) module preserves the organization of your local data. For PostgreSQL/PostGIS or Oracle Spatial, allow the suite to connect to the database.": "Se il progetto usa file locali come Shapefile, GeoPackage, SpatiaLite o dati raster, caricali sul server prima della pubblicazione. Il modulo [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) mantiene l'organizzazione dei dati locali. Per PostgreSQL/PostGIS o Oracle Spatial, consenti alla suite di accedere al database.",
    "Organize your projects and geographic data on your computer as described in the [manual](/docs/datamanagement/#organization-of-data-and-projects).": "Organizza i progetti e i dati geografici sul tuo computer come descritto nel [manuale](/docs/datamanagement/#organization-of-data-and-projects).",
    "QGIS project": "Progetto QGIS",
    "Quick Start": "Guida rapida",
    "Quick Start step 1: create your QGIS project": "Guida rapida 1: crea il tuo progetto QGIS",
    "Quick Start step 2: upload your geographic data": "Guida rapida 2: carica i tuoi dati geografici",
    "Quick Start step 3: create a cartographic group": "Guida rapida 3: crea un gruppo cartografico",
    "Quick Start step 4: publish your QGIS project": "Guida rapida 4: pubblica il tuo progetto QGIS",
    "Steps": "Passaggi",
    "Try the online demo": "Prova la demo online",
    "Upload the `.qgs` or `.qgz` file to the cartographic group. No plugin is needed: the WebGIS service inherits the settings and functions configured in the QGIS project.": "Carica il file `.qgs` o `.qgz` nel gruppo cartografico. Non serve alcun plugin: il servizio WebGIS eredita le impostazioni e le funzioni configurate nel progetto QGIS."
  }
}
</script>
