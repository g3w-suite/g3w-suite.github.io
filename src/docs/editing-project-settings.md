# QGIS project settings for editing

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration

### QGIS project settings

#### Definition of editing widgets associated with individual attributes

In the QGIS project, for each layer it is possible to **define the structure of the attribute display module**.

The same structure will be used in the cartographic client when editing attributes.

The definition of the form structure can be managed, on QGIS, from the **`Properties of the vector`, in the `Attributes Form section`**.

![Screenshot: Editing QGIS Form Widget](/img/manual-english-editing-qgis-form-widget.png)

##### Conditionals forms based on QGIS expressions

Conditional forms based on QGIS expressions are supported and implemented for online editing/consulting.

It is therefore possible to define the visibility of a forms (form or group) and of the fields it contains, on the basis of the values defined on further fields when filling in the attributes.

##### Drill-down (cascading) forms

Drill-down (cascading) forms **based on QGIS expressions** are supported and implemented for online editing.

The functionality can be used to implement “drill-down” within editing forms, where the values available in one field depend on the values of other fields.

This function will be reflected in the consultation side.

#### Definition of editing widgets associated with individual attributes
At the QGIS project level (always from **`Vector Properties`**, **`Attribute Form`** section) it is possible to define an alias and an editing widget for each attribute.

The alias and editing widgets defined at the project level will be available during web editing with some limitations.

Below are the available widgets and any limitations:
 * **`Relation reference:`** with some option limitation
 * **`Checkbox`**
 * **`Date/time`:** with Display format supported
 * **`Attachment`**
 * **`Range`:** with default, minimum and maximum values supported
 * **`Text edit`:** multiline and html included
 * **`Unique values`:**: this widget will be equipped with a **pick layer** tool at the cartographic client level
 * **`Value map`**
 * **`Value relations`:**
   * Order value option supported
   * Allow multiple selections supported
   * QGIS filter expression supported
   * the widget will be equipped with a pick layer tool at the cartographic client level

 **The expression-based filter can also be dependent on the values of other fields on the form and useful to create cascading drill down.**
   
With regard to the **`Attachment widget`**, it is necessary to specify that the association of a multimedia file with a feature requires that this file is uploaded to a dedicated space (exposed on the web) on the server and that the association takes place via a URL that refers to that file.

This solution allows you to consult the associated attachments also from QGIS or from other GIS software.

**Additional settings at single layer level**

In the **`Attribute Form`** section of the **`Layer Properties`** it is also possible to define for every field:
 * **field editable or not**
 * **mandatory constraints**
 * **unique constraints**
 * **default values:** also based on QGIS expression and with **Apply default value** on update option supported
 * **conditional forms**
 
#### QGIS expressions and default values

**All the QGIS expressions can be used as default values.**

The default values defined for individual fields at the QGIS project level are inherited from the suite.

In this case, at the online edit level, the form relating to the field thus defined will be self-calculated and can be set not editable by the user.

**The result of the expression can also be dependent on the values of other fields on the form.**

Very useful in all cases where we want the values of a field to be calculated automatically through the potential of QGIS expressions.


The `Apply the default value also to the update` option is supported.

As in QGIS the default values are displayed in the form during editing and not only after saving.

#### Definition of 1:n relations
In the event that, at the QGIS project level, one or more 1: n type relationships have been associated with a layer (**`Project menu → Properties…`, `Relations` section**), it will be possible to carry out relational editing also on the webgis platform.

Also for the tables related in 1:n mode it will be possible to define the **attribute form structure, aliases and editing widgets** in the QGIS project.

These configurations and tools will automatically available  on the webgis platform.

#### Transaction Group

**Use transaction group to edit, save or rollback multiple layers changes at once**

When working with layers with the same source (es. layer from the same PostGreSQL database), activate the **`Automatically create transaction groups where possible`** option in **`Project → Properties… → Data Sources`** to sync their behavior (enter or exit the edit mode, save or rollback changes at the same time).

![Screenshot: Datasources](/img/manual-english-datasources.png)

<script type="application/json" data-i18n>
{
  "it": {
    "**`Attachment`**": "**`Allegato`**",
    "**`Checkbox`**": "**`Casella di controllo`**",
    "**`Date/time`:** with Display format supported": "**`Data/ora`:** è supportato il formato di visualizzazione",
    "**`Range`:** with default, minimum and maximum values supported": "**`Intervallo`:** sono supportati i valori predefinito, minimo e massimo",
    "**`Relation reference:`** with some option limitation": "**`Riferimento relazione:`** con alcune limitazioni nelle opzioni",
    "**`Text edit`:** multiline and html included": "**`Modifica testo`:** sono supportati testo su più righe e HTML",
    "**`Unique values`:**: this widget will be equipped with a **pick layer** tool at the cartographic client level": "**`Valori univoci`:** questo widget include uno strumento **di selezione del layer** nel client cartografico",
    "**`Value map`**": "**`Mappa valori`**",
    "**`Value relations`:**": "**`Relazioni valori`:**",
    "**Additional settings at single layer level**": "**Impostazioni aggiuntive per il singolo layer**",
    "**All the QGIS expressions can be used as default values.**": "**È possibile usare tutte le espressioni QGIS come valori predefiniti.**",
    "**conditional forms**": "**moduli condizionali**",
    "**default values:** also based on QGIS expression and with **Apply default value** on update option supported": "**valori predefiniti:** anche basati su espressioni QGIS; è supportata l’opzione **Applica il valore predefinito all’aggiornamento**",
    "**field editable or not**": "**se il campo è modificabile**",
    "**mandatory constraints**": "**vincoli di obbligatorietà**",
    "**The expression-based filter can also be dependent on the values of other fields on the form and useful to create cascading drill down.**": "**Il filtro basato su espressioni può dipendere anche dai valori di altri campi del modulo, ed è utile per creare selezioni a cascata.**",
    "**The result of the expression can also be dependent on the values of other fields on the form.**": "**Il risultato dell’espressione può dipendere anche dai valori di altri campi del modulo.**",
    "**unique constraints**": "**vincoli di unicità**",
    "**Use transaction group to edit, save or rollback multiple layers changes at once**": "**Usa un gruppo di transazioni per modificare, salvare o annullare contemporaneamente le modifiche a più layer.**",
    "Activation and configuration": "Attivazione e configurazione",
    "Allow multiple selections supported": "è supportata la selezione multipla",
    "Also for the tables related in 1:n mode it will be possible to define the **attribute form structure, aliases and editing widgets** in the QGIS project.": "Anche per le tabelle correlate tramite relazioni 1:n è possibile definire nel progetto QGIS la **struttura del modulo attributi, gli alias e i widget di modifica**.",
    "As in QGIS the default values are displayed in the form during editing and not only after saving.": "Come in QGIS, i valori predefiniti sono mostrati nel modulo durante la modifica, non solo dopo il salvataggio.",
    "At the QGIS project level (always from **`Vector Properties`**, **`Attribute Form`** section) it is possible to define an alias and an editing widget for each attribute.": "Nel progetto QGIS (sempre in **`Proprietà vettore`**, sezione **`Modulo attributi`**) è possibile definire un alias e un widget di modifica per ogni attributo.",
    "Back to Online editing": "Torna alle modifiche online",
    "Below are the available widgets and any limitations:": "Di seguito sono elencati i widget disponibili e le eventuali limitazioni:",
    "Conditional forms based on QGIS expressions are supported and implemented for online editing/consulting.": "I moduli condizionali basati su espressioni QGIS sono supportati e disponibili per la modifica e la consultazione online.",
    "Conditionals forms based on QGIS expressions": "Moduli condizionali basati su espressioni QGIS",
    "Definition of 1:n relations": "Definizione delle relazioni 1:n",
    "Definition of editing widgets associated with individual attributes": "Definizione dei widget di modifica associati ai singoli attributi",
    "Drill-down (cascading) forms": "Moduli a cascata (drill-down)",
    "Drill-down (cascading) forms **based on QGIS expressions** are supported and implemented for online editing.": "I moduli a cascata (drill-down) **basati su espressioni QGIS** sono supportati per la modifica online.",
    "In the **`Attribute Form`** section of the **`Layer Properties`** it is also possible to define for every field:": "Nella sezione **`Modulo attributi`** delle **`Proprietà layer`** è inoltre possibile definire per ogni campo:",
    "In the event that, at the QGIS project level, one or more 1: n type relationships have been associated with a layer (**`Project menu → Properties…`, `Relations` section**), it will be possible to carry out relational editing also on the webgis platform.": "Se nel progetto QGIS a un layer sono associate una o più relazioni di tipo 1:n (**menu `Progetto → Proprietà…`, sezione `Relazioni`**), sarà possibile modificare le relazioni anche sulla piattaforma WebGIS.",
    "In the QGIS project, for each layer it is possible to **define the structure of the attribute display module**.": "Nel progetto QGIS è possibile **definire la struttura del modulo di visualizzazione degli attributi** per ogni layer.",
    "In this case, at the online edit level, the form relating to the field thus defined will be self-calculated and can be set not editable by the user.": "In questo caso, durante la modifica online il valore del campo viene calcolato automaticamente e il campo può essere impostato come non modificabile dall’utente.",
    "It is therefore possible to define the visibility of a forms (form or group) and of the fields it contains, on the basis of the values defined on further fields when filling in the attributes.": "È quindi possibile definire la visibilità di un modulo (o di un gruppo) e dei campi che contiene in base ai valori inseriti negli altri campi durante la compilazione degli attributi.",
    "Order value option supported": "è supportata l’opzione di ordinamento dei valori",
    "QGIS expressions and default values": "Espressioni QGIS e valori predefiniti",
    "QGIS filter expression supported": "è supportata l’espressione di filtro QGIS",
    "QGIS project settings": "Impostazioni del progetto QGIS",
    "QGIS project settings for editing": "Impostazioni del progetto QGIS per le modifiche",
    "Screenshot: Datasources": "Schermata: sorgenti dati",
    "Screenshot: Editing QGIS Form Widget": "Schermata: widget del modulo di modifica QGIS",
    "The `Apply the default value also to the update` option is supported.": "È supportata l’opzione `Applica il valore predefinito anche all’aggiornamento`.",
    "The alias and editing widgets defined at the project level will be available during web editing with some limitations.": "Gli alias e i widget di modifica definiti a livello di progetto sono disponibili durante la modifica sul Web, con alcune limitazioni.",
    "The default values defined for individual fields at the QGIS project level are inherited from the suite.": "I valori predefiniti impostati per i singoli campi nel progetto QGIS vengono ereditati dalla suite.",
    "The definition of the form structure can be managed, on QGIS, from the **`Properties of the vector`, in the `Attributes Form section`**.": "In QGIS, la struttura del modulo si definisce in **`Proprietà vettore`, sezione `Modulo attributi`**.",
    "The functionality can be used to implement “drill-down” within editing forms, where the values available in one field depend on the values of other fields.": "Questa funzionalità consente di implementare moduli di modifica “a cascata”, nei quali i valori disponibili in un campo dipendono da quelli di altri campi.",
    "The same structure will be used in the cartographic client when editing attributes.": "La stessa struttura verrà usata nel client cartografico durante la modifica degli attributi.",
    "the widget will be equipped with a pick layer tool at the cartographic client level": "il widget include uno strumento di selezione del layer nel client cartografico",
    "These configurations and tools will automatically available  on the webgis platform.": "Queste configurazioni e questi strumenti saranno disponibili automaticamente sulla piattaforma WebGIS.",
    "This function will be reflected in the consultation side.": "Questa funzionalità è disponibile anche in consultazione.",
    "This solution allows you to consult the associated attachments also from QGIS or from other GIS software.": "Questa soluzione consente di consultare gli allegati associati anche da QGIS o da altri software GIS.",
    "Transaction Group": "Gruppo di transazioni",
    "Very useful in all cases where we want the values of a field to be calculated automatically through the potential of QGIS expressions.": "È molto utile quando si desidera calcolare automaticamente il valore di un campo sfruttando le espressioni QGIS.",
    "When working with layers with the same source (es. layer from the same PostGreSQL database), activate the **`Automatically create transaction groups where possible`** option in **`Project → Properties… → Data Sources`** to sync their behavior (enter or exit the edit mode, save or rollback changes at the same time).": "Quando si lavora con layer aventi la stessa origine (ad esempio layer dello stesso database PostGreSQL), attiva l’opzione **`Crea automaticamente gruppi di transazioni quando possibile`** in **`Progetto → Proprietà… → Sorgenti dati`** per sincronizzarne il comportamento (avvio e chiusura della modalità di modifica, salvataggio o annullamento delle modifiche).",
    "With regard to the **`Attachment widget`**, it is necessary to specify that the association of a multimedia file with a feature requires that this file is uploaded to a dedicated space (exposed on the web) on the server and that the association takes place via a URL that refers to that file.": "Per il **`widget Allegato`**, il file multimediale da associare a un elemento deve essere caricato in un’area dedicata del server (accessibile via Web); l’associazione avviene tramite un URL che punta al file."
  }
}
</script>
