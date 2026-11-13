# Bottom panel and time series

[Back to Cartographic client](g3wsuite_client.md)

## Bottom session

The bottom part of the left bar contains the following items:

### Add layer

Through this tool the user can add custom WMS, TSM or local file layers to the WebGis service.

#### WMS (URL)

The user can add one or more WMS service by defining:
 * **WMS URL**
 * **Name**

Clicking on Connect buttom, you can view the list of layers associated with the service and choose which one (or which ones) to load into the map by defining:
 * the **Projection system** to be associated
 * the **Position** (top or buttom) with respect to the other layers of the project
 * the **Opacity** of the layer
 * an alternatice **Name** respect the original
 
![Screenshot: G3wclient Add WMS](/img/manual-english-g3wclient-add-wms.png)

The WMS layer will be added to the map and TOC after the project layer list.

**N.B.** the added WMS layer cannot not be queried.

The list of WMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.

#### TMS (URL)
The user can add one or more TSM service by defining:
 * **URL:** the TMS service URL
 * **Name:** custom name to associate with the service
 * **Projection system** to be associated
 * **Position** (top or buttom) with respect to the other layers of the project
 * **Opacity** of the layer

![Screenshot: G3wclient Add Tms](/img/manual-english-g3wclient-add-tms.png)

The TMS layer will be added to the map and TOC after the project layer list.

**N.B.:** the added TMS layer cannot not be queried.

The list of TMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.

#### Local file

The user can add one or more local layer uploading it in the form.

The formats currently managed are:
 * gml
 * geojson
 * kml
 * kmz
 * gpx
 * csv
 * shapefile (zipped)

For each layer you need to specify:
 * associated **Projection** system
 * **Position** (top or buttom) with respect to the other layers of the project
 * **Persistent data:** allows you to specify whether or not the layer should be deleted when the session is closed
 * **Label (optional):** the field to use to label the features
 * Layer **color** and **opacity**

![Screenshot: G3wclient Add Layer Local](/img/manual-english-g3wclient-add-layer-local.png)

### Change map

The item allows you to switch to a different map, among those accessible to the user, referring to the current extension and scale.

Clicking this item will open a modal panel displaying other maps in the same Cartographic Group as the current map.

You can change the map view while maintaining the current scale and extent.

An arrow icon in the upper left corner will allow you to navigate between Cartographic Groups (and possibly Cartographic Macrogroups) to select other maps.

## Time series

**NB: the Time Series function is only available with a QGIS Server version >= 3.26**

This version of G3W-SUITE manages the temporal aspects for both vector and raster layers but with limitations:
 * **vector layers:** limited to the **Single field with Date/Time** configuration
 * **raster layers:** Mesh layer
 * **WMS-T**

 It is possible to create animations based on multiple temporal layers both raster and vector.

If in the QGIS project  a temporal vector/raster layer on which the **Dynamic temporal control** property has been activated is present, the client will show an additional panel called **Time series**.

This panel will allow you to:
 * define the start/end date of the time series
 * define the step of the animation
 * start and manage the temporal animation

![Screenshot: G3wclient Timeseries Tool](/img/manual-english-g3wclient-timeseries-tool.png)

The modification of the start date of the series will determine the updating of the map with the visualization of the layer in coherence with the chosen date.

**Pay attention: to use the Time series function for raster data, it must also be activated at the level of the G3W-ADMIN layer properties.**

![Screenshot: G3wclient Timeseries Admin](/img/manual-english-g3wclient-timeseries-admin.png)

<script type="application/json" data-i18n>
{
  "it": {
    "**Label (optional):** the field to use to label the features": "**Etichetta (facoltativa):** il campo da usare per etichettare gli elementi",
    "**N.B.:** the added TMS layer cannot not be queried.": "**N.B.:** Non è possibile interrogare il layer TMS aggiunto.",
    "**N.B.** the added WMS layer cannot not be queried.": "**N.B.** Non è possibile interrogare il layer WMS aggiunto.",
    "**Name:** custom name to associate with the service": "**Nome:** nome personalizzato da associare al servizio",
    "**Name**": "**Nome**",
    "**NB: the Time Series function is only available with a QGIS Server version >= 3.26**": "**NB: la funzione Serie temporali è disponibile solo con QGIS Server versione >= 3.26**",
    "**Opacity** of the layer": "**Opacità** del layer",
    "**Pay attention: to use the Time series function for raster data, it must also be activated at the level of the G3W-ADMIN layer properties.**": "**Attenzione: per usare la funzione Serie temporali con dati raster, è necessario attivarla anche nelle proprietà del layer in G3W-ADMIN.**",
    "**Persistent data:** allows you to specify whether or not the layer should be deleted when the session is closed": "**Dati persistenti:** consente di specificare se il layer deve essere eliminato alla chiusura della sessione",
    "**Position** (top or buttom) with respect to the other layers of the project": "**Posizione** (in alto o in basso) rispetto agli altri layer del progetto",
    "**Projection system** to be associated": "**Sistema di proiezione** da associare",
    "**raster layers:** Mesh layer": "**layer raster:** layer Mesh",
    "**URL:** the TMS service URL": "**URL:** l’URL del servizio TMS",
    "**vector layers:** limited to the **Single field with Date/Time** configuration": "**layer vettoriali:** limitati alla configurazione **Campo singolo con data/ora**",
    "**WMS URL**": "**URL WMS**",
    "**WMS-T**": "**WMS-T**",
    "Add layer": "Aggiungi layer",
    "an alternatice **Name** respect the original": "un **nome** alternativo a quello originale",
    "An arrow icon in the upper left corner will allow you to navigate between Cartographic Groups (and possibly Cartographic Macrogroups) to select other maps.": "Un’icona a forma di freccia nell’angolo superiore sinistro consente di spostarsi tra i Gruppi cartografici (ed eventualmente i Macrogruppi cartografici) per selezionare altre mappe.",
    "associated **Projection** system": "il sistema di **proiezione** associato",
    "Back to Cartographic client": "Torna al client cartografico",
    "Bottom panel and time series": "Pannello inferiore e serie temporali",
    "Bottom session": "Pannello inferiore",
    "Change map": "Cambia mappa",
    "Clicking on Connect buttom, you can view the list of layers associated with the service and choose which one (or which ones) to load into the map by defining:": "Facendo clic sul pulsante Connect, è possibile visualizzare l’elenco dei layer associati al servizio e scegliere quali caricare sulla mappa, specificando:",
    "Clicking this item will open a modal panel displaying other maps in the same Cartographic Group as the current map.": "Facendo clic su questa voce si apre un pannello modale con le altre mappe dello stesso Gruppo cartografico della mappa corrente.",
    "define the start/end date of the time series": "definire la data iniziale e finale della serie temporale",
    "define the step of the animation": "definire l’intervallo dell’animazione",
    "For each layer you need to specify:": "Per ogni layer è necessario specificare:",
    "If in the QGIS project  a temporal vector/raster layer on which the **Dynamic temporal control** property has been activated is present, the client will show an additional panel called **Time series**.": "Se nel progetto QGIS è presente un layer vettoriale o raster temporale con la proprietà **Controllo temporale dinamico** attivata, il client mostrerà un pannello aggiuntivo denominato **Serie temporali**.",
    "It is possible to create animations based on multiple temporal layers both raster and vector.": "È possibile creare animazioni basate su più layer temporali, sia raster sia vettoriali.",
    "Layer **color** and **opacity**": "**Colore** e **opacità** del layer",
    "Local file": "File locale",
    "Screenshot: G3wclient Add Layer Local": "Schermata: aggiunta di un layer locale in G3wclient",
    "Screenshot: G3wclient Add Tms": "Schermata: aggiunta TMS in G3wclient",
    "Screenshot: G3wclient Add WMS": "Schermata: aggiunta WMS in G3wclient",
    "Screenshot: G3wclient Timeseries Admin": "Schermata: serie temporali in amministrazione G3wclient",
    "Screenshot: G3wclient Timeseries Tool": "Schermata: strumento serie temporali di G3wclient",
    "start and manage the temporal animation": "avviare e gestire l’animazione temporale",
    "the **Opacity** of the layer": "l’**opacità** del layer",
    "the **Position** (top or buttom) with respect to the other layers of the project": "la **posizione** (in alto o in basso) rispetto agli altri layer del progetto",
    "the **Projection system** to be associated": "il **sistema di proiezione** da associare",
    "The bottom part of the left bar contains the following items:": "La parte inferiore della barra a sinistra contiene i seguenti elementi:",
    "The formats currently managed are:": "I formati attualmente gestiti sono:",
    "The item allows you to switch to a different map, among those accessible to the user, referring to the current extension and scale.": "Questa voce consente di passare a un’altra mappa accessibile all’utente, mantenendo l’estensione e la scala correnti.",
    "The list of TMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.": "L’elenco dei servizi TMS e dei relativi layer WMS aggiunti resterà disponibile finché non verrà svuotata la cache del browser.",
    "The list of WMS services and the specific WMS layers added will remain available to the user until the browser cache is cleared.": "L’elenco dei servizi WMS e dei relativi layer aggiunti resterà disponibile finché non verrà svuotata la cache del browser.",
    "The modification of the start date of the series will determine the updating of the map with the visualization of the layer in coherence with the chosen date.": "La modifica della data iniziale della serie aggiorna la mappa, mostrando il layer in base alla data selezionata.",
    "The TMS layer will be added to the map and TOC after the project layer list.": "Il layer TMS verrà aggiunto alla mappa e alla TOC dopo l’elenco dei layer del progetto.",
    "The user can add one or more local layer uploading it in the form.": "L’utente può aggiungere uno o più layer locali caricandoli tramite il modulo.",
    "The user can add one or more TSM service by defining:": "L’utente può aggiungere uno o più servizi TSM specificando:",
    "The user can add one or more WMS service by defining:": "L’utente può aggiungere uno o più servizi WMS specificando:",
    "The WMS layer will be added to the map and TOC after the project layer list.": "Il layer WMS verrà aggiunto alla mappa e alla TOC dopo l’elenco dei layer del progetto.",
    "This panel will allow you to:": "Questo pannello consente di:",
    "This version of G3W-SUITE manages the temporal aspects for both vector and raster layers but with limitations:": "Questa versione di G3W-SUITE gestisce gli aspetti temporali dei layer vettoriali e raster, con alcune limitazioni:",
    "Through this tool the user can add custom WMS, TSM or local file layers to the WebGis service.": "Con questo strumento l’utente può aggiungere al servizio WebGIS layer WMS, TSM o provenienti da file locali.",
    "Time series": "Serie temporali",
    "TMS (URL)": "TMS (URL)",
    "WMS (URL)": "WMS (URL)",
    "You can change the map view while maintaining the current scale and extent.": "È possibile cambiare la visualizzazione della mappa mantenendo la scala e l’estensione correnti."
  }
}
</script>
