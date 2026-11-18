---
title: Editing related records
description: The activation, at the cartographic client level, of the editing mode on the parent layer automatically determines the possibility of also managing the information on the related table.
---

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
