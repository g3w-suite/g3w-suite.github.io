# Map navigation and queries

[Back to Cartographic client](g3wsuite_client.md)

## Navigation and interaction with the map

### Map area

At the base of the map area there is an information bar showing:
 * **mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)
 * **project projection system**
 * **share map:** t icon to share the map bringing back various customizations
 * **display scale**

**share map icon**: this tool allows you to share the WebGis service while maintaining the customizations defined by the user (map extension, layers on/off, styles associated with the layers...) including, if present, the annotations created.
 
![Screenshot: G3wclient Footer2](/img/manual-english-g3wclient-footer2.png)

 
### Map controls

**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**

![Icon: Navigation Tools](/img/manual-english-icon-navigation-tools.png) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.

Map-controls available on the left side of the map:

 * ![Icon: Navigation Fitextent](/img/manual-english-icon-navigation-fitextent.png) **`Fit to extent`:** zoom to the initial extension
 * ![Icon: Navigation Zoomin](/img/manual-english-icon-navigation-zoomin.png) **`Zoom in and out`:** zoom in and zoom out
 * ![Icon: Navigation Zoomtobox](/img/manual-english-icon-navigation-zoomtobox.png) **`Zoom to box`:** zoom tool based on drawing a rectangle
 * ![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.png) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))
 * ![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.png) **`Query area`:** areal query

	The panel that appears at the top left allows you to choose:
   * geospatial operator
     * intersects
     * within
   * kind of geometry to draw
     * rectangle
     * polygon
     * circle, specifying the radius also manually
     * polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer 
   * layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly
 * ![Icon: Navigation Geolocation](/img/manual-english-icon-navigation-geolocation.png) **`Geolocation`:** geolocation tool (useful for consultation from tablet)
 * ![Icon: Navigation Streetview](/img/manual-english-icon-navigation-streetview.png) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map
 * ![Icon: Navigation Addlayer](/img/manual-english-icon-navigation-addlayer.png) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service
 * ![Icon: Navigation Measure](/img/manual-english-icon-navigation-measure.png) **`Measure`:** linear and areal measuring instrument
 * ![Icon: Navigation Annotations](/img/manual-english-icon-navigation-annotations.png) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:
   * point elements
   * free linear and polygonal elements
   * circle/rectangle elements
   * text labels

Here is an example of using the annotation tool

![Screenshot: Annotations Tool](/img/manual-english-annotations-tool.png)

Map-controls available on the bottom left corner of the map:
 * ![Icon: Navigation Zomme Lastnext](/img/manual-english-icon-navigation-zomme-lastnext.png) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)

Map-controls available on the top left corner of the map:
  * ![Icon: Navigation Nominatim](/img/manual-english-icon-navigation-nominatim.png) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level

### Map query

Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.

If a specific layer is selected in the TOC, the results are limited to that layer.

A right click on the mouse allows you to access a series of functions related (but not limited to) to the point where you click.

![Screenshot: Right Click](/img/manual-english-right-click.png)

#### Query type

![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.png) **Point query**

The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.

To query a single layer, it must be previously selected at the TOC level.

![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.png) **Area query**

Area query allows you to query project layers based on polygonal geometry:
 * draw: rectangles, circles or free-form polygons
 * deriving from a feature of a polygonal layer present in the project or added by the user

The result of these type of query can be based on the geometric operations intersection and containment.

The choice made via the drop-down menu allows you to move from one result to another dynamically.

![Screenshot: Query Intersect Within](/img/manual-english-query-intersect-within.png)

The Query area tool works also on the layers added using the AddLayer tool

**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).


### Viewing query results

The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)

Upon querying a geometry, the form structure will be replicated at the client level.

![Screenshot: G3wclient Attribute View](/img/manual-english-g3wclient-attribute-view.png)

Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.

For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).

#### Single result

In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list

 ![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.png)


The bar above the query results shows the following icons:
![Screenshot: G3wclient Attribute Icons](/img/manual-english-g3wclient-attribute-icons.png)

 * **Zoom to feature:** if the function is activated on the Properties of the QGIS project
 * **Show relations (1: N):** if present on the QGIS project
 * **Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature
 * **Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the features to the current selection
 * **Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features
 * **Editing:** to start editing directly on this feature
 * **Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 

#### Multiple results

In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.

![Screenshot: G3wclient Attribute List](/img/manual-english-g3wclient-attribute-list.png)

A series of icons, relating to the list of resulting features, will allow you to:
 ![Screenshot: G3wclient Attribute List Icons](/img/manual-english-g3wclient-attribute-list-icons.png)

 * **Zoom to features result extent:** if the function is activated on the Properties of the QGIS project
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result
 * **Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 * **Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the list of features result to the current selection
 

### Display 1:1 (join) and 1:N relation data

#### Join data

The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.

#### 1:N relation data

In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.

![Icon: Relations](/img/manual-english-icon-relations.png)

By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships. 

If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.

![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.png)


After accessing one of the existing relationships, the child records will be displayed in tabular format.

Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).


![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.png)


A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.

The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project

In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.

In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.

![Screenshot: G3wclient Relations View](/img/manual-english-g3wclient-relations-view.png)

### Parameterized URLs

**It is possible to create parameterized URLs for direct zooming to:**
geographical extension 
single feature by FID 
single/list features by value of a field 

Here the URL parameters available:
 * **map_extent (Zoom to map extent)**
   * Ex: `<url_project>?map_extent=Xmin, Ymin,Xmax,Ymax`
 * **zoom_to_fid (Zoom to a specific feature by FID)**
   * Ex: `<url_project>?zoom_to_fid=<layer_id>|<fid value>`
 * **ztf (Zoom to features defined on the basis of attribute values)**
   * Ex: `<url_project>?ztf=<layer_id or layer name>:<field name>=<field value>`

If **Views (Themes)** are set up in the QGIS project, it will also be possible to parameterize them in the webgis URL: 
   * Ex: `<url>?map_theme=<theme_name>`

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Navigation Addlayer](/img/manual-english-icon-navigation-addlayer.png) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service": "![Icona: aggiungi layer](/img/manual-english-icon-navigation-addlayer.png) **`Aggiungi layer`:** strumento per caricare temporaneamente nel WebGIS file GML, GeoJson, KML, GPX, SHP (compressi) e CSV con coordinate, oppure per aggiungere un servizio WMS personalizzato",
    "![Icon: Navigation Annotations](/img/manual-english-icon-navigation-annotations.png) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:": "![Icona: annotazioni](/img/manual-english-icon-navigation-annotations.png) **`Annotazioni`:** strumento per aggiungere annotazioni o disegni alla mappa. Per ciascuno è possibile definire dimensioni, colore, trasparenza, etichetta e altro. Gli elementi disegnati sulla mappa possono essere condivisi insieme alle altre impostazioni del servizio WebGIS e inclusi nella stampa. Lo strumento consente di creare i seguenti tipi di annotazioni:",
    "![Icon: Navigation Fitextent](/img/manual-english-icon-navigation-fitextent.png) **`Fit to extent`:** zoom to the initial extension": "![Icona: adatta all’estensione](/img/manual-english-icon-navigation-fitextent.png) **`Adatta all’estensione`:** visualizza l’estensione iniziale",
    "![Icon: Navigation Geolocation](/img/manual-english-icon-navigation-geolocation.png) **`Geolocation`:** geolocation tool (useful for consultation from tablet)": "![Icona: geolocalizzazione](/img/manual-english-icon-navigation-geolocation.png) **`Geolocalizzazione`:** strumento di geolocalizzazione (utile per la consultazione da tablet)",
    "![Icon: Navigation Measure](/img/manual-english-icon-navigation-measure.png) **`Measure`:** linear and areal measuring instrument": "![Icona: misura](/img/manual-english-icon-navigation-measure.png) **`Misura`:** strumento di misurazione lineare e areale",
    "![Icon: Navigation Nominatim](/img/manual-english-icon-navigation-nominatim.png) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level": "![Icona: geocodifica](/img/manual-english-icon-navigation-nominatim.png) **`Geocodifica`:** strumenti per cercare indirizzi e toponimi tramite OSM o Bing, in base ai provider attivati a livello di amministrazione",
    "![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.png) **`Query area`:** areal query": "![Icona: interrogazione per area](/img/manual-english-icon-navigation-query-area-icon.png) **`Interrogazione per area`:** interrogazione areale",
    "![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.png) **Area query**": "![Icona: interrogazione per area](/img/manual-english-icon-navigation-query-area-icon.png) **Interrogazione per area**",
    "![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.png) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))": "![Icona: interroga layer](/img/manual-english-icon-navigation-querylayer.png) **`Interroga layer`:** interrogazione puntuale (tutti i layer o solo quello selezionato nella TOC)",
    "![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.png) **Point query**": "![Icona: interroga layer](/img/manual-english-icon-navigation-querylayer.png) **Interrogazione puntuale**",
    "![Icon: Navigation Streetview](/img/manual-english-icon-navigation-streetview.png) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map": "![Icona: Streetview](/img/manual-english-icon-navigation-streetview.png) **`Streetview`:** Google StreetView sulla mappa. In base alle policy di Google, StreetView si apre in una nuova scheda del browser senza sincronizzarsi con la mappa.",
    "![Icon: Navigation Tools](/img/manual-english-icon-navigation-tools.png) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.": "![Icona: strumenti di navigazione](/img/manual-english-icon-navigation-tools.png) Per impostazione predefinita, la maggior parte delle icone è compressa; fai clic sull’icona **Strumenti** per espandere l’elenco degli strumenti disponibili.",
    "![Icon: Navigation Zomme Lastnext](/img/manual-english-icon-navigation-zomme-lastnext.png) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)": "![Icona: zoom precedente/successivo](/img/manual-english-icon-navigation-zomme-lastnext.png) **`Zoom precedente/successivo`:** strumenti Annulla/Ripristina per spostarsi tra le aree di visualizzazione precedenti e successive (icone nell’angolo inferiore sinistro)",
    "![Icon: Navigation Zoomin](/img/manual-english-icon-navigation-zoomin.png) **`Zoom in and out`:** zoom in and zoom out": "![Icona: ingrandisci e riduci](/img/manual-english-icon-navigation-zoomin.png) **`Ingrandisci e riduci`:** ingrandisce e riduce la mappa",
    "![Icon: Navigation Zoomtobox](/img/manual-english-icon-navigation-zoomtobox.png) **`Zoom to box`:** zoom tool based on drawing a rectangle": "![Icona: zoom su riquadro](/img/manual-english-icon-navigation-zoomtobox.png) **`Zoom su riquadro`:** strumento di zoom basato sul disegno di un rettangolo",
    "**Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)": "**Aggiungi elemento ai risultati:** aggiunge elementi all’elenco corrente facendo clic sulla mappa (utile per scegliere manualmente gli oggetti da selezionare o scaricare)",
    "**Add/Remove selection:** add/remove the features to the current selection": "**Aggiungi/Rimuovi dalla selezione:** aggiunge o rimuove gli elementi dalla selezione corrente",
    "**Add/Remove selection:** add/remove the list of features result to the current selection": "**Aggiungi/Rimuovi dalla selezione:** aggiunge o rimuove l’elenco degli elementi risultanti dalla selezione corrente",
    "**Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features": "**Copia URL della mappa centrato sulla geometria:** crea un URL parametrizzato che punta a questo elemento",
    "**display scale**": "**scala di visualizzazione**",
    "**Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session": "**Scarica tutti gli elementi risultanti (Shapefile, GPK, GPX, CSV, XLS):** se attivato nella sezione di amministrazione",
    "**Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session": "**Scarica il singolo risultato (Shapefile, GPK, GPX, CSV, XLS):** se attivato nella sezione di amministrazione",
    "**Editing:** to start editing directly on this feature": "**Modifica:** avvia la modifica direttamente su questo elemento",
    "**It is possible to create parameterized URLs for direct zooming to:**": "**È possibile creare URL parametrizzati per eseguire direttamente lo zoom su:**",
    "**map_extent (Zoom to map extent)**": "**map_extent (zoom all’estensione della mappa)**",
    "**mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)": "**coordinate del mouse**: le coordinate possono essere visualizzate nel sistema di proiezione del progetto e in WGS84 LatLong (ESPG: 4326)",
    "**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).": "**NB:** è possibile eseguire lo zoom sull’elemento associato a ciascun risultato solo se nel progetto QGIS è stata attivata l’opzione **`Add geometry to object response`** (**`Progetto → Proprietà, sezione QGIS Server`**).",
    "**Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result": "**Stampa Atlante:** stampa i report (atlanti), se configurati nel progetto QGIS, relativi a tutti gli elementi risultanti",
    "**Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature": "**Stampa Atlante:** stampa i report (atlanti), se configurati nel progetto QGIS, relativi all’elemento interrogato",
    "**project projection system**": "**sistema di proiezione del progetto**",
    "**Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)": "**Rimuovi elemento dai risultati:** rimuove l’elemento dall’elenco corrente (utile per scegliere manualmente gli oggetti da selezionare o scaricare)",
    "**share map icon**: this tool allows you to share the WebGis service while maintaining the customizations defined by the user (map extension, layers on/off, styles associated with the layers...) including, if present, the annotations created.": "**icona Condividi mappa**: questo strumento consente di condividere il servizio WebGIS mantenendo le personalizzazioni definite dall’utente (estensione della mappa, layer attivati/disattivati, stili associati ai layer...) e, se presenti, le annotazioni create.",
    "**share map:** t icon to share the map bringing back various customizations": "**condividi mappa:** icona per condividere la mappa mantenendo le personalizzazioni",
    "**Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.": "**Mostra grafici delle relazioni:** visualizza i grafici relativi ai dati correlati 1:N. Disponibile solo se al layer interrogato sono associate relazioni 1:N e i grafici sono stati attivati sulle tabelle referenziate.",
    "**Show relations (1: N):** if present on the QGIS project": "**Mostra relazioni (1:N):** se presenti nel progetto QGIS",
    "**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**": "**Di seguito sono mostrate le icone e le descrizioni delle funzioni dei diversi **`MapControls`** attivati a livello di gruppo tematico.**",
    "**Zoom to feature:** if the function is activated on the Properties of the QGIS project": "**Zoom sull’elemento:** se la funzione è attivata nelle proprietà del progetto QGIS",
    "**Zoom to features result extent:** if the function is activated on the Properties of the QGIS project": "**Zoom sull’estensione dei risultati:** se la funzione è attivata nelle proprietà del progetto QGIS",
    "**zoom_to_fid (Zoom to a specific feature by FID)**": "**zoom_to_fid (zoom su un elemento specifico tramite FID)**",
    "**ztf (Zoom to features defined on the basis of attribute values)**": "**ztf (zoom sugli elementi definiti in base ai valori degli attributi)**",
    "1:N relation data": "Dati di relazione 1:N",
    "A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.": "Un filtro generico applicato al contenuto di tutti i campi consente di filtrare l’elenco dei record figli.",
    "A right click on the mouse allows you to access a series of functions related (but not limited to) to the point where you click.": "Facendo clic con il tasto destro del mouse si accede a una serie di funzioni relative, ma non solo, al punto selezionato.",
    "A series of icons, relating to the list of resulting features, will allow you to:": "Una serie di icone relative all’elenco degli elementi risultanti consente di:",
    "Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).": "Sopra la tabella, una sezione dedicata mostra le informazioni principali dell’elemento padre (percorso di navigazione).",
    "After accessing one of the existing relationships, the child records will be displayed in tabular format.": "Dopo aver aperto una delle relazioni esistenti, i record figli vengono visualizzati in formato tabellare.",
    "Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.": "I collegamenti alle foto mostrano un’anteprima cliccabile; i collegamenti ad altri contenuti multimediali mostrano il pulsante Open, che consente di consultare il contenuto.",
    "Area query allows you to query project layers based on polygonal geometry:": "L’interrogazione per area consente di interrogare i layer del progetto in base a una geometria poligonale:",
    "At the base of the map area there is an information bar showing:": "Nella parte inferiore dell’area della mappa è presente una barra informativa che mostra:",
    "Back to Cartographic client": "Torna al client cartografico",
    "By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships.": "Facendo clic sull’icona si accede all’**elenco delle relazioni 1:N** e, per ciascuna, all’elenco dei record figli associati.",
    "circle, specifying the radius also manually": "cerchio, specificando anche manualmente il raggio",
    "circle/rectangle elements": "elementi circolari o rettangolari",
    "deriving from a feature of a polygonal layer present in the project or added by the user": "derivata da un elemento di un layer poligonale presente nel progetto o aggiunto dall’utente",
    "Display 1:1 (join) and 1:N relation data": "Visualizzazione dei dati di relazione 1:1 (join) e 1:N",
    "draw: rectangles, circles or free-form polygons": "disegnata: rettangoli, cerchi o poligoni a mano libera",
    "For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).": "Per ulteriori informazioni, consulta il [**paragrafo dedicato**](projectsettings-layers.md#viewing-multimedia-content).",
    "free linear and polygonal elements": "elementi lineari e poligonali liberi",
    "geographical extension": "un’estensione geografica",
    "geospatial operator": "l’operatore geospaziale",
    "Here is an example of using the annotation tool": "Ecco un esempio di utilizzo dello strumento di annotazione.",
    "Here the URL parameters available:": "Di seguito sono elencati i parametri URL disponibili:",
    "Icon: Relations": "Icona: relazioni",
    "If **Views (Themes)** are set up in the QGIS project, it will also be possible to parameterize them in the webgis URL:": "Se nel progetto QGIS sono configurate **Viste (Temi)**, è possibile parametrizzarle anche nell’URL del WebGIS:",
    "If a specific layer is selected in the TOC, the results are limited to that layer.": "Se nella TOC è selezionato un layer specifico, i risultati sono limitati a quel layer.",
    "If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.": "Se le relazioni sono inserite in un modulo personalizzato per la visualizzazione degli attributi (modulo attributi di QGIS), il relativo collegamento apparirà direttamente nel modulo degli attributi del padre.",
    "In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.": "Se sulla tabella correlata sono attivi dei **grafici**, questi vengono mostrati tramite **`Show charts`** in alto a destra.",
    "In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.": "Se l’interrogazione restituisce più risultati, questi vengono elencati e le informazioni dettagliate possono essere espanse.",
    "In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list": "Se l’interrogazione restituisce un solo risultato, gli attributi vengono visualizzati secondo il modulo definito nel progetto QGIS oppure come elenco a colonne.",
    "In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.": "In presenza di **collegamenti a contenuti multimediali**, vengono mostrate le anteprime delle immagini e/o il pulsante **`Open`** per consultare i diversi tipi di contenuto.",
    "In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.": "Se nel progetto QGIS a un layer sono associate **una o più relazioni di tipo 1:N**, nel modulo degli attributi apparirà l’icona **Mostra relazioni**.",
    "intersects": "interseca",
    "Join data": "Dati join",
    "kind of geometry to draw": "il tipo di geometria da disegnare",
    "layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly": "i layer da interrogare, con la possibilità di interrogare anche un layer vettoriale temporaneo caricato al momento",
    "Map area": "Area della mappa",
    "Map controls": "Controlli della mappa",
    "Map navigation and queries": "Navigazione e interrogazione della mappa",
    "Map query": "Interrogazione della mappa",
    "Map-controls available on the bottom left corner of the map:": "Controlli disponibili nell’angolo inferiore sinistro della mappa:",
    "Map-controls available on the left side of the map:": "Controlli disponibili sul lato sinistro della mappa:",
    "Map-controls available on the top left corner of the map:": "Controlli disponibili nell’angolo superiore sinistro della mappa:",
    "Multiple results": "Risultati multipli",
    "Navigation and interaction with the map": "Navigazione e interazione con la mappa",
    "Parameterized URLs": "URL parametrizzati",
    "point elements": "elementi puntuali",
    "polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer": "poligono di un layer sulla mappa: elementi di uno o più layer che intersecano o sono contenuti in un elemento poligonale di un layer guida",
    "polygon": "poligono",
    "Query type": "Tipo di interrogazione",
    "rectangle": "rettangolo",
    "Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.": "Facendo clic con il tasto destro sulla mappa, questa viene interrogata con il metodo di campionamento centrale e vengono mostrati i risultati di tutti i layer sotto il punto selezionato.",
    "Screenshot: Annotations Tool": "Schermata: strumento di annotazione",
    "Screenshot: G3wclient Attribute Icons": "Schermata: icone degli attributi G3wclient",
    "Screenshot: G3wclient Attribute List": "Schermata: elenco attributi G3wclient",
    "Screenshot: G3wclient Attribute List Icons": "Schermata: icone dell’elenco attributi G3wclient",
    "Screenshot: G3wclient Attribute View": "Schermata: visualizzazione attributi G3wclient",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: modulo G3wclient con grafici 1:N",
    "Screenshot: G3wclient Footer2": "Schermata: barra inferiore di G3wclient",
    "Screenshot: G3wclient Relations Records View": "Schermata: visualizzazione dei record correlati in G3wclient",
    "Screenshot: G3wclient Relations View": "Schermata: visualizzazione delle relazioni in G3wclient",
    "Screenshot: Query Intersect Within": "Schermata: interrogazione intersezione/contenimento",
    "Screenshot: Right Click": "Schermata: menu contestuale",
    "single feature by FID": "un singolo elemento tramite FID",
    "Single result": "Risultato singolo",
    "single/list features by value of a field": "uno o più elementi in base al valore di un campo",
    "text labels": "etichette testuali",
    "The bar above the query results shows the following icons:": "La barra sopra i risultati dell’interrogazione mostra le seguenti icone:",
    "The choice made via the drop-down menu allows you to move from one result to another dynamically.": "La selezione effettuata dal menu a discesa consente di passare dinamicamente da un risultato all’altro.",
    "The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)": "Per impostazione predefinita, gli attributi delle geometrie interrogate sono visualizzati in un’unica colonna, ma nel progetto QGIS (**`Proprietà vettore → Modulo attributi`**) è possibile creare moduli attributi personalizzati (schede, gruppi...).",
    "The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.": "I campi generati da un join (creato in QGIS) con un terzo layer saranno visibili automaticamente dopo i campi del layer padre oppure, se è definito un modulo personalizzato, al suo interno secondo le specifiche impostate.",
    "The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project": "L’icona a sinistra di ogni record consente di passare dalla visualizzazione tabellare classica a quella basata sull’eventuale modulo definito nel progetto QGIS.",
    "The panel that appears at the top left allows you to choose:": "Il pannello che appare in alto a sinistra consente di scegliere:",
    "The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.": "Per impostazione predefinita, l’interrogazione puntuale usa il metodo di campionamento centrale e fornisce informazioni su tutti i layer (impostati come interrogabili nel progetto QGIS) sotto il punto selezionato con il mouse o racchiuso in un riquadro.",
    "The Query area tool works also on the layers added using the AddLayer tool": "Lo strumento Interrogazione per area funziona anche sui layer aggiunti con lo strumento AddLayer.",
    "The result of these type of query can be based on the geometric operations intersection and containment.": "I risultati di questi tipi di interrogazione possono basarsi sulle operazioni geometriche di intersezione e contenimento.",
    "To query a single layer, it must be previously selected at the TOC level.": "Per interrogare un singolo layer, è necessario selezionarlo prima nella TOC.",
    "Upon querying a geometry, the form structure will be replicated at the client level.": "Quando si interroga una geometria, la struttura del modulo viene riprodotta nel client.",
    "Viewing query results": "Visualizzazione dei risultati delle interrogazioni",
    "within": "contenuto in"
  }
}
</script>
