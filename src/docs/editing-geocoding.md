# Geocoding and map-based data entry

[Back to Online editing](g3wsuite_editing.md)

## Geocoding map control use case for populating project layers
A specific editing function is associated with the Geocoding map control.

See the dedicate paragha

In fact, it is possible to use the results deriving from the providers associated with this map control (OSM, Bing Streets, Bing Places) to populate point layers present within the webgis service.

Below are the settings and steps to perform for this purpose.

#### Activation of Geocoding map control at Cartographic Group level
First of all, **Geocoding** must be associated with the Cartographic Group by selecting it at the **Base Layers and Map default features** session level. This will ensure that the tool is present on all WebGis services published within the Group.

![](/img/manual-english-geocoding-providers.png)

#### Definition of the providers to use for each WebGis service
In the publication form of your QGIS project you need to define the providers to be associated with the Geocoding map control:
 * **Nominatim (OSM):** addresses based on OpenStreetMap
 * **Bing Streets:** Addresses based on Bing maps
 * **Bing Places:** places based on Bing maps (service available only for the USA)

The association is created at the **Geocoding providers** session level.

The use of the providers Bing Streets and Bing Places requires the acquisition of a free Bing API.

See [Settings](settings) section for the API key definition.

#### Using the Geocoding map control on the WebGis service
The Geocoding tool allows you to search for addresses and places (based on active providers) and view their position on the map and the associated information on the information panel on the right.

It is possible to load markers relating to multiple searches into the map.

![](/img/manual-english-geocoding-marker.png)

On the right of the search tool there will now be three new icons:
 * **Clear markers selection:** to delete all markers inserted on the map
 * **Toogle markers visibility:** to activate/deactivate the display of markers
 * **Toogle sidebar panel:** to view the list of markers loaded in the map and their attributes on the right panel

![](/img/manual-english-geocoding-icons.png)

#### Insert the markers present in the map into a vector layer
This function allows you to insert the results, obtained through the Geocoding map control, at the level of one or more layers, exclusively point-like, present in the WebGis service.

To be able to carry out this operation, the online editing functionality must be active on these layers.

Only in this case will there be a pencil icon at the search results level.

Clicking on this icon will show the list of point layers on which online editing is enabled.

After choosing the layer on which to insert the result, click on the pencil icon to the right of the layer name to determine the insertion of the point on the layer itself.

![](/img/manual-english-geocoding-insert.png)

On the right, the information panel will open which will show the attributes of the self-editing layer filled in only to the fields of the same name as those of the source markers.

![](/img/manual-english-geocoding-insert-attributes.png)

By clicking on the green **Insert/Edit** button the point will be permanently saved on the layer in use.
