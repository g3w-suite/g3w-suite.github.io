# Map queries and results

## Map query

Right-clicking on the map queries the map using the core sampling method, displaying results for all layers below the clicked point.

If a specific layer is selected in the TOC, the results are limited to that layer.

Right-click the map to access functions for the selected point and other actions.

![Screenshot: Right Click](/img/manual-english-right-click.avif)

### Query type

![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **Point query**

The point quey acts, by default, with the coring method, providing information relating to all the layers (setted as querable in the QGIS project) underlying the point where you click with the mouse or draw a box.

To query a single layer, it must be previously selected at the TOC level.

![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **Area query**

Use an area query to search project layers with a polygon:
 * draw: rectangles, circles or free-form polygons
 * deriving from a feature of a polygonal layer present in the project or added by the user

The result of these type of query can be based on the geometric operations intersection and containment.

The choice made via the drop-down menu allows you to move from one result to another dynamically.

![Screenshot: Query Intersect Within](/img/manual-english-query-intersect-within.avif)

The Query area tool works also on the layers added using the AddLayer tool

**NB:** it will be possible to zoom on the feature associated with the individual results only if the option **`Add geometry to object response`** has been activated at the QGIS project level (**`Project → Properties, QGIS Server session`**).


## Viewing query results

The display of the attributes of the queried geometries is by default structured on a single column but in the QGIS project (**`Vector properties → Attributes Form`**), you can create custom attribute forms (tabs, groups ...)

Upon querying a geometry, the form structure will be replicated at the client level.

![Screenshot: G3wclient Attribute View](/img/manual-english-g3wclient-attribute-view.avif)

Any links to photos will determine the display of a clickable preview, any links to links or other multimedia content will determine the display of the Open button that will allow consultation of the link.

For further information on this point, see the [**dedicated paragraph**](projectsettings-layers.md#viewing-multimedia-content).

### Single result

In case the query provides one single result, the attributes will be displayed according to the form defined in the QGIS project or as a column list

 ![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.avif)


The bar above the query results shows the following icons:
![Screenshot: G3wclient Attribute Icons](/img/manual-english-g3wclient-attribute-icons.avif)

 * **Zoom to feature:** if the function is activated on the Properties of the QGIS project
 * **Show relations (1: N):** if present on the QGIS project
 * **Show relation charts:** display of plots related to 1: N related data. Only if 1: N relationships are associated with the interrogated layer and plots have been activated on the referencing tables.
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to the queried feature
 * **Remove feature from result:** remove the feature to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the features to the current selection
 * **Copy map URL pointing to the geometry :** to create a parameterized URL that points to this features
 * **Editing:** to start editing directly on this feature
 * **Download single results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 

### Multiple results

In case the query provides more results these will be listed as a list with the possibility to expand the detailed information.

![Screenshot: G3wclient Attribute List](/img/manual-english-g3wclient-attribute-list.avif)

A series of icons, relating to the list of resulting features, will allow you to:
 ![Screenshot: G3wclient Attribute List Icons](/img/manual-english-g3wclient-attribute-list-icons.avif)

 * **Zoom to features result extent:** if the function is activated on the Properties of the QGIS project
 * **Print Atlas:** prints the reports (atlas) (if set on QGIS project) related to all the features result
 * **Download all the features results (Shapefile, GPK, GPX, CSV, XLS):** if activated in the administration session
 * **Add feature on result:** add features (clicking on the map) to the current list of results (useful to choose manually the list of objects to select/download)
 * **Add/Remove selection:** add/remove the list of features result to the current selection
 

## Display 1:1 (join) and 1:N relation data

### Join data

The fields resulting from a join (created in QGIS) with a third layer will automatically be visible at the end of the fields of the parent layer or, if a custom form is defined, within the form according to the defined specifications.

### 1:N relation data

In the event that, at the QGIS project level, **one or more type 1:n relations** have been associated with a layer, the icon **Show Relationships**  will be shown in the attribute form.

![Icon: Relations](/img/manual-english-icon-relations.avif)

By clicking on the icon you will access the **list of 1:N relations** present and, from these, the list of child records associated with the individual relationships. 

If the relations are inserted in a custom form dedicated to displaying attributes (QGIS Attributes form), then the link to them will be displayed directly in the parent attributes form.

![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.avif)


After accessing one of the existing relationships, the child records will be displayed in tabular format.

Above the table, a dedicated section will report the main information of the parent feature (breadcrumps).


![Screenshot: G3wclient Relations Records View](/img/manual-english-g3wclient-relations-records-view.avif)


A filter, applied generically to the contents of all fields, will allow you to filter the list of child records.

The icon to the left of each record allows you to switch from the classic table view to the one based on any form defined on the QGIS project

In the case of **links to multimedia contents**, the previews of the images and/or the **`Open` button** will be displayed for consultation of different types of content.

In case of **active plots** on the related table, these will be displayed through **`Show charts`** at the top right.

![Screenshot: G3wclient Relations View](/img/manual-english-g3wclient-relations-view.avif)

## Parameterized URLs

Add parameters to a project URL to open a specific extent, feature or map theme:

 * `map_extent`: set the initial extent in the project CRS: `<project_url>?map_extent=Xmin,Ymin,Xmax,Ymax`.
 * `zoom_to_fid`: zoom to a feature by layer ID and FID: `<project_url>?zoom_to_fid=<layer_id>|<fid>`.
 * `ztf`: zoom to features by attribute value, using the layer ID or name: `<project_url>?ztf=<layer_id_or_name>:<field>=<value>`.
 * `map_theme`: apply a theme defined in the QGIS project: `<project_url>?map_theme=<theme_name>`.

For `ztf`, combine conditions with `AND` or `OR`, for example: `<project_url>?ztf=roads:type=primaryANDstatus=open`.

Encode special characters in parameter values, and use `&` to separate multiple parameters.
