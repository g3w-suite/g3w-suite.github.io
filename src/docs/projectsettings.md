# QGIS: project settings

_**This section describes how to optimize your QGIS projects to publish as a WebGis service.**_

G3W-SUITE version 3.11 is compatible with QGIS projects built with the LTR version of QGIS 3.44.

Thanks to the integration with QGIS Server, all the symbology aspects associated with the singoly layers are automatically reproduced on the WebGis service

In the QGIS cartographic projects you can set some parameters and options that affect functionalities and contents in the derivative WebGis service, such as:
* the **webgis service identification name**
* the associated **basic metadata**
* the **capabilities of the service**
* the possibility to **exclude some associated print layouts** on the WebGis service
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

## General aspects

- [Project properties and general settings](projectsettings-properties.md)

## Layers properties

- [Layer properties](projectsettings-layers.md)

## Print layouts

- [Print layouts and performance](projectsettings-output.md)

## Performances optimization

- [Print layouts and performance](projectsettings-output.md)
