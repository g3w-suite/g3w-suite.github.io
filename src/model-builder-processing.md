<main id="main-content">
  <div class="page-header">
    <div class="container">
      <span class="badge badge--blue">G3W-SUITE QPROCESSING</span>

# Model Builder &amp; Processing

Release date: <b>{{t '13 December 2023'}}</b>

    </div>
  </div>

  <section class="section">
    <div class="container content-page">
      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:center;margin-bottom:3rem;">
        <img src="/img/site-g3wsuite-processing.png" alt="G3W-Suite Processing" style="border-radius:6px;">
        <div>

### <b>The module dedicated to the creation of geographic analyzes on the web is based on the automated analysis models prepared on QGIS through the Processing ModelDesigner.</b>

#### The setup flow is very simple:

1. <b>Set up your analysis model on QGIS using the ModelDesigner</b>
2. <b>Upload the model file (.model3) to G3W-SUITE and associate it with one or more WebGis projects</b>
3. <b>The model is used directly on the web side, displaying and downloading the results created</b>

The analyzes are performed in "on line" mode. At the end of the analysis flow, the results will be uploaded to the map (if geographical) and available for download.

Even if the analysis operations to be performed are limited to those performed by a single analysis module, it is necessary to implement a model using the ModelDesigner. This is also to distinguish the options set beforehand from those available to the user.

        </div>
      </div>

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin-bottom:2rem;">
        <img src="/img/site-model-builder-overview.png" alt="" style="border-radius:4px;">
        <img src="/img/site-model-output.png" alt="" style="border-radius:4px;">
      </div>

      <hr style="border:none;border-top:2px solid var(--color-primary);margin:2.5rem 0;">

## QGIS Model Builder features and settings

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### Input type supported

- <b>Boolean</b>
- <b>Distance</b>
- <b>Fields Mapper</b>
- <b>Number</b>
- <b>Raster Layers</b>
- <b>Vector Features (selected feature of a layer)</b>
- <b>Vector Layers</b>

It is also possible to define project layers as default input of the individual modules.

This option limits the use of the model to a specific project or to projects containing the layers defined as inputs.

<b>Additional input types will be integrated into the next version of the module!</b>

        </div>
        <img src="/img/site-inputs.png" alt="" style="border-radius:4px;">
      </div>

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### Managed algorithms

<b>All QGIS modules, considering limitations in handling options/inputs associated with managed type of inputs</b>

        </div>
        <img src="/img/site-algoritmi.png" alt="" style="border-radius:4px;">
      </div>

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### Further settings

- <b>input order in the model form</b>

        </div>
        <img src="/img/site-reorder-model-inputs.png" alt="" style="border-radius:4px;">
      </div>

      <hr style="border:none;border-top:2px solid var(--color-primary);margin:2.5rem 0;">

## G3W-SUITE: features and settings

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### How to import analysis models created in QGIS to G3W-SUITE

Access the PROCESSING - MODEL session in the Administration session, choosing the ADD MODEL item:

- <b>Load the .model3 file relating to the analysis model to import</b>
- <b>Choose the projects to associate the model with</b>
- <b>Choose the users (among those who have permission to access the selected projects) who will be able to use the model on WebGis</b>

        </div>
        <img src="/img/site-model-builder-model-import-settings.png" alt="" style="border-radius:4px;">
      </div>

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### Input layer type supported

- <b>Project layers</b> (all or only selected features)
- <b>Layers loaded on the fly</b>
- <b>Geometries drawn on the map</b>

        </div>
        <img src="/img/site-model-builder-project-input-settings.png" alt="" style="border-radius:4px;">
      </div>

      <div class="grid-2{{#it}} grid--top{{/it}}" style="align-items:start;margin:2rem 0;">
        <div>

### Output types supported

- <b>vectors (Shapefile, GeoJSON, KML, KMZ)</b>
- <b>CSV</b>
- <b>rasters</b>
- <b>PDF export (print layout simple and atlas)</b>
- <b>HTML plots</b>

        </div>
        <img src="/img/site-model-output.png" alt="" style="border-radius:4px;">
      </div>

      <div class="cta-box">

## Try to run a QGIS Processing Model on the web!

        <a class="btn btn--primary" href="https://v310.g3wsuite.it/it/#/it/group/30" target="_blank" rel="noopener">Try the demo!</a>
      </div>
    </div>
  </section>
</main>

<script type="application/json" data-i18n>
  {
    "it": {
      "13 December 2023": "13 Dicembre 2023",
      "Model Builder Processing - G3W-Suite": "Model Builder Processing - G3W-Suite"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Model Builder Processing - G3W-Suite"
  }
</script>