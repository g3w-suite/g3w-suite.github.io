# Layers and attribute table

[Back to Cartographic client](g3wsuite_client.md)

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
    "![Screenshot: G3wclient Selection Table Clear](/img/manual-english-g3wclient-selection-table-clear.png) Clear selection": "![Schermata: cancella selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-clear.png) Cancella selezione",
    "![Screenshot: G3wclient Selection Table Filter](/img/manual-english-g3wclient-selection-table-filter.png) Add/Remove filter": "![Schermata: filtro selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-filter.png) Aggiungi/Rimuovi filtro",
    "![Screenshot: G3wclient Selection Table Invert](/img/manual-english-g3wclient-selection-table-invert.png) Invert selection": "![Schermata: inverti selezione tabella G3wclient](/img/manual-english-g3wclient-selection-table-invert.png) Inverti selezione",
    "**Edit layer:** menu available following activation and based on user permissions": "**Modifica layer:** menu disponibile dopo l’attivazione e in base ai permessi dell’utente",
    "**Export:** download of the layer in different formats, based on what is defined in the Administration session": "**Esporta:** scarica il layer in diversi formati, in base alle impostazioni di amministrazione",
    "**Filters based on the contents of the individual fields** are available at the top of each column.": "Nella parte superiore di ogni colonna sono disponibili **filtri basati sul contenuto dei singoli campi**.",
    "**Filters:** management, based on the logged in user, of the filters associated with the layer": "**Filtri:** gestione dei filtri associati al layer in base all’utente autenticato",
    "**Layer settings:** link to the layer administration section (available only if logged in as an administrator user)": "**Impostazioni layer:** collegamento alla sezione di amministrazione del layer (disponibile solo per gli amministratori autenticati)",
    "**Legend:** to view the legend tab": "**Legenda:** visualizza la scheda della legenda",
    "**Metadata:** descriptive information inherited from what has been defined, at QGIS project level, in the 'Abstract' form of the 'QGIS Server' session of the 'Layer Properties'": "**Metadati:** informazioni descrittive ereditate da quanto definito a livello di progetto QGIS nel campo 'Abstract' della sezione 'QGIS Server' delle 'Proprietà layer'",
    "**Name and geometry type** of the layer": "**Nome e tipo di geometria** del layer",
    "**On the client you can select (highlight) and filter a subset of vector layer geometries.**": "**Nel client è possibile selezionare (evidenziare) e filtrare un sottoinsieme delle geometrie di un layer vettoriale.**",
    "**Opacity:** management of the level of transparency/opacity": "**Opacità:** gestione del livello di trasparenza/opacità",
    "**Open attribute table:** to consult the associated attribute table": "**Apri tabella attributi:** apre la tabella attributi associata",
    "**Styles:** to choose the style to be applied to the layer, in the case of multi-style layers": "**Stili:** consente di scegliere lo stile da applicare al layer, se sono disponibili più stili",
    "**This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.**": "**Questa sezione mostra i layer configurati nei progetti QGIS, mantenendo la stessa organizzazione in gruppi e sottogruppi.**",
    "**Zoom to layer:** to zoom in on the extension of the layer": "**Zoom sul layer:** esegue lo zoom sull’estensione del layer",
    "A **generic filter**, positioned at the top right, is applied generically to the contents of all the fields, and it will allow you to filter the list of displayed records.": "Un **filtro generico**, in alto a destra, viene applicato al contenuto di tutti i campi e consente di filtrare l’elenco dei record visualizzati.",
    "Activation of the filter is reflected:": "L’attivazione del filtro si riflette su:",
    "At the same time, additional icons appear:": "Contemporaneamente vengono mostrate altre icone:",
    "Attribute table": "Tabella attributi",
    "Back to Cartographic client": "Torna al client cartografico",
    "Clear selection": "Cancella selezione",
    "Double clicking on the layer or Layer Group zooms to the extent of the layer or Group content.": "Facendo doppio clic sul layer o sul gruppo di layer, viene visualizzata l’estensione del layer o del contenuto del gruppo.",
    "Enable/Disable  filter": "Attiva/disattiva filtro",
    "Filter users based": "Filtri basati sull’utente",
    "Following activation of the filter, a logged in user (not AnonymosUser) will be able to save this filter to be recalled in subsequent work sessions.": "Dopo aver attivato il filtro, un utente autenticato (diverso da AnonymosUser) può salvarlo per richiamarlo nelle sessioni di lavoro successive.",
    "Icon: G3wclient Selection Toc": "Icona: selezione TOC G3wclient",
    "If the **`Show features count`** function is activated in the project, the layer will show the number of total features and based on the subdivision linked to the symbology.": "Se nel progetto è attivata la funzione **`Show features count`**, il layer mostra il numero totale di elementi e la loro suddivisione in base alla simbologia.",
    "In case of multi-style associated with the layer, the number of geometries reported will vary following the passage from one style to another.": "Se al layer sono associati più stili, il numero di geometrie mostrato varia passando da uno stile all’altro.",
    "In the case of links to **multimedia content**, the previews of the images and/or the **Open** button will be displayed for consultation of different types of content.": "In presenza di collegamenti a **contenuti multimediali**, vengono mostrate le anteprime delle immagini e/o il pulsante **Open** per consultare i diversi tipi di contenuto.",
    "In the list of layers, right click on the name of the single layer shows the following items:": "Nell’elenco dei layer, facendo clic con il tasto destro sul nome di un layer vengono mostrate le seguenti voci:",
    "It is possible to **select the features of the individual layers and apply filters** that will affect:": "È possibile **selezionare gli elementi dei singoli layer e applicare filtri** che influiscono su:",
    "It is possible to activate a filter on a layer starting from:": "È possibile attivare un filtro su un layer partendo da:",
    "It is possible to hide, automatically, layers from the TOC when they have no records.": "È possibile nascondere automaticamente dalla TOC i layer che non contengono record.",
    "Layers and attribute table": "Layer e tabella degli attributi",
    "Legend": "Legenda",
    "Metadata": "Metadati",
    "Saving the filter occurs via the dedicated icon present at layer level in the legend and in the results form.": "Il filtro si salva tramite l’apposita icona disponibile accanto al layer nella legenda e nel modulo dei risultati.",
    "Screenshot: Filter Load": "Schermata: caricamento del filtro",
    "Screenshot: Filter Loaded": "Schermata: filtro caricato",
    "Screenshot: Filter Save": "Schermata: salvataggio del filtro",
    "Screenshot: G3wclient Features Count": "Schermata: conteggio degli elementi in G3wclient",
    "Screenshot: G3wclient Layer Function": "Schermata: funzioni del layer G3wclient",
    "Screenshot: G3wclient Table Select": "Schermata: selezione nella tabella G3wclient",
    "Screenshot: G3wclient Table View": "Schermata: visualizzazione tabellare G3wclient",
    "TOC session": "Pannello TOC",
    "The **Update results when map moves** icon ![Screenshot: G3wclient Mapfilter Table](/img/manual-english-g3wclient-mapfilter-table.png), located in the bottom left corner, allows you to filter the records of the table according to the features visible in the map.": "L’icona **Aggiorna i risultati quando la mappa si sposta** ![Schermata: filtro mappa della tabella G3wclient](/img/manual-english-g3wclient-mapfilter-table.png), nell’angolo inferiore sinistro, consente di filtrare i record della tabella in base agli elementi visibili sulla mappa.",
    "The attribute table (resizable) is equipped with **paging function, highlight function and zooming** to the associated features.": "La tabella attributi (ridimensionabile) dispone di **paginazione, evidenziazione e zoom** sugli elementi associati.",
    "The icons to the right of the layer on the TOC allow you to:": "Le icone a destra del layer nella TOC consentono di:",
    "The icons, palced in the left buttom corner of the attribute, table allow you to:": "Le icone nell’angolo inferiore sinistro della tabella attributi consentono di:",
    "The midle part of the left bar contains the following items:": "La parte centrale della barra a sinistra contiene i seguenti elementi:",
    "The presence of an active filter on the layer is highlighted by the red icon next to the layer name.": "La presenza di un filtro attivo sul layer è indicata dall’icona rossa accanto al nome del layer.",
    "The saved filters can be recovered via the dedicated menu that can be viewed by right-clicking on the name of the layer": "I filtri salvati possono essere recuperati dal menu dedicato, visualizzato facendo clic con il tasto destro sul nome del layer.",
    "The selection of features can be made:": "È possibile selezionare gli elementi:",
    "To be filtered, the geometries object of the filter must first be selected.": "Per applicare il filtro, è necessario prima selezionare le geometrie che ne faranno parte.",
    "To deactivate an active filter, simply click on the icon itself.": "Per disattivare un filtro basta fare clic sull’icona stessa.",
    "To the left of each record in the table there are two/three tools:": "A sinistra di ogni record della tabella sono disponibili due o tre strumenti:",
    "Useful when using filters on layers or geographic views.": "È utile quando si usano filtri sui layer o viste geografiche.",
    "We remind you that activating a filter affects:": "Ricordiamo che l’attivazione di un filtro influisce su:",
    "When one or more features are selected, they appear highlighted in red on the map.": "Quando uno o più elementi sono selezionati, vengono evidenziati in rosso sulla mappa.",
    "at the attribute table level (through the checkboxes on the left of each records)": "dalla tabella attributi (tramite le caselle di controllo a sinistra di ogni record)",
    "at the level of the relevant plots": "accanto ai grafici pertinenti",
    "attribute table management": "gestione della tabella attributi",
    "checkbox to select the records/feature": "casella di controllo per selezionare i record o gli elementi",
    "editable geometries": "geometrie modificabili",
    "features underlying the graphs": "elementi alla base dei grafici",
    "geometries visible on the map": "geometrie visibili sulla mappa",
    "in the case of a layer editable by the user, an editing icon to allow direct modification of the feature": "se il layer è modificabile dall’utente, icona di modifica diretta dell’elemento",
    "on print contents": "contenuto della stampa",
    "on the attribute table content": "contenuto della tabella attributi",
    "on the contents of the plots": "contenuto dei grafici",
    "on the data displayed by plots": "dati mostrati nei grafici",
    "on the editable geometries": "geometrie modificabili",
    "on the layer attribute table, in the bottom left corner": "nella tabella attributi del layer, nell’angolo inferiore sinistro",
    "on the map content": "contenuto della mappa",
    "on the print contents": "contenuto della stampa",
    "on the results of a query (add / remove from current selection)": "dai risultati di un’interrogazione (aggiungendo o rimuovendo elementi dalla selezione corrente)",
    "print contenent": "contenuto della stampa",
    "query results": "risultati di un’interrogazione",
    "records visible on attribute table": "record visibili nella tabella attributi",
    "search results": "risultati di una ricerca",
    "the ‘Form view‘ icon to open the feature attributes form": "icona ‘Vista modulo‘ per aprire il modulo degli attributi dell’elemento",
    "the ‘Show relations’ icon to open the list of 1:N relations (if present) of thath parent record": "icona ‘Mostra relazioni’ per aprire l’elenco delle relazioni 1:N (se presenti) di quel record padre",
    "to the right of the layer on the TOC": "a destra del layer nella TOC"
  }
}
</script>
