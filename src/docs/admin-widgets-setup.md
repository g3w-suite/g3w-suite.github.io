# Widget and layer setup

[Back to Administration panel](g3wsuite_administration.md)

## Widgets management
Once a cartographic project has been published, thougth the icon ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Next to each layer are a series of icons and checkboxes:
 * **Label:** layer alias applied at the QGIS project level
   * The eye icon allows you to know the ID associated with the layer at the project level, this ID will be useful for creating parameterized URLs
 * **Name:** name of the layer (file or DB table)
 * ![Icon: Layertype](/img/manual-english-icon-layertype.png) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)
 * **Embedded:** If the layer comes from an embedded project, the cell displays the name of the embedded project. Clicking the link takes you to the project management page.
 * **WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.
     * In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.
     * The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.
     * The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.
 * **WFS:** a check mark shows whether the layer is published as a WFS service or not
 * **Actions:** a series of icons dedicated to various functions
   * ![Icon: Cache](/img/manual-english-icon-cache.png) **Caching Layer:** allows you to activate and manage the cache of the single layer at the project level
   * ![Icon: Editing](/img/manual-english-icon-editing.png) **Editing layer:** shows if the online editing function is active on the layer and allows you to activate and define it
   * ![Icon: Filter Layer](/img/manual-english-icon-filter-layer.png) **Hide layer by user/groups:** hide specific layers from the TOC based on specific users or groups of users
   * ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) **QPlotly widget:** add or manage plots created with DataPlotly QGIS plugin
   * ![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) **Geo-constraints by user/group:** create or manage editing and visualization geo-constraints based on poligonal layers
   * ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) **Alphanumeric and QGIS expressions constraints by user/groups:** create or manage editing and visualization constraints based on SLQ language or QGIS expressions
   * ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) **Hide columns by User/Groups:** create or manage constraints on one or more fields of a layer based on single or group user/s
   * ![Icon: Widget](/img/manual-english-icon-widget.png) **Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones
   * ![Icon: Styles](/img/manual-english-icon-styles.png) **Manage layer styles:** manage multi-style layer
   * ![Icon: Scale Visibility](/img/manual-english-icon-scale-visibility.png) **Scale visibility layer by Users/Groups:** allows you to define a visibility scale differentiated by user and/or user groups.  Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level
   * ![Icon: Fields Number](/img/manual-english-icon-fields-number.png) **Preview fields (max):** allows you to define the number of fields shown in the preview of the results of a search and query. HTML formatting and image previews are managed in the preview fields.

 * **Download capabilities:** allows the download of the geographic and not geographic layers in various formats
   * **Download as shp/geotiff:** for vector and raster layers
   * **Download as GPK:** for geographic or not geographic layers
   * **Download as xls:** for all types of layers, in .xls format
   * **Download as csv:** for all types of layers, in .csv format
   * **Download as gpx:** for geographic layers, in .gpx format
   * **Download as PDF:** for all types of layers, in .pdf format (limited to the attributes associated with individual features)
 * **Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.
   * **Hide attributes table:** make the attribute table unsearchable
   * **Hide legend:** do not show the associated legend
   * **Hide Layer TOC:** hide the layer in the TOC

**The number above each Action icon shows if and how many related objects are present.**

The functions present in the **Actions session** are described below.

### ![Icon: Cache](/img/manual-english-icon-cache.png) Caching layer

With this icon it is possible to **activate/manage the cache of the single layers** and **create XYZ Tiles layer** that you can use as **Base Layer** in your WebGis.

The form allows you to:
 * **Active**: enable cache on the layer
 * **Action**:
   * **Reset cache:** limited to the specific layer
   * **Reset cache for project:** reset cache of all the layers in the project

If the published project contains only one layer is it possible to convert this WebGis service into a Base Layer. 

To do this you need to activate the **Base layer option** form and fill in the second part of the form:
 * Base layer title
 * Base layer description
 * Base layer attribution

The newly created base layer will be available to be associated with those available for the various Cartographic Groups.

Learn more about how to create a new base layer in the [dedicated section](admin-base-layers.md).


### ![Icon: Editing](/img/manual-english-icon-editing.png) Editing layer

Through this icon it is possible to activate the online editing function on the individual layers and define the permissions for individual / groups of users

See the dedicated section on [editing administration settings](editing-administration-settings.md).


### ![Icon: Filter Layer](/img/manual-english-icon-filter-layer.png) Hide layer by user/groups

With this icon it will be possible to define the list of users (single and/or groups) who will be enabled to view this layer at the TOC and map level.

![Screenshot: G3W-SUITE Administration Hide Layer](/img/manual-english-g3wsuite-administration-hide-layer.png)



### ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) QPlotly widget

#### Activate charts on your WebGis

**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.

At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) and load the xml by clicking on the **'New Qplotly widget'** button.

As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.

After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:
 * **Edit icon:** to reload the XML file after editing the chart in QGIS
 * **Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)
 * **Download icon:** to download the XML
 * **Related widgets icon:** to create multiple charts (see the dedicated section below)
 * **Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client
 * **Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)

For each chart, the following information is displayed:
 * **Title:** defined in the DataPltly plugin
 * **Type:** chart type
 * **Linked checkbox:** to activate/deactivate the chart without removing it
 
![Screenshot: Charts Admin](/img/manual-english-charts-admin.png)

It is also possible:
 * **download the plot XML file** to reuse it in QGIS
 * **define the activation status** of the plots when the WebGis service is started

![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.png)

The title of the chart, defined at the plugin level, will be the unique identifier.

At client level, it will be possible to **filter plots based on the geometries visible on the map and/or selected by the user**.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.png)
![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.png)

#### Multiple charts

The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.

In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.

Steps to create a multiple graph:
 * access the list of graphs associated with a specific layer
 * click the Related widgets icon for one of the graphs to which you want to associate other graphs
 * in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer
 * sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).
 
![Screenshot: Charts Admin Multicharts](/img/manual-english-charts-admin-multicharts.png)

#### Charts based on 1:N data relation (child layer)

If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.

![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.png)

![Screenshot: Charts On Childs](/img/manual-english-charts-on-childs.png)

#### Chart visibility
Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).

Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:
 * **Sidebar:** only on the main chart panel
 * **Query:** only associated with parent attributes only at the parent feature attribute level
 * **Sidebar, Query:** in both positions (default)

#### Chart order
On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.

To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![Icon: Chart Order](/img/manual-english-icon-chart-order.png)

You can use Drag&Drop to define the order on the widget list

![Screenshot: Chart Order Settings](/img/manual-english-chart-order-settings.png)




<script type="application/json" data-i18n>
  {
  "it": {
    "![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) **Alphanumeric and QGIS expressions constraints by user/groups:** create or manage editing and visualization constraints based on SLQ language or QGIS expressions": "![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.png) **Alphanumeric and QGIS expressions constraints by user/groups:** creare o gestire vincoli di modifica e visualizzazione basati sul linguaggio SQL o su espressioni QGIS",
    "![Icon: Cache](/img/manual-english-icon-cache.png) **Caching Layer:** allows you to activate and manage the cache of the single layer at the project level": "![Icona: cache](/img/manual-english-icon-cache.png) **Caching Layer:** consente di attivare e gestire la cache del singolo layer a livello di progetto",
    "![Icon: Cache](/img/manual-english-icon-cache.png) Caching layer": "![Icona: cache](/img/manual-english-icon-cache.png) Cache del layer",
    "![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) **QPlotly widget:** add or manage plots created with DataPlotly QGIS plugin": "![Icona: DataPlotly](/img/manual-english-icon-dataplotly.png) **QPlotly widget:** aggiungere o gestire grafici creati con il plugin DataPlotly per QGIS",
    "![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) QPlotly widget": "![Icona: DataPlotly](/img/manual-english-icon-dataplotly.png) Widget QPlotly",
    "![Icon: Editing](/img/manual-english-icon-editing.png) **Editing layer:** shows if the online editing function is active on the layer and allows you to activate and define it": "![Icona: modifica](/img/manual-english-icon-editing.png) **Editing layer:** indica se la modifica online è attiva per il layer e consente di attivarla e configurarla",
    "![Icon: Editing](/img/manual-english-icon-editing.png) Editing layer": "![Icona: modifica](/img/manual-english-icon-editing.png) Modifica del layer",
    "![Icon: Fields Number](/img/manual-english-icon-fields-number.png) **Preview fields (max):** allows you to define the number of fields shown in the preview of the results of a search and query. HTML formatting and image previews are managed in the preview fields.": "![Icona: numero di campi](/img/manual-english-icon-fields-number.png) **Preview fields (max):** consente di definire il numero di campi mostrati nell'anteprima dei risultati di ricerca e interrogazione. La formattazione HTML e le anteprime delle immagini si gestiscono nei campi di anteprima.",
    "![Icon: Filter Layer](/img/manual-english-icon-filter-layer.png) **Hide layer by user/groups:** hide specific layers from the TOC based on specific users or groups of users": "![Icona: filtro del layer](/img/manual-english-icon-filter-layer.png) **Hide layer by user/groups:** nasconde layer specifici dalla TOC per determinati utenti o gruppi di utenti",
    "![Icon: Filter Layer](/img/manual-english-icon-filter-layer.png) Hide layer by user/groups": "![Icona: filtro del layer](/img/manual-english-icon-filter-layer.png) Nascondere i layer per utente/gruppo",
    "![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) **Geo-constraints by user/group:** create or manage editing and visualization geo-constraints based on poligonal layers": "![Icona: vincoli geografici](/img/manual-english-icon-geoconstraints.png) **Geo-constraints by user/group:** creare o gestire vincoli geografici di modifica e visualizzazione basati su layer poligonali",
    "![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) **Hide columns by User/Groups:** create or manage constraints on one or more fields of a layer based on single or group user/s": "![Icona: nascondi colonne](/img/manual-english-icon-hide-columns.png) **Hide columns by User/Groups:** creare o gestire vincoli su uno o più campi di un layer per singoli utenti o gruppi",
    "![Icon: Layertype](/img/manual-english-icon-layertype.png) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)": "![Icona: tipo di layer](/img/manual-english-icon-layertype.png) **Type:** indica il tipo di dati (WMS, PostGis, SpatiaLite, GDAL/OGR...)",
    "![Icon: Scale Visibility](/img/manual-english-icon-scale-visibility.png) **Scale visibility layer by Users/Groups:** allows you to define a visibility scale differentiated by user and/or user groups.  Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level": "![Icona: visibilità in base alla scala](/img/manual-english-icon-scale-visibility.png) **Scale visibility layer by Users/Groups:** consente di definire scale di visibilità diverse per utente e/o gruppi di utenti. L'attivazione sovrascrive, per i layer interessati, le scale di visualizzazione definite nel progetto QGIS",
    "![Icon: Styles](/img/manual-english-icon-styles.png) **Manage layer styles:** manage multi-style layer": "![Icona: stili](/img/manual-english-icon-styles.png) **Manage layer styles:** gestire layer con più stili",
    "![Icon: Widget](/img/manual-english-icon-widget.png) **Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones": "![Icona: widget](/img/manual-english-icon-widget.png) **Widgets list:** mostra quanti widget (ad es. ricerche) sono associati al layer e consente di attivarne di nuovi",
    "**Action**:": "**Action**:",
    "**Actions:** a series of icons dedicated to various functions": "**Actions:** una serie di icone dedicate a diverse funzioni",
    "**Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client": "**Casella Attivo all'avvio:** definire se il grafico deve essere attivo quando si accede al menu Charts del client web",
    "**Active**: enable cache on the layer": "**Active**: attivare la cache sul layer",
    "**Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)": "**Icona Elimina:** eliminare il grafico (verrà rimosso per tutti i layer simili, anche in altri progetti)",
    "**Download as GPK:** for geographic or not geographic layers": "**Download as GPK:** per layer geografici e non geografici",
    "**Download as PDF:** for all types of layers, in .pdf format (limited to the attributes associated with individual features)": "**Download as PDF:** per tutti i tipi di layer, in formato .pdf (limitato agli attributi associati ai singoli elementi)",
    "**Download as csv:** for all types of layers, in .csv format": "**Download as csv:** per tutti i tipi di layer, in formato .csv",
    "**Download as gpx:** for geographic layers, in .gpx format": "**Download as gpx:** per layer geografici, in formato .gpx",
    "**Download as shp/geotiff:** for vector and raster layers": "**Download as shp/geotiff:** per layer vettoriali e raster",
    "**Download as xls:** for all types of layers, in .xls format": "**Download as xls:** per tutti i tipi di layer, in formato .xls",
    "**Download capabilities:** allows the download of the geographic and not geographic layers in various formats": "**Download capabilities:** consente di scaricare layer geografici e non geografici in vari formati",
    "**Download icon:** to download the XML": "**Icona Scarica:** scaricare il file XML",
    "**Edit icon:** to reload the XML file after editing the chart in QGIS": "**Icona Modifica:** ricaricare il file XML dopo aver modificato il grafico in QGIS",
    "**Embedded:** If the layer comes from an embedded project, the cell displays the name of the embedded project. Clicking the link takes you to the project management page.": "**Embedded:** se il layer proviene da un progetto incorporato, la cella mostra il nome del progetto. Facendo clic sul link si accede alla pagina di gestione del progetto.",
    "**Hide Layer TOC:** hide the layer in the TOC": "**Hide Layer TOC:** nasconde il layer nella TOC",
    "**Hide attributes table:** make the attribute table unsearchable": "**Hide attributes table:** rende non ricercabile la tabella degli attributi",
    "**Hide legend:** do not show the associated legend": "**Hide legend:** non mostra la legenda associata",
    "**Label:** layer alias applied at the QGIS project level": "**Label:** alias del layer impostato a livello di progetto QGIS",
    "**Linked checkbox:** to activate/deactivate the chart without removing it": "**Casella Linked:** attivare o disattivare il grafico senza rimuoverlo",
    "**Name:** name of the layer (file or DB table)": "**Name:** nome del layer (file o tabella del DB)",
    "**Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)": "**Menu a discesa Position:** definire se mostrare il grafico nella barra laterale del client, associato all'elemento interrogato (Query), ai dati di una relazione 1:N oppure in entrambe le posizioni (Sidebar, Query)",
    "**Query:** only associated with parent attributes only at the parent feature attribute level": "**Query:** solo associati agli attributi del padre, a livello degli attributi dell'elemento padre",
    "**Related widgets icon:** to create multiple charts (see the dedicated section below)": "**Icona Widget correlati:** creare grafici multipli (vedere la sezione dedicata più avanti)",
    "**Reset cache for project:** reset cache of all the layers in the project": "**Reset cache for project:** reimpostare la cache di tutti i layer del progetto",
    "**Reset cache:** limited to the specific layer": "**Reset cache:** limitato al layer specifico",
    "**Sidebar, Query:** in both positions (default)": "**Sidebar, Query:** in entrambe le posizioni (predefinito)",
    "**Sidebar:** only on the main chart panel": "**Sidebar:** solo nel pannello principale dei grafici",
    "**The number above each Action icon shows if and how many related objects are present.**": "**Il numero sopra ogni icona Action indica se sono presenti oggetti correlati e quanti sono.**",
    "**Title:** defined in the DataPltly plugin": "**Title:** definito nel plugin DataPlotly",
    "**Type:** chart type": "**Type:** tipo di grafico",
    "**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**": "**Visualizzare nel client cartografico i grafici creati con [DataPlotly](https://github.com/ghtmtt/DataPlotly) per QGIS (un ottimo plugin sviluppato da [Matteo Ghetta](https://github.com/ghtmtt)).**",
    "**Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.": "**Visibility capabilities:** consente di definire alcune opzioni in modo generale, senza differenziare tra utenti.",
    "**WFS:** a check mark shows whether the layer is published as a WFS service or not": "**WFS:** una spunta indica se il layer è pubblicato come servizio WFS",
    "**WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.": "**WMS external:** per velocizzare il caricamento, i layer WMS presenti in un progetto QGIS vengono gestiti direttamente da Django e non da QGIS Server.",
    "**define the activation status** of the plots when the WebGis service is started": "**definire lo stato di attivazione** dei grafici all'avvio del servizio WebGis",
    "**download the plot XML file** to reuse it in QGIS": "**scaricare il file XML del grafico** per riutilizzarlo in QGIS",
    "Activate charts on your WebGis": "Attivare i grafici nel WebGis",
    "Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:": "Dal lato Admin, tramite il menu a discesa ‘Position’, è possibile definire se mostrare questi grafici:",
    "After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:": "Dopo aver caricato il file XML, il grafico apparirà nell'elenco; icone e caselle di controllo consentono di scegliere le modalità di visualizzazione:",
    "As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.": "Come le ricerche, il grafico caricato sarà disponibile in tutti i progetti che contengono lo stesso layer. Per attivarlo negli altri progetti, accedere al layer e selezionare la casella **'Linked'**.",
    "At client level, it will be possible to **filter plots based on the geometries visible on the map and/or selected by the user**.": "Nel client sarà possibile **filtrare i grafici in base alle geometrie visibili sulla mappa e/o selezionate dall'utente**.",
    "At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) and load the xml by clicking on the **'New Qplotly widget'** button.": "Nel layer per cui sono stati preparati i grafici, fare clic sull'icona **QPlotly widgets** ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) e caricare il file XML facendo clic sul pulsante **'New Qplotly widget'**.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Base layer attribution": "Attribuzione del Base Layer",
    "Base layer description": "Descrizione del Base Layer",
    "Base layer title": "Titolo del Base Layer",
    "Chart order": "Ordine dei grafici",
    "Chart visibility": "Visibilità dei grafici",
    "Charts based on 1:N data relation (child layer)": "Grafici basati su una relazione dati 1:N (layer figlio)",
    "For each chart, the following information is displayed:": "Per ciascun grafico vengono visualizzate le seguenti informazioni:",
    "Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).": "I grafici basati su layer o tabelle figlie di una relazione 1:N sono visibili sia nel menu principale dei grafici sia tra gli attributi di un elemento del layer padre (per i record limitati dalla relazione).",
    "Icon: Alpha Constraints": "Icona: vincoli alfanumerici",
    "Icon: Cache": "Icona: cache",
    "Icon: Chart Order": "Icona: ordine dei grafici",
    "Icon: Dataplotly": "Icona: DataPlotly",
    "Icon: Editing": "Icona: modifica",
    "Icon: Fields Number": "Icona: numero di campi",
    "Icon: Filter Layer": "Icona: filtro del layer",
    "Icon: Geoconstraints": "Icona: vincoli geografici",
    "Icon: Hide Columns": "Icona: nascondi colonne",
    "Icon: Layertype": "Icona: tipo di layer",
    "Icon: Scale Visibility": "Icona: visibilità in base alla scala",
    "Icon: Styles": "Icona: stili",
    "Icon: Widget": "Icona: widget",
    "If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.": "Se il grafico è collegato a un layer figlio in una relazione 1:N, può essere mostrato anche nelle informazioni dei singoli elementi del layer padre e nella tabella dei figli correlati.",
    "If the published project contains only one layer is it possible to convert this WebGis service into a Base Layer.": "Se il progetto pubblicato contiene un solo layer, è possibile convertire il servizio WebGis in un Base Layer.",
    "In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.": "In G3W-SUITE è possibile associare due o più grafici e mostrarli sovrapposti nel client.",
    "In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.": "Nel caso di WMS non esterni, il servizio viene gestito da Django, evitando problemi cross-domain; l'unico formato di risposta GetFeatureInfo gestito è GML.",
    "It is also possible:": "È inoltre possibile:",
    "Learn more about how to create a new base layer in the [dedicated section](admin-base-layers.md).": "Per ulteriori informazioni su come creare un Base Layer, consultare la [sezione dedicata](admin-base-layers.md).",
    "Multiple charts": "Grafici multipli",
    "Next to each layer are a series of icons and checkboxes:": "Accanto a ogni layer sono disponibili diverse icone e caselle di controllo:",
    "On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.": "Dal lato Admin è possibile definire l'ordine di visualizzazione dei grafici associati al servizio WebGis nel pannello Charts del client cartografico.",
    "Once a cartographic project has been published, thougth the icon ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.": "Dopo aver pubblicato un progetto cartografico, tramite l'icona ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) è possibile accedere all'elenco dei layer geografici che lo compongono e definirne alcuni aspetti funzionali disponibili nel client cartografico.",
    "Screenshot: Chart Order Settings": "Schermata: impostazioni dell'ordine dei grafici",
    "Screenshot: Charts Admin": "Schermata: amministrazione dei grafici",
    "Screenshot: Charts Admin Multicharts": "Schermata: grafici multipli nell'amministrazione",
    "Screenshot: Charts On Childs": "Schermata: grafici sui layer figlio",
    "Screenshot: G3W-SUITE Administration Hide Layer": "Schermata: nascondere un layer nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Plots": "Schermata: grafici nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Layer List": "Schermata: elenco dei layer del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Client Plots": "Schermata: grafici del client G3W-SUITE",
    "Screenshot: G3W-SUITE QGIS Plots": "Schermata: grafici QGIS di G3W-SUITE",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: grafici 1:N nel modulo client G3W",
    "Screenshot: Iconsmall Layerlist": "Icona piccola: elenco dei layer",
    "See the dedicated section on [editing administration settings](editing-administration-settings.md).": "Consultare la sezione dedicata alle [impostazioni di amministrazione della modifica](editing-administration-settings.md).",
    "Steps to create a multiple graph:": "Procedura per creare un grafico multiplo:",
    "The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.": "Il plugin DataPlotly per QGIS non consente di esportare l'XML di più grafici sovrapposti.",
    "The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.": "L'opzione WMS esterno consente di ottenere una risposta alla query (GetFeatureInfo) anche in formato HTML o text/plain, oltre che GML.",
    "The eye icon allows you to know the ID associated with the layer at the project level, this ID will be useful for creating parameterized URLs": "L'icona dell'occhio mostra l'ID associato al layer nel progetto; questo ID è utile per creare URL parametrizzati",
    "The form allows you to:": "Il modulo consente di:",
    "The functions present in the **Actions session** are described below.": "Di seguito sono descritte le funzioni disponibili nella sezione **Actions**.",
    "The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.": "Il modulo, basato sulla [libreria Plotly](https://plotly.com/), gestisce i grafici creati e salvati come XML nel plugin DataPlotly per QGIS.",
    "The newly created base layer will be available to be associated with those available for the various Cartographic Groups.": "Il nuovo Base Layer sarà disponibile per l'associazione ai vari Gruppi cartografici.",
    "The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.": "L'opzione è disponibile solo se il WMS caricato nel progetto QGIS usa lo stesso sistema di proiezione del progetto.",
    "The title of the chart, defined at the plugin level, will be the unique identifier.": "Il titolo del grafico, definito nel plugin, sarà l'identificatore univoco.",
    "Through this icon it is possible to activate the online editing function on the individual layers and define the permissions for individual / groups of users": "Questa icona consente di attivare la modifica online dei singoli layer e definire i permessi per singoli utenti o gruppi",
    "To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![Icon: Chart Order](/img/manual-english-icon-chart-order.png)": "Per accedere al menu di configurazione, fare clic sull'icona **'Project QPlotly widgets order'** ![Icon: Chart Order](/img/manual-english-icon-chart-order.png)",
    "To do this you need to activate the **Base layer option** form and fill in the second part of the form:": "Per farlo, attivare l'opzione **Base layer** nel modulo e compilare la seconda parte:",
    "Widget and layer setup": "Configurazione dei widget e dei layer",
    "Widgets management": "Gestione dei widget",
    "With this icon it is possible to **activate/manage the cache of the single layers** and **create XYZ Tiles layer** that you can use as **Base Layer** in your WebGis.": "Questa icona consente di **attivare e gestire la cache dei singoli layer** e di **creare layer XYZ Tiles** da usare come **Base Layer** nel WebGis.",
    "With this icon it will be possible to define the list of users (single and/or groups) who will be enabled to view this layer at the TOC and map level.": "Questa icona consente di definire l'elenco degli utenti (singoli e/o gruppi) autorizzati a visualizzare il layer nella TOC e sulla mappa.",
    "You can use Drag&Drop to define the order on the widget list": "È possibile usare Drag&Drop per definire l'ordine nell'elenco dei widget",
    "access the list of graphs associated with a specific layer": "accedere all'elenco dei grafici associati a un layer specifico",
    "click the Related widgets icon for one of the graphs to which you want to associate other graphs": "fare clic sull'icona Related widgets di uno dei grafici a cui si desidera associare altri grafici",
    "in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer": "nella finestra, aggiungere al grafico multiplo i grafici già presenti e associati al layer",
    "sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).": "ordinare i grafici per definirne l'ordine di visualizzazione (verrà mostrato il titolo del primo grafico nell'elenco)."
  }
}
</script>
