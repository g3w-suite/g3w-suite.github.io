---
title: Search widgets
description: Use this icon to add widgets to the layer. The basic widget defines search tools available in the WebGIS.
---

# Search widgets

## ![Icon: Widget](/img/manual-english-icon-widget.avif) Widget setting - Search tools

**Use this icon to add widgets to the layer. The basic widget defines search tools available in the WebGIS.**

### Basic settings

Create search widgets in G3W-SUITE.

By default, searches can be built on individual vector layers based on the fields of the table associated with the layer.



Every search widget will be saved by referring to the layer identifiers (for example the DB parameters: IP, DB name, schema, layer name).

This aspect allows, once a search widget for a layer has been created, to have it available on all the projects in which the layer is present, without having to rebuild the widget from scratch each time.

In the list of layers present within the project, **identify the layer on which to create and associate the search widget** and click on the icon ![Icon: Widget](/img/manual-english-icon-widget.avif)

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.avif)

By clicking on the icon, the list of already active (or activatable) widgets associated with the layer will be shown.

These widgets can be **modified, deleted or disconnected** using the appropriate icons.

**ATTENTION: deleting a search** will delete it from all projects in which that search is active.

To **deactivate a search** from a project, simply disconnect it using the check-box on the right.

To **create a new search**, click on the link **`New widget`**.

In the pop-up that appears, the **`Search` type** have to be chosen.

![Screenshot: G3W-SUITE Administration Project Widget Choose](/img/manual-english-g3wsuite-administration-project-widget-choose.avif)

In the related form we can define:
 * **Form Title**
   * **`Type`:** "Search"
   * **`Name`:** name that G3W-SUITE will use to internally register the search widget.
 * **General configuration of research and results**
   * **`Search title`:** title that will become available in the **'Research'** panel of the WebGis interface
   * **`Paginate results`:** paginate the results list to avoid timeouts when it is large
 * **Search fields settings**
   * **`Field`:** field on which to carry out the research
   * **`Widget`:** method of entering the value to be searched
     * `InputBox`: manual compilation
     * `SelectBox`: values ​​shown via drop-down menu
     * `AutoCompleteBox`: values ​​shown through auto-complete mode
     * `DateTimeBox`: widget to be used exclusively for date type fields. On the client, the user will define the date/time to search through the calendar/clock widget.
   * **`Alias`:** alias assigned to the field that will appear in the search form
   * **`Description`:** description assigned to the field
   * **`Comparison operator`:** operator used for the search (**=, <, >, <>, >=, <=, IN, LIKE, ILIKE**). **IN** matches a field against any of several values.
   * **`Use alternative unique values`** (for SelectBox widget):  possibility to associate a layer of the QGIS project, that reports the list of the unique values to show in the search field. The filed that report unique values must have the some name of the filed setted for the search. This greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool, especially in cases where there are numerous records with a small number of unique values.
   * **`Dependency`:** this parameter (optional) allows, only in the case of **SelectBox** or  **AutoCompleteBox** widgets, to show the list of values of a field filtered according to the value defined for the previous fields.   

The button ![Button: Add](/img/manual-english-button-add.avif) allows you to add additional fields for the construction of the search query currently manageable through **AND/OR operators**.

The example below shows the compilation of the form for creating a search widget with serveral options.
![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.avif)

Once the form has been filled in, click on the **OK** button to save the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

The widget will already be **`connected`** and therefore **available in the WebGis interface**.

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.avif)


**IMPORTANT:** the created search widget will now be available (disconnected) for all projects in which the layer with which it has been associated will be present.

**This will allow you not to have to recreate the widget several times and to decide in which projects to activate the search and in which not.**


#### Dependency
Set the **dependency level** (strict or not).

In case of **strictly dependence**, the values of the dependent fields will be loaded **only after** the choice of the value of the field on which the dependency depends.

Otherwise it will be possible to define the values of the individual fields freely and **without a specific order**. The values available for the other fields will in any case depend on the choice made.


#### Tip
In the event that, at QGIS project level, the following editing widgets are associated with a field:
 * Value relations
 * Value maps
 * Relation reference

The values shown in the search tool will be those defined on the basis of the tables related via widegt.

**Tip:** Use `AutoCompleteBox` for fields with many distinct values, so users can type to narrow the suggestions instead of browsing a long list.

 
### Multiple layers search

The **Other searching layers** option allows you to extend the search carried out to other layers.

If the additional layers have homologous fields (same name and type) the search will be extended to them.

The results will be differentiated according to the corresponding layer.

Especially useful in the case of multi geometric layers.

![Screenshot: G3W-SUITE Administration Project Search Multilayers](/img/manual-english-g3wsuite-administration-project-search-multilayers.avif)


### Search based on 1:N relation data
The option allows you to create a search based on the fields of a table (child in a 1:N relation) and obtain results relating to the parent layer of the relation.

The **Relations** option allows you to to define the relationship to be used (if present) to identify the parent layer whose results will be shown.


![Screenshot: G3W-SUITE Administration Project Search 1 N](/img/manual-english-g3wsuite-administration-project-search-1-n.avif)
