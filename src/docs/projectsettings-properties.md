# Project properties and general settings

[Back to QGIS project settings](projectsettings.md)

## Project property

Defining some parameters related to project properties is essential for defining:
 * Project title and description
 * Queryable layers
 * OGC services through which to expose project data and related projection systems
 * Initial extension of the webGIS service

From the **`Project → Properties`** menu, you can access the **`Project Properties`** window and the three submenus of our interest:
 * **General**
 * **Data sources**
 * **QGIS server**

### General
#### General Settings
**In this section it is possible to define the title of the project, consequently the `title of the WebGis service`.**

This title will be used at the G3W-SUITE application level to uniquely identify the published project; for this reason **it will not be possible to assign the same name to different projects published on the WebGis service**.

**We advise against using special characters, or numbers in the project name.**

![](/img/manual-english-projecttitle.png)

### Data sources

The option **`Automatically create transaction group where possible`** is automatically inherited in the online editing function.

#### Layers Capabilities

**This submenu defines the **querable and/or searchable layers** at the WebGis service level.**
 * Check the **`Identifiable`** column if you want that the layer will be searchable on the WMS service and then in the webgis service
 * Check the **`Searchable`** column if you want that the layer will be querable on the WMS service and then in the webgis service
 

**NB: this differentiation is only possible by using the QGIS APIs such as Search URL endpoint.**
See [dedicated paragraph](settings#g3w-client-search-endpoint)


![](/img/manual-english-datasources.png)

### QGIS Server

##### Service capabilities
**In this section it is possible to define the `capabilities of the service`**.

This information, together with info about the structure of the attribute tables of the layers present in the project, will be displayed in the **Metadata session** of the cartographic client.

See also the [client metadata section](client-tools-and-toc.md#metadata).

![](/img/manual-english-qgisservercapabilities.png)

##### Capabilities WMS - Advertised extent
**In this section it is possible to define the `geographical extension` displayed when the WebGis service starts.**

To define it, set the desired geographical view on the map and then click on the **'Use Current Canvas Extent'** button.

![](/img/manual-english-qgisserversetmapexpetent.png)

##### WMS Capabilities - CSR restrictions
**In this section it is possible to define the `projection systems` for which the project is available in relation to `OGC services`.**

It is clearly necessary to insert the projection system on which the project was made, this SR is added by clicking on the **'Used'** button.

Other geographic reference systems can be implemented by clicking on the **'+'** button and choosing from the list of reference systems.

![](/img/manual-english-qgisserversrisrestriction.png)

##### Capabilities WMS - Exclude layouts
**In this section it is possible to `exclude some of the print layouts` that are associated with the cartographic project from the availability of the WebGis service.**

![](/img/manual-english-qgisserverexludecompositions.png)

##### Capabilities WMS - General aspects
Two further aspects are manageable with regard to WMS capabilities
 * in general it is recommended to check **`use the layer ids as names`** option
 * the option **`Add geometry to feature response`** must be checked to activate the **zoom to the features** on the WebGis service

![](/img/manual-english-qgisservergeneralaspects.png)

##### WMTS Capabilities
**In this section it is possible to define which `layers are exposed as WMTS services` defining the various options**

##### WFS Capabilities
**In this section it is possible to define which `layers are exposed as WFS services`.**

It is sufficient to check only the **`Published`** column

 ![](/img/manual-english-qgisservergeneralaspectswfs.png)
 
 ##### WCS Capabilities
**In this section it is possible to define which `rasters are exposed as WCS services`**

## General aspects

### Themes (Views)

The creation of **Themes** (combination of off / on layers and differentiated symbology styles) is managed at the WebGis service level.

A specific menu on the webgis will allow you to choose the Theme to be displayed.

The views will be parameterizable at the URL level of the related webgis service.

### Legend

#### Filter legend by Map content

The activation of the **`Filter legend by Map content`** option on the QGIS project is automatically applied to the derived WebGis service.

#### Show features count

If the **`Show features count`** function is activated in the QGIS project at vector layer level, the same information will be displayed on the web map.

The number of features updates automatically based on the style associated with the layer.

#### Mutually exclusive groups

The activation on the QGIS project of the **`Mutually exclusive group`** option for the layers groups is automatically applied to the derived WebGis service.

#### Layer order

The option to define the layer order different from the order in the TOC on the QGIS project is automatically supported.


### Spatial Bookmarks

In case **`Spatial Bookmarks`** are saved at the QGIS project level, they will also be available on the web map.

### 1:N and N:M relations

The interface inherits the 1: and N:M relations defined in the **`Project Properties`** from the QGIS project.

The suite also manages **relations based on multiple keys**.

**ATTENTION:** there are currently limitations in the use of N:M relations

**ATTENTION:** to correctly manage these types of relations it is NECESSARY to insert the reference to the relations in the customized form

![](/img/manual-english-qgislayerproperties-displayform-relations.png)


### Embedded project
**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**
It is clearly necessary to publish the embedded project first and then those derived from it.
An update of the embedded project will result in a consequent modification of all derived projects.
The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.
