---
title: Open Source Ecosystem - G3W-Suite
description: Bring QGIS projects into everyday work with an open, modular WebGIS built for collaboration.
---

# Open Source Ecosystem

G3W-SUITE is made of modular open source components, available on [GitHub](https://github.com/g3w-suite).

- web map client
- QGIS publishing
- online editing
- relational editing
- multi-user feature-lock
- query builder
- joins & relations 1:N / N:M
- DataPlotly
- QGIS print layouts
- atlases
- OSM base maps
- geolocation
- tablet & smartphone
- geographic constraints
- alphanumeric constraints
- permissions management
- PostgreSQL / PostGIS
- Oracle Spatial
- SQLite / SpatiaLite
- GeoPackage
- Shapefile
- raster
- WMS / WFS
- cadastre
- CDU
- civic address register
- RNDT / INSPIRE
- PDND
- public administration

[Features](/en/about/#open-source-ecosystem) · [Demo](/en/docs/demo/) · [Components](/en/about/#g3w-admin) · [People](/en/about/#governing-board) · [Versions and compatibility](/en/docs/versions-and-compatibility/)

## [G3W-ADMIN](/en/docs/components-of-g3w-suite/#g3w-admin)

![{{t 'G3W-ADMIN administration interface'}}](/img/site-webgis-management-preview.avif)

**Server component · Python / Django**

The server module of G3W-SUITE. Written in Python on Django LTS, it publishes QGIS projects as WebGIS services, preserving styles, forms and relations. Manages users, groups, access permissions and functional modules that can be activated per project.

[g3w-suite/g3w-admin](https://github.com/g3w-suite/g3w-admin "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-admin "outline-button")

## [G3W-CLIENT](/en/docs/components-of-g3w-suite/#g3w-client)

![{{t 'G3W-CLIENT web map interface'}}](/img/site-webgis-client-preview.avif)

**Map client · JavaScript / Vue**

The WebGIS cartographic viewer. Written in JavaScript with Vue.js, it connects to the QGIS server and provides map navigation, custom searches, web editing (including offline mode), DataPlotly chart visualisation, print layouts and much more.

[g3w-suite/g3w-client](https://github.com/g3w-suite/g3w-client "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-client "outline-button")

## [G3W-ADMIN-PROCESSING](/en/docs/components-of-g3w-suite/#g3w-admin-processing)

![{{t 'QGIS Processing model builder'}}](/img/site-model-builder-overview.avif)

**Optional module · Python**

Integrates QGIS Processing API directly into G3W-SUITE. Upload a `.model3` file in the administration panel and your geoprocessing algorithms become immediately available in the web client, with support for both synchronous and asynchronous (batch) execution.

[g3w-suite/g3w-admin-processing](https://github.com/g3w-suite/g3w-admin-processing "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-admin-processing "outline-button")

## [G3W-SUITE-DOCKER](/en/docs/components-of-g3w-suite/#g3w-suite-docker)

![{{t 'G3W-SUITE Docker services diagram'}}](/img/site-g3w-suite-docker.avif)

**Deployment · Docker**

The official Docker stack to run G3W-SUITE with a single command. Includes NGINX, PostgreSQL/PostGIS, QGIS Server and all required services, pre-configured and ready to use. This is the recommended installation method for both development and production.

[g3w-suite/g3w-suite-docker](https://github.com/g3w-suite/g3w-suite-docker "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-suite-docker "outline-button")

## [G3W-ADMIN-PORTAL](/en/docs/components-of-g3w-suite/#g3w-admin-portal)

![{{t 'G3W-SUITE public portal'}}](/img/site-frontend.avif)

**Optional module · CSS / JavaScript**

A customisable public portal for G3W-SUITE. Replaces the default login screen with a branded landing page showing logo, title and the list of published cartographic groups - fully configurable per installation.

[g3w-suite/g3w-admin-portal](https://github.com/g3w-suite/g3w-admin-portal "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-admin-portal "outline-button")

## [G3W-ADMIN-PDND](/en/docs/components-of-g3w-suite/#g3w-admin-pdnd)

![{{t 'PDND interoperability diagram'}}](/img/site-g3w-admin-pdnd.avif)

**Optional module · Python · MIT**

G3W-SUITE integration with the Italian **Piattaforma Digitale Nazionale Dati** (PDND). Adds voucher token authentication as required by the Italian interoperability guidelines, enabling WebGIS APIs compliant with AgID standards.

[g3w-suite/g3w-admin-pdnd](https://github.com/g3w-suite/g3w-admin-pdnd "github-button") [Features](/en/docs/components-of-g3w-suite/#g3w-admin-pdnd "outline-button")

## [G3W-CLIENT-PLUGIN-EDITING](/en/docs/components-of-g3w-suite/#collaborative-editing)

![{{t 'G3W-CLIENT editing tools'}}](/img/manual-english-demo-editing-web.avif)

**Built-in plugin · JavaScript / Vue · MPL-2**

A JavaScript plugin for **collaborative editing of geometries and attributes** directly in the map client. Authorised users can create, modify and delete vector features using advanced snap, split and multi-relation tools. The code is now maintained inside `g3w-admin`.

[g3w-admin / editing](https://github.com/g3w-suite/g3w-admin/tree/dev/g3w-admin/editing "github-button") [Features](/en/docs/components-of-g3w-suite/#collaborative-editing "outline-button")

## Participate in the project

Check out the public roadmap, join the community discussions or sponsor G3W-SUITE development.

[g3w-suite on GitHub](https://github.com/g3w-suite "github-button") [Public roadmap](https://github.com/orgs/g3w-suite/projects/12 "outline-button") [Discussions](https://github.com/g3w-suite/community/discussions "outline-button")

### {{t 'Governing board'}}

- [![Francesco Boccacci](https://github.com/volterra79.png?size=240) Francesco Boccacci (@volterra79)](/en/about/francesco-boccacci/)
- [![Leonardo Lami](https://github.com/leolami.png?size=240) Leonardo Lami](/en/about/leonardo-lami/)
- [![Matteo Tosi](https://github.com/Raruto.png?size=240) Matteo Tosi (@Raruto)](/en/about/matteo-tosi/)
- [![Walter Lorenzetti](https://github.com/wlorenzetti.png?size=240) Walter Lorenzetti (@wlorenzetti)](/en/about/walter-lorenzetti/)

### Contributors

- [![Alessandro Pasotti](https://github.com/elpaso.png?size=240) Alessandro Pasotti (@elpaso)](/en/about/alessandro-pasotti/)
- [![Andrea Antonello](https://github.com/moovida.png?size=240) Andrea Antonello (@moovida)](/en/about/andrea-antonello/)
- [![Matteo Ghetta](https://github.com/ghtmtt.png?size=240) Matteo Ghetta (@ghtmtt)](/en/about/matteo-ghetta/)
- [![Tudor Barascu](https://github.com/tudorbarascu.png?size=240) Tudor Barascu (@tudorbarascu)](/en/about/tudor-barascu/)
