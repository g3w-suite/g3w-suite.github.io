# Tools panel and table of contents

[Back to Cartographic client](g3wsuite_client.md)

## Tools panel

The upper part of the left bar contains, if activated, the following items:

### Legend
This session allows you to see the complete legend of the service.

### Charts
**View graphs created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) and activated at the admin session level.**

Check the plots in the list and consult them on the rigth panel.

![Screenshot: G3wclient Plots](/img/manual-english-g3wclient-plots.png)

The graphs are filterable based on the:
 * ![Screenshot: G3wclient Plots Map Filter](/img/manual-english-g3wclient-plots-map-filter.png) features visible on the map
 * ![Screenshot: G3wclient Plots Selection Filter](/img/manual-english-g3wclient-plots-selection-filter.png) filter based on the selected features
 
These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.

The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).

The plots will automatically update after pan and zoom operations on the map

If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)

Appropriate **messages** at the single plots level will indicate the activation of these filters.

#### Charts based on 1:N data relation (child layer)

If the **chart is linked to a child layer in a 1:N relation**, it can also be displayed at the information level of the individual parent features

![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.png)

### Metadata
The metadata reported in this session derive from those set at the QGIS project level.

Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.

This content is divided into three sessions: **General, Data, Legend** and **Credits**
 * **`General`:** reports the **metadata defined on the QGIS project** in the item: **`Project →  Properties (QGIS Server session, Service Capabilities)`**.
   The URLs of the various OGC services associated with the map are also listed, as well as information about the EPSG and bounding boxes associated with the project. 
 * **`Data`:** reports **simple metadata associated with the individual layers**.
 * **` Legend`:** reports the legend of the entire project
 * **`Credits`:** references to the G3W-SUITE project and application version information

![Screenshot: G3wclient Metadata View](/img/manual-english-g3wclient-metadata-view.png)

### Bookmarks
This tool will display the spatial bookmarks defined and associated with the QGIS project.

The user, even if not logged in, will be able to create new bookmarks by simply positioning them in an area of ​​the map and then clicking on the **`+`** button to define the **`Name`** to associate with the bookmark.

These bookmarks will be saved in the browser cache and therefore always available until deleted.

![Screenshot: Spatial Bookmarks](/img/manual-english-spatial-bookmarks.png)

### Print
**Printing tool based on layouts defined on QGIS project.**

The tool allows you to choose:
 * **Template:** print layout among those associated with the published QGIS project
 * **Scale:** print scale, with delfault values ​​list, but also manually customizable
 * **DPI:** print resolution, with delfault values ​​list, but also manually customizable
 * **Rotation:** rotation angle
  * **Format:** print to PNG, JPG, SVG, PDF or GeoPDF
 * **Custom title:** using the **ItemIDs** at the print layout level of the QGIS project it is possible to insert one or more labels with **customized content in the print** from WebGis

On the map, a light rectangular area will allow you to define the print area.

![Screenshot: G3wclient Print Tool](/img/manual-english-g3wclient-print-tool.png)

If an **Atlas type print layout** is associated in the QGIS project, the layout reference will be available.
The cards to be printed are defined by referring to the atlas identifier defined in the print layout.

![Screenshot: G3wclient Print Tool Atlas](/img/manual-english-g3wclient-print-tool-atlas.png)

 The same panel allows you to create a screenshot (PNG or GeoTiff) of the area displayed on the map.
 
![Screenshot: G3wclient Print Tool Screenshot](/img/manual-english-g3wclient-print-tool-screenshot.png)

### Search and Advanced Search

A classic ![Icon: Query Builder](/img/manual-english-query-builder-icon.png) **Advanced Search** is present at the Search menu level.
Through this tool it is possible to:
 * carry out alphanumeric searches on geometric layers
 * save the query to reuse it until the end of the work session
 * edit a previously saved query
 
The saved query will be available until the browser cache is cleared

**NB:** fields not exposed as QGIS project-level WMS are not available for query building.

![Screenshot: G3wclient Querybuilder](/img/manual-english-g3wclient-querybuilder.png)

**The Search menu contains the list of search tools defined through the Administration panel and custom searches created with the Query Builder.**

![Screenshot: G3wclient Searc List](/img/manual-english-g3wclient-searc-list.png)


You choose the search you are interested in, fill in the required fields and click on the **`Search`** button.

![Screenshot: G3wclient Search Example](/img/manual-english-g3wclient-search-example.png)

Additional information is displayed if you log in as Administrator

The **panel with the list of results** will open on the right side of the client, for each result the first three fields of the associated table will be displayed.

By positioning on the individual results, the corresponding features will be highlighted on the map; clicking on the individual results you can consult all the attributes.

Zoom to features and download icons are available for results (single or cumulative)

![Screenshot: G3wclient Search Example](/img/manual-english-g3wclient-search-example.png)

### Editing layer

Activation of editing session. 

Available only after activation of the editing function and based on the powers of the logged in user

### Choose Theme
In the event that Themes (Views) are defined in the QGIS project, a specific choice menu will be available in the Layers session of the TOC.

The choice of a Theme will determine the automatic activation of the layers and related styles, defined in the Theme itself.

The name of the chosen theme will be displayed prominently in this session.

#### User themes
The logged in user can create customized themes in the same way as he prepares them in QGIS, i.e. by defining the on/off layers and associating any specific styles with the individual layers.

By clicking on the **+** button it will be possible to define a name to associate and create the Theme.

The created themes will always be available to the user who defined them.

Once created, the User Themes will be selectable, overwritable and editable using the icons shown next to each of them.

![Screenshot: G3wclient Theme](/img/manual-english-g3wclient-theme.png)

## TOC session

The midle part of the left bar contains the following items:


**This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.**

If the **`Show features count`** function is activated in the project, the layer will show the number of total features and based on the subdivision linked to the symbology.

In case of multi-style associated with the layer, the number of geometries reported will vary following the passage from one style to another.

![Screenshot: G3wclient Features Count](/img/manual-english-g3wclient-features-count.png)

In the list of layers, right click on the name of the single layer shows the following items:
 * **Name and geometry type** of the layer
 * **Metadata:** descriptive information inherited from what has been defined, at QGIS project level, in the 'Abstract' form of the 'QGIS Server' session of the 'Layer Properties'
 * **Edit layer:** menu available following activation and based on user permissions
 * **Legend:** to view the legend tab
 * **Zoom to layer:** to zoom in on the extension of the layer
 * **Open attribute table:** to consult the associated attribute table
 * **Styles:** to choose the style to be applied to the layer, in the case of multi-style layers
 * **Opacity:** management of the level of transparency/opacity
 * **Filters:** management, based on the logged in user, of the filters associated with the layer
 * **Export:** download of the layer in different formats, based on what is defined in the Administration session
 * **Layer settings:** link to the layer administration section (available only if logged in as an administrator user)

![Screenshot: G3wclient Layer Function](/img/manual-english-g3wclient-layer-function.png)

Double clicking on the layer or Layer Group zooms to the extent of the layer or Group content.

It is possible to hide, automatically, layers from the TOC when they have no records. 

Useful when using filters on layers or geographic views. 

### Attribute table

The attribute table (resizable) is equipped with **paging function, highlight function and zooming** to the associated features.

In the case of links to **multimedia content**, the previews of the images and/or the **Open** button will be displayed for consultation of different types of content.

To the left of each record in the table there are two/three tools:
 * checkbox to select the records/feature
 * the ‘Form view‘ icon to open the feature attributes form
 * in the case of a layer editable by the user, an editing icon to allow direct modification of the feature
 * the ‘Show relations’ icon to open the list of 1:N relations (if present) of thath parent record

![Screenshot: G3wclient Table View](/img/manual-english-g3wclient-table-view.png)

A **generic filter**, positioned at the top right, is applied generically to the contents of all the fields, and it will allow you to filter the list of displayed records. 

**Filters based on the contents of the individual fields** are available at the top of each column.

The **Update results when map moves** icon ![Screenshot: G3wclient Mapfilter Table](/img/manual-english-g3wclient-mapfilter-table.png), located in the bottom left corner, allows you to filter the records of the table according to the features visible in the map.

It is possible to **select the features of the individual layers and apply filters** that will affect:
 * on the map content
 * on the attribute table content
 * on the contents of the plots
 * on print contents
 * on the editable geometries

The selection of features can be made:
 * at the attribute table level (through the checkboxes on the left of each records)
 * on the results of a query (add / remove from current selection)
 * on the results of a query (add / remove from current selection)

At the same time, additional icons appear:
 * on the layer attribute table, in the bottom left corner
 * to the right of the layer on the TOC
 * at the level of the relevant plots

The icons, palced in the left buttom corner of the attribute, table allow you to:
 * ![Screenshot: G3wclient Selection Table Clear](/img/manual-english-g3wclient-selection-table-clear.png) Clear selection
 * ![Screenshot: G3wclient Selection Table Invert](/img/manual-english-g3wclient-selection-table-invert.png) Invert selection
 * ![Screenshot: G3wclient Selection Table Filter](/img/manual-english-g3wclient-selection-table-filter.png) Add/Remove filter

The icons to the right of the layer on the TOC allow you to:
 * Clear selection
 * Enable/Disable  filter

![Icon: G3wclient Selection Toc](/img/manual-english-g3wclient-selection-icon-toc.png)

When one or more features are selected, they appear highlighted in red on the map.
Activation of the filter is reflected:
 * on the map content
 * on the attribute table content
 * on the data displayed by plots
 * on the print contents

 ![Screenshot: G3wclient Table Select](/img/manual-english-g3wclient-table-select.png)


#### Filter users based
**On the client you can select (highlight) and filter a subset of vector layer geometries.**

It is possible to activate a filter on a layer starting from:
 * query results
 * search results
 * attribute table management

To be filtered, the geometries object of the filter must first be selected.

Following activation of the filter, a logged in user (not AnonymosUser) will be able to save this filter to be recalled in subsequent work sessions.

Saving the filter occurs via the dedicated icon present at layer level in the legend and in the results form.

![Screenshot: Filter Save](/img/manual-english-filter-save.png)

The saved filters can be recovered via the dedicated menu that can be viewed by right-clicking on the name of the layer

![Screenshot: Filter Load](/img/manual-english-filter-load.png)

The presence of an active filter on the layer is highlighted by the red icon next to the layer name.

To deactivate an active filter, simply click on the icon itself.

![Screenshot: Filter Loaded](/img/manual-english-filter-loaded.png)

We remind you that activating a filter affects:
 * geometries visible on the map
 * records visible on attribute table
 * editable geometries
 * features underlying the graphs
 * print contenent

<script type="application/json" data-i18n>
{
  "it": {
    "![Screenshot: G3wclient Plots Map Filter](/img/manual-english-g3wclient-plots-map-filter.png) features visible on the map": "![Schermata: filtro mappa dei grafici G3wclient](/img/manual-english-g3wclient-plots-map-filter.png) elementi visibili sulla mappa",
    "![Screenshot: G3wclient Plots Selection Filter](/img/manual-english-g3wclient-plots-selection-filter.png) filter based on the selected features": "![Schermata: filtro selezione dei grafici G3wclient](/img/manual-english-g3wclient-plots-selection-filter.png) filtro basato sugli elementi selezionati",
    "![Screenshot: G3wclient Selection Table Clear](/img/manual-english-g3wclient-selection-table-clear.png) Clear selection": "![Schermata: cancella selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-clear.png) Cancella selezione",
    "![Screenshot: G3wclient Selection Table Filter](/img/manual-english-g3wclient-selection-table-filter.png) Add/Remove filter": "![Schermata: filtro selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-filter.png) Aggiungi/Rimuovi filtro",
    "![Screenshot: G3wclient Selection Table Invert](/img/manual-english-g3wclient-selection-table-invert.png) Invert selection": "![Schermata: inverti selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-invert.png) Inverti selezione",
    "**` Legend`:** reports the legend of the entire project": "**` Legend`:** mostra la legenda dell’intero progetto",
    "**`Credits`:** references to the G3W-SUITE project and application version information": "**`Credits`:** riferimenti al progetto G3W-SUITE e informazioni sulla versione dell’applicazione",
    "**`Data`:** reports **simple metadata associated with the individual layers**.": "**`Data`:** mostra i **metadati semplici associati ai singoli layer**.",
    "**`General`:** reports the **metadata defined on the QGIS project** in the item: **`Project →  Properties (QGIS Server session, Service Capabilities)`**.": "**`General`:** mostra i **metadati definiti nel progetto QGIS** alla voce **`Project →  Properties (QGIS Server session, Service Capabilities)`**.",
    "**Custom title:** using the **ItemIDs** at the print layout level of the QGIS project it is possible to insert one or more labels with **customized content in the print** from WebGis": "**Titolo personalizzato:** usando gli **ItemID** del layout di stampa nel progetto QGIS, è possibile inserire dal WebGIS una o più etichette con **contenuto personalizzato nella stampa**",
    "**DPI:** print resolution, with delfault values ​​list, but also manually customizable": "**DPI:** risoluzione di stampa, selezionabile da un elenco di valori predefiniti o personalizzabile manualmente",
    "**Edit layer:** menu available following activation and based on user permissions": "**Modifica layer:** menu disponibile dopo l’attivazione e in base ai permessi dell’utente",
    "**Export:** download of the layer in different formats, based on what is defined in the Administration session": "**Esporta:** scarica il layer in diversi formati, in base alle impostazioni di amministrazione",
    "**Filters based on the contents of the individual fields** are available at the top of each column.": "Nella parte superiore di ogni colonna sono disponibili **filtri basati sul contenuto dei singoli campi**.",
    "**Filters:** management, based on the logged in user, of the filters associated with the layer": "**Filtri:** gestione dei filtri associati al layer in base all’utente autenticato",
    "**Format:** print to PNG, JPG, SVG, PDF or GeoPDF": "**Formato:** stampa in PNG, JPG, SVG, PDF o GeoPDF",
    "**Layer settings:** link to the layer administration section (available only if logged in as an administrator user)": "**Impostazioni layer:** collegamento alla sezione di amministrazione del layer (disponibile solo per gli amministratori autenticati)",
    "**Legend:** to view the legend tab": "**Legenda:** visualizza la scheda della legenda",
    "**Metadata:** descriptive information inherited from what has been defined, at QGIS project level, in the 'Abstract' form of the 'QGIS Server' session of the 'Layer Properties'": "**Metadati:** informazioni descrittive ereditate da quanto definito a livello di progetto QGIS nel campo 'Abstract' della sezione 'QGIS Server' delle 'Proprietà layer'",
    "**Name and geometry type** of the layer": "**Nome e tipo di geometria** del layer",
    "**NB:** fields not exposed as QGIS project-level WMS are not available for query building.": "**NB:** i campi non esposti come WMS a livello di progetto QGIS non sono disponibili per la creazione delle query.",
    "**On the client you can select (highlight) and filter a subset of vector layer geometries.**": "**Nel client è possibile selezionare (evidenziare) e filtrare un sottoinsieme delle geometrie di un layer vettoriale.**",
    "**Opacity:** management of the level of transparency/opacity": "**Opacità:** gestione del livello di trasparenza/opacità",
    "**Open attribute table:** to consult the associated attribute table": "**Apri tabella attributi:** apre la tabella attributi associata",
    "**Printing tool based on layouts defined on QGIS project.**": "**Strumento di stampa basato sui layout definiti nel progetto QGIS.**",
    "**Rotation:** rotation angle": "**Rotazione:** angolo di rotazione",
    "**Scale:** print scale, with delfault values ​​list, but also manually customizable": "**Scala:** scala di stampa, selezionabile da un elenco di valori predefiniti o personalizzabile manualmente",
    "**Styles:** to choose the style to be applied to the layer, in the case of multi-style layers": "**Stili:** consente di scegliere lo stile da applicare al layer, se sono disponibili più stili",
    "**Template:** print layout among those associated with the published QGIS project": "**Modello:** layout di stampa tra quelli associati al progetto QGIS pubblicato",
    "**The Search menu contains the list of search tools defined through the Administration panel and custom searches created with the Query Builder.**": "**Il menu Ricerca contiene l’elenco degli strumenti definiti nel pannello di amministrazione e delle ricerche personalizzate create con Query Builder.**",
    "**This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.**": "**Questa sezione mostra i layer configurati nei progetti QGIS, mantenendo la stessa organizzazione in gruppi e sottogruppi.**",
    "**View graphs created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) and activated at the admin session level.**": "**Visualizza i grafici creati con QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) e attivati nella sezione di amministrazione.**",
    "**Zoom to layer:** to zoom in on the extension of the layer": "**Zoom sul layer:** esegue lo zoom sull’estensione del layer",
    "A **generic filter**, positioned at the top right, is applied generically to the contents of all the fields, and it will allow you to filter the list of displayed records.": "Un **filtro generico**, in alto a destra, viene applicato al contenuto di tutti i campi e consente di filtrare l’elenco dei record visualizzati.",
    "A classic ![Icon: Query Builder](/img/manual-english-query-builder-icon.png) **Advanced Search** is present at the Search menu level.": "Nel menu Ricerca è disponibile una **Ricerca avanzata** classica con ![Icona: Query Builder](/img/manual-english-query-builder-icon.png).",
    "Activation of editing session.": "Attiva la sessione di modifica.",
    "Activation of the filter is reflected:": "L’attivazione del filtro si riflette su:",
    "Additional information is displayed if you log in as Administrator": "Se accedi come amministratore vengono mostrate informazioni aggiuntive.",
    "Appropriate **messages** at the single plots level will indicate the activation of these filters.": "Messaggi appropriati accanto ai singoli grafici indicano l’attivazione di questi filtri.",
    "at the attribute table level (through the checkboxes on the left of each records)": "dalla tabella attributi (tramite le caselle di controllo a sinistra di ogni record)",
    "at the level of the relevant plots": "accanto ai grafici pertinenti",
    "At the same time, additional icons appear:": "Contemporaneamente vengono mostrate altre icone:",
    "Attribute table": "Tabella attributi",
    "attribute table management": "gestione della tabella attributi",
    "Available only after activation of the editing function and based on the powers of the logged in user": "Disponibile solo dopo aver attivato la funzione di modifica e in base ai permessi dell’utente autenticato.",
    "Back to Cartographic client": "Torna al client cartografico",
    "Bookmarks": "Segnalibri",
    "By clicking on the **+** button it will be possible to define a name to associate and create the Theme.": "Facendo clic sul pulsante **+** è possibile assegnare un nome e creare il tema.",
    "By positioning on the individual results, the corresponding features will be highlighted on the map; clicking on the individual results you can consult all the attributes.": "Spostando il puntatore sui singoli risultati, gli elementi corrispondenti vengono evidenziati sulla mappa; facendo clic su un risultato è possibile consultare tutti gli attributi.",
    "carry out alphanumeric searches on geometric layers": "eseguire ricerche alfanumeriche sui layer geometrici",
    "Charts": "Grafici",
    "Charts based on 1:N data relation (child layer)": "Grafici basati su una relazione 1:N (layer figlio)",
    "Check the plots in the list and consult them on the rigth panel.": "Seleziona i grafici nell’elenco e consultali nel pannello a destra.",
    "checkbox to select the records/feature": "casella di controllo per selezionare i record o gli elementi",
    "Choose Theme": "Scegli tema",
    "Clear selection": "Cancella selezione",
    "Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.": "In base alle impostazioni di pubblicazione del progetto QGIS, questa sezione potrebbe non essere mostrata all’utente.",
    "Double clicking on the layer or Layer Group zooms to the extent of the layer or Group content.": "Facendo doppio clic sul layer o sul gruppo di layer, viene visualizzata l’estensione del layer o del contenuto del gruppo.",
    "edit a previously saved query": "modificare una query salvata in precedenza",
    "editable geometries": "geometrie modificabili",
    "Editing layer": "Layer modificabile",
    "Enable/Disable  filter": "Attiva/disattiva filtro",
    "features underlying the graphs": "elementi alla base dei grafici",
    "Filter users based": "Filtri basati sull’utente",
    "Following activation of the filter, a logged in user (not AnonymosUser) will be able to save this filter to be recalled in subsequent work sessions.": "Dopo aver attivato il filtro, un utente autenticato (diverso da AnonymosUser) può salvarlo per richiamarlo nelle sessioni di lavoro successive.",
    "geometries visible on the map": "geometrie visibili sulla mappa",
    "Icon: G3wclient Selection Toc": "Icona: selezione TOC G3wclient",
    "If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)": "Se attivato, il **filtro basato sugli elementi selezionati** viene applicato automaticamente a tutti i grafici correlati (associati allo stesso layer e alle tabelle correlate 1:N).",
    "If an **Atlas type print layout** is associated in the QGIS project, the layout reference will be available.": "Se nel progetto QGIS è associato un **layout di stampa di tipo Atlante**, sarà disponibile il relativo riferimento.",
    "If the **`Show features count`** function is activated in the project, the layer will show the number of total features and based on the subdivision linked to the symbology.": "Se nel progetto è attivata la funzione **`Show features count`**, il layer mostra il numero totale di elementi e la loro suddivisione in base alla simbologia.",
    "If the **chart is linked to a child layer in a 1:N relation**, it can also be displayed at the information level of the individual parent features": "Se il **grafico è collegato a un layer figlio tramite una relazione 1:N**, può essere visualizzato anche nelle informazioni dei singoli elementi padre.",
    "In case of multi-style associated with the layer, the number of geometries reported will vary following the passage from one style to another.": "Se al layer sono associati più stili, il numero di geometrie mostrato varia passando da uno stile all’altro.",
    "in the case of a layer editable by the user, an editing icon to allow direct modification of the feature": "se il layer è modificabile dall’utente, icona di modifica diretta dell’elemento",
    "In the case of links to **multimedia content**, the previews of the images and/or the **Open** button will be displayed for consultation of different types of content.": "In presenza di collegamenti a **contenuti multimediali**, vengono mostrate le anteprime delle immagini e/o il pulsante **Open** per consultare i diversi tipi di contenuto.",
    "In the event that Themes (Views) are defined in the QGIS project, a specific choice menu will be available in the Layers session of the TOC.": "Se nel progetto QGIS sono definiti dei Temi (Viste), nella sezione Layer della TOC sarà disponibile un apposito menu di selezione.",
    "In the list of layers, right click on the name of the single layer shows the following items:": "Nell’elenco dei layer, facendo clic con il tasto destro sul nome di un layer vengono mostrate le seguenti voci:",
    "It is possible to **select the features of the individual layers and apply filters** that will affect:": "È possibile **selezionare gli elementi dei singoli layer e applicare filtri** che influiscono su:",
    "It is possible to activate a filter on a layer starting from:": "È possibile attivare un filtro su un layer partendo da:",
    "It is possible to hide, automatically, layers from the TOC when they have no records.": "È possibile nascondere automaticamente dalla TOC i layer che non contengono record.",
    "Legend": "Legenda",
    "Metadata": "Metadati",
    "on print contents": "contenuto della stampa",
    "on the attribute table content": "contenuto della tabella attributi",
    "on the contents of the plots": "contenuto dei grafici",
    "on the data displayed by plots": "dati mostrati nei grafici",
    "on the editable geometries": "geometrie modificabili",
    "on the layer attribute table, in the bottom left corner": "nella tabella attributi del layer, nell’angolo inferiore sinistro",
    "on the map content": "contenuto della mappa",
    "On the map, a light rectangular area will allow you to define the print area.": "Sulla mappa, un riquadro chiaro consente di definire l’area di stampa.",
    "on the print contents": "contenuto della stampa",
    "on the results of a query (add / remove from current selection)": "dai risultati di un’interrogazione (aggiungendo o rimuovendo elementi dalla selezione corrente)",
    "Once created, the User Themes will be selectable, overwritable and editable using the icons shown next to each of them.": "Dopo la creazione, i temi utente possono essere selezionati, sovrascritti e modificati tramite le icone accanto a ciascuno di essi.",
    "Print": "Stampa",
    "print contenent": "contenuto della stampa",
    "query results": "risultati di un’interrogazione",
    "records visible on attribute table": "record visibili nella tabella attributi",
    "save the query to reuse it until the end of the work session": "salvare la query per riutilizzarla fino al termine della sessione di lavoro",
    "Saving the filter occurs via the dedicated icon present at layer level in the legend and in the results form.": "Il filtro si salva tramite l’apposita icona disponibile accanto al layer nella legenda e nel modulo dei risultati.",
    "Screenshot: Filter Load": "Schermata: caricamento del filtro",
    "Screenshot: Filter Loaded": "Schermata: filtro caricato",
    "Screenshot: Filter Save": "Schermata: salvataggio del filtro",
    "Screenshot: G3wclient Features Count": "Schermata: conteggio degli elementi in G3wclient",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: modulo G3wclient con grafici 1:N",
    "Screenshot: G3wclient Layer Function": "Schermata: funzioni del layer G3wclient",
    "Screenshot: G3wclient Metadata View": "Schermata: visualizzazione dei metadati G3wclient",
    "Screenshot: G3wclient Plots": "Schermata: grafici di G3wclient",
    "Screenshot: G3wclient Print Tool": "Schermata: strumento di stampa G3wclient",
    "Screenshot: G3wclient Print Tool Atlas": "Schermata: atlante nello strumento di stampa G3wclient",
    "Screenshot: G3wclient Print Tool Screenshot": "Schermata: immagine dallo strumento di stampa G3wclient",
    "Screenshot: G3wclient Querybuilder": "Schermata: Query Builder di G3wclient",
    "Screenshot: G3wclient Searc List": "Schermata: elenco ricerche di G3wclient",
    "Screenshot: G3wclient Search Example": "Schermata: esempio di ricerca in G3wclient",
    "Screenshot: G3wclient Table Select": "Schermata: selezione nella tabella G3wclient",
    "Screenshot: G3wclient Table View": "Schermata: visualizzazione tabellare G3wclient",
    "Screenshot: G3wclient Theme": "Schermata: tema G3wclient",
    "Screenshot: Spatial Bookmarks": "Schermata: segnalibri spaziali",
    "Search and Advanced Search": "Ricerca e ricerca avanzata",
    "search results": "risultati di una ricerca",
    "the ‘Form view‘ icon to open the feature attributes form": "icona ‘Vista modulo‘ per aprire il modulo degli attributi dell’elemento",
    "the ‘Show relations’ icon to open the list of 1:N relations (if present) of thath parent record": "icona ‘Mostra relazioni’ per aprire l’elenco delle relazioni 1:N (se presenti) di quel record padre",
    "The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).": "Il **filtro basato sul contenuto della mappa** può essere attivato globalmente su tutti i grafici (icona in cima al pannello dei grafici) oppure solo su alcuni grafici specifici (icona accanto al singolo grafico).",
    "The **panel with the list of results** will open on the right side of the client, for each result the first three fields of the associated table will be displayed.": "Sul lato destro del client si apre il **pannello con l’elenco dei risultati**; per ogni risultato vengono mostrati i primi tre campi della tabella associata.",
    "The **Update results when map moves** icon ![Screenshot: G3wclient Mapfilter Table](/img/manual-english-g3wclient-mapfilter-table.png), located in the bottom left corner, allows you to filter the records of the table according to the features visible in the map.": "L’icona **Aggiorna i risultati quando la mappa si sposta** ![Schermata: filtro mappa della tabella G3wclient](/img/manual-english-g3wclient-mapfilter-table.png), nell’angolo inferiore sinistro, consente di filtrare i record della tabella in base agli elementi visibili sulla mappa.",
    "The attribute table (resizable) is equipped with **paging function, highlight function and zooming** to the associated features.": "La tabella attributi (ridimensionabile) dispone di **paginazione, evidenziazione e zoom** sugli elementi associati.",
    "The cards to be printed are defined by referring to the atlas identifier defined in the print layout.": "Le schede da stampare vengono definite facendo riferimento all’identificativo dell’atlante impostato nel layout di stampa.",
    "The choice of a Theme will determine the automatic activation of the layers and related styles, defined in the Theme itself.": "La scelta di un tema attiva automaticamente i layer e gli stili associati definiti nel tema stesso.",
    "The created themes will always be available to the user who defined them.": "I temi creati restano sempre disponibili all’utente che li ha definiti.",
    "The graphs are filterable based on the:": "I grafici possono essere filtrati in base a:",
    "The icons to the right of the layer on the TOC allow you to:": "Le icone a destra del layer nella TOC consentono di:",
    "The icons, palced in the left buttom corner of the attribute, table allow you to:": "Le icone nell’angolo inferiore sinistro della tabella attributi consentono di:",
    "The logged in user can create customized themes in the same way as he prepares them in QGIS, i.e. by defining the on/off layers and associating any specific styles with the individual layers.": "L’utente autenticato può creare temi personalizzati come in QGIS, definendo i layer attivi e associando eventuali stili specifici ai singoli layer.",
    "The metadata reported in this session derive from those set at the QGIS project level.": "I metadati mostrati in questa sezione derivano da quelli impostati nel progetto QGIS.",
    "The midle part of the left bar contains the following items:": "La parte centrale della barra a sinistra contiene i seguenti elementi:",
    "The name of the chosen theme will be displayed prominently in this session.": "Il nome del tema scelto viene mostrato in evidenza in questa sezione.",
    "The plots will automatically update after pan and zoom operations on the map": "I grafici si aggiornano automaticamente dopo aver spostato o ingrandito la mappa.",
    "The presence of an active filter on the layer is highlighted by the red icon next to the layer name.": "La presenza di un filtro attivo sul layer è indicata dall’icona rossa accanto al nome del layer.",
    "The same panel allows you to create a screenshot (PNG or GeoTiff) of the area displayed on the map.": "Lo stesso pannello consente di creare un’immagine (PNG o GeoTiff) dell’area visualizzata sulla mappa.",
    "The saved filters can be recovered via the dedicated menu that can be viewed by right-clicking on the name of the layer": "I filtri salvati possono essere recuperati dal menu dedicato, visualizzato facendo clic con il tasto destro sul nome del layer.",
    "The saved query will be available until the browser cache is cleared": "La query salvata resta disponibile finché non viene svuotata la cache del browser.",
    "The selection of features can be made:": "È possibile selezionare gli elementi:",
    "The tool allows you to choose:": "Lo strumento consente di scegliere:",
    "The upper part of the left bar contains, if activated, the following items:": "La parte superiore della barra a sinistra contiene, se attivati, i seguenti elementi:",
    "The URLs of the various OGC services associated with the map are also listed, as well as information about the EPSG and bounding boxes associated with the project.": "Sono inoltre elencati gli URL dei vari servizi OGC associati alla mappa e le informazioni su EPSG e riquadri di delimitazione del progetto.",
    "The user, even if not logged in, will be able to create new bookmarks by simply positioning them in an area of ​​the map and then clicking on the **`+`** button to define the **`Name`** to associate with the bookmark.": "Anche un utente non autenticato può creare nuovi segnalibri: è sufficiente posizionarsi su un’area della mappa, fare clic sul pulsante **`+`** e specificare il **`Nome`** da associare al segnalibro.",
    "These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.": "Questi **filtri** vengono applicati anche ai **grafici associati ai dati correlati** (in modalità 1:N), in base agli elementi padre visibili e/o selezionati.",
    "These bookmarks will be saved in the browser cache and therefore always available until deleted.": "Questi segnalibri vengono salvati nella cache del browser e restano disponibili fino alla loro eliminazione.",
    "This content is divided into three sessions: **General, Data, Legend** and **Credits**": "I contenuti sono suddivisi in quattro sezioni: **Generale, Dati, Legenda** e **Crediti**",
    "This session allows you to see the complete legend of the service.": "Questa sezione consente di visualizzare la legenda completa del servizio.",
    "This tool will display the spatial bookmarks defined and associated with the QGIS project.": "Questo strumento mostra i segnalibri spaziali definiti e associati al progetto QGIS.",
    "Through this tool it is possible to:": "Questo strumento consente di:",
    "To be filtered, the geometries object of the filter must first be selected.": "Per applicare il filtro, è necessario prima selezionare le geometrie che ne faranno parte.",
    "To deactivate an active filter, simply click on the icon itself.": "Per disattivare un filtro basta fare clic sull’icona stessa.",
    "To the left of each record in the table there are two/three tools:": "A sinistra di ogni record della tabella sono disponibili due o tre strumenti:",
    "to the right of the layer on the TOC": "a destra del layer nella TOC",
    "TOC session": "Pannello TOC",
    "Tools panel": "Pannello degli strumenti",
    "Tools panel and table of contents": "Pannello degli strumenti e indice dei contenuti",
    "Useful when using filters on layers or geographic views.": "È utile quando si usano filtri sui layer o viste geografiche.",
    "User themes": "Temi utente",
    "We remind you that activating a filter affects:": "Ricordiamo che l’attivazione di un filtro influisce su:",
    "When one or more features are selected, they appear highlighted in red on the map.": "Quando uno o più elementi sono selezionati, vengono evidenziati in rosso sulla mappa.",
    "You choose the search you are interested in, fill in the required fields and click on the **`Search`** button.": "Scegli la ricerca desiderata, compila i campi richiesti e fai clic sul pulsante **`Search`**.",
    "Zoom to features and download icons are available for results (single or cumulative)": "Per i risultati, singoli o complessivi, sono disponibili le icone per lo zoom sugli elementi e il download."
  }
}
</script>
