# Activate additional functions

[Back to Demo tutorial](demo.md)

## Activation of additional functions

Once your project has been published, you can access the list of widgets and additional functions to enrich your WebGis service.

### Widget management
Use the **`Layers list` icon** ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) to view project layers and configure their client functions.

![Screenshot: Demo Project Manage](/img/manual-english-demo-project-manage.png)

The panel lists the **layers** in the published QGIS project.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.png)

 * **Label:** layer alias applied at the QGIS project level
   * The blue eye icon![Icon: Layerid](/img/manual-english-icon-layerid.png) allows you to know the ID associated with the layer at the project level, this ID will be useful for creating parameterized URLs
 * **Name:** name of the layer (file or DB table)
 * ![Icon: Layertype](/img/manual-english-icon-layertype.png) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)
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

The number above each Action icon shows if and how many related objects are present.

**Try to activate the available options and test the result on the WebGis**

[Search and charts in the demo](demo-search-charts.md)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) **Alphanumeric and QGIS expressions constraints by user/groups:** create or manage editing and visualization constraints based on SLQ language or QGIS expressions": "![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.png) **Vincoli alfanumerici ed espressioni QGIS per utente/gruppi:** crea o gestisce vincoli di modifica e visualizzazione basati sul linguaggio SQL o su espressioni QGIS",
    "![Icon: Cache](/img/manual-english-icon-cache.png) **Caching Layer:** allows you to activate and manage the cache of the single layer at the project level": "![Icona: cache](/img/manual-english-icon-cache.png) **Cache del layer:** consente di attivare e gestire la cache del singolo layer a livello di progetto",
    "![Icon: Dataplotly](/img/manual-english-icon-dataplotly.png) **QPlotly widget:** add or manage plots created with DataPlotly QGIS plugin": "![Icona: DataPlotly](/img/manual-english-icon-dataplotly.png) **Widget QPlotly:** aggiunge o gestisce grafici creati con il plugin DataPlotly di QGIS",
    "![Icon: Editing](/img/manual-english-icon-editing.png) **Editing layer:** shows if the online editing function is active on the layer and allows you to activate and define it": "![Icona: modifica](/img/manual-english-icon-editing.png) **Modifica del layer:** indica se la modifica online è attiva per il layer e consente di attivarla e configurarla",
    "![Icon: Fields Number](/img/manual-english-icon-fields-number.png) **Preview fields (max):** allows you to define the number of fields shown in the preview of the results of a search and query. HTML formatting and image previews are managed in the preview fields.": "![Icona: numero di campi](/img/manual-english-icon-fields-number.png) **Campi di anteprima (max):** consente di definire quanti campi mostrare nell'anteprima dei risultati di ricerca e interrogazione. Nei campi di anteprima sono gestiti la formattazione HTML e l'anteprima delle immagini.",
    "![Icon: Filter Layer](/img/manual-english-icon-filter-layer.png) **Hide layer by user/groups:** hide specific layers from the TOC based on specific users or groups of users": "![Icona: filtro layer](/img/manual-english-icon-filter-layer.png) **Nascondi layer per utente/gruppi:** nasconde layer specifici dall'indice in base agli utenti o ai gruppi",
    "![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) **Geo-constraints by user/group:** create or manage editing and visualization geo-constraints based on poligonal layers": "![Icona: vincoli geografici](/img/manual-english-icon-geoconstraints.png) **Vincoli geografici per utente/gruppo:** crea o gestisce vincoli geografici di modifica e visualizzazione basati su layer poligonali",
    "![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) **Hide columns by User/Groups:** create or manage constraints on one or more fields of a layer based on single or group user/s": "![Icona: nascondi colonne](/img/manual-english-icon-hide-columns.png) **Nascondi colonne per utente/gruppi:** crea o gestisce vincoli su uno o più campi di un layer in base a singoli utenti o gruppi",
    "![Icon: Layertype](/img/manual-english-icon-layertype.png) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)": "![Icona: tipo di layer](/img/manual-english-icon-layertype.png) **Tipo:** indica il tipo di dati (WMS, PostGIS, SpatiaLite, GDAL / OGR ...)",
    "![Icon: Scale Visibility](/img/manual-english-icon-scale-visibility.png) **Scale visibility layer by Users/Groups:** allows you to define a visibility scale differentiated by user and/or user groups.  Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level": "![Icona: visibilità in base alla scala](/img/manual-english-icon-scale-visibility.png) **Visibilità del layer in base alla scala per utenti/gruppi:** consente di definire una scala di visibilità distinta per utente e/o gruppi. Attivando questa opzione, per i layer interessati verranno sovrascritte le scale di visualizzazione definite nel progetto QGIS",
    "![Icon: Styles](/img/manual-english-icon-styles.png) **Manage layer styles:** manage multi-style layer": "![Icona: stili](/img/manual-english-icon-styles.png) **Gestisci gli stili del layer:** gestisce i layer con più stili",
    "![Icon: Widget](/img/manual-english-icon-widget.png) **Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones": "![Icona: widget](/img/manual-english-icon-widget.png) **Elenco dei widget:** mostra quanti widget (ad es. ricerche) sono associati al layer e consente di attivarne di nuovi",
    "![Screenshot: Demo Project Manage](/img/manual-english-demo-project-manage.png)": "![Schermata: gestione del progetto della demo](/img/manual-english-demo-project-manage.png)",
    "![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.png)": "![Schermata: elenco dei layer del progetto nell'amministrazione G3W-SUITE](/img/manual-english-g3wsuite-administration-project-layer-list.png)",
    "**Actions:** a series of icons dedicated to various functions": "**Azioni:** una serie di icone dedicate a diverse funzioni",
    "**Download as GPK:** for geographic or not geographic layers": "**Scarica come GPK:** per layer geografici e non geografici",
    "**Download as PDF:** for all types of layers, in .pdf format (limited to the attributes associated with individual features)": "**Scarica come PDF:** per tutti i tipi di layer, in formato .pdf (limitato agli attributi associati alle singole entità)",
    "**Download as csv:** for all types of layers, in .csv format": "**Scarica come csv:** per tutti i tipi di layer, in formato .csv",
    "**Download as gpx:** for geographic layers, in .gpx format": "**Scarica come gpx:** per i layer geografici, in formato .gpx",
    "**Download as shp/geotiff:** for vector and raster layers": "**Scarica come shp/geotiff:** per layer vettoriali e raster",
    "**Download as xls:** for all types of layers, in .xls format": "**Scarica come xls:** per tutti i tipi di layer, in formato .xls",
    "**Download capabilities:** allows the download of the geographic and not geographic layers in various formats": "**Funzioni di download:** consentono di scaricare i layer geografici e non geografici in vari formati",
    "**Hide Layer TOC:** hide the layer in the TOC": "**Nascondi layer nell'indice dei contenuti:** nasconde il layer nell'indice",
    "**Hide attributes table:** make the attribute table unsearchable": "**Nascondi tabella degli attributi:** rende non consultabile la tabella degli attributi",
    "**Hide legend:** do not show the associated legend": "**Nascondi legenda:** non mostra la legenda associata",
    "**Label:** layer alias applied at the QGIS project level": "**Etichetta:** alias del layer impostato nel progetto QGIS",
    "**Name:** name of the layer (file or DB table)": "**Nome:** nome del layer (file o tabella del database)",
    "**Try to activate the available options and test the result on the WebGis**": "**Prova ad attivare le opzioni disponibili e verifica il risultato nel WebGIS**",
    "**Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.": "**Funzioni di visibilità:** consentono di definire alcuni elementi in modo generale, senza differenziare tra gli utenti.",
    "**WFS:** a check mark shows whether the layer is published as a WFS service or not": "**WFS:** un segno di spunta indica se il layer è pubblicato come servizio WFS",
    "**WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.": "**WMS esterno:** per velocizzare il caricamento, i layer WMS presenti in un progetto QGIS vengono gestiti direttamente da Django e non da QGIS Server.",
    "Activate additional functions": "Attivare funzioni aggiuntive",
    "Activation of additional functions": "Attivazione delle funzioni aggiuntive",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.": "Nel caso di WMS non esterno, il servizio è gestito da Django, evitando problemi tra domini, ma l'unico formato di risposta GetFeatureInfo supportato è GML.",
    "Once your project has been published, you can access the list of widgets and additional functions to enrich your WebGis service.": "Dopo aver pubblicato il progetto, puoi accedere all'elenco dei widget e delle funzioni aggiuntive per arricchire il servizio WebGIS.",
    "Search and charts in the demo": "Ricerche e grafici nella demo",
    "The blue eye icon![Icon: Layerid](/img/manual-english-icon-layerid.png) allows you to know the ID associated with the layer at the project level, this ID will be useful for creating parameterized URLs": "L'icona a forma di occhio blu ![Icona: ID del layer](/img/manual-english-icon-layerid.png) mostra l'ID associato al layer nel progetto; questo ID è utile per creare URL parametrizzati.",
    "The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.": "L'opzione WMS esterno consente di ottenere una risposta alla richiesta (GetFeatureInfo) anche in formato HTML o text/plain, oltre che GML.",
    "The number above each Action icon shows if and how many related objects are present.": "Il numero sopra ogni icona delle azioni indica se sono presenti oggetti correlati e quanti.",
    "The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.": "L'opzione è disponibile solo se il WMS caricato nel progetto QGIS utilizza lo stesso sistema di proiezione del progetto.",
    "The panel lists the **layers** in the published QGIS project.": "Il pannello elenca i **layer** del progetto QGIS pubblicato.",
    "Use the **`Layers list` icon** ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) to view project layers and configure their client functions.": "Usa l'**icona `Elenco dei layer`** ![Schermata: icona elenco layer](/img/manual-english-iconsmall-layerlist.png) per visualizzare i layer del progetto e configurarne le funzioni nel client.",
    "Widget management": "Gestione dei widget"
  }
}
</script>
