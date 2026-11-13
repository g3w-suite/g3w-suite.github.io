# Activate additional functions

[Back to Demo tutorial](demo.md)

## Activation of additional functions

Once your project has been published, you can access the list of widgets and additional functions to enrich your WebGis service.

### Widget management
Thougth the **`Layers list` icon** ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.

![Screenshot: Demo Project Manage](/img/manual-english-demo-project-manage.png)

The new session will show you the **list of the layer** present in the published QGIS project

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

### Search widget creation

To create a search tool available at WebGis level, **choose the vector layer** on which to apply the tool and **click on the `Widget list icon` ![Icon: Widget](/img/manual-english-icon-widget.png)**

**NB:** there may be a number of searches created by other users for the same layer.

You can activate them by **clicking on the `Linked` chekbox**.

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.png)

The listed searches can be **modified, deleted or unlinked** using the appropriate icons.

To **create a new search**, click on the blue link **`New widget`**.

In the related form we can define:
* **Form Title**
   * **`Type`:** "Search"
   * **`Name`:** name that G3W-SUITE will use to internally register the search widget.
 * **General configuration of research and results**
   * **`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface
   * **`Paginate results`:** option to activate pagination for the results list in order to avoid timeout problems in the case of a large number of results
 * **Search fields settings**
   * **`Field`:** field on which to carry out the research
   * **`Widget`:** method of entering the value to be searched
     * `InputBox`: manual compilation
     * `SelectBox`: values ​​shown via drop-down menu
     * `AutoCompleteBox`: values ​​shown through auto-complete mode
     * `DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.
   * **`Alias`:** alias assigned to the field that will appear in the search form
   * **`Description`:** description assigned to the field
   * **`Comparison operator`:** comparison operator (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) through which the search query will be carried out. The **IN** operator simplifies searches where a field must be associated with multiple values (OR operator)
   * **`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.
   * **`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.   
   
Now it is possible to **define the dependence more or less strong** (strictly).

In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.

Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.


The button ![Button: Add](/img/manual-english-button-add.png) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.


The example below shows the compilation of the form for creating a search widget dedicated to a cadastral cartography layer.

![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.png)

Once the form has been filled in, click on the **`OK button` to save** the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

**The widget will already be **`linked`** and therefore available in the WebGis interface on the left panel.**

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.png)

### Plots widget

**Add plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), manages **plots saved as xml**.

The plots are connected to the layers defined on the QGIS project, in this way, as for the searches and the constraints, it is possible to activate the same plots on all WebGis services in which the reference layer is present.

For this reason, there may be some plots created by other users for the same layer.
You can activate them by **clicking on the `Linked` chekbox**.


![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.png)

The title of the chart, defined at the plugin level, will be the unique identifier.

Try to create your plots in the QGIS project, save them as .xml and upload them to view the resluts on the webgis.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.png)

![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.png)

The graphs are filterable based on the:
* ![Screenshot: G3wclient Plots Map Filter](/img/manual-english-g3wclient-plots-map-filter.png) features visible on the map
* ![Screenshot: G3wclient Plots Selection Filter](/img/manual-english-g3wclient-plots-selection-filter.png) filter based on the selected features
 
These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.

The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).

The plots will automatically update after pan and zoom operations on the map

If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)

Appropriate **messages** at the single plots level will indicate the activation of these filters.


If 1: N relations are associated with the interrogated layer and plots have been activated on the referencing tables, it will also be possible to consult these plots by querying the referenced layer and clicking on the **Show relation charts** icon present in the results form.

![Screenshot: G3wclient Attribute View Plots](/img/manual-english-g3wclient-attribute-view-plots.png)


**Show relation charts:** display of graphs related to 1: N related data. Only if 1: N relations are associated with the interrogated layer and graphics have been activated on the boy tables.

<script type="application/json" data-i18n>
{
  "it": {
    "**`Alias`:** alias assigned to the field that will appear in the search form": "**`Alias`:** alias assegnato al campo, visualizzato nel modulo di ricerca",
    "**`Comparison operator`:** comparison operator (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) through which the search query will be carried out. The **IN** operator simplifies searches where a field must be associated with multiple values (OR operator)": "**`Comparison operator`:** operatore di confronto (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) usato per eseguire la ricerca. L'operatore **IN** semplifica le ricerche in cui a un campo devono essere associati più valori (operatore OR)",
    "**`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.": "**`Dependency`:** questo parametro (facoltativo) consente, solo per i widget **SelectBox** o **AutoCompleteBox**, di mostrare l'elenco dei valori di un campo filtrato in base al valore impostato per i campi precedenti.",
    "**`Description`:** description assigned to the field": "**`Description`:** descrizione assegnata al campo",
    "**`Field`:** field on which to carry out the research": "**`Field`:** campo su cui eseguire la ricerca",
    "**`Form Title`**": "**`Form Title`**",
    "**`Name`:** name that G3W-SUITE will use to internally register the search widget.": "**`Name`:** nome che G3W-SUITE utilizzerà per registrare internamente il widget di ricerca.",
    "**`Paginate results`:** option to activate pagination for the results list in order to avoid timeout problems in the case of a large number of results": "**`Paginate results`:** opzione per attivare la paginazione dell'elenco dei risultati ed evitare timeout quando i risultati sono numerosi",
    "**`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface": "**`Search title`:** titolo che apparirà nel pannello **'Ricerca'** dell'interfaccia WebGIS",
    "**`Type`:** \"Search\"": "**`Type`:** \"Search\"",
    "**`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.": "**`Use alternative unique values`** (per il widget SelectBox): possibilità di associare un layer del progetto QGIS che fornisce l'elenco dei valori univoci da mostrare nel campo di ricerca. Questo accelera notevolmente il caricamento del modulo di ricerca lato utente e migliora l'usabilità dello strumento, soprattutto quando sono presenti molti record con pochi valori univoci.",
    "**`Widget`:** method of entering the value to be searched": "**`Widget`:** modalità di inserimento del valore da cercare",
    "**Download capabilities:** allows the download of the geographic and not geographic layers in various formats": "**Funzioni di download:** consentono di scaricare i layer geografici e non geografici in vari formati",
    "**Hide attributes table:** make the attribute table unsearchable": "**Nascondi tabella degli attributi:** rende non consultabile la tabella degli attributi",
    "**Hide Layer TOC:** hide the layer in the TOC": "**Nascondi layer nell'indice dei contenuti:** nasconde il layer nell'indice",
    "**Hide legend:** do not show the associated legend": "**Nascondi legenda:** non mostra la legenda associata",
    "**Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.": "**Funzioni di visibilità:** consentono di definire alcuni elementi in modo generale, senza differenziare tra gli utenti.",
    "**WFS:** a check mark shows whether the layer is published as a WFS service or not": "**WFS:** un segno di spunta indica se il layer è pubblicato come servizio WFS",
    "**WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.": "**WMS esterno:** per velocizzare il caricamento, i layer WMS presenti in un progetto QGIS vengono gestiti direttamente da Django e non da QGIS Server.",
    "**Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones": "**Elenco dei widget:** mostra quanti widget (ad es. ricerche) sono associati al layer e consente di attivarne di nuovi",
    "**`Linked`**": "**`Collegato`**",
    "**`New widget`**": "**`Nuovo widget`**",
    "**`OK button`**": "**pulsante `OK`**",
    "**`Search`**": "**`Search`**",
    "**`linked`**": "**`collegato`**",
    "**Add plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**": "**Aggiungi al client cartografico i grafici creati con QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (un ottimo plugin sviluppato da [Matteo Ghetta](https://github.com/ghtmtt)).**",
    "**The widget will already be **`linked`** and therefore available in the WebGis interface on the left panel.**": "**Il widget sarà già **`collegato`** e quindi disponibile nel pannello sinistro dell'interfaccia WebGIS.**",
    "**Try to activate the available options and test the result on the WebGis**": "**Prova ad attivare le opzioni disponibili e verifica il risultato nel WebGIS**",
    "**Show relation charts:** display of graphs related to 1: N related data. Only if 1: N relations are associated with the interrogated layer and graphics have been activated on the boy tables.": "**Mostra grafici correlati:** visualizza i grafici relativi ai dati associati con relazione 1:N. Disponibile solo se al layer interrogato sono associate relazioni 1:N e i grafici sono stati attivati sulle tabelle figlie.",
    "### General configuration of research and results": "Configurazione generale della ricerca e dei risultati",
    "### Search fields settings": "Impostazioni dei campi di ricerca",
    "### Search widget creation": "Creazione di un widget di ricerca",
    "### Plots widget": "Widget dei grafici",
    "### Widget management": "Gestione dei widget",
    "Activate additional functions": "Attivare funzioni aggiuntive",
    "AutoCompleteBox": "AutoCompleteBox",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "DateTimeBox": "DateTimeBox",
    "Download as csv: for all types of layers, in .csv format": "Scarica come csv: per tutti i tipi di layer, in formato .csv",
    "Download as gpx: for geographic layers, in .gpx format": "Scarica come gpx: per i layer geografici, in formato .gpx",
    "Download as PDF: for all types of layers, in .pdf format (limited to the attributes associated with individual features)": "Scarica come PDF: per tutti i tipi di layer, in formato .pdf (limitato agli attributi associati alle singole entità)",
    "Download as shp/geotiff: for vector and raster layers": "Scarica come shp/geotiff: per i layer vettoriali e raster",
    "Download as xls: for all types of layers, in .xls format": "Scarica come xls: per tutti i tipi di layer, in formato .xls",
    "Download as GPK: for geographic or not geographic layers": "Scarica come GPK: per i layer geografici e non geografici",
    "Form Title": "Titolo del modulo",
    "If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)": "Se attivato, il **filtro basato sulle entità selezionate** viene applicato automaticamente a tutti i grafici correlati (associati allo stesso layer e alle tabelle in relazione 1:N)",
    "In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.": "Nel caso di WMS non esterno, il servizio è gestito da Django, evitando problemi tra domini, ma l'unico formato di risposta GetFeatureInfo supportato è GML.",
    "In the related form we can define:": "Nel modulo corrispondente è possibile definire:",
    "InputBox": "InputBox",
    "It is also possible to define the values ​​of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.": "È anche possibile definire liberamente i valori dei singoli campi e **senza un ordine specifico**. I valori disponibili per gli altri campi dipenderanno comunque dalla scelta effettuata.",
    "The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).": "Il **filtro basato sul contenuto della mappa** può essere attivato globalmente su tutti i grafici (icona in cima al pannello dei grafici) oppure solo su alcuni grafici specifici (icona accanto al singolo grafico).",
    "The button ![Button: Add](/img/manual-english-button-add.png) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.": "Il pulsante ![Pulsante: aggiungi](/img/manual-english-button-add.png) consente di aggiungere altri campi alla query di ricerca, gestibile tramite operatori **AND/OR**.",
    "The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.": "L'opzione WMS esterno consente di ottenere una risposta alla richiesta (GetFeatureInfo) anche in formato HTML o text/plain, oltre che GML.",
    "The listed searches can be **modified, deleted or unlinked** using the appropriate icons.": "Le ricerche elencate possono essere **modificate, eliminate o scollegate** tramite le icone corrispondenti.",
    "The module, based on the [Plotly library](https://plotly.com/), manages **plots saved as xml**.": "Il modulo, basato sulla [libreria Plotly](https://plotly.com/), gestisce **grafici salvati in formato XML**.",
    "The number above each Action icon shows if and how many related objects are present.": "Il numero sopra ogni icona delle azioni indica se sono presenti oggetti correlati e quanti.",
    "The plots are connected to the layers defined on the QGIS project, in this way, as for the searches and the constraints, it is possible to activate the same plots on all WebGis services in which the reference layer is present.": "I grafici sono collegati ai layer definiti nel progetto QGIS; così, come avviene per le ricerche e i vincoli, è possibile attivare gli stessi grafici in tutti i servizi WebGIS in cui è presente il layer di riferimento.",
    "The title of the chart, defined at the plugin level, will be the unique identifier.": "Il titolo del grafico, definito nel plugin, sarà il suo identificativo univoco.",
    "The listed searches can be modified, deleted or unlinked using the appropriate icons.": "Le ricerche elencate possono essere modificate, eliminate o scollegate tramite le icone corrispondenti.",
    "The new session will show you the **list of the layer** present in the published QGIS project": "La nuova schermata mostrerà l'**elenco dei layer** presenti nel progetto QGIS pubblicato",
    "The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.": "L'opzione è disponibile solo se il WMS caricato nel progetto QGIS utilizza lo stesso sistema di proiezione del progetto.",
    "Thougth the **`Layers list` icon** ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.": "Tramite l'**icona `Elenco dei layer`** ![Schermata: icona elenco layer](/img/manual-english-iconsmall-layerlist.png) è possibile accedere all'elenco dei layer geografici che compongono il progetto e definire alcune funzioni disponibili nel client cartografico.",
    "Try to create your plots in the QGIS project, save them as .xml and upload them to view the resluts on the webgis.": "Prova a creare i grafici nel progetto QGIS, salvali in formato .xml e caricali per visualizzarli nel WebGIS.",
    "Once the form has been filled in, click on the **`OK button` to save** the settings.": "Dopo aver compilato il modulo, fai clic su **`OK` per salvare** le impostazioni.",
    "Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.": "Dopo aver salvato le impostazioni, il widget creato apparirà nell'elenco dei widget associati al layer.",
    "To **create a new search**, click on the blue link **`New widget`**.": "Per **creare una nuova ricerca**, fai clic sul collegamento blu **`Nuovo widget`**.",
    "To create a search tool available at WebGis level, **choose the vector layer** on which to apply the tool and **click on the `Widget list icon` ![Icon: Widget](/img/manual-english-icon-widget.png)**": "Per creare uno strumento di ricerca disponibile nel WebGIS, **scegli il layer vettoriale** a cui applicarlo e **fai clic sull'icona `Elenco dei widget` ![Icona: widget](/img/manual-english-icon-widget.png)**",
    "You can activate them by **clicking on the `Linked` chekbox**.": "Puoi attivarli **selezionando la casella `Collegato`**.",
    "You can activate them by **clicking on the `Linked` checkbox**.": "Puoi attivarli **selezionando la casella `Collegato`**.",
    "You can activate them by **clicking on the `Linked` chekbox**": "Puoi attivarli **selezionando la casella `Collegato`**.",
    "You can activate them by **clicking on the `Linked` checkbox**": "Puoi attivarli **selezionando la casella `Collegato`**.",
    "You can customize the WMS response by configuring Django directly.": "È possibile personalizzare la risposta WMS configurando direttamente Django.",
    "You can activate them by clicking on the Linked checkbox.": "Puoi attivarli selezionando la casella Linked.",
    "Once the form is filled in, click on the `OK` button to save the settings.": "Dopo aver compilato il modulo, fai clic sul pulsante `OK` per salvare le impostazioni.",
    "You can activate them by **clicking on the `Linked` chekbox**.": "Puoi attivarli **selezionando la casella `Collegato`**.",
    "Widget management": "Gestione dei widget",
    "Widgets list": "Elenco dei widget",
    "When the form is filled in, click on the **`OK` button to save** the settings.": "Dopo aver compilato il modulo, fai clic su **`OK` per salvare** le impostazioni.",
    "When the form is filled in, click on the **`OK` button to save** the settings.": "Dopo aver compilato il modulo, fai clic su **`OK` per salvare** le impostazioni."
  }
}
</script>
