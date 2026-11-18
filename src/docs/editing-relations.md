# Editing related records

## 1:N and N:M related tables editing
**Relational editing** requires:
 * on the published QGIS project there are one or more geographic layers related (1:N) with one or more alphanumeric tables
 * on the administration panel the editing function has been activated both on the parent layer and on the child layers
 * the operator user is enabled for the editing function on these layers

**The activation, at the cartographic client level, of the editing mode on the parent layer automatically determines the possibility of also managing the information on the related table.**

**Important:** to be able to edit related data, the relations must be inserted in the form of the parent layer, defined using the Drag and Drop designer method in the Layer Properties.

After the editing has been activated on a record in the parent table, an editing icon (pen) will appear at the level of the relations references.

![Screenshot: Editing Form2](/img/manual-english-editing-form2.avif)

Moving on the macro tab relating to one of the child layers, the list of records already associated with the edited feature will be displayed

![Screenshot: Editing Form Relations](/img/manual-english-editing-form-relations.avif)

Clicking on it the form switch in a session dedicated to the edit of the relational table where it will be possible: **create and add a new records** related to the edited feature
 * **associate an existing records** (linked to other features or orphan) to the edited feature
 * **modify the records** currently associated with the edited feature

### Creation of a new related child records

To add a new record in the child layer, you first need to access the relations itself.

By clicking on the icon **`Create and link a new relation`** ![Icon: Plus](/img/manual-english-icon-plus.avif)(located at the top right) it will be show the attribute form to insert a new record.

You can fill in the individual attributes and save the new record. **The change must be validated by clicking on the `Save` button at the bottom of the form.**

If the child layer is of the geometric type, it will be possible to add a new feature in two ways:

 * **classic geometry editing**
 * **copy and paste a feature from other layers (WFS included)** present in the project and characterized by the same type of geometry

![Screenshot: Editing Form Relations](/img/manual-english-editing-form-relations.avif)

To copy a geometry from another layer operate in this order:
 * choose the layer from which to copy the feature from the **Copy feature from other layer** drop-down menu
   * the layers shown will be in accordance with the geometry of the edited layer
   * the layers settable not querable in the QGIS project will not be shown
   * the layers shown also include those added to the map by the user using the **AddLayer** tool 
   * neither the layer being edited (child of the relation) nor the parent layer of the relation will be shown in the list
 * click on the **Copy** button below
 * on the map, click on the feature to copy relating to the chosen layer
 * fill in the attributes associated with the new feature created
 * click on the green **Save and exit** button

### Association of an existing record
By clicking on the icon **`Join a relation to this feature`** ![Icon: Join](/img/manual-english-icon-join.avif) (located at the top right) you can associate a record, already linked to other features or orphaned, to the edited feature.

In the new window displayed:
 * the list of all orphaned or already associated records will be displayed;
 * a generic filter will allow you to locate the record of interest;
 * by clicking on the individual records these will be associated with the edited features and, possibly, dissociated from other features

### Modification of an already associated record
A series of icons appear to the right of each record associated with the edited feature.


In the case of 1:N relations with alphanumeric layers:
 * ![Icon: Record Attribute](/img/manual-english-icon-record-attribute.avif)**Update feature attribute:** modify the values associated with the attributes of this record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Copy](/img/manual-english-icon-record-copy.avif)**Copy feature:** duplicate a record with the possibility to change the values in the new record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Erase](/img/manual-english-icon-record-erase.avif) **Delete feature:** permanently delete the record


In the case of 1:N relations with vectorial layers:
 * ![Icon: Record Attribute](/img/manual-english-icon-record-attribute.avif) **Update feature attribute:** modify the values associated with the attributes of this feature; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Erase](/img/manual-english-icon-record-erase.avif) **Delete feature:** permanently delete the record
 * ![Icon: Feature Modify](/img/manual-english-icon-feature-modify.avif) **Update deature vertex:** modify the shape of the geometry
 * ![Icon: Feature Move](/img/manual-english-icon-feature-move.avif) **Move feature:** move the geometry
 * ![Icon: Join Erase](/img/manual-english-icon-join-erase.avif) **Unlink relation:** to dissociate the record from the edited feature, the record will not be deleted but will become an orphan


### Saving changes
Saving all the changes made in an editing session can be done in three ways:
 * by clicking on the **`diskette icon`** ![Icon: Save All](/img/manual-english-icon-save-all.avif) placed at the top right. This icon is very useful in the case of complex projects with related data on various levels as it allows you to **save any changes made regardless of the form on which you are at the time of saving.** You will not be asked to confirm the save.
  * by clicking on the **`diskette icon`** ![Icon: Disk](/img/manual-english-icon-disk.avif) placed at the top left of the TOC. The icon will only be active once you exit the attribute editing form. The changes made will be saved and you can continue making new changes. You will not be asked to confirm the save.
 * exiting edit mode by clicking on the **`Edit layer icon`** ![Icon: Editing](/img/manual-english-icon-editing.avif).
 
Exiting edit mode, a modal window will be displayed which will show the list of changes made and the request for confirmation or not of saving them.

![Screenshot: Editing Client Save](/img/manual-english-editing-client-save.avif)

Remember that during the editing phase the **undo/redo icons** allow you to delete/restore the latest changes made.

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Feature Modify](/img/manual-english-icon-feature-modify.avif) **Update deature vertex:** modify the shape of the geometry": "![Icona: Modifica elemento](/img/manual-english-icon-feature-modify.avif) **Aggiorna vertici dell’elemento:** modifica la forma della geometria",
    "![Icon: Feature Move](/img/manual-english-icon-feature-move.avif) **Move feature:** move the geometry": "![Icona: Sposta elemento](/img/manual-english-icon-feature-move.avif) **Sposta elemento:** sposta la geometria",
    "![Icon: Join Erase](/img/manual-english-icon-join-erase.avif) **Unlink relation:** to dissociate the record from the edited feature, the record will not be deleted but will become an orphan": "![Icona: Rimuovi collegamento](/img/manual-english-icon-join-erase.avif) **Scollega relazione:** dissocia il record dall’elemento in modifica senza eliminarlo; il record diventerà orfano",
    "![Icon: Record Attribute](/img/manual-english-icon-record-attribute.avif) **Update feature attribute:** modify the values associated with the attributes of this feature; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Attributi record](/img/manual-english-icon-record-attribute.avif) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi dell’elemento; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Attribute](/img/manual-english-icon-record-attribute.avif)**Update feature attribute:** modify the values associated with the attributes of this record; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Attributi record](/img/manual-english-icon-record-attribute.avif) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi di questo record; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Copy](/img/manual-english-icon-record-copy.avif)**Copy feature:** duplicate a record with the possibility to change the values in the new record; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Copia record](/img/manual-english-icon-record-copy.avif) **Copia elemento:** duplica un record consentendo di modificarne i valori; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Erase](/img/manual-english-icon-record-erase.avif) **Delete feature:** permanently delete the record": "![Icona: Elimina record](/img/manual-english-icon-record-erase.avif) **Elimina elemento:** elimina definitivamente il record",
    "**Important:** to be able to edit related data, the relations must be inserted in the form of the parent layer, defined using the Drag and Drop designer method in the Layer Properties.": "**Importante:** per modificare i dati correlati, le relazioni devono essere inserite nel modulo del layer padre, definito con il metodo Drag and Drop nelle Proprietà layer.",
    "**Relational editing** requires:": "**La modifica relazionale** richiede:",
    "**The activation, at the cartographic client level, of the editing mode on the parent layer automatically determines the possibility of also managing the information on the related table.**": "**L’attivazione della modalità di modifica sul layer padre nel client cartografico consente automaticamente di gestire anche le informazioni della tabella correlata.**",
    "**associate an existing records** (linked to other features or orphan) to the edited feature": "**associare un record esistente** (collegato ad altri elementi o orfano) all’elemento in modifica",
    "**classic geometry editing**": "**modifica geometrica classica**",
    "**copy and paste a feature from other layers (WFS included)** present in the project and characterized by the same type of geometry": "**copiare e incollare un elemento da altri layer (compresi i WFS)** presenti nel progetto e con lo stesso tipo di geometria",
    "**modify the records** currently associated with the edited feature": "**modificare i record** attualmente associati all’elemento in modifica",
    "1:N and N:M related tables editing": "Modifica delle tabelle correlate 1:N e N:M",
    "A series of icons appear to the right of each record associated with the edited feature.": "A destra di ogni record associato all’elemento in modifica appaiono diverse icone.",
    "After the editing has been activated on a record in the parent table, an editing icon (pen) will appear at the level of the relations references.": "Dopo aver attivato la modifica di un record nella tabella padre, accanto ai riferimenti delle relazioni appare un’icona di modifica (matita).",
    "Association of an existing record": "Associazione di un record esistente",
    "By clicking on the icon **`Create and link a new relation`** ![Icon: Plus](/img/manual-english-icon-plus.avif)(located at the top right) it will be show the attribute form to insert a new record.": "Facendo clic sull’icona **`Crea e collega una nuova relazione`** ![Icona: aggiungi](/img/manual-english-icon-plus.avif) (in alto a destra), viene mostrato il modulo attributi per inserire un nuovo record.",
    "By clicking on the icon **`Join a relation to this feature`** ![Icon: Join](/img/manual-english-icon-join.avif) (located at the top right) you can associate a record, already linked to other features or orphaned, to the edited feature.": "Facendo clic sull’icona **`Collega una relazione a questo elemento`** ![Icona: collega](/img/manual-english-icon-join.avif) (in alto a destra), è possibile associare all’elemento in modifica un record già collegato ad altri elementi o orfano.",
    "Clicking on it the form switch in a session dedicated to the edit of the relational table where it will be possible: **create and add a new records** related to the edited feature": "Facendo clic su di essa, il modulo passa alla sezione dedicata alla modifica della tabella relazionale, dove è possibile **creare e aggiungere nuovi record** associati all’elemento in modifica",
    "Creation of a new related child records": "Creazione di un nuovo record figlio correlato",
    "Editing related records": "Modificare i record correlati",
    "Exiting edit mode, a modal window will be displayed which will show the list of changes made and the request for confirmation or not of saving them.": "Uscendo dalla modalità di modifica, viene mostrata una finestra modale con l’elenco delle modifiche e la richiesta di confermarne o meno il salvataggio.",
    "Icon: Disk": "Icona: dischetto",
    "Icon: Editing": "Icona: modifica",
    "Icon: Feature Modify": "Icona: modifica elemento",
    "Icon: Feature Move": "Icona: sposta elemento",
    "Icon: Join": "Icona: collega",
    "Icon: Join Erase": "Icona: scollega relazione",
    "Icon: Plus": "Icona: aggiungi",
    "Icon: Record Attribute": "Icona: attributi del record",
    "Icon: Record Copy": "Icona: copia record",
    "Icon: Record Erase": "Icona: elimina record",
    "Icon: Save All": "Icona: salva tutto",
    "If the child layer is of the geometric type, it will be possible to add a new feature in two ways:": "Se il layer figlio è geometrico, è possibile aggiungere un nuovo elemento in due modi:",
    "In the case of 1:N relations with alphanumeric layers:": "Per le relazioni 1:N con layer alfanumerici:",
    "In the case of 1:N relations with vectorial layers:": "Per le relazioni 1:N con layer vettoriali:",
    "In the new window displayed:": "Nella nuova finestra visualizzata:",
    "Modification of an already associated record": "Modifica di un record già associato",
    "Moving on the macro tab relating to one of the child layers, the list of records already associated with the edited feature will be displayed": "Selezionando la scheda relativa a uno dei layer figli, viene mostrato l’elenco dei record già associati all’elemento in modifica.",
    "Remember that during the editing phase the **undo/redo icons** allow you to delete/restore the latest changes made.": "Durante la modifica, le **icone Annulla/Ripristina** consentono di annullare o ripristinare le ultime modifiche.",
    "Saving all the changes made in an editing session can be done in three ways:": "È possibile salvare tutte le modifiche apportate durante una sessione in tre modi:",
    "Saving changes": "Salvataggio delle modifiche",
    "Screenshot: Editing Client Save": "Schermata: salvataggio delle modifiche nel client",
    "Screenshot: Editing Form": "Schermata: modulo di modifica",
    "Screenshot: Editing Form Relations": "Schermata: modulo delle relazioni di modifica",
    "Screenshot: Editing Form2": "Schermata: modulo di modifica 2",
    "To add a new record in the child layer, you first need to access the relations itself.": "Per aggiungere un nuovo record al layer figlio, è necessario prima aprire la relazione.",
    "To copy a geometry from another layer operate in this order:": "Per copiare una geometria da un altro layer, procedi nell’ordine seguente:",
    "You can fill in the individual attributes and save the new record. **The change must be validated by clicking on the `Save` button at the bottom of the form.**": "È possibile compilare i singoli attributi e salvare il nuovo record. **Per confermare la modifica, fai clic sul pulsante `Save` in fondo al modulo.**",
    "a generic filter will allow you to locate the record of interest;": "un filtro generico consente di trovare il record desiderato;",
    "by clicking on the **`diskette icon`** ![Icon: Disk](/img/manual-english-icon-disk.avif) placed at the top left of the TOC. The icon will only be active once you exit the attribute editing form. The changes made will be saved and you can continue making new changes. You will not be asked to confirm the save.": "facendo clic sull’**`icona del dischetto`** ![Icona: dischetto](/img/manual-english-icon-disk.avif) in alto a sinistra nella TOC. L’icona si attiva solo dopo essere usciti dal modulo di modifica degli attributi. Le modifiche vengono salvate ed è possibile continuare a modificarle. Non viene richiesta conferma.",
    "by clicking on the **`diskette icon`** ![Icon: Save All](/img/manual-english-icon-save-all.avif) placed at the top right. This icon is very useful in the case of complex projects with related data on various levels as it allows you to **save any changes made regardless of the form on which you are at the time of saving.** You will not be asked to confirm the save.": "facendo clic sull’**`icona del dischetto`** ![Icona: salva tutto](/img/manual-english-icon-save-all.avif) in alto a destra. Questa icona è molto utile nei progetti complessi con dati correlati su più livelli, perché consente di **salvare tutte le modifiche apportate indipendentemente dal modulo aperto al momento del salvataggio.** Non viene richiesta conferma.",
    "by clicking on the individual records these will be associated with the edited features and, possibly, dissociated from other features": "facendo clic sui singoli record, questi vengono associati all’elemento in modifica e, se necessario, dissociati dagli altri elementi",
    "choose the layer from which to copy the feature from the **Copy feature from other layer** drop-down menu": "scegli il layer da cui copiare l’elemento dal menu a discesa **Copia elemento da un altro layer**",
    "click on the **Copy** button below": "fai clic sul pulsante **Copy** sottostante",
    "click on the green **Save and exit** button": "fai clic sul pulsante verde **Save and exit**",
    "exiting edit mode by clicking on the **`Edit layer icon`** ![Icon: Editing](/img/manual-english-icon-editing.avif).": "uscendo dalla modalità di modifica facendo clic sull’**`icona Modifica layer`** ![Icona: modifica](/img/manual-english-icon-editing.avif).",
    "fill in the attributes associated with the new feature created": "compila gli attributi associati al nuovo elemento creato",
    "neither the layer being edited (child of the relation) nor the parent layer of the relation will be shown in the list": "nell’elenco non saranno mostrati né il layer in modifica (figlio della relazione) né il layer padre della relazione",
    "on the administration panel the editing function has been activated both on the parent layer and on the child layers": "nel pannello di amministrazione la funzione di modifica sia attivata sia sul layer padre sia sui layer figli",
    "on the map, click on the feature to copy relating to the chosen layer": "fai clic sulla mappa sull’elemento da copiare del layer scelto",
    "on the published QGIS project there are one or more geographic layers related (1:N) with one or more alphanumeric tables": "nel progetto QGIS pubblicato siano presenti uno o più layer geografici correlati (1:N) a una o più tabelle alfanumeriche",
    "the layers settable not querable in the QGIS project will not be shown": "non saranno mostrati i layer impostati come non interrogabili nel progetto QGIS",
    "the layers shown also include those added to the map by the user using the **AddLayer** tool": "tra i layer mostrati sono inclusi anche quelli aggiunti dall’utente alla mappa tramite lo strumento **AddLayer**",
    "the layers shown will be in accordance with the geometry of the edited layer": "i layer mostrati saranno compatibili con la geometria del layer in modifica",
    "the list of all orphaned or already associated records will be displayed;": "viene mostrato l’elenco di tutti i record orfani o già associati;",
    "the operator user is enabled for the editing function on these layers": "l’utente operatore sia autorizzato a modificare questi layer"
  }
}
</script>
