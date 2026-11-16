# Map queries and results

[Back to Cartographic client](g3wsuite_client.md)

## Map query

Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.

If a specific layer is selected in the TOC, the results are limited to that layer.

Right-click the map to access functions for the selected point and other actions.

![Screenshot: Right Click](/img/manual-english-right-click.avif)

### Query type

![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **Point query**

The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.

To query a single layer, it must be previously selected at the TOC level.

![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **Area query**

Use an area query to search project layers with a polygon:
 * draw: rectangles, circles or free-form polygons
 * deriving from a feature of a polygonal layer present in the project or added by the user

The result of these type of query can be based on the geometric operations intersection and containment.

The choice made via the drop-down menu allows you to move from one result to another dynamically.

![Screenshot: Query Intersect Within](/img/manual-english-query-intersect-within.avif)

The Query area tool works also on the layers added using the AddLayer tool

**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).


## Viewing query results

The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)

Upon querying a geometry, the form structure will be replicated at the client level.

![Screenshot: G3wclient Attribute View](/img/manual-english-g3wclient-attribute-view.avif)

Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.

For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).

### Single result

In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list

 ![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.avif)


The bar above the query results shows the following icons:
![Screenshot: G3wclient Attribute Icons](/img/manual-english-g3wclient-attribute-icons.avif)

 * **Zoom to feature:** if the function is activated on the Properties of the QGIS project
 * **Show relations (1: N):** if present on the QGIS project
 * **Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature
 * **Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the features to the current selection
 * **Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features
 * **Editing:** to start editing directly on this feature
 * **Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 

### Multiple results

In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.

![Screenshot: G3wclient Attribute List](/img/manual-english-g3wclient-attribute-list.avif)

A series of icons, relating to the list of resulting features, will allow you to:
 ![Screenshot: G3wclient Attribute List Icons](/img/manual-english-g3wclient-attribute-list-icons.avif)

 * **Zoom to features result extent:** if the function is activated on the Properties of the QGIS project
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result
 * **Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 * **Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the list of features result to the current selection
 

## Display 1:1 (join) and 1:N relation data

### Join data

The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.

### 1:N relation data

In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.

![Icon: Relations](/img/manual-english-icon-relations.avif)

By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships. 

If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.

![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.avif)


After accessing one of the existing relationships, the child records will be displayed in tabular format.

Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).


![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.avif)


A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.

The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project

In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.

In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.

![Screenshot: G3wclient Relations View](/img/manual-english-g3wclient-relations-view.avif)

## Parameterized URLs

Add parameters to a project URL to open a specific extent, feature or map theme:

 * `map_extent`: set the initial extent in the project CRS: `<project_url>?map_extent=Xmin,Ymin,Xmax,Ymax`.
 * `zoom_to_fid`: zoom to a feature by layer ID and FID: `<project_url>?zoom_to_fid=<layer_id>|<fid>`.
 * `ztf`: zoom to features by attribute value, using the layer ID or name: `<project_url>?ztf=<layer_id_or_name>:<field>=<value>`.
 * `map_theme`: apply a theme defined in the QGIS project: `<project_url>?map_theme=<theme_name>`.

For `ztf`, combine conditions with `AND` or `OR`, for example: `<project_url>?ztf=roads:type=primaryANDstatus=open`.

Encode special characters in parameter values, and use `&` to separate multiple parameters.

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **Area query**": "![Icona: interrogazione per area](/img/manual-english-icon-navigation-query-area-icon.avif) **Interrogazione per area**",
    "![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **Point query**": "![Icona: interroga layer](/img/manual-english-icon-navigation-querylayer.avif) **Interrogazione puntuale**",
    "**Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)": "**Aggiungi elemento ai risultati:** aggiunge elementi all’elenco corrente facendo clic sulla mappa (utile per scegliere manualmente gli oggetti da selezionare o scaricare)",
    "**Add/Remove selection:** add/remove the features to the current selection": "**Aggiungi/Rimuovi dalla selezione:** aggiunge o rimuove gli elementi dalla selezione corrente",
    "**Add/Remove selection:** add/remove the list of features result to the current selection": "**Aggiungi/Rimuovi dalla selezione:** aggiunge o rimuove l’elenco degli elementi risultanti dalla selezione corrente",
    "**Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features": "**Copia URL della mappa centrato sulla geometria:** crea un URL parametrizzato che punta a questo elemento",
    "**Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session": "**Scarica tutti gli elementi risultanti (Shapefile, GPK, GPX, CSV, XLS):** se attivato nella sezione di amministrazione",
    "**Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session": "**Scarica il singolo risultato (Shapefile, GPK, GPX, CSV, XLS):** se attivato nella sezione di amministrazione",
    "**Editing:** to start editing directly on this feature": "**Modifica:** avvia la modifica direttamente su questo elemento",
    "**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).": "**NB:** è possibile eseguire lo zoom sull’elemento associato a ciascun risultato solo se nel progetto QGIS è stata attivata l’opzione **`Add geometry to object response`** (**`Progetto → Proprietà, sezione QGIS Server`**).",
    "**Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result": "**Stampa Atlante:** stampa i report (atlanti), se configurati nel progetto QGIS, relativi a tutti gli elementi risultanti",
    "**Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature": "**Stampa Atlante:** stampa i report (atlanti), se configurati nel progetto QGIS, relativi all’elemento interrogato",
    "**Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)": "**Rimuovi elemento dai risultati:** rimuove l’elemento dall’elenco corrente (utile per scegliere manualmente gli oggetti da selezionare o scaricare)",
    "**Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.": "**Mostra grafici delle relazioni:** visualizza i grafici relativi ai dati correlati 1:N. Disponibile solo se al layer interrogato sono associate relazioni 1:N e i grafici sono stati attivati sulle tabelle referenziate.",
    "**Show relations (1: N):** if present on the QGIS project": "**Mostra relazioni (1:N):** se presenti nel progetto QGIS",
    "**Zoom to feature:** if the function is activated on the Properties of the QGIS project": "**Zoom sull’elemento:** se la funzione è attivata nelle proprietà del progetto QGIS",
    "**Zoom to features result extent:** if the function is activated on the Properties of the QGIS project": "**Zoom sull’estensione dei risultati:** se la funzione è attivata nelle proprietà del progetto QGIS",
    "1:N relation data": "Dati di relazione 1:N",
    "A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.": "Un filtro generico applicato al contenuto di tutti i campi consente di filtrare l’elenco dei record figli.",
    "A series of icons, relating to the list of resulting features, will allow you to:": "Una serie di icone relative all’elenco degli elementi risultanti consente di:",
    "Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).": "Sopra la tabella, una sezione dedicata mostra le informazioni principali dell’elemento padre (percorso di navigazione).",
    "Add parameters to a project URL to open a specific extent, feature or map theme:": "Aggiungi parametri all'URL di un progetto per aprire un'estensione, un elemento o un tema cartografico specifico:",
    "After accessing one of the existing relationships, the child records will be displayed in tabular format.": "Dopo aver aperto una delle relazioni esistenti, i record figli vengono visualizzati in formato tabellare.",
    "Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.": "I collegamenti alle foto mostrano un’anteprima cliccabile; i collegamenti ad altri contenuti multimediali mostrano il pulsante Open, che consente di consultare il contenuto.",
    "Back to Cartographic client": "Torna al client cartografico",
    "By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships.": "Facendo clic sull’icona si accede all’**elenco delle relazioni 1:N** e, per ciascuna, all’elenco dei record figli associati.",
    "Display 1:1 (join) and 1:N relation data": "Visualizzazione dei dati di relazione 1:1 (join) e 1:N",
    "Encode special characters in parameter values, and use `&` to separate multiple parameters.": "Codifica i caratteri speciali nei valori dei parametri e usa `&` per separare più parametri.",
    "For `ztf`, combine conditions with `AND` or `OR`, for example: `<project_url>?ztf=roads:type=primaryANDstatus=open`.": "Per `ztf`, combina le condizioni con `AND` o `OR`, ad esempio: `<project_url>?ztf=roads:type=primaryANDstatus=open`.",
    "For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).": "Per ulteriori informazioni, consulta il [**paragrafo dedicato**](projectsettings-layers.md#viewing-multimedia-content).",
    "Icon: Relations": "Icona: relazioni",
    "If a specific layer is selected in the TOC, the results are limited to that layer.": "Se nella TOC è selezionato un layer specifico, i risultati sono limitati a quel layer.",
    "If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.": "Se le relazioni sono inserite in un modulo personalizzato per la visualizzazione degli attributi (modulo attributi di QGIS), il relativo collegamento apparirà direttamente nel modulo degli attributi del padre.",
    "In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.": "Se sulla tabella correlata sono attivi dei **grafici**, questi vengono mostrati tramite **`Show charts`** in alto a destra.",
    "In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.": "Se l’interrogazione restituisce più risultati, questi vengono elencati e le informazioni dettagliate possono essere espanse.",
    "In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list": "Se l’interrogazione restituisce un solo risultato, gli attributi vengono visualizzati secondo il modulo definito nel progetto QGIS oppure come elenco a colonne.",
    "In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.": "In presenza di **collegamenti a contenuti multimediali**, vengono mostrate le anteprime delle immagini e/o il pulsante **`Open`** per consultare i diversi tipi di contenuto.",
    "In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.": "Se nel progetto QGIS a un layer sono associate **una o più relazioni di tipo 1:N**, nel modulo degli attributi apparirà l’icona **Mostra relazioni**.",
    "Join data": "Dati join",
    "Map queries and results": "Interrogazioni e risultati della mappa",
    "Map query": "Interrogazione della mappa",
    "Multiple results": "Risultati multipli",
    "Parameterized URLs": "URL parametrizzati",
    "Query type": "Tipo di interrogazione",
    "Right-click the map to access functions for the selected point and other actions.": "Fai clic destro sulla mappa per accedere alle funzioni relative al punto selezionato e ad altre azioni.",
    "Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.": "Facendo clic con il tasto destro sulla mappa, questa viene interrogata con il metodo di campionamento centrale e vengono mostrati i risultati di tutti i layer sotto il punto selezionato.",
    "Screenshot: G3wclient Attribute Icons": "Schermata: icone degli attributi G3wclient",
    "Screenshot: G3wclient Attribute List": "Schermata: elenco attributi G3wclient",
    "Screenshot: G3wclient Attribute List Icons": "Schermata: icone dell’elenco attributi G3wclient",
    "Screenshot: G3wclient Attribute View": "Schermata: visualizzazione attributi G3wclient",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: modulo G3wclient con grafici 1:N",
    "Screenshot: G3wclient Relations Records View": "Schermata: visualizzazione dei record correlati in G3wclient",
    "Screenshot: G3wclient Relations View": "Schermata: visualizzazione delle relazioni in G3wclient",
    "Screenshot: Query Intersect Within": "Schermata: interrogazione intersezione/contenimento",
    "Screenshot: Right Click": "Schermata: menu contestuale",
    "Single result": "Risultato singolo",
    "The Query area tool works also on the layers added using the AddLayer tool": "Lo strumento Interrogazione per area funziona anche sui layer aggiunti con lo strumento AddLayer.",
    "The bar above the query results shows the following icons:": "La barra sopra i risultati dell’interrogazione mostra le seguenti icone:",
    "The choice made via the drop-down menu allows you to move from one result to another dynamically.": "La selezione effettuata dal menu a discesa consente di passare dinamicamente da un risultato all’altro.",
    "The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)": "Per impostazione predefinita, gli attributi delle geometrie interrogate sono visualizzati in un’unica colonna, ma nel progetto QGIS (**`Proprietà vettore → Modulo attributi`**) è possibile creare moduli attributi personalizzati (schede, gruppi...).",
    "The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.": "I campi generati da un join (creato in QGIS) con un terzo layer saranno visibili automaticamente dopo i campi del layer padre oppure, se è definito un modulo personalizzato, al suo interno secondo le specifiche impostate.",
    "The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project": "L’icona a sinistra di ogni record consente di passare dalla visualizzazione tabellare classica a quella basata sull’eventuale modulo definito nel progetto QGIS.",
    "The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.": "Per impostazione predefinita, l’interrogazione puntuale usa il metodo di campionamento centrale e fornisce informazioni su tutti i layer (impostati come interrogabili nel progetto QGIS) sotto il punto selezionato con il mouse o racchiuso in un riquadro.",
    "The result of these type of query can be based on the geometric operations intersection and containment.": "I risultati di questi tipi di interrogazione possono basarsi sulle operazioni geometriche di intersezione e contenimento.",
    "To query a single layer, it must be previously selected at the TOC level.": "Per interrogare un singolo layer, è necessario selezionarlo prima nella TOC.",
    "Upon querying a geometry, the form structure will be replicated at the client level.": "Quando si interroga una geometria, la struttura del modulo viene riprodotta nel client.",
    "Use an area query to search project layers with a polygon:": "Usa un'interrogazione per area per cercare nei layer del progetto tramite un poligono:",
    "Viewing query results": "Visualizzazione dei risultati delle interrogazioni",
    "`map_extent`: set the initial extent in the project CRS: `<project_url>?map_extent=Xmin,Ymin,Xmax,Ymax`.": "`map_extent`: imposta l'estensione iniziale nel CRS del progetto: `<project_url>?map_extent=Xmin,Ymin,Xmax,Ymax`.",
    "`map_theme`: apply a theme defined in the QGIS project: `<project_url>?map_theme=<theme_name>`.": "`map_theme`: applica un tema definito nel progetto QGIS: `<project_url>?map_theme=<theme_name>`.",
    "`zoom_to_fid`: zoom to a feature by layer ID and FID: `<project_url>?zoom_to_fid=<layer_id>|<fid>`.": "`zoom_to_fid`: esegue lo zoom su un elemento tramite ID del layer e FID: `<project_url>?zoom_to_fid=<layer_id>|<fid>`.",
    "`ztf`: zoom to features by attribute value, using the layer ID or name: `<project_url>?ztf=<layer_id_or_name>:<field>=<value>`.": "`ztf`: esegue lo zoom sugli elementi in base al valore di un attributo, usando l'ID o il nome del layer: `<project_url>?ztf=<layer_id_or_name>:<field>=<value>`.",
    "deriving from a feature of a polygonal layer present in the project or added by the user": "derivata da un elemento di un layer poligonale presente nel progetto o aggiunto dall’utente",
    "draw: rectangles, circles or free-form polygons": "disegnata: rettangoli, cerchi o poligoni a mano libera",
    "polygon": "poligono",
    "rectangle": "rettangolo",
    "within": "contenuto in"
  }
}
</script>
