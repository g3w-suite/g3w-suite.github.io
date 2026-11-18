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
- [Publish a WebGIS service](demo-publish.md)
- [Try layer tools in the demo](demo-widgets.md)
- [Try online editing](demo-editing.md)
- [Components of G3W-SUITE](components.md)
- [Versions and compatibility](versions.md)

## Install and maintain

Use Docker for a containerized deployment, or follow the manual installation guide if you manage the system packages and services yourself.

- [Docker installation](docker.md)
- [Manual installation](install.md)
- [Docker environment variables](docker_env.md)
- [Settings](settings.md)
- [Social login](social_authentication.md)
- [Double Factor Authentication (2FA)](twofa.md)

## Prepare and publish a WebGIS

- [Manage QGIS data](datamanagement.md)
- [QGIS: project settings](projectsettings.md)
- [Project properties](projectsettings-properties.md)
- [Layer properties](projectsettings-layers.md)
- [WebGIS roles and organization](user_groups_organization.md)
- [Access policy examples](organization-examples.md)
- [Administration panel](g3wsuite_administration.md)
- [Users and macro-groups](admin-users.md)
- [Cartographic groups](admin-cartographic-groups.md)
- [Manage cartographic groups](admin-group-management.md)
- [Publish and update WebGIS services](admin-publishing.md)
- [G3W-SUITE base layers](base_layers.md)
- [Group base layers and languages](admin-base-layers.md)
- [Layer tools](admin-widgets-setup.md)
- [Layer visibility and constraints](admin-widgets-controls.md)
- [Search widgets](admin-search.md)
- [Configure charts](admin-charts.md)

For the complete workflow, see [publish and update WebGIS services](admin-publishing.md).

## Use and customize the WebGIS

- [Access portal](g3wsuite_access_portal.md)
- [Map client](g3wsuite_client.md)
- [Map navigation and queries](client-map-interaction.md)
- [Map queries and results](client-map-queries.md)
- [Layers and attribute table](client-layers.md)
- [Map tools](client-tools-and-toc.md)
- [Bottom panel and time series](client-bottom-session.md)
- [Online editing](g3wsuite_editing.md)
- [Prepare a project for editing](editing-project-settings.md)
- [Editing permissions](editing-administration-settings.md)
- [Editing tools](editing-client-tools.md)
- [Editing related records](editing-relations.md)
- [Editing constraints](editing-constraints.md)
- [Geocoding](editing-geocoding.md)
- [Branding](branding.md)

## Integrate and contribute

- [Editing via IFRAME](g3wsuite_editing_iframe.md)
- [Elasticsearch integration](elasticsearch.md)
- [Translate G3W-SUITE](translation.md)

![G3W-SUITE administration panel](/img/installation-english-admin.avif)
![G3W-SUITE cartographic client](/img/installation-english-client.avif)
