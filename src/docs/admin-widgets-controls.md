# Widget constraints and search tools

[Back to Administration panel](g3wsuite_administration.md)

## Widgets management

### ![](/img/manual-english-icon-geoconstraints.png) ![](/img/manual-english-icon-alpha-constraints.png) Display and editing constraints

Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.

See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).


### ![](/img/manual-english-icon-hide-columns.png) Hide columns by User/Groups
**Thanks to this function it is possible to hide specific fields of a layer for consultation. This constraint can be differentiated for individual users or groups of users.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![](/img/manual-english-icon-hide-columns.png).

Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.

![](/img/manual-english-g3wsuite-administration-hide-columns-new.png)

Clicking on the item will open a modal window which will allow you to define:
 * list of fields to hide
 * list of users for whom these fields should be hidden 
 * list of users groups for whom these fields should be hidden

Once all the constraints have been setted, click on the OK to confirm the rules.



### ![](/img/manual-english-icon-widget.png) Widget setting - Search tools

**Using this icon it is possible to associate a series of widgets to the layer. The basic widget allows you to define search tools that will be available in the WebGis.**

#### Basic settings

In G3W-SUITE it is possible to create search widgets.

By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.

**NB: to create searches based on fields derived from simple joins (1:1/N:1) or from 1:N relation, you have to change the setting of the method used (from WMS to QGIS API).**

See [dedicated paragraph](settings#g3w-client-search-endpoint).


Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).

This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.

In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![](/img/manual-english-icon-widget.png)

![](/img/manual-english-g3wsuite-administration-project-widget-list.png)

By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.

These widgets can be **modified, deleted or disconnected** using the appropriate icons.

**ATTENTION: deleting a search** will delete it from all projects in which that search is active.

To **deactivate a search** from a project, simply disconnect it using the check-box on the right.

To **create a new search**, click on the link **`New widget`**.

In the pop-up that appears, the **`Search` type** have to be chosen.

![](/img/manual-english-g3wsuite-administration-project-widget-choose.png)

In the related form we can define:
 * **Form Title**
   * **`Type`:** "Search"
   * **`Name`:** name that G3W-SUITE will use to internally register the search widget.
 * **General configuration of research and results**
   * **`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface
   * **`Paginate results`:** option to activate pagination for the results list in order to avoid timeout problems in the case of a large number of results
 * **Search fields settings**
   * **`Field`:** field on which to carry out the research
   * **`Widget`:** method of entering the value to be searched
     * `InputBox`: manual compilation
     * `SelectBox`: values ​​shown via drop-down menu
     * `AutoCompleteBox`: values ​​shown through auto-complete mode
     * `DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.
   * **`Alias`:** alias assigned to the field that will appear in the search form
   * **`Description`:** description assigned to the field
   * **`Comparison operator`:** comparison operator (**=, <,>,> <,> =, <=, IN, LIKE, ILIKE**) through which the search query will be carried out. The **IN** operator simplifies searches where a field must be associated with multiple values (OR operator)
   * **`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.
   * **`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.   

The button ![](/img/manual-english-button-add.png) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.

The example below shows the compilation of the form for creating a search widget with serveral options.
![](/img/manual-english-g3wsuite-administration-project-search-form.png)

Once the form has been filled in, click on the **OK** button to save the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

The widget will already be **`connected`** and therefore **available in the WebGis interface**.

![](/img/manual-english-demo-search-result.png)


**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.

**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**


##### Dependency
Now it is possible to **define the dependence more or less strong** (strictly).

In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.

Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.


##### Tip
In the event that, at QGIS project level, the following editing widgets are associated with a field:
 * Value relations
 * Value maps
 * Relation reference

The values shown in the search tool will be those defined on the basis of the tables related via widegt.

**Warning: in the case of fields with more than 100 unique values, the WMS service does not allow to obtain the complete list of values. In this case it is recommended not to use the `SelectBox` method**

**Alternatively, you can use the QGIS API as a search method to overcome this limitation. See** [dedicated paragraph](settings#g3w-client-search-endpoint).

 
#### Multiple layers search

The **Other searching layers** option allows you to extend the search carried out to other layers.

If the additional layers have homologous fields (same name and type) the search will be extended to them.

The results will be differentiated according to the corresponding layer.

Especially useful in the case of multi geometric layers.

![](/img/manual-english-g3wsuite-administration-project-search-multilayers.png)


#### Search based on 1:N relation data
The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.

**N.B. to create searches based on fields derived from simple joins (1: 1 / N: 1) or from 1: N relation, you have to change the setting of the method used (from WMS to QGIS API).**
See [dedicated paragraph](settings#g3w-client-search-endpoint).

The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.


![](/img/manual-english-g3wsuite-administration-project-search-1-n.png)

### ![](/img/manual-english-icon-styles.png) Manage layer styles

If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.

It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.

![](/img/manual-english-g3wsuite-administration-styles.png)

### Project layers actions
At the top right, identified by the item "Project layers actions", there are icons dedicated to settings that act on multiple elements of the project:
   * ![](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users
   * ![](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users
   * ![](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level
