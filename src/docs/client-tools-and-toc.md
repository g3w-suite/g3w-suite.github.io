# Tools panel and table of contents

[Back to Cartographic client](g3wsuite_client.md)

## Tools panel

The upper part of the left bar contains, if activated, the following items:

### Legend
View the service's complete legend.

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

Choose:
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

[Layers and attribute table](client-layers.md)

<script type="application/json" data-i18n>
{
  "it": {
    "![Screenshot: G3wclient Plots Map Filter](/img/manual-english-g3wclient-plots-map-filter.png) features visible on the map": "![Schermata: filtro mappa dei grafici G3wclient](/img/manual-english-g3wclient-plots-map-filter.png) elementi visibili sulla mappa",
    "![Screenshot: G3wclient Plots Selection Filter](/img/manual-english-g3wclient-plots-selection-filter.png) filter based on the selected features": "![Schermata: filtro selezione dei grafici G3wclient](/img/manual-english-g3wclient-plots-selection-filter.png) filtro basato sugli elementi selezionati",
    "**Custom title:** using the **ItemIDs** at the print layout level of the QGIS project it is possible to insert one or more labels with **customized content in the print** from WebGis": "**Titolo personalizzato:** usando gli **ItemID** del layout di stampa nel progetto QGIS, è possibile inserire dal WebGIS una o più etichette con **contenuto personalizzato nella stampa**",
    "**DPI:** print resolution, with delfault values ​​list, but also manually customizable": "**DPI:** risoluzione di stampa, selezionabile da un elenco di valori predefiniti o personalizzabile manualmente",
    "**Format:** print to PNG, JPG, SVG, PDF or GeoPDF": "**Formato:** stampa in PNG, JPG, SVG, PDF o GeoPDF",
    "**NB:** fields not exposed as QGIS project-level WMS are not available for query building.": "**NB:** i campi non esposti come WMS a livello di progetto QGIS non sono disponibili per la creazione delle query.",
    "**Printing tool based on layouts defined on QGIS project.**": "**Strumento di stampa basato sui layout definiti nel progetto QGIS.**",
    "**Rotation:** rotation angle": "**Rotazione:** angolo di rotazione",
    "**Scale:** print scale, with delfault values ​​list, but also manually customizable": "**Scala:** scala di stampa, selezionabile da un elenco di valori predefiniti o personalizzabile manualmente",
    "**Template:** print layout among those associated with the published QGIS project": "**Modello:** layout di stampa tra quelli associati al progetto QGIS pubblicato",
    "**The Search menu contains the list of search tools defined through the Administration panel and custom searches created with the Query Builder.**": "**Il menu Ricerca contiene l’elenco degli strumenti definiti nel pannello di amministrazione e delle ricerche personalizzate create con Query Builder.**",
    "**View graphs created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) and activated at the admin session level.**": "**Visualizza i grafici creati con QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) e attivati nella sezione di amministrazione.**",
    "**` Legend`:** reports the legend of the entire project": "**` Legend`:** mostra la legenda dell’intero progetto",
    "**`Credits`:** references to the G3W-SUITE project and application version information": "**`Credits`:** riferimenti al progetto G3W-SUITE e informazioni sulla versione dell’applicazione",
    "**`Data`:** reports **simple metadata associated with the individual layers**.": "**`Data`:** mostra i **metadati semplici associati ai singoli layer**.",
    "**`General`:** reports the **metadata defined on the QGIS project** in the item: **`Project →  Properties (QGIS Server session, Service Capabilities)`**.": "**`General`:** mostra i **metadati definiti nel progetto QGIS** alla voce **`Project →  Properties (QGIS Server session, Service Capabilities)`**.",
    "A classic ![Icon: Query Builder](/img/manual-english-query-builder-icon.png) **Advanced Search** is present at the Search menu level.": "Nel menu Ricerca è disponibile una **Ricerca avanzata** classica con ![Icona: Query Builder](/img/manual-english-query-builder-icon.png).",
    "Activation of editing session.": "Attiva la sessione di modifica.",
    "Additional information is displayed if you log in as Administrator": "Se accedi come amministratore vengono mostrate informazioni aggiuntive.",
    "Appropriate **messages** at the single plots level will indicate the activation of these filters.": "Messaggi appropriati accanto ai singoli grafici indicano l’attivazione di questi filtri.",
    "Available only after activation of the editing function and based on the powers of the logged in user": "Disponibile solo dopo aver attivato la funzione di modifica e in base ai permessi dell’utente autenticato.",
    "Back to Cartographic client": "Torna al client cartografico",
    "Bookmarks": "Segnalibri",
    "By clicking on the **+** button it will be possible to define a name to associate and create the Theme.": "Facendo clic sul pulsante **+** è possibile assegnare un nome e creare il tema.",
    "By positioning on the individual results, the corresponding features will be highlighted on the map; clicking on the individual results you can consult all the attributes.": "Spostando il puntatore sui singoli risultati, gli elementi corrispondenti vengono evidenziati sulla mappa; facendo clic su un risultato è possibile consultare tutti gli attributi.",
    "Charts": "Grafici",
    "Charts based on 1:N data relation (child layer)": "Grafici basati su una relazione 1:N (layer figlio)",
    "Check the plots in the list and consult them on the rigth panel.": "Seleziona i grafici nell’elenco e consultali nel pannello a destra.",
    "Choose Theme": "Scegli tema",
    "Choose:": "Scegli:",
    "Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.": "In base alle impostazioni di pubblicazione del progetto QGIS, questa sezione potrebbe non essere mostrata all’utente.",
    "Editing layer": "Layer modificabile",
    "If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)": "Se attivato, il **filtro basato sugli elementi selezionati** viene applicato automaticamente a tutti i grafici correlati (associati allo stesso layer e alle tabelle correlate 1:N).",
    "If an **Atlas type print layout** is associated in the QGIS project, the layout reference will be available.": "Se nel progetto QGIS è associato un **layout di stampa di tipo Atlante**, sarà disponibile il relativo riferimento.",
    "If the **chart is linked to a child layer in a 1:N relation**, it can also be displayed at the information level of the individual parent features": "Se il **grafico è collegato a un layer figlio tramite una relazione 1:N**, può essere visualizzato anche nelle informazioni dei singoli elementi padre.",
    "In the event that Themes (Views) are defined in the QGIS project, a specific choice menu will be available in the Layers session of the TOC.": "Se nel progetto QGIS sono definiti dei Temi (Viste), nella sezione Layer della TOC sarà disponibile un apposito menu di selezione.",
    "Layers and attribute table": "Layer e tabella degli attributi",
    "Legend": "Legenda",
    "Metadata": "Metadati",
    "On the map, a light rectangular area will allow you to define the print area.": "Sulla mappa, un riquadro chiaro consente di definire l’area di stampa.",
    "Once created, the User Themes will be selectable, overwritable and editable using the icons shown next to each of them.": "Dopo la creazione, i temi utente possono essere selezionati, sovrascritti e modificati tramite le icone accanto a ciascuno di essi.",
    "Print": "Stampa",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: modulo G3wclient con grafici 1:N",
    "Screenshot: G3wclient Metadata View": "Schermata: visualizzazione dei metadati G3wclient",
    "Screenshot: G3wclient Plots": "Schermata: grafici di G3wclient",
    "Screenshot: G3wclient Print Tool": "Schermata: strumento di stampa G3wclient",
    "Screenshot: G3wclient Print Tool Atlas": "Schermata: atlante nello strumento di stampa G3wclient",
    "Screenshot: G3wclient Print Tool Screenshot": "Schermata: immagine dallo strumento di stampa G3wclient",
    "Screenshot: G3wclient Querybuilder": "Schermata: Query Builder di G3wclient",
    "Screenshot: G3wclient Searc List": "Schermata: elenco ricerche di G3wclient",
    "Screenshot: G3wclient Search Example": "Schermata: esempio di ricerca in G3wclient",
    "Screenshot: G3wclient Theme": "Schermata: tema G3wclient",
    "Screenshot: Spatial Bookmarks": "Schermata: segnalibri spaziali",
    "Search and Advanced Search": "Ricerca e ricerca avanzata",
    "The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).": "Il **filtro basato sul contenuto della mappa** può essere attivato globalmente su tutti i grafici (icona in cima al pannello dei grafici) oppure solo su alcuni grafici specifici (icona accanto al singolo grafico).",
    "The **panel with the list of results** will open on the right side of the client, for each result the first three fields of the associated table will be displayed.": "Sul lato destro del client si apre il **pannello con l’elenco dei risultati**; per ogni risultato vengono mostrati i primi tre campi della tabella associata.",
    "The URLs of the various OGC services associated with the map are also listed, as well as information about the EPSG and bounding boxes associated with the project.": "Sono inoltre elencati gli URL dei vari servizi OGC associati alla mappa e le informazioni su EPSG e riquadri di delimitazione del progetto.",
    "The cards to be printed are defined by referring to the atlas identifier defined in the print layout.": "Le schede da stampare vengono definite facendo riferimento all’identificativo dell’atlante impostato nel layout di stampa.",
    "The choice of a Theme will determine the automatic activation of the layers and related styles, defined in the Theme itself.": "La scelta di un tema attiva automaticamente i layer e gli stili associati definiti nel tema stesso.",
    "The created themes will always be available to the user who defined them.": "I temi creati restano sempre disponibili all’utente che li ha definiti.",
    "The graphs are filterable based on the:": "I grafici possono essere filtrati in base a:",
    "The logged in user can create customized themes in the same way as he prepares them in QGIS, i.e. by defining the on/off layers and associating any specific styles with the individual layers.": "L’utente autenticato può creare temi personalizzati come in QGIS, definendo i layer attivi e associando eventuali stili specifici ai singoli layer.",
    "The metadata reported in this session derive from those set at the QGIS project level.": "I metadati mostrati in questa sezione derivano da quelli impostati nel progetto QGIS.",
    "The name of the chosen theme will be displayed prominently in this session.": "Il nome del tema scelto viene mostrato in evidenza in questa sezione.",
    "The plots will automatically update after pan and zoom operations on the map": "I grafici si aggiornano automaticamente dopo aver spostato o ingrandito la mappa.",
    "The same panel allows you to create a screenshot (PNG or GeoTiff) of the area displayed on the map.": "Lo stesso pannello consente di creare un’immagine (PNG o GeoTiff) dell’area visualizzata sulla mappa.",
    "The saved query will be available until the browser cache is cleared": "La query salvata resta disponibile finché non viene svuotata la cache del browser.",
    "The upper part of the left bar contains, if activated, the following items:": "La parte superiore della barra a sinistra contiene, se attivati, i seguenti elementi:",
    "The user, even if not logged in, will be able to create new bookmarks by simply positioning them in an area of ​​the map and then clicking on the **`+`** button to define the **`Name`** to associate with the bookmark.": "Anche un utente non autenticato può creare nuovi segnalibri: è sufficiente posizionarsi su un’area della mappa, fare clic sul pulsante **`+`** e specificare il **`Nome`** da associare al segnalibro.",
    "These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.": "Questi **filtri** vengono applicati anche ai **grafici associati ai dati correlati** (in modalità 1:N), in base agli elementi padre visibili e/o selezionati.",
    "These bookmarks will be saved in the browser cache and therefore always available until deleted.": "Questi segnalibri vengono salvati nella cache del browser e restano disponibili fino alla loro eliminazione.",
    "This content is divided into three sessions: **General, Data, Legend** and **Credits**": "I contenuti sono suddivisi in quattro sezioni: **Generale, Dati, Legenda** e **Crediti**",
    "This tool will display the spatial bookmarks defined and associated with the QGIS project.": "Questo strumento mostra i segnalibri spaziali definiti e associati al progetto QGIS.",
    "Through this tool it is possible to:": "Questo strumento consente di:",
    "Tools panel": "Pannello degli strumenti",
    "Tools panel and table of contents": "Pannello degli strumenti e indice dei contenuti",
    "User themes": "Temi utente",
    "View the service's complete legend.": "Consulta la legenda completa del servizio.",
    "You choose the search you are interested in, fill in the required fields and click on the **`Search`** button.": "Scegli la ricerca desiderata, compila i campi richiesti e fai clic sul pulsante **`Search`**.",
    "Zoom to features and download icons are available for results (single or cumulative)": "Per i risultati, singoli o complessivi, sono disponibili le icone per lo zoom sugli elementi e il download.",
    "carry out alphanumeric searches on geometric layers": "eseguire ricerche alfanumeriche sui layer geometrici",
    "edit a previously saved query": "modificare una query salvata in precedenza",
    "on the map content": "contenuto della mappa",
    "save the query to reuse it until the end of the work session": "salvare la query per riutilizzarla fino al termine della sessione di lavoro"
  }
}
</script>
