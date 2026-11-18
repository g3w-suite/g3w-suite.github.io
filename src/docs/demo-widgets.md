# Try layer tools in the demo

## Layer tools

Once your project has been published, you can access the list of widgets and additional functions to enrich your WebGis service.

Use the **`Layers list` icon** ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.avif) to view project layers and configure their client functions.

![Screenshot: Demo Project Manage](/img/manual-english-demo-project-manage.avif)

The panel lists the **layers** in the published QGIS project.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.avif)

Try enabling a download format for one layer. Then open the map, select that layer, and check that the format appears in the download options. See [layer tools](admin-widgets-setup.md) for all available settings.

## Search widget creation

To create a search tool available at WebGis level, **choose the vector layer** on which to apply the tool and **click on the `Widget list icon` ![Icon: Widget](/img/manual-english-icon-widget.avif)**

**NB:** there may be a number of searches created by other users for the same layer.

You can activate them by **clicking on the `Linked` chekbox**.

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.avif)

The listed searches can be **modified, deleted or unlinked** using the appropriate icons.

To **create a new search**, click on the blue link **`New widget`**.

Use the [search widget reference](admin-search.md) to choose the fields, input widgets, and comparison operators.

The example below shows the compilation of the form for creating a search widget dedicated to a cadastral cartography layer.

![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.avif)

Once the form has been filled in, click on the **`OK button` to save** the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

**The widget will already be **`linked`** and therefore available in the WebGis interface on the left panel.**

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.avif)

## Plots widget

**Add plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), manages **plots saved as xml**.

The plots are connected to the layers defined on the QGIS project, in this way, as for the searches and the constraints, it is possible to activate the same plots on all WebGis services in which the reference layer is present.

For this reason, there may be some plots created by other users for the same layer.
You can activate them by **clicking on the `Linked` chekbox**.


![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.avif)

The title of the chart, defined at the plugin level, will be the unique identifier.

Try to create your plots in the QGIS project, save them as .xml and upload them to view the resluts on the webgis.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.avif)

![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.avif)

In the client, try filtering the charts by visible or selected features. See [chart filters](client-tools-and-toc.md#charts) for the controls and their effect on related data.
