---
title: Group base layers and languages
description: Add custom base layers and make them available to individual WebGIS services.
---

# Group base layers and languages

## Add custom Base layers

Add custom base layers and make them available to individual WebGIS services.

![Screenshot: G3W-ADMIN Django Administration](/img/manual-english-g3wadmin-django-administration.avif)

### Create new Base Layers starting from external services

In the **Django Administration** session, access the **Base Layers** sub-session and click on the **Add Base Layer** button.

![Screenshot: Django Base Layers](/img/manual-english-django-base-layers.avif)

To add the following TMS tile service [http://qgstiles.webmapp.it](http://qgstiles.webmapp.it/), fill in the form as follows:

 * **Name:** an internal identifier of the new Base Layer; the client bundled with G3W-ADMIN 3.11.4 (v4.1.5) displays this value in the base-layer list
 * **Title:** the descriptive name of the new Base Layer; clients from v4.1.6 display this value in the base-layer list
 * **Icon:** a descriptive, client-side view of the new Base Layer
 * **Description:** an internal description of the new Base Layer
 * **Property:** the specifications of the new Base Layer; for example, for our case:

```python
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
```

See [base layer configuration](g3w-suite-base-layers.md) for the CRS fields and further examples.

![Screenshot: G3W-ADMIN Django Administration Add](/img/manual-english-g3wadmin-django-administration-add.avif)

The new Base Layer will then be available and can be activated at the level of individual Cartographic Groups.

### Create new Base Layers starting from your own layers

First, publish a WebGIS service based on a QGIS project that contains the layer to convert into a Base Layer. The cache action applies to that layer, even when the project contains other layers.

As an example, remember that you can publish a set of orthophotos as a single VRT file produced in QGIS.

After publishing, you will need to activate the cache on that specific layer and and activate the **Save as Base layer** option in the form option.

![Screenshot: G3W-SUITE Administration Base Layer Cache](/img/manual-english-g3wsuite-administration-base-layer-cache.avif)

Automatically a new **Base Layer** will be inserted into those present in the Base Layer subsession of the **Django Administration** session and it will be available and can be activated at the level of individual Cartographic Groups.

Remember to associate a thumbnail with the Base layer, as described in the previous paragraph, to make it available at the map client level.

## Multilingual interface
The suite is available in these languages:
 * Bulgarian
 * Deutsch
 * English
 * Spanish
 * Finnish
 * French
 * Italian
 * Polish
 * Portuguese
 * Romanian
 * Swedish

Other languages ​​can be added.

### Map client
On the top bar you can choose, through a drop-down menu, the language of the entire client interface.

![Screenshot: Language Client](/img/manual-english-language-client.avif)

### Administration
Use the same dropdown to set the administration panel language.

![Screenshot: Language Admin](/img/manual-english-language-admin.avif)

### Front end
Fixed front end content is already available in the four basic languages.

Variable contents, i.e. user-definable contents, are instead translated:
 * Sessions **`Home`**, **`About`**, **`Maps`** and **`Login`**: content that can be defined and translated in the [**Edit General Data**](administration-panel.md) session of the Control Panel Administration
 * Sessions **`Cartographic MacroGroups`**, **`Cartographic Groups`** and **`WebGis Services`**: contents definable and translatable in the form defining these elements, limited to the items:

   * **Public Title**
   * **Description**

To carry out the translation of these contents, proceed as follows:
 * access to the form for creating the element (**MacroGroup, Group or WebGis Service**)
 * define one of the available languages from the drop-down menu at the top right
 * fill in the form in the chosen language
 * save the settings

![Screenshot: Language Form](/img/manual-english-language-form.avif)

Then:
 * access the form again in modification
 * change the language
 * fill in the translatable content in the new language
 * save the new settings
 
 **Titles and Descriptions of the various elements in the defined languages ​​will be available on the front.**
