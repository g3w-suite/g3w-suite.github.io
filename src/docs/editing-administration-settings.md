# Administration settings for editing

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration

### Administration settings

#### Activation of on-line editing on a single layer
To activate the online editing functions, access the **`Layer list`** section of the project within the administration panel of G3W-ADMIN.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Identify the layer on which you want to activate the editing function and click on the **`Editing layer` icon** ![Icon: Editing](/img/manual-english-icon-editing.png) located on the left

**Attention:** check that the layer format is among those supported by QGIS for the editing function

Clicking on the icon will open a modal window that will allow you to:
 * **Active:** activate the editing function
 * **Visible:** check on uncheck to show layer inside the list of layers to edit (useful for child layers in a 1:N relationship in order to allow editing only starting from the parent)
 * **Scale:** define the editing activation scale (only for geometric tables)
 * **define the Viewer users** (individuals or groups) **enabled** for online editing

For each user (single or group) it is possible to discriminate the editing powers:
 * **Add:** add feature, copy feature, add part to multipart
 * **Update geometry:** update vertex feature, move feature, add part to multipart, delete part from multipart, split features, dissolve features
 * **Update attributes:** update feature attributes, update attributes of selected features
 * **Delete:** delete features

I should be noted that:
 * **Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**
 * **Editor1 and Editor2 users**, **owners** of the project, are **enabled by default** to the online editing function

![Screenshot: Editing Setting](/img/manual-english-editing-setting.png)

**NB: In case a user belongs to a user group, the permissions set will be added together.**

##### Ability to associate references to create/update G3W-SUITE users

Through these two optional settings it is possible to define four fields of the table of the layer being edited automatically filled in.

These fields will contain references to G3W-SUITE users and users group who creators or modifiers of the individual features edited.

All settings defined at the QGIS level for these fields (eg default values) will no longer be considered.

It is recommended that these fields be set as non-editable at the project level.

#### Activation of online editing on multiple layers at the same time
In the case of a project in which it is necessary to activate the online editing function on many layers, by defining the same options for each of them it is possible to use the Project layer action function.

![Icon: Multi Layer](/img/manual-english-multi-layer-icon.png)

![Screenshot: Multi Layer Form](/img/manual-english-multi-layer-form.png)

#### Copy editing permission from a user to the others

In the case of complex projects with many users enabled for editing, it is possible to use this tool to duplicate the editing permissions defined for a user and apply them to other users (both individuals and groups).

![Icon: Editing Clone](/img/manual-english-editing-clone-icon.png)

![Screenshot: Editing Clone Setting](/img/manual-english-editing-clone-setting.png)

#### 1:N relational editing
To allow editing on the related table in mode 1: n , the **editing function must also be activated** (always in the same way) **also for the related table** present in the project layers list.

#### Constraints setting

**G3W-SUITE allows you to manage two types of constraints:**
 * **alphanumeric (SQL) / QGIS expressions constraints**
 * **geographic constraints**
 
Both work in terms of visualization and/or editing

For each constraint, click the **Save icon** ![Icon: Save](/img/manual-english-icon-save.png) to validate its rules, then click **Close** to confirm.

##### Alphanumeric (SQL) / QGIS expressions Constraints
**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png).

Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.

![Screenshot: Editing Alpha Constrain Layer](/img/manual-english-editing-alpha-constrain-layer.png)

Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.

In the form it is possible to specify whether this filter will act at the level:
 * display only
 * editing only
 * in both cases
 
![Screenshot: Editing Alpha Constrain Layer Init](/img/manual-english-editing-alpha-constrain-layer-init.png)


After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:  

 * ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.png) **Provider's language / SQL dialect**
 * ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.png) **QGIS Expression**


###### Provider's language / SQL dialect Rules
Clicking on the icon ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.png) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Alpha Constrain Setting](/img/manual-english-editing-alpha-constrain-setting.png)


###### QGIS Expressions Rules
Clicking on the icon **QGIS expression rules** ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.png) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.

See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).

![Screenshot: Editing Qgisconstrain Setting](/img/manual-english-editing-qgisconstrain-setting.png)

In the dedicated panel it will be possible to check, modify and delete the defined rules.

![Screenshot: Alpha Constrain List](/img/manual-english-alpha-constrain-list.png)


##### Geo-constraints
**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**

This setting is also available for the AnonymousUser user

To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![Icon: Constraints](/img/manual-english-icon-constraints.png) which will appear once the online editing function is activated.

Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.

![Screenshot: Editing Constrain Layer](/img/manual-english-editing-constrain-layer.png)

Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.

In the form it is possible to specify whether this filter will act at the level:
 * display only
 * editing only
 * in both cases

![Screenshot: Geo Constrain Layer Init](/img/manual-english-geo-constrain-layer-init.png)


Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![Icon: Constraints Setting](/img/manual-english-icon-constraints-setting.png)

Clicking on this icon will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Geoconstrain Setting](/img/manual-english-editing-geoconstrain-setting.png)

In the alphanumeric constraints list you can see a summary of the setted rules.

![Screenshot: Editing Geoconstrain Layer Summary](/img/manual-english-editing-geoconstrain-layer-summary.png)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.png) **Provider's language / SQL dialect**": "![Icona: impostazioni vincoli alfanumerici](/img/manual-english-icon-alphaconstraints-setting.png) **Linguaggio del provider / dialetto SQL**",
    "![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.png) **QGIS Expression**": "![Icona: impostazioni vincoli QGIS](/img/manual-english-icon-qgisconstraints-setting.png) **Espressione QGIS**",
    "**Active:** activate the editing function": "**Attivo:** attiva la funzione di modifica",
    "**Add:** add feature, copy feature, add part to multipart": "**Aggiungi:** aggiunta e copia di elementi, aggiunta di una parte a una geometria multiparte",
    "**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**": "**I vincoli alfanumerici (SQL) e basati su espressioni QGIS consentono di definire, per ogni layer pubblicato, il sottoinsieme di elementi che ciascun utente o gruppo può visualizzare e/o modificare.**",
    "**alphanumeric (SQL) / QGIS expressions constraints**": "**vincoli alfanumerici (SQL) / espressioni QGIS**",
    "**Attention:** check that the layer format is among those supported by QGIS for the editing function": "**Attenzione:** verifica che il formato del layer sia tra quelli supportati da QGIS per la modifica.",
    "**define the Viewer users** (individuals or groups) **enabled** for online editing": "**definire gli utenti Viewer** (singoli o gruppi) **autorizzati** alla modifica online",
    "**Delete:** delete features": "**Elimina:** elimina elementi",
    "**Editor1 and Editor2 users**, **owners** of the project, are **enabled by default** to the online editing function": "Gli utenti **Editor1 ed Editor2**, **proprietari** del progetto, sono **abilitati per impostazione predefinita** alla modifica online",
    "**G3W-SUITE allows you to manage two types of constraints:**": "**G3W-SUITE consente di gestire due tipi di vincoli:**",
    "**geographic constraints**": "**vincoli geografici**",
    "**NB: In case a user belongs to a user group, the permissions set will be added together.**": "**NB: se un utente appartiene a un gruppo, i permessi impostati si sommano.**",
    "**Scale:** define the editing activation scale (only for geometric tables)": "**Scala:** definisce la scala di attivazione della modifica (solo per le tabelle geometriche)",
    "**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**": "**La funzione di modifica online consente di gestire vincoli geografici che permettono all’utente di visualizzare e/o modificare gli elementi solo se intersecano o sono contenuti in elementi specifici di un secondo layer poligonale.**",
    "**Update attributes:** update feature attributes, update attributes of selected features": "**Aggiorna attributi:** modifica degli attributi di un elemento o degli elementi selezionati",
    "**Update geometry:** update vertex feature, move feature, add part to multipart, delete part from multipart, split features, dissolve features": "**Aggiorna geometria:** modifica dei vertici, spostamento degli elementi, aggiunta o eliminazione di parti da geometrie multipart, divisione e fusione degli elementi",
    "**Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**": "Nel menu a discesa saranno **disponibili solo gli utenti Viewer** (singoli o gruppi) **autorizzati a consultare il progetto WebGIS**",
    "**Visible:** check on uncheck to show layer inside the list of layers to edit (useful for child layers in a 1:N relationship in order to allow editing only starting from the parent)": "**Visibile:** seleziona o deseleziona per mostrare il layer nell’elenco dei layer modificabili (utile per i layer figli in una relazione 1:N, per consentire la modifica solo a partire dal padre)",
    "1:N relational editing": "Modifica relazionale 1:N",
    "Ability to associate references to create/update G3W-SUITE users": "Possibilità di associare riferimenti per la creazione/modifica degli utenti G3W-SUITE",
    "Activation and configuration": "Attivazione e configurazione",
    "Activation of on-line editing on a single layer": "Attivazione della modifica online su un singolo layer",
    "Activation of online editing on multiple layers at the same time": "Attivazione della modifica online su più layer contemporaneamente",
    "Administration settings": "Impostazioni di amministrazione",
    "Administration settings for editing": "Impostazioni di amministrazione per le modifiche",
    "After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:": "Dopo aver fatto clic su OK, il vincolo appare nell’elenco e può essere configurato definendo le regole in due modi:",
    "All settings defined at the QGIS level for these fields (eg default values) will no longer be considered.": "Le impostazioni definite in QGIS per questi campi (ad esempio i valori predefiniti) non verranno più considerate.",
    "Alphanumeric (SQL) / QGIS expressions Constraints": "Vincoli alfanumerici (SQL) / espressioni QGIS",
    "Back to Online editing": "Torna alle modifiche online",
    "Both work in terms of visualization and/or editing": "Entrambi possono agire sulla visualizzazione e/o sulla modifica.",
    "Button: Add": "Pulsante: aggiungi",
    "Clicking on the icon ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.png) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic sull’icona ![Icona: impostazioni vincoli alfanumerici](/img/manual-english-icon-alphaconstraints-setting.png) si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.png), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Clicking on the icon **QGIS expression rules** ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.png) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic sull’icona **Regole con espressioni QGIS** ![Icona: impostazioni vincoli QGIS](/img/manual-english-icon-qgisconstraints-setting.png) si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.png), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Clicking on the icon will open a modal window that will allow you to:": "Facendo clic sull’icona si apre una finestra modale che consente di:",
    "Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.": "Facendo clic sull’icona viene mostrato l’elenco dei vincoli alfanumerici esistenti e la voce **`+ Nuovo vincolo alfanumerico`** per crearne uno.",
    "Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.": "Facendo clic sull’icona viene mostrato l’elenco dei vincoli esistenti e la voce **`+ Nuovo vincolo geografico`** per crearne uno.",
    "Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.": "Facendo clic sulla voce **`+ Nuovo vincolo`** si apre una finestra modale in cui è possibile definire il nome e la descrizione del nuovo vincolo.",
    "Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.": "Facendo clic sulla voce **`+ Nuovo vincolo geografico`** si apre una finestra modale che consente di **definire il layer poligonale** (tra quelli presenti nel progetto) **su cui basare il vincolo**.",
    "Clicking on this icon will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.": "Facendo clic su questa icona si apre una finestra modale in cui, premendo il pulsante verde ![Pulsante: aggiungi](/img/manual-english-button-add.png), è possibile **definire le regole dei vincoli per ogni utente e/o gruppo di utenti**.",
    "Constraints setting": "Impostazione dei vincoli",
    "Copy editing permission from a user to the others": "Copia dei permessi di modifica da un utente ad altri",
    "display only": "sola visualizzazione",
    "editing only": "sola modifica",
    "For each constraint, click the **Save icon** ![Icon: Save](/img/manual-english-icon-save.png) to validate its rules, then click **Close** to confirm.": "Per ogni vincolo, fai clic sull’**icona Salva** ![Icona: salva](/img/manual-english-icon-save.png) per convalidarne le regole, quindi fai clic su **Close** per confermare.",
    "For each user (single or group) it is possible to discriminate the editing powers:": "Per ogni utente, singolo o appartenente a un gruppo, è possibile specificare i permessi di modifica:",
    "Geo-constraints": "Vincoli geografici",
    "I should be noted that:": "È importante notare che:",
    "Icon: Alpha Constraints": "Icona: vincoli alfanumerici",
    "Icon: Alphaconstraints Setting": "Icona: impostazioni dei vincoli alfanumerici",
    "Icon: Constraints": "Icona: vincoli",
    "Icon: Constraints Setting": "Icona: impostazioni dei vincoli",
    "Icon: Editing": "Icona: modifica",
    "Icon: Editing Clone": "Icona: duplica permessi di modifica",
    "Icon: Multi Layer": "Icona: layer multipli",
    "Icon: Qgisconstraints Setting": "Icona: impostazioni dei vincoli QGIS",
    "Icon: Save": "Icona: salva",
    "Identify the layer on which you want to activate the editing function and click on the **`Editing layer` icon** ![Icon: Editing](/img/manual-english-icon-editing.png) located on the left": "Individua il layer su cui vuoi attivare la funzione di modifica e fai clic sull’**icona `Modifica layer`** ![Icona: modifica](/img/manual-english-icon-editing.png) a sinistra",
    "in both cases": "entrambi",
    "In the alphanumeric constraints list you can see a summary of the setted rules.": "Nell’elenco dei vincoli alfanumerici è possibile consultare un riepilogo delle regole impostate.",
    "In the case of a project in which it is necessary to activate the online editing function on many layers, by defining the same options for each of them it is possible to use the Project layer action function.": "Se in un progetto è necessario attivare la modifica online su molti layer con le stesse opzioni, è possibile usare la funzione Azione sui layer del progetto.",
    "In the case of complex projects with many users enabled for editing, it is possible to use this tool to duplicate the editing permissions defined for a user and apply them to other users (both individuals and groups).": "Nei progetti complessi con molti utenti abilitati alla modifica, questo strumento consente di duplicare i permessi di un utente e applicarli ad altri utenti, singoli o appartenenti a gruppi.",
    "In the dedicated panel it will be possible to check, modify and delete the defined rules.": "Nel pannello dedicato è possibile verificare, modificare ed eliminare le regole definite.",
    "In the form it is possible to specify whether this filter will act at the level:": "Nel modulo è possibile specificare se il filtro agisce su:",
    "It is recommended that these fields be set as non-editable at the project level.": "Si consiglia di impostare questi campi come non modificabili a livello di progetto.",
    "Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![Icon: Constraints Setting](/img/manual-english-icon-constraints-setting.png)": "Dopo aver definito il layer, il vincolo appare nell’elenco e può essere configurato tramite l’**icona Regole** ![Icona: impostazioni dei vincoli](/img/manual-english-icon-constraints-setting.png)",
    "Provider's language / SQL dialect Rules": "Regole in linguaggio del provider / dialetto SQL",
    "QGIS Expressions Rules": "Regole basate su espressioni QGIS",
    "Screenshot: Alpha Constrain List": "Schermata: elenco dei vincoli alfanumerici",
    "Screenshot: Editing Alpha Constrain Layer": "Schermata: vincolo alfanumerico sul layer",
    "Screenshot: Editing Alpha Constrain Layer Init": "Schermata: configurazione iniziale del vincolo alfanumerico",
    "Screenshot: Editing Alpha Constrain Setting": "Schermata: impostazioni del vincolo alfanumerico",
    "Screenshot: Editing Clone Setting": "Schermata: impostazioni di duplicazione dei permessi",
    "Screenshot: Editing Constrain Layer": "Schermata: vincoli sul layer",
    "Screenshot: Editing Geoconstrain Layer Summary": "Schermata: riepilogo dei vincoli geografici sul layer",
    "Screenshot: Editing Geoconstrain Setting": "Schermata: impostazioni del vincolo geografico",
    "Screenshot: Editing Qgisconstrain Setting": "Schermata: impostazioni dei vincoli QGIS",
    "Screenshot: Editing Setting": "Schermata: impostazioni di modifica",
    "Screenshot: G3W-SUITE Administration Project Layer List": "Schermata: elenco layer del progetto nell’amministrazione G3W-SUITE",
    "Screenshot: Geo Constrain Layer Init": "Schermata: configurazione iniziale del vincolo geografico",
    "Screenshot: Multi Layer Form": "Schermata: modulo per layer multipli",
    "See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).": "Consulta il paragrafo dedicato alle funzioni disponibili nel [manuale di QGIS](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).",
    "The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)": "Le singole regole devono essere definite usando il **`linguaggio del provider`** o le **`regole del dialetto SQL`** associate al formato del layer con vincoli geografici (ad esempio, usa SQL standard se il layer è PostGIS).",
    "The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)": "Le singole regole devono essere definite usando il **`linguaggio del provider`** o le **`regole del dialetto SQL`** associate al formato del layer con vincoli geografici (ad esempio, usa SQL standard se il layer è PostGIS).",
    "The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.": "Le singole regole devono essere definite tramite **`espressioni QGIS`**, che offrono ampia flessibilità nella loro configurazione.",
    "The single rules must refer to the layer’s attributes and values.": "Ogni regola deve fare riferimento agli attributi e ai valori del layer.",
    "These fields will contain references to G3W-SUITE users and users group who creators or modifiers of the individual features edited.": "Questi campi conterranno i riferimenti agli utenti e ai gruppi di utenti G3W-SUITE che hanno creato o modificato i singoli elementi.",
    "This setting is also available for the AnonymousUser user": "Questa impostazione è disponibile anche per l’utente AnonymousUser.",
    "Through these two optional settings it is possible to define four fields of the table of the layer being edited automatically filled in.": "Con queste due impostazioni facoltative è possibile definire quattro campi della tabella del layer in modifica da compilare automaticamente.",
    "To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![Icon: Constraints](/img/manual-english-icon-constraints.png) which will appear once the online editing function is activated.": "Per attivare un vincolo geografico, fai clic sull’**icona `Gestisci vincoli geografici`** ![Icona: vincoli](/img/manual-english-icon-constraints.png) nell’elenco dei layer del progetto; l’icona appare dopo aver attivato la funzione di modifica online.",
    "To activate the online editing functions, access the **`Layer list`** section of the project within the administration panel of G3W-ADMIN.": "Per attivare le funzioni di modifica online, apri la sezione **`Elenco layer`** del progetto nel pannello di amministrazione di G3W-ADMIN.",
    "To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png).": "Per attivare questo tipo di vincolo, fai clic sull’**icona `Elenco vincoli alfanumerici`** ![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.png) nell’elenco dei layer del progetto.",
    "To allow editing on the related table in mode 1: n , the **editing function must also be activated** (always in the same way) **also for the related table** present in the project layers list.": "Per consentire la modifica della tabella correlata in modalità 1:n, è necessario attivare la **funzione di modifica anche per la tabella correlata** presente nell’elenco dei layer del progetto, seguendo la stessa procedura."
  }
}
</script>
