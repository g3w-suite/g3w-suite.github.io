---
title: Matteo Ghetta - G3W-Suite
description: Matteo Ghetta develops DataPlotly, the QGIS plugin used to create interactive charts for G3W-SUITE web maps.
---

# Matteo Ghetta

![Matteo Ghetta](https://github.com/ghtmtt.png?size=400)

**I develop DataPlotly, a QGIS plugin that links interactive charts to the map.**

[GitHub profile](https://github.com/ghtmtt) · [DataPlotly](https://github.com/ghtmtt/DataPlotly)

## Beyond G3W-SUITE

I developed DataPlotly to create interactive charts directly in QGIS using Plotly. It supports scatter plots, histograms and box plots, among others. Selecting a point in a scatter plot can highlight the corresponding feature on the map, making it easier to see where an outlier is located.

The [DataPlotly documentation](https://dataplotly-docs.readthedocs.io/en/latest/intro.html) shows how to combine charts and export them as HTML without losing interactivity. I have also worked on the [QGIS documentation](https://github.com/qgis/QGIS-Documentation/commits?author=ghtmtt), where I added copy buttons to code examples.

## In G3W-SUITE

G3W-SUITE brings charts made with DataPlotly into the web map. A project administrator can save a chart configuration as XML in QGIS and import it into G3W-ADMIN as a [QPlotly widget](/en/docs/configure-charts/), without having to recreate the chart for the web.

In the web map, users can filter the chart to features they select or to those visible in the current map view. For example, a chart of property sizes can show only the parcels in view as a user zooms into a neighbourhood. The [widget demo guide](/en/docs/try-layer-tools-in-the-demo/) shows how to try both filters.

[Back to the project](/en/about/ "outline-button")
