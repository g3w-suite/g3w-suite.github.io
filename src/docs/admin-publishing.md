# Publish and update WebGIS services

## Publication of new WebGis services
### To publish a new QGIS cartographic project
Publish new QGIS projects:
 * **from the list of cartographic groups:** click on the icon ![Icon: Add](/img/manual-english-icon-add.avif) located under the box of the cartographic group in which you want to publish the project.
 * **from the list of cartographic projects published within a group:** by clicking on the the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.avif)

In the dedicated form we could define the characteristic of the project being published:

#### QGIS project
**`QGIS file`**: upload the `.qgz` or `.qgs` project. Uploading the project is not a substitute for making its data sources available to QGIS Server. If a file-based layer is missing after publishing or updating, verify the server-side paths against the [data management guide](datamanagement.md).

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

![Screenshot: G3W-SUITE Administration Project Add ACL](/img/manual-english-g3wsuite-administration-project-add-acl.avif)

#### Default base layer
**In this session you define which base layer should be active at startup.**

The choice is limited to the list of base layers activated for the cartographic group in which you work.

You can also start without an active base layer.

#### Description data
 * **`Public title`:** title of the WebGis service, it will appear at the font end level and in the header of the client.
 * **`Description`:** Description of the project, it will appear at the public portal level.
 * **`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group
 * **`URL alias`:** a human-readable URL for the map. Use only letters, numbers, hyphens (`-`) and underscores (`_`); spaces and other characters are not allowed. The alias must be unique.


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
 * **`Max feature to get for query`***: maximum number of features returned in single or multiple query mode (default: 5; recommended value: 50)
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

![Screenshot: G3W-SUITE Administration Project Add Option](/img/manual-english-g3wsuite-administration-project-add-option.avif)

After filling in the various form, click on the Save button to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)

**If the operation is successful we will see the new project appear in the list of projects in in the working Cartographic Group.**

![Screenshot: G3W-SUITE Administration Project Addproject Result](/img/manual-english-g3wsuite-administration-project-addproject-result.avif)

![Screenshot: G3W-SUITE Portal Groups](/img/manual-english-g3wsuite-portal-groups.avif)


### Embedded projects

See [embedded projects](projectsettings-properties.md#embedded-project) for the publication order and how updates affect dependent projects.

### Define the WebGis order on the FrontEnd
The order of the WebGis services listed within the Thematic Group at the FrontEnd level reflects the order defined at the level of the corresponding administration session.
It is possible to define a custom order by moving the published projects via drag&drop.

## Update WebGIS services
View and interact with published projects in each Cartographic Group.

![Screenshot: G3W-SUITE Administration Project List](/img/manual-english-g3wsuite-administration-project-list.avif)

Use the first icon to bookmark a project and show it on the administration dashboard.

![Screenshot: G3W-SUITE Administration Dashboard](/img/manual-english-g3wsuite-administration-dashboard.avif)

To **update** a published WebGis service, access the list of projects in the Cartographic Group.

Click on the **Edit** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.avif) icon placed at the top of the WebGis service and reload the QGIS file with the changes made in the relevant form.

Click on the **SAVE** button to confirm the change.


Always starting from the list of WebGis services, it is possible to manage numerous functional aspects associated with them.

### Basic tools

**In this section it is therefore possible to view the list of cartographic projects present, view them, manage them and create new ones.**

Through the single icons, placed at the level of each project, it is possible to:
 * ![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.avif) **Display the cartographic project on the WebGis interface:** to check the display by the user
 * ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.avif) **Access the list of layers** present within the project and define their functional aspects
 * ![Screenshot: Iconsmall View](/img/manual-english-iconsmall-view.avif) **Show details**: for each WebGis service it will be possible to access a detailed summary that will list all the activated settings and widgets:
   *  access and modification permissions
   *  the list of active searches
   *  editing permissions on individual layers
   *  definition of alphanumeric and geographical constraints
   *  visibility constraints on layers
   *  visibility constraints on attribute fields

  * ![Screenshot: Iconsmall WMS](/img/manual-english-iconsmall-wms.avif) **Test the WMS Capabilities** of the project
 * ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.avif) **Update a project:** update of the QGIS file and other options related to the project
 * ![Screenshot: Iconsmall Erase](/img/manual-english-iconsmall-erase.avif) **Remove a cartographic project**
   **Warning:** removing a project also removes all the widgets (e.g. searches) that would be orphaned after the project has been removed
 * ![Screenshot: Iconsmall Download](/img/manual-english-iconsmall-download.avif) **Download of the QGIS project**
 * ![Screenshot: Iconsmall OGC](/img/manual-english-iconsmall-ogc.avif) **List of OGC services** associated with the project
  * ![Screenshot: Iconsmall Message](/img/manual-english-iconsmall-message.avif) **Messages** the tool allows you to define personalized (timed) messages visible when the WebGis service starts

In case of request to delete the WebGis service, a popup will ask whether the deletion of the Webgis should be permanent or a simple deactivation, which can be restored from the **Trash** menu.

![Screenshot: Project Delete](/img/manual-english-projecet-delete.avif)

 **Below are some insights into specific features**

#### Show details

A useful tool for having a summary of all the settings and functions connected to the project.

![Screenshot: Tools Details](/img/manual-english-tools-details.avif)

#### Messages

The tool allows you to define personalized (timed) messages visible when the WebGis service starts.

By clicking on the icon, the messages associated with the service are displayed.

![Screenshot: Messages List](/img/manual-english-messages-list.avif)

Using the + Message key it is possible to create a new message by defining:
  * title
  * message body (also in html)
  * message type (info, warning, error, critical)
  * validity period (optional)

 ![Screenshot: Messages New](/img/manual-english-messages-new.avif)


#### Project Trash

The operation of deleting a Project is not definitive.
The Project with all its related content (widgets and settings) is moved to the Trash session.

It is possible to access the list of trashed Projects and the restore functions through the tab Trash positioned just above the list of published projects

![Screenshot: G3W-ADMIN Trash Project](/img/manual-english-g3wadmin-trash-project.avif)

Restoring a Project involves restoring all the accessory settings/functions of  the project (permissions, searches, editing settings, downloads, etc...).

**Deleting a project from the trash is an irreversible action.**


### Setting up the overview map for WebGis services
In this session it is also possible to define which of the cartographic projects loaded within the group will be used as a panoramic map.

To set the panoramic map, choose the projects and tick the check box in the **`Overview`** column.

<script type="application/json" data-i18n>
{
  "it": {
    "![Screenshot: Iconsmall Download](/img/manual-english-iconsmall-download.avif) **Download of the QGIS project**": "![Icona piccola: scarica](/img/manual-english-iconsmall-download.avif) **Scarica il progetto QGIS**",
    "![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.avif) **Update a project:** update of the QGIS file and other options related to the project": "![Icona piccola: modifica](/img/manual-english-iconsmall-edit.avif) **Aggiorna un progetto:** aggiornare il file QGIS e le altre opzioni relative al progetto",
    "![Screenshot: Iconsmall Erase](/img/manual-english-iconsmall-erase.avif) **Remove a cartographic project**": "![Icona piccola: elimina](/img/manual-english-iconsmall-erase.avif) **Rimuovi un progetto cartografico**",
    "![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.avif) **Access the list of layers** present within the project and define their functional aspects": "![Icona piccola: elenco dei layer](/img/manual-english-iconsmall-layerlist.avif) **Accedi all'elenco dei layer** del progetto e definiscine gli aspetti funzionali",
    "![Screenshot: Iconsmall Message](/img/manual-english-iconsmall-message.avif) **Messages** the tool allows you to define personalized (timed) messages visible when the WebGis service starts": "![Icona piccola: messaggio](/img/manual-english-iconsmall-message.avif) **Messaggi**: lo strumento consente di definire messaggi personalizzati (a tempo) visibili all'avvio del servizio WebGis",
    "![Screenshot: Iconsmall OGC](/img/manual-english-iconsmall-ogc.avif) **List of OGC services** associated with the project": "![Icona piccola: OGC](/img/manual-english-iconsmall-ogc.avif) **Elenco dei servizi OGC** associati al progetto",
    "![Screenshot: Iconsmall View](/img/manual-english-iconsmall-view.avif) **Show details**: for each WebGis service it will be possible to access a detailed summary that will list all the activated settings and widgets:": "![Icona piccola: visualizza](/img/manual-english-iconsmall-view.avif) **Mostra dettagli**: per ogni servizio WebGis è possibile accedere a un riepilogo dettagliato di tutte le impostazioni e i widget attivi:",
    "![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.avif) **Display the cartographic project on the WebGis interface:** to check the display by the user": "![Icona piccola: visualizza mappa](/img/manual-english-iconsmall-viewmap.avif) **Visualizza il progetto cartografico nell'interfaccia WebGis:** verificare la visualizzazione lato utente",
    "![Screenshot: Iconsmall WMS](/img/manual-english-iconsmall-wms.avif) **Test the WMS Capabilities** of the project": "![Icona piccola: WMS](/img/manual-english-iconsmall-wms.avif) **Verifica le capacità WMS** del progetto",
    "**ATTENTION:** contents marked with * are mandatory.": "**ATTENZIONE:** i campi contrassegnati con * sono obbligatori.",
    "**Below are some insights into specific features**": "**Di seguito sono approfondite alcune funzioni specifiche**",
    "**Bing Places:** places based on Bing maps (service available only for the USA)": "**Bing Places:** luoghi basati sulle mappe Bing (servizio disponibile solo negli USA)",
    "**Bing Streets:** Addresses based on Bing maps": "**Bing Streets:** indirizzi basati sulle mappe Bing",
    "**Deleting a project from the trash is an irreversible action.**": "**L'eliminazione di un progetto dal cestino è irreversibile.**",
    "**If the operation is successful we will see the new project appear in the list of projects in in the working Cartographic Group.**": "**Se l'operazione riesce, il nuovo progetto apparirà nell'elenco dei progetti del Gruppo cartografico corrente.**",
    "**In a separate TAB:** default value, the legend is rendered into a separate tab": "**In una scheda separata:** valore predefinito; la legenda viene visualizzata in una scheda dedicata",
    "**In this section it is therefore possible to view the list of cartographic projects present, view them, manage them and create new ones.**": "**In questa sezione è possibile consultare l'elenco dei progetti cartografici, visualizzarli, gestirli e crearne di nuovi.**",
    "**In this session you define which base layer should be active at startup.**": "**In questa sezione si definisce quale livello di base deve essere attivo all'avvio.**",
    "**Into TOC layers:** the legend is rendered inside layers toc (as in QGIS)": "**Nella TOC dei layer:** la legenda viene visualizzata all'interno della TOC dei layer (come in QGIS)",
    "**Management of access and/or modification permissions**": "**Gestione dei permessi di accesso e/o modifica**",
    "**Nominatim (OSM):** addresses based on OpenStreetMap": "**Nominatim (OSM):** indirizzi basati su OpenStreetMap",
    "**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions (described below) are optional.": "**Nota:** la presenza di utenti con ruolo Editor1 o Editor2 non è obbligatoria e le rispettive sottosezioni (descritte di seguito) sono quindi facoltative.",
    "**Warning:** removing a project also removes all the widgets (e.g. searches) that would be orphaned after the project has been removed": "**Attenzione:** la rimozione di un progetto elimina anche tutti i widget (ad es. le ricerche) che resterebbero orfani",
    "**` Geocoding`**:": "**` Geocoding`**:",
    "**` Legend position rendering`**: this option allows to set legend rendering position:": "**` Legend position rendering`**: questa opzione consente di impostare la posizione della legenda:",
    "**`Automatic zoom to query result features`**: if in the results of a search there are only features of a layer, the WebGis automatic zoom on their extension": "**`Automatic zoom to query result features`**: se i risultati di una ricerca contengono elementi di un solo layer, il WebGis esegue automaticamente lo zoom sulla loro estensione",
    "**`Description`:** Description of the project, it will appear at the public portal level.": "**`Description`:** descrizione del progetto, visibile nel portale pubblico.",
    "**`Editor user groups`:** define the **user groups (Editor2) who manage the service**.": "**`Editor user groups`:** definisce i **gruppi di utenti Editor2 che gestiscono il servizio**.",
    "**`Editor1 user`:** defines the **user (Editor1) manager of the WebGis service**.": "**`Editor1 user`:** definisce l'**utente Editor1 che gestisce il servizio WebGis**.",
    "**`Editor2 User`:** defines the **user (Editor2) manager of the WebGis service**.": "**`Editor2 User`:** definisce l'**utente Editor2 che gestisce il servizio WebGis**.",
    "**`Map themes list initial status`**: it is possible to define whether the list of themes (views) possibly associated with the project is collapsed or expanded when the WebGis service is started": "**`Map themes list initial status`**: definire se l'elenco dei temi (viste) eventualmente associati al progetto debba essere compresso o espanso all'avvio del servizio WebGis",
    "**`Max feature to get for query`***: maximum number of features returned in single or multiple query mode (default: 5; recommended value: 50)": "**`Max feature to get for query`***: numero massimo di elementi restituiti in modalità di interrogazione singola o multipla (valore predefinito: 5; valore consigliato: 50)",
    "**`Public title`:** title of the WebGis service, it will appear at the font end level and in the header of the client.": "**`Public title`:** titolo del servizio WebGis, visibile nel front end e nell'intestazione del client.",
    "**`QGIS file`**: upload the `.qgz` or `.qgs` project. Uploading the project is not a substitute for making its data sources available to QGIS Server. If a file-based layer is missing after publishing or updating, verify the server-side paths against the [data management guide](datamanagement.md).": "**`QGIS file`**: carica il progetto `.qgz` o `.qgs`. Il caricamento del progetto non sostituisce la configurazione delle sorgenti dati per QGIS Server. Se dopo la pubblicazione o l’aggiornamento manca un layer basato su file, verifica i percorsi sul server seguendo la [guida alla gestione dei dati](datamanagement.md).",
    "**`Query by bbox control mode`***: single or multiple": "**`Query by bbox control mode`***: singola o multipla",
    "**`Query by polygon control mode`***: single or multiple": "**`Query by polygon control mode`***: singola o multipla",
    "**`Query control mode`***: single or multiple": "**`Query control mode`***: singola o multipla",
    "**`Show the Metadata' section on left bar`**:  it is possible choose if show or hide the 'Metadata' section on client left bar": "**`Show the Metadata' section on left bar`**: consente di mostrare o nascondere la sezione 'Metadata' nella barra laterale del client",
    "**`Start left sidebar collassed`**:   causes the left sidebar of the WebGis to be closed on startup": "**`Start left sidebar collassed`**: chiude la barra laterale sinistra del WebGis all'avvio",
    "**`Tab's TOC active as default`**: set tab's TOC (Layers, Base layers, Legend) open by default on startup of WebGis service": "**`Tab's TOC active as default`**: impostare come aperta per impostazione predefinita all'avvio del servizio WebGis la scheda TOC (Layers, Base layers, Legend)",
    "**`Tab’s TOC layer initial status`**: it is possible to define whether the TOC layer list is collapsed or expanded when the WebGis service is started": "**`Tab’s TOC layer initial status`**: definire se l'elenco dei layer TOC debba essere compresso o espanso all'avvio del servizio WebGis",
    "**`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group": "**`Thumbnail (Logo)`:** logo da associare al progetto. L'immagine sarà visibile nell'elenco dei progetti del Gruppo cartografico",
    "**`URL alias`:** a human-readable URL for the map. Use only letters, numbers, hyphens (`-`) and underscores (`_`); spaces and other characters are not allowed. The alias must be unique.": "**`URL alias`:** URL leggibile per la mappa. Usare solo lettere, numeri, trattini (`-`) e trattini bassi (`_`); non sono ammessi spazi o altri caratteri. L'alias deve essere univoco.",
    "**`User QGIS project map start extent as WebGis init extent`**: check this control if you want set initial extent from QGSI project initial extent": "**`User QGIS project map start extent as WebGis init extent`**: selezionare questa opzione per impostare l'estensione iniziale usando quella definita nel progetto QGIS",
    "**`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the content of the service**.": "**`Viewer user groups`:** definisce i **gruppi di utenti Viewer autorizzati a visualizzare i contenuti del servizio**.",
    "**`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the WebGis service**. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.": "**`Viewers users`:** definisce i singoli **utenti Viewer autorizzati a visualizzare il servizio WebGis**. Scegliendo l'utente anonimo (**AnonymusUser**), il gruppo sarà accessibile liberamente.",
    "**`WMS GeMap image format`***: definition of the image format associated to WMS service in the map (PNG 16bit raccomaned for best managment of transaprency)": "**`WMS GeMap image format`***: formato dell'immagine associata al servizio WMS sulla mappa (PNG a 16 bit consigliato per una migliore gestione della trasparenza)",
    "**from the list of cartographic groups:** click on the icon ![Icon: Add](/img/manual-english-icon-add.avif) located under the box of the cartographic group in which you want to publish the project.": "**dall'elenco dei Gruppi cartografici:** fare clic sull'icona ![Icon: Add](/img/manual-english-icon-add.avif) sotto il riquadro del Gruppo cartografico in cui si desidera pubblicare il progetto.",
    "**from the list of cartographic projects published within a group:** by clicking on the the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.avif)": "**dall'elenco dei progetti cartografici pubblicati in un Gruppo:** facendo clic sul pulsante ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.avif)",
    "A useful tool for having a summary of all the settings and functions connected to the project.": "Uno strumento utile per ottenere un riepilogo di tutte le impostazioni e le funzioni associate al progetto.",
    "ACL Users": "Utenti ACL",
    "After filling in the various form, click on the Save button to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante Save per confermare le scelte.",
    "Always starting from the list of WebGis services, it is possible to manage numerous functional aspects associated with them.": "Sempre dall'elenco dei servizi WebGis è possibile gestire numerosi aspetti funzionali a essi associati.",
    "Basic tools": "Strumenti di base",
    "Button: Add QGIS Project": "Pulsante: aggiungi progetto QGIS",
    "Button: Save": "Pulsante: salva",
    "By clicking on the icon, the messages associated with the service are displayed.": "Facendo clic sull'icona vengono visualizzati i messaggi associati al servizio.",
    "Click on the **Edit** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.avif) icon placed at the top of the WebGis service and reload the QGIS file with the changes made in the relevant form.": "Fare clic sull'icona **Modifica** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.avif) in alto nel servizio WebGis e ricaricare il file QGIS con le modifiche apportate nel modulo corrispondente.",
    "Click on the **SAVE** button to confirm the change.": "Fare clic sul pulsante **SAVE** per confermare la modifica.",
    "Default base layer": "Livello di base predefinito",
    "Define the WebGis order on the FrontEnd": "Definire l'ordine dei WebGis nel FrontEnd",
    "Description data": "Dati descrittivi",
    "Embedded project": "Progetto incorporato",
    "Embedded projects": "Progetti incorporati",
    "Enabling providers is carried out at the general application [settings level](settings).": "I provider si abilitano nelle [impostazioni generali](settings) dell'applicazione.",
    "In case of request to delete the WebGis service, a popup will ask whether the deletion of the Webgis should be permanent or a simple deactivation, which can be restored from the **Trash** menu.": "Quando si richiede l'eliminazione del servizio WebGis, una finestra chiede se eliminarlo definitivamente o disattivarlo soltanto, consentendone il ripristino dal menu **Trash**.",
    "In the dedicated form we could define the characteristic of the project being published:": "Nel modulo dedicato è possibile definire le caratteristiche del progetto da pubblicare:",
    "In the event that the WebGis service is published by a user created by a user associated with the Editor1 role this option is not visible and the, the WebGis service is associated directly with that user": "Se il servizio WebGis viene pubblicato da un utente associato al ruolo Editor1, questa opzione non è visibile e il servizio viene associato direttamente a tale utente",
    "In the event that the WebGis service is published by a user of Editor2 role, the WebGis service is associated directly with that user": "Se il servizio WebGis viene pubblicato da un utente con ruolo Editor2, il servizio viene associato direttamente a tale utente",
    "In the last box you have to define the providers to be associated with the Geocoding map control:": "Nell'ultimo riquadro è necessario definire i provider da associare al controllo di geocodifica della mappa:",
    "In this session it is also possible to define which of the cartographic projects loaded within the group will be used as a panoramic map.": "In questa sezione è inoltre possibile definire quale dei progetti cartografici caricati nel gruppo verrà usato come mappa panoramica.",
    "It is possible to access the list of trashed Projects and the restore functions through the tab Trash positioned just above the list of published projects": "È possibile consultare l'elenco dei progetti eliminati e ripristinarli dalla scheda Trash, posta appena sopra l'elenco dei progetti pubblicati",
    "It is possible to define a custom order by moving the published projects via drag&drop.": "È possibile definire un ordine personalizzato spostando i progetti pubblicati con il drag&drop.",
    "Learn more about this in the [dedicated session](user_groups_organization).": "Per ulteriori informazioni, consultare la [sezione dedicata](user_groups_organization).",
    "Let’s see in detail the various sub-sessions of the ACL Users session:": "Vediamo nel dettaglio le varie sottosezioni della sezione ACL Users:",
    "Messages": "Messaggi",
    "Name of the QGIS project file": "nome del file del progetto QGIS",
    "Options and actions": "Opzioni e azioni",
    "Otherwise the initial extension will correspond to the maximum one defined on the basis of the extension associated with the WMS capabilities of the QGIS project (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)": "Altrimenti, l'estensione iniziale corrisponderà a quella massima, determinata in base all'estensione associata alle capacità WMS del progetto QGIS (**Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**)",
    "Project Trash": "Cestino dei progetti",
    "Public title: if set": "Public title: se impostato",
    "Publication of new WebGis services": "Pubblicazione di nuovi servizi WebGis",
    "Publish and update WebGIS services": "Pubblicare e aggiornare i servizi WebGIS",
    "Publish new QGIS projects:": "Pubblica nuovi progetti QGIS:",
    "QGIS project": "Progetto QGIS",
    "QGIS project title: if set on the **General session** of **QGIS project properties**": "titolo del progetto QGIS: se impostato nella sezione **General** delle **proprietà del progetto QGIS**",
    "Restoring a Project involves restoring all the accessory settings/functions of  the project (permissions, searches, editing settings, downloads, etc...).": "Il ripristino di un progetto ripristina anche tutte le impostazioni e funzioni accessorie (permessi, ricerche, impostazioni di modifica, download ecc.).",
    "Screenshot: G3W-ADMIN Trash Project": "Schermata: cestino dei progetti di G3W-ADMIN",
    "Screenshot: G3W-SUITE Administration Dashboard": "Schermata: dashboard di amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Add ACL": "Schermata: ACL durante l'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Add Option": "Schermata: opzioni durante l'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project Addproject Result": "Schermata: risultato dell'aggiunta di un progetto nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project List": "Schermata: elenco dei progetti nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Portal Groups": "Schermata: gruppi nel portale G3W-SUITE",
    "Screenshot: Iconsmall Download": "Icona piccola: scarica",
    "Screenshot: Iconsmall Edit": "Icona piccola: modifica",
    "Screenshot: Iconsmall Erase": "Icona piccola: elimina",
    "Screenshot: Iconsmall Layerlist": "Icona piccola: elenco dei layer",
    "Screenshot: Iconsmall Message": "Icona piccola: messaggio",
    "Screenshot: Iconsmall OGC": "Icona piccola: OGC",
    "Screenshot: Iconsmall View": "Icona piccola: visualizza",
    "Screenshot: Iconsmall Viewmap": "Icona piccola: visualizza mappa",
    "Screenshot: Iconsmall WMS": "Icona piccola: WMS",
    "Screenshot: Messages List": "Schermata: elenco dei messaggi",
    "Screenshot: Messages New": "Schermata: nuovo messaggio",
    "Screenshot: Project Delete": "Schermata: eliminazione del progetto",
    "Screenshot: Tools Details": "Schermata: dettagli degli strumenti",
    "See [embedded projects](projectsettings-properties.md#embedded-project) for the publication order and how updates affect dependent projects.": "Consulta [Progetti incorporati](projectsettings-properties.md#embedded-project) per l’ordine di pubblicazione e gli effetti degli aggiornamenti sui progetti che ne dipendono.",
    "Setting up the overview map for WebGis services": "Configurare la mappa panoramica per i servizi WebGis",
    "Show details": "Mostra i dettagli",
    "The Project with all its related content (widgets and settings) is moved to the Trash session.": "Il progetto e tutti i contenuti correlati (widget e impostazioni) vengono spostati nella sezione Trash.",
    "The choice is limited to the list of base layers activated for the cartographic group in which you work.": "La scelta è limitata all'elenco dei livelli di base attivati per il Gruppo cartografico su cui si sta lavorando.",
    "The entry is present only when the WebGis service is created by Admin": "La voce è presente solo quando il servizio WebGis viene creato da un utente Admin",
    "The item is present only when a user of the Admin or Editor1 roles publish the WebGis service.": "La voce è presente solo quando il servizio WebGis viene pubblicato da un utente con ruolo Admin o Editor1.",
    "The next options allow you to define the type of WMS / WFS query to be carried out and the maximum number of results obtainable following a query.": "Le opzioni seguenti consentono di definire il tipo di interrogazione WMS/WFS da eseguire e il numero massimo di risultati ottenibili.",
    "The operation of deleting a Project is not definitive.": "L'eliminazione di un progetto non è definitiva.",
    "The options present will vary according to the type of user (Admin, Editor1 or Editor2) who creates / manages the WebGis service.": "Le opzioni disponibili variano in base al tipo di utente (Admin, Editor1 o Editor2) che crea o gestisce il servizio WebGis.",
    "The order of the WebGis services listed within the Thematic Group at the FrontEnd level reflects the order defined at the level of the corresponding administration session.": "L'ordine dei servizi WebGis elencati nel Gruppo tematico del FrontEnd corrisponde a quello definito nella relativa sezione di amministrazione.",
    "The title associated with the WebGis service is inherited by the following settings evaluated in the following order of priority:": "Il titolo associato al servizio WebGis viene ereditato dalle seguenti impostazioni, valutate in ordine di priorità:",
    "The tool allows you to define personalized (timed) messages visible when the WebGis service starts.": "Lo strumento consente di definire messaggi personalizzati (a tempo) visibili all'avvio del servizio WebGis.",
    "Through the single icons, placed at the level of each project, it is possible to:": "Le singole icone associate a ciascun progetto consentono di:",
    "To **update** a published WebGis service, access the list of projects in the Cartographic Group.": "Per **aggiornare** un servizio WebGis pubblicato, accedere all'elenco dei progetti del Gruppo cartografico.",
    "To publish a new QGIS cartographic project": "Pubblicare un nuovo progetto cartografico QGIS",
    "To set the panoramic map, choose the projects and tick the check box in the **`Overview`** column.": "Per impostare la mappa panoramica, selezionare i progetti e spuntare la casella nella colonna **`Overview`**.",
    "Update WebGIS services": "Aggiornare i servizi WebGIS",
    "Use the first icon to bookmark a project and show it on the administration dashboard.": "Usa la prima icona per aggiungere un progetto ai preferiti e mostrarlo nella dashboard di amministrazione.",
    "Using the + Message key it is possible to create a new message by defining:": "Con il pulsante + Message è possibile creare un nuovo messaggio definendo:",
    "View and interact with published projects in each Cartographic Group.": "Consulta e gestisci i progetti pubblicati in ogni Gruppo cartografico.",
    "You can also start without an active base layer.": "Puoi anche avviare il progetto senza un layer di base attivo.",
    "access and modification permissions": "permessi di accesso e modifica",
    "definition of alphanumeric and geographical constraints": "definizione dei vincoli alfanumerici e geografici",
    "editing permissions on individual layers": "permessi di modifica dei singoli layer",
    "message body (also in html)": "corpo del messaggio (anche in HTML)",
    "message type (info, warning, error, critical)": "tipo di messaggio (info, warning, error, critical)",
    "the list of active searches": "elenco delle ricerche attive",
    "title": "titolo",
    "validity period (optional)": "periodo di validità (facoltativo)",
    "visibility constraints on attribute fields": "vincoli di visibilità dei campi attributo",
    "visibility constraints on layers": "vincoli di visibilità dei layer"
  }
}
</script>
