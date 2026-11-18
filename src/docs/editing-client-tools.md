# Editing tools

## Online editing tools on cartographic client

### Geographic and alphanumeric editing

**After enabling and configuring online editing for a project layer, `Editing layers` appears in the client's left sidebar.**

Select Editing layers to open its panel.

![Screenshot: Editing Client Tool](/img/manual-english-editing-client-tool.avif)

When editing is enabled in the administration panel, use the **Editing icon** in attribute tables or search and query results to edit a record.

Select the Edit layer icon to open its editing tools.

The available tools vary based on the powers/permissions of the logged in user.

![Screenshot: G3wclient Edit Tools](/img/manual-english-g3wclient-edit-tools.avif)

In the case of many editable layers, a useful **filter** allows you to view only the layers of interest in the list.

If a layer has **1:N relations** with other layers, a specific icon will be shown to the left of its name.

A click on this icon will allow you to filter, and therefore show in the list, only the layers involved in the relations

![Screenshot: G3wclient Edit Relation Filters](/img/manual-english-g3wclient-edit-relation-filters.avif)

If the logged in user is an Administrator, there will be a link in the panel to access the features unlock session

#### Create and edit features

The tools available are the following:

**Geometric layers**
 * ![Icon: Feature Add](/img/manual-english-icon-feature-add.avif) **Add feature:** to add a feature
  * ![Icon: Feature Attribute](/img/manual-english-icon-feature-attribute.avif)**Update feature attribute:** to modify the attribute values associated with an existing feature
 * ![Icon: Feature Modify](/img/manual-english-icon-feature-modify.avif) **Update feature vertex:** to modify the shape of a geometry
 * ![Icon: Feature Remove](/img/manual-english-icon-feature-remove.avif) **Remove feature**
 * ![Icon: Feature Multiattribute](/img/manual-english-icon-feature-multiattribute.avif) **Update attributes for selected features:** to modify the attribute values associated with more than one features
 * ![Icon: Feature Multiattribute Relations](/img/manual-english-icon-feature-multiattribute-relations.avif) **Add/Edit child records from one or more parent features:** if the layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and
   * add one or more records to the child table (only if alphanumeric) associating them with all the selected parents
   * modify one or more fields of all the records of the child table, connected to the selected father geometries
 * ![Icon: Feature Move](/img/manual-english-icon-feature-move.avif) **Move feature:** to move a feature
 * ![Icon: Feature Rotate](/img/manual-english-icon-feature-rotate.avif) **Rotate feature:** to rotate a geoemtry. The rotation of point geometries is linked to the presence of a field called "rotation" in the attribute table, on which the direction of the symbology associated with the point is based.
  * ![Icon: Feature Paste](/img/manual-english-icon-feature-paste.avif) **Paste features from other layers:** click on the icon, select a layer from those available in the drop-down menu (limited based on compatible geometry), select a feature,, fill in the attributes and press the green **Insert/Edit** button. The copy and paste operation can also be performed by referring to geometries deriving from local layers added by the user using the **AddLayer** tool.

 * ![Icon: Feature Copy](/img/manual-english-icon-feature-copy.avif) **Copy features:** to copy one or more features from the same layer

 * ![Icon: Feature Add Part](/img/manual-english-icon-feature-add-part.avif) **Add part** of a multi-geometry
 * ![Icon: Feature Delete Part](/img/manual-english-icon-feature-delete-part.avif) **Delete part** of a multi-geometry

 * ![Icon: Feature Split](/img/manual-english-icon-feature-split.avif) **Split features:** to split one or more features

 * ![Icon: Feature Dissolve](/img/manual-english-icon-feature-dissolve.avif) **Dissolve features:** to dissolve two or more features

A help panel will describe the steps to take for copy, dissolve and split operations.

In case of interaction of the editing tools with overlapping geometries, an intermediate step will allow to select the effective geometry on which to operate.

##### Snap and other available function
Activating the Add features and Update feature vertex tools allows you to:
 * activate the **intralayer snap** function
 * activate the **snap between layers**, but only if both layers are in editing mode
 * activate the **interactive area and length measure** function

**Alphanumeric layer**
 * ![Icon: Record Add](/img/manual-english-icon-record-add.avif) **Add feature:** to add a record to the alphanumeric table
 * ![Icon: Record Modify](/img/manual-english-icon-record-modify.avif) **Modify features:** to modify the attributes of an existing record

Whenever a new feature/record is added or an existing feature/record is update, the attribute editing form and the respective editing widgets will be displayed as defined at the QGIS project level.

![Screenshot: Editing Form](/img/manual-english-editing-form.avif)

Any **mandatory fields will be marked with an asterisk**.

Any **unfulfilled constraints will be highlighted** with specific warning messages shown **in red**.

The changes made can be saved only after satisfying any constraints of mandatory and/or uniqueness.

For this reason the green button **SAVE** will be disabled until all constraints are met.

[Editing related records](editing-relations.md)
