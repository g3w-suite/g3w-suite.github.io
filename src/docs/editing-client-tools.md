# Online editing tools in the cartographic client

[Back to Online editing](g3wsuite_editing.md)

## Online editing tools on cartographic client

### Geographic and alphanumeric editing

**After enabling and configuring online editing for a project layer, `Editing layers` appears in the client's left sidebar.**

Select Editing layers to open its panel.

![Screenshot: Editing Client Tool](/img/manual-english-editing-client-tool.png)

When editing is enabled in the administration panel, use the **Editing icon** in attribute tables or search and query results to edit a record.

Select the Edit layer icon to open its editing tools.

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

[Editing related records](editing-relations.md)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Feature Add Part](/img/manual-english-icon-feature-add-part.png) **Add part** of a multi-geometry": "![Icona: Aggiungi parte](/img/manual-english-icon-feature-add-part.png) **Aggiungi parte** a una geometria multiparte",
    "![Icon: Feature Add](/img/manual-english-icon-feature-add.png) **Add feature:** to add a feature": "![Icona: Aggiungi elemento](/img/manual-english-icon-feature-add.png) **Aggiungi elemento:** aggiunge un elemento",
    "![Icon: Feature Attribute](/img/manual-english-icon-feature-attribute.png)**Update feature attribute:** to modify the attribute values associated with an existing feature": "![Icona: Attributi elemento](/img/manual-english-icon-feature-attribute.png) **Aggiorna attributi dell’elemento:** modifica i valori degli attributi associati a un elemento esistente",
    "![Icon: Feature Copy](/img/manual-english-icon-feature-copy.png) **Copy features:** to copy one or more features from the same layer": "![Icona: Copia elementi](/img/manual-english-icon-feature-copy.png) **Copia elementi:** copia uno o più elementi dello stesso layer",
    "![Icon: Feature Delete Part](/img/manual-english-icon-feature-delete-part.png) **Delete part** of a multi-geometry": "![Icona: Elimina parte](/img/manual-english-icon-feature-delete-part.png) **Elimina parte** da una geometria multiparte",
    "![Icon: Feature Dissolve](/img/manual-english-icon-feature-dissolve.png) **Dissolve features:** to dissolve two or more features": "![Icona: Fondi elementi](/img/manual-english-icon-feature-dissolve.png) **Fondi elementi:** fonde due o più elementi",
    "![Icon: Feature Modify](/img/manual-english-icon-feature-modify.png) **Update feature vertex:** to modify the shape of a geometry": "![Icona: Modifica elemento](/img/manual-english-icon-feature-modify.png) **Aggiorna vertici dell’elemento:** modifica la forma di una geometria",
    "![Icon: Feature Move](/img/manual-english-icon-feature-move.png) **Move feature:** to move a feature": "![Icona: Sposta elemento](/img/manual-english-icon-feature-move.png) **Sposta elemento:** sposta un elemento",
    "![Icon: Feature Multiattribute Relations](/img/manual-english-icon-feature-multiattribute-relations.png) **Add/Edit child records from one or more parent features:** if the layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and": "![Icona: Attributi multipli delle relazioni](/img/manual-english-icon-feature-multiattribute-relations.png) **Aggiungi/modifica record figli di uno o più elementi padre:** se il layer in modifica è padre di una o più relazioni 1:N, è possibile selezionare più elementi padre e",
    "![Icon: Feature Multiattribute](/img/manual-english-icon-feature-multiattribute.png) **Update attributes for selected features:** to modify the attribute values associated with more than one features": "![Icona: Attributi multipli](/img/manual-english-icon-feature-multiattribute.png) **Aggiorna gli attributi degli elementi selezionati:** modifica i valori degli attributi associati a più elementi",
    "![Icon: Feature Paste](/img/manual-english-icon-feature-paste.png) **Paste features from other layers:** click on the icon, select a layer from those available in the drop-down menu (limited based on compatible geometry), select a feature,, fill in the attributes and press the green **Insert/Edit** button. The copy and paste operation can also be performed by referring to geometries deriving from local layers added by the user using the **AddLayer** tool.": "![Icona: Incolla elementi](/img/manual-english-icon-feature-paste.png) **Incolla elementi da altri layer:** fai clic sull’icona, seleziona un layer dal menu a discesa (limitato ai tipi di geometria compatibili), seleziona un elemento, compila gli attributi e premi il pulsante verde **Insert/Edit**. È possibile copiare e incollare anche geometrie provenienti da layer locali aggiunti dall’utente con lo strumento **AddLayer**.",
    "![Icon: Feature Remove](/img/manual-english-icon-feature-remove.png) **Remove feature**": "![Icona: Rimuovi elemento](/img/manual-english-icon-feature-remove.png) **Rimuovi elemento**",
    "![Icon: Feature Rotate](/img/manual-english-icon-feature-rotate.png) **Rotate feature:** to rotate a geoemtry. The rotation of point geometries is linked to the presence of a field called \"rotation\" in the attribute table, on which the direction of the symbology associated with the point is based.": "![Icona: Ruota elemento](/img/manual-english-icon-feature-rotate.png) **Ruota elemento:** ruota una geometria. La rotazione delle geometrie puntuali dipende dalla presenza nella tabella attributi di un campo denominato \"rotation\", usato per determinare la direzione della simbologia del punto.",
    "![Icon: Feature Split](/img/manual-english-icon-feature-split.png) **Split features:** to split one or more features": "![Icona: Dividi elementi](/img/manual-english-icon-feature-split.png) **Dividi elementi:** divide uno o più elementi",
    "![Icon: Record Add](/img/manual-english-icon-record-add.png) **Add feature:** to add a record to the alphanumeric table": "![Icona: Aggiungi record](/img/manual-english-icon-record-add.png) **Aggiungi elemento:** aggiunge un record alla tabella alfanumerica",
    "![Icon: Record Modify](/img/manual-english-icon-record-modify.png) **Modify features:** to modify the attributes of an existing record": "![Icona: Modifica record](/img/manual-english-icon-record-modify.png) **Modifica elementi:** modifica gli attributi di un record esistente",
    "**After enabling and configuring online editing for a project layer, `Editing layers` appears in the client's left sidebar.**": "**Dopo aver abilitato e configurato la modifica online per un layer del progetto, `Editing layers` appare nella barra laterale sinistra del client.**",
    "**Alphanumeric layer**": "**Layer alfanumerico**",
    "**Geometric layers**": "**Layer geometrici**",
    "A click on this icon will allow you to filter, and therefore show in the list, only the layers involved in the relations": "Facendo clic su questa icona è possibile filtrare l’elenco e visualizzare solo i layer coinvolti nelle relazioni.",
    "A help panel will describe the steps to take for copy, dissolve and split operations.": "Un pannello di aiuto descrive i passaggi da seguire per copiare, fondere e dividere gli elementi.",
    "Activating the Add features and Update feature vertex tools allows you to:": "Attivando gli strumenti Aggiungi elemento e Aggiorna vertici dell’elemento è possibile:",
    "Any **mandatory fields will be marked with an asterisk**.": "I **campi obbligatori sono contrassegnati da un asterisco**.",
    "Any **unfulfilled constraints will be highlighted** with specific warning messages shown **in red**.": "Gli **eventuali vincoli non rispettati** sono evidenziati con messaggi di avviso specifici **in rosso**.",
    "Back to Online editing": "Torna alle modifiche online",
    "Create and edit features": "Creazione e modifica degli elementi",
    "Editing related records": "Modificare i record correlati",
    "For this reason the green button **SAVE** will be disabled until all constraints are met.": "Per questo motivo, il pulsante verde **SAVE** resta disabilitato finché non vengono soddisfatti tutti i vincoli.",
    "Geographic and alphanumeric editing": "Modifica geografica e alfanumerica",
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
    "Icon: Record Add": "Icona: aggiungi record",
    "Icon: Record Modify": "Icona: modifica record",
    "If a layer has **1:N relations** with other layers, a specific icon will be shown to the left of its name.": "Se un layer ha **relazioni 1:N** con altri layer, a sinistra del suo nome viene mostrata un’icona specifica.",
    "If the logged in user is an Administrator, there will be a link in the panel to access the features unlock session": "Se l’utente autenticato è un amministratore, nel pannello è disponibile un collegamento alla sezione di sblocco degli elementi.",
    "In case of interaction of the editing tools with overlapping geometries, an intermediate step will allow to select the effective geometry on which to operate.": "Quando gli strumenti di modifica interagiscono con geometrie sovrapposte, un passaggio intermedio consente di selezionare la geometria su cui operare.",
    "In the case of many editable layers, a useful **filter** allows you to view only the layers of interest in the list.": "Se sono presenti molti layer modificabili, un utile **filtro** consente di visualizzare nell’elenco solo quelli desiderati.",
    "Online editing tools in the cartographic client": "Strumenti di modifica online nel client cartografico",
    "Online editing tools on cartographic client": "Strumenti di modifica online nel client cartografico",
    "Screenshot: Editing Client Tool": "Schermata: strumento di modifica client",
    "Screenshot: Editing Form": "Schermata: modulo di modifica",
    "Screenshot: G3wclient Edit Relation Filters": "Schermata: filtri delle relazioni di modifica G3wclient",
    "Screenshot: G3wclient Edit Tools": "Schermata: strumenti di modifica G3wclient",
    "Select Editing layers to open its panel.": "Seleziona Editing layers per aprire il relativo pannello.",
    "Select the Edit layer icon to open its editing tools.": "Seleziona l'icona Modifica layer per aprire i relativi strumenti.",
    "Snap and other available function": "Snap e altre funzioni disponibili",
    "The available tools vary based on the powers/permissions of the logged in user.": "Gli strumenti disponibili dipendono dai permessi dell’utente autenticato.",
    "The changes made can be saved only after satisfying any constraints of mandatory and/or uniqueness.": "Le modifiche possono essere salvate solo dopo aver soddisfatto i vincoli di obbligatorietà e/o unicità.",
    "The tools available are the following:": "Sono disponibili i seguenti strumenti:",
    "When editing is enabled in the administration panel, use the **Editing icon** in attribute tables or search and query results to edit a record.": "Quando la modifica è abilitata nel pannello di amministrazione, usa l'**icona Modifica** nelle tabelle attributi o nei risultati di ricerca e interrogazione per modificare un record.",
    "Whenever a new feature/record is added or an existing feature/record is update, the attribute editing form and the respective editing widgets will be displayed as defined at the QGIS project level.": "Quando si aggiunge un nuovo elemento/record o si aggiorna un elemento/record esistente, vengono mostrati il modulo di modifica degli attributi e i relativi widget definiti nel progetto QGIS.",
    "activate the **interactive area and length measure** function": "attivare la funzione di **misurazione interattiva di area e lunghezza**",
    "activate the **intralayer snap** function": "attivare la funzione di **snap all’interno del layer**",
    "activate the **snap between layers**, but only if both layers are in editing mode": "attivare lo **snap tra layer**, ma solo se entrambi sono in modalità di modifica",
    "add one or more records to the child table (only if alphanumeric) associating them with all the selected parents": "aggiungere uno o più record alla tabella figlia (solo se alfanumerica), associandoli a tutti gli elementi padre selezionati",
    "modify one or more fields of all the records of the child table, connected to the selected father geometries": "modificare uno o più campi di tutti i record della tabella figlia collegati agli elementi padre selezionati"
  }
}
</script>
