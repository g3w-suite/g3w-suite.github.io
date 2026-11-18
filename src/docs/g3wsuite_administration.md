# Administration panel

_**This section describes how to manage the various aspects and features of the Suite:**_
 * _**customization of the access portal**_
 * _**user creation and management (individuals and groups)**_
 * _**creation of MacroGroups and cartographic Groups and definition of access and management policies**_
 * _**publication of QGIS projects as WebGis services**_
 * _**updating and management of WebGis services (search tool and additional functions)**_

## Users and Users Groups management

- [Users and cartographic macro-groups](admin-users.md)

## Cartographic Groups

- [Cartographic groups](admin-cartographic-groups.md)

## Publication of new WebGis services

- [Publish and update WebGIS services](admin-publishing.md)

## Widgets management

- [Widget and layer setup](admin-widgets-setup.md)
- [Widget constraints and search tools](admin-widgets-controls.md)

## Add custom Base layers

- [Base layers and multilingual settings](admin-base-layers.md)

## Description of the interface

Use the Administration Panel to publish QGIS projects and configure their WebGIS services.

The main page of the Administration Panel shows the following items, depending on your permissions and the installed modules:
 * **`a bar at the top`:**
   * **Frontend:** to return to the landing page when the optional portal is enabled
   * **Username:** to edit your profile and log out
   * **Language:** to choose the interface language
   * **A gear icon** ![Icon: Configuration](/img/manual-english-iconconfiguration.avif): to access a menu with:

       **-->  Sistem Information**: information on operating system versions, QGIS Server, DB management, geographic libraries and anything else related to the suite

       **-->  Edit general data**: to set information shown in the front-end portal

       **-->  Django Administration** (only for Staff user): to configure/managme Django advanced settings

       **-->  Files:** to access the File Manager tool

       **-->  Images:** to define the main images of the FrontEnd home page

 * **`a text menu on the left`:**
   * **Dashboard:** Administration dashboard
   * **Cartographic Groups:** to create/manage cartographic groups
   * **Macro Cartographic Groups:** to create/manage Cartographic MacroGroups
   * **Users:** to create/manage single users and/or user groups
   * **List of active modules:** to activate/manage the functional modules active in your installation
 * **`a dashboard in the center of the page`**
   * **Dashboard:** to access to list of Cartographic Groups
   * **Module list:** to access the respective settings

![Screenshot: G3W-SUITE Administration Desk](/img/manual-english-g3wsuite-administration-desk.avif)

## Front end portal customization
If the [optional portal](g3wsuite_access_portal.md) is enabled, use the **Administration Panel** to customize its content.

Open the **Configurations** menu ![Icon: Configuration](/img/manual-english-iconconfiguration.avif) at the top right and choose **Edit general data**.

![Screenshot: G3W-SUITE Administration Configuration](/img/manual-english-g3wsuite-administration-configuration.avif)

In the **`General suite data`** form you can define all the informations that will appear on the portal home page
 * **`Home data`:** info that will appear on the front end landing page
 * **`About data`:** info that will appear in the **About it** session
 * **`Group map data`:** info that will appear in the **Maps** session
 * **`Login data`:** info that will appear in the **Login/Administration** session
 * **`Social media data`:** links to the social channels that will appear in the **About it** it session
 * **`Map Client data`:** main title to be displayed in the cartographic client bar

### Front End Home Data
Informations that will appear on the front end landing page

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Homedata](/img/manual-english-g3wsuite-administration-configuration-homedata.avif)

![Screenshot: G3W-SUITE Administration Configuration Homedata Result](/img/manual-english-g3wsuite-administration-configuration-homedata-result.avif)

### Front End About Data
Informations that will appear in the **Info** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Aboutusdata](/img/manual-english-g3wsuite-administration-configuration-aboutusdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Aboutusdata Result](/img/manual-english-g3wsuite-administration-configuration-aboutusdata-result.avif)

### Frontend Groups Map Data
Information that will be displayed in the **Maps** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata Result](/img/manual-english-g3wsuite-administration-configuration-mapgroupsdata-result.avif)

### Front End Login Data
Information that will be displayed in the **Login/Administration** session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Logindata](/img/manual-english-g3wsuite-administration-configuration-logindata.avif)

![Screenshot: G3W-SUITE Administration Configuration Logindata Result](/img/manual-english-g3wsuite-administration-configuration-logindata-result.avif)

### Front End Social Data
Links to the social channels that will be displayed in the **About it** it session

**ATTENTION:** contents marked with * are mandatory.

![Screenshot: G3W-SUITE Administration Configuration Socialdata](/img/manual-english-g3wsuite-administration-configuration-socialdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Socialdata Result](/img/manual-english-g3wsuite-administration-configuration-socialdata-result.avif)

### Map client data
Main title to be displayed in the cartographic client bar

![Screenshot: G3W-SUITE Administration Configuration Mapclientdata](/img/manual-english-g3wsuite-administration-configuration-mapclientdata.avif)

![Screenshot: G3W-SUITE Administration Configuration Mapclientdata Result](/img/manual-english-g3wsuite-administration-configuration-mapclientdata-result.avif)

In the **Credits** subsection it is possible to define additional text for the publishing aspects.

After filling in the various form, click on the **Save button** to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "**-->  Django Administration** (only for Staff user): to configure/managme Django advanced settings": "**--> Django Administration** (solo per gli utenti Staff): configurare e gestire le impostazioni avanzate di Django",
    "**-->  Edit general data**: to set information shown in the front-end portal": "**--> Edit general data**: impostare le informazioni mostrate nel portale front end",
    "**-->  Files:** to access the File Manager tool": "**--> Files:** accedere allo strumento File Manager",
    "**-->  Images:** to define the main images of the FrontEnd home page": "**--> Images:** definire le immagini principali della pagina iniziale del FrontEnd",
    "**-->  Sistem Information**: information on operating system versions, QGIS Server, DB management, geographic libraries and anything else related to the suite": "**--> Sistem Information**: informazioni sulle versioni del sistema operativo, su QGIS Server, sulla gestione del DB, sulle librerie geografiche e su altri aspetti della suite",
    "**A gear icon** ![Icon: Configuration](/img/manual-english-iconconfiguration.avif): to access a menu with:": "**Un'icona a forma di ingranaggio** ![Icona: configurazione](/img/manual-english-iconconfiguration.avif): per accedere a un menu con:",
    "**ATTENTION:** contents marked with * are mandatory.": "**ATTENZIONE:** i campi contrassegnati con * sono obbligatori.",
    "**Cartographic Groups:** to create/manage cartographic groups": "**Cartographic Groups:** creare e gestire i Gruppi cartografici",
    "**Dashboard:** Administration dashboard": "**Dashboard:** pannello di amministrazione",
    "**Dashboard:** to access to list of Cartographic Groups": "**Dashboard:** accedere all'elenco dei Gruppi cartografici",
    "**Frontend:** to return to the landing page when the optional portal is enabled": "**Frontend:** torna alla pagina iniziale quando il portale opzionale è attivo",
    "**Language:** to choose the interface language": "**Language:** scegliere la lingua dell'interfaccia",
    "**List of active modules:** to activate/manage the functional modules active in your installation": "**List of active modules:** attivare e gestire i moduli funzionali attivi nell'installazione",
    "**Macro Cartographic Groups:** to create/manage Cartographic MacroGroups": "**Macro Cartographic Groups:** creare e gestire i Macrogruppi cartografici",
    "**Module list:** to access the respective settings": "**Elenco dei moduli:** accedere alle relative impostazioni",
    "**Username:** to edit your profile and log out": "**Username:** modificare il profilo e disconnettersi",
    "**Users:** to create/manage single users and/or user groups": "**Users:** creare e gestire singoli utenti e/o gruppi di utenti",
    "**`About data`:** info that will appear in the **About it** session": "**`About data`:** informazioni visualizzate nella sezione **About it**",
    "**`Group map data`:** info that will appear in the **Maps** session": "**`Group map data`:** informazioni visualizzate nella sezione **Maps**",
    "**`Home data`:** info that will appear on the front end landing page": "**`Home data`:** informazioni visualizzate nella pagina iniziale del front end",
    "**`Login data`:** info that will appear in the **Login/Administration** session": "**`Login data`:** informazioni visualizzate nella sezione **Login/Administration**",
    "**`Map Client data`:** main title to be displayed in the cartographic client bar": "**`Map Client data`:** titolo principale da visualizzare nella barra del client cartografico",
    "**`Social media data`:** links to the social channels that will appear in the **About it** it session": "**`Social media data`:** collegamenti ai canali social visualizzati nella sezione **About it**",
    "**`a bar at the top`:**": "**`una barra superiore`:**",
    "**`a dashboard in the center of the page`**": "**`un pannello al centro della pagina`**",
    "**`a text menu on the left`:**": "**`un menu testuale a sinistra`:**",
    "Add custom Base layers": "Aggiunta di livelli di base personalizzati",
    "Administration interface and portal": "Interfaccia di amministrazione e portale",
    "Administration panel": "Pannello di amministrazione",
    "After filling in the various form, click on the **Save button** to confirm your choices.": "Dopo aver compilato i vari moduli, fare clic sul pulsante **Save** per confermare le scelte.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Base layers and multilingual settings": "Livelli di base e impostazioni multilingue",
    "Button: Save": "Pulsante: salva",
    "Cartographic Groups": "Gruppi cartografici",
    "Cartographic groups": "Gruppi cartografici",
    "Description of the interface": "Descrizione dell'interfaccia",
    "Front End About Data": "Dati della sezione About del front end",
    "Front End Home Data": "Dati della pagina iniziale del front end",
    "Front End Login Data": "Dati di accesso del front end",
    "Front End Social Data": "Dati social del front end",
    "Front end portal customization": "Personalizzazione del portale front end",
    "Frontend Groups Map Data": "Dati delle mappe dei gruppi del front end",
    "If the [optional portal](g3wsuite_access_portal.md) is enabled, use the **Administration Panel** to customize its content.": "Se il [portale opzionale](g3wsuite_access_portal.md) è attivo, usa il **pannello di amministrazione** per personalizzarne i contenuti.",
    "In the **Credits** subsection it is possible to define additional text for the publishing aspects.": "Nella sottosezione **Credits** è possibile definire testo aggiuntivo relativo alla pubblicazione.",
    "In the **`General suite data`** form you can define all the informations that will appear on the portal home page": "Nel modulo **`General suite data`** è possibile definire tutte le informazioni che appariranno nella pagina iniziale del portale",
    "Information that will be displayed in the **Login/Administration** session": "Informazioni visualizzate nella sezione **Login/Administration**",
    "Information that will be displayed in the **Maps** session": "Informazioni visualizzate nella sezione **Maps**",
    "Informations that will appear in the **Info** session": "Informazioni visualizzate nella sezione **Info**",
    "Informations that will appear on the front end landing page": "Informazioni visualizzate nella pagina iniziale del front end",
    "Links to the social channels that will be displayed in the **About it** it session": "Collegamenti ai canali social visualizzati nella sezione **About it**",
    "Macro Cartographic Groups": "Macrogruppi cartografici",
    "Main title to be displayed in the cartographic client bar": "Titolo principale da visualizzare nella barra del client cartografico",
    "Map client data": "Dati del client cartografico",
    "Multilinguage": "Multilinguismo",
    "Open the **Configurations** menu ![Icon: Configuration](/img/manual-english-iconconfiguration.avif) at the top right and choose **Edit general data**.": "Apri il menu **Configurazioni** ![Icona: configurazione](/img/manual-english-iconconfiguration.avif) in alto a destra e scegli **Modifica dati generali**.",
    "Publication of new WebGis services": "Pubblicazione di nuovi servizi WebGis",
    "Publish and update WebGIS services": "Pubblicazione e aggiornamento dei servizi WebGIS",
    "Screenshot: G3W-SUITE Administration Configuration": "Schermata: configurazione dell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Aboutusdata": "Schermata: configurazione dei dati About di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Aboutusdata Result": "Schermata: risultato della configurazione dei dati About di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Homedata": "Schermata: configurazione dei dati iniziali di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Homedata Result": "Schermata: risultato della configurazione dei dati iniziali di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Logindata": "Schermata: configurazione dei dati di accesso di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Logindata Result": "Schermata: risultato della configurazione dei dati di accesso di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Mapclientdata": "Schermata: configurazione dei dati del client cartografico di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Mapclientdata Result": "Schermata: risultato della configurazione dei dati del client cartografico di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata": "Schermata: configurazione dei dati dei gruppi cartografici di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Mapgroupsdata Result": "Schermata: risultato della configurazione dei dati dei gruppi cartografici di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Socialdata": "Schermata: configurazione dei dati social di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Configuration Socialdata Result": "Schermata: risultato della configurazione dei dati social di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Desk": "Schermata: dashboard di amministrazione di G3W-SUITE",
    "The main page of the Administration Panel shows the following items, depending on your permissions and the installed modules:": "La pagina principale del pannello di amministrazione mostra le voci seguenti, a seconda dei permessi e dei moduli installati:",
    "Update/ Manage WebGis services": "Aggiornamento e gestione dei servizi WebGis",
    "Use the Administration Panel to publish QGIS projects and configure their WebGIS services.": "Usa il pannello di amministrazione per pubblicare progetti QGIS e configurare i relativi servizi WebGIS.",
    "Users and Users Groups management": "Gestione degli utenti e dei gruppi di utenti",
    "Users and cartographic macro-groups": "Utenti e macrogruppi cartografici",
    "Widget and layer setup": "Configurazione dei widget e dei layer",
    "Widget constraints and search tools": "Vincoli dei widget e strumenti di ricerca",
    "Widgets management": "Gestione dei widget",
    "_**This section describes how to manage the various aspects and features of the Suite:**_": "_**Questa sezione descrive come gestire i vari aspetti e le funzionalità della Suite:**_",
    "_**creation of MacroGroups and cartographic Groups and definition of access and management policies**_": "_**creazione di Macrogruppi e Gruppi cartografici e definizione delle politiche di accesso e gestione**_",
    "_**customization of the access portal**_": "_**personalizzazione del portale di accesso**_",
    "_**publication of QGIS projects as WebGis services**_": "_**pubblicazione di progetti QGIS come servizi WebGis**_",
    "_**updating and management of WebGis services (search tool and additional functions)**_": "_**aggiornamento e gestione dei servizi WebGis (strumenti di ricerca e funzioni aggiuntive)**_",
    "_**user creation and management (individuals and groups)**_": "_**creazione e gestione degli utenti (singoli e gruppi)**_"
  }
}
</script>
