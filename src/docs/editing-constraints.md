# Editing constraints

## Constraints setting

**G3W-SUITE supports two types of constraints:**
 * **alphanumeric (SQL) / QGIS expressions constraints**
 * **geographic constraints**
 
Both work in terms of visualization and/or editing

For each constraint, click the **Save icon** ![Icon: Save](/img/manual-english-icon-save.avif) to validate its rules, then click **Close** to confirm.

### Alphanumeric (SQL) / QGIS expressions Constraints
**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.avif).

Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.

![Screenshot: Editing Alpha Constrain Layer](/img/manual-english-editing-alpha-constrain-layer.avif)

Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.

Choose where the filter applies:
 * display only
 * editing only
 * in both cases
 
![Screenshot: Editing Alpha Constrain Layer Init](/img/manual-english-editing-alpha-constrain-layer-init.avif)


After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:  

 * ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) **Provider's language / SQL dialect**
 * ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) **QGIS Expression**


#### Provider's language / SQL dialect Rules
Clicking on the icon ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Alpha Constrain Setting](/img/manual-english-editing-alpha-constrain-setting.avif)


#### QGIS Expressions Rules
Clicking on the icon **QGIS expression rules** ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.

See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).

![Screenshot: Editing Qgisconstrain Setting](/img/manual-english-editing-qgisconstrain-setting.avif)

In the dedicated panel it will be possible to check, modify and delete the defined rules.

![Screenshot: Alpha Constrain List](/img/manual-english-alpha-constrain-list.avif)


### Geo-constraints
**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**

This setting is also available for the AnonymousUser user

To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![Icon: Constraints](/img/manual-english-icon-constraints.avif) which will appear once the online editing function is activated.

Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.

![Screenshot: Editing Constrain Layer](/img/manual-english-editing-constrain-layer.avif)

Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.

Choose where the filter applies:
 * display only
 * editing only
 * in both cases

![Screenshot: Geo Constrain Layer Init](/img/manual-english-geo-constrain-layer-init.avif)


Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![Icon: Constraints Setting](/img/manual-english-icon-constraints-setting.avif)

Clicking on this icon will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Geoconstrain Setting](/img/manual-english-editing-geoconstrain-setting.avif)

In the alphanumeric constraints list you can see a summary of the setted rules.

![Screenshot: Editing Geoconstrain Layer Summary](/img/manual-english-editing-geoconstrain-layer-summary.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) **Provider's language / SQL dialect**": "![Icona: impostazioni vincoli alfanumerici](/img/manual-english-icon-alphaconstraints-setting.avif) **Linguaggio del provider / dialetto SQL**",
    "![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) **QGIS Expression**": "![Icona: impostazioni vincoli QGIS](/img/manual-english-icon-qgisconstraints-setting.avif) **Espressione QGIS**",
    "**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**": "**I vincoli alfanumerici (SQL) e basati su espressioni QGIS consentono di definire, per ogni layer pubblicato, il sottoinsieme di elementi che ciascun utente o gruppo può visualizzare e/o modificare.**",
    "**G3W-SUITE supports two types of constraints:**": "**G3W-SUITE supporta due tipi di vincoli:**",
    "**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**": "**La funzione di modifica online consente di gestire vincoli geografici che permettono all’utente di visualizzare e/o modificare gli elementi solo se intersecano o sono contenuti in elementi specifici di un secondo layer poligonale.**",
    "**alphanumeric (SQL) / QGIS expressions constraints**": "**vincoli alfanumerici (SQL) / espressioni QGIS**",
    "**geographic constraints**": "**vincoli geografici**",
    "After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:": "Dopo aver fatto clic su OK, il vincolo appare nell’elenco e può essere configurato definendo le regole in due modi:",
    "Alphanumeric (SQL) / QGIS expressions Constraints": "Vincoli alfanumerici (SQL) / espressioni QGIS",
    "Both work in terms of visualization and/or editing": "Entrambi possono agire sulla visualizzazione e/o sulla modifica.",
    "Button: Add": "Pulsante: aggiungi",
    "Choose where the filter applies:": "Scegli dove applicare il filtro:",
    "Clicking on the icon ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic sull’icona ![Icona: impostazioni vincoli alfanumerici](/img/manual-english-icon-alphaconstraints-setting.avif) si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.avif), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Clicking on the icon **QGIS expression rules** ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic sull’icona **Regole con espressioni QGIS** ![Icona: impostazioni vincoli QGIS](/img/manual-english-icon-qgisconstraints-setting.avif) si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.avif), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.": "Facendo clic sull’icona viene mostrato l’elenco dei vincoli alfanumerici esistenti e la voce **`+ Nuovo vincolo alfanumerico`** per crearne uno.",
    "Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.": "Facendo clic sull’icona viene mostrato l’elenco dei vincoli esistenti e la voce **`+ Nuovo vincolo geografico`** per crearne uno.",
    "Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.": "Facendo clic sulla voce **`+ Nuovo vincolo`** si apre una finestra modale in cui è possibile definire il nome e la descrizione del nuovo vincolo.",
    "Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.": "Facendo clic sulla voce **`+ Nuovo vincolo geografico`** si apre una finestra modale che consente di **definire il layer poligonale** (tra quelli presenti nel progetto) **su cui basare il vincolo**.",
    "Clicking on this icon will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic su questa icona si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.avif), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Constraints setting": "Impostazione dei vincoli",
    "Editing constraints": "Vincoli per la modifica",
    "For each constraint, click the **Save icon** ![Icon: Save](/img/manual-english-icon-save.avif) to validate its rules, then click **Close** to confirm.": "Per ogni vincolo, fai clic sull’**icona Salva** ![Icona: salva](/img/manual-english-icon-save.avif) per convalidarne le regole, quindi fai clic su **Close** per confermare.",
    "Geo-constraints": "Vincoli geografici",
    "Icon: Alpha Constraints": "Icona: vincoli alfanumerici",
    "Icon: Alphaconstraints Setting": "Icona: impostazioni dei vincoli alfanumerici",
    "Icon: Constraints": "Icona: vincoli",
    "Icon: Constraints Setting": "Icona: impostazioni dei vincoli",
    "Icon: Qgisconstraints Setting": "Icona: impostazioni dei vincoli QGIS",
    "Icon: Save": "Icona: salva",
    "In the alphanumeric constraints list you can see a summary of the setted rules.": "Nell’elenco dei vincoli alfanumerici è possibile consultare un riepilogo delle regole impostate.",
    "In the dedicated panel it will be possible to check, modify and delete the defined rules.": "Nel pannello dedicato è possibile verificare, modificare ed eliminare le regole definite.",
    "Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![Icon: Constraints Setting](/img/manual-english-icon-constraints-setting.avif)": "Dopo aver definito il layer, il vincolo appare nell’elenco e può essere configurato tramite l’**icona Regole** ![Icona: impostazioni dei vincoli](/img/manual-english-icon-constraints-setting.avif)",
    "Provider's language / SQL dialect Rules": "Regole in linguaggio del provider / dialetto SQL",
    "QGIS Expressions Rules": "Regole basate su espressioni QGIS",
    "Screenshot: Alpha Constrain List": "Schermata: elenco dei vincoli alfanumerici",
    "Screenshot: Editing Alpha Constrain Layer": "Schermata: vincolo alfanumerico sul layer",
    "Screenshot: Editing Alpha Constrain Layer Init": "Schermata: configurazione iniziale del vincolo alfanumerico",
    "Screenshot: Editing Alpha Constrain Setting": "Schermata: impostazioni del vincolo alfanumerico",
    "Screenshot: Editing Constrain Layer": "Schermata: vincoli sul layer",
    "Screenshot: Editing Geoconstrain Layer Summary": "Schermata: riepilogo dei vincoli geografici sul layer",
    "Screenshot: Editing Geoconstrain Setting": "Schermata: impostazioni del vincolo geografico",
    "Screenshot: Editing Qgisconstrain Setting": "Schermata: impostazioni dei vincoli QGIS",
    "Screenshot: Geo Constrain Layer Init": "Schermata: configurazione iniziale del vincolo geografico",
    "See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).": "Consulta il paragrafo dedicato alle funzioni disponibili nel [manuale di QGIS](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).",
    "The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)": "Le singole regole devono essere definite usando il **`linguaggio del provider`** o le **`regole del dialetto SQL`** associate al formato del layer con vincoli geografici (ad esempio, usa SQL standard se il layer è PostGIS).",
    "The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)": "Le singole regole devono essere definite usando il **`linguaggio del provider`** o le **`regole del dialetto SQL`** associate al formato del layer con vincoli geografici (ad esempio, usa SQL standard se il layer è PostGIS).",
    "The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.": "Le singole regole devono essere definite tramite **`espressioni QGIS`**, che offrono ampia flessibilità nella loro configurazione.",
    "The single rules must refer to the layer’s attributes and values.": "Ogni regola deve fare riferimento agli attributi e ai valori del layer.",
    "This setting is also available for the AnonymousUser user": "Questa impostazione è disponibile anche per l’utente AnonymousUser.",
    "To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![Icon: Constraints](/img/manual-english-icon-constraints.avif) which will appear once the online editing function is activated.": "Per attivare un vincolo geografico, fai clic sull’**icona `Gestisci vincoli geografici`** ![Icona: vincoli](/img/manual-english-icon-constraints.avif) nell’elenco dei layer del progetto; l’icona appare dopo aver attivato la funzione di modifica online.",
    "To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.avif).": "Per attivare questo tipo di vincolo, fai clic sull’**icona `Elenco vincoli alfanumerici`** ![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.avif) nell’elenco dei layer del progetto.",
    "display only": "sola visualizzazione",
    "editing only": "sola modifica",
    "in both cases": "entrambi"
  }
}
</script>
