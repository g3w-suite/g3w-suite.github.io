# QGIS: project settings

_**This section describes how to optimize your QGIS projects to publish as a WebGis service.**_

G3W-SUITE version 3.11 is compatible with QGIS projects built with the LTR version of QGIS 3.44.

Thanks to the integration with QGIS Server, all the symbology aspects associated with the singoly layers are automatically reproduced on the WebGis service

In the QGIS cartographic projects you can set some parameters and options that affect functionalities and contents in the derivative WebGis service, such as:
* the **webgis service identification name**
* the associated **basic metadata**
* the **capabilities of the service**
* **exclude associated print layouts** from the WebGIS service
* which layers are **queryable and searchable**
* which layers to expose with the different **OGC services (WMTS, WFS, WCS)**
* which **fields** (for each vector data) are exposed as WMS and/or WFS
* the **Themes (Views)** defined at the project level
* layer/group management from **embedded projects**
* the **structure of the query form** visible on the WebGis service
* the **editing widget**, **constraints** and **default values** (also based on QGIS expressions) for every fields of vector layers
* the associated **print layouts, atlas included**

The following paragraphs describe which QGIS project settings are more relevant in relation to the published WebGis service.

## Project property

- [Project properties and general settings](projectsettings-properties.md)

## Layers properties

- [Layer properties](projectsettings-layers.md)

## Print layouts
Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.

**Print layouts can contain more than one `Map` items and panoramic maps.**

You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.

**Atlas and report are also supported.**

Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.

See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographical-data-synchronization-on-the-server).

## Performances optimization

### Mandatory rules

* PostGreSQL/PostGis, SQLite/Spatialite and GeoPKG layers must have a **primary key**
* the primary key field and all fields involved in search, join, 1:n or N:M relations or editing function have to be **published as WMS**
* **don't use commas for aliases** associated with layers
* style settings defined at the auxiliary data level are not supported

### Tips
* when using rule-based/categorized classification **create indexes on the column(s) involved** in the rule expression
* start the project with **only a few layers turned on** by default
* do not exceed three nesting levels in the groups of layers defined in the TOC

<script type="application/json" data-i18n>
{
  "it": {
    "**Atlas and report are also supported.**": "**Sono supportati anche atlanti e report.**",
    "**Print layouts can contain more than one `Map` items and panoramic maps.**": "**I layout di stampa possono contenere più elementi `Map` e mappe panoramiche.**",
    "**don't use commas for aliases** associated with layers": "**non usare virgole negli alias** associati ai layer",
    "**exclude associated print layouts** from the WebGIS service": "**escludere layout di stampa associati** dal servizio WebGIS",
    "Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.": "Tutte le immagini presenti nei layout di stampa devono essere inserite nella cartella locale **`project_data`** (in una qualsiasi sottocartella) e sincronizzate sul server.",
    "Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.": "Tutti i layout di stampa associati al progetto QGIS pubblicato saranno associati automaticamente al servizio WebGIS pubblicato.",
    "Back to QGIS project settings": "Torna alle impostazioni del progetto QGIS",
    "G3W-SUITE version 3.11 is compatible with QGIS projects built with the LTR version of QGIS 3.44.": "G3W-SUITE versione 3.11 è compatibile con i progetti QGIS creati con la versione LTR di QGIS 3.44.",
    "General aspects": "Aspetti generali",
    "In the QGIS cartographic projects you can set some parameters and options that affect functionalities and contents in the derivative WebGis service, such as:": "Nei progetti cartografici QGIS è possibile impostare parametri e opzioni che influiscono sulle funzionalità e sui contenuti del servizio WebGIS derivato, ad esempio:",
    "Layer properties": "Proprietà dei layer",
    "Layers properties": "Proprietà dei layer",
    "Mandatory rules": "Regole obbligatorie",
    "Performances optimization": "Ottimizzazione delle prestazioni",
    "PostGreSQL/PostGis, SQLite/Spatialite and GeoPKG layers must have a **primary key**": "I layer PostGreSQL/PostGis, SQLite/Spatialite e GeoPKG devono avere una **chiave primaria**",
    "Print layouts": "Layout di stampa",
    "Print layouts and performance": "Layout di stampa e prestazioni",
    "Project properties and general settings": "Proprietà del progetto e impostazioni generali",
    "Project property": "Proprietà del progetto",
    "QGIS: project settings": "QGIS: impostazioni del progetto",
    "See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographical-data-synchronization-on-the-server).": "Vedere anche il paragrafo dedicato [Sincronizzazione dei dati geografici sul server](datamanagement#geographical-data-synchronization-on-the-server).",
    "Thanks to the integration with QGIS Server, all the symbology aspects associated with the singoly layers are automatically reproduced on the WebGis service": "Grazie all'integrazione con QGIS Server, tutti gli aspetti di simbologia associati ai singoli layer vengono riprodotti automaticamente nel servizio WebGIS.",
    "The following paragraphs describe which QGIS project settings are more relevant in relation to the published WebGis service.": "I paragrafi seguenti descrivono le impostazioni del progetto QGIS più rilevanti per il servizio WebGIS pubblicato.",
    "Tips": "Suggerimenti",
    "You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.": "È inoltre possibile impostare un **titolo personalizzato** (configurabile dal lato WebGIS), assegnando un **ID elemento** a un elemento **Etichetta**.",
    "_**This section describes how to optimize your QGIS projects to publish as a WebGis service.**_": "_**Questa sezione descrive come ottimizzare i progetti QGIS per pubblicarli come servizi WebGIS.**_",
    "do not exceed three nesting levels in the groups of layers defined in the TOC": "non superare tre livelli di annidamento nei gruppi di layer definiti nel TOC",
    "layer/group management from **embedded projects**": "la gestione di layer e gruppi provenienti da **progetti incorporati**",
    "start the project with **only a few layers turned on** by default": "impostare il progetto in modo che all'avvio siano attivi **solo pochi layer**",
    "style settings defined at the auxiliary data level are not supported": "le impostazioni di stile definite a livello di dati ausiliari non sono supportate",
    "the **Themes (Views)** defined at the project level": "i **Temi (viste)** definiti a livello di progetto",
    "the **capabilities of the service**": "le **capacità del servizio**",
    "the **editing widget**, **constraints** and **default values** (also based on QGIS expressions) for every fields of vector layers": "il **widget di modifica**, i **vincoli** e i **valori predefiniti** (anche basati su espressioni QGIS) per ciascun campo dei layer vettoriali",
    "the **structure of the query form** visible on the WebGis service": "la **struttura del modulo di interrogazione** visibile nel servizio WebGIS",
    "the **webgis service identification name**": "il **nome identificativo del servizio WebGIS**",
    "the associated **basic metadata**": "i **metadati di base** associati",
    "the associated **print layouts, atlas included**": "i **layout di stampa associati, compresi gli atlanti**",
    "the primary key field and all fields involved in search, join, 1:n or N:M relations or editing function have to be **published as WMS**": "il campo chiave primaria e tutti i campi usati per ricerche, join, relazioni 1:n o N:M o funzioni di modifica devono essere **pubblicati come WMS**",
    "when using rule-based/categorized classification **create indexes on the column(s) involved** in the rule expression": "quando si usa una classificazione basata su regole o categorie, **creare indici sulle colonne coinvolte** nell'espressione della regola",
    "which **fields** (for each vector data) are exposed as WMS and/or WFS": "quali **campi** (per ciascun dato vettoriale) esporre come WMS e/o WFS",
    "which layers are **queryable and searchable**": "quali layer sono **interrogabili e ricercabili**",
    "which layers to expose with the different **OGC services (WMTS, WFS, WCS)**": "quali layer esporre tramite i diversi **servizi OGC (WMTS, WFS, WCS)**"
  }
}
</script>
