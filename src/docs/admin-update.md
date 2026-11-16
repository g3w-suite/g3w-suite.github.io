# Update WebGIS services

[Back to Administration panel](g3wsuite_administration.md)

## Update/ Manage WebGis services

Within each Cartographic Group, it is possible to view the list of projects published within it and interact with them.

![Screenshot: G3W-SUITE Administration Project List](/img/manual-english-g3wsuite-administration-project-list.png)

The first icon, to the left of each individual project, allows you to create bookmarks for your favorite projects. This will display them in the dashboard of the Administration session, so they're always within reach.

![Screenshot: G3W-SUITE Administration Dashboard](/img/manual-english-g3wsuite-administration-dashboard.png)

To **update** a published WebGis service, access the list of projects in the Cartographic Group.

Click on the **Edit** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) icon placed at the top of the WebGis service and reload the QGIS file with the changes made in the relevant form.

Click on the **SAVE** button to confirm the change.


Always starting from the list of WebGis services, it is possible to manage numerous functional aspects associated with them.

### Basic tools

**In this section it is therefore possible to view the list of cartographic projects present, view them, manage them and create new ones.**

Through the single icons, placed at the level of each project, it is possible to:
 * ![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.png) **Display the cartographic project on the WebGis interface:** to check the display by the user
 * ![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) **Access the list of layers** present within the project and define their functional aspects
 * ![Screenshot: Iconsmall View](/img/manual-english-iconsmall-view.png) **Show details**: for each WebGis service it will be possible to access a detailed summary that will list all the activated settings and widgets:
   *  access and modification permissions
   *  the list of active searches
   *  editing permissions on individual layers
   *  definition of alphanumeric and geographical constraints
   *  visibility constraints on layers
   *  visibility constraints on attribute fields

  * ![Screenshot: Iconsmall WMS](/img/manual-english-iconsmall-wms.png) **Test the WMS Capabilities** of the project
 * ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) **Update a project:** update of the QGIS file and other options related to the project
 * ![Screenshot: Iconsmall Erase](/img/manual-english-iconsmall-erase.png) **Remove a cartographic project**
   **Warning:** removing a project also removes all the widgets (e.g. searches) that would be orphaned after the project has been removed
 * ![Screenshot: Iconsmall Download](/img/manual-english-iconsmall-download.png) **Download of the QGIS project**
 * ![Screenshot: Iconsmall OGC](/img/manual-english-iconsmall-ogc.png) **List of OGC services** associated with the project
  * ![Screenshot: Iconsmall Message](/img/manual-english-iconsmall-message.png) **Messages** the tool allows you to define personalized (timed) messages visible when the WebGis service starts
 
In case of request to delete the WebGis service, a popup will ask whether the deletion of the Webgis should be permanent or a simple deactivation, which can be restored from the **Trash** menu.

![Screenshot: Project Delete](/img/manual-english-projecet-delete.png)

 **Below are some insights into specific features**

#### Show details

A useful tool for having a summary of all the settings and functions connected to the project.

![Screenshot: Tools Details](/img/manual-english-tools-details.png)

#### Messages

The tool allows you to define personalized (timed) messages visible when the WebGis service starts.

By clicking on the icon, the messages associated with the service are displayed.

![Screenshot: Messages List](/img/manual-english-messages-list.png)

Using the + Message key it is possible to create a new message by defining:
  * title
  * message body (also in html)
  * message type (info, warning, error, critical)
  * validity period (optional)

 ![Screenshot: Messages New](/img/manual-english-messages-new.png)


#### Project Trash

The operation of deleting a Project is not definitive.
The Project with all its related content (widgets and settings) is moved to the Trash session.

It is possible to access the list of trashed Projects and the restore functions through the tab Trash positioned just above the list of published projects

![Screenshot: G3W-ADMIN Trash Project](/img/manual-english-g3wadmin-trash-project.png)

Restoring a Project involves restoring all the accessory settings/functions of  the project (permissions, searches, editing settings, downloads, etc...).

**Deleting a project from the trash is an irreversible action.**


### Setting up the overview map for WebGis services
In this session it is also possible to define which of the cartographic projects loaded within the group will be used as a panoramic map.

To set the panoramic map, choose the projects and tick the check box in the **`Overview`** column.

<script type="application/json" data-i18n>
{
  "it": {
    "![Screenshot: Iconsmall Download](/img/manual-english-iconsmall-download.png) **Download of the QGIS project**": "![Icona piccola: scarica](/img/manual-english-iconsmall-download.png) **Scarica il progetto QGIS**",
    "![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) **Update a project:** update of the QGIS file and other options related to the project": "![Icona piccola: modifica](/img/manual-english-iconsmall-edit.png) **Aggiorna un progetto:** aggiornare il file QGIS e le altre opzioni relative al progetto",
    "![Screenshot: Iconsmall Erase](/img/manual-english-iconsmall-erase.png) **Remove a cartographic project**": "![Icona piccola: elimina](/img/manual-english-iconsmall-erase.png) **Rimuovi un progetto cartografico**",
    "![Screenshot: Iconsmall Layerlist](/img/manual-english-iconsmall-layerlist.png) **Access the list of layers** present within the project and define their functional aspects": "![Icona piccola: elenco dei layer](/img/manual-english-iconsmall-layerlist.png) **Accedi all'elenco dei layer** del progetto e definiscine gli aspetti funzionali",
    "![Screenshot: Iconsmall Message](/img/manual-english-iconsmall-message.png) **Messages** the tool allows you to define personalized (timed) messages visible when the WebGis service starts": "![Icona piccola: messaggio](/img/manual-english-iconsmall-message.png) **Messaggi**: lo strumento consente di definire messaggi personalizzati (a tempo) visibili all'avvio del servizio WebGis",
    "![Screenshot: Iconsmall OGC](/img/manual-english-iconsmall-ogc.png) **List of OGC services** associated with the project": "![Icona piccola: OGC](/img/manual-english-iconsmall-ogc.png) **Elenco dei servizi OGC** associati al progetto",
    "![Screenshot: Iconsmall View](/img/manual-english-iconsmall-view.png) **Show details**: for each WebGis service it will be possible to access a detailed summary that will list all the activated settings and widgets:": "![Icona piccola: visualizza](/img/manual-english-iconsmall-view.png) **Mostra dettagli**: per ogni servizio WebGis è possibile accedere a un riepilogo dettagliato di tutte le impostazioni e i widget attivi:",
    "![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.png) **Display the cartographic project on the WebGis interface:** to check the display by the user": "![Icona piccola: visualizza mappa](/img/manual-english-iconsmall-viewmap.png) **Visualizza il progetto cartografico nell'interfaccia WebGis:** verificare la visualizzazione lato utente",
    "![Screenshot: Iconsmall WMS](/img/manual-english-iconsmall-wms.png) **Test the WMS Capabilities** of the project": "![Icona piccola: WMS](/img/manual-english-iconsmall-wms.png) **Verifica le capacità WMS** del progetto",
    "**Below are some insights into specific features**": "**Di seguito sono approfondite alcune funzioni specifiche**",
    "**Deleting a project from the trash is an irreversible action.**": "**L'eliminazione di un progetto dal cestino è irreversibile.**",
    "**In this section it is therefore possible to view the list of cartographic projects present, view them, manage them and create new ones.**": "**In questa sezione è possibile consultare l'elenco dei progetti cartografici, visualizzarli, gestirli e crearne di nuovi.**",
    "**Warning:** removing a project also removes all the widgets (e.g. searches) that would be orphaned after the project has been removed": "**Attenzione:** la rimozione di un progetto elimina anche tutti i widget (ad es. le ricerche) che resterebbero orfani",
    "A useful tool for having a summary of all the settings and functions connected to the project.": "Uno strumento utile per ottenere un riepilogo di tutte le impostazioni e le funzioni associate al progetto.",
    "Always starting from the list of WebGis services, it is possible to manage numerous functional aspects associated with them.": "Sempre dall'elenco dei servizi WebGis è possibile gestire numerosi aspetti funzionali a essi associati.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Basic tools": "Strumenti di base",
    "By clicking on the icon, the messages associated with the service are displayed.": "Facendo clic sull'icona vengono visualizzati i messaggi associati al servizio.",
    "Click on the **Edit** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) icon placed at the top of the WebGis service and reload the QGIS file with the changes made in the relevant form.": "Fare clic sull'icona **Modifica** ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png) in alto nel servizio WebGis e ricaricare il file QGIS con le modifiche apportate nel modulo corrispondente.",
    "Click on the **SAVE** button to confirm the change.": "Fare clic sul pulsante **SAVE** per confermare la modifica.",
    "In case of request to delete the WebGis service, a popup will ask whether the deletion of the Webgis should be permanent or a simple deactivation, which can be restored from the **Trash** menu.": "Quando si richiede l'eliminazione del servizio WebGis, una finestra chiede se eliminarlo definitivamente o disattivarlo soltanto, consentendone il ripristino dal menu **Trash**.",
    "In this session it is also possible to define which of the cartographic projects loaded within the group will be used as a panoramic map.": "In questa sezione è inoltre possibile definire quale dei progetti cartografici caricati nel gruppo verrà usato come mappa panoramica.",
    "It is possible to access the list of trashed Projects and the restore functions through the tab Trash positioned just above the list of published projects": "È possibile consultare l'elenco dei progetti eliminati e ripristinarli dalla scheda Trash, posta appena sopra l'elenco dei progetti pubblicati",
    "Messages": "Messaggi",
    "Project Trash": "Cestino dei progetti",
    "QGIS project": "Progetto QGIS",
    "Restoring a Project involves restoring all the accessory settings/functions of  the project (permissions, searches, editing settings, downloads, etc...).": "Il ripristino di un progetto ripristina anche tutte le impostazioni e funzioni accessorie (permessi, ricerche, impostazioni di modifica, download ecc.).",
    "Screenshot: G3W-ADMIN Trash Project": "Schermata: cestino dei progetti di G3W-ADMIN",
    "Screenshot: G3W-SUITE Administration Dashboard": "Schermata: dashboard di amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Project List": "Schermata: elenco dei progetti nell'amministrazione di G3W-SUITE",
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
    "Setting up the overview map for WebGis services": "Configurare la mappa panoramica per i servizi WebGis",
    "Show details": "Mostra i dettagli",
    "The Project with all its related content (widgets and settings) is moved to the Trash session.": "Il progetto e tutti i contenuti correlati (widget e impostazioni) vengono spostati nella sezione Trash.",
    "The first icon, to the left of each individual project, allows you to create bookmarks for your favorite projects. This will display them in the dashboard of the Administration session, so they're always within reach.": "La prima icona a sinistra di ogni progetto consente di aggiungerlo ai preferiti. I progetti verranno mostrati nella dashboard della sezione Administration, così saranno sempre a portata di mano.",
    "The operation of deleting a Project is not definitive.": "L'eliminazione di un progetto non è definitiva.",
    "The tool allows you to define personalized (timed) messages visible when the WebGis service starts.": "Lo strumento consente di definire messaggi personalizzati (a tempo) visibili all'avvio del servizio WebGis.",
    "Through the single icons, placed at the level of each project, it is possible to:": "Le singole icone associate a ciascun progetto consentono di:",
    "To **update** a published WebGis service, access the list of projects in the Cartographic Group.": "Per **aggiornare** un servizio WebGis pubblicato, accedere all'elenco dei progetti del Gruppo cartografico.",
    "To set the panoramic map, choose the projects and tick the check box in the **`Overview`** column.": "Per impostare la mappa panoramica, selezionare i progetti e spuntare la casella nella colonna **`Overview`**.",
    "Update WebGIS services": "Aggiornare i servizi WebGIS",
    "Update/ Manage WebGis services": "Aggiornamento e gestione dei servizi WebGis",
    "Using the + Message key it is possible to create a new message by defining:": "Con il pulsante + Message è possibile creare un nuovo messaggio definendo:",
    "Within each Cartographic Group, it is possible to view the list of projects published within it and interact with them.": "In ogni Gruppo cartografico è possibile consultare l'elenco dei progetti pubblicati e interagire con essi.",
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
