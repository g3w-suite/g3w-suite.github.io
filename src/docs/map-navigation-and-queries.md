---
title: Map navigation and queries
description: "At the base of the map area there is an information bar showing:"
---

# Map navigation and queries

## Navigation and interaction with the map

### Map area

At the base of the map area there is an information bar showing:
 * **mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)
 * **project projection system**
 * **share map:** t icon to share the map bringing back various customizations
 * **display scale**

**Share map icon:** share the WebGIS service with its current extent, layer visibility, styles and annotations.
 
![Screenshot: G3wclient Footer2](/img/manual-english-g3wclient-footer2.avif)

 
### Map controls

**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**

![Icon: Navigation Tools](/img/manual-english-icon-navigation-tools.avif) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.

Map-controls available on the left side of the map:

 * ![Icon: Navigation Fitextent](/img/manual-english-icon-navigation-fitextent.avif) **`Fit to extent`:** zoom to the initial extension
 * ![Icon: Navigation Zoomin](/img/manual-english-icon-navigation-zoomin.avif) **`Zoom in and out`:** zoom in and zoom out
 * ![Icon: Navigation Zoomtobox](/img/manual-english-icon-navigation-zoomtobox.avif) **`Zoom to box`:** zoom tool based on drawing a rectangle
 * ![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))
 * ![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **`Query area`:** areal query

	In the top-left panel, choose:
   * geospatial operator
     * intersects
     * within
   * kind of geometry to draw
     * rectangle
     * polygon
     * circle, specifying the radius also manually
     * polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer 
   * layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly
 * ![Icon: Navigation Geolocation](/img/manual-english-icon-navigation-geolocation.avif) **`Geolocation`:** geolocation tool (useful for consultation from tablet)
 * ![Icon: Navigation Streetview](/img/manual-english-icon-navigation-streetview.avif) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map
 * ![Icon: Navigation Addlayer](/img/manual-english-icon-navigation-addlayer.avif) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service
 * ![Icon: Navigation Measure](/img/manual-english-icon-navigation-measure.avif) **`Measure`:** linear and areal measuring instrument
 * ![Icon: Navigation Annotations](/img/manual-english-icon-navigation-annotations.avif) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:
   * point elements
   * free linear and polygonal elements
   * circle/rectangle elements
   * text labels

Here is an example of using the annotation tool

![Screenshot: Annotations Tool](/img/manual-english-annotations-tool.avif)

Map-controls available on the bottom left corner of the map:
 * ![Icon: Navigation Zomme Lastnext](/img/manual-english-icon-navigation-zomme-lastnext.avif) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)

Map-controls available on the top left corner of the map:
  * ![Icon: Navigation Nominatim](/img/manual-english-icon-navigation-nominatim.avif) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level

[Map queries and results](map-queries-and-results.md)
