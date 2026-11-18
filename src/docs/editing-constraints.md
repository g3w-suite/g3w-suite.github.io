# Editing constraints

## Constraints setting

**G3W-SUITE supports two types of constraints:**
 * **alphanumeric (SQL) / QGIS expressions constraints**
 * **geographic constraints**
 
Both work in terms of visualization and/or editing

For each constraint, click the **Save icon** ![Icon: Save](/img/manual-english-icon-save.avif) to validate its rules, then click **Close** to confirm.

### Alphanumeric (SQL) / QGIS expressions Constraints
**Alphanumeric (SQL) / QGIS expression constraints allow you to define, for each published layer, the subset of features that can be viewed and/or edited by individual users and/or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, always at the level of the list of project layers, on the **`Alphanumeric constraints list` icon** ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.avif).

Clicking on the icon will show the list of any existing alphanumeric constraints and the item **`+ New alphanumeric constraint`** to create a new constraints.

![Screenshot: Editing Alpha Constrain Layer](/img/manual-english-editing-alpha-constrain-layer.avif)

Clicking on the item **`+ New constraint`** will open a modal window which will allow you to define a name and a description for the new constraint.

Choose where the filter applies:
 * display only
 * editing only
 * in both cases
 
![Screenshot: Editing Alpha Constrain Layer Init](/img/manual-english-editing-alpha-constrain-layer-init.avif)


After clicking the OK button, the constraint will appear in the list and can be parameterized using two ways of defining the rules:  

 * ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) **Provider's language / SQL dialect**
 * ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) **QGIS Expression**


#### Provider's language / SQL dialect Rules
Clicking on the icon ![Icon: Alphaconstraints Setting](/img/manual-english-icon-alphaconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Alpha Constrain Setting](/img/manual-english-editing-alpha-constrain-setting.avif)


#### QGIS Expressions Rules
Clicking on the icon **QGIS expression rules** ![Icon: Qgisconstraints Setting](/img/manual-english-icon-qgisconstraints-setting.avif) will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via **`QGIS expression`** and this allows to have a great degree of freedom in the ways in which to set these rules.

See the paragraph dedicated to the functions available directly on the [QGIS manual](https://docs.qgis.org/3.16/en/docs/user_manual/working_with_vector/expression.html).

![Screenshot: Editing Qgisconstrain Setting](/img/manual-english-editing-qgisconstrain-setting.avif)

In the dedicated panel it will be possible to check, modify and delete the defined rules.

![Screenshot: Alpha Constrain List](/img/manual-english-alpha-constrain-list.avif)


### Geo-constraints
**The online editing function also allows you to manage geo-constraints that allow the user to view and/or edit features only if they intersect or are contained within specific features of a second polygonal layer.**

This setting is also available for the AnonymousUser user

To activate a geographical constraint, you must click, always at the level of the list of project layers, on the **`Manage Geo-Constraints` icon** ![Icon: Constraints](/img/manual-english-icon-constraints.avif) which will appear once the online editing function is activated.

Clicking on the icon will show the list of any existing constraints and the item **`+ New geo-constraint`** to create a new geo-constraints.

![Screenshot: Editing Constrain Layer](/img/manual-english-editing-constrain-layer.avif)

Clicking on the item **`+ New geo-constraint`** will open a modal window which will allow you to **define the polygonal layer** (among those present in the project) **on which the constraint itself must be based**.

Choose where the filter applies:
 * display only
 * editing only
 * in both cases

![Screenshot: Geo Constrain Layer Init](/img/manual-english-geo-constrain-layer-init.avif)


Once the layer has been defined, the constraint will appear in the list and can be parameterized using the **Rules icon** ![Icon: Constraints Setting](/img/manual-english-icon-constraints-setting.avif)

Clicking on this icon will open a modal window which, by pressing the green button ![Button: Add](/img/manual-english-button-add.avif), it will allow you to **define, for each user and/or group of users, the rules of the constraints**.

The individual rules must be defined via  the **`Provider's language`** or the **`SQL dialect Rules`** associated with the format of the geo-constraints layer (es. use standard SQL if your geo-constraint layer is a PostGis layer)

The single rules must refer to the layer’s attributes and values.

![Screenshot: Editing Geoconstrain Setting](/img/manual-english-editing-geoconstrain-setting.avif)

In the alphanumeric constraints list you can see a summary of the setted rules.

![Screenshot: Editing Geoconstrain Layer Summary](/img/manual-english-editing-geoconstrain-layer-summary.avif)
