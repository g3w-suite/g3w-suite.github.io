# Editing activation and overview

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration
### Introduction and main features
The **editing settings** are defined partly at the **QGIS project level (editing form structure, widgets associated with individual attributes, 1:n and, in part, N:M relations)** and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).

Thanks to the integration with the APIs of QGIS it is now possible to manage the main formats (geographically and not) supported by QGIS Server:

 * **reading and editing mode**
   * PostGreSQL/PostGis
   * SQLite/SpatiaLite
   * Oracle Spatial
   * GeoPackage
   * ShapeFile

 * **reading mode**
   * SQL Server
   * Virtual layer

**Pay attention!**
An important note in relation to the formats supported in editing: please remember that only data on PostGreSQL/PostGis and Oracle Satial support multi-user editing.

Multi-user editing on formats such as Shapefile, but also GeoPackage and SpatiaLite, can lead to data corruption.

### 1:N and N:M relational editing

The editing function manages both direct editing on geometric and alphanumeric layers, and editing on layers in a 1:N or N:M (only in paert) relations, also both geometric and alphanumeric.

**Attention:** the management of the editing of the N: M relations is limited to the management of the 1:N relationship between the parent layer and the intermediate table.

This means that currently it is not possible to create new records in table M but only:
 * modify the current relations present
 * create new relations between new elements of layer N and pre-existing records of layer M

The **editing settings** are defined partly at the **QGIS project level** (**editing form structure, widgets associated with individual attributes, 1:n  and N:M relations**) and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).

### Multi-user editing
G3W-SUITE manages **multi-user editing** through a **feature lock system**.

It’s strongly recommended to allow multi-user editing only in the case of layers on the GeoDatabase and not on physical files.

When an enabled user activates the editing function at the map client level, the **features visible on the map at that time will be blocked**, in relation to the editing aspect, **for all the other enabled users** who will still be able to edit features present outside this geographical extension. .

In case of features of a layer locked by other users, the user will receive a warning message when starting the editing.

This block will be deactivated when the user exits the editing mode.
