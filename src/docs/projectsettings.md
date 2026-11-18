# QGIS: project settings

_**This section describes how to optimize your QGIS projects to publish as a WebGis service.**_

G3W-SUITE version 3.11 is compatible with QGIS projects built with the LTR version of QGIS 3.44.

Thanks to the integration with QGIS Server, all the symbology aspects associated with the singoly layers are automatically reproduced on the WebGis service

In the QGIS cartographic projects you can set some parameters and options that affect functionalities and contents in the derivative WebGis service, such as:
* the **webgis service identification name**
* the associated **basic metadata**
* the **capabilities of the service**
* **exclude associated print layouts** from the WebGIS service
* which layers are **queryable and searchable**
* which layers to expose with the different **OGC services (WMTS, WFS, WCS)**
* which **fields** (for each vector data) are exposed as WMS and/or WFS
* the **Themes (Views)** defined at the project level
* layer/group management from **embedded projects**
* the **structure of the query form** visible on the WebGis service
* the **editing widget**, **constraints** and **default values** (also based on QGIS expressions) for every fields of vector layers
* the associated **print layouts, atlas included**

The following paragraphs describe which QGIS project settings are more relevant in relation to the published WebGis service.

## Project property

- [Project properties and general settings](projectsettings-properties.md)

## Layers properties

- [Layer properties](projectsettings-layers.md)

## Print layouts
Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.

**Print layouts can contain more than one `Map` items and panoramic maps.**

You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.

**Atlas and report are also supported.**

Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.

See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographical-data-synchronization-on-the-server).

## Performances optimization

### Mandatory rules

* PostGreSQL/PostGis, SQLite/Spatialite and GeoPKG layers must have a **primary key**
* the primary key field and all fields involved in search, join, 1:n or N:M relations or editing function have to be **published as WMS**
* **don't use commas for aliases** associated with layers
* style settings defined at the auxiliary data level are not supported

### Tips
* when using rule-based/categorized classification **create indexes on the column(s) involved** in the rule expression
* start the project with **only a few layers turned on** by default
* do not exceed three nesting levels in the groups of layers defined in the TOC
