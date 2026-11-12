# Administration settings for editing

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration

### Administration settings

#### Activation of on-line editing on a single layer
To activate the online editing functions, access the **`Layer list`** section of the project within the administration panel of G3W-ADMIN.

![](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Identify the layer on which you want to activate the editing function and click on the **`Editing layer` icon** ![](/img/manual-english-icon-editing.png) located on the left 

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

![](/img/manual-english-editing-setting.png)

**NB: In case a user belongs to a user group, the permissions set will be added together.**

##### Ability to associate references to create/update G3W-SUITE users

Through these two optional settings it is possible to define four fields of the table of the layer being edited automatically filled in.

These fields will contain references to G3W-SUITE users and users group who creators or modifiers of the individual features edited.

All settings defined at the QGIS level for these fields (eg default values) will no longer be considered.

It is recommended that these fields be set as non-editable at the project level.

#### Activation of online editing on multiple layers at the same time
In the case of a project in which it is necessary to activate the online editing function on many layers, by defining the same options for each of them it is possible to use the Project layer action function.

![](/img/manual-english-multi-layer-icon.png)

![](/img/manual-english-multi-layer-form.png)

#### Copy editing permission from a user to the others

In the case of complex projects with many users enabled for editing, it is possible to use this tool to duplicate the editing permissions defined for a user and apply them to other users (both individuals and groups).

![](/img/manual-english-editing-clone-icon.png)

![](/img/manual-english-editing-clone-setting.png)

#### 1:N relational editing
To allow editing on the related table in mode 1: n , the **editing function must also be activated** (always in the same way) **also for the related table** present in the project layers list.

#### Constraints setting

**G3W-SUITE allows you to manage two types of constraints:**
 * **alphanumeric (SQL) / QGIS expressions constraints**
 * **geographic constraints**
 
Both work in terms of visualization and/or editing

For each constraint, click the **Save icon** ![](/img/manual-english-icon-save.png) to validate its rules, then click **Close** to confirm.

##### Alphanumeric (SQL) / QGIS expressions Constraints
**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![](/img/manual-english-icon-alpha-constraints.png).

Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.

![](/img/manual-english-editing-alpha-constrain-layer.png)

Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.

In the form it is possible to specify whether this filter will act at the level:
 * display only
 * editing only
 * in both cases
 
![](/img/manual-english-editing-alpha-constrain-layer-init.png)


After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:  

 * ![](/img/manual-english-icon-alphaconstraints-setting.png) **Provider's language / SQL dialect**
 * ![](/img/manual-english-icon-qgisconstraints-setting.png) **QGIS Expression**


###### Provider's language / SQL dialect Rules
Clicking on the icon ![](/img/manual-english-icon-alphaconstraints-setting.png) will open a modal window which, by pressing the green button ![](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![](/img/manual-english-editing-alpha-constrain-setting.png)


###### QGIS Expressions Rules
Clicking on the icon **QGIS expression rules** ![](/img/manual-english-icon-qgisconstraints-setting.png) will open a modal window which, by pressing the green button ![](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.

See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).

![](/img/manual-english-editing-qgisconstrain-setting.png)

In the dedicated panel it will be possible to check, modify and delete the defined rules.

![](/img/manual-english-alpha-constrain-list.png)


##### Geo-constraints
**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**

This setting is also available for the AnonymousUser user

To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![](/img/manual-english-icon-constraints.png) which will appear once the online editing function is activated.

Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.

![](/img/manual-english-editing-constrain-layer.png)

Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.

In the form it is possible to specify whether this filter will act at the level:
 * display only
 * editing only
 * in both cases

![](/img/manual-english-geo-constrain-layer-init.png)


Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![](/img/manual-english-icon-constraints-setting.png)

Clicking on this icon will open a modal window which, by pressing the green button ![](/img/manual-english-button-add.png), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![](/img/manual-english-editing-geoconstrain-setting.png)

In the alphanumeric constraints list you can see a summary of the setted rules.

![](/img/manual-english-editing-geoconstrain-layer-summary.png)
