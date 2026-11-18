# G3W-SUITE base layers

Add, edit or delete `Base layers` for WebGIS services at the Cartographic Group level. These layers are independent of the project.

Only users with the `Admin level 1` role can configure base layers in the Django admin interface.

![Screenshot: Configuration Django Admin Access](/img/configuration-django-admin-access.avif)

![Screenshot: Configuration Django Admin Base Layers](/img/configuration-django-admin-base-layers.avif)

![Screenshot: Configuration Django Admin Base Layers Form](/img/configuration-django-admin-base-layers-form.avif)

Form fields:
 - `Name`: an internal identifier for the base layer.
 - `Title`: the name of the base layer.
 - `icon`: an image to use in the list of available base layers in the related tab in the webgis.
 - `Description`: a descriptive field for the base layer.
 - `Property`: the base layer configuration in the form of a *python dict*.


In the `Property` field, you can configure `TMS`, `WMS`, and `WMTS` services as base layers. Below are some examples:

### TMS
```python
{
 "crs":{
  "epsg": 32632,
   "proj4": "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs",
   "geographic": False,
   "axisinverted": False,
  "extent" : [166021.44,0.0,833978.56,9329005.18]
},
 "url": "https://sit.parco.gran-paradiso.g3wsuite.it/caching/api/qdjango30/{z}/{x}/{y}.png",
 "servertype": "TMS",
 "attributions": "Ortofoto Piemonte AGEA 2015"
}
```

### WMTS
```python
{
 "crs": {
    "epsg": 27700,
    "proj4": "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +units=m +no_defs",
    "geographic": False,
    "axisinverted": False,
    "extent": [-103976.29764287075, 6853.1136085508915, 616829.1229036889, 1243036.259830151]
 },
 "url": "http://localhost:8080/mapproxy_conf_2378/service/?",
 "servertype": "WMTS",
 "attributions": "",
 "layer": "MVDC_DistrictBoundary",
 "extent": [508630.2485007373, 134752.46570880772, 528222.6959272355, 161343.02015124384],
 "grid": "localgrid_wmts",
 "grid_extent": [508630.2485007373, 134752.46570880772, 528222.6959272355, 161343.02015124384]
}
```

**IMPORTANT** the configurations shown above are not `JSON` but are `Python dict`

Below is a brief description of the parameters:

 - `crs`*: full declaration of the reference system of the data we are accessing.
 - `url`*: url of the service to reach including _placeholders_ if necessary (e.g., *{x}{y}{z}* for TMS services).
 - `servertype`*: one of the following values: `TMS`, `WMTS`, `WMS`.
 - `layer`: the name of the service layer to call for `WMTS` and `WMS`.
 - `extent`: a list that represents the data extent.
 - `attributions`: a string indicating the attributions that will be shown on the webgis service when the base layer is active.
 - `grid`: the name of the grid to use in `WMTS` services
 - `grid_extent`: extent of the grid declared in the `grid` parameter

**\*** mandatory parameters

The `crs` dictionary describes the service's coordinate reference system:

 - `epsg`: the numeric EPSG code.
 - `proj4`: the corresponding PROJ definition.
 - `geographic`: `True` for a geographic CRS, `False` for a projected CRS.
 - `axisinverted`: `True` when the CRS uses inverted axis order, otherwise `False`.
 - `extent`: optionally, the CRS extent as `[minx, miny, maxx, maxy]` in its own coordinates.

Use Python booleans (`True` or `False`), not strings such as `'false'`.
