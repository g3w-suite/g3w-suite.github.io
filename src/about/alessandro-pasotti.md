---
title: Alessandro Pasotti - G3W-Suite
description: Alessandro Pasotti works on QGIS and G3W-ADMIN, including WMS print annotations, vector tiles and routing.
---

# Alessandro Pasotti

![Alessandro Pasotti](https://github.com/elpaso.png?size=400)

**I work on open-source GIS, with a particular focus on QGIS and its server-side tools.**

[GitHub profile](https://github.com/elpaso) · [LinkedIn](https://www.linkedin.com/in/itopen/) · [Mastodon](https://mapstodon.space/@elpaso) · [QGIS development at ItOpen](https://www.itopen.it/qgis-development/)

## Beyond G3W-SUITE

At [ItOpen](https://www.itopen.it), I work with QGIS. My projects include [QGIS Geocoding](https://github.com/elpaso/qgis-geocoding), [QGIS Server Vagrant](https://github.com/elpaso/qgis3-server-vagrant) and [django-dag](https://github.com/elpaso/django-dag): tools that range from finding data to building and deploying GIS infrastructure.

QGIS Geocoding is a Python plugin for geocoding and reverse geocoding: moving between addresses and geographic positions. My repositories also include a [simple QGIS Server browser](https://github.com/elpaso/qgis-server-simple-browser) and [QuickWKT](https://github.com/elpaso/quickwkt), a plugin for working with WKT geometries.

Alongside software, I have shared [workshop material](https://github.com/elpaso/python-gis-workshop) with slides and code samples for Python GIS. These projects offer different entry points into the same ecosystem, from desktop tools to server-side development.

## In G3W-SUITE

In G3W-ADMIN, I work on the details between QGIS Server and the people administering a WebGIS. One change adds temporary annotation layers to WMS GetPrint output, so printed maps can carry notes drawn on the map. I have also fixed ArcGIS vector-tile services and OpenRouteService integration. [GetPrint change](https://github.com/g3w-suite/g3w-admin/commit/f1ed598d) · [Vector-tile fix](https://github.com/g3w-suite/g3w-admin/commit/8634e385).

The printing change connects annotations made in the web client with the map sent to QGIS Server for output. My routing fixes cover cases involving raster layers and travel-time intervals, while other contributions address how legend styles are handled.

This work spans standards-based map services and the practical details of an administration interface. The linked changes show the implementation and discussion for each improvement.
[Back to the project](/en/about/ "outline-button")
