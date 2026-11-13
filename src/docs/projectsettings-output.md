# Print layouts and performance

[Back to QGIS project settings](projectsettings.md)

## Print layouts
Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.

**Print layouts can contain more than one `Map` items and panoramic maps.**

You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.

**Atlas and report are also supported.**

Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.

See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographic-data-synchronization-on-the-server).

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
      "**don't use commas for aliases** associated with layers": "**non usare virgole negli alias** associati ai layer",
      "**Print layouts can contain more than one `Map` items and panoramic maps.**": "**I layout di stampa possono contenere più elementi `Map` e mappe panoramiche.**",
      "Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.": "Tutte le immagini presenti nei layout di stampa devono essere inserite nella cartella locale **`project_data`** (in una qualsiasi sottocartella) e sincronizzate sul server.",
      "Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.": "Tutti i layout di stampa associati al progetto QGIS pubblicato saranno associati automaticamente al servizio WebGIS pubblicato.",
      "Back to QGIS project settings": "Torna alle impostazioni del progetto QGIS",
      "do not exceed three nesting levels in the groups of layers defined in the TOC": "non superare tre livelli di annidamento nei gruppi di layer definiti nel TOC",
      "Mandatory rules": "Regole obbligatorie",
      "Performances optimization": "Ottimizzazione delle prestazioni",
      "PostGreSQL/PostGis, SQLite/Spatialite and GeoPKG layers must have a **primary key**": "I layer PostGreSQL/PostGis, SQLite/Spatialite e GeoPKG devono avere una **chiave primaria**",
      "Print layouts": "Layout di stampa",
      "Print layouts and performance": "Layout di stampa e prestazioni",
      "See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographic-data-synchronization-on-the-server).": "Vedere anche il paragrafo dedicato [Sincronizzazione dei dati geografici sul server](datamanagement#geographic-data-synchronization-on-the-server).",
      "start the project with **only a few layers turned on** by default": "impostare il progetto in modo che all'avvio siano attivi **solo pochi layer**",
      "style settings defined at the auxiliary data level are not supported": "le impostazioni di stile definite a livello di dati ausiliari non sono supportate",
      "the primary key field and all fields involved in search, join, 1:n or N:M relations or editing function have to be **published as WMS**": "il campo chiave primaria e tutti i campi usati per ricerche, join, relazioni 1:n o N:M o funzioni di modifica devono essere **pubblicati come WMS**",
      "Tips": "Suggerimenti",
      "when using rule-based/categorized classification **create indexes on the column(s) involved** in the rule expression": "quando si usa una classificazione basata su regole o categorie, **creare indici sulle colonne coinvolte** nell'espressione della regola",
      "You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.": "È inoltre possibile impostare un **titolo personalizzato** (configurabile dal lato WebGIS), assegnando un **ID elemento** a un elemento **Etichetta**."
    }
  }
</script>
