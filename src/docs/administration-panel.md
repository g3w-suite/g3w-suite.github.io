---
title: Administration panel
description: "This section describes how to manage the various aspects and features of the Suite:"
---

# Administration panel

_**This section describes how to manage the various aspects and features of the Suite:**_
 * _**customization of the access portal**_
 * _**user creation and management (individuals and groups)**_
 * _**creation of MacroGroups and cartographic Groups and definition of access and management policies**_
 * _**publication of QGIS projects as WebGis services**_
 * _**updating and management of WebGis services (search tool and additional functions)**_

## Users and Users Groups management

- [Users and cartographic macro-groups](users-and-macro-groups.md)

## Cartographic Groups

- [Cartographic groups](cartographic-groups.md)

## Publication of new WebGis services

- [Publish and update WebGIS services](publish-and-update-webgis-services.md)

## Widgets management

- [Widget and layer setup](layer-tools.md)
- [Widget constraints and search tools](layer-visibility-and-constraints.md)

## Add custom Base layers

- [Base layers and multilingual settings](group-base-layers-and-languages.md)

## Description of the interface

Use the Administration Panel to publish QGIS projects and configure their WebGIS services.

The main page of the Administration Panel shows the following items, depending on your permissions and the installed modules:
 * **`a bar at the top`:**
   * **Frontend:** to return to the landing page when the optional portal is enabled
   * **Username:** to edit your profile and log out
   * **Language:** to choose the interface language
   * **A gear icon** ![Icon: Configuration](/img/manual-english-iconconfiguration.avif): to access a menu with:

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

![Screenshot: G3W-SUITE Administration Desk](/img/manual-english-g3wsuite-administration-desk.avif)

## Front end portal customization
If the [optional portal](access-portal.md) is enabled, use the **Administration Panel** to customize its content.

Open the **Configurations** menu ![Icon: Configuration](/img/manual-english-iconconfiguration.avif) at the top right and choose **Edit general data**.

![Screenshot: G3W-SUITE Administration Configuration](/img/manual-english-g3wsuite-administration-configuration.avif)

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

![Screenshot: G3W-SUITE Administration Configuration Homedata](/img/manual-english-g3wsuite-administration-configuration-homedata.avif)

![Screenshot: G3W-SUITE Administration Configuration Homedata Result](/img/manual-english-g3wsuite-administration-configuration-homedata-result.avif)

### Front End About Data
Informations that will appear in the **Info** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Aboutusdata](/img/manual-english-g3wsuite-administration-configuration-aboutusdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Aboutusdata Result](/img/manual-english-g3wsuite-administration-configuration-aboutusdata-result.avif)

### Frontend Groups Map Data
Information that will be displayed in the **Maps** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata Result](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata-result.avif)

### Front End Login Data
Information that will be displayed in the **Login/Administration** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Logindata](/img/manual-english-g3wsuite-administration-configuration-logindata.avif)

![Screenshot: G3W-SUITE Administration Configuration Logindata Result](/img/manual-english-g3wsuite-administration-configuration-logindata-result.avif)

### Front End Social Data
Links to the social channels that will be displayed in the **About it** it session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Socialdata](/img/manual-english-g3wsuite-administration-configuration-socialdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Socialdata Result](/img/manual-english-g3wsuite-administration-configuration-socialdata-result.avif)

### Map client data
Main title to be displayed in the cartographic client bar

![Screenshot: G3W-SUITE Administration Configuration Mapclientdata](/img/manual-english-g3wsuite-administration-configuration-mapclientdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Mapclientdata Result](/img/manual-english-g3wsuite-administration-configuration-mapclientdata-result.avif)

In the **Credits** subsection it is possible to define additional text for the publishing aspects.

After filling in the various form, click on the **Save button** to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)
