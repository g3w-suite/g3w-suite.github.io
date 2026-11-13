# G3W-SUITE base layers

Below are the instructions for adding, modifying, or deleting configurations for `Base layers`, the base layers of webgis services that are independent of the project and configured at the Map Group level.

These operations are exclusively allowed to users with the `Admin level 1` role. Base layers can be configured from within the Django admin interface.

![Screenshot: Configuration Django Admin Access](/img/configuration-django-admin-access.png)

![Screenshot: Configuration Django Admin Base Layers](/img/configuration-django-admin-base-layers.png)

![Screenshot: Configuration Django Admin Base Layers Form](/img/configuration-django-admin-base-layers-form.png)

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
   "geographic":  'false',
   "axisinverted": 'false',
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
 - `servicetype`*: one of the following values: `TMS`, `WMTS`, `WMS`.
 - `layer`: the name of the service layer to call for `WMTS` and `WMS`.
 - `extent`: a list that represents the data extent.
 - `attribution`: a string indicating the attributions that will be shown on the webgis service when the base layer is active.
 - `grid`: the name of the grid to use in `WMTS` services
 - `grid_extent`: extent of the grid declared in the `grid` parameter

**\*** mandatory parameters



<script type="application/json" data-i18n>
  {
    "it": {
      "**IMPORTANT** the configurations shown above are not `JSON` but are `Python dict`": "**IMPORTANTE** le configurazioni mostrate sopra non sono `JSON`, ma `Python dict`",
      "**\\*** mandatory parameters": "**\\*** parametri obbligatori",
      "Below are the instructions for adding, modifying, or deleting configurations for `Base layers`, the base layers of webgis services that are independent of the project and configured at the Map Group level.": "Di seguito sono riportate le istruzioni per aggiungere, modificare o eliminare le configurazioni dei `Base layers`, ovvero i livelli di base dei servizi WebGIS indipendenti dal progetto e configurati a livello di Gruppo cartografico.",
      "Below is a brief description of the parameters:": "Di seguito è riportata una breve descrizione dei parametri:",
      "Form fields:": "Campi del modulo:",
      "G3W-SUITE base layers": "Livelli di base di G3W-SUITE",
      "In the `Property` field, you can configure `TMS`, `WMS`, and `WMTS` services as base layers. Below are some examples:": "Nel campo `Property` è possibile configurare servizi `TMS`, `WMS` e `WMTS` come livelli di base. Di seguito sono riportati alcuni esempi:",
      "Screenshot: Configuration Django Admin Access": "Schermata: accesso alla configurazione di Django Admin",
      "Screenshot: Configuration Django Admin Base Layers": "Schermata: configurazione dei livelli di base in Django Admin",
      "Screenshot: Configuration Django Admin Base Layers Form": "Schermata: modulo dei livelli di base in Django Admin",
      "These operations are exclusively allowed to users with the `Admin level 1` role. Base layers can be configured from within the Django admin interface.": "Queste operazioni sono consentite esclusivamente agli utenti con il ruolo `Admin level 1`. I livelli di base possono essere configurati dall'interfaccia di amministrazione di Django.",
      "`Description`: a descriptive field for the base layer.": "`Description`: un campo descrittivo del livello di base.",
      "`Name`: an internal identifier for the base layer.": "`Name`: un identificatore interno del livello di base.",
      "`Property`: the base layer configuration in the form of a *python dict*.": "`Property`: la configurazione del livello di base sotto forma di *python dict*.",
      "`Title`: the name of the base layer.": "`Title`: il nome del livello di base.",
      "`attribution`: a string indicating the attributions that will be shown on the webgis service when the base layer is active.": "`attribution`: una stringa che indica le attribuzioni da mostrare nel servizio WebGIS quando il livello di base è attivo.",
      "`crs`*: full declaration of the reference system of the data we are accessing.": "`crs`*: dichiarazione completa del sistema di riferimento dei dati a cui si accede.",
      "`extent`: a list that represents the data extent.": "`extent`: un elenco che rappresenta l'estensione dei dati.",
      "`grid_extent`: extent of the grid declared in the `grid` parameter": "`grid_extent`: estensione della griglia dichiarata nel parametro `grid`",
      "`grid`: the name of the grid to use in `WMTS` services": "`grid`: il nome della griglia da usare nei servizi `WMTS`",
      "`icon`: an image to use in the list of available base layers in the related tab in the webgis.": "`icon`: un'immagine da usare nell'elenco dei livelli di base disponibili nella scheda corrispondente del WebGIS.",
      "`layer`: the name of the service layer to call for `WMTS` and `WMS`.": "`layer`: il nome del layer del servizio da richiamare per `WMTS` e `WMS`.",
      "`servicetype`*: one of the following values: `TMS`, `WMTS`, `WMS`.": "`servicetype`*: uno dei seguenti valori: `TMS`, `WMTS`, `WMS`.",
      "`url`*: url of the service to reach including _placeholders_ if necessary (e.g., *{x}{y}{z}* for TMS services).": "`url`*: URL del servizio da raggiungere, inclusi i _segnaposto_ se necessario (ad es. *{x}{y}{z}* per i servizi TMS)."
    }
  }
</script>