# G3W-SUITE QPROCESSING: Model Builder & Processing

Release date: **13 December 2023**

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Leonardo Lami](/en/about/leonardo-lami/)


### **The module dedicated to the creation of geographic analyzes on the web is based on the automated analysis models prepared on QGIS through the Processing ModelDesigner.**

![G3W-Suite Processing](/img/site-g3wsuite-processing.avif)

#### The setup flow is very simple:

1. **Set up your analysis model on QGIS using the ModelDesigner**
2. **Upload the model file (.model3) to G3W-SUITE and associate it with one or more WebGis projects**
3. **The model is used directly on the web side, displaying and downloading the results created**

The analyzes are performed in "on line" mode. At the end of the analysis flow, the results will be uploaded to the map (if geographical) and available for download.

Even if the analysis operations to be performed are limited to those performed by a single analysis module, it is necessary to implement a model using the ModelDesigner. This is also to distinguish the options set beforehand from those available to the user.

![Screenshot: Model Builder Overview](/img/site-model-builder-overview.avif) ![Screenshot: Model Output](/img/site-model-output.avif)

## QGIS Model Builder features and settings

### Input type supported

- **Boolean**
- **Distance**
- **Fields Mapper**
- **Number**
- **Raster Layers**
- **Vector Features (selected feature of a layer)**
- **Vector Layers**

It is also possible to define project layers as default input of the individual modules.

This option limits the use of the model to a specific project or to projects containing the layers defined as inputs.

**Additional input types will be integrated into the next version of the module!**

![Screenshot: Inputs](/img/site-inputs.avif)

### Managed algorithms

**All QGIS modules, considering limitations in handling options/inputs associated with managed type of inputs**

![Screenshot: Algoritmi](/img/site-algoritmi.avif)

### Further settings

- **input order in the model form**

![Screenshot: Reorder Model Inputs](/img/site-reorder-model-inputs.avif)

## G3W-SUITE: features and settings

### How to import analysis models created in QGIS to G3W-SUITE

Access the PROCESSING - MODEL session in the Administration session, choosing the ADD MODEL item:

- **Load the .model3 file relating to the analysis model to import**
- **Choose the projects to associate the model with**
- **Choose the users (among those who have permission to access the selected projects) who will be able to use the model on WebGis**

![Screenshot: Model Builder Model Import Settings](/img/site-model-builder-model-import-settings.avif)

### Input layer type supported

- **Project layers** (all or only selected features)
- **Layers loaded on the fly**
- **Geometries drawn on the map**

![Screenshot: Model Builder Project Input Settings](/img/site-model-builder-project-input-settings.avif)

### Output types supported

- **vectors (Shapefile, GeoJSON, KML, KMZ)**
- **CSV**
- **rasters**
- **PDF export (print layout simple and atlas)**
- **HTML plots**

![Screenshot: Model Output](/img/site-model-output.avif)

## Try to run a QGIS Processing Model on the web!

[Try the demo!](https://v310.g3wsuite.it/it/#/it/group/30 "primary-button")


<script type="application/json" data-i18n>
  {
    "it": {
      "**Additional input types will be integrated into the next version of the module!**": "**Altri tipi di input saranno integrati nella prossima versione del modulo!**",
      "**All QGIS modules, considering limitations in handling options/inputs associated with managed type of inputs**": "**Tutti i moduli QGIS, tenendo conto dei limiti nella gestione delle opzioni e degli input associati ai tipi di input supportati**",
      "**Boolean**": "**Booleano**",
      "**Choose the projects to associate the model with**": "**Scegli i progetti a cui associare il modello**",
      "**Choose the users (among those who have permission to access the selected projects) who will be able to use the model on WebGis**": "**Scegli quali utenti, tra quelli autorizzati ad accedere ai progetti selezionati, potranno utilizzare il modello nel WebGIS**",
      "**Distance**": "**Distanza**",
      "**Fields Mapper**": "**Mappatura dei campi**",
      "**Geometries drawn on the map**": "**Geometrie disegnate sulla mappa**",
      "**HTML plots**": "**Grafici HTML**",
      "**Layers loaded on the fly**": "**Layer caricati al volo**",
      "**Load the .model3 file relating to the analysis model to import**": "**Carica il file .model3 del modello di analisi da importare**",
      "**Number**": "**Numero**",
      "**PDF export (print layout simple and atlas)**": "**Esportazione PDF (layout di stampa semplice e atlante)**",
      "**Project layers** (all or only selected features)": "**Layer del progetto** (tutte le geometrie o solo quelle selezionate)",
      "**Raster Layers**": "**Layer raster**",
      "**Set up your analysis model on QGIS using the ModelDesigner**": "**Prepara il modello di analisi in QGIS con il ModelDesigner**",
      "**The model is used directly on the web side, displaying and downloading the results created**": "**Usa il modello direttamente sul web, visualizzando e scaricando i risultati**",
      "**The module dedicated to the creation of geographic analyzes on the web is based on the automated analysis models prepared on QGIS through the Processing ModelDesigner.**": "**Il modulo dedicato alle analisi geografiche sul web si basa sui modelli di analisi automatizzati preparati in QGIS con Processing ModelDesigner.**",
      "**Upload the model file (.model3) to G3W-SUITE and associate it with one or more WebGis projects**": "**Carica il file del modello (.model3) su G3W-SUITE e associalo a uno o più progetti WebGIS**",
      "**Vector Features (selected feature of a layer)**": "**Elementi vettoriali (elementi selezionati di un layer)**",
      "**Vector Layers**": "**Layer vettoriali**",
      "**input order in the model form**": "**ordine degli input nel modulo del modello**",
      "**rasters**": "**raster**",
      "**vectors (Shapefile, GeoJSON, KML, KMZ)**": "**vettori (Shapefile, GeoJSON, KML, KMZ)**",
      "Access the PROCESSING - MODEL session in the Administration session, choosing the ADD MODEL item:": "Accedi alla sezione PROCESSING - MODEL dell'amministrazione e seleziona ADD MODEL:",
      "Even if the analysis operations to be performed are limited to those performed by a single analysis module, it is necessary to implement a model using the ModelDesigner. This is also to distinguish the options set beforehand from those available to the user.": "Anche quando le operazioni di analisi si limitano a quelle di un singolo modulo, è necessario creare un modello con il ModelDesigner. In questo modo si distinguono anche le opzioni preimpostate da quelle disponibili per l'utente.",
      "Further settings": "Altre impostazioni",
      "G3W-SUITE: features and settings": "G3W-SUITE: funzionalità e impostazioni",
      "How to import analysis models created in QGIS to G3W-SUITE": "Come importare in G3W-SUITE i modelli di analisi creati in QGIS",
      "Input layer type supported": "Tipi di layer in input supportati",
      "Input type supported": "Tipi di input supportati",
      "It is also possible to define project layers as default input of the individual modules.": "È anche possibile definire i layer del progetto come input predefiniti dei singoli moduli.",
      "Managed algorithms": "Algoritmi gestiti",
      "Model Builder Processing - G3W-Suite": "Model Builder Processing - G3W-Suite",
      "Output types supported": "Tipi di output supportati",
      "QGIS Model Builder features and settings": "Funzionalità e impostazioni di QGIS Model Builder",
      "Release date: **13 December 2023**": "Data di rilascio: **13 dicembre 2023**",
      "Screenshot: Algoritmi": "Schermata: algoritmi",
      "Screenshot: Inputs": "Schermata: input",
      "Screenshot: Model Builder Model Import Settings": "Schermata: impostazioni di importazione del modello",
      "Screenshot: Model Builder Overview": "Schermata: panoramica di Model Builder",
      "Screenshot: Model Builder Project Input Settings": "Schermata: impostazioni degli input del progetto",
      "Screenshot: Model Output": "Schermata: output del modello",
      "Screenshot: Reorder Model Inputs": "Schermata: riordino degli input del modello",
      "The analyzes are performed in \"on line\" mode. At the end of the analysis flow, the results will be uploaded to the map (if geographical) and available for download.": "Le analisi vengono eseguite online. Al termine, i risultati geografici vengono caricati sulla mappa e tutti i risultati sono disponibili per il download.",
      "The setup flow is very simple:": "La configurazione è semplice:",
      "This option limits the use of the model to a specific project or to projects containing the layers defined as inputs.": "Questa opzione limita l'uso del modello a un progetto specifico o ai progetti che contengono i layer definiti come input.",
      "Try the demo!": "Prova la demo!",
      "Try to run a QGIS Processing Model on the web!": "Prova a eseguire un modello di QGIS Processing sul web!"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Model Builder Processing - G3W-Suite"
  }
</script>