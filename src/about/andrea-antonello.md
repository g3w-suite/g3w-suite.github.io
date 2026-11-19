---
title: Andrea Antonello - G3W-Suite
description: Andrea Antonello builds geospatial libraries in Dart and has worked on G3W-SUITE translation tooling.
---

# Andrea Antonello

![Andrea Antonello](https://github.com/moovida.png?size=400)

**I work on geospatial software, from GIS libraries in Dart to G3W-SUITE localization.**

[GitHub profile](https://github.com/moovida) · [LinkedIn](https://www.linkedin.com/in/andreaantonello) · [Mastodon](https://digitalcourage.social/@moovida) · [G-ANT Scientific Solutions](https://g-ant.eu)

## In G3W-SUITE

In G3W-ADMIN, I have worked on localization tooling: export/import helpers built around `manage.py`, followed by updates to module labels and German translations. I also fixed an OpenRouteService label in the sitetree translations. These changes make the admin interface easier to translate and keep in sync. [Translation tooling](https://github.com/g3w-suite/g3w-admin/commit/ca394118) · [Sitetree update](https://github.com/g3w-suite/g3w-admin/commit/7dc474e2).

The translation helpers use a folder structure to export language files and import them again. My changes also addressed paths containing underscores, making that exchange more reliable for the modules being translated.

I have shared [configuration scripts](https://github.com/moovida/g3wsuite_config_scripts) for setting up G3W-SUITE as well. They sit alongside the translation work as practical resources for people installing and maintaining the platform.

## Beyond G3W-SUITE

Through [G-ANT Scientific Solutions](https://g-ant.eu) and my public repositories, I work on the geospatial ecosystem around mobile and open data: [dart_jts](https://github.com/moovida/dart_jts) ports part of the Java Topology Suite to Dart, while [flutter_geopackage](https://github.com/moovida/flutter_geopackage) and [dart_shp](https://github.com/moovida/dart_shp) bring common GIS formats to Dart and Flutter apps. I also maintain small utilities for a reMarkable tablet.

The GeoPackage library uses SQLite to work with an OGC geospatial format, including vector tables and map tiles. The Shapefile library provides a reader and writer, while dart_jts brings geometry operations from the Java Topology Suite into the Dart ecosystem.

My repositories also include [dart_postgis](https://github.com/moovida/dart_postgis), a PostGIS client for Dart, and [pyqgis_scripting_extensions](https://github.com/moovida/pyqgis_scripting_extensions), which aims to make PyQGIS scripting more approachable. Together they span data storage, geometry and the tools used to work with geographic information.
[Back to the project](/en/about/ "outline-button")
