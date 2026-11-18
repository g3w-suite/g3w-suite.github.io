# Demo

## Try the live demo

Explore a building and maintenance management project in the stable G3W-SUITE 3.11 demo, based on QGIS 3.44 LTR. Search the map, view charts and print reports.

To try geometric and relational editing, sign in with the public demo account:

- user: **viewer1**
- password: **G3wsuite123**

Features being edited by another user may be temporarily locked.

[Open the stable demo](https://v311.g3wsuite.it/ "primary-button") [Release notes 3.11](/en/news/v3.11/ "outline-button")

## Other versions

The maintenance demo uses G3W-SUITE 3.10 and QGIS 3.40 LTR.

[Open the 3.10 demo](https://v310.g3wsuite.it/it/map/demo-310/) · [Release notes 3.10](/en/news/v3.10/)

## Development branch

Follow development of the next major version on [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).

## Demo tutorial

**_The tutorial is based on a QGIS project dedicated to the management of a layer representing a series of buildings located on the territory._**

**_In addition to the geographical aspects, the project involves the management of numerous and diversified attributes and of the related maintenance interventions through a 1: n type relation._**

In this tutorial you will:
* customize the various graphic-functional aspects of the basic project
* publish the project as a WebGis service
* create personalized searches
* add plots made with DataPlotly QGIS plugin
* activate the editing functionality by customizing associated forms and widgets

![Screenshot: Demo Webgis Project](/img/manual-english-demo-webgis-project.avif)

## Download demo data

The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from [this link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.

The .zip file contains the **`G3W-SUITE`** directory with three sub directories:
* **`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial
* **`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)
* **`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format

![Screenshot: Demo Zip File](/img/manual-english-demo-zip-file.avif)

Inside the **`build_management_demo.sqlite` SpatiaLite DB** there are the following layers:
* **`buildings` (polygon layer):** reference layer for editing aspects
* **`maintenance_works` (alphanumeric table):** with the maintenance interventions associated with the individual buildings
* **`buildings_rating` (alphanumeric table):** with the annual assessments relating to individual buildings
* **`roads` (linear layer):** layer to define the address associated to any buildings
* **`work_areas` (polygon layer):** with the perimeter of work areas to be used to define any geo-constraints
* **`type_subtype` (alphanumeric table):** a decoding table of the type and subtype values associated with the individual buildings

**IMPORTANT: a copy of this data are present on the server, you can not change your local data copy**

The project (**based on QGIS LTR 3.44.x**) foresees:
* a **dressing categorized by the `buildings` layer** based on the categorical field **`type`**
* the presence of a **1: n relation** between the **`buildings`** layer and the alphanumeric **`maintenance_works`** and **`buildings_rating`** tables
* pre-developed **query forms** for the **`buildings`** layer and the **`maintenance_works`** table
* predefined **editing widgets** for the fields of the two main layers: **`buildings`** , **`maintenance_works`** and **`buildings_rating`** tables
* two standard **print layout** and an two **atlas print layout** based on buildgs layer features


![Screenshot: Demo QGIS Project](/img/manual-english-demo-qgis-project.avif)

### Modify the QGIS project title

The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.

**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**

![Screenshot: Qgisserver Change Title](/img/manual-english-qgisserver-change-title.avif)

## Next steps

- [Publish and update a service](demo-publish.md)
- [Try layer tools in the demo](demo-widgets.md)
- [Online editing](demo-editing.md)
