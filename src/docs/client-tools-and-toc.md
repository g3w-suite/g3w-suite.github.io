# Tools panel and table of contents

[Back to Cartographic client](g3wsuite_client.md)

## Tools panel

The upper part of the left bar contains, if activated, the following items:

### Legend
This session allows you to see the complete legend of the service.

### Charts
**View graphs created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) and activated at the admin session level.**

Check the plots in the list and consult them on the rigth panel.

![](/img/manual-english-g3wclient-plots.png)

The graphs are filterable based on the:
 * ![](/img/manual-english-g3wclient-plots-map-filter.png) features visible on the map
 * ![](/img/manual-english-g3wclient-plots-selection-filter.png) filter based on the selected features
 
These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.

The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).

The plots will automatically update after pan and zoom operations on the map

If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)

Appropriate **messages** at the single plots level will indicate the activation of these filters.

#### Charts based on 1:N data relation (child layer)

If the **chart is linked to a child layer in a 1:N relation**, it can also be displayed at the information level of the individual parent features

![](/img/manual-english-g3wclient-fomr-1-n-plots.png)

### Metadata
The metadata reported in this session derive from those set at the QGIS project level.

Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.

This content is divided into three sessions: **General, Data, Legend** and **Credits**
 * **`General`:** reports the **metadata defined on the QGIS project** in the item: **`Project →  Properties (QGIS Server session, Service Capabilities)`**.
   The URLs of the various OGC services associated with the map are also listed, as well as information about the EPSG and bounding boxes associated with the project. 
 * **`Data`:** reports **simple metadata associated with the individual layers**.
 * **` Legend`:** reports the legend of the entire project
 * **`Credits`:** references to the G3W-SUITE project and application version information

![](/img/manual-english-g3wclient-metadata-view.png)

### Bookmarks
This tool will display the spatial bookmarks defined and associated with the QGIS project.

The user, even if not logged in, will be able to create new bookmarks by simply positioning them in an area of ​​the map and then clicking on the **`+`** button to define the **`Name`** to associate with the bookmark.

These bookmarks will be saved in the browser cache and therefore always available until deleted.

![](/img/manual-english-spatial-bookmarks.png)

### Print
**Printing tool based on layouts defined on QGIS project.**

The tool allows you to choose:
 * **Template:** print layout among those associated with the published QGIS project
 * **Scale:** print scale, with delfault values ​​list, but also manually customizable
 * **DPI:** print resolution, with delfault values ​​list, but also manually customizable
 * **Rotation:** rotation angle
  * **Format:** print to PNG, JPG, SVG, PDF or GeoPDF
 * **Custom title:** using the **ItemIDs** at the print layout level of the QGIS project it is possible to insert one or more labels with **customized content in the print** from WebGis

On the map, a light rectangular area will allow you to define the print area.

![](/img/manual-english-g3wclient-print-tool.png)

If an **Atlas type print layout** is associated in the QGIS project, the layout reference will be available.
The cards to be printed are defined by referring to the atlas identifier defined in the print layout.

![](/img/manual-english-g3wclient-print-tool-atlas.png)

 The same panel allows you to create a screenshot (PNG or GeoTiff) of the area displayed on the map.
 
![](/img/manual-english-g3wclient-print-tool-screenshot.png)

### Search and Advanced Search

A classic ![](/img/manual-english-query-builder-icon.png) **Advanced Search** is present at the Search menu level.
Through this tool it is possible to:
 * carry out alphanumeric searches on geometric layers
 * save the query to reuse it until the end of the work session
 * edit a previously saved query
 
The saved query will be available until the browser cache is cleared

**NB:** fields not exposed as QGIS project-level WMS are not available for query building.

![](/img/manual-english-g3wclient-querybuilder.png)

**The Search menu contains the list of search tools defined through the Administration panel and custom searches created with the Query Builder.**

![](/img/manual-english-g3wclient-searc-list.png)


You choose the search you are interested in, fill in the required fields and click on the **`Search`** button.

![](/img/manual-english-g3wclient-search-example.png)

Additional information is displayed if you log in as Administrator

The **panel with the list of results** will open on the right side of the client, for each result the first three fields of the associated table will be displayed.

By positioning on the individual results, the corresponding features will be highlighted on the map; clicking on the individual results you can consult all the attributes.

Zoom to features and download icons are available for results (single or cumulative)

![](/img/manual-english-g3wclient-search-example.png)

### Editing layer

Activation of editing session. 

Available only after activation of the editing function and based on the powers of the logged in user

### Choose Theme
In the event that Themes (Views) are defined in the QGIS project, a specific choice menu will be available in the Layers session of the TOC.

The choice of a Theme will determine the automatic activation of the layers and related styles, defined in the Theme itself.

The name of the chosen theme will be displayed prominently in this session.

#### User themes
The logged in user can create customized themes in the same way as he prepares them in QGIS, i.e. by defining the on/off layers and associating any specific styles with the individual layers.

By clicking on the **+** button it will be possible to define a name to associate and create the Theme.

The created themes will always be available to the user who defined them.

Once created, the User Themes will be selectable, overwritable and editable using the icons shown next to each of them.

![](/img/manual-english-g3wclient-theme.png)

## TOC session

The midle part of the left bar contains the following items:


**This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.**

If the **`Show features count`** function is activated in the project, the layer will show the number of total features and based on the subdivision linked to the symbology.

In case of multi-style associated with the layer, the number of geometries reported will vary following the passage from one style to another.

![](/img/manual-english-g3wclient-features-count.png)

In the list of layers, right click on the name of the single layer shows the following items:
 * **Name and geometry type** of the layer
 * **Metadata:** descriptive information inherited from what has been defined, at QGIS project level, in the 'Abstract' form of the 'QGIS Server' session of the 'Layer Properties'
 * **Edit layer:** menu available following activation and based on user permissions
 * **Legend:** to view the legend tab
 * **Zoom to layer:** to zoom in on the extension of the layer
 * **Open attribute table:** to consult the associated attribute table
 * **Styles:** to choose the style to be applied to the layer, in the case of multi-style layers
 * **Opacity:** management of the level of transparency/opacity
 * **Filters:** management, based on the logged in user, of the filters associated with the layer
 * **Export:** download of the layer in different formats, based on what is defined in the Administration session
 * **Layer settings:** link to the layer administration section (available only if logged in as an administrator user)

![](/img/manual-english-g3wclient-layer-function.png)

Double clicking on the layer or Layer Group zooms to the extent of the layer or Group content.

It is possible to hide, automatically, layers from the TOC when they have no records. 

Useful when using filters on layers or geographic views. 

### Attribute table

The attribute table (resizable) is equipped with **paging function, highlight function and zooming** to the associated features.

In the case of links to **multimedia content**, the previews of the images and/or the **Open** button will be displayed for consultation of different types of content.

To the left of each record in the table there are two/three tools:
 * checkbox to select the records/feature
 * the ‘Form view‘ icon to open the feature attributes form
 * in the case of a layer editable by the user, an editing icon to allow direct modification of the feature
 * the ‘Show relations’ icon to open the list of 1:N relations (if present) of thath parent record

![](/img/manual-english-g3wclient-table-view.png)

A **generic filter**, positioned at the top right, is applied generically to the contents of all the fields, and it will allow you to filter the list of displayed records. 

**Filters based on the contents of the individual fields** are available at the top of each column.

The **Update results when map moves** icon ![](/img/manual-english-g3wclient-mapfilter-table.png), located in the bottom left corner, allows you to filter the records of the table according to the features visible in the map.

It is possible to **select the features of the individual layers and apply filters** that will affect:
 * on the map content
 * on the attribute table content
 * on the contents of the plots
 * on print contents
 * on the editable geometries

The selection of features can be made:
 * at the attribute table level (through the checkboxes on the left of each records)
 * on the results of a query (add / remove from current selection)
 * on the results of a query (add / remove from current selection)

At the same time, additional icons appear:
 * on the layer attribute table, in the bottom left corner
 * to the right of the layer on the TOC
 * at the level of the relevant plots

The icons, palced in the left buttom corner of the attribute, table allow you to:
 * ![](/img/manual-english-g3wclient-selection-table-clear.png) Clear selection
 * ![](/img/manual-english-g3wclient-selection-table-invert.png) Invert selection
 * ![](/img/manual-english-g3wclient-selection-table-filter.png) Add/Remove filter

The icons to the right of the layer on the TOC allow you to:
 * Clear selection
 * Enable/Disable  filter

![](/img/manual-english-g3wclient-selection-icon-toc.png)

When one or more features are selected, they appear highlighted in red on the map.
Activation of the filter is reflected:
 * on the map content
 * on the attribute table content
 * on the data displayed by plots
 * on the print contents

 ![](/img/manual-english-g3wclient-table-select.png)


#### Filter users based
**On the client you can select (highlight) and filter a subset of vector layer geometries.**

It is possible to activate a filter on a layer starting from:
 * query results
 * search results
 * attribute table management

To be filtered, the geometries object of the filter must first be selected.

Following activation of the filter, a logged in user (not AnonymosUser) will be able to save this filter to be recalled in subsequent work sessions.

Saving the filter occurs via the dedicated icon present at layer level in the legend and in the results form.

![](/img/manual-english-filter-save.png)

The saved filters can be recovered via the dedicated menu that can be viewed by right-clicking on the name of the layer

![](/img/manual-english-filter-load.png)

The presence of an active filter on the layer is highlighted by the red icon next to the layer name.

To deactivate an active filter, simply click on the icon itself.

![](/img/manual-english-filter-loaded.png)

We remind you that activating a filter affects:
 * geometries visible on the map
 * records visible on attribute table
 * editable geometries
 * features underlying the graphs
 * print contenent
