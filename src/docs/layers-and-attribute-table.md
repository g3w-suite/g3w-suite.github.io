---
title: Layers and attribute table
description: This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.
---

# Layers and attribute table

## TOC session

The midle part of the left bar contains the following items:


**This session shows the layers prepared on QGIS projects with the same organization the groups and subgroups.**

If the **`Show features count`** function is activated in the project, the layer will show the number of total features and based on the subdivision linked to the symbology.

In case of multi-style associated with the layer, the number of geometries reported will vary following the passage from one style to another.

![Screenshot: G3wclient Features Count](/img/manual-english-g3wclient-features-count.avif)

In the list of layers, right click on the name of the single layer shows the following items:
 * **Name and geometry type** of the layer
 * **Metadata:** descriptive information inherited from what has been defined, at QGIS project level, in the 'Abstract' form of the 'QGIS Server' session of the 'Layer Properties'
 * **Edit layer:** menu available following activation and based on user permissions
 * **Legend:** to view the legend tab
 * **Zoom to layer:** to zoom in on the extension of the layer
 * **Open attribute table:** to consult the associated attribute table
 * **Styles:** to choose the style to be applied to the layer, in the case of multi-style layers
 * **Opacity:** management of the level of transparency/opacity
 * **Filters:** management, based on the logged in user, of the filters associated with the layer
 * **Export:** download of the layer in different formats, based on what is defined in the Administration session
 * **Layer settings:** link to the layer administration section (available only if logged in as an administrator user)

![Screenshot: G3wclient Layer Function](/img/manual-english-g3wclient-layer-function.avif)

Double clicking on the layer or Layer Group zooms to the extent of the layer or Group content.

Hide layers with no records from the TOC automatically.

Useful when using filters on layers or geographic views. 

### Attribute table

The attribute table (resizable) is equipped with **paging function, highlight function and zooming** to the associated features.

In the case of links to **multimedia content**, the previews of the images and/or the **Open** button will be displayed for consultation of different types of content.

To the left of each record in the table there are two/three tools:
 * checkbox to select the records/feature
 * the ‘Form view‘ icon to open the feature attributes form
 * in the case of a layer editable by the user, an editing icon to allow direct modification of the feature
 * the ‘Show relations’ icon to open the list of 1:N relations (if present) of thath parent record

![Screenshot: G3wclient Table View](/img/manual-english-g3wclient-table-view.avif)

A **generic filter**, positioned at the top right, is applied generically to the contents of all the fields, and it will allow you to filter the list of displayed records. 

**Filters based on the contents of the individual fields** are available at the top of each column.

The **Update results when map moves** icon ![Screenshot: G3wclient Mapfilter Table](/img/manual-english-g3wclient-mapfilter-table.avif), located in the bottom left corner, allows you to filter the records of the table according to the features visible in the map.

It is possible to **select the features of the individual layers and apply filters** that will affect:
 * on the map content
 * on the attribute table content
 * on the contents of the plots
 * on print contents
 * on the editable geometries

The selection of features can be made:
 * at the attribute table level (through the checkboxes on the left of each records)
 * on the results of a query (add / remove from current selection)
 * on the results of a query (add / remove from current selection)

At the same time, additional icons appear:
 * on the layer attribute table, in the bottom left corner
 * to the right of the layer on the TOC
 * at the level of the relevant plots

The icons, palced in the left buttom corner of the attribute, table allow you to:
 * ![Screenshot: G3wclient Selection Table Clear](/img/manual-english-g3wclient-selection-table-clear.avif) Clear selection
 * ![Screenshot: G3wclient Selection Table Invert](/img/manual-english-g3wclient-selection-table-invert.avif) Invert selection
 * ![Screenshot: G3wclient Selection Table Filter](/img/manual-english-g3wclient-selection-table-filter.avif) Add/Remove filter

The icons to the right of the layer on the TOC allow you to:
 * Clear selection
 * Enable/Disable  filter

![Icon: G3wclient Selection Toc](/img/manual-english-g3wclient-selection-icon-toc.avif)

When one or more features are selected, they appear highlighted in red on the map.
Activation of the filter is reflected:
 * on the map content
 * on the attribute table content
 * on the data displayed by plots
 * on the print contents

 ![Screenshot: G3wclient Table Select](/img/manual-english-g3wclient-table-select.avif)


#### Filter users based
**On the client you can select (highlight) and filter a subset of vector layer geometries.**

It is possible to activate a filter on a layer starting from:
 * query results
 * search results
 * attribute table management

To be filtered, the geometries object of the filter must first be selected.

Following activation of the filter, a logged in user (not AnonymosUser) will be able to save this filter to be recalled in subsequent work sessions.

Saving the filter occurs via the dedicated icon present at layer level in the legend and in the results form.

![Screenshot: Filter Save](/img/manual-english-filter-save.avif)

The saved filters can be recovered via the dedicated menu that can be viewed by right-clicking on the name of the layer

![Screenshot: Filter Load](/img/manual-english-filter-load.avif)

The presence of an active filter on the layer is highlighted by the red icon next to the layer name.

To deactivate an active filter, simply click on the icon itself.

![Screenshot: Filter Loaded](/img/manual-english-filter-loaded.avif)

We remind you that activating a filter affects:
 * geometries visible on the map
 * records visible on attribute table
 * editable geometries
 * features underlying the graphs
 * print contenent
