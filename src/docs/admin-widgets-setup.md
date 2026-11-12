# Widget and layer setup

[Back to Administration panel](g3wsuite_administration.md)

## Widgets management
Once a cartographic project has been published, thougth the icon ![](/img/manual-english-iconsmall-layerlist.png) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.

![](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Next to each layer are a series of icons and checkboxes:
 * **Label:** layer alias applied at the QGIS project level
   * The eye icon allows you to know the ID associated with the layer at the project level, this ID will be useful for creating parameterized URLs
 * **Name:** name of the layer (file or DB table)
 * ![](/img/manual-english-icon-layertype.png) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)
 * **Embedded:** If the layer comes from an embedded project, the cell displays the name of the embedded project. Clicking the link takes you to the project management page.
 * **WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.
     * In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.
     * The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.
     * The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.
 * **WFS:** a check mark shows whether the layer is published as a WFS service or not
 * **Actions:** a series of icons dedicated to various functions
   * ![](/img/manual-english-icon-cache.png) **Caching Layer:** allows you to activate and manage the cache of the single layer at the project level
   * ![](/img/manual-english-icon-editing.png) **Editing layer:** shows if the online editing function is active on the layer and allows you to activate and define it
   * ![](/img/manual-english-icon-filter-layer.png) **Hide layer by user/groups:** hide specific layers from the TOC based on specific users or groups of users
   * ![](/img/manual-english-icon-dataplotly.png) **QPlotly widget:** add or manage plots created with DataPlotly QGIS plugin
   * ![](/img/manual-english-icon-geoconstraints.png) **Geo-constraints by user/group:** create or manage editing and visualization geo-constraints based on poligonal layers
   * ![](/img/manual-english-icon-alpha-constraints.png) **Alphanumeric and QGIS expressions constraints by user/groups:** create or manage editing and visualization constraints based on SLQ language or QGIS expressions
   * ![](/img/manual-english-icon-hide-columns.png) **Hide columns by User/Groups:** create or manage constraints on one or more fields of a layer based on single or group user/s
   * ![](/img/manual-english-icon-widget.png) **Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones
   * ![](/img/manual-english-icon-styles.png) **Manage layer styles:** manage multi-style layer
   * ![](/img/manual-english-icon-scale-visibility.png) **Scale visibility layer by Users/Groups:** allows you to define a visibility scale differentiated by user and/or user groups.  Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level
   * ![](/img/manual-english-icon-fields-number.png) **Preview fields (max):** allows you to define the number of fields shown in the preview of the results of a search and query. HTML formatting and image previews are managed in the preview fields.

 * **Download capabilities:** allows the download of the geographic and not geographic layers in various formats
   * **Download as shp/geotiff:** for vector and raster layers
   * **Download as GPK:** for geographic or not geographic layers
   * **Download as xls:** for all types of layers, in .xls format
   * **Download as csv:** for all types of layers, in .csv format
   * **Download as gpx:** for geographic layers, in .gpx format
   * **Download as PDF:** for all types of layers, in .pdf format (limited to the attributes associated with individual features)
 * **Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.
   * **Hide attributes table:** make the attribute table unsearchable
   * **Hide legend:** do not show the associated legend
   * **Hide Layer TOC:** hide the layer in the TOC

**The number above each Action icon shows if and how many related objects are present.**

The functions present in the **Actions session** are described below.

### ![](/img/manual-english-icon-cache.png) Caching layer

With this icon it is possible to **activate/manage the cache of the single layers** and **create XYZ Tiles layer** that you can use as **Base Layer** in your WebGis.

The form allows you to:
 * **Active**: enable cache on the layer
 * **Action**:
   * **Reset cache:** limited to the specific layer
   * **Reset cache for project:** reset cache of all the layers in the project

If the published project contains only one layer is it possible to convert this WebGis service into a Base Layer. 

To do this you need to activate the **Base layer option** form and fill in the second part of the form:
 * Base layer title
 * Base layer description
 * Base layer attribution

The newly created base layer will be available to be associated with those available for the various Cartographic Groups.

Learn more about how to create a new base layer in the [dedicated section](admin-base-layers.md).


### ![](/img/manual-english-icon-editing.png) Editing layer

Through this icon it is possible to activate the online editing function on the individual layers and define the permissions for individual / groups of users

See the dedicated section on [editing administration settings](editing-administration-settings.md).


### ![](/img/manual-english-icon-filter-layer.png) Hide layer by user/groups

With this icon it will be possible to define the list of users (single and/or groups) who will be enabled to view this layer at the TOC and map level.

![](/img/manual-english-g3wsuite-administration-hide-layer.png)



### ![](/img/manual-english-icon-dataplotly.png) QPlotly widget

#### Activate charts on your WebGis

**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.

At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![](/img/manual-english-icon-dataplotly.png) and load the xml by clicking on the **'New Qplotly widget'** button.

As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.

After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:
 * **Edit icon:** to reload the XML file after editing the chart in QGIS
 * **Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)
 * **Download icon:** to download the XML
 * **Related widgets icon:** to create multiple charts (see the dedicated section below)
 * **Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client
 * **Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)

For each chart, the following information is displayed:
 * **Title:** defined in the DataPltly plugin
 * **Type:** chart type
 * **Linked checkbox:** to activate/deactivate the chart without removing it
 
![](/img/manual-english-charts-admin.png)

It is also possible:
 * **download the plot XML file** to reuse it in QGIS
 * **define the activation status** of the plots when the WebGis service is started

![](/img/manual-english-g3wsuite-administration-plots.png)

The title of the chart, defined at the plugin level, will be the unique identifier.

At client level, it will be possible to **filter plots based on the geometries visible on the map and/or selected by the user**.

![](/img/manual-english-g3wsuite-qgis-plots.png)
![](/img/manual-english-g3wsuite-client-plots.png)

#### Multiple charts

The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.

In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.

Steps to create a multiple graph:
 * access the list of graphs associated with a specific layer
 * click the Related widgets icon for one of the graphs to which you want to associate other graphs
 * in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer
 * sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).
 
![](/img/manual-english-charts-admin-multicharts.png)

#### Charts based on 1:N data relation (child layer)

If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.

![](/img/manual-english-g3wclient-fomr-1-n-plots.png)

![](/img/manual-english-charts-on-childs.png)

#### Chart visibility
Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).

Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:
 * **Sidebar:** only on the main chart panel
 * **Query:** only associated with parent attributes only at the parent feature attribute level
 * **Sidebar, Query:** in both positions (default)

#### Chart order
On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.

To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![](/img/manual-english-icon-chart-order.png)

You can use Drag&Drop to define the order on the widget list

![](/img/manual-english-chart-order-settings.png)
