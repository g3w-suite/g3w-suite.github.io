# Layer tools

## Widgets management
Once a cartographic project has been published, thougth the icon ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.avif) it is possible to access the list of the geographical states that compose it and define some functional aspects that will be enabled at the cartographic client level.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.avif)

Next to each layer are a series of icons and checkboxes:
 * **Label:** layer alias applied at the QGIS project level
   * The eye icon shows the layer ID used in parameterized URLs.
 * **Name:** name of the layer (file or DB table)
 * ![Icon: Layertype](/img/manual-english-icon-layertype.avif) **Type:** illustrates the type of data (WMS, PostGis, SpatiaLite, GDAL / OGR ...)
 * **Embedded:** If the layer comes from an embedded project, the cell displays the name of the embedded project. Clicking the link takes you to the project management page.
 * **WMS external:** to speed up loading, the WMS layers present in a QGIS project are managed directly by Django and not by QGIS-Server.
     * In case of non-external WMS, the service is managed by Django and this eliminates cross-domain problems but the only managed GetFeatureInfo response type is GML.
     * The external WMS option allows obtaining a response to the query (GetFeatureInfo) even if the response is not in GML but also in HTML or text/plain format.
     * The option is available only if the WMS loaded on the QGIS project is associated with the same projection system as the project.
 * **WFS:** a check mark shows whether the layer is published as a WFS service or not
 * **Actions:** a series of icons dedicated to various functions
   * ![Icon: Cache](/img/manual-english-icon-cache.avif) **Caching Layer:** allows you to activate and manage the cache of the single layer at the project level
   * ![Icon: Editing](/img/manual-english-icon-editing.avif) **Editing layer:** shows if the online editing function is active on the layer and allows you to activate and define it
   * ![Icon: Filter Layer](/img/manual-english-icon-filter-layer.avif) **Hide layer by user/groups:** hide specific layers from the TOC based on specific users or groups of users
   * ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) **QPlotly widget:** add or manage plots created with DataPlotly QGIS plugin
   * ![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.avif) **Geo-constraints by user/group:** create or manage editing and visualization geo-constraints based on poligonal layers
   * ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.avif) **Alphanumeric and QGIS expressions constraints by user/groups:** create or manage editing and visualization constraints based on SLQ language or QGIS expressions
   * ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.avif) **Hide columns by User/Groups:** create or manage constraints on one or more fields of a layer based on single or group user/s
   * ![Icon: Widget](/img/manual-english-icon-widget.avif) **Widgets list:** shows how many widgets (eg searches) are associated with this layer and allows you to activate new ones
   * ![Icon: Styles](/img/manual-english-icon-styles.avif) **Manage layer styles:** manage multi-style layer
   * ![Icon: Scale Visibility](/img/manual-english-icon-scale-visibility.avif) **Scale visibility layer by Users/Groups:** allows you to define a visibility scale differentiated by user and/or user groups.  Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level
   * ![Icon: Fields Number](/img/manual-english-icon-fields-number.avif) **Preview fields (max):** allows you to define the number of fields shown in the preview of the results of a search and query. HTML formatting and image previews are managed in the preview fields.

 * **Download capabilities:** allows the download of the geographic and not geographic layers in various formats
   * **Download as shp/geotiff:** for vector and raster layers
   * **Download as GPKG (GeoPackage):** for supported vector layers, including layers without geometry
   * **Download as xls:** for supported vector layers, in .xls format
   * **Download as csv:** for supported vector layers, in .csv format
   * **Download as gpx:** for compatible vector layers, in .gpx format
   * **Download as PDF:** for supported vector layers, in .pdf format (limited to the attributes associated with individual features)
 * **Visibility capabilities:** allows you to define some elements in a generic way, i.e. without distinction between users.
   * **Hide attributes table:** make the attribute table unsearchable
   * **Hide legend:** do not show the associated legend
   * **Hide Layer TOC:** hide the layer in the TOC

**The number above each Action icon shows if and how many related objects are present.**

The functions present in the **Actions session** are described below.

### ![Icon: Cache](/img/manual-english-icon-cache.avif) Caching layer

With this icon it is possible to **activate/manage the cache of the single layers** and **create XYZ Tiles layer** that you can use as **Base Layer** in your WebGis.

The form allows you to:
 * **Active**: enable cache on the layer
 * **Action**:
   * **Reset cache:** limited to the specific layer
   * **Reset cache for project:** reset cache of all the layers in the project

The cache for the selected layer can be saved as a Base Layer, including when the published project contains other layers.

To do this you need to activate the **Base layer option** form and fill in the second part of the form:
 * Base layer title
 * Base layer description
 * Base layer attribution

The newly created base layer will be available to be associated with those available for the various Cartographic Groups.

Learn more about how to create a new base layer in the [dedicated section](admin-base-layers.md).


### ![Icon: Editing](/img/manual-english-icon-editing.avif) Editing layer

Use this icon to enable editing on individual layers and set permissions for users or groups.

See the dedicated section on [editing administration settings](editing-administration-settings.md).


### ![Icon: Filter Layer](/img/manual-english-icon-filter-layer.avif) Hide layer by user/groups

With this icon it will be possible to define the list of users (single and/or groups) who will be enabled to view this layer at the TOC and map level.

![Screenshot: G3W-SUITE Administration Hide Layer](/img/manual-english-g3wsuite-administration-hide-layer.avif)

[Configure charts](admin-charts.md)
