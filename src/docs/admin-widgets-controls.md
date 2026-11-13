# Widget constraints and search tools

[Back to Administration panel](g3wsuite_administration.md)

## Widgets management

### ![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) Display and editing constraints

Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.

See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).


### ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) Hide columns by User/Groups
**Thanks to this function it is possible to hide specific fields of a layer for consultation. This constraint can be differentiated for individual users or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png).

Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.

![Screenshot: G3W-SUITE Administration Hide Columns New](/img/manual-english-g3wsuite-administration-hide-columns-new.png)

Clicking on the item will open a modal window which will allow you to define:
 * list of fields to hide
 * list of users for whom these fields should be hidden 
 * list of users groups for whom these fields should be hidden

Once all the constraints have been setted, click on the OK to confirm the rules.



### ![Icon: Widget](/img/manual-english-icon-widget.png) Widget setting - Search tools

**Using this icon it is possible to associate a series of widgets to the layer. The basic widget allows you to define search tools that will be available in the WebGis.**

#### Basic settings

In G3W-SUITE it is possible to create search widgets.

By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.

**NB: to create searches based on fields derived from simple joins (1:1/N:1) or from 1:N relation, you have to change the setting of the method used (from WMS to QGIS API).**

See [dedicated paragraph](settings#g3w-client-search-endpoint).


Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).

This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.

In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![Icon: Widget](/img/manual-english-icon-widget.png)

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.png)

By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.

These widgets can be **modified, deleted or disconnected** using the appropriate icons.

**ATTENTION: deleting a search** will delete it from all projects in which that search is active.

To **deactivate a search** from a project, simply disconnect it using the check-box on the right.

To **create a new search**, click on the link **`New widget`**.

In the pop-up that appears, the **`Search` type** have to be chosen.

![Screenshot: G3W-SUITE Administration Project Widget Choose](/img/manual-english-g3wsuite-administration-project-widget-choose.png)

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
   * **`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.
   * **`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.   

The button ![Button: Add](/img/manual-english-button-add.png) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.

The example below shows the compilation of the form for creating a search widget with serveral options.
![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.png)

Once the form has been filled in, click on the **OK** button to save the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

The widget will already be **`connected`** and therefore **available in the WebGis interface**.

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.png)


**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.

**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**


##### Dependency
Now it is possible to **define the dependence more or less strong** (strictly).

In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.

Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.


##### Tip
In the event that, at QGIS project level, the following editing widgets are associated with a field:
 * Value relations
 * Value maps
 * Relation reference

The values shown in the search tool will be those defined on the basis of the tables related via widegt.

**Warning: in the case of fields with more than 100 unique values, the WMS service does not allow to obtain the complete list of values. In this case it is recommended not to use the `SelectBox` method**

**Alternatively, you can use the QGIS API as a search method to overcome this limitation. See** [dedicated paragraph](settings#g3w-client-search-endpoint).

 
#### Multiple layers search

The **Other searching layers** option allows you to extend the search carried out to other layers.

If the additional layers have homologous fields (same name and type) the search will be extended to them.

The results will be differentiated according to the corresponding layer.

Especially useful in the case of multi geometric layers.

![Screenshot: G3W-SUITE Administration Project Search Multilayers](/img/manual-english-g3wsuite-administration-project-search-multilayers.png)


#### Search based on 1:N relation data
The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.

**N.B. to create searches based on fields derived from simple joins (1: 1 / N: 1) or from 1: N relation, you have to change the setting of the method used (from WMS to QGIS API).**
See [dedicated paragraph](settings#g3w-client-search-endpoint).

The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.


![Screenshot: G3W-SUITE Administration Project Search 1 N](/img/manual-english-g3wsuite-administration-project-search-1-n.png)

### ![Icon: Styles](/img/manual-english-icon-styles.png) Manage layer styles

If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.

It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.

![Screenshot: G3W-SUITE Administration Styles](/img/manual-english-g3wsuite-administration-styles.png)

### Project layers actions
At the top right, identified by the item "Project layers actions", there are icons dedicated to settings that act on multiple elements of the project:
   * ![Icon: Multi Editing](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users
   * ![Icon: Clone Users](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users
   * ![Icon: Chart Order](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level




<script type="application/json" data-i18n>
  {
  "it": {
    "![Icon: Chart Order](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level": "![Icona: ordine dei grafici](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** consente di definire l'ordine di visualizzazione dei grafici attivi nell'interfaccia del client",
    "![Icon: Clone Users](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users": "![Icona: clona utenti](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** consente di clonare tutte le impostazioni definite per un utente (permessi di modifica, vari vincoli...) nel progetto gestito e assegnarle ad altri utenti",
    "![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) Display and editing constraints": "![Icona: vincoli geografici](/img/manual-english-icon-geoconstraints.png) ![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.png) Vincoli di visualizzazione e modifica",
    "![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) Hide columns by User/Groups": "![Icona: nascondi colonne](/img/manual-english-icon-hide-columns.png) Nascondere le colonne per utente/gruppo",
    "![Icon: Multi Editing](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users": "![Icona: modifica multipla](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** consente di attivare la modifica online su più layer contemporaneamente, semplificando la definizione degli utenti abilitati",
    "![Icon: Styles](/img/manual-english-icon-styles.png) Manage layer styles": "![Icona: stili](/img/manual-english-icon-styles.png) Gestire gli stili del layer",
    "![Icon: Widget](/img/manual-english-icon-widget.png) Widget setting - Search tools": "![Icona: widget](/img/manual-english-icon-widget.png) Impostazioni dei widget - strumenti di ricerca",
    "**ATTENTION: deleting a search** will delete it from all projects in which that search is active.": "**ATTENZIONE: eliminando una ricerca** la si rimuove da tutti i progetti in cui è attiva.",
    "**Alternatively, you can use the QGIS API as a search method to overcome this limitation. See** [dedicated paragraph](settings#g3w-client-search-endpoint).": "**In alternativa, è possibile usare QGIS API come metodo di ricerca per superare questo limite. Consultare il** [paragrafo dedicato](settings#g3w-client-search-endpoint).",
    "**Form Title**": "**Titolo del modulo**",
    "**General configuration of research and results**": "**Configurazione generale della ricerca e dei risultati**",
    "**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.": "**IMPORTANTE:** il widget di ricerca creato sarà disponibile (scollegato) in tutti i progetti che contengono il layer a cui è stato associato.",
    "**N.B. to create searches based on fields derived from simple joins (1: 1 / N: 1) or from 1: N relation, you have to change the setting of the method used (from WMS to QGIS API).**": "**N.B. per creare ricerche basate su campi derivati da join semplici (1:1/N:1) o da relazioni 1:N, è necessario modificare il metodo usato (da WMS a QGIS API).**",
    "**NB: to create searches based on fields derived from simple joins (1:1/N:1) or from 1:N relation, you have to change the setting of the method used (from WMS to QGIS API).**": "**NB: per creare ricerche basate su campi derivati da join semplici (1:1/N:1) o da relazioni 1:N, è necessario modificare il metodo usato (da WMS a QGIS API).**",
    "**Search fields settings**": "**Impostazioni dei campi di ricerca**",
    "**Thanks to this function it is possible to hide specific fields of a layer for consultation. This constraint can be differentiated for individual users or groups of users.**": "**Questa funzione consente di nascondere specifici campi di un layer durante la consultazione. Il vincolo può variare per singoli utenti o gruppi di utenti.**",
    "**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**": "**In questo modo non sarà necessario ricreare più volte il widget e si potrà decidere in quali progetti attivare la ricerca.**",
    "**Using this icon it is possible to associate a series of widgets to the layer. The basic widget allows you to define search tools that will be available in the WebGis.**": "**Questa icona consente di associare una serie di widget al layer. Il widget di base permette di definire strumenti di ricerca disponibili nel WebGis.**",
    "**Warning: in the case of fields with more than 100 unique values, the WMS service does not allow to obtain the complete list of values. In this case it is recommended not to use the `SelectBox` method**": "**Attenzione: per i campi con più di 100 valori univoci, il servizio WMS non consente di ottenere l'elenco completo. In questo caso si consiglia di non usare il metodo `SelectBox`.**",
    "**`Alias`:** alias assigned to the field that will appear in the search form": "**`Alias`:** alias assegnato al campo e visualizzato nel modulo di ricerca",
    "**`Comparison operator`:** comparison operator (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) through which the search query will be carried out. The **IN** operator simplifies searches where a field must be associated with multiple values (OR operator)": "**`Comparison operator`:** operatore di confronto (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) usato per eseguire la ricerca. L'operatore **IN** semplifica le ricerche in cui a un campo devono essere associati più valori (operatore OR)",
    "**`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.": "**`Dependency`:** questo parametro facoltativo consente, solo per i widget **SelectBox** o **AutoCompleteBox**, di mostrare i valori di un campo filtrati in base al valore impostato nei campi precedenti.",
    "**`Description`:** description assigned to the field": "**`Description`:** descrizione assegnata al campo",
    "**`Field`:** field on which to carry out the research": "**`Field`:** campo su cui eseguire la ricerca",
    "**`Name`:** name that G3W-SUITE will use to internally register the search widget.": "**`Name`:** nome usato da G3W-SUITE per registrare internamente il widget di ricerca.",
    "**`Paginate results`:** option to activate pagination for the results list in order to avoid timeout problems in the case of a large number of results": "**`Paginate results`:** opzione per attivare la paginazione dell'elenco dei risultati ed evitare timeout quando i risultati sono numerosi",
    "**`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface": "**`Search title`:** titolo visualizzato nel pannello **'Research'** dell'interfaccia WebGis",
    "**`Type`:** \"Search\"": "**`Type`:** \"Search\"",
    "**`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.": "**`Use alternative unique values`** (per il widget SelectBox): possibilità di associare un layer del progetto QGIS che fornisce l'elenco dei valori univoci da mostrare nel campo di ricerca. Il campo che riporta i valori univoci deve avere lo stesso nome del campo impostato per la ricerca. Questo accelera notevolmente il caricamento del modulo di ricerca lato utente e migliora l'usabilità dello strumento, soprattutto quando sono presenti molti record con pochi valori univoci.",
    "**`Widget`:** method of entering the value to be searched": "**`Widget`:** modalità di inserimento del valore da cercare",
    "At the top right, identified by the item \"Project layers actions\", there are icons dedicated to settings that act on multiple elements of the project:": "In alto a destra, sotto la voce \"Project layers actions\", sono presenti icone dedicate a impostazioni che agiscono su più elementi del progetto:",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Basic settings": "Impostazioni di base",
    "Button: Add": "Pulsante: aggiungi",
    "By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.": "Facendo clic sull'icona viene mostrato l'elenco dei widget già attivi o attivabili associati al layer.",
    "By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.": "Per impostazione predefinita, è possibile creare ricerche sui singoli layer vettoriali basandosi sui campi della tabella associata al layer.",
    "Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.": "Facendo clic sull'icona verrà mostrato l'elenco degli eventuali vincoli alfanumerici esistenti sulle colonne e la voce `+ Create New Column Level constraints` per crearne uno nuovo.",
    "Clicking on the item will open a modal window which will allow you to define:": "Facendo clic sulla voce si aprirà una finestra modale che consente di definire:",
    "Dependency": "Dipendenza",
    "Especially useful in the case of multi geometric layers.": "Particolarmente utile nel caso di layer con geometrie multiple.",
    "Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).": "Ogni widget di ricerca viene salvato facendo riferimento agli identificatori del layer (ad esempio, i parametri del DB: IP, nome del DB, schema e nome del layer).",
    "Icon: Chart Order": "Icona: ordine dei grafici",
    "Icon: Clone Users": "Icona: clona utenti",
    "Icon: Multi Editing": "Icona: modifica multipla",
    "If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.": "Se nel progetto QGIS **allo stesso layer sono associati più stili**, questi saranno disponibili.",
    "If the additional layers have homologous fields (same name and type) the search will be extended to them.": "Se i layer aggiuntivi hanno campi omologhi (stesso nome e tipo), la ricerca verrà estesa anche a essi.",
    "In G3W-SUITE it is possible to create search widgets.": "In G3W-SUITE è possibile creare widget di ricerca.",
    "In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.": "In caso di **dipendenza stretta**, i valori dei campi dipendenti verranno caricati **solo dopo** aver scelto il valore del campo da cui dipendono.",
    "In the event that, at QGIS project level, the following editing widgets are associated with a field:": "Se a livello di progetto QGIS a un campo sono associati i seguenti widget di modifica:",
    "In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![Icon: Widget](/img/manual-english-icon-widget.png)": "Nell'elenco dei layer del progetto, **individuare il layer a cui associare il widget di ricerca** e fare clic sull'icona ![Icon: Widget](/img/manual-english-icon-widget.png)",
    "In the pop-up that appears, the **`Search` type** have to be chosen.": "Nella finestra popup visualizzata, scegliere il tipo **`Search`**.",
    "In the related form we can define:": "Nel modulo corrispondente è possibile definire:",
    "It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.": "È possibile associare nuovi stili **caricando i relativi file QML** e **impostare lo stile predefinito**.",
    "Multiple layers search": "Ricerca su più layer",
    "Now it is possible to **define the dependence more or less strong** (strictly).": "Ora è possibile **definire il grado di vincolo della dipendenza** (stretta o meno).",
    "Once all the constraints have been setted, click on the OK to confirm the rules.": "Dopo aver impostato tutti i vincoli, fare clic su OK per confermare le regole.",
    "Once the form has been filled in, click on the **OK** button to save the settings.": "Dopo aver compilato il modulo, fare clic sul pulsante **OK** per salvare le impostazioni.",
    "Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.": "Dopo aver salvato le impostazioni, il widget creato apparirà nell'elenco dei widget associati al layer.",
    "Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.": "Altrimenti sarà possibile impostare liberamente i valori dei singoli campi e **senza un ordine specifico**. I valori disponibili per gli altri campi dipenderanno comunque dalla scelta effettuata.",
    "Project layers actions": "Azioni sui layer del progetto",
    "Relation reference": "Relation reference",
    "Screenshot: Demo Search Result": "Schermata: risultato di ricerca demo",
    "Screenshot: G3W-SUITE Administration Hide Columns New": "Schermata: nuovo vincolo di colonne nascoste nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Search 1 N": "Schermata: ricerca 1:N nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Search Form": "Schermata: modulo di ricerca del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Search Multilayers": "Schermata: ricerca su più layer nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Widget Choose": "Schermata: scelta del widget del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Widget List": "Schermata: elenco dei widget del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Styles": "Schermata: stili nell'amministrazione di G3W-SUITE",
    "Search based on 1:N relation data": "Ricerca basata sui dati di una relazione 1:N",
    "See [dedicated paragraph](settings#g3w-client-search-endpoint).": "Consultare il [paragrafo dedicato](settings#g3w-client-search-endpoint).",
    "See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).": "Consultare il paragrafo dedicato alle [impostazioni di amministrazione della modifica](editing-administration-settings.md).",
    "The **Other searching layers** option allows you to extend the search carried out to other layers.": "L'opzione **Other searching layers** consente di estendere la ricerca ad altri layer.",
    "The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.": "L'opzione **Relations** consente di definire la relazione da usare (se presente) per individuare il layer padre di cui mostrare i risultati.",
    "The button ![Button: Add](/img/manual-english-button-add.png) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.": "Il pulsante ![Button: Add](/img/manual-english-button-add.png) consente di aggiungere altri campi alla query di ricerca, attualmente gestibile tramite operatori **AND/OR**.",
    "The example below shows the compilation of the form for creating a search widget with serveral options.": "L'esempio seguente mostra la compilazione del modulo per creare un widget di ricerca con diverse opzioni.",
    "The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.": "L'opzione consente di creare una ricerca basata sui campi di una tabella (figlia in una relazione 1:N) e ottenere risultati relativi al layer padre della relazione.",
    "The results will be differentiated according to the corresponding layer.": "I risultati saranno distinti in base al layer corrispondente.",
    "The values shown in the search tool will be those defined on the basis of the tables related via widegt.": "I valori mostrati nello strumento di ricerca saranno quelli definiti in base alle tabelle correlate tramite widget.",
    "The widget will already be **`connected`** and therefore **available in the WebGis interface**.": "Il widget sarà già **`connected`** e quindi **disponibile nell'interfaccia WebGis**.",
    "These widgets can be **modified, deleted or disconnected** using the appropriate icons.": "Questi widget possono essere **modificati, eliminati o scollegati** usando le icone corrispondenti.",
    "This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.": "In questo modo, una volta creato un widget di ricerca per un layer, sarà disponibile in tutti i progetti in cui è presente il layer, senza doverlo ricreare ogni volta.",
    "This setting is also available for the AnonymousUser user": "Questa impostazione è disponibile anche per l'utente AnonymousUser",
    "Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.": "I widget **Geo-constraints by user/group** e **Alphanumeric and QGIS expressions constraints by user/groups** consentono di definire filtri di modifica e visualizzazione per gli utenti autorizzati a consultare o modificare il progetto.",
    "Tip": "Suggerimento",
    "To **create a new search**, click on the link **`New widget`**.": "Per **creare una nuova ricerca**, fare clic sul link **`New widget`**.",
    "To **deactivate a search** from a project, simply disconnect it using the check-box on the right.": "Per **disattivare una ricerca** in un progetto, è sufficiente scollegarla tramite la casella di controllo a destra.",
    "To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png).": "Per attivare questo tipo di vincolo, fare clic sull'icona Hide columns by User/Groups ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) associata al layer interessato.",
    "Value maps": "Value maps",
    "Value relations": "Value relations",
    "Widget constraints and search tools": "Vincoli dei widget e strumenti di ricerca",
    "Widgets management": "Gestione dei widget",
    "`AutoCompleteBox`: values ​​shown through auto-complete mode": "`AutoCompleteBox`: valori mostrati tramite completamento automatico",
    "`DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.": "`DateTimeBox`: widget da usare esclusivamente per campi di tipo data. Nel client l'utente imposta la data/ora da cercare tramite il widget calendario/orologio.",
    "`InputBox`: manual compilation": "`InputBox`: inserimento manuale",
    "`SelectBox`: values ​​shown via drop-down menu": "`SelectBox`: valori mostrati in un menu a discesa",
    "list of fields to hide": "elenco dei campi da nascondere",
    "list of users for whom these fields should be hidden": "elenco degli utenti a cui nascondere questi campi",
    "list of users groups for whom these fields should be hidden": "elenco dei gruppi di utenti a cui nascondere questi campi"
  }
}
</script>
