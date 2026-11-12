# Layer properties

[Back to QGIS project settings](projectsettings.md)

## Layers properties

### Simbology
The rendering style associated with the individual layers is replicated autonomously on the WebGis service.

The suite allows the switching on/off of the individual categories linked to the various simbolgy methods (categorized, graduated, by rules …).

![Screenshot: G3W-SUITE Simbology Onoff](/img/manual-english-g3wsuite-simbology-onoff.png)

If external SVG icons are used (added to the basic ones of QGIS, via the **`Settings -> Options -> System -> SVG paths`**), these must be uploaded to the server (through the **`File Manager`** tool) in order to be used by QGIS Server.

#### Manage custom SVG icons
In the installation procedure of the G3W-SUITE application, an **`svg`** named directory is created on the server.

Within this directory it is therefore possible to store SVG icons, also organized in subdirecory.

The **`Configurations icon`** ![Icon: Configuration](/img/manual-english-iconconfiguration.png), located in the upper right corner of the **Administration Panel**, allows you to access a menu that includes the **`File Manager`** item.

![Icon: G3wclient Config](/img/manual-english-g3wclient-icon-config.png)

![Screenshot: G3W-SUITE Administration Configuration Menu](/img/manual-english-g3wsuite-administration-configuration-menu.png)

Through this tool it is possible to manage SVG icons on the server in a simple and intuitive way.

![Screenshot: G3W-SUITE Administration File Manager](/img/manual-english-g3wsuite-administration-file-manager.png)

The SVG folder on the server must reflect the structure in any subfolders present locally.

**NB:** The name of this directory is defined by the basic settings set during the installation of the suite.
[See dedicated paragraph.](settings#base-settings)

**PS:** remember that the **`File Manager`** tool also allows you to manage the synchronization of geographical data (in the case of using physical files) and the management of multimedia files.

See also [dedicated paragraph](#viewing-multimedia-content)



### Multi-style layer
**The suite manages the presence of multiple styles associated with a layer.**

It will be possible to dynamically choose the style on the cartographic client.

It will be possible to manage the styles associated with a layer from the Administration component, also by **loading .qml file styles** and **setting the default style** among those present.

### Attribute table

The display order of a layer's attribute table fields is inherited from the suite.

 ![Screenshot: QGIS Attribute Table Order](/img/manual-english-qgis-attribute-table-order.png)

### Definition of the fields that can be consulted for each layer
Within the QGIS project it is also possible to define, for each layer, which fields are available following query on the WebGis service.

To define these settings, you access the properties of one of the vectors previously defined as searchable and choose the **`Source Fields`** submenu in the **`Layer Properties`** window.

This submenu lists the fields associated to the table of the vector.

The last column (**Configuration**) allows you to define:
 * whether the field is available as a search object (this setting is not set by G3W-SUITE)
 * whether the field is exposed in the **WMS** service and, therefore, in the WebGis service
 * whether the field is exposed in the **WFS** service, if enabled
 ![Screenshot: Qgislayerproperties Wmsfields](/img/manual-english-qgislayerproperties-wmsfields.png)


### Definition of the attribute display form
In the **Attribute form** section, it is possible, for vector layers, to define the structure of the attributes form associated with displaying the results following query operations.

On QGIS, we can build a personalized form (query form) by creating thematic tabs and groups and defining the distribution of the individual fields and their aliases.

This structural organization will be replicated directly on the query form on the WebGis service.

### Layer basic information

If you set a descriptive information in the **`Abstract`** form of the **`QGIS Server`** session of the **`Layer Properties`**, this information will be associated with the layer at the webgis level.


### Editing

The suite inherits numerous settings from the QGIS project related to the attribute editing features that can be defined in the **Attribute form** section.

For more information, see the [dedicated section on editing project settings](editing-project-settings.md).

### Temporal settings

The Temporal Controller functions in QGIS are replicated on the webgis component

Time series functionality works on both vector and raster data, even in multi-layer mode.

Time setting on vector data is limited to the **`Single Field with Date/Time`** case

![Screenshot: Qgislayerproperties Displayform Relations](/img/manual-english-qgislayerproperties-displayform-relations.png)



#### Viewing multimedia content
Multimedia contents (images, pdf, web URL ...) can be viewed interactively on the map client following publication of the QGIS project.

In the case of web links, simply insert them (preceded by the prefix **`http://`** or **`https://`**) within the dedicated attribute fields

In the case of multimedia files it is necessary:
 * **upload the media file to the `media_user` folder** (folder exposed on the web) accessible through the **`File Manager`** tool in the Suite Administration Panel
 * **insert the web link to this file in the dedicated attribute field**

The link to the file can be obtained in the following way:
 * **`application domain + media_user + path of the file + file name`**

Example:
 * application domain: **`https://dev.g3wsuite.it`**
 * file **`file_A.pdf`** located in the folder **`/media_user/form/`**
 * web link: **`https://dev.g3wsuite.it/media_user/form/file_A.pdf`**

Following queries at the cartographic client level, we will have different behaviors based on the type of content:
 * **image**: preview display in the form, click on the preview to display the image in real size
 * **web link or other multimedia file**: display of an **Open** orange button to allow consultation of the content

 ![Screenshot: QGIS Form Attribute](/img/manual-english-qgis-form-attribute.png)


 ![Screenshot: Qgislayerproperties Displayform](/img/manual-english-qgislayerproperties-displayform.png)
