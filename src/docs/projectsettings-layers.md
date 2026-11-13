# Layer properties

[Back to QGIS project settings](projectsettings.md)

## Layers properties

### Simbology
The rendering style associated with the individual layers is replicated autonomously on the WebGis service.

The suite allows the switching on/off of the individual categories linked to the various simbolgy methods (categorized, graduated, by rules …).

![Screenshot: G3W-SUITE Simbology Onoff](/img/manual-english-g3wsuite-simbology-onoff.png)

If external SVG icons are used (added to the basic ones of QGIS, via the **`Settings -> Options -> System -> SVG paths`**), these must be uploaded to the server (through the **`File Manager`** tool) in order to be used by QGIS Server.

#### Manage custom SVG icons
In the installation procedure of the G3W-SUITE application, an **`svg`** named directory is created on the server.

Within this directory it is therefore possible to store SVG icons, also organized in subdirecory.

The **`Configurations icon`** ![Icon: Configuration](/img/manual-english-iconconfiguration.png), located in the upper right corner of the **Administration Panel**, allows you to access a menu that includes the **`File Manager`** item.

![Icon: G3wclient Config](/img/manual-english-g3wclient-icon-config.png)

![Screenshot: G3W-SUITE Administration Configuration Menu](/img/manual-english-g3wsuite-administration-configuration-menu.png)

Through this tool it is possible to manage SVG icons on the server in a simple and intuitive way.

![Screenshot: G3W-SUITE Administration File Manager](/img/manual-english-g3wsuite-administration-file-manager.png)

The SVG folder on the server must reflect the structure in any subfolders present locally.

**NB:** The name of this directory is defined by the basic settings set during the installation of the suite.
[See dedicated paragraph.](settings#base-settings)

**PS:** remember that the **`File Manager`** tool also allows you to manage the synchronization of geographical data (in the case of using physical files) and the management of multimedia files.

See also [dedicated paragraph](#viewing-multimedia-content)



### Multi-style layer
**The suite manages the presence of multiple styles associated with a layer.**

It will be possible to dynamically choose the style on the cartographic client.

It will be possible to manage the styles associated with a layer from the Administration component, also by **loading .qml file styles** and **setting the default style** among those present.

### Attribute table

The display order of a layer's attribute table fields is inherited from the suite.

 ![Screenshot: QGIS Attribute Table Order](/img/manual-english-qgis-attribute-table-order.png)

### Definition of the fields that can be consulted for each layer
Within the QGIS project it is also possible to define, for each layer, which fields are available following query on the WebGis service.

To define these settings, you access the properties of one of the vectors previously defined as searchable and choose the **`Source Fields`** submenu in the **`Layer Properties`** window.

This submenu lists the fields associated to the table of the vector.

The last column (**Configuration**) allows you to define:
 * whether the field is available as a search object (this setting is not set by G3W-SUITE)
 * whether the field is exposed in the **WMS** service and, therefore, in the WebGis service
 * whether the field is exposed in the **WFS** service, if enabled
 ![Screenshot: Qgislayerproperties Wmsfields](/img/manual-english-qgislayerproperties-wmsfields.png)


### Definition of the attribute display form
In the **Attribute form** section, it is possible, for vector layers, to define the structure of the attributes form associated with displaying the results following query operations.

On QGIS, we can build a personalized form (query form) by creating thematic tabs and groups and defining the distribution of the individual fields and their aliases.

This structural organization will be replicated directly on the query form on the WebGis service.

### Layer basic information

If you set a descriptive information in the **`Abstract`** form of the **`QGIS Server`** session of the **`Layer Properties`**, this information will be associated with the layer at the webgis level.


### Editing

The suite inherits numerous settings from the QGIS project related to the attribute editing features that can be defined in the **Attribute form** section.

For more information, see the [dedicated section on editing project settings](editing-project-settings.md).

### Temporal settings

The Temporal Controller functions in QGIS are replicated on the webgis component

Time series functionality works on both vector and raster data, even in multi-layer mode.

Time setting on vector data is limited to the **`Single Field with Date/Time`** case

![Screenshot: Qgislayerproperties Displayform Relations](/img/manual-english-qgislayerproperties-displayform-relations.png)



#### Viewing multimedia content
Multimedia contents (images, pdf, web URL ...) can be viewed interactively on the map client following publication of the QGIS project.

In the case of web links, simply insert them (preceded by the prefix **`http://`** or **`https://`**) within the dedicated attribute fields

In the case of multimedia files it is necessary:
 * **upload the media file to the `media_user` folder** (folder exposed on the web) accessible through the **`File Manager`** tool in the Suite Administration Panel
 * **insert the web link to this file in the dedicated attribute field**

The link to the file can be obtained in the following way:
 * **`application domain + media_user + path of the file + file name`**

Example:
 * application domain: **`https://dev.g3wsuite.it`**
 * file **`file_A.pdf`** located in the folder **`/media_user/form/`**
 * web link: **`https://dev.g3wsuite.it/media_user/form/file_A.pdf`**

Following queries at the cartographic client level, we will have different behaviors based on the type of content:
 * **image**: preview display in the form, click on the preview to display the image in real size
 * **web link or other multimedia file**: display of an **Open** orange button to allow consultation of the content

 ![Screenshot: QGIS Form Attribute](/img/manual-english-qgis-form-attribute.png)


 ![Screenshot: Qgislayerproperties Displayform](/img/manual-english-qgislayerproperties-displayform.png)

<script type="application/json" data-i18n>
  {
    "it": {
      "**`application domain + media_user + path of the file + file name`**": "**`dominio dell'applicazione + media_user + percorso del file + nome del file`**",
      "**image**: preview display in the form, click on the preview to display the image in real size": "**immagine**: anteprima nel modulo; fare clic sull'anteprima per visualizzare l'immagine a dimensione reale",
      "**insert the web link to this file in the dedicated attribute field**": "**inserire il link web al file nel campo attributo dedicato**",
      "**NB:** The name of this directory is defined by the basic settings set during the installation of the suite.": "**Nota:** il nome di questa directory è definito dalle impostazioni di base configurate durante l'installazione della suite.",
      "**PS:** remember that the **`File Manager`** tool also allows you to manage the synchronization of geographical data (in the case of using physical files) and the management of multimedia files.": "**Nota:** ricordare che lo strumento **`File Manager`** consente anche di sincronizzare i dati geografici (se si usano file fisici) e di gestire i file multimediali.",
      "**The suite manages the presence of multiple styles associated with a layer.**": "**La suite gestisce la presenza di più stili associati a un layer.**",
      "**upload the media file to the `media_user` folder** (folder exposed on the web) accessible through the **`File Manager`** tool in the Suite Administration Panel": "**caricare il file multimediale nella cartella `media_user`** (esposta sul web), accessibile tramite lo strumento **`File Manager`** nel pannello di amministrazione della suite",
      "**web link or other multimedia file**: display of an **Open** orange button to allow consultation of the content": "**link web o altro file multimediale**: viene mostrato un pulsante arancione **Apri** per consultare il contenuto",
      "[See dedicated paragraph.](settings#base-settings)": "[Vedere il paragrafo dedicato.](settings#base-settings)",
      "application domain: **`https://dev.g3wsuite.it`**": "dominio dell'applicazione: **`https://dev.g3wsuite.it`**",
      "Attribute table": "Tabella degli attributi",
      "Back to QGIS project settings": "Torna alle impostazioni del progetto QGIS",
      "Definition of the attribute display form": "Definizione del modulo di visualizzazione degli attributi",
      "Definition of the fields that can be consulted for each layer": "Definizione dei campi consultabili per ciascun layer",
      "Editing": "Modifica",
      "Example:": "Esempio:",
      "file **`file_A.pdf`** located in the folder **`/media_user/form/`**": "file **`file_A.pdf`** nella cartella **`/media_user/form/`**",
      "Following queries at the cartographic client level, we will have different behaviors based on the type of content:": "Dopo le interrogazioni nel client cartografico, il comportamento varia in base al tipo di contenuto:",
      "For more information, see the [dedicated section on editing project settings](editing-project-settings.md).": "Per ulteriori informazioni, consultare la [sezione dedicata alle impostazioni di modifica del progetto](editing-project-settings.md).",
      "Icon: G3wclient Config": "Icona: configurazione di G3W-Client",
      "If external SVG icons are used (added to the basic ones of QGIS, via the **`Settings -> Options -> System -> SVG paths`**), these must be uploaded to the server (through the **`File Manager`** tool) in order to be used by QGIS Server.": "Se si utilizzano icone SVG esterne (aggiunte a quelle predefinite di QGIS tramite **`Impostazioni -> Opzioni -> Sistema -> Percorsi SVG`**), è necessario caricarle sul server con lo strumento **`File Manager`** affinché QGIS Server possa utilizzarle.",
      "If you set a descriptive information in the **`Abstract`** form of the **`QGIS Server`** session of the **`Layer Properties`**, this information will be associated with the layer at the webgis level.": "Se si inserisce una descrizione nel campo **`Abstract`** della sezione **`QGIS Server`** della finestra **`Proprietà layer`**, questa informazione verrà associata al layer nel WebGIS.",
      "In the **Attribute form** section, it is possible, for vector layers, to define the structure of the attributes form associated with displaying the results following query operations.": "Nella sezione **Modulo attributi** è possibile definire, per i layer vettoriali, la struttura del modulo degli attributi visualizzato nei risultati delle interrogazioni.",
      "In the case of multimedia files it is necessary:": "Per i file multimediali è necessario:",
      "In the case of web links, simply insert them (preceded by the prefix **`http://`** or **`https://`**) within the dedicated attribute fields": "Per i link web, è sufficiente inserirli nei campi attributo dedicati, preceduti dal prefisso **`http://`** o **`https://`**.",
      "In the installation procedure of the G3W-SUITE application, an **`svg`** named directory is created on the server.": "Durante l'installazione di G3W-SUITE viene creata sul server una directory denominata **`svg`**.",
      "It will be possible to dynamically choose the style on the cartographic client.": "Nel client cartografico sarà possibile scegliere dinamicamente lo stile.",
      "It will be possible to manage the styles associated with a layer from the Administration component, also by **loading .qml file styles** and **setting the default style** among those present.": "Dal componente di amministrazione sarà possibile gestire gli stili associati a un layer, anche **caricando file di stile .qml** e **impostando lo stile predefinito** tra quelli disponibili.",
      "Layer basic information": "Informazioni di base del layer",
      "Layer properties": "Proprietà dei layer",
      "Layers properties": "Proprietà dei layer",
      "Manage custom SVG icons": "Gestire le icone SVG personalizzate",
      "Multi-style layer": "Layer con più stili",
      "Multimedia contents (images, pdf, web URL ...) can be viewed interactively on the map client following publication of the QGIS project.": "Dopo la pubblicazione del progetto QGIS, i contenuti multimediali (immagini, PDF, URL web...) possono essere visualizzati in modo interattivo nel client cartografico.",
      "On QGIS, we can build a personalized form (query form) by creating thematic tabs and groups and defining the distribution of the individual fields and their aliases.": "In QGIS è possibile creare un modulo personalizzato (modulo di interrogazione) con schede e gruppi tematici, definendo la disposizione dei singoli campi e dei relativi alias.",
      "Screenshot: G3W-SUITE Administration Configuration Menu": "Schermata: menu di configurazione dell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration File Manager": "Schermata: File Manager dell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Simbology Onoff": "Schermata: attivazione e disattivazione della simbologia in G3W-SUITE",
      "Screenshot: QGIS Attribute Table Order": "Schermata: ordine della tabella degli attributi QGIS",
      "Screenshot: QGIS Form Attribute": "Schermata: modulo attributi QGIS",
      "Screenshot: Qgislayerproperties Displayform": "Schermata: modulo di visualizzazione delle proprietà del layer QGIS",
      "Screenshot: Qgislayerproperties Displayform Relations": "Schermata: relazioni nel modulo di visualizzazione delle proprietà del layer QGIS",
      "Screenshot: Qgislayerproperties Wmsfields": "Schermata: campi WMS nelle proprietà del layer QGIS",
      "See also [dedicated paragraph](#viewing-multimedia-content)": "Vedere anche il [paragrafo dedicato](#viewing-multimedia-content)",
      "Simbology": "Simbologia",
      "Temporal settings": "Impostazioni temporali",
      "The **`Configurations icon`** ![Icon: Configuration](/img/manual-english-iconconfiguration.png), located in the upper right corner of the **Administration Panel**, allows you to access a menu that includes the **`File Manager`** item.": "L'**`icona Configurazioni`** ![Icona: configurazione](/img/manual-english-iconconfiguration.png), nell'angolo superiore destro del **pannello di amministrazione**, consente di aprire un menu che include la voce **`File Manager`**.",
      "The display order of a layer's attribute table fields is inherited from the suite.": "La suite eredita l'ordine di visualizzazione dei campi della tabella degli attributi del layer.",
      "The last column (**Configuration**) allows you to define:": "L'ultima colonna (**Configurazione**) consente di definire:",
      "The link to the file can be obtained in the following way:": "Il link al file può essere composto nel modo seguente:",
      "The rendering style associated with the individual layers is replicated autonomously on the WebGis service.": "Lo stile di rendering associato ai singoli layer viene riprodotto automaticamente nel servizio WebGIS.",
      "The suite allows the switching on/off of the individual categories linked to the various simbolgy methods (categorized, graduated, by rules …).": "La suite consente di attivare o disattivare le singole categorie associate ai diversi metodi di simbologia (per categorie, graduata, basata su regole...).",
      "The suite inherits numerous settings from the QGIS project related to the attribute editing features that can be defined in the **Attribute form** section.": "La suite eredita dal progetto QGIS numerose impostazioni relative alle funzioni di modifica degli attributi, definibili nella sezione **Modulo attributi**.",
      "The SVG folder on the server must reflect the structure in any subfolders present locally.": "La cartella SVG sul server deve rispecchiare la struttura delle eventuali sottocartelle presenti in locale.",
      "The Temporal Controller functions in QGIS are replicated on the webgis component": "Le funzioni del Controllore temporale di QGIS sono riprodotte nel componente WebGIS.",
      "This structural organization will be replicated directly on the query form on the WebGis service.": "Questa organizzazione strutturale verrà riprodotta direttamente nel modulo di interrogazione del servizio WebGIS.",
      "This submenu lists the fields associated to the table of the vector.": "Questa sottosezione elenca i campi associati alla tabella del layer vettoriale.",
      "Through this tool it is possible to manage SVG icons on the server in a simple and intuitive way.": "Questo strumento consente di gestire le icone SVG sul server in modo semplice e intuitivo.",
      "Time series functionality works on both vector and raster data, even in multi-layer mode.": "La funzionalità delle serie temporali opera sia sui dati vettoriali sia su quelli raster, anche in modalità multilayer.",
      "Time setting on vector data is limited to the **`Single Field with Date/Time`** case": "L'impostazione temporale sui dati vettoriali è limitata al caso **`Campo singolo con data/ora`**.",
      "To define these settings, you access the properties of one of the vectors previously defined as searchable and choose the **`Source Fields`** submenu in the **`Layer Properties`** window.": "Per definire queste impostazioni, aprire le proprietà di uno dei layer vettoriali precedentemente impostati come ricercabili e selezionare la sottosezione **`Campi sorgente`** nella finestra **`Proprietà layer`**.",
      "Viewing multimedia content": "Visualizzazione di contenuti multimediali",
      "web link: **`https://dev.g3wsuite.it/media_user/form/file_A.pdf`**": "link web: **`https://dev.g3wsuite.it/media_user/form/file_A.pdf`**",
      "whether the field is available as a search object (this setting is not set by G3W-SUITE)": "se il campo è disponibile per la ricerca (questa impostazione non viene definita da G3W-SUITE)",
      "whether the field is exposed in the **WFS** service, if enabled": "se il campo è esposto nel servizio **WFS**, se abilitato",
      "whether the field is exposed in the **WMS** service and, therefore, in the WebGis service": "se il campo è esposto nel servizio **WMS** e quindi nel servizio WebGIS",
      "Within the QGIS project it is also possible to define, for each layer, which fields are available following query on the WebGis service.": "Nel progetto QGIS è possibile definire, per ciascun layer, quali campi sono disponibili dopo un'interrogazione del servizio WebGIS.",
      "Within this directory it is therefore possible to store SVG icons, also organized in subdirecory.": "In questa directory è possibile archiviare icone SVG, anche organizzate in sottodirectory."
    }
  }
</script>
