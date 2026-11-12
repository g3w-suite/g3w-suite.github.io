# Publish and update WebGIS services

[Back to Administration panel](g3wsuite_administration.md)

## Publication of new WebGis services
### To publish a new QGIS cartographic project
It is possible to publish new QGIS projects:
 * **from the list of cartographic groups:** click on the icon ![Icon: Add](/img/manual-english-icon-add.png) located under the box of the cartographic group in which you want to publish the project.
 * **from the list of cartographic projects published within a group:** by clicking on the the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png)

In the dedicated form we could define the characteristic of the project being published:

#### QGIS project
**`QGIS file`***: load the QGIS cartographic project to be published (.qgz or .qgs file)

#### ACL Users
**Management of access and/or modification permissions**

The options present will vary according to the type of user (Admin, Editor1 or Editor2) who creates / manages the WebGis service.

**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions (described below) are optional.

Learn more about this in the [dedicated session](user_groups_organization).

Let’s see in detail the various sub-sessions of the ACL Users session:
 * **`Editor1 user`:** defines the **user (Editor1) manager of the WebGis service**.

    The entry is present only when the WebGis service is created by Admin

    In the event that the WebGis service is published by a user created by a user associated with the Editor1 role this option is not visible and the, the WebGis service is associated directly with that user

 * **`Editor2 User`:** defines the **user (Editor2) manager of the WebGis service**.
 
   The item is present only when a user of the Admin or Editor1 roles publish the WebGis service. 
   In the event that the WebGis service is published by a user of Editor2 role, the WebGis service is associated directly with that user

 * **`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the WebGis service**. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.
 * **`Editor user groups`:** define the **user groups (Editor2) who manage the service**.
    Also this items will be present is present only when the user of Admin or Editor1 roles creates the WebGis  service

 * **`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the content of the service**.

![Screenshot: G3W-SUITE Administration Project Add ACL](/img/manual-english-g3wsuite-administration-project-add-acl.png)

#### Default base layer
**In this session you define which base layer should be active at startup.**

The choice is limited to the list of base layers activated for the cartographic group in which you work.

It is also possible not to define any active base layer at startup.

#### Description data
 * **`Public title`:** title of the WebGis service, it will appear at the font end level and in the header of the client.
 * **`Description`:** Description of the project, it will appear at the public portal level.
 * **`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group
 * **`URL alias`:** a human readable URL for the map. Only alphanumeric characters, not white space or special characters.


The title associated with the WebGis service is inherited by the following settings evaluated in the following order of priority:
 * Public title: if set
 * QGIS project title: if set on the **General session** of **QGIS project properties**
 * Name of the QGIS project file

#### Options and actions

 * **`User QGIS project map start extent as WebGis init extent`**: check this control if you want set initial extent from QGSI project initial extent
 
Otherwise the initial extension will correspond to the maximum one defined on the basis of the extension associated with the WMS capabilities of the QGIS project (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)

 * **`Tab's TOC active as default`**: set tab's TOC (Layers, Base layers, Legend) open by default on startup of WebGis service
 
 * **`Tab’s TOC layer initial status`**: it is possible to define whether the TOC layer list is collapsed or expanded when the WebGis service is started

* **`Map themes list initial status`**: it is possible to define whether the list of themes (views) possibly associated with the project is collapsed or expanded when the WebGis service is started

 * **` Legend position rendering`**: this option allows to set legend rendering position:
   * **In a separate TAB:** default value, the legend is rendered into a separate tab
   * **Into TOC layers:** the legend is rendered inside layers toc (as in QGIS)

 * **`Start left sidebar collassed`**:   causes the left sidebar of the WebGis to be closed on startup
 
 * **`Show the Metadata' section on left bar`**:  it is possible choose if show or hide the 'Metadata' section on client left bar

 
 * **`Automatic zoom to query result features`**: if in the results of a search there are only features of a layer, the WebGis automatic zoom on their extension

 
The next options allow you to define the type of WMS / WFS query to be carried out and the maximum number of results obtainable following a query.
 * **`WMS GeMap image format`***: definition of the image format associated to WMS service in the map (PNG 16bit raccomaned for best managment of transaprency)
 * **`Max feature to get for query`***: max number of feature to get for single or multiple mode (recommended value: 50)
 * **`Query control mode`***: single or multiple
 * **`Query by bbox control mode`***: single or multiple
 * **`Query by polygon control mode`***: single or multiple

 In the last box you have to define the providers to be associated with the Geocoding map control:
 * **` Geocoding`**:
   * **Nominatim (OSM):** addresses based on OpenStreetMap
   * **Bing Streets:** Addresses based on Bing maps
   * **Bing Places:** places based on Bing maps (service available only for the USA)

Enabling providers is carried out at the general application [settings level](settings).

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Project Add Option](/img/manual-english-g3wsuite-administration-project-add-option.png)

After filling in the various form, click on the Save button to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.png)

**If the operation is successful we will see the new project appear in the list of projects in in the working Cartographic Group.**

![Screenshot: G3W-SUITE Administration Project Addproject Result](/img/manual-english-g3wsuite-administration-project-addproject-result.png)

![Screenshot: G3W-SUITE Portal Groups](/img/manual-english-g3wsuite-portal-groups.png)


### Embedded project
**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**
It is clearly necessary to publish the embedded project first and then those derived from it.
An update of the embedded project will result in a consequent modification of all derived projects.
The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.


### Define the WebGis order on the FrontEnd
The order of the WebGis services listed within the Thematic Group at the FrontEnd level reflects the order defined at the level of the corresponding administration session.
It is possible to define a custom order by moving the published projects via drag&drop.

## Update/ Manage WebGis services

Within each Cartographic Group, it is possible to view the list of projects published within it and interact with them.

![Screenshot: G3W-SUITE Administration Project List](/img/manual-english-g3wsuite-administration-project-list.png)

The first icon, to the left of each individual project, allows you to create bookmarks for your favorite projects. This will display them in the dashboard of the Administration session, so they're always within reach.

![Screenshot: G3W-SUITE Administration Dashboard](/img/manual-english-g3wsuite-administration-dashboard.png)

To **update** a published WebGis service, access the list of projects in the Cartographic Group.

Click on the **Edit** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) icon placed at the top of the WebGis service and reload the QGIS file with the changes made in the relevant form.

Click on the **SAVE** button to confirm the change.


Always starting from the list of WebGis services, it is possible to manage numerous functional aspects associated with them.

### Basic tools

**In this section it is therefore possible to view the list of cartographic projects present, view them, manage them and create new ones.**

Through the single icons, placed at the level of each project, it is possible to:
 * ![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.png) **Display the cartographic project on the WebGis interface:** to check the display by the user
 * ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) **Access the list of layers** present within the project and define their functional aspects
 * ![Screenshot: Iconsmall View](/img/manual-english-iconsmall-view.png) **Show details**: for each WebGis service it will be possible to access a detailed summary that will list all the activated settings and widgets:
   *  access and modification permissions
   *  the list of active searches
   *  editing permissions on individual layers
   *  definition of alphanumeric and geographical constraints
   *  visibility constraints on layers
   *  visibility constraints on attribute fields

  * ![Screenshot: Iconsmall WMS](/img/manual-english-iconsmall-wms.png) **Test the WMS Capabilities** of the project
 * ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) **Update a project:** update of the QGIS file and other options related to the project
 * ![Screenshot: Iconsmall Erase](/img/manual-english-iconsmall-erase.png) **Remove a cartographic project**
   **Warning:** removing a project also removes all the widgets (e.g. searches) that would be orphaned after the project has been removed
 * ![Screenshot: Iconsmall Download](/img/manual-english-iconsmall-download.png) **Download of the QGIS project**
 * ![Screenshot: Iconsmall OGC](/img/manual-english-iconsmall-ogc.png) **List of OGC services** associated with the project
  * ![Screenshot: Iconsmall Message](/img/manual-english-iconsmall-message.png) **Messages** the tool allows you to define personalized (timed) messages visible when the WebGis service starts
 
In case of request to delete the WebGis service, a popup will ask whether the deletion of the Webgis should be permanent or a simple deactivation, which can be restored from the **Trash** menu.

![Screenshot: Project Delete](/img/manual-english-projecet-delete.png)

 **Below are some insights into specific features**

#### Show details

A useful tool for having a summary of all the settings and functions connected to the project.

![Screenshot: Tools Details](/img/manual-english-tools-details.png)

#### Messages

The tool allows you to define personalized (timed) messages visible when the WebGis service starts.

By clicking on the icon, the messages associated with the service are displayed.

![Screenshot: Messages List](/img/manual-english-messages-list.png)

Using the + Message key it is possible to create a new message by defining:
  * title
  * message body (also in html)
  * message type (info, warning, error, critical)
  * validity period (optional)

 ![Screenshot: Messages New](/img/manual-english-messages-new.png)


#### Project Trash

The operation of deleting a Project is not definitive.
The Project with all its related content (widgets and settings) is moved to the Trash session.

It is possible to access the list of trashed Projects and the restore functions through the tab Trash positioned just above the list of published projects

![Screenshot: G3W-ADMIN Trash Project](/img/manual-english-g3wadmin-trash-project.png)

Restoring a Project involves restoring all the accessory settings/functions of  the project (permissions, searches, editing settings, downloads, etc...).

**Deleting a project from the trash is an irreversible action.**


### Setting up the overview map for WebGis services
In this session it is also possible to define which of the cartographic projects loaded within the group will be used as a panoramic map.

To set the panoramic map, choose the projects and tick the check box in the **`Overview`** column.
