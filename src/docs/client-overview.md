# Client overview

[Back to Cartographic client](g3wsuite_client.md)

## Generic aspects

The application has a responsive interface consisting of expandable and reducible sessions.

![Screenshot: G3wclient Interface](/img/manual-english-g3wclient-interface.png)

### Header

![Screenshot: G3wclient Header](/img/manual-english-g3wclient-header.png)

The contents of the header differ for the public user and for the logged in user

**Public user (Anonymous user)**

 * **Logo, title and subtitle:**, deriving from:
   * main title (set at General Data level) or MacroGroup name, according to the settings
   * Cartographic Group name
   * WebGis service title
 * **Alerts:** the Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time. The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.
 * **Credits:** references to the G3W-SUITE project
 * **Sign** in (far cambiare in Log in)
   * **Sign in:** login in for registered users
   * **Embed map:** URL with the references to the extension currently displayed
   * **Change map:** which allows you to switch from one WebGis service to another while maintaining extension and display scale
 * **Language:** the choice of language is reflected in the individual menus of the map client and on the contents of the access portal. The languages available are those activated by the Administration. 

![Screenshot: G3wclient Header Anonymus](/img/manual-english-g3wclient-header-anonymus.png)

**Logged user**

 * **Logo, title and subtitle:**, deriving from:
   * main title (set at General Data level) or MacroGroup name, according to the settings
   * Cartographic Group name
   * WebGis service title
 * **Alerts:** the Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time. The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.
 * **Credits:** references to the G3W-SUITE project
 * **User name:** the name of the logged user
   * **Admin:** access to the administration section
   * **Log out:** log out the user  
   * **Embed map:** URL with the references to the extension currently displayed
   * **Change map:** which allows you to switch from one WebGis service to another while maintaining extension and display scale
 * **Language:** the choice of language is reflected in the individual menus of the map client and on the contents of the access portal. The languages available are those activated by the Administration. 

 ![Screenshot: G3wclient Header Signed](/img/manual-english-g3wclient-header-signed.png)

### Main menù

The **`Main menù`** is located on the left.

The upper section containing:
 * **Legend:** displaying the map legend
 * **Metadata:** any content defined in the GetCapabilities of the QGIS Project.Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.
 * **Charts:** visualization of the plots created on QGIS with the DataPlotly plugin
 * **Bookmarks:** tool for using the Spatial Bookmarks associated with the QGIS project and allowing the user to create new ones for his exclusive use.
 * **Print:** printing tool based on the layouts defined on the QGIS project
 * **Search:** with the search tools defined in the Administration session, as well as a free **Query Builder** like the one present in QGIS
 * **Editing layers:** open editing session
 * **Theme:** a session to define which theme (among those defined in the QGIS project) to activate; the user (not anonymous) can create and save his own themes to recall them as needed

![Screenshot: G3wclient Header Anonymus](/img/manual-english-g3wclient-header-anonymus.png)

The middle section containing the list of project layers organized into any groups as in a QGIS project.

Depending on the settings defined at the QGIS project publication level, the legend can be inserted in a dedicated tab or integrated into the layer list as in QGIS.

![Screenshot: G3wclient Tool Panel](/img/manual-english-g3wclient-tool-panel.png)


Base Layer management is now handled by a map control at map level

![Screenshot: G3wclient Tool Panel](/img/manual-english-g3wclient-tool-panel.png)

The lower section containing:
   * **Add layer:** session to add local vector layers or custom WMS services to the map
   * **Change map:** to switch from one WebGis service to another while maintaining extension and display scale
   
These features are described in a dedicated paragraph below.

<script type="application/json" data-i18n>
{
  "it": {
    "**Add layer:** session to add local vector layers or custom WMS services to the map": "**Aggiungi layer:** sezione per aggiungere alla mappa layer vettoriali locali o servizi WMS personalizzati",
    "**Admin:** access to the administration section": "**Amministrazione:** accesso alla sezione di amministrazione",
    "**Alerts:** the Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time. The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.": "**Avvisi:** l’utente può richiamare in qualsiasi momento i messaggi associati ai singoli servizi WebGIS, mostrati all’avvio dei servizi. Il messaggio viene visualizzato in una finestra modale ridimensionabile e può essere consultato in sovrapposizione mentre si continua a interagire con gli elementi del client cartografico.",
    "**Bookmarks:** tool for using the Spatial Bookmarks associated with the QGIS project and allowing the user to create new ones for his exclusive use.": "**Segnalibri:** strumento per usare i segnalibri spaziali associati al progetto QGIS e crearne di nuovi per uso personale.",
    "**Change map:** to switch from one WebGis service to another while maintaining extension and display scale": "**Cambia mappa:** consente di passare da un servizio WebGIS a un altro mantenendo l’estensione e la scala di visualizzazione",
    "**Change map:** which allows you to switch from one WebGis service to another while maintaining extension and display scale": "**Cambia mappa:** consente di passare da un servizio WebGIS a un altro mantenendo l’estensione e la scala di visualizzazione",
    "**Charts:** visualization of the plots created on QGIS with the DataPlotly plugin": "**Grafici:** visualizzazione dei grafici creati in QGIS con il plugin DataPlotly",
    "**Credits:** references to the G3W-SUITE project": "**Crediti:** riferimenti al progetto G3W-SUITE",
    "**Editing layers:** open editing session": "**Layer modificabili:** apre la sessione di modifica",
    "**Embed map:** URL with the references to the extension currently displayed": "**Incorpora mappa:** URL con i riferimenti all’estensione attualmente visualizzata",
    "**Language:** the choice of language is reflected in the individual menus of the map client and on the contents of the access portal. The languages available are those activated by the Administration.": "**Lingua:** la lingua selezionata viene usata nei menu del client cartografico e nei contenuti del portale di accesso. Sono disponibili le lingue attivate dall’amministrazione.",
    "**Legend:** displaying the map legend": "**Legenda:** visualizza la legenda della mappa",
    "**Log out:** log out the user": "**Esci:** disconnessione dell’utente",
    "**Logged user**": "**Utente autenticato**",
    "**Logo, title and subtitle:**, deriving from:": "**Logo, titolo e sottotitolo:** derivano da:",
    "**Metadata:** any content defined in the GetCapabilities of the QGIS Project.Depending on the settings defined at the QGIS project publication level, this session may not be shown to the user.": "**Metadati:** contenuti definiti nel GetCapabilities del progetto QGIS. In base alle impostazioni di pubblicazione del progetto, questa sezione potrebbe non essere mostrata all’utente.",
    "**Print:** printing tool based on the layouts defined on the QGIS project": "**Stampa:** strumento di stampa basato sui layout definiti nel progetto QGIS",
    "**Public user (Anonymous user)**": "**Utente pubblico (utente anonimo)**",
    "**Search:** with the search tools defined in the Administration session, as well as a free **Query Builder** like the one present in QGIS": "**Ricerca:** include gli strumenti di ricerca definiti nella sezione Amministrazione e un **Query Builder** libero, simile a quello disponibile in QGIS",
    "**Sign in:** login in for registered users": "**Accedi:** accesso per gli utenti registrati",
    "**Sign** in (far cambiare in Log in)": "**Accedi**",
    "**Theme:** a session to define which theme (among those defined in the QGIS project) to activate; the user (not anonymous) can create and save his own themes to recall them as needed": "**Tema:** sezione per scegliere quale tema attivare tra quelli definiti nel progetto QGIS; l’utente non anonimo può creare e salvare i propri temi per richiamarli quando necessario",
    "**User name:** the name of the logged user": "**Nome utente:** il nome dell’utente autenticato",
    "Back to Cartographic client": "Torna al client cartografico",
    "Base Layer management is now handled by a map control at map level": "La gestione dei layer di base avviene ora tramite un controllo della mappa.",
    "Cartographic Group name": "nome del Gruppo cartografico",
    "Client overview": "Panoramica del client",
    "Depending on the settings defined at the QGIS project publication level, the legend can be inserted in a dedicated tab or integrated into the layer list as in QGIS.": "In base alle impostazioni di pubblicazione del progetto QGIS, la legenda può essere inserita in una scheda dedicata oppure integrata nell’elenco dei layer, come in QGIS.",
    "Generic aspects": "Aspetti generali",
    "Header": "Intestazione",
    "Main menù": "Menu principale",
    "main title (set at General Data level) or MacroGroup name, according to the settings": "titolo principale (impostato in Dati generali) oppure nome del Macrogruppo, in base alle impostazioni",
    "Screenshot: G3wclient Header": "Schermata: intestazione G3wclient",
    "Screenshot: G3wclient Header Anonymus": "Schermata: intestazione G3wclient per utente anonimo",
    "Screenshot: G3wclient Header Signed": "Schermata: intestazione G3wclient per utente autenticato",
    "Screenshot: G3wclient Interface": "Schermata: interfaccia G3wclient",
    "Screenshot: G3wclient Tool Panel": "Schermata: pannello degli strumenti G3wclient",
    "The **`Main menù`** is located on the left.": "Il **`Menu principale`** si trova a sinistra.",
    "The application has a responsive interface consisting of expandable and reducible sessions.": "L’applicazione dispone di un’interfaccia responsiva composta da pannelli espandibili e comprimibili.",
    "The contents of the header differ for the public user and for the logged in user": "I contenuti dell’intestazione variano per l’utente pubblico e per quello autenticato.",
    "The lower section containing:": "La sezione inferiore contiene:",
    "The middle section containing the list of project layers organized into any groups as in a QGIS project.": "La sezione centrale contiene l’elenco dei layer del progetto, organizzati in gruppi come nel progetto QGIS.",
    "The upper section containing:": "La sezione superiore contiene:",
    "These features are described in a dedicated paragraph below.": "Queste funzioni sono descritte in un paragrafo dedicato più avanti.",
    "WebGis service title": "titolo del servizio WebGIS"
  }
}
</script>
