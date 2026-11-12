# Client overview

[Back to Cartographic client](g3wsuite_client.md)

## Generic aspects

The application has a responsive interface consisting of expandable and reducible sessions.

![Screenshot: G3wclient Interface](/img/manual-english-g3wclient-interface.png)

### Header

![Screenshot: G3wclient Header](/img/manual-english-g3wclient-header.png)

The contents of the header differ for the public user and for the logged in user

**Public user (Anonymous user)**

 * **Logo, title and subtitle:**, deriving from:
   * main title (set at General Data level) or MacroGroup name, according to the settings
   * Cartographic Group name
   * WebGis service title
 * **Alerts:** the Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time. The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.
 * **Credits:** references to the G3W-SUITE project
 * **Sign** in (far cambiare in Log in)
   * **Sign in:** login in for registered users
   * **Embed map:** URL with the references to the extension currently displayed
   * **Change map:** which allows you to switch from one WebGis service to another while maintaining extension and display scale
 * **Language:** the choice of language is reflected in the individual menus of the map client and on the contents of the access portal. The languages available are those activated by the Administration. 

![Screenshot: G3wclient Header Anonymus](/img/manual-english-g3wclient-header-anonymus.png)

**Logged user**

 * **Logo, title and subtitle:**, deriving from:
   * main title (set at General Data level) or MacroGroup name, according to the settings
   * Cartographic Group name
   * WebGis service title
 * **Alerts:** the Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time. The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.
 * **Credits:** references to the G3W-SUITE project
 * **User name:** the name of the logged user
   * **Admin:** access to the administration section
   * **Log out:** log out the user  
   * **Embed map:** URL with the references to the extension currently displayed
   * **Change map:** which allows you to switch from one WebGis service to another while maintaining extension and display scale
 * **Language:** the choice of language is reflected in the individual menus of the map client and on the contents of the access portal. The languages available are those activated by the Administration. 

 ![Screenshot: G3wclient Header Signed](/img/manual-english-g3wclient-header-signed.png)

### Main menù

The **`Main menù`** is located on the left.

The upper section containing:
 * **Legend:** displaying the map legend
 * **Metadata:** any content defined in the GetCapabilities of the QGIS Project.Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.
 * **Charts:** visualization of the plots created on QGIS with the DataPlotly plugin
 * **Bookmarks:** tool for using the Spatial Bookmarks associated with the QGIS project and allowing the user to create new ones for his exclusive use.
 * **Print:** printing tool based on the layouts defined on the QGIS project
 * **Search:** with the search tools defined in the Administration session, as well as a free **Query Builder** like the one present in QGIS
 * **Editing layers:** open editing session
 * **Theme:** a session to define which theme (among those defined in the QGIS project) to activate; the user (not anonymous) can create and save his own themes to recall them as needed

![Screenshot: G3wclient Header Anonymus](/img/manual-english-g3wclient-header-anonymus.png)

The middle section containing the list of project layers organized into any groups as in a QGIS project.

Depending on the settings defined at the QGIS project publication level, the legend can be inserted in a dedicated tab or integrated into the layer list as in QGIS.

![Screenshot: G3wclient Tool Panel](/img/manual-english-g3wclient-tool-panel.png)


Base Layer management is now handled by a map control at map level

![Screenshot: G3wclient Tool Panel](/img/manual-english-g3wclient-tool-panel.png)

The lower section containing:
   * **Add layer:** session to add local vector layers or custom WMS services to the map
   * **Change map:** to switch from one WebGis service to another while maintaining extension and display scale
   
These features are described in a dedicated paragraph below.
