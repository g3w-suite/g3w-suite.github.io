# Quick Start

To publish your own project, you need QGIS Desktop, a running G3W-SUITE instance, and an account that can publish to a cartographic group. If you also need to create the group, check that your account has that permission.

If you do not have an instance yet, [install G3W-SUITE with Docker](docker.md) or [follow the demo tutorial with prepared data](demo.md#demo-tutorial).

## Steps

### 1. Create your QGIS project

Create a cartographic project with the layers, symbology, forms and print layouts your workflow requires.

Organize your projects and geographic data on your computer as described in the [manual](/docs/datamanagement/#organization-of-data-and-projects).

![QGIS project](/img/site-qgis.avif)

<iframe class="step__video" src="https://www.youtube.com/embed/-GV9xUoJKD4" title="{{t 'Quick Start step 1: create your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 2. Upload your geographic data

If your project uses local files such as Shapefile, GeoPackage, SpatiaLite or raster data, upload them to the server before publishing. The [FileManager](/docs/datamanagement/#geographical-data-synchronization-on-the-server) module preserves the organization of your local data. For PostgreSQL/PostGIS or Oracle Spatial, allow the suite to connect to the database.

<iframe class="step__video" src="https://www.youtube.com/embed/8wKBoxxIs-4" title="{{t 'Quick Start step 2: upload your geographic data'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 3. Create a cartographic group

Choose an existing [cartographic group](admin-cartographic-groups.md#add-group) or create one if your account allows it. Services in the same group must use the group's coordinate reference system.

<iframe class="step__video" src="https://www.youtube.com/embed/P7hKruymHj4" title="{{t 'Quick Start step 3: create a cartographic group'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>

### 4. Publish your QGIS project

Upload the `.qgs` or `.qgz` file to the cartographic group. No plugin is needed: the WebGIS service inherits the settings and functions configured in the QGIS project.

After saving, check that the project appears in the group's project list. Open it with **View map** and check that the expected layers load. See [Publish and update WebGIS services](admin-publishing.md) for permissions, publication options, and updates.

<iframe class="step__video" src="https://www.youtube.com/embed/gaxsTFC5uoo" title="{{t 'Quick Start step 4: publish your QGIS project'}}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>
