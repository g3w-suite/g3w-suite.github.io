---
title: Configure charts
description: View plots created using QGIS DataPlotly (a great plugin developed by Matteo Ghetta) in the cartographic client.
---

# Configure charts

## ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) QPlotly widget

### Activate charts on your WebGis

**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.

At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) and load the xml by clicking on the **'New Qplotly widget'** button.

As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.

After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:
 * **Edit icon:** to reload the XML file after editing the chart in QGIS
 * **Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)
 * **Download icon:** to download the XML
 * **Related widgets icon:** to create multiple charts (see the dedicated section below)
 * **Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client
 * **Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)

For each chart, the following information is displayed:
 * **Title:** defined in the DataPltly plugin
 * **Type:** chart type
 * **Linked checkbox:** to activate/deactivate the chart without removing it
 
![Screenshot: Charts Admin](/img/manual-english-charts-admin.avif)

It is also possible:
 * **download the plot XML file** to reuse it in QGIS
 * **define the activation status** of the plots when the WebGis service is started

![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.avif)

The chart title comes from the DataPlotly plugin and is used as its label in G3W-SUITE.

In the client, **filter charts by features visible on the map or selected by the user**.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.avif)
![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.avif)

### Multiple charts

The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.

In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.

Steps to create a multiple graph:
 * access the list of graphs associated with a specific layer
 * click the Related widgets icon for one of the graphs to which you want to associate other graphs
 * in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer
 * sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).
 
![Screenshot: Charts Admin Multicharts](/img/manual-english-charts-admin-multicharts.avif)

### Charts based on 1:N data relation (child layer)

If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.

![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.avif)

![Screenshot: Charts On Childs](/img/manual-english-charts-on-childs.avif)

### Chart visibility
Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).

Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:
 * **Sidebar:** only on the main chart panel
 * **Query:** only associated with parent attributes only at the parent feature attribute level
 * **Sidebar, Query:** in both positions (default)

### Chart order
On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.

To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![Icon: Chart Order](/img/manual-english-icon-chart-order.avif)

You can use Drag&Drop to define the order on the widget list

![Screenshot: Chart Order Settings](/img/manual-english-chart-order-settings.avif)
