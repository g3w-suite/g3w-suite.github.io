# Publish a WebGIS service

[Back to Demo tutorial](demo.md)

## Access the online service

To publish the project, you can **access the G3W-SUITE test application** via the following URL: [**`https://v311.g3wsuite.it`**](https://v311.g3wsuite.it)

To access the **Administration Panel** it is necessary to log in using the following credentials:
* user: **`demo`**
* password: **`G3wsuite123`**
 
**In case of login fails, report the problem to `info@gis3w.it`**

## Publish the QGIS project as a WebGis service

After authentication it will be possible to access the **`Administration session`** and view the **Dashboard**.

In the Dashboard there will be the menu for access to the **Cartographic Groups** pertaining to your user and the menus relating to additional modules not active in this demo.

Click on the **`Show`** item in the ligth blue **Groups** box to acces at the list of available Cartographic Groups.

![Screenshot: Demo Dashboard](/img/manual-english-demo-dashboard.png)

Access the list of webgis in the Cartographic Group **`Demo Group`** clicking on the project number shown.

![Screenshot: Demo Choose Group](/img/manual-english-demo-choose-group.png)

![Screenshot: Demo Project Manage](/img/manual-english-demo-project-manage.png)

Now click on the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png) to publish your **QGIS project**.

Fill out the form defining the various aspects to be associated with the WebGis service being published:
### QGIS project
**`QGIS file`:** load the QGIS cartographic project to be published (.qgz or .qgs file)

### ACL Users
Management of access permissions
* **`Viewers users`:** define the individual users (Viewers) who have the credentials to view the WebGis service. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.
* **`Viewer user groups`:** you define the user groups (Viewer) which have the credentials to view the content of the service.

### Default base layer
In this session you define which **`base layer` should be active at startup**.

The choice is limited to the list of base layers activated for the cartographic group in which you work.

It is also possible not to define any active base layer at startup.

### Description data
 * **`Public title`:** Title to be associated with the project and displayed on the client header.
If left blank, the title associated with the QGIS project will be used or, in the absence of this, the name of the project file
* **`Description`:** Description of the project, it will appear at the public portal level.
* **`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group
* **`URL alias`:** a human readable URL for the map

**ATTENTION:** contents marked with * are mandatory.

### Options and actions

Choose your preferred options regarding the following options:

 * **`User QGIS project map start extent as webgis init extent:`** check this control if you want set initial extent from QGSI project initial extent, **Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**
 * **`Tab's TOC active as default:`** set tab’s TOC (Layers, Base layers, Legend) open by default on startup of webgis service
 * **`Legend position rendering:`** this option allows to set legend rendering position:
   * **In a separate TAB:** default value, the legend is rendered into a separate tab
   * **Into TOC layers:** the legend is rendered inside layers toc
 * **`Automatic zoom to query result features:`** if in the results of a search there are only features of a layer, the webgis automatic zoom on their extension

![Screenshot: G3W-SUITE Administration Project Add Option](/img/manual-english-g3wsuite-administration-project-add-option.png)

After filling in the various form, click on the **`Save button`** to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.png)

**If the publication was successful, the QGIS project will appear in the list of projects in the Cartographic Group.**

![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.png) Clicking on the **`View map`** icon will access the WebGis service in consultation.

![Screenshot: Demo Webgis Project](/img/manual-english-demo-webgis-project.png)

## Update the published WebGis service

If you want to modify some graphic-functional aspects of your WebGis service, modify your QGIS project and update the WebGis service by clicking on the **`Modify`** icon ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png).

Reupload the QGIS project with your changes, click on the **Save button** and see the resuts on the cartographic client.

<script type="application/json" data-i18n>
{
  "it": {
    "![Button: Save](/img/manual-english-buttom-save.png)": "![Pulsante: salva](/img/manual-english-buttom-save.png)",
    "![Screenshot: Iconsmall Viewmap](/img/manual-english-iconsmall-viewmap.png) Clicking on the **`View map`** icon will access the WebGis service in consultation.": "![Schermata: icona visualizza mappa](/img/manual-english-iconsmall-viewmap.png) Facendo clic sull'icona **`Visualizza mappa`** si accede al servizio WebGIS in consultazione.",
    "**`Automatic zoom to query result features:`** if in the results of a search there are only features of a layer, the webgis automatic zoom on their extension": "**`Zoom automatico sulle entità dei risultati della ricerca:`** se i risultati di una ricerca contengono entità di un solo layer, il WebGIS esegue automaticamente lo zoom sulla loro estensione",
    "**`Description`:** Description of the project, it will appear at the public portal level.": "**`Description`:** descrizione del progetto, visualizzata nel portale pubblico.",
    "**`Legend position rendering:`** this option allows to set legend rendering position:": "**`Posizione di visualizzazione della legenda:`** questa opzione consente di impostare la posizione della legenda:",
    "**`Public title`:** Title to be associated with the project and displayed on the client header.": "**`Public title`:** titolo da associare al progetto e visualizzare nell'intestazione del client.",
    "**`QGIS file`:** load the QGIS cartographic project to be published (.qgz or .qgs file)": "**`QGIS file`:** carica il progetto cartografico QGIS da pubblicare (file .qgz o .qgs)",
    "**`Tab's TOC active as default:`** set tab’s TOC (Layers, Base layers, Legend) open by default on startup of webgis service": "**`Tab's TOC active as default:`** imposta la scheda dell'indice dei contenuti (Layer, Layer di base, Legenda) aperta per impostazione predefinita all'avvio del servizio WebGIS",
    "**`Thumbnail (Logo)`:** logo to associate with the project. This image will be viewable in the list of projects within the cartographic group": "**`Thumbnail (Logo)`:** logo da associare al progetto. L'immagine sarà visibile nell'elenco dei progetti del gruppo cartografico",
    "**`URL alias`:** a human readable URL for the map": "**`URL alias`:** URL della mappa leggibile dalle persone",
    "**`User QGIS project map start extent as webgis init extent:`** check this control if you want set initial extent from QGSI project initial extent, **Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**": "**`User QGIS project map start extent as webgis init extent:`** seleziona questa casella per impostare l'estensione iniziale usando quella del progetto QGIS: **Project properties -> QGIS Server -> WMS capabilities (Advertised extent)**",
    "**`Viewer user groups`:** you define the user groups (Viewer) which have the credentials to view the content of the service.": "**`Viewer user groups`:** definisce i gruppi di utenti (Viewer) autorizzati a consultare il contenuto del servizio.",
    "**`Viewers users`:** define the individual users (Viewers) who have the credentials to view the WebGis service. By choosing the anonymous user (**AnonymusUser**) the group will be freely accessible.": "**`Viewers users`:** definisce gli utenti singoli (Viewer) autorizzati a consultare il servizio WebGIS. Scegliendo l'utente anonimo (**AnonymusUser**), il gruppo sarà accessibile liberamente.",
    "**ATTENTION:** contents marked with * are mandatory.": "**ATTENZIONE:** i campi contrassegnati con * sono obbligatori.",
    "**If the publication was successful, the QGIS project will appear in the list of projects in the Cartographic Group.**": "**Se la pubblicazione è riuscita, il progetto QGIS apparirà nell'elenco dei progetti del gruppo cartografico.**",
    "**In a separate TAB:** default value, the legend is rendered into a separate tab": "**In una scheda separata:** valore predefinito; la legenda viene visualizzata in una scheda dedicata",
    "**In case of login fails, report the problem to `info@gis3w.it`**": "**In caso di problemi di accesso, segnala il problema a `info@gis3w.it`**",
    "**Into TOC layers:** the legend is rendered inside layers toc": "**Nell'indice dei contenuti:** la legenda viene visualizzata all'interno dell'indice dei layer",
    "Access the list of webgis in the Cartographic Group **`Demo Group`** clicking on the project number shown.": "Accedi all'elenco dei WebGIS nel gruppo cartografico **`Demo Group`** facendo clic sul numero del progetto visualizzato.",
    "Access the online service": "Accedere al servizio online",
    "ACL Users": "Utenti ACL",
    "After authentication it will be possible to access the **`Administration session`** and view the **Dashboard**.": "Dopo l'autenticazione sarà possibile accedere alla **sessione di amministrazione** e visualizzare la **Dashboard**.",
    "After filling in the various form, click on the **`Save button`** to confirm your choices.": "Dopo aver compilato il modulo, fai clic sul **pulsante Salva** per confermare le scelte.",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "Choose your preferred options regarding the following options:": "Scegli le opzioni che preferisci tra le seguenti:",
    "Click on the **`Show`** item in the ligth blue **Groups** box to acces at the list of available Cartographic Groups.": "Fai clic su **`Mostra`** nel riquadro azzurro **Gruppi** per accedere all'elenco dei gruppi cartografici disponibili.",
    "Default base layer": "Layer di base predefinito",
    "Description data": "Dati descrittivi",
    "Fill out the form defining the various aspects to be associated with the WebGis service being published:": "Compila il modulo definendo i vari aspetti da associare al servizio WebGIS da pubblicare:",
    "If left blank, the title associated with the QGIS project will be used or, in the absence of this, the name of the project file": "Se lasciato vuoto, verrà utilizzato il titolo associato al progetto QGIS oppure, in mancanza, il nome del file di progetto",
    "If you want to modify some graphic-functional aspects of your WebGis service, modify your QGIS project and update the WebGis service by clicking on the **`Modify`** icon ![Screenshot: Iconsmall Edit](/img/manual-english-iconsmall-edit.png).": "Per modificare alcuni aspetti grafico-funzionali del servizio WebGIS, modifica il progetto QGIS e aggiorna il servizio facendo clic sull'icona **`Modifica`** ![Schermata: icona di modifica](/img/manual-english-iconsmall-edit.png).",
    "In the Dashboard there will be the menu for access to the **Cartographic Groups** pertaining to your user and the menus relating to additional modules not active in this demo.": "Nella Dashboard è disponibile il menu per accedere ai **Gruppi cartografici** associati all'utente e i menu relativi ai moduli aggiuntivi non attivi in questa demo.",
    "In this session you define which **`base layer` should be active at startup**.": "In questa sezione si definisce quale **layer di base deve essere attivo all'avvio**.",
    "It is also possible not to define any active base layer at startup.": "È anche possibile non definire alcun layer di base attivo all'avvio.",
    "Management of access permissions": "Gestione delle autorizzazioni di accesso",
    "Now click on the button ![Button: Add QGIS Project](/img/manual-english-button-add-qgis-project.png) to publish your **QGIS project**.": "Ora fai clic sul pulsante ![Pulsante: aggiungi progetto QGIS](/img/manual-english-button-add-qgis-project.png) per pubblicare il tuo **progetto QGIS**.",
    "Options and actions": "Opzioni e azioni",
    "password: **`G3wsuite123`**": "password: **`G3wsuite123`**",
    "Publish a WebGIS service": "Pubblicare un servizio WebGIS",
    "Publish the QGIS project as a WebGis service": "Pubblicare il progetto QGIS come servizio WebGIS",
    "QGIS project": "Progetto QGIS",
    "Reupload the QGIS project with your changes, click on the **Save button** and see the resuts on the cartographic client.": "Carica nuovamente il progetto QGIS con le modifiche, fai clic sul **pulsante Salva** e verifica i risultati nel client cartografico.",
    "Screenshot: Demo Choose Group": "Schermata: selezione del gruppo della demo",
    "Screenshot: Demo Dashboard": "Schermata: Dashboard della demo",
    "Screenshot: Demo Project Manage": "Schermata: gestione del progetto della demo",
    "Screenshot: Demo Webgis Project": "Schermata: progetto WebGIS della demo",
    "Screenshot: G3W-SUITE Administration Project Add Option": "Schermata: aggiunta delle opzioni del progetto nell'amministrazione G3W-SUITE",
    "Screenshot: Iconsmall Edit": "Schermata: icona di modifica",
    "Screenshot: Iconsmall Viewmap": "Schermata: icona di visualizzazione della mappa",
    "The choice is limited to the list of base layers activated for the cartographic group in which you work.": "La scelta è limitata all'elenco dei layer di base attivati per il gruppo cartografico in cui si opera.",
    "To access the **Administration Panel** it is necessary to log in using the following credentials:": "Per accedere al **pannello di amministrazione** è necessario effettuare l'accesso con le seguenti credenziali:",
    "To publish the project, you can **access the G3W-SUITE test application** via the following URL: [**`https://v311.g3wsuite.it`**](https://v311.g3wsuite.it)": "Per pubblicare il progetto, puoi **accedere all'applicazione di test G3W-SUITE** tramite il seguente URL: [**`https://v311.g3wsuite.it`**](https://v311.g3wsuite.it)",
    "Update the published WebGis service": "Aggiornare il servizio WebGIS pubblicato",
    "user: **`demo`**": "utente: **`demo`**"
  }
}
</script>
