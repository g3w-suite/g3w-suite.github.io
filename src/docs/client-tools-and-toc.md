# Map tools

## Tools panel

The upper part of the left bar contains, if activated, the following items:

### Legend
View the service's complete legend.

### Charts
**View graphs created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) and activated at the admin session level.**

Check the plots in the list and consult them on the rigth panel.

![Screenshot: G3wclient Plots](/img/manual-english-g3wclient-plots.avif)

The graphs are filterable based on the:
 * ![Screenshot: G3wclient Plots Map Filter](/img/manual-english-g3wclient-plots-map-filter.avif) features visible on the map
 * ![Screenshot: G3wclient Plots Selection Filter](/img/manual-english-g3wclient-plots-selection-filter.avif) filter based on the selected features
 
These **filters** are also **reflected on the plots associated to the related data** (in 1:N mode) based on the visible and/or selected parent features.

The **filter based on the map content** can be activated globally on all plots (icon at the top of the panel dedicated to charts) or on only some specific plots (icon placed at the level of the individual plots).

The plots will automatically update after pan and zoom operations on the map

If activated, the **filter based on the selected features** is automatically activated on all related plots (associated with the same layer and with the 1:N relationed tables)

Appropriate **messages** at the single plots level will indicate the activation of these filters.

#### Charts based on 1:N data relation (child layer)

If the **chart is linked to a child layer in a 1:N relation**, it can also be displayed at the information level of the individual parent features

![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.avif)

### Metadata
The metadata reported in this session derive from those set at the QGIS project level.

Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.

This content is divided into three sessions: **General, Data, Legend** and **Credits**
 * **`General`:** reports the **metadata defined on the QGIS project** in the item: **`Project →  Properties (QGIS Server session, Service Capabilities)`**.
   The URLs of the various OGC services associated with the map are also listed, as well as information about the EPSG and bounding boxes associated with the project. 
 * **`Data`:** reports **simple metadata associated with the individual layers**.
 * **` Legend`:** reports the legend of the entire project
 * **`Credits`:** references to the G3W-SUITE project and application version information

![Screenshot: G3wclient Metadata View](/img/manual-english-g3wclient-metadata-view.avif)

### Bookmarks
This tool will display the spatial bookmarks defined and associated with the QGIS project.

The user, even if not logged in, will be able to create new bookmarks by simply positioning them in an area of ​​the map and then clicking on the **`+`** button to define the **`Name`** to associate with the bookmark.

These bookmarks will be saved in the browser cache and therefore always available until deleted.

![Screenshot: Spatial Bookmarks](/img/manual-english-spatial-bookmarks.avif)

### Print
**Printing tool based on layouts defined on QGIS project.**

Choose:
 * **Template:** print layout among those associated with the published QGIS project
 * **Scale:** print scale, with delfault values ​​list, but also manually customizable
 * **DPI:** print resolution, with delfault values ​​list, but also manually customizable
 * **Rotation:** rotation angle
  * **Format:** print to PNG, JPG, SVG, PDF or GeoPDF
 * **Custom title:** using the **ItemIDs** at the print layout level of the QGIS project it is possible to insert one or more labels with **customized content in the print** from WebGis

On the map, a light rectangular area will allow you to define the print area.

![Screenshot: G3wclient Print Tool](/img/manual-english-g3wclient-print-tool.avif)

If an **Atlas type print layout** is associated in the QGIS project, the layout reference will be available.
The cards to be printed are defined by referring to the atlas identifier defined in the print layout.

![Screenshot: G3wclient Print Tool Atlas](/img/manual-english-g3wclient-print-tool-atlas.avif)

 The same panel allows you to create a screenshot (PNG or GeoTiff) of the area displayed on the map.
 
![Screenshot: G3wclient Print Tool Screenshot](/img/manual-english-g3wclient-print-tool-screenshot.avif)

### Search and Advanced Search

From the **Search** menu, open ![Icon: Query Builder](/img/manual-english-query-builder-icon.avif) **Advanced Search** to build your own filter.

1. Select a layer and build an expression using its available fields and the operators. Select a field and use **Search a value** to look up its distinct values.
2. Click **Run** to see matching records, or **Save** to give the filter a name and reuse it from the **Search** menu.

Saved filters are personal to the browser and the WebGIS project. You can run, edit or delete them from **Search**. They survive a page reload but are lost if you clear the site's stored data; they are not shared with other users.

![Screenshot: G3wclient Querybuilder](/img/manual-english-g3wclient-querybuilder.avif)

The **Search** menu also lists searches configured by the administrator. Unlike personal filters, these open a form with predefined fields.

![Screenshot: G3wclient Searc List](/img/manual-english-g3wclient-searc-list.avif)


Open a configured search, fill in the required fields and click **Search**.

![Screenshot: G3wclient Search Example](/img/manual-english-g3wclient-search-example.avif)

Additional information is displayed if you log in as Administrator

The **panel with the list of results** will open on the right side of the client, for each result the first three fields of the associated table will be displayed.

By positioning on the individual results, the corresponding features will be highlighted on the map; clicking on the individual results you can consult all the attributes.

Zoom to features and download icons are available for results (single or cumulative)

![Screenshot: G3wclient Search Example](/img/manual-english-g3wclient-search-example.avif)

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

![Screenshot: G3wclient Theme](/img/manual-english-g3wclient-theme.avif)

[Layers and attribute table](client-layers.md)
