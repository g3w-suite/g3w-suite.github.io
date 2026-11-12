# Prepare the demo data

[Back to Demo tutorial](demo.md)

## Download demo data

The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from <a href="https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing" target="_blank">this link</a>**.

The .zip file contains the **`G3W-SUITE`** directory with three sub directories:
* **`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial
* **`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)
* **`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format

![](/img/manual-english-demo-zip-file.png)

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


![](/img/manual-english-demo-qgis-project.png)

### Modify the QGIS project title

The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.

**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**

![](/img/manual-english-qgisserver-change-title.png)
