# Online editing tools in the cartographic client

[Back to Online editing](g3wsuite_editing.md)

## Online editing tools on cartographic client

### Geographic and alphanumeric editing

**Once the online editing function has been activated and configured on one or more layers of a WebGis project, the `Editing layers` item, in the left bar of the cartographic client, will be shown.**

A click on the Editing layers item will allow you to go to the dedicated panel.

![](/img/manual-english-editing-client-tool.png)

If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **search and query results form** of a vector layer.

**N.B.** If the editing function is activated at the Admin level, it is also possible to start the online editing also through the **Editing icon** that appears at the level of the **attibute tables** (for every records) and in the **search and query results form** (for every results)

By clicking on the Edit layer icon associated with the layer of interest, the editing tools will be displayed.

The available tools vary based on the powers/permissions of the logged in user.

![](/img/manual-english-g3wclient-edit-tools.png)

In the case of many editable layers, a useful **filter** allows you to view only the layers of interest in the list.

If a layer has **1:N relations** with other layers, a specific icon will be shown to the left of its name.

A click on this icon will allow you to filter, and therefore show in the list, only the layers involved in the relations

![](/img/manual-english-g3wclient-edit-relation-filters.png)

If the logged in user is an Administrator, there will be a link in the panel to access the features unlock session

#### Create and edit features

The tools available are the following:

**Geometric layers**
 * ![](/img/manual-english-icon-feature-add.png) **Add feature:** to add a feature
  * ![](/img/manual-english-icon-feature-attribute.png)**Update feature attribute:** to modify the attribute values associated with an existing feature
 * ![](/img/manual-english-icon-feature-modify.png) **Update feature vertex:** to modify the shape of a geometry
 * ![](/img/manual-english-icon-feature-remove.png) **Remove feature**
 * ![](/img/manual-english-icon-feature-multiattribute.png) **Update attributes for selected features:** to modify the attribute values associated with more than one features
 * ![](/img/manual-english-icon-feature-multiattribute-relations.png) **Add/Edit child records from one or more parent features:** if the layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and 
   * add one or more records to the child table (only if alphanumeric) associating them with all the selected parents
   * modify one or more fields of all the records of the child table, connected to the selected father geometries
 * ![](/img/manual-english-icon-feature-move.png) **Move feature:** to move a feature
 * ![](/img/manual-english-icon-feature-rotate.png) **Rotate feature:** to rotate a geoemtry. The rotation of point geometries is linked to the presence of a field called "rotation" in the attribute table, on which the direction of the symbology associated with the point is based. 
  * ![](/img/manual-english-icon-feature-paste.png) **Paste features from other layers:** click on the icon, select a layer from those available in the drop-down menu (limited based on compatible geometry), select a feature,, fill in the attributes and press the green **Insert/Edit** button. The copy and paste operation can also be performed by referring to geometries deriving from local layers added by the user using the **AddLayer** tool.

 * ![](/img/manual-english-icon-feature-copy.png) **Copy features:** to copy one or more features from the same layer

 * ![](/img/manual-english-icon-feature-add-part.png) **Add part** of a multi-geometry
 * ![](/img/manual-english-icon-feature-delete-part.png) **Delete part** of a multi-geometry

 * ![](/img/manual-english-icon-feature-split.png) **Split features:** to split one or more features

 * ![](/img/manual-english-icon-feature-dissolve.png) **Dissolve features:** to dissolve two or more features

A help panel will describe the steps to take for copy, dissolve and split operations.

In case of interaction of the editing tools with overlapping geometries, an intermediate step will allow to select the effective geometry on which to operate.

##### Snap and other available function
Activating the Add features and Update feature vertex tools allows you to:
 * activate the **intralayer snap** function
 * activate the **snap between layers**, but only if both layers are in editing mode
 * activate the **interactive area and length measure** function

**Alphanumeric layer**
 * ![](/img/manual-english-icon-record-add.png) **Add feature:** to add a record to the alphanumeric table
 * ![](/img/manual-english-icon-record-modify.png) **Modify features:** to modify the attributes of an existing record

Whenever a new feature/record is added or an existing feature/record is update, the attribute editing form and the respective editing widgets will be displayed as defined at the QGIS project level.

![](/img/manual-english-editing-form.png)

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

![](/img/manual-english-editing-form2.png)

Moving on the macro tab relating to one of the child layers, the list of records already associated with the edited feature will be displayed

![](/img/manual-english-editing-form-relations.png)

Clicking on it the form switch in a session dedicated to the edit of the relational table where it will be possible: **create and add a new records** related to the edited feature
 * **associate an existing records** (linked to other features or orphan) to the edited feature
 * **modify the records** currently associated with the edited feature

#### Creation of a new related child records

To add a new record in the child layer, you first need to access the relations itself.

By clicking on the icon **`Create and link a new relation`** ![](/img/manual-english-icon-plus.png)(located at the top right) it will be show the attribute form to insert a new record.

You can fill in the individual attributes and save the new record. **The change must be validated by clicking on the `Save` button at the bottom of the form.**

If the child layer is of the geometric type, it will be possible to add a new feature in two ways:

 * **classic geometry editing**
 * **copy and paste a feature from other layers (WFS included)** present in the project and characterized by the same type of geometry

![](/img/manual-english-editing-form-relations.png)

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
By clicking on the icon **`Join a relation to this feature`** ![](/img/manual-english-icon-join.png) (located at the top right) you can associate a record, already linked to other features or orphaned, to the edited feature.

In the new window displayed:
 * the list of all orphaned or already associated records will be displayed;
 * a generic filter will allow you to locate the record of interest;
 * by clicking on the individual records these will be associated with the edited features and, possibly, dissociated from other features

#### Modification of an already associated record
A series of icons appear to the right of each record associated with the edited feature.


In the case of 1:N relations with alphanumeric layers:
 * ![](/img/manual-english-icon-record-attribute.png)**Update feature attribute:** modify the values associated with the attributes of this record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![](/img/manual-english-icon-record-copy.png)**Copy feature:** duplicate a record with the possibility to change the values in the new record; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![](/img/manual-english-icon-record-erase.png) **Delete feature:** permanently delete the record


In the case of 1:N relations with vectorial layers:
 * ![](/img/manual-english-icon-record-attribute.png) **Update feature attribute:** modify the values associated with the attributes of this feature; the change must be validated by clicking on the **Save** button at the bottom of the form.
 * ![](/img/manual-english-icon-record-erase.png) **Delete feature:** permanently delete the record
 * ![](/img/manual-english-icon-feature-modify.png) **Update deature vertex:** modify the shape of the geometry
 * ![](/img/manual-english-icon-feature-move.png) **Move feature:** move the geometry
 * ![](/img/manual-english-icon-join-erase.png) **Unlink relation:** to dissociate the record from the edited feature, the record will not be deleted but will become an orphan


#### Saving changes
Saving all the changes made in an editing session can be done in three ways:
 * by clicking on the **`diskette icon`** ![](/img/manual-english-icon-save-all.png) placed at the top right. This icon is very useful in the case of complex projects with related data on various levels as it allows you to **save any changes made regardless of the form on which you are at the time of saving.** You will not be asked to confirm the save.
  * by clicking on the **`diskette icon`** ![](/img/manual-english-icon-disk.png) placed at the top left of the TOC. The icon will only be active once you exit the attribute editing form. The changes made will be saved and you can continue making new changes. You will not be asked to confirm the save.
 * exiting edit mode by clicking on the **`Edit layer icon`** ![](/img/manual-english-icon-editing.png). 
 
Exiting edit mode, a modal window will be displayed which will show the list of changes made and the request for confirmation or not of saving them.

![](/img/manual-english-editing-client-save.png)

Remember that during the editing phase the **undo/redo icons** allow you to delete/restore the latest changes made.
