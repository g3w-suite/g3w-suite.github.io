# Base layers and multilingual settings

[Back to Administration panel](g3wsuite_administration.md)

## Add custom Base layers

It is possible to add custom Base layers and make them available at the level of individual WebGis services.

![](/img/manual-english-g3wadmin-django-administration.png)

### Create new Base Layers starting from external services

In the **Django Administration** session, access the **Base Layers** sub-session and click on the **Add Base Layer** button.

![](/img/manual-english-django-base-layers.png)

Assuming you want to add the following WMST service [http://qgistiles.webmapp.it](http://qgstiles.webmapp.it/) you fill in the form as follows:

 * **Name:** an internal identifier of the new Base Layer
 * **Title:** the descriptive, client-side visible name of the new Base Layer
 * **Icon:** a descriptive, client-side view of the new Base Layer
 * **Description:** an internal description of the new Base Layer
 * **Property:** the specifications of the new Base Layer; for example, for our case:

 {
 "crs": {
      "epsg":3857,
      "proj4":"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs",
      "geographic":False,
      "axisinverted":False
   },
 "url": "http://qgstiles.webmapp.it/tiles/{z}/{x}/{y}.png",
 "servertype": "TMS"
}

![](/img/manual-english-g3wadmin-django-administration-add.png)

The new Base Layer will then be available and can be activated at the level of individual Cartographic Groups.

### Create new Base Layers starting from your own layers

As a first step, you need to publish a new WebGis service based on a QGIS project containing a **single layer**, the layer that will need to be converted into a Base Layer.

As an example, remember that you can publish a set of orthophotos as a single VRT file produced in QGIS.

After publishing, you will need to activate the cache on that specific layer and and activate the **Save as Base layer** option in the form option.

![](/img/manual-english-g3wsuite-administration-base-layer-cache.png)

Automatically a new **Base Layer** will be inserted into those present in the Base Layer subsession of the **Django Administration** session and it will be available and can be activated at the level of individual Cartographic Groups.

Remember to associate a thumbnail with the Base layer, as described in the previous paragraph, to make it available at the map client level.

## Multilinguage
The suite is translated in this languages:
 * Bulgarian
 * Deutsch
 * English
 * Spanish
 * Finnish
 * French
 * Italian
 * Portuguese
 * Romanian
 * Swedish

Other languages ​​can be added.

### Map client
On the top bar you can choose, through a drop-down menu, the language of the entire client interface.

![](/img/manual-english-language-client.png)

### Administration
Also for the Administration panel, through the same drop-down menu, it is possible to define the language of the entire interface of the console.

![](/img/manual-english-language-admin.png)

### Front end
Fixed front end content is already available in the four basic languages.

Variable contents, i.e. user-definable contents, are instead translated:
 * Sessions **`Home`**, **`About`**, **`Maps`** and **`Login`**: content that can be defined and translated in the [**Edit General Data**](admin-interface.md) session of the Control Panel Administration
 * Sessions **`Cartographic MacroGroups`**, **`Cartographic Groups`** and **`WebGis Services`**: contents definable and translatable in the form defining these elements, limited to the items:

   * **Public Title**
   * **Description**

To carry out the translation of these contents, proceed as follows:
 * access to the form for creating the element (**MacroGroup, Group or WebGis Service**)
 * define one of the available languages from the drop-down menu at the top right
 * fill in the form in the chosen language
 * save the settings

![](/img/manual-english-language-form.png)

Then:
 * access the form again in modification
 * change the language
 * fill in the translatable content in the new language
 * save the new settings
 
 **Titles and Descriptions of the various elements in the defined languages ​​will be available on the front.**
