# Map navigation and queries

[Back to Cartographic client](g3wsuite_client.md)

## Navigation and interaction with the map

### Map area

At the base of the map area there is an information bar showing:
 * **mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)
 * **project projection system**
 * **share map:** t icon to share the map bringing back various customizations
 * **display scale**

**share map icon**: this tool allows you to share the WebGis service while maintaining the customizations defined by the user (map extension, layers on/off, styles associated with the layers...) including, if present, the annotations created.
 
![](/img/manual-english-g3wclient-footer2.png)

 
### Map controls

**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**

![ ](/img/manual-english-icon-navigation-tools.png) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.

Map-controls available on the left side of the map:

 * ![ ](/img/manual-english-icon-navigation-fitextent.png) **`Fit to extent`:** zoom to the initial extension
 * ![ ](/img/manual-english-icon-navigation-zoomin.png) **`Zoom in and out`:** zoom in and zoom out
 * ![ ](/img/manual-english-icon-navigation-zoomtobox.png) **`Zoom to box`:** zoom tool based on drawing a rectangle
 * ![ ](/img/manual-english-icon-navigation-querylayer.png) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))
 * ![ ](/img/manual-english-icon-navigation-query-area-icon.png) **`Query area`:** areal query

	The panel that appears at the top left allows you to choose:
   * geospatial operator
     * intersects
     * within
   * kind of geometry to draw
     * rectangle
     * polygon
     * circle, specifying the radius also manually
     * polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer 
   * layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly
 * ![ ](/img/manual-english-icon-navigation-geolocation.png) **`Geolocation`:** geolocation tool (useful for consultation from tablet)
 * ![ ](/img/manual-english-icon-navigation-streetview.png) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map
 * ![ ](/img/manual-english-icon-navigation-addlayer.png) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service
 * ![ ](/img/manual-english-icon-navigation-measure.png) **`Measure`:** linear and areal measuring instrument
 * ![ ](/img/manual-english-icon-navigation-annotations.png) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:
   * point elements
   * free linear and polygonal elements
   * circle/rectangle elements
   * text labels

Here is an example of using the annotation tool

![ ](/img/manual-english-annotations-tool.png)

Map-controls available on the bottom left corner of the map:
 * ![ ](/img/manual-english-icon-navigation-zomme-lastnext.png) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)

Map-controls available on the top left corner of the map:
  * ![ ](/img/manual-english-icon-navigation-nominatim.png) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level

### Map query

Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.

If a specific layer is selected in the TOC, the results are limited to that layer.

A right click on the mouse allows you to access a series of functions related (but not limited to) to the point where you click.

![ ](/img/manual-english-right-click.png)

#### Query type

![ ](/img/manual-english-icon-navigation-querylayer.png) **Point query**

The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.

To query a single layer, it must be previously selected at the TOC level.

![ ](/img/manual-english-icon-navigation-query-area-icon.png) **Area query**

Area query allows you to query project layers based on polygonal geometry:
 * draw: rectangles, circles or free-form polygons
 * deriving from a feature of a polygonal layer present in the project or added by the user

The result of these type of query can be based on the geometric operations intersection and containment.

The choice made via the drop-down menu allows you to move from one result to another dynamically.

![ ](/img/manual-english-query-intersect-within.png)

The Query area tool works also on the layers added using the AddLayer tool

**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).


### Viewing query results

The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)

Upon querying a geometry, the form structure will be replicated at the client level.

![](/img/manual-english-g3wclient-attribute-view.png)

Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.

For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).

#### Single result

In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list

 ![](/img/manual-english-g3wclient-fomr-1-n-plots.png)


The bar above the query results shows the following icons:
![](/img/manual-english-g3wclient-attribute-icons.png)

 * **Zoom to feature:** if the function is activated on the Properties of the QGIS project
 * **Show relations (1: N):** if present on the QGIS project
 * **Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature
 * **Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the features to the current selection
 * **Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features
 * **Editing:** to start editing directly on this feature
 * **Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 

#### Multiple results

In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.

![](/img/manual-english-g3wclient-attribute-list.png)

A series of icons, relating to the list of resulting features, will allow you to:
 ![](/img/manual-english-g3wclient-attribute-list-icons.png)

 * **Zoom to features result extent:** if the function is activated on the Properties of the QGIS project
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result
 * **Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 * **Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the list of features result to the current selection
 

### Display 1:1 (join) and 1:N relation data

#### Join data

The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.

#### 1:N relation data

In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.

![](/img/manual-english-icon-relations.png)

By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships. 

If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.

![](/img/manual-english-g3wclient-relations-records-view.png)


After accessing one of the existing relationships, the child records will be displayed in tabular format.

Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).


![](/img/manual-english-g3wclient-relations-records-view.png)


A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.

The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project

In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.

In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.

![](/img/manual-english-g3wclient-relations-view.png)

### Parameterized URLs

**It is possible to create parameterized URLs for direct zooming to:**
geographical extension 
single feature by FID 
single/list features by value of a field 

Here the URL parameters available:
 * **map_extent (Zoom to map extent)**
   * Ex: `<url_project>?map_extent=Xmin, Ymin,Xmax,Ymax`
 * **zoom_to_fid (Zoom to a specific feature by FID)**
   * Ex: `<url_project>?zoom_to_fid=<layer_id>|<fid value>`
 * **ztf (Zoom to features defined on the basis of attribute values)**
   * Ex: `<url_project>?ztf=<layer_id or layer name>:<field name>=<field value>`

If **Views (Themes)** are set up in the QGIS project, it will also be possible to parameterize them in the webgis URL: 
   * Ex: `<url>?map_theme=<theme_name>`
