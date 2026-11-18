# Editing permissions

## Activation and configuration

### Administration settings

#### Activation of on-line editing on a single layer
To activate the online editing functions, access the **`Layer list`** section of the project within the administration panel of G3W-ADMIN.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.avif)

Identify the layer on which you want to activate the editing function and click on the **`Editing layer` icon** ![Icon: Editing](/img/manual-english-icon-editing.avif) located on the left

**Attention:** check that the layer format is among those supported by QGIS for the editing function

Clicking on the icon will open a modal window that will allow you to:
 * **Active:** activate the editing function
 * **Visible:** check on uncheck to show layer inside the list of layers to edit (useful for child layers in a 1:N relationship in order to allow editing only starting from the parent)
 * **Scale:** define the editing activation scale (only for geometric tables)
 * **define the Viewer users** (individuals or groups) **enabled** for online editing

Set editing permissions for each user or group:
 * **Add:** add feature, copy feature, add part to multipart
 * **Update geometry:** update vertex feature, move feature, add part to multipart, delete part from multipart, split features, dissolve features
 * **Update attributes:** update feature attributes, update attributes of selected features
 * **Delete:** delete features

I should be noted that:
 * **Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**
 * **Editor1 and Editor2 users**, **owners** of the project, are **enabled by default** to the online editing function

![Screenshot: Editing Setting](/img/manual-english-editing-setting.avif)

**NB: In case a user belongs to a user group, the permissions set will be added together.**

##### Ability to associate references to create/update G3W-SUITE users

Through these two optional settings it is possible to define four fields of the table of the layer being edited automatically filled in.

These fields will contain references to G3W-SUITE users and users group who creators or modifiers of the individual features edited.

All settings defined at the QGIS level for these fields (eg default values) will no longer be considered.

It is recommended that these fields be set as non-editable at the project level.

#### Activation of online editing on multiple layers at the same time
In the case of a project in which it is necessary to activate the online editing function on many layers, by defining the same options for each of them it is possible to use the Project layer action function.

![Icon: Multi Layer](/img/manual-english-multi-layer-icon.avif)

![Screenshot: Multi Layer Form](/img/manual-english-multi-layer-form.avif)

#### Copy editing permission from a user to the others

In the case of complex projects with many users enabled for editing, it is possible to use this tool to duplicate the editing permissions defined for a user and apply them to other users (both individuals and groups).

![Icon: Editing Clone](/img/manual-english-editing-clone-icon.avif)

![Screenshot: Editing Clone Setting](/img/manual-english-editing-clone-setting.avif)

#### 1:N relational editing
To allow editing on the related table in mode 1: n , the **editing function must also be activated** (always in the same way) **also for the related table** present in the project layers list.

[Editing constraints](editing-constraints.md)
