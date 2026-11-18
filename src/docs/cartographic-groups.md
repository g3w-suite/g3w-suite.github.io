---
title: Cartographic groups
description: Manage existing Cartographic Groups or create new ones.
---

# Cartographic groups

## Cartographic Groups
_**Manage existing Cartographic Groups or create new ones.**_

A Cartographic Group is create  to **collect a series of cartographic projects belonging, for example, to the same theme** (Urban Planning Regulations, tourist maps ...) and characterized by the same projection system.

You can switch between WebGIS services while keeping the map extent and scale only when their projects belong to the same cartographic group.

In the left side menu there is the **Cartographic Groups** item with two sub-items:
 * **Add Group:** to create a new Cartographic Group
 * **Group List:** to access the list of groups present

You can also access the list of groups by clicking on the **"Show"** button in the **Cartographic Groups** box on the **Dashboard**.

### Add Group
**Through this item, available only for the Admin or Editor1 users, it is possible to create a new Cartographic Group.**

During creation, some functional characteristics and tools that the WebGis interface will show for all cartographic projects published within the group are also defined.

Let's see in detail the various sub-sessions of the group creation form.

#### General data
 * **`Name *`:** a generic internal identification name (not show in the front end)
 * **`Title`***: descriptive title of the Group (will appear in the list of Cartographic Groups)
 * **`Description`**: description of the content
 * **`Language`***: interface language
 
#### Logo/Picture
 * **`Header logo img`***: the logo to be displayed in the header del client cartografico
 * **`Use logo image for client`** option
 * **`Logo link`:** a eventual link to associate with the logo
 
 **REMEBER**
 
By default, the map client header, for each WebGis service, is composed of:
 * main title (if set at General Data management level)
 * logo and title associated with the **Cartographic Group**
 * title of the WebGis service

If you select the **Use MacroGroup title and logo for the client** options, the map client header, for each WebGis service, will instead consist of:
 * main title (if set at General Data management level)
 * logo and title associated with the **Cartographic MacroGroup**
 * title of the WebGis service
 
 If you select the **Use Group logo for the client** options, the map client header, for each WebGis service, will instead consist of:
 * main title (if set at General Data management level)
 * title associated with the **Cartographic MacroGroup**
 * logo associated with the **Cartographic Group** (if MacroGroup logo option is active this options takes precedence)
 * title of the WebGis service
     
#### ACL Users
**Access and modification powers are managed.**

The options present will vary according to the type of user (Admin or Editor1) who creates/manages the Group

**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions are optional.

Learn more about this in the [dedicated session](webgis-roles-and-organization.md).

Let’s see in detail the various sub-sessions of the ACL Users session:
 * **`Editor1 User`:** defines the **user (Editor1) manager of the Group**.
     The entry is present only when the Admin type user creates the Group
     If the Group is created by a user associated with the Editor1 role this option is not visible and the Group is associated directly with that user
 * **`Editor2 User`:** defines the **user (Editor2) manager of the Group**.
 * **`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the contents of the group**. By choosing the anonymous user (AnonymousUser) the group will be visible and accessible by AnonymousUser
 * **`Editor user groups`:** define the **user groups (Editor2) who manage the Group**.
 * **`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the contents of the group**.

The option **`Propagate viewers user (single and groups) permissions`** allows you to propagate the Viewer users (individuals and/or groups) associated to the Group to ALL the WebGis services present in it. 

**Be careful: this option cancels any differentiation in the access policies applied to the WebGis services contained in the Group.**

![Screenshot: G3W-SUITE Administration Group Add ACL](/img/manual-english-g3wsuite-administration-group-add-acl.avif)

#### MacroGroups
**Possible definition of the belonging MacroGroup.**

This option is available only if Cartographic macro groups have been created

In the event that the Group is created by an Editor1 type user, the Group will be automatically associated with the MacroGroup associated with the same Editor1.

#### GEO data
**Projection system associated with the group.**

**N.B.** All projects loaded into the group must be associated with this SRID.

#### Base layers and Map interaction tools
In this box you can define:
 * **`Mapcontrols`***: list of tools available on the WebGis client:
   * **zoomtoextent:** zoom to the initial extension
   * **zoom:** zoom in and zoom out
   * **zoombox:** zoom tool based on drawing a rectangle
   * **query:** puntual query of geographical layers
   * **querybbox:** query via bounding box (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**)
   * **querybypolygon:** it will be possible to automatically query the features of one or more layers that fall inside a polygonal element of a guide layer. (Eg what's inside a cadastral parcel?) - **N.B. it is necessary that the all the layers involved in this kind of query are published as WFS services on the QGIS project**
   * **querybydrawpolygon:** query based on a polygon drawn on the map  (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**) 
   * **zoomhistory:** undo/redo tools to navigate previous and post visualization areas
   * **overview:** presence of a panoramic map
   * **scaleline:** presence of the scale bar
   * **scale:** tool for defining the display scale
   * **mouseposition:** display of mouse position coordinates
   * **geolocation:** geolocation tool  (available only with https certificate)
   * **geocoding:** address search tools and toponyms based on OSM; see the [dedicated paragraph](geocoding.md) for using map control as a tool for populating project data
   * **streetview:** due to Google polycy, StreetView it will open on a new browse tab without the aspects of synchronization with the map
   * **length:** linear measuring instrument
   * **area:** surface measuring instrument
   * **addlayers:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis. These layers will remain until the end of the work session
   * **screenshot:*** tool to take a screenshot of the map area
   * **geoscreenshot:*** tool to create a GeoTIFF of the map area
   * **annotation:*** an useful tool to add custom texts or geometrics (points, line, cirlce, polygon) annotations to the map and share them
 * **`Baselayer`:** choice of the base maps that will be available on the WebGis client
 * **`Background color`:** choice of the background color of the maps (default white)
 
***NB:** the security protocols prevent the creation of screenshots if WMS services with domains other than the publication one are present on the map. **In this case the icons will not be present on the client even if the MapControl is selected.**
To avoid this, set the WMS as **internal WMS** in the [Widget management](layer-tools.md) section.

![Screenshot: G3W-SUITE Administration Group Add Geodata](/img/manual-english-g3wsuite-administration-group-add-geodata.avif)

The bundled base-layer data includes **OpenStreetMap** and **Bing** presets. Check current provider licensing before enabling Bing or Google base maps; a preset in the administration panel does not itself grant permission to use a service.

Remember that it is possible to build customized Base Layers starting from open external Base Layer or from the contenents of a projects published on the suite.

In this regard, consult the section on [**base layers**](group-base-layers-and-languages.md).


#### Copyright
**`Terms of use`:** description of the terms of use of the map and any other info
**`Link to terms`:** link to text

After filling in the various form, click on the **Save** button to confirm your choices.
 
![Button: Save](/img/manual-english-buttom-save.avif)

[Manage cartographic groups](manage-cartographic-groups.md)
