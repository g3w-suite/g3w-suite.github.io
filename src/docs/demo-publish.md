# Publish a WebGIS service

[Back to Demo tutorial](demo.md)

## Access the online service

To publish the project, you can **access the G3W-SUITE test application** via the following URL: [**`https://v311.g3wsuite.it`**](https://v311.g3wsuite.it)

To access the **Administration Panel** it is necessary to log in using the following credentials:
* user: **`demo`**
* password: **`G3wsuite123`**
 
**In case of login fails, report the problem to `info@gis3w.it`**

## Publish the QGIS project as a WebGis service

After authentication it will be possible to access the **`Administration session`** and view the **Dashboard**.

In the Dashboard there will be the menu for access to the **Cartographic Groups** pertaining to your user and the menus relating to additional modules not active in this demo.

Click on the **`Show`** item in the ligth blue **Groups** box to acces at the list of available Cartographic Groups.

![](/img/manual-english-demo-dashboard.png)

Access the list of webgis in the Cartographic Group **`Demo Group`** clicking on the project number shown.

![](/img/manual-english-demo-choose-group.png)

![](/img/manual-english-demo-project-manage.png)

Now click on the button ![](/img/manual-english-button-add-qgis-project.png) to publish your **QGIS project**.

Fill out the form defining the various aspects to be associated with the WebGis service being published:
### QGIS project
**`QGIS file`:** load the QGIS cartographic project to be published (.qgz or .qgs file)

### ACL Users
Management of access permissions
* **`Viewers users`:** define the individual users (Viewers) who have the credentials to view the WebGis service. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.
* **`Viewer user groups`:** you define the user groups (Viewer) which have the credentials to view the content of the service.

### Default base layer
In this session you define which **`base layer` should be active at startup**.

The choice is limited to the list of base layers activated for the cartographic group in which you work.

It is also possible not to define any active base layer at startup.

### Description data
 * **`Public title`:** Title to be associated with the project and displayed on the client header.
If left blank, the title associated with the QGIS project will be used or, in the absence of this, the name of the project file
* **`Description`:** Description of the project, it will appear at the public portal level.
* **`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group
* **`URL alias`:** a human readable URL for the map

**ATTENTION:** contents marked with * are mandatory.

### Options and actions

Choose your preferred options regarding the following options:

 * **`User QGIS project map start extent as webgis init extent:`** check this control if you want set initial extent from QGSI project initial extent, **Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**
 * **`Tab's TOC active as default:`** set tab’s TOC (Layers, Base layers, Legend) open by default on startup of webgis service
 * **`Legend position rendering:`** this option allows to set legend rendering position:
   * **In a separate TAB:** default value, the legend is rendered into a separate tab
   * **Into TOC layers:** the legend is rendered inside layers toc
 * **`Automatic zoom to query result features:`** if in the results of a search there are only features of a layer, the webgis automatic zoom on their extension

![](/img/manual-english-g3wsuite-administration-project-add-option.png)

After filling in the various form, click on the **`Save button`** to confirm your choices.

![](/img/manual-english-buttom-save.png)

**If the publication was successful, the QGIS project will appear in the list of projects in the Cartographic Group.**

![](/img/manual-english-iconsmall-viewmap.png) Clicking on the **`View map`** icon will access the WebGis service in consultation.

![](/img/manual-english-demo-webgis-project.png)

## Update the published WebGis service

If you want to modify some graphic-functional aspects of your WebGis service, modify your QGIS project and update the WebGis service by clicking on the **`Modify`** icon ![](/img/manual-english-iconsmall-edit.png).

Reupload the QGIS project with your changes, click on the **Save button** and see the resuts on the cartographic client.
