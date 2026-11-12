# Administration interface and portal

[Back to Administration panel](g3wsuite_administration.md)

## Description of the interface

The Administration Panel allows you to manage all aspects related to the publication of QGIS projects and configuration of related WebGis services

The main page of the Administration Panel shows:
 * **`a bar at the top`:**
   * **Frontend:** to return the landing page portal
   * **Username:** to edit your profile and log out
   * **Language:** to choose the interface language
   * **A gear icon** ![](/img/manual-english-iconconfiguration.png): to access a menu with:
   
       **-->  Sistem Information**: information on operating system versions, QGIS Server, DB management, geographic libraries and anything else related to the suite

       **-->  Edit general data**: to set information shown in the front-end portal 
       
       **-->  Django Administration** (only for Staff user): to configure/managme Django advanced settings
       
       **-->  Files:** to access the File Manager tool
	   
       **-->  Images:** to define the main images of the FrontEnd home page
       
 * **`a text menu on the left`:**
   * **Dashboard:** Administration dashboard
   * **Cartographic Groups:** to create/manage cartographic groups
   * **Macro Cartographic Groups:** to create/manage Cartographic MacroGroups
   * **Users:** to create/manage single users and/or user groups
   * **List of active modules:** to activate/manage the functional modules active in your installation
 * **`a dashboard in the center of the page`**
   * **Dashboard:** to access to list of Cartographic Groups
   * **Module list:** to access the respective settings
 
![](/img/manual-english-g3wsuite-administration-desk.png)

## Front end portal customization
From the main page of the **Administration Panel** it is possible to customize the information shown on the Front End Portal.

Click on the **Configurations** icon ![](/img/manual-english-iconconfiguration.png) located at the right bottom and choose the item **Edit general data** which will appear in the menu below.

![](/img/manual-english-g3wsuite-administration-configuration.png)

In the **`General suite data`** form you can define all the informations that will appear on the portal home page
 * **`Home data`:** info that will appear on the front end landing page
 * **`About data`:** info that will appear in the **About it** session
 * **`Group map data`:** info that will appear in the **Maps** session
 * **`Login data`:** info that will appear in the **Login/Administration** session
 * **`Social media data`:** links to the social channels that will appear in the **About it** it session
 * **`Map Client data`:** main title to be displayed in the cartographic client bar
 
### Front End Home Data
Informations that will appear on the front end landing page

**ATTENTION:** contents marked with * are mandatory.

![](/img/manual-english-g3wsuite-administration-configuration-homedata.png)

![](/img/manual-english-g3wsuite-administration-configuration-homedata-result.jpg)

### Front End About Data
Informations that will appear in the **Info** session

**ATTENTION:** contents marked with * are mandatory.

![](/img/manual-english-g3wsuite-administration-configuration-aboutusdata.png)

![](/img/manual-english-g3wsuite-administration-configuration-aboutusdata-result.jpg)

### Frontend Groups Map Data
Information that will be displayed in the **Maps** session

**ATTENTION:** contents marked with * are mandatory.

![](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata.png)

![](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata-result.jpg)

### Front End Login Data
Information that will be displayed in the **Login/Administration** session

**ATTENTION:** contents marked with * are mandatory.

![](/img/manual-english-g3wsuite-administration-configuration-logindata.png)

![](/img/manual-english-g3wsuite-administration-configuration-logindata-result.jpg)

### Front End Social Data
Links to the social channels that will be displayed in the **About it** it session

**ATTENTION:** contents marked with * are mandatory.

![](/img/manual-english-g3wsuite-administration-configuration-socialdata.png)

![](/img/manual-english-g3wsuite-administration-configuration-socialdata-result.jpg)

### Map client data
Main title to be displayed in the cartographic client bar

![](/img/manual-english-g3wsuite-administration-configuration-mapclientdata.png)

![](/img/manual-english-g3wsuite-administration-configuration-mapclientdata-result.jpg)

In the **Credits** subsection it is possible to define additional text for the publishing aspects.

After filling in the various form, click on the **Save button** to confirm your choices.

![](/img/manual-english-buttom-save.png)
