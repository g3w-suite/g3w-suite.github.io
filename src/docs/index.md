---
title: G3W-SUITE 3.11 Manual
description: G3W-SUITE is a framework based on Django and Python that integrates QGIS components to build a Geographic Information System and publish QGIS projects on the Web.
---

# G3W-SUITE 3.11 Manual

G3W-SUITE is a framework based on Django and Python that integrates QGIS components to build a Geographic Information System and publish QGIS projects on the Web.

The current release (3.11) is compatible with QGIS 3.44 LTR (Server and Desktop). G3W-SUITE includes:

- **QGIS Desktop** for managing geographic data and creating cartographic projects.
- **QGIS Server** for publishing QGIS projects as OGC services.
- **G3W-ADMIN** for project management, access control, OGC proxy and REST API.
- **G3W-CLIENT** for consulting and interacting with OGC services.
- **The optional geographic portal** for accessing information, thematic groups and WebGIS services.

Through the web interface, administrators can publish and organize QGIS projects, manage users and roles, configure search tools, enable online editing and functional modules, and assign access permissions.

## Getting started

Follow the [Quick Start](quick-start.md) to publish your own project, or use the [demo tutorial](demo.md#demo-tutorial) to practice with prepared data.

- [G3W-SUITE 3.11 Manual](index.md)
- [Quick Start](quick-start.md)
- [Demo](demo.md)
- [Publish a WebGIS service](publish-a-webgis-service.md)
- [Try layer tools in the demo](try-layer-tools-in-the-demo.md)
- [Try online editing](try-online-editing.md)
- [Components of G3W-SUITE](components-of-g3w-suite.md)
- [Versions and compatibility](versions-and-compatibility.md)

## Install and maintain

Use Docker for a containerized deployment, or follow the manual installation guide if you manage the system packages and services yourself.

- [Docker installation](docker-installation.md)
- [Manual installation](manual-installation.md)
- [Docker environment variables](docker-environment-variables.md)
- [Settings](settings.md)
- [Social login](social-login.md)
- [Double Factor Authentication (2FA)](double-factor-authentication-2fa.md)

## Prepare and publish a WebGIS

- [Manage QGIS data](manage-qgis-data.md)
- [QGIS: project settings](qgis-project-settings.md)
- [Project properties](project-properties.md)
- [Layer properties](layer-properties.md)
- [WebGIS roles and organization](webgis-roles-and-organization.md)
- [Access policy examples](access-policy-examples.md)
- [Administration panel](administration-panel.md)
- [Users and macro-groups](users-and-macro-groups.md)
- [Cartographic groups](cartographic-groups.md)
- [Manage cartographic groups](manage-cartographic-groups.md)
- [Publish and update WebGIS services](publish-and-update-webgis-services.md)
- [G3W-SUITE base layers](g3w-suite-base-layers.md)
- [Group base layers and languages](group-base-layers-and-languages.md)
- [Layer tools](layer-tools.md)
- [Layer visibility and constraints](layer-visibility-and-constraints.md)
- [Search widgets](search-widgets.md)
- [Configure charts](configure-charts.md)

For the complete workflow, see [publish and update WebGIS services](publish-and-update-webgis-services.md).

## Use and customize the WebGIS

- [Access portal](access-portal.md)
- [Map client](map-client.md)
- [Map navigation and queries](map-navigation-and-queries.md)
- [Map queries and results](map-queries-and-results.md)
- [Layers and attribute table](layers-and-attribute-table.md)
- [Map tools](map-tools.md)
- [Bottom panel and time series](bottom-panel-and-time-series.md)
- [Online editing](online-editing.md)
- [Prepare a project for editing](prepare-a-project-for-editing.md)
- [Editing permissions](editing-permissions.md)
- [Editing tools](editing-tools.md)
- [Editing related records](editing-related-records.md)
- [Editing constraints](editing-constraints.md)
- [Geocoding](geocoding.md)
- [Branding](branding.md)

## Integrate and contribute

- [Editing via IFRAME](editing-via-iframe.md)
- [Elasticsearch integration](elasticsearch-integration.md)
- [Translate G3W-SUITE](translate-g3w-suite.md)

![G3W-SUITE administration panel](/img/installation-english-admin.avif)
![G3W-SUITE cartographic client](/img/installation-english-client.avif)
