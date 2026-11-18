# Search widgets

## ![Icon: Widget](/img/manual-english-icon-widget.avif) Widget setting - Search tools

**Use this icon to add widgets to the layer. The basic widget defines search tools available in the WebGIS.**

### Basic settings

Create search widgets in G3W-SUITE.

By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.



Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).

This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.

In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![Icon: Widget](/img/manual-english-icon-widget.avif)

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.avif)

By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.

These widgets can be **modified, deleted or disconnected** using the appropriate icons.

**ATTENTION: deleting a search** will delete it from all projects in which that search is active.

To **deactivate a search** from a project, simply disconnect it using the check-box on the right.

To **create a new search**, click on the link **`New widget`**.

In the pop-up that appears, the **`Search` type** have to be chosen.

![Screenshot: G3W-SUITE Administration Project Widget Choose](/img/manual-english-g3wsuite-administration-project-widget-choose.avif)

In the related form we can define:
 * **Form Title**
   * **`Type`:** "Search"
   * **`Name`:** name that G3W-SUITE will use to internally register the search widget.
 * **General configuration of research and results**
   * **`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface
   * **`Paginate results`:** paginate the results list to avoid timeouts when it is large
 * **Search fields settings**
   * **`Field`:** field on which to carry out the research
   * **`Widget`:** method of entering the value to be searched
     * `InputBox`: manual compilation
     * `SelectBox`: values ​​shown via drop-down menu
     * `AutoCompleteBox`: values ​​shown through auto-complete mode
     * `DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.
   * **`Alias`:** alias assigned to the field that will appear in the search form
   * **`Description`:** description assigned to the field
   * **`Comparison operator`:** operator used for the search (**=, <, >, <>, >=, <=, IN, LIKE, ILIKE**). **IN** matches a field against any of several values.
   * **`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.
   * **`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.   

The button ![Button: Add](/img/manual-english-button-add.avif) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.

The example below shows the compilation of the form for creating a search widget with serveral options.
![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.avif)

Once the form has been filled in, click on the **OK** button to save the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

The widget will already be **`connected`** and therefore **available in the WebGis interface**.

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.avif)


**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.

**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**


#### Dependency
Set the **dependency level** (strict or not).

In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.

Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.


#### Tip
In the event that, at QGIS project level, the following editing widgets are associated with a field:
 * Value relations
 * Value maps
 * Relation reference

The values shown in the search tool will be those defined on the basis of the tables related via widegt.

**Tip:** Use `AutoCompleteBox` for fields with many distinct values, so users can type to narrow the suggestions instead of browsing a long list.

 
### Multiple layers search

The **Other searching layers** option allows you to extend the search carried out to other layers.

If the additional layers have homologous fields (same name and type) the search will be extended to them.

The results will be differentiated according to the corresponding layer.

Especially useful in the case of multi geometric layers.

![Screenshot: G3W-SUITE Administration Project Search Multilayers](/img/manual-english-g3wsuite-administration-project-search-multilayers.avif)


### Search based on 1:N relation data
The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.

The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.


![Screenshot: G3W-SUITE Administration Project Search 1 N](/img/manual-english-g3wsuite-administration-project-search-1-n.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Widget](/img/manual-english-icon-widget.avif) Widget setting - Search tools": "![Icona: widget](/img/manual-english-icon-widget.avif) Impostazioni dei widget - strumenti di ricerca",
    "**ATTENTION: deleting a search** will delete it from all projects in which that search is active.": "**ATTENZIONE: eliminando una ricerca** la si rimuove da tutti i progetti in cui è attiva.",
    "**Form Title**": "**Titolo del modulo**",
    "**General configuration of research and results**": "**Configurazione generale della ricerca e dei risultati**",
    "**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.": "**IMPORTANTE:** il widget di ricerca creato sarà disponibile (scollegato) in tutti i progetti che contengono il layer a cui è stato associato.",
    "**Search fields settings**": "**Impostazioni dei campi di ricerca**",
    "**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**": "**In questo modo non sarà necessario ricreare più volte il widget e si potrà decidere in quali progetti attivare la ricerca.**",
    "**Tip:** Use `AutoCompleteBox` for fields with many distinct values, so users can type to narrow the suggestions instead of browsing a long list.": "**Suggerimento:** usa `AutoCompleteBox` per i campi con molti valori distinti, così chi cerca può digitare per restringere i suggerimenti anziché scorrere un lungo elenco.",
    "**Use this icon to add widgets to the layer. The basic widget defines search tools available in the WebGIS.**": "**Usa questa icona per aggiungere widget al layer. Il widget di base definisce gli strumenti di ricerca disponibili nel WebGIS.**",
    "**`Alias`:** alias assigned to the field that will appear in the search form": "**`Alias`:** alias assegnato al campo e visualizzato nel modulo di ricerca",
    "**`Comparison operator`:** operator used for the search (**=, <, >, <>, >=, <=, IN, LIKE, ILIKE**). **IN** matches a field against any of several values.": "**`Comparison operator`:** operatore usato per la ricerca (**=, <, >, <>, >=, <=, IN, LIKE, ILIKE**). **IN** seleziona i record in cui il campo corrisponde a uno qualsiasi dei valori indicati.",
    "**`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.": "**`Dependency`:** questo parametro facoltativo consente, solo per i widget **SelectBox** o **AutoCompleteBox**, di mostrare i valori di un campo filtrati in base al valore impostato nei campi precedenti.",
    "**`Description`:** description assigned to the field": "**`Description`:** descrizione assegnata al campo",
    "**`Field`:** field on which to carry out the research": "**`Field`:** campo su cui eseguire la ricerca",
    "**`Name`:** name that G3W-SUITE will use to internally register the search widget.": "**`Name`:** nome usato da G3W-SUITE per registrare internamente il widget di ricerca.",
    "**`Paginate results`:** paginate the results list to avoid timeouts when it is large": "**`Paginate results`:** suddividi i risultati in pagine per evitare timeout quando sono numerosi",
    "**`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface": "**`Search title`:** titolo visualizzato nel pannello **'Research'** dell'interfaccia WebGis",
    "**`Type`:** \"Search\"": "**`Type`:** \"Search\"",
    "**`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.": "**`Use alternative unique values`** (per il widget SelectBox): possibilità di associare un layer del progetto QGIS che fornisce l'elenco dei valori univoci da mostrare nel campo di ricerca. Il campo che riporta i valori univoci deve avere lo stesso nome del campo impostato per la ricerca. Questo accelera notevolmente il caricamento del modulo di ricerca lato utente e migliora l'usabilità dello strumento, soprattutto quando sono presenti molti record con pochi valori univoci.",
    "**`Widget`:** method of entering the value to be searched": "**`Widget`:** modalità di inserimento del valore da cercare",
    "Basic settings": "Impostazioni di base",
    "Button: Add": "Pulsante: aggiungi",
    "By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.": "Facendo clic sull'icona viene mostrato l'elenco dei widget già attivi o attivabili associati al layer.",
    "By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.": "Per impostazione predefinita, è possibile creare ricerche sui singoli layer vettoriali basandosi sui campi della tabella associata al layer.",
    "Create search widgets in G3W-SUITE.": "Crea widget di ricerca in G3W-SUITE.",
    "Dependency": "Dipendenza",
    "Especially useful in the case of multi geometric layers.": "Particolarmente utile nel caso di layer con geometrie multiple.",
    "Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).": "Ogni widget di ricerca viene salvato facendo riferimento agli identificatori del layer (ad esempio, i parametri del DB: IP, nome del DB, schema e nome del layer).",
    "If the additional layers have homologous fields (same name and type) the search will be extended to them.": "Se i layer aggiuntivi hanno campi omologhi (stesso nome e tipo), la ricerca verrà estesa anche a essi.",
    "In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.": "In caso di **dipendenza stretta**, i valori dei campi dipendenti verranno caricati **solo dopo** aver scelto il valore del campo da cui dipendono.",
    "In the event that, at QGIS project level, the following editing widgets are associated with a field:": "Se a livello di progetto QGIS a un campo sono associati i seguenti widget di modifica:",
    "In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![Icon: Widget](/img/manual-english-icon-widget.avif)": "Nell'elenco dei layer del progetto, **individuare il layer a cui associare il widget di ricerca** e fare clic sull'icona ![Icon: Widget](/img/manual-english-icon-widget.avif)",
    "In the pop-up that appears, the **`Search` type** have to be chosen.": "Nella finestra popup visualizzata, scegliere il tipo **`Search`**.",
    "In the related form we can define:": "Nel modulo corrispondente è possibile definire:",
    "Multiple layers search": "Ricerca su più layer",
    "Once the form has been filled in, click on the **OK** button to save the settings.": "Dopo aver compilato il modulo, fare clic sul pulsante **OK** per salvare le impostazioni.",
    "Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.": "Dopo aver salvato le impostazioni, il widget creato apparirà nell'elenco dei widget associati al layer.",
    "Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.": "Altrimenti sarà possibile impostare liberamente i valori dei singoli campi e **senza un ordine specifico**. I valori disponibili per gli altri campi dipenderanno comunque dalla scelta effettuata.",
    "Relation reference": "Relation reference",
    "Screenshot: Demo Search Result": "Schermata: risultato di ricerca demo",
    "Screenshot: G3W-SUITE Administration Project Search 1 N": "Schermata: ricerca 1:N nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Search Form": "Schermata: modulo di ricerca del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Search Multilayers": "Schermata: ricerca su più layer nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Widget Choose": "Schermata: scelta del widget del progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Widget List": "Schermata: elenco dei widget del progetto nell'amministrazione di G3W-SUITE",
    "Search based on 1:N relation data": "Ricerca basata sui dati di una relazione 1:N",
    "Search widgets": "Widget di ricerca",
    "Set the **dependency level** (strict or not).": "Imposta il **grado di dipendenza** (stretta o meno).",
    "The **Other searching layers** option allows you to extend the search carried out to other layers.": "L'opzione **Other searching layers** consente di estendere la ricerca ad altri layer.",
    "The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.": "L'opzione **Relations** consente di definire la relazione da usare (se presente) per individuare il layer padre di cui mostrare i risultati.",
    "The button ![Button: Add](/img/manual-english-button-add.avif) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.": "Il pulsante ![Button: Add](/img/manual-english-button-add.avif) consente di aggiungere altri campi alla query di ricerca, attualmente gestibile tramite operatori **AND/OR**.",
    "The example below shows the compilation of the form for creating a search widget with serveral options.": "L'esempio seguente mostra la compilazione del modulo per creare un widget di ricerca con diverse opzioni.",
    "The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.": "L'opzione consente di creare una ricerca basata sui campi di una tabella (figlia in una relazione 1:N) e ottenere risultati relativi al layer padre della relazione.",
    "The results will be differentiated according to the corresponding layer.": "I risultati saranno distinti in base al layer corrispondente.",
    "The values shown in the search tool will be those defined on the basis of the tables related via widegt.": "I valori mostrati nello strumento di ricerca saranno quelli definiti in base alle tabelle correlate tramite widget.",
    "The widget will already be **`connected`** and therefore **available in the WebGis interface**.": "Il widget sarà già **`connected`** e quindi **disponibile nell'interfaccia WebGis**.",
    "These widgets can be **modified, deleted or disconnected** using the appropriate icons.": "Questi widget possono essere **modificati, eliminati o scollegati** usando le icone corrispondenti.",
    "This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.": "In questo modo, una volta creato un widget di ricerca per un layer, sarà disponibile in tutti i progetti in cui è presente il layer, senza doverlo ricreare ogni volta.",
    "Tip": "Suggerimento",
    "To **create a new search**, click on the link **`New widget`**.": "Per **creare una nuova ricerca**, fare clic sul link **`New widget`**.",
    "To **deactivate a search** from a project, simply disconnect it using the check-box on the right.": "Per **disattivare una ricerca** in un progetto, è sufficiente scollegarla tramite la casella di controllo a destra.",
    "Value maps": "Value maps",
    "Value relations": "Value relations",
    "`AutoCompleteBox`: values ​​shown through auto-complete mode": "`AutoCompleteBox`: valori mostrati tramite completamento automatico",
    "`DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.": "`DateTimeBox`: widget da usare esclusivamente per campi di tipo data. Nel client l'utente imposta la data/ora da cercare tramite il widget calendario/orologio.",
    "`InputBox`: manual compilation": "`InputBox`: inserimento manuale",
    "`SelectBox`: values ​​shown via drop-down menu": "`SelectBox`: valori mostrati in un menu a discesa"
  }
}
</script>
