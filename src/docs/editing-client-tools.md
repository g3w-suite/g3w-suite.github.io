# Online editing tools in the cartographic client

[Back to Online editing](g3wsuite_editing.md)

## Online editing tools on cartographic client

### Geographic and alphanumeric editing

**Once the online editing function has been activated and configured on one or more layers of a WebGis project, the `Editing layers` item, in the left bar of the cartographic client, will be shown.**

A click on the Editing layers item will allow you to go to the dedicated panel.

![Screenshot: Editing Client Tool](/img/manual-english-editing-client-tool.png)

If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **search and query results form** of a vector layer.

**N.B.** If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **attibute tables** (for every records) and in the **search and query results form** (for every results)

By clicking on the Edit layer icon associated with the layer of interest, the editing tools will be displayed.

The available tools vary based on the powers/permissions of the logged in user.

![Screenshot: G3wclient Edit Tools](/img/manual-english-g3wclient-edit-tools.png)

In the case of many editable layers, a useful **filter** allows you to view only the layers of interest in the list.

If a layer has **1:N relations** with other layers, a specific icon will be shown to the left of its name.

A click on this icon will allow you to filter, and therefore show in the list, only the layers involved in the relations

![Screenshot: G3wclient Edit Relation Filters](/img/manual-english-g3wclient-edit-relation-filters.png)

If the logged in user is an Administrator, there will be a link in the panel to access the features unlock session

#### Create and edit features

The tools available are the following:

**Geometric layers**
 * ![Icon: Feature Add](/img/manual-english-icon-feature-add.png) **Add feature:** to add a feature
  * ![Icon: Feature Attribute](/img/manual-english-icon-feature-attribute.png)**Update feature attribute:** to modify the attribute values associated with an existing feature
 * ![Icon: Feature Modify](/img/manual-english-icon-feature-modify.png) **Update feature vertex:** to modify the shape of a geometry
 * ![Icon: Feature Remove](/img/manual-english-icon-feature-remove.png) **Remove feature**
 * ![Icon: Feature Multiattribute](/img/manual-english-icon-feature-multiattribute.png) **Update attributes for selected features:** to modify the attribute values associated with more than one features
 * ![Icon: Feature Multiattribute Relations](/img/manual-english-icon-feature-multiattribute-relations.png) **Add/Edit child records from one or more parent features:** if the layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and
   * add one or more records to the child table (only if alphanumeric) associating them with all the selected parents
   * modify one or more fields of all the records of the child table, connected to the selected father geometries
 * ![Icon: Feature Move](/img/manual-english-icon-feature-move.png) **Move feature:** to move a feature
 * ![Icon: Feature Rotate](/img/manual-english-icon-feature-rotate.png) **Rotate feature:** to rotate a geoemtry. The rotation of point geometries is linked to the presence of a field called "rotation" in the attribute table, on which the direction of the symbology associated with the point is based.
  * ![Icon: Feature Paste](/img/manual-english-icon-feature-paste.png) **Paste features from other layers:** click on the icon, select a layer from those available in the drop-down menu (limited based on compatible geometry), select a feature,, fill in the attributes and press the green **Insert/Edit** button. The copy and paste operation can also be performed by referring to geometries deriving from local layers added by the user using the **AddLayer** tool.

 * ![Icon: Feature Copy](/img/manual-english-icon-feature-copy.png) **Copy features:** to copy one or more features from the same layer

 * ![Icon: Feature Add Part](/img/manual-english-icon-feature-add-part.png) **Add part** of a multi-geometry
 * ![Icon: Feature Delete Part](/img/manual-english-icon-feature-delete-part.png) **Delete part** of a multi-geometry

 * ![Icon: Feature Split](/img/manual-english-icon-feature-split.png) **Split features:** to split one or more features

 * ![Icon: Feature Dissolve](/img/manual-english-icon-feature-dissolve.png) **Dissolve features:** to dissolve two or more features

A help panel will describe the steps to take for copy, dissolve and split operations.

In case of interaction of the editing tools with overlapping geometries, an intermediate step will allow to select the effective geometry on which to operate.

##### Snap and other available function
Activating the Add features and Update feature vertex tools allows you to:
 * activate the **intralayer snap** function
 * activate the **snap between layers**, but only if both layers are in editing mode
 * activate the **interactive area and length measure** function

**Alphanumeric layer**
 * ![Icon: Record Add](/img/manual-english-icon-record-add.png) **Add feature:** to add a record to the alphanumeric table
 * ![Icon: Record Modify](/img/manual-english-icon-record-modify.png) **Modify features:** to modify the attributes of an existing record

Whenever a new feature/record is added or an existing feature/record is update, the attribute editing form and the respective editing widgets will be displayed as defined at the QGIS project level.

![Screenshot: Editing Form](/img/manual-english-editing-form.png)

Any **mandatory fields will be marked with an asterisk**.

Any **unfulfilled constraints will be highlighted** with specific warning messages shown **in red**.

The changes made can be saved only after satisfying any constraints of mandatory and/or uniqueness.

For this reason the green button **SAVE** will be disabled until all constraints are met.



### 1:N and N:M related tables editing
**G3W-SUITE allows for relational editing**; for this to be possible it is necessary that:
 * on the published QGIS project there are one or more geographic layers related (1:N) with one or more alphanumeric tables
 * on the administration panel the editing function has been activated both on the parent layer and on the child layers
 * the operator user is enabled for the editing function on these layers

**The activation, at the cartographic client level, of the editing mode on the parent layer automatically determines the possibility of also managing the information on the related table.**

**Important:** to be able to edit related data, the relations must be inserted in the form of the parent layer, defined using the Drag and Drop designer method in the Layer Properties.

After the editing has been activated on a record in the parent table, an editing icon (pen) will appear at the level of the relations references.

![Screenshot: Editing Form2](/img/manual-english-editing-form2.png)

Moving on the macro tab relating to one of the child layers, the list of records already associated with the edited feature will be displayed

![Screenshot: Editing Form Relations](/img/manual-english-editing-form-relations.png)

Clicking on it the form switch in a session dedicated to the edit of the relational table where it will be possible: **create and add a new records** related to the edited feature
 * **associate an existing records** (linked to other features or orphan) to the edited feature
 * **modify the records** currently associated with the edited feature

#### Creation of a new related child records

To add a new record in the child layer, you first need to access the relations itself.

By clicking on the icon **`Create and link a new relation`** ![Icon: Plus](/img/manual-english-icon-plus.png)(located at the top right) it will be show the attribute form to insert a new record.

You can fill in the individual attributes and save the new record. **The change must be validated by clicking on the `Save` button at the bottom of the form.**

If the child layer is of the geometric type, it will be possible to add a new feature in two ways:

 * **classic geometry editing**
 * **copy and paste a feature from other layers (WFS included)** present in the project and characterized by the same type of geometry

![Screenshot: Editing Form Relations](/img/manual-english-editing-form-relations.png)

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

#### Association of an existing record
By clicking on the icon **`Join a relation to this feature`** ![Icon: Join](/img/manual-english-icon-join.png) (located at the top right) you can associate a record, already linked to other features or orphaned, to the edited feature.

In the new window displayed:
 * the list of all orphaned or already associated records will be displayed;
 * a generic filter will allow you to locate the record of interest;
 * by clicking on the individual records these will be associated with the edited features and, possibly, dissociated from other features

#### Modification of an already associated record
A series of icons appear to the right of each record associated with the edited feature.


In the case of 1:N relations with alphanumeric layers:
 * ![Icon: Record Attribute](/img/manual-english-icon-record-attribute.png)**Update feature attribute:** modify the values associated with the attributes of this record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Copy](/img/manual-english-icon-record-copy.png)**Copy feature:** duplicate a record with the possibility to change the values in the new record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Erase](/img/manual-english-icon-record-erase.png) **Delete feature:** permanently delete the record


In the case of 1:N relations with vectorial layers:
 * ![Icon: Record Attribute](/img/manual-english-icon-record-attribute.png) **Update feature attribute:** modify the values associated with the attributes of this feature; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![Icon: Record Erase](/img/manual-english-icon-record-erase.png) **Delete feature:** permanently delete the record
 * ![Icon: Feature Modify](/img/manual-english-icon-feature-modify.png) **Update deature vertex:** modify the shape of the geometry
 * ![Icon: Feature Move](/img/manual-english-icon-feature-move.png) **Move feature:** move the geometry
 * ![Icon: Join Erase](/img/manual-english-icon-join-erase.png) **Unlink relation:** to dissociate the record from the edited feature, the record will not be deleted but will become an orphan


#### Saving changes
Saving all the changes made in an editing session can be done in three ways:
 * by clicking on the **`diskette icon`** ![Icon: Save All](/img/manual-english-icon-save-all.png) placed at the top right. This icon is very useful in the case of complex projects with related data on various levels as it allows you to **save any changes made regardless of the form on which you are at the time of saving.** You will not be asked to confirm the save.
  * by clicking on the **`diskette icon`** ![Icon: Disk](/img/manual-english-icon-disk.png) placed at the top left of the TOC. The icon will only be active once you exit the attribute editing form. The changes made will be saved and you can continue making new changes. You will not be asked to confirm the save.
 * exiting edit mode by clicking on the **`Edit layer icon`** ![Icon: Editing](/img/manual-english-icon-editing.png).
 
Exiting edit mode, a modal window will be displayed which will show the list of changes made and the request for confirmation or not of saving them.

![Screenshot: Editing Client Save](/img/manual-english-editing-client-save.png)

Remember that during the editing phase the **undo/redo icons** allow you to delete/restore the latest changes made.

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Feature Add Part](/img/manual-english-icon-feature-add-part.png) **Add part** of a multi-geometry": "![Icona: Aggiungi parte](/img/manual-english-icon-feature-add-part.png) **Aggiungi parte** a una geometria multiparte",
    "![Icon: Feature Add](/img/manual-english-icon-feature-add.png) **Add feature:** to add a feature": "![Icona: Aggiungi elemento](/img/manual-english-icon-feature-add.png) **Aggiungi elemento:** aggiunge un elemento",
    "![Icon: Feature Attribute](/img/manual-english-icon-feature-attribute.png)**Update feature attribute:** to modify the attribute values associated with an existing feature": "![Icona: Attributi elemento](/img/manual-english-icon-feature-attribute.png) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi associati a un elemento esistente",
    "![Icon: Feature Copy](/img/manual-english-icon-feature-copy.png) **Copy features:** to copy one or more features from the same layer": "![Icona: Copia elementi](/img/manual-english-icon-feature-copy.png) **Copia elementi:** copia uno o più elementi dello stesso layer",
    "![Icon: Feature Delete Part](/img/manual-english-icon-feature-delete-part.png) **Delete part** of a multi-geometry": "![Icona: Elimina parte](/img/manual-english-icon-feature-delete-part.png) **Elimina parte** da una geometria multiparte",
    "![Icon: Feature Dissolve](/img/manual-english-icon-feature-dissolve.png) **Dissolve features:** to dissolve two or more features": "![Icona: Fondi elementi](/img/manual-english-icon-feature-dissolve.png) **Fondi elementi:** fonde due o più elementi",
    "![Icon: Feature Modify](/img/manual-english-icon-feature-modify.png) **Update deature vertex:** modify the shape of the geometry": "![Icona: Modifica elemento](/img/manual-english-icon-feature-modify.png) **Aggiorna vertici dell’elemento:** modifica la forma della geometria",
    "![Icon: Feature Modify](/img/manual-english-icon-feature-modify.png) **Update feature vertex:** to modify the shape of a geometry": "![Icona: Modifica elemento](/img/manual-english-icon-feature-modify.png) **Aggiorna vertici dell’elemento:** modifica la forma di una geometria",
    "![Icon: Feature Move](/img/manual-english-icon-feature-move.png) **Move feature:** move the geometry": "![Icona: Sposta elemento](/img/manual-english-icon-feature-move.png) **Sposta elemento:** sposta la geometria",
    "![Icon: Feature Move](/img/manual-english-icon-feature-move.png) **Move feature:** to move a feature": "![Icona: Sposta elemento](/img/manual-english-icon-feature-move.png) **Sposta elemento:** sposta un elemento",
    "![Icon: Feature Multiattribute Relations](/img/manual-english-icon-feature-multiattribute-relations.png) **Add/Edit child records from one or more parent features:** if the layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and": "![Icona: Attributi multipli delle relazioni](/img/manual-english-icon-feature-multiattribute-relations.png) **Aggiungi/modifica record figli di uno o più elementi padre:** se il layer in modifica è padre di una o più relazioni 1:N, è possibile selezionare più elementi padre e",
    "![Icon: Feature Multiattribute](/img/manual-english-icon-feature-multiattribute.png) **Update attributes for selected features:** to modify the attribute values associated with more than one features": "![Icona: Attributi multipli](/img/manual-english-icon-feature-multiattribute.png) **Aggiorna gli attributi degli elementi selezionati:** modifica i valori degli attributi associati a più elementi",
    "![Icon: Feature Paste](/img/manual-english-icon-feature-paste.png) **Paste features from other layers:** click on the icon, select a layer from those available in the drop-down menu (limited based on compatible geometry), select a feature,, fill in the attributes and press the green **Insert/Edit** button. The copy and paste operation can also be performed by referring to geometries deriving from local layers added by the user using the **AddLayer** tool.": "![Icona: Incolla elementi](/img/manual-english-icon-feature-paste.png) **Incolla elementi da altri layer:** fai clic sull’icona, seleziona un layer dal menu a discesa (limitato ai tipi di geometria compatibili), seleziona un elemento, compila gli attributi e premi il pulsante verde **Insert/Edit**. È possibile copiare e incollare anche geometrie provenienti da layer locali aggiunti dall’utente con lo strumento **AddLayer**.",
    "![Icon: Feature Remove](/img/manual-english-icon-feature-remove.png) **Remove feature**": "![Icona: Rimuovi elemento](/img/manual-english-icon-feature-remove.png) **Rimuovi elemento**",
    "![Icon: Feature Rotate](/img/manual-english-icon-feature-rotate.png) **Rotate feature:** to rotate a geoemtry. The rotation of point geometries is linked to the presence of a field called \"rotation\" in the attribute table, on which the direction of the symbology associated with the point is based.": "![Icona: Ruota elemento](/img/manual-english-icon-feature-rotate.png) **Ruota elemento:** ruota una geometria. La rotazione delle geometrie puntuali dipende dalla presenza nella tabella attributi di un campo denominato \"rotation\", usato per determinare la direzione della simbologia del punto.",
    "![Icon: Feature Split](/img/manual-english-icon-feature-split.png) **Split features:** to split one or more features": "![Icona: Dividi elementi](/img/manual-english-icon-feature-split.png) **Dividi elementi:** divide uno o più elementi",
    "![Icon: Join Erase](/img/manual-english-icon-join-erase.png) **Unlink relation:** to dissociate the record from the edited feature, the record will not be deleted but will become an orphan": "![Icona: Rimuovi collegamento](/img/manual-english-icon-join-erase.png) **Scollega relazione:** dissocia il record dall’elemento in modifica senza eliminarlo; il record diventerà orfano",
    "![Icon: Record Add](/img/manual-english-icon-record-add.png) **Add feature:** to add a record to the alphanumeric table": "![Icona: Aggiungi record](/img/manual-english-icon-record-add.png) **Aggiungi elemento:** aggiunge un record alla tabella alfanumerica",
    "![Icon: Record Attribute](/img/manual-english-icon-record-attribute.png) **Update feature attribute:** modify the values associated with the attributes of this feature; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Attributi record](/img/manual-english-icon-record-attribute.png) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi dell’elemento; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Attribute](/img/manual-english-icon-record-attribute.png)**Update feature attribute:** modify the values associated with the attributes of this record; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Attributi record](/img/manual-english-icon-record-attribute.png) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi di questo record; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Copy](/img/manual-english-icon-record-copy.png)**Copy feature:** duplicate a record with the possibility to change the values in the new record; the change must be validated by clicking on the **Save** button at the bottom of the form.": "![Icona: Copia record](/img/manual-english-icon-record-copy.png) **Copia elemento:** duplica un record consentendo di modificarne i valori; per confermare la modifica, fai clic sul pulsante **Save** in fondo al modulo.",
    "![Icon: Record Erase](/img/manual-english-icon-record-erase.png) **Delete feature:** permanently delete the record": "![Icona: Elimina record](/img/manual-english-icon-record-erase.png) **Elimina elemento:** elimina definitivamente il record",
    "![Icon: Record Modify](/img/manual-english-icon-record-modify.png) **Modify features:** to modify the attributes of an existing record": "![Icona: Modifica record](/img/manual-english-icon-record-modify.png) **Modifica elementi:** modifica gli attributi di un record esistente",
    "**Alphanumeric layer**": "**Layer alfanumerico**",
    "**associate an existing records** (linked to other features or orphan) to the edited feature": "**associare un record esistente** (collegato ad altri elementi o orfano) all’elemento in modifica",
    "**classic geometry editing**": "**modifica geometrica classica**",
    "**copy and paste a feature from other layers (WFS included)** present in the project and characterized by the same type of geometry": "**copiare e incollare un elemento da altri layer (compresi i WFS)** presenti nel progetto e con lo stesso tipo di geometria",
    "**G3W-SUITE allows for relational editing**; for this to be possible it is necessary that:": "**G3W-SUITE consente la modifica relazionale**; a tal fine è necessario che:",
    "**Geometric layers**": "**Layer geometrici**",
    "**Important:** to be able to edit related data, the relations must be inserted in the form of the parent layer, defined using the Drag and Drop designer method in the Layer Properties.": "**Importante:** per modificare i dati correlati, le relazioni devono essere inserite nel modulo del layer padre, definito con il metodo Drag and Drop nelle Proprietà layer.",
    "**modify the records** currently associated with the edited feature": "**modificare i record** attualmente associati all’elemento in modifica",
    "**N.B.** If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **attibute tables** (for every records) and in the **search and query results form** (for every results)": "**N.B.** Se la funzione di modifica è attivata a livello di amministrazione, è possibile avviare la modifica online anche tramite l’**icona Modifica**, visualizzata nelle **tabelle attributi** (per ogni record) e nel **modulo dei risultati di ricerca e interrogazione** (per ogni risultato).",
    "**Once the online editing function has been activated and configured on one or more layers of a WebGis project, the `Editing layers` item, in the left bar of the cartographic client, will be shown.**": "**Dopo aver attivato e configurato la funzione di modifica online su uno o più layer di un progetto WebGIS, nella barra a sinistra del client cartografico viene mostrata la voce `Editing layers`.**",
    "**The activation, at the cartographic client level, of the editing mode on the parent layer automatically determines the possibility of also managing the information on the related table.**": "**L’attivazione della modalità di modifica sul layer padre nel client cartografico consente automaticamente di gestire anche le informazioni della tabella correlata.**",
    "1:N and N:M related tables editing": "Modifica delle tabelle correlate 1:N e N:M",
    "A click on the Editing layers item will allow you to go to the dedicated panel.": "Facendo clic sulla voce Editing layers si apre il pannello dedicato.",
    "A click on this icon will allow you to filter, and therefore show in the list, only the layers involved in the relations": "Facendo clic su questa icona è possibile filtrare l’elenco e visualizzare solo i layer coinvolti nelle relazioni.",
    "a generic filter will allow you to locate the record of interest;": "un filtro generico consente di trovare il record desiderato;",
    "A help panel will describe the steps to take for copy, dissolve and split operations.": "Un pannello di aiuto descrive i passaggi da seguire per copiare, fondere e dividere gli elementi.",
    "A series of icons appear to the right of each record associated with the edited feature.": "A destra di ogni record associato all’elemento in modifica appaiono diverse icone.",
    "activate the **interactive area and length measure** function": "attivare la funzione di **misurazione interattiva di area e lunghezza**",
    "activate the **intralayer snap** function": "attivare la funzione di **snap all’interno del layer**",
    "activate the **snap between layers**, but only if both layers are in editing mode": "attivare lo **snap tra layer**, ma solo se entrambi sono in modalità di modifica",
    "Activating the Add features and Update feature vertex tools allows you to:": "Attivando gli strumenti Aggiungi elemento e Aggiorna vertici dell’elemento è possibile:",
    "add one or more records to the child table (only if alphanumeric) associating them with all the selected parents": "aggiungere uno o più record alla tabella figlia (solo se alfanumerica), associandoli a tutti gli elementi padre selezionati",
    "After the editing has been activated on a record in the parent table, an editing icon (pen) will appear at the level of the relations references.": "Dopo aver attivato la modifica di un record nella tabella padre, accanto ai riferimenti delle relazioni appare un’icona di modifica (matita).",
    "Any **mandatory fields will be marked with an asterisk**.": "I **campi obbligatori sono contrassegnati da un asterisco**.",
    "Any **unfulfilled constraints will be highlighted** with specific warning messages shown **in red**.": "Gli **eventuali vincoli non rispettati** sono evidenziati con messaggi di avviso specifici **in rosso**.",
    "Association of an existing record": "Associazione di un record esistente",
    "Back to Online editing": "Torna alle modifiche online",
    "by clicking on the **`diskette icon`** ![Icon: Disk](/img/manual-english-icon-disk.png) placed at the top left of the TOC. The icon will only be active once you exit the attribute editing form. The changes made will be saved and you can continue making new changes. You will not be asked to confirm the save.": "facendo clic sull’**`icona del dischetto`** ![Icona: dischetto](/img/manual-english-icon-disk.png) in alto a sinistra nella TOC. L’icona si attiva solo dopo essere usciti dal modulo di modifica degli attributi. Le modifiche vengono salvate ed è possibile continuare a modificarle. Non viene richiesta conferma.",
    "by clicking on the **`diskette icon`** ![Icon: Save All](/img/manual-english-icon-save-all.png) placed at the top right. This icon is very useful in the case of complex projects with related data on various levels as it allows you to **save any changes made regardless of the form on which you are at the time of saving.** You will not be asked to confirm the save.": "facendo clic sull’**`icona del dischetto`** ![Icona: salva tutto](/img/manual-english-icon-save-all.png) in alto a destra. Questa icona è molto utile nei progetti complessi con dati correlati su più livelli, perché consente di **salvare tutte le modifiche apportate indipendentemente dal modulo aperto al momento del salvataggio.** Non viene richiesta conferma.",
    "By clicking on the Edit layer icon associated with the layer of interest, the editing tools will be displayed.": "Facendo clic sull’icona Modifica layer associata al layer desiderato, vengono mostrati gli strumenti di modifica.",
    "By clicking on the icon **`Create and link a new relation`** ![Icon: Plus](/img/manual-english-icon-plus.png)(located at the top right) it will be show the attribute form to insert a new record.": "Facendo clic sull’icona **`Crea e collega una nuova relazione`** ![Icona: aggiungi](/img/manual-english-icon-plus.png) (in alto a destra), viene mostrato il modulo attributi per inserire un nuovo record.",
    "By clicking on the icon **`Join a relation to this feature`** ![Icon: Join](/img/manual-english-icon-join.png) (located at the top right) you can associate a record, already linked to other features or orphaned, to the edited feature.": "Facendo clic sull’icona **`Collega una relazione a questo elemento`** ![Icona: collega](/img/manual-english-icon-join.png) (in alto a destra), è possibile associare all’elemento in modifica un record già collegato ad altri elementi o orfano.",
    "by clicking on the individual records these will be associated with the edited features and, possibly, dissociated from other features": "facendo clic sui singoli record, questi vengono associati all’elemento in modifica e, se necessario, dissociati dagli altri elementi",
    "choose the layer from which to copy the feature from the **Copy feature from other layer** drop-down menu": "scegli il layer da cui copiare l’elemento dal menu a discesa **Copia elemento da un altro layer**",
    "click on the **Copy** button below": "fai clic sul pulsante **Copy** sottostante",
    "click on the green **Save and exit** button": "fai clic sul pulsante verde **Save and exit**",
    "Clicking on it the form switch in a session dedicated to the edit of the relational table where it will be possible: **create and add a new records** related to the edited feature": "Facendo clic su di essa, il modulo passa alla sezione dedicata alla modifica della tabella relazionale, dove è possibile **creare e aggiungere nuovi record** associati all’elemento in modifica",
    "Create and edit features": "Creazione e modifica degli elementi",
    "Creation of a new related child records": "Creazione di un nuovo record figlio correlato",
    "exiting edit mode by clicking on the **`Edit layer icon`** ![Icon: Editing](/img/manual-english-icon-editing.png).": "uscendo dalla modalità di modifica facendo clic sull’**`icona Modifica layer`** ![Icona: modifica](/img/manual-english-icon-editing.png).",
    "Exiting edit mode, a modal window will be displayed which will show the list of changes made and the request for confirmation or not of saving them.": "Uscendo dalla modalità di modifica, viene mostrata una finestra modale con l’elenco delle modifiche e la richiesta di confermarne o meno il salvataggio.",
    "fill in the attributes associated with the new feature created": "compila gli attributi associati al nuovo elemento creato",
    "For this reason the green button **SAVE** will be disabled until all constraints are met.": "Per questo motivo, il pulsante verde **SAVE** resta disabilitato finché non vengono soddisfatti tutti i vincoli.",
    "Geographic and alphanumeric editing": "Modifica geografica e alfanumerica",
    "Icon: Disk": "Icona: dischetto",
    "Icon: Editing": "Icona: modifica",
    "Icon: Feature Add": "Icona: aggiungi elemento",
    "Icon: Feature Add Part": "Icona: aggiungi parte",
    "Icon: Feature Attribute": "Icona: attributi dell’elemento",
    "Icon: Feature Copy": "Icona: copia elementi",
    "Icon: Feature Delete Part": "Icona: elimina parte",
    "Icon: Feature Dissolve": "Icona: fondi elementi",
    "Icon: Feature Modify": "Icona: modifica elemento",
    "Icon: Feature Move": "Icona: sposta elemento",
    "Icon: Feature Multiattribute": "Icona: attributi multipli",
    "Icon: Feature Multiattribute Relations": "Icona: attributi multipli delle relazioni",
    "Icon: Feature Paste": "Icona: incolla elementi",
    "Icon: Feature Remove": "Icona: rimuovi elemento",
    "Icon: Feature Rotate": "Icona: ruota elemento",
    "Icon: Feature Split": "Icona: dividi elementi",
    "Icon: Join": "Icona: collega",
    "Icon: Join Erase": "Icona: scollega relazione",
    "Icon: Plus": "Icona: aggiungi",
    "Icon: Record Add": "Icona: aggiungi record",
    "Icon: Record Attribute": "Icona: attributi del record",
    "Icon: Record Copy": "Icona: copia record",
    "Icon: Record Erase": "Icona: elimina record",
    "Icon: Record Modify": "Icona: modifica record",
    "Icon: Save All": "Icona: salva tutto",
    "If a layer has **1:N relations** with other layers, a specific icon will be shown to the left of its name.": "Se un layer ha **relazioni 1:N** con altri layer, a sinistra del suo nome viene mostrata un’icona specifica.",
    "If the child layer is of the geometric type, it will be possible to add a new feature in two ways:": "Se il layer figlio è geometrico, è possibile aggiungere un nuovo elemento in due modi:",
    "If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **search and query results form** of a vector layer.": "Se la funzione di modifica è attivata a livello di amministrazione, è possibile avviare la modifica online anche tramite l’**icona Modifica**, visualizzata nel **modulo dei risultati di ricerca e interrogazione** di un layer vettoriale.",
    "If the logged in user is an Administrator, there will be a link in the panel to access the features unlock session": "Se l’utente autenticato è un amministratore, nel pannello è disponibile un collegamento alla sezione di sblocco degli elementi.",
    "In case of interaction of the editing tools with overlapping geometries, an intermediate step will allow to select the effective geometry on which to operate.": "Quando gli strumenti di modifica interagiscono con geometrie sovrapposte, un passaggio intermedio consente di selezionare la geometria su cui operare.",
    "In the case of 1:N relations with alphanumeric layers:": "Per le relazioni 1:N con layer alfanumerici:",
    "In the case of 1:N relations with vectorial layers:": "Per le relazioni 1:N con layer vettoriali:",
    "In the case of many editable layers, a useful **filter** allows you to view only the layers of interest in the list.": "Se sono presenti molti layer modificabili, un utile **filtro** consente di visualizzare nell’elenco solo quelli desiderati.",
    "In the new window displayed:": "Nella nuova finestra visualizzata:",
    "Modification of an already associated record": "Modifica di un record già associato",
    "modify one or more fields of all the records of the child table, connected to the selected father geometries": "modificare uno o più campi di tutti i record della tabella figlia collegati agli elementi padre selezionati",
    "Moving on the macro tab relating to one of the child layers, the list of records already associated with the edited feature will be displayed": "Selezionando la scheda relativa a uno dei layer figli, viene mostrato l’elenco dei record già associati all’elemento in modifica.",
    "neither the layer being edited (child of the relation) nor the parent layer of the relation will be shown in the list": "nell’elenco non saranno mostrati né il layer in modifica (figlio della relazione) né il layer padre della relazione",
    "on the administration panel the editing function has been activated both on the parent layer and on the child layers": "nel pannello di amministrazione la funzione di modifica sia attivata sia sul layer padre sia sui layer figli",
    "on the map, click on the feature to copy relating to the chosen layer": "fai clic sulla mappa sull’elemento da copiare del layer scelto",
    "on the published QGIS project there are one or more geographic layers related (1:N) with one or more alphanumeric tables": "nel progetto QGIS pubblicato siano presenti uno o più layer geografici correlati (1:N) a una o più tabelle alfanumeriche",
    "Online editing tools in the cartographic client": "Strumenti di modifica online nel client cartografico",
    "Online editing tools on cartographic client": "Strumenti di modifica online nel client cartografico",
    "Remember that during the editing phase the **undo/redo icons** allow you to delete/restore the latest changes made.": "Durante la modifica, le **icone Annulla/Ripristina** consentono di annullare o ripristinare le ultime modifiche.",
    "Saving all the changes made in an editing session can be done in three ways:": "È possibile salvare tutte le modifiche apportate durante una sessione in tre modi:",
    "Saving changes": "Salvataggio delle modifiche",
    "Screenshot: Editing Client Save": "Schermata: salvataggio delle modifiche nel client",
    "Screenshot: Editing Client Tool": "Schermata: strumento di modifica client",
    "Screenshot: Editing Form": "Schermata: modulo di modifica",
    "Screenshot: Editing Form Relations": "Schermata: modulo delle relazioni di modifica",
    "Screenshot: Editing Form2": "Schermata: modulo di modifica 2",
    "Screenshot: G3wclient Edit Relation Filters": "Schermata: filtri delle relazioni di modifica G3wclient",
    "Screenshot: G3wclient Edit Tools": "Schermata: strumenti di modifica G3wclient",
    "Snap and other available function": "Snap e altre funzioni disponibili",
    "The available tools vary based on the powers/permissions of the logged in user.": "Gli strumenti disponibili dipendono dai permessi dell’utente autenticato.",
    "The changes made can be saved only after satisfying any constraints of mandatory and/or uniqueness.": "Le modifiche possono essere salvate solo dopo aver soddisfatto i vincoli di obbligatorietà e/o unicità.",
    "the layers settable not querable in the QGIS project will not be shown": "non saranno mostrati i layer impostati come non interrogabili nel progetto QGIS",
    "the layers shown also include those added to the map by the user using the **AddLayer** tool": "tra i layer mostrati sono inclusi anche quelli aggiunti dall’utente alla mappa tramite lo strumento **AddLayer**",
    "the layers shown will be in accordance with the geometry of the edited layer": "i layer mostrati saranno compatibili con la geometria del layer in modifica",
    "the list of all orphaned or already associated records will be displayed;": "viene mostrato l’elenco di tutti i record orfani o già associati;",
    "the operator user is enabled for the editing function on these layers": "l’utente operatore sia autorizzato a modificare questi layer",
    "The tools available are the following:": "Sono disponibili i seguenti strumenti:",
    "To add a new record in the child layer, you first need to access the relations itself.": "Per aggiungere un nuovo record al layer figlio, è necessario prima aprire la relazione.",
    "To copy a geometry from another layer operate in this order:": "Per copiare una geometria da un altro layer, procedi nell’ordine seguente:",
    "Whenever a new feature/record is added or an existing feature/record is update, the attribute editing form and the respective editing widgets will be displayed as defined at the QGIS project level.": "Quando si aggiunge un nuovo elemento/record o si aggiorna un elemento/record esistente, vengono mostrati il modulo di modifica degli attributi e i relativi widget definiti nel progetto QGIS.",
    "You can fill in the individual attributes and save the new record. **The change must be validated by clicking on the `Save` button at the bottom of the form.**": "È possibile compilare i singoli attributi e salvare il nuovo record. **Per confermare la modifica, fai clic sul pulsante `Save` in fondo al modulo.**"
  }
}
</script>
