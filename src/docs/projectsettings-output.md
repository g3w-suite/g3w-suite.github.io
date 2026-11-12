# Print layouts and performance

[Back to QGIS project settings](projectsettings.md)

## Print layouts
Any print layouts associated with the published QGIS project will automatically be associated with the published WebGis service.

**Print layouts can contain more than one `Map` items and panoramic maps.**

You can set also a **custom title** (definible in the WebGis side) setting an **Item ID** at a **Label** item.

**Atlas and report are also supported.**

Any images present in the print layouts must be placed in the local **`project_data`** folder (in any subdirectory) and synchronized on the server.

See also the dedicated paragraph [Geographic data synchronization on the server](datamanagement#geographic-data-synchronization-on-the-server).

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
