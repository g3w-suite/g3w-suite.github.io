# QGIS project settings for editing

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration

### QGIS project settings

#### Definition of editing widgets associated with individual attributes

In the QGIS project, for each layer it is possible to **define the structure of the attribute display module**.

The same structure will be used in the cartographic client when editing attributes.

The definition of the form structure can be managed, on QGIS, from the **`Properties of the vector`, in the `Attributes Form section`**.

![](/img/manual-english-editing-qgis-form-widget.png)

##### Conditionals forms based on QGIS expressions

Conditional forms based on QGIS expressions are supported and implemented for online editing/consulting.

It is therefore possible to define the visibility of a forms (form or group) and of the fields it contains, on the basis of the values defined on further fields when filling in the attributes.

##### Drill-down (cascading) forms

Drill-down (cascading) forms **based on QGIS expressions** are supported and implemented for online editing.

The functionality can be used to implement “drill-down” within editing forms, where the values available in one field depend on the values of other fields.

This function will be reflected in the consultation side.

#### Definition of editing widgets associated with individual attributes
At the QGIS project level (always from **`Vector Properties`**, **`Attribute Form`** section) it is possible to define an alias and an editing widget for each attribute.

The alias and editing widgets defined at the project level will be available during web editing with some limitations.

Below are the available widgets and any limitations:
 * **`Relation reference:`** with some option limitation
 * **`Checkbox`**
 * **`Date/time`:** with Display format supported
 * **`Attachment`**
 * **`Range`:** with default, minimum and maximum values supported
 * **`Text edit`:** multiline and html included
 * **`Unique values`:**: this widget will be equipped with a **pick layer** tool at the cartographic client level
 * **`Value map`**
 * **`Value relations`:**
   * Order value option supported
   * Allow multiple selections supported
   * QGIS filter expression supported
   * the widget will be equipped with a pick layer tool at the cartographic client level

 **The expression-based filter can also be dependent on the values of other fields on the form and useful to create cascading drill down.**
   
With regard to the **`Attachment widget`**, it is necessary to specify that the association of a multimedia file with a feature requires that this file is uploaded to a dedicated space (exposed on the web) on the server and that the association takes place via a URL that refers to that file.

This solution allows you to consult the associated attachments also from QGIS or from other GIS software.

**Additional settings at single layer level**

In the **`Attribute Form`** section of the **`Layer Properties`** it is also possible to define for every field:
 * **field editable or not**
 * **mandatory constraints**
 * **unique constraints**
 * **default values:** also based on QGIS expression and with **Apply default value** on update option supported
 * **conditional forms**
 
#### QGIS expressions and default values

**All the QGIS expressions can be used as default values.**

The default values defined for individual fields at the QGIS project level are inherited from the suite.

In this case, at the online edit level, the form relating to the field thus defined will be self-calculated and can be set not editable by the user.

**The result of the expression can also be dependent on the values of other fields on the form.**

Very useful in all cases where we want the values of a field to be calculated automatically through the potential of QGIS expressions.


The `Apply the default value also to the update` option is supported.

As in QGIS the default values are displayed in the form during editing and not only after saving.

#### Definition of 1:n relations
In the event that, at the QGIS project level, one or more 1: n type relationships have been associated with a layer (**`Project menu → Properties…`, `Relations` section**), it will be possible to carry out relational editing also on the webgis platform.

Also for the tables related in 1:n mode it will be possible to define the **attribute form structure, aliases and editing widgets** in the QGIS project.

These configurations and tools will automatically available  on the webgis platform.

#### Transaction Group

**Use transaction group to edit, save or rollback multiple layers changes at once**

When working with layers with the same source (es. layer from the same PostGreSQL database), activate the **`Automatically create transaction groups where possible`** option in **`Project → Properties… → Data Sources`** to sync their behavior (enter or exit the edit mode, save or rollback changes at the same time).

![](/img/manual-english-datasources.png)
