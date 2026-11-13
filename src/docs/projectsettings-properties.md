# Project properties and general settings

[Back to QGIS project settings](projectsettings.md)

## Project property

Defining some parameters related to project properties is essential for defining:
 * Project title and description
 * Queryable layers
 * OGC services through which to expose project data and related projection systems
 * Initial extension of the webGIS service

From the **`Project → Properties`** menu, you can access the **`Project Properties`** window and the three submenus of our interest:
 * **General**
 * **Data sources**
 * **QGIS server**

### General
#### General Settings
**In this section it is possible to define the title of the project, consequently the `title of the WebGis service`.**

This title will be used at the G3W-SUITE application level to uniquely identify the published project; for this reason **it will not be possible to assign the same name to different projects published on the WebGis service**.

**We advise against using special characters, or numbers in the project name.**

![Screenshot: Projecttitle](/img/manual-english-projecttitle.png)

### Data sources

The option **`Automatically create transaction group where possible`** is automatically inherited in the online editing function.

#### Layers Capabilities

**This submenu defines the **querable and/or searchable layers** at the WebGis service level.**
 * Check the **`Identifiable`** column if you want that the layer will be searchable on the WMS service and then in the webgis service
 * Check the **`Searchable`** column if you want that the layer will be querable on the WMS service and then in the webgis service
 

**NB: this differentiation is only possible by using the QGIS APIs such as Search URL endpoint.**
See [dedicated paragraph](settings#g3w-client-search-endpoint)


![Screenshot: Datasources](/img/manual-english-datasources.png)

### QGIS Server

##### Service capabilities
**In this section it is possible to define the `capabilities of the service`**.

This information, together with info about the structure of the attribute tables of the layers present in the project, will be displayed in the **Metadata session** of the cartographic client.

See also the [client metadata section](client-tools-and-toc.md#metadata).

![Screenshot: Qgisservercapabilities](/img/manual-english-qgisservercapabilities.png)

##### Capabilities WMS - Advertised extent
**In this section it is possible to define the `geographical extension` displayed when the WebGis service starts.**

To define it, set the desired geographical view on the map and then click on the **'Use Current Canvas Extent'** button.

![Screenshot: Qgisserversetmapexpetent](/img/manual-english-qgisserversetmapexpetent.png)

##### WMS Capabilities - CSR restrictions
**In this section it is possible to define the `projection systems` for which the project is available in relation to `OGC services`.**

It is clearly necessary to insert the projection system on which the project was made, this SR is added by clicking on the **'Used'** button.

Other geographic reference systems can be implemented by clicking on the **'+'** button and choosing from the list of reference systems.

![Screenshot: Qgisserversrisrestriction](/img/manual-english-qgisserversrisrestriction.png)

##### Capabilities WMS - Exclude layouts
**In this section it is possible to `exclude some of the print layouts` that are associated with the cartographic project from the availability of the WebGis service.**

![Screenshot: Qgisserverexludecompositions](/img/manual-english-qgisserverexludecompositions.png)

##### Capabilities WMS - General aspects
Two further aspects are manageable with regard to WMS capabilities
 * in general it is recommended to check **`use the layer ids as names`** option
 * the option **`Add geometry to feature response`** must be checked to activate the **zoom to the features** on the WebGis service

![Screenshot: Qgisservergeneralaspects](/img/manual-english-qgisservergeneralaspects.png)

##### WMTS Capabilities
**In this section it is possible to define which `layers are exposed as WMTS services` defining the various options**

##### WFS Capabilities
**In this section it is possible to define which `layers are exposed as WFS services`.**

It is sufficient to check only the **`Published`** column

 ![Screenshot: Qgisservergeneralaspectswfs](/img/manual-english-qgisservergeneralaspectswfs.png)
 
 ##### WCS Capabilities
**In this section it is possible to define which `rasters are exposed as WCS services`**

## General aspects

### Themes (Views)

The creation of **Themes** (combination of off / on layers and differentiated symbology styles) is managed at the WebGis service level.

A specific menu on the webgis will allow you to choose the Theme to be displayed.

The views will be parameterizable at the URL level of the related webgis service.

### Legend

#### Filter legend by Map content

The activation of the **`Filter legend by Map content`** option on the QGIS project is automatically applied to the derived WebGis service.

#### Show features count

If the **`Show features count`** function is activated in the QGIS project at vector layer level, the same information will be displayed on the web map.

The number of features updates automatically based on the style associated with the layer.

#### Mutually exclusive groups

The activation on the QGIS project of the **`Mutually exclusive group`** option for the layers groups is automatically applied to the derived WebGis service.

#### Layer order

The option to define the layer order different from the order in the TOC on the QGIS project is automatically supported.


### Spatial Bookmarks

In case **`Spatial Bookmarks`** are saved at the QGIS project level, they will also be available on the web map.

### 1:N and N:M relations

The interface inherits the 1: and N:M relations defined in the **`Project Properties`** from the QGIS project.

The suite also manages **relations based on multiple keys**.

**ATTENTION:** there are currently limitations in the use of N:M relations

**ATTENTION:** to correctly manage these types of relations it is NECESSARY to insert the reference to the relations in the customized form

![Screenshot: Qgislayerproperties Displayform Relations](/img/manual-english-qgislayerproperties-displayform-relations.png)


### Embedded project
**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**
It is clearly necessary to publish the embedded project first and then those derived from it.
An update of the embedded project will result in a consequent modification of all derived projects.
The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.

<script type="application/json" data-i18n>
  {
    "it": {
      "**ATTENTION:** there are currently limitations in the use of N:M relations": "**ATTENZIONE:** l'uso delle relazioni N:M presenta attualmente alcune limitazioni.",
      "**ATTENTION:** to correctly manage these types of relations it is NECESSARY to insert the reference to the relations in the customized form": "**ATTENZIONE:** per gestire correttamente questi tipi di relazioni è NECESSARIO inserire il riferimento alle relazioni nel modulo personalizzato.",
      "**Data sources**": "**Sorgenti dati**",
      "**General**": "**Generale**",
      "**In this section it is possible to `exclude some of the print layouts` that are associated with the cartographic project from the availability of the WebGis service.**": "**In questa sezione è possibile `escludere dal servizio WebGIS alcuni layout di stampa` associati al progetto cartografico.**",
      "**In this section it is possible to define the `capabilities of the service`**.": "**In questa sezione è possibile definire le `capacità del servizio`.**",
      "**In this section it is possible to define the `geographical extension` displayed when the WebGis service starts.**": "**In questa sezione è possibile definire l'`estensione geografica` visualizzata all'avvio del servizio WebGIS.**",
      "**In this section it is possible to define the `projection systems` for which the project is available in relation to `OGC services`.**": "**In questa sezione è possibile definire i `sistemi di proiezione` per i quali il progetto è disponibile in relazione ai `servizi OGC`.**",
      "**In this section it is possible to define the title of the project, consequently the `title of the WebGis service`.**": "**In questa sezione è possibile definire il titolo del progetto e, di conseguenza, il `titolo del servizio WebGIS`.**",
      "**In this section it is possible to define which `layers are exposed as WFS services`.**": "**In questa sezione è possibile definire quali `layer esporre come servizi WFS`.**",
      "**In this section it is possible to define which `layers are exposed as WMTS services` defining the various options**": "**In questa sezione è possibile definire, tramite le diverse opzioni, quali `layer esporre come servizi WMTS`.**",
      "**In this section it is possible to define which `rasters are exposed as WCS services`**": "**In questa sezione è possibile definire quali `raster esporre come servizi WCS`.**",
      "**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**": "**È possibile pubblicare progetti QGIS contenenti layer o gruppi di layer provenienti da progetti incorporati.**",
      "**NB: this differentiation is only possible by using the QGIS APIs such as Search URL endpoint.**": "**Nota: questa distinzione è possibile solo utilizzando le API QGIS, ad esempio l'endpoint Search URL.**",
      "**QGIS server**": "**QGIS Server**",
      "**This submenu defines the **querable and/or searchable layers** at the WebGis service level.**": "**Questa sottosezione definisce i **layer interrogabili e/o ricercabili** a livello del servizio WebGIS.**",
      "**We advise against using special characters, or numbers in the project name.**": "**Si consiglia di non usare caratteri speciali o numeri nel nome del progetto.**",
      "1:N and N:M relations": "Relazioni 1:N e N:M",
      "A specific menu on the webgis will allow you to choose the Theme to be displayed.": "Un menu specifico nel WebGIS consente di scegliere il tema da visualizzare.",
      "An update of the embedded project will result in a consequent modification of all derived projects.": "L'aggiornamento del progetto incorporato comporta la modifica di tutti i progetti derivati.",
      "Back to QGIS project settings": "Torna alle impostazioni del progetto QGIS",
      "Capabilities WMS - Advertised extent": "Capacità WMS - Estensione pubblicizzata",
      "Capabilities WMS - Exclude layouts": "Capacità WMS - Esclusione dei layout",
      "Capabilities WMS - General aspects": "Capacità WMS - Aspetti generali",
      "Check the **`Identifiable`** column if you want that the layer will be searchable on the WMS service and then in the webgis service": "Selezionare la colonna **`Identificabile`** per rendere il layer ricercabile tramite il servizio WMS e quindi nel servizio WebGIS",
      "Check the **`Searchable`** column if you want that the layer will be querable on the WMS service and then in the webgis service": "Selezionare la colonna **`Ricercabile`** per rendere il layer interrogabile tramite il servizio WMS e quindi nel servizio WebGIS",
      "Data sources": "Sorgenti dati",
      "Defining some parameters related to project properties is essential for defining:": "La definizione di alcuni parametri relativi alle proprietà del progetto è fondamentale per specificare:",
      "Embedded project": "Progetto incorporato",
      "Filter legend by Map content": "Filtrare la legenda in base al contenuto della mappa",
      "From the **`Project → Properties`** menu, you can access the **`Project Properties`** window and the three submenus of our interest:": "Dal menu **`Progetto → Proprietà`** è possibile aprire la finestra **`Proprietà progetto`** e le tre sottosezioni di interesse:",
      "General": "Generale",
      "General aspects": "Aspetti generali",
      "General Settings": "Impostazioni generali",
      "If the **`Show features count`** function is activated in the QGIS project at vector layer level, the same information will be displayed on the web map.": "Se nel progetto QGIS si attiva la funzione **`Mostra il conteggio degli elementi`** per un layer vettoriale, la stessa informazione verrà mostrata nella mappa web.",
      "In case **`Spatial Bookmarks`** are saved at the QGIS project level, they will also be available on the web map.": "Se nel progetto QGIS sono salvati **`Segnalibri spaziali`**, saranno disponibili anche nella mappa web.",
      "in general it is recommended to check **`use the layer ids as names`** option": "in generale, si consiglia di selezionare l'opzione **`usa gli ID dei layer come nomi`**",
      "Initial extension of the webGIS service": "Estensione iniziale del servizio WebGIS",
      "It is clearly necessary to insert the projection system on which the project was made, this SR is added by clicking on the **'Used'** button.": "È necessario aggiungere il sistema di proiezione utilizzato per creare il progetto, facendo clic sul pulsante **'Usato'**.",
      "It is clearly necessary to publish the embedded project first and then those derived from it.": "È necessario pubblicare prima il progetto incorporato e poi quelli che ne derivano.",
      "It is sufficient to check only the **`Published`** column": "È sufficiente selezionare solo la colonna **`Pubblicato`**",
      "Layer order": "Ordine dei layer",
      "Layers Capabilities": "Capacità dei layer",
      "Legend": "Legenda",
      "Mutually exclusive groups": "Gruppi mutuamente esclusivi",
      "OGC services through which to expose project data and related projection systems": "Servizi OGC tramite i quali esporre i dati del progetto e i relativi sistemi di proiezione",
      "Other geographic reference systems can be implemented by clicking on the **'+'** button and choosing from the list of reference systems.": "È possibile aggiungere altri sistemi di riferimento geografico facendo clic sul pulsante **'+'** e scegliendoli dall'elenco.",
      "Project properties and general settings": "Proprietà del progetto e impostazioni generali",
      "Project property": "Proprietà del progetto",
      "Project title and description": "Titolo e descrizione del progetto",
      "QGIS Server": "QGIS Server",
      "Queryable layers": "Layer interrogabili",
      "Screenshot: Datasources": "Schermata: sorgenti dati",
      "Screenshot: Projecttitle": "Schermata: titolo del progetto",
      "Screenshot: Qgislayerproperties Displayform Relations": "Schermata: relazioni nel modulo di visualizzazione delle proprietà del layer QGIS",
      "Screenshot: Qgisservercapabilities": "Schermata: capacità di QGIS Server",
      "Screenshot: Qgisserverexludecompositions": "Schermata: esclusione dei layout in QGIS Server",
      "Screenshot: Qgisservergeneralaspects": "Schermata: aspetti generali di QGIS Server",
      "Screenshot: Qgisservergeneralaspectswfs": "Schermata: aspetti generali WFS di QGIS Server",
      "Screenshot: Qgisserversetmapexpetent": "Schermata: impostazione dell'estensione della mappa in QGIS Server",
      "Screenshot: Qgisserversrisrestriction": "Schermata: restrizioni CRS di QGIS Server",
      "See [dedicated paragraph](settings#g3w-client-search-endpoint)": "Vedere il [paragrafo dedicato](settings#g3w-client-search-endpoint)",
      "See also the [client metadata section](client-tools-and-toc.md#metadata).": "Vedere anche la [sezione sui metadati del client](client-tools-and-toc.md#metadata).",
      "Service capabilities": "Capacità del servizio",
      "Show features count": "Mostrare il conteggio degli elementi",
      "Spatial Bookmarks": "Segnalibri spaziali",
      "The activation of the **`Filter legend by Map content`** option on the QGIS project is automatically applied to the derived WebGis service.": "L'attivazione dell'opzione **`Filtra la legenda in base al contenuto della mappa`** nel progetto QGIS viene applicata automaticamente al servizio WebGIS derivato.",
      "The activation on the QGIS project of the **`Mutually exclusive group`** option for the layers groups is automatically applied to the derived WebGis service.": "L'attivazione dell'opzione **`Gruppo mutuamente esclusivo`** per i gruppi di layer nel progetto QGIS viene applicata automaticamente al servizio WebGIS derivato.",
      "The creation of **Themes** (combination of off / on layers and differentiated symbology styles) is managed at the WebGis service level.": "La creazione dei **Temi** (combinazioni di layer attivi/disattivi e stili di simbologia differenziati) viene gestita a livello del servizio WebGIS.",
      "The interface inherits the 1: and N:M relations defined in the **`Project Properties`** from the QGIS project.": "L'interfaccia eredita le relazioni 1:N e N:M definite nel **`Proprietà progetto`** del progetto QGIS.",
      "The number of features updates automatically based on the style associated with the layer.": "Il numero di elementi si aggiorna automaticamente in base allo stile associato al layer.",
      "the option **`Add geometry to feature response`** must be checked to activate the **zoom to the features** on the WebGis service": "l'opzione **`Aggiungi geometria alla risposta dell'elemento`** deve essere selezionata per attivare lo **zoom sugli elementi** nel servizio WebGIS",
      "The option **`Automatically create transaction group where possible`** is automatically inherited in the online editing function.": "L'opzione **`Crea automaticamente un gruppo di transazioni, se possibile`** viene ereditata automaticamente dalla funzione di modifica online.",
      "The option to define the layer order different from the order in the TOC on the QGIS project is automatically supported.": "È supportata automaticamente l'opzione del progetto QGIS che definisce un ordine dei layer diverso da quello del TOC.",
      "The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.": "La richiesta di eliminare il progetto incorporato di base genera un messaggio di avviso, poiché l'operazione causerebbe problemi a tutti i progetti derivati.",
      "The suite also manages **relations based on multiple keys**.": "La suite gestisce anche **relazioni basate su più chiavi**.",
      "The views will be parameterizable at the URL level of the related webgis service.": "Le viste potranno essere parametrizzate nell'URL del relativo servizio WebGIS.",
      "Themes (Views)": "Temi (viste)",
      "This information, together with info about the structure of the attribute tables of the layers present in the project, will be displayed in the **Metadata session** of the cartographic client.": "Queste informazioni, insieme ai dati sulla struttura delle tabelle degli attributi dei layer presenti nel progetto, saranno mostrate nella sezione **Metadati** del client cartografico.",
      "This title will be used at the G3W-SUITE application level to uniquely identify the published project; for this reason **it will not be possible to assign the same name to different projects published on the WebGis service**.": "Questo titolo verrà utilizzato nell'applicazione G3W-SUITE per identificare in modo univoco il progetto pubblicato; per questo motivo **non sarà possibile assegnare lo stesso nome a progetti diversi pubblicati nel servizio WebGIS**.",
      "To define it, set the desired geographical view on the map and then click on the **'Use Current Canvas Extent'** button.": "Per definirla, impostare sulla mappa la visualizzazione geografica desiderata e fare clic sul pulsante **'Usa l'estensione attuale della mappa'**.",
      "Two further aspects are manageable with regard to WMS capabilities": "Per le capacità WMS è possibile gestire anche i due aspetti seguenti:",
      "WCS Capabilities": "Capacità WCS",
      "WFS Capabilities": "Capacità WFS",
      "WMS Capabilities - CSR restrictions": "Capacità WMS - Restrizioni CRS",
      "WMTS Capabilities": "Capacità WMTS"
    }
  }
</script>
