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

[Editing constraints](editing-constraints.md)

<script type="application/json" data-i18n>
{
  "it": {
    "**Active:** activate the editing function": "**Attivo:** attiva la funzione di modifica",
    "**Add:** add feature, copy feature, add part to multipart": "**Aggiungi:** aggiunta e copia di elementi, aggiunta di una parte a una geometria multiparte",
    "**Attention:** check that the layer format is among those supported by QGIS for the editing function": "**Attenzione:** verifica che il formato del layer sia tra quelli supportati da QGIS per la modifica.",
    "**Delete:** delete features": "**Elimina:** elimina elementi",
    "**Editor1 and Editor2 users**, **owners** of the project, are **enabled by default** to the online editing function": "Gli utenti **Editor1 ed Editor2**, **proprietari** del progetto, sono **abilitati per impostazione predefinita** alla modifica online",
    "**NB: In case a user belongs to a user group, the permissions set will be added together.**": "**NB: se un utente appartiene a un gruppo, i permessi impostati si sommano.**",
    "**Scale:** define the editing activation scale (only for geometric tables)": "**Scala:** definisce la scala di attivazione della modifica (solo per le tabelle geometriche)",
    "**Update attributes:** update feature attributes, update attributes of selected features": "**Aggiorna attributi:** modifica degli attributi di un elemento o degli elementi selezionati",
    "**Update geometry:** update vertex feature, move feature, add part to multipart, delete part from multipart, split features, dissolve features": "**Aggiorna geometria:** modifica dei vertici, spostamento degli elementi, aggiunta o eliminazione di parti da geometrie multipart, divisione e fusione degli elementi",
    "**Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**": "Nel menu a discesa saranno **disponibili solo gli utenti Viewer** (singoli o gruppi) **autorizzati a consultare il progetto WebGIS**",
    "**Visible:** check on uncheck to show layer inside the list of layers to edit (useful for child layers in a 1:N relationship in order to allow editing only starting from the parent)": "**Visibile:** seleziona o deseleziona per mostrare il layer nell’elenco dei layer modificabili (utile per i layer figli in una relazione 1:N, per consentire la modifica solo a partire dal padre)",
    "**define the Viewer users** (individuals or groups) **enabled** for online editing": "**definire gli utenti Viewer** (singoli o gruppi) **autorizzati** alla modifica online",
    "1:N relational editing": "Modifica relazionale 1:N",
    "Ability to associate references to create/update G3W-SUITE users": "Possibilità di associare riferimenti per la creazione/modifica degli utenti G3W-SUITE",
    "Activation and configuration": "Attivazione e configurazione",
    "Activation of on-line editing on a single layer": "Attivazione della modifica online su un singolo layer",
    "Activation of online editing on multiple layers at the same time": "Attivazione della modifica online su più layer contemporaneamente",
    "Administration settings": "Impostazioni di amministrazione",
    "Administration settings for editing": "Impostazioni di amministrazione per le modifiche",
    "All settings defined at the QGIS level for these fields (eg default values) will no longer be considered.": "Le impostazioni definite in QGIS per questi campi (ad esempio i valori predefiniti) non verranno più considerate.",
    "Back to Online editing": "Torna alle modifiche online",
    "Clicking on the icon will open a modal window that will allow you to:": "Facendo clic sull’icona si apre una finestra modale che consente di:",
    "Copy editing permission from a user to the others": "Copia dei permessi di modifica da un utente ad altri",
    "Editing constraints": "Vincoli per la modifica",
    "For each user (single or group) it is possible to discriminate the editing powers:": "Per ogni utente, singolo o appartenente a un gruppo, è possibile specificare i permessi di modifica:",
    "I should be noted that:": "È importante notare che:",
    "Icon: Editing": "Icona: modifica",
    "Icon: Editing Clone": "Icona: duplica permessi di modifica",
    "Icon: Multi Layer": "Icona: layer multipli",
    "Identify the layer on which you want to activate the editing function and click on the **`Editing layer` icon** ![Icon: Editing](/img/manual-english-icon-editing.png) located on the left": "Individua il layer su cui vuoi attivare la funzione di modifica e fai clic sull’**icona `Modifica layer`** ![Icona: modifica](/img/manual-english-icon-editing.png) a sinistra",
    "In the case of a project in which it is necessary to activate the online editing function on many layers, by defining the same options for each of them it is possible to use the Project layer action function.": "Se in un progetto è necessario attivare la modifica online su molti layer con le stesse opzioni, è possibile usare la funzione Azione sui layer del progetto.",
    "In the case of complex projects with many users enabled for editing, it is possible to use this tool to duplicate the editing permissions defined for a user and apply them to other users (both individuals and groups).": "Nei progetti complessi con molti utenti abilitati alla modifica, questo strumento consente di duplicare i permessi di un utente e applicarli ad altri utenti, singoli o appartenenti a gruppi.",
    "It is recommended that these fields be set as non-editable at the project level.": "Si consiglia di impostare questi campi come non modificabili a livello di progetto.",
    "Screenshot: Editing Clone Setting": "Schermata: impostazioni di duplicazione dei permessi",
    "Screenshot: Editing Setting": "Schermata: impostazioni di modifica",
    "Screenshot: G3W-SUITE Administration Project Layer List": "Schermata: elenco layer del progetto nell’amministrazione G3W-SUITE",
    "Screenshot: Multi Layer Form": "Schermata: modulo per layer multipli",
    "These fields will contain references to G3W-SUITE users and users group who creators or modifiers of the individual features edited.": "Questi campi conterranno i riferimenti agli utenti e ai gruppi di utenti G3W-SUITE che hanno creato o modificato i singoli elementi.",
    "Through these two optional settings it is possible to define four fields of the table of the layer being edited automatically filled in.": "Con queste due impostazioni facoltative è possibile definire quattro campi della tabella del layer in modifica da compilare automaticamente.",
    "To activate the online editing functions, access the **`Layer list`** section of the project within the administration panel of G3W-ADMIN.": "Per attivare le funzioni di modifica online, apri la sezione **`Elenco layer`** del progetto nel pannello di amministrazione di G3W-ADMIN.",
    "To allow editing on the related table in mode 1: n , the **editing function must also be activated** (always in the same way) **also for the related table** present in the project layers list.": "Per consentire la modifica della tabella correlata in modalità 1:n, è necessario attivare la **funzione di modifica anche per la tabella correlata** presente nell’elenco dei layer del progetto, seguendo la stessa procedura.",
    "editing only": "sola modifica"
  }
}
</script>
