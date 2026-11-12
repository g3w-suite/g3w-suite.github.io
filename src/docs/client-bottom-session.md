# Bottom panel and time series

[Back to Cartographic client](g3wsuite_client.md)

## Bottom session

The bottom part of the left bar contains the following items:

### Add layer

Through this tool the user can add custom WMS, TSM or local file layers to the WebGis service.

#### WMS (URL)

The user can add one or more WMS service by defining:
 * **WMS URL**
 * **Name**

Clicking on Connect buttom, you can view the list of layers associated with the service and choose which one (or which ones) to load into the map by defining:
 * the **Projection system** to be associated
 * the **Position** (top or buttom) with respect to the other layers of the project
 * the **Opacity** of the layer
 * an alternatice **Name** respect the original
 
![Screenshot: G3wclient Add WMS](/img/manual-english-g3wclient-add-wms.png)

The WMS layer will be added to the map and TOC after the project layer list.

**N.B.** the added WMS layer cannot not be queried.

The list of WMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.

#### TMS (URL)
The user can add one or more TSM service by defining:
 * **URL:** the TMS service URL
 * **Name:** custom name to associate with the service
 * **Projection system** to be associated
 * **Position** (top or buttom) with respect to the other layers of the project
 * **Opacity** of the layer

![Screenshot: G3wclient Add Tms](/img/manual-english-g3wclient-add-tms.png)

The TMS layer will be added to the map and TOC after the project layer list.

**N.B.:** the added TMS layer cannot not be queried.

The list of TMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.

#### Local file

The user can add one or more local layer uploading it in the form.

The formats currently managed are:
 * gml
 * geojson
 * kml
 * kmz
 * gpx
 * csv
 * shapefile (zipped)

For each layer you need to specify:
 * associated **Projection** system
 * **Position** (top or buttom) with respect to the other layers of the project
 * **Persistent data:** allows you to specify whether or not the layer should be deleted when the session is closed
 * **Label (optional):** the field to use to label the features
 * Layer **color** and **opacity**

![Screenshot: G3wclient Add Layer Local](/img/manual-english-g3wclient-add-layer-local.png)

### Change map

The item allows you to switch to a different map, among those accessible to the user, referring to the current extension and scale.

Clicking this item will open a modal panel displaying other maps in the same Cartographic Group as the current map.

You can change the map view while maintaining the current scale and extent.

An arrow icon in the upper left corner will allow you to navigate between Cartographic Groups (and possibly Cartographic Macrogroups) to select other maps.

## Time series

**NB: the Time Series function is only available with a QGIS Server version >= 3.26**

This version of G3W-SUITE manages the temporal aspects for both vector and raster layers but with limitations:
 * **vector layers:** limited to the **Single field with Date/Time** configuration
 * **raster layers:** Mesh layer
 * **WMS-T**

 It is possible to create animations based on multiple temporal layers both raster and vector.

If in the QGIS project  a temporal vector/raster layer on which the **Dynamic temporal control** property has been activated is present, the client will show an additional panel called **Time series**.

This panel will allow you to:
 * define the start/end date of the time series
 * define the step of the animation
 * start and manage the temporal animation

![Screenshot: G3wclient Timeseries Tool](/img/manual-english-g3wclient-timeseries-tool.png)

The modification of the start date of the series will determine the updating of the map with the visualization of the layer in coherence with the chosen date.

**Pay attention: to use the Time series function for raster data, it must also be activated at the level of the G3W-ADMIN layer properties.**

![Screenshot: G3wclient Timeseries Admin](/img/manual-english-g3wclient-timeseries-admin.png)
