# Publish and update WebGIS services

[Back to Administration panel](g3wsuite_administration.md)

## Publication of new WebGis services
### To publish a new QGIS cartographic project
Publish new QGIS projects:
 * **from the list of cartographic groups:** click on the icon ![Icon: Add](/img/manual-english-icon-add.png) located under the box of the cartographic group in which you want to publish the project.
 * **from the list of cartographic projects published within a group:** by clicking on the the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png)

In the dedicated form we could define the characteristic of the project being published:

#### QGIS project
**`QGIS file`***: load the QGIS cartographic project to be published (.qgz or .qgs file)

#### ACL Users
**Management of access and/or modification permissions**

The options present will vary according to the type of user (Admin, Editor1 or Editor2) who creates / manages the WebGis service.

**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions (described below) are optional.

Learn more about this in the [dedicated session](user_groups_organization).

Let’s see in detail the various sub-sessions of the ACL Users session:
 * **`Editor1 user`:** defines the **user (Editor1) manager of the WebGis service**.

    The entry is present only when the WebGis service is created by Admin

    In the event that the WebGis service is published by a user created by a user associated with the Editor1 role this option is not visible and the, the WebGis service is associated directly with that user

 * **`Editor2 User`:** defines the **user (Editor2) manager of the WebGis service**.
 
   The item is present only when a user of the Admin or Editor1 roles publish the WebGis service. 
   In the event that the WebGis service is published by a user of Editor2 role, the WebGis service is associated directly with that user

 * **`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the WebGis service**. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.
 * **`Editor user groups`:** define the **user groups (Editor2) who manage the service**.
    Also this items will be present is present only when the user of Admin or Editor1 roles creates the WebGis  service

 * **`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the content of the service**.

![Screenshot: G3W-SUITE Administration Project Add ACL](/img/manual-english-g3wsuite-administration-project-add-acl.png)

#### Default base layer
**In this session you define which base layer should be active at startup.**

The choice is limited to the list of base layers activated for the cartographic group in which you work.

You can also start without an active base layer.

#### Description data
 * **`Public title`:** title of the WebGis service, it will appear at the font end level and in the header of the client.
 * **`Description`:** Description of the project, it will appear at the public portal level.
 * **`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group
 * **`URL alias`:** a human readable URL for the map. Only alphanumeric characters, not white space or special characters.


The title associated with the WebGis service is inherited by the following settings evaluated in the following order of priority:
 * Public title: if set
 * QGIS project title: if set on the **General session** of **QGIS project properties**
 * Name of the QGIS project file

#### Options and actions

 * **`User QGIS project map start extent as WebGis init extent`**: check this control if you want set initial extent from QGSI project initial extent
 
Otherwise the initial extension will correspond to the maximum one defined on the basis of the extension associated with the WMS capabilities of the QGIS project (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)

 * **`Tab's TOC active as default`**: set tab's TOC (Layers, Base layers, Legend) open by default on startup of WebGis service
 
 * **`Tab’s TOC layer initial status`**: it is possible to define whether the TOC layer list is collapsed or expanded when the WebGis service is started

* **`Map themes list initial status`**: it is possible to define whether the list of themes (views) possibly associated with the project is collapsed or expanded when the WebGis service is started

 * **` Legend position rendering`**: this option allows to set legend rendering position:
   * **In a separate TAB:** default value, the legend is rendered into a separate tab
   * **Into TOC layers:** the legend is rendered inside layers toc (as in QGIS)

 * **`Start left sidebar collassed`**:   causes the left sidebar of the WebGis to be closed on startup
 
 * **`Show the Metadata' section on left bar`**:  it is possible choose if show or hide the 'Metadata' section on client left bar

 
 * **`Automatic zoom to query result features`**: if in the results of a search there are only features of a layer, the WebGis automatic zoom on their extension

 
The next options allow you to define the type of WMS / WFS query to be carried out and the maximum number of results obtainable following a query.
 * **`WMS GeMap image format`***: definition of the image format associated to WMS service in the map (PNG 16bit raccomaned for best managment of transaprency)
 * **`Max feature to get for query`***: max number of feature to get for single or multiple mode (recommended value: 50)
 * **`Query control mode`***: single or multiple
 * **`Query by bbox control mode`***: single or multiple
 * **`Query by polygon control mode`***: single or multiple

 In the last box you have to define the providers to be associated with the Geocoding map control:
 * **` Geocoding`**:
   * **Nominatim (OSM):** addresses based on OpenStreetMap
   * **Bing Streets:** Addresses based on Bing maps
   * **Bing Places:** places based on Bing maps (service available only for the USA)

Enabling providers is carried out at the general application [settings level](settings).

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Project Add Option](/img/manual-english-g3wsuite-administration-project-add-option.png)

After filling in the various form, click on the Save button to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.png)

**If the operation is successful we will see the new project appear in the list of projects in in the working Cartographic Group.**

![Screenshot: G3W-SUITE Administration Project Addproject Result](/img/manual-english-g3wsuite-administration-project-addproject-result.png)

![Screenshot: G3W-SUITE Portal Groups](/img/manual-english-g3wsuite-portal-groups.png)


### Embedded project
**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**
It is clearly necessary to publish the embedded project first and then those derived from it.
An update of the embedded project will result in a consequent modification of all derived projects.
The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.


### Define the WebGis order on the FrontEnd
The order of the WebGis services listed within the Thematic Group at the FrontEnd level reflects the order defined at the level of the corresponding administration session.
It is possible to define a custom order by moving the published projects via drag&drop.

[Update WebGIS services](admin-update.md)

<script type="application/json" data-i18n>
{
  "it": {
    "**ATTENTION:** contents marked with * are mandatory.": "**ATTENZIONE:** i campi contrassegnati con * sono obbligatori.",
    "**Bing Places:** places based on Bing maps (service available only for the USA)": "**Bing Places:** luoghi basati sulle mappe Bing (servizio disponibile solo negli USA)",
    "**Bing Streets:** Addresses based on Bing maps": "**Bing Streets:** indirizzi basati sulle mappe Bing",
    "**If the operation is successful we will see the new project appear in the list of projects in in the working Cartographic Group.**": "**Se l'operazione riesce, il nuovo progetto apparirà nell'elenco dei progetti del Gruppo cartografico corrente.**",
    "**In a separate TAB:** default value, the legend is rendered into a separate tab": "**In una scheda separata:** valore predefinito; la legenda viene visualizzata in una scheda dedicata",
    "**In this session you define which base layer should be active at startup.**": "**In questa sezione si definisce quale livello di base deve essere attivo all'avvio.**",
    "**Into TOC layers:** the legend is rendered inside layers toc (as in QGIS)": "**Nella TOC dei layer:** la legenda viene visualizzata all'interno della TOC dei layer (come in QGIS)",
    "**It is possible to publish QGIS projects that contain layers or groups of layers deriving from embedded projects.**": "**È possibile pubblicare progetti QGIS che contengono layer o gruppi di layer derivati da progetti incorporati.**",
    "**Management of access and/or modification permissions**": "**Gestione dei permessi di accesso e/o modifica**",
    "**Nominatim (OSM):** addresses based on OpenStreetMap": "**Nominatim (OSM):** indirizzi basati su OpenStreetMap",
    "**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions (described below) are optional.": "**Nota:** la presenza di utenti con ruolo Editor1 o Editor2 non è obbligatoria e le rispettive sottosezioni (descritte di seguito) sono quindi facoltative.",
    "**` Geocoding`**:": "**` Geocoding`**:",
    "**` Legend position rendering`**: this option allows to set legend rendering position:": "**` Legend position rendering`**: questa opzione consente di impostare la posizione della legenda:",
    "**`Automatic zoom to query result features`**: if in the results of a search there are only features of a layer, the WebGis automatic zoom on their extension": "**`Automatic zoom to query result features`**: se i risultati di una ricerca contengono elementi di un solo layer, il WebGis esegue automaticamente lo zoom sulla loro estensione",
    "**`Description`:** Description of the project, it will appear at the public portal level.": "**`Description`:** descrizione del progetto, visibile nel portale pubblico.",
    "**`Editor user groups`:** define the **user groups (Editor2) who manage the service**.": "**`Editor user groups`:** definisce i **gruppi di utenti Editor2 che gestiscono il servizio**.",
    "**`Editor1 user`:** defines the **user (Editor1) manager of the WebGis service**.": "**`Editor1 user`:** definisce l'**utente Editor1 che gestisce il servizio WebGis**.",
    "**`Editor2 User`:** defines the **user (Editor2) manager of the WebGis service**.": "**`Editor2 User`:** definisce l'**utente Editor2 che gestisce il servizio WebGis**.",
    "**`Map themes list initial status`**: it is possible to define whether the list of themes (views) possibly associated with the project is collapsed or expanded when the WebGis service is started": "**`Map themes list initial status`**: definire se l'elenco dei temi (viste) eventualmente associati al progetto debba essere compresso o espanso all'avvio del servizio WebGis",
    "**`Max feature to get for query`***: max number of feature to get for single or multiple mode (recommended value: 50)": "**`Max feature to get for query`***: numero massimo di elementi da ottenere in modalità singola o multipla (valore consigliato: 50)",
    "**`Public title`:** title of the WebGis service, it will appear at the font end level and in the header of the client.": "**`Public title`:** titolo del servizio WebGis, visibile nel front end e nell'intestazione del client.",
    "**`QGIS file`***: load the QGIS cartographic project to be published (.qgz or .qgs file)": "**`QGIS file`***: caricare il progetto cartografico QGIS da pubblicare (file .qgz o .qgs)",
    "**`Query by bbox control mode`***: single or multiple": "**`Query by bbox control mode`***: singola o multipla",
    "**`Query by polygon control mode`***: single or multiple": "**`Query by polygon control mode`***: singola o multipla",
    "**`Query control mode`***: single or multiple": "**`Query control mode`***: singola o multipla",
    "**`Show the Metadata' section on left bar`**:  it is possible choose if show or hide the 'Metadata' section on client left bar": "**`Show the Metadata' section on left bar`**: consente di mostrare o nascondere la sezione 'Metadata' nella barra laterale del client",
    "**`Start left sidebar collassed`**:   causes the left sidebar of the WebGis to be closed on startup": "**`Start left sidebar collassed`**: chiude la barra laterale sinistra del WebGis all'avvio",
    "**`Tab's TOC active as default`**: set tab's TOC (Layers, Base layers, Legend) open by default on startup of WebGis service": "**`Tab's TOC active as default`**: impostare come aperta per impostazione predefinita all'avvio del servizio WebGis la scheda TOC (Layers, Base layers, Legend)",
    "**`Tab’s TOC layer initial status`**: it is possible to define whether the TOC layer list is collapsed or expanded when the WebGis service is started": "**`Tab’s TOC layer initial status`**: definire se l'elenco dei layer TOC debba essere compresso o espanso all'avvio del servizio WebGis",
    "**`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group": "**`Thumbnail (Logo)`:** logo da associare al progetto. L'immagine sarà visibile nell'elenco dei progetti del Gruppo cartografico",
    "**`URL alias`:** a human readable URL for the map. Only alphanumeric characters, not white space or special characters.": "**`URL alias`:** URL leggibile per la mappa. Usare solo caratteri alfanumerici, senza spazi o caratteri speciali.",
    "**`User QGIS project map start extent as WebGis init extent`**: check this control if you want set initial extent from QGSI project initial extent": "**`User QGIS project map start extent as WebGis init extent`**: selezionare questa opzione per impostare l'estensione iniziale usando quella definita nel progetto QGIS",
    "**`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the content of the service**.": "**`Viewer user groups`:** definisce i **gruppi di utenti Viewer autorizzati a visualizzare i contenuti del servizio**.",
    "**`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the WebGis service**. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.": "**`Viewers users`:** definisce i singoli **utenti Viewer autorizzati a visualizzare il servizio WebGis**. Scegliendo l'utente anonimo (**AnonymusUser**), il gruppo sarà accessibile liberamente.",
    "**`WMS GeMap image format`***: definition of the image format associated to WMS service in the map (PNG 16bit raccomaned for best managment of transaprency)": "**`WMS GeMap image format`***: formato dell'immagine associata al servizio WMS sulla mappa (PNG a 16 bit consigliato per una migliore gestione della trasparenza)",
    "**from the list of cartographic groups:** click on the icon ![Icon: Add](/img/manual-english-icon-add.png) located under the box of the cartographic group in which you want to publish the project.": "**dall'elenco dei Gruppi cartografici:** fare clic sull'icona ![Icon: Add](/img/manual-english-icon-add.png) sotto il riquadro del Gruppo cartografico in cui si desidera pubblicare il progetto.",
    "**from the list of cartographic projects published within a group:** by clicking on the the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png)": "**dall'elenco dei progetti cartografici pubblicati in un Gruppo:** facendo clic sul pulsante ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png)",
    "ACL Users": "Utenti ACL",
    "After filling in the various form, click on the Save button to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante Save per confermare le scelte.",
    "An update of the embedded project will result in a consequent modification of all derived projects.": "L'aggiornamento del progetto incorporato comporta la conseguente modifica di tutti i progetti derivati.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Button: Add QGIS Project": "Pulsante: aggiungi progetto QGIS",
    "Button: Save": "Pulsante: salva",
    "Default base layer": "Livello di base predefinito",
    "Define the WebGis order on the FrontEnd": "Definire l'ordine dei WebGis nel FrontEnd",
    "Description data": "Dati descrittivi",
    "Embedded project": "Progetto incorporato",
    "Enabling providers is carried out at the general application [settings level](settings).": "I provider si abilitano nelle [impostazioni generali](settings) dell'applicazione.",
    "In the dedicated form we could define the characteristic of the project being published:": "Nel modulo dedicato è possibile definire le caratteristiche del progetto da pubblicare:",
    "In the event that the WebGis service is published by a user created by a user associated with the Editor1 role this option is not visible and the, the WebGis service is associated directly with that user": "Se il servizio WebGis viene pubblicato da un utente associato al ruolo Editor1, questa opzione non è visibile e il servizio viene associato direttamente a tale utente",
    "In the event that the WebGis service is published by a user of Editor2 role, the WebGis service is associated directly with that user": "Se il servizio WebGis viene pubblicato da un utente con ruolo Editor2, il servizio viene associato direttamente a tale utente",
    "In the last box you have to define the providers to be associated with the Geocoding map control:": "Nell'ultimo riquadro è necessario definire i provider da associare al controllo di geocodifica della mappa:",
    "It is clearly necessary to publish the embedded project first and then those derived from it.": "È necessario pubblicare prima il progetto incorporato e successivamente quelli che ne derivano.",
    "It is possible to define a custom order by moving the published projects via drag&drop.": "È possibile definire un ordine personalizzato spostando i progetti pubblicati con il drag&drop.",
    "Learn more about this in the [dedicated session](user_groups_organization).": "Per ulteriori informazioni, consultare la [sezione dedicata](user_groups_organization).",
    "Let’s see in detail the various sub-sessions of the ACL Users session:": "Vediamo nel dettaglio le varie sottosezioni della sezione ACL Users:",
    "Name of the QGIS project file": "nome del file del progetto QGIS",
    "Options and actions": "Opzioni e azioni",
    "Otherwise the initial extension will correspond to the maximum one defined on the basis of the extension associated with the WMS capabilities of the QGIS project (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)": "Altrimenti, l'estensione iniziale corrisponderà a quella massima, determinata in base all'estensione associata alle capacità WMS del progetto QGIS (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)",
    "Public title: if set": "Public title: se impostato",
    "Publication of new WebGis services": "Pubblicazione di nuovi servizi WebGis",
    "Publish and update WebGIS services": "Pubblicare e aggiornare i servizi WebGIS",
    "Publish new QGIS projects:": "Pubblica nuovi progetti QGIS:",
    "QGIS project": "Progetto QGIS",
    "QGIS project title: if set on the **General session** of **QGIS project properties**": "titolo del progetto QGIS: se impostato nella sezione **General** delle **proprietà del progetto QGIS**",
    "Screenshot: G3W-SUITE Administration Project Add ACL": "Schermata: ACL durante l'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Add Option": "Schermata: opzioni durante l'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Addproject Result": "Schermata: risultato dell'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Portal Groups": "Schermata: gruppi nel portale G3W-SUITE",
    "The choice is limited to the list of base layers activated for the cartographic group in which you work.": "La scelta è limitata all'elenco dei livelli di base attivati per il Gruppo cartografico su cui si sta lavorando.",
    "The entry is present only when the WebGis service is created by Admin": "La voce è presente solo quando il servizio WebGis viene creato da un utente Admin",
    "The item is present only when a user of the Admin or Editor1 roles publish the WebGis service.": "La voce è presente solo quando il servizio WebGis viene pubblicato da un utente con ruolo Admin o Editor1.",
    "The next options allow you to define the type of WMS / WFS query to be carried out and the maximum number of results obtainable following a query.": "Le opzioni seguenti consentono di definire il tipo di interrogazione WMS/WFS da eseguire e il numero massimo di risultati ottenibili.",
    "The options present will vary according to the type of user (Admin, Editor1 or Editor2) who creates / manages the WebGis service.": "Le opzioni disponibili variano in base al tipo di utente (Admin, Editor1 o Editor2) che crea o gestisce il servizio WebGis.",
    "The order of the WebGis services listed within the Thematic Group at the FrontEnd level reflects the order defined at the level of the corresponding administration session.": "L'ordine dei servizi WebGis elencati nel Gruppo tematico del FrontEnd corrisponde a quello definito nella relativa sezione di amministrazione.",
    "The request to delete the basic embedded project causes a warning message as this operation will cause problems on all derived projects.": "La richiesta di eliminare il progetto incorporato di base genera un avviso, poiché l'operazione causerebbe problemi a tutti i progetti derivati.",
    "The title associated with the WebGis service is inherited by the following settings evaluated in the following order of priority:": "Il titolo associato al servizio WebGis viene ereditato dalle seguenti impostazioni, valutate in ordine di priorità:",
    "To publish a new QGIS cartographic project": "Pubblicare un nuovo progetto cartografico QGIS",
    "Update WebGIS services": "Aggiornare i servizi WebGIS",
    "You can also start without an active base layer.": "Puoi anche avviare il progetto senza un layer di base attivo.",
    "title": "titolo"
  }
}
</script>
