# Cartographic groups

[Back to Administration panel](g3wsuite_administration.md)

## Cartographic Groups
_**In this section it is possible to view the list of Cartographic Groups present, manage them and create new ones.**_

A Cartographic Group is create  to **collect a series of cartographic projects belonging, for example, to the same theme** (Urban Planning Regulations, tourist maps ...) and characterized by the same projection system.

It should be remembered that it will be possible to switch from one WebGis service to another, leaving the same geographical extension and scale, only between the projects contained in the same cartographic group.

In the left side menu there is the **Cartographic Groups** item with two sub-items:
 * **Add Group:** to create a new Cartographic Group
 * **Group List:** to access the list of groups present

You can also access the list of groups by clicking on the **"Show"** button in the **Cartographic Groups** box on the **Dashboard**.

### Add Group
**Through this item, available only for the Admin or Editor1 users, it is possible to create a new Cartographic Group.**

During creation, some functional characteristics and tools that the WebGis interface will show for all cartographic projects published within the group are also defined.

Let's see in detail the various sub-sessions of the group creation form.

#### General data
 * **`Name *`:** a generic internal identification name (not show in the front end)
 * **`Title`***: descriptive title of the Group (will appear in the list of Cartographic Groups)
 * **`Description`**: description of the content
 * **`Language`***: interface language
 
#### Logo/Picture
 * **`Header logo img`***: the logo to be displayed in the header del client cartografico
 * **`Use logo image for client`** option
 * **`Logo link`:** a eventual link to associate with the logo
 
 **REMEBER**
 
By default, the map client header, for each WebGis service, is composed of:
 * main title (if set at General Data management level)
 * logo and title associated with the **Cartographic Group**
 * title of the WebGis service

If you select the **Use MacroGroup title and logo for the client** options, the map client header, for each WebGis service, will instead consist of:
 * main title (if set at General Data management level)
 * logo and title associated with the **Cartographic MacroGroup**
 * title of the WebGis service
 
 If you select the **Use Group logo for the client** options, the map client header, for each WebGis service, will instead consist of:
 * main title (if set at General Data management level)
 * title associated with the **Cartographic MacroGroup**
 * logo associated with the **Cartographic Group** (if MacroGroup logo option is active this options takes precedence)
 * title of the WebGis service
     
#### ACL Users
**Access and modification powers are managed.**

The options present will vary according to the type of user (Admin or Editor1) who creates/manages the Group

**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions are optional.

Learn more about this in the [dedicated session](user_groups_organization).

Let’s see in detail the various sub-sessions of the ACL Users session:
 * **`Editor1 User`:** defines the **user (Editor1) manager of the Group**.
     The entry is present only when the Admin type user creates the Group
     If the Group is created by a user associated with the Editor1 role this option is not visible and the Group is associated directly with that user
 * **`Editor2 User`:** defines the **user (Editor2) manager of the Group**.
 * **`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the contents of the group**. By choosing the anonymous user (AnonymousUser) the group will be visible and accessible by AnonymousUser
 * **`Editor user groups`:** define the **user groups (Editor2) who manage the Group**.
 * **`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the contents of the group**.

The option **`Propagate viewers user (single and groups) permissions`** allows you to propagate the Viewer users (individuals and/or groups) associated to the Group to ALL the WebGis services present in it. 

**Be careful: this option cancels any differentiation in the access policies applied to the WebGis services contained in the Group.**

![Screenshot: G3W-SUITE Administration Group Add ACL](/img/manual-english-g3wsuite-administration-group-add-acl.png)

#### MacroGroups
**Possible definition of the belonging MacroGroup.**

This option is available only if Cartographic macro groups have been created

In the event that the Group is created by an Editor1 type user, the Group will be automatically associated with the MacroGroup associated with the same Editor1.

#### GEO data
**Projection system associated with the group.**

**N.B.** All projects loaded into the group must be associated with this SRID.

#### Base layers and Map interaction tools
In this box you can define:
 * **`Mapcontrols`***: list of tools available on the WebGis client:
   * **zoomtoextent:** zoom to the initial extension
   * **zoom:** zoom in and zoom out
   * **zoombox:** zoom tool based on drawing a rectangle
   * **query:** puntual query of geographical layers
   * **querybbox:** query via bounding box (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**)
   * **querybypolygon:** it will be possible to automatically query the features of one or more layers that fall inside a polygonal element of a guide layer. (Eg what's inside a cadastral parcel?) - **N.B. it is necessary that the all the layers involved in this kind of query are published as WFS services on the QGIS project**
   * **querybydrawpolygon:** query based on a polygon drawn on the map  (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**) 
   * **zoomhistory:** undo/redo tools to navigate previous and post visualization areas
   * **overview:** presence of a panoramic map
   * **scaleline:** presence of the scale bar
   * **scale:** tool for defining the display scale
   * **mouseposition:** display of mouse position coordinates
   * **geolocation:** geolocation tool  (available only with https certificate)
   * **geocoding:** address search tools and toponyms based on OSM; see the [dedicated paragraph](editing-geocoding.md) for using map control as a tool for populating project data
   * **streetview:** due to Google polycy, StreetView it will open on a new browse tab without the aspects of synchronization with the map
   * **length:** linear measuring instrument
   * **area:** surface measuring instrument
   * **addlayers:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis. These layers will remain until the end of the work session
   * **screenshot:*** tool to take a screenshot of the map area
   * **geoscreenshot:*** tool to create a GeoTIFF of the map area
   * **annotation:*** an useful tool to add custom texts or geometrics (points, line, cirlce, polygon) annotations to the map and share them
 * **`Baselayer`:** choice of the base maps that will be available on the WebGis client
 * **`Background color`:** choice of the background color of the maps (default white)
 
***NB:** the security protocols prevent the creation of screenshots if WMS services with domains other than the publication one are present on the map. **In this case the icons will not be present on the client even if the MapControl is selected.**
To avoid this, set the WMS as **internal WMS** in the [Widget management](admin-widgets-setup.md) section.

![Screenshot: G3W-SUITE Administration Group Add Geodata](/img/manual-english-g3wsuite-administration-group-add-geodata.png)

With regard to the **Base Layers**, it is specified that the external services available by default are:
 * **OSM**

Due to the change in licenses, it is no longer possible to use **Bing** and **Google** as BaseLayer outside of Bing and Google applications.

Remember that it is possible to build customized Base Layers starting from open external Base Layer or from the contenents of a projects published on the suite.

In this regard, consult the section on [**base layers**](admin-base-layers.md).


#### Copyright
**`Terms of use`:** description of the terms of use of the map and any other info
**`Link to terms`:** link to text

After filling in the various form, click on the **Save** button to confirm your choices.
 
![Button: Save](/img/manual-english-buttom-save.png)




### Groups List
**From this item you can access the list of the created cartographic groups.**

#### General operations
For each group, the Title and Subtitle defined at the time of creation are shown.

There are also a series of icons to access specific functions:
 * ![Icon: Add](/img/manual-english-icon-add.png) **Add a new project (QGIS)** to be published as WebGis service
 * Number and links to projects published within the Group
 * ![Icon: View](/img/manual-english-icon-view.png) **Show group details**
 * ![Icon: Edit](/img/manual-english-icon-edit.png) **Change** group definitions
 * ![Icon: Erase](/img/manual-english-icon-erase.png) **Delete** group

 In case of request to delete the Cartographic Group, a popup will ask whether the deletion of the Group should be permanent or a simple deactivation, which can be restored from the Trash menu.

 ![Screenshot: Group Delete](/img/manual-english-group-delete.png)

**ATTENTION:** the permanent removal  of the cartographic group will involve:
 * the **removal of all the WebGis services** contained therein
 * the **removal of all widgets** (eg searches) that would be orphaned after the removal of the WebGis services contained in the group. See the Widget chapter for more information.

A large **+ icon** is available to access the form for creating a new group.

![Screenshot: G3W-SUITE Administration Group List](/img/manual-english-g3wsuite-administration-group-list.png)

A simple filter allows you to view only some cartographic groups based on:
 * the MacroGroup to which they belong
 * the associated EPSG
 * the different types of users (Editor, Editor and Viewer) associated with them

The options of this last filter vary based on the type of logged in user.

![Screenshot: Group Filter](/img/manual-english-group-filter.png)

#### Cartographic Group Trash

The operation of deleting a Cartographic Group is not definitive.

The Group with all its related content (projects and widgets) is moved to the Trash session.

It is possible to access the list of trashed.

Cartographic Groups and the restore functions through the menu on the left sidebar.

![Screenshot: G3W-ADMIN Trash Group](/img/manual-english-g3wadmin-trash-group.png)

Restoring a Cartographic Group involves restoring all the projects it contains and all the accessory settings/functions of both the group and the projects (permissions, searches, editing settings, downloads, etc...).

**Deleting a Cartographic Group from the trash is an irreversible action.**

#### Define the Groups order on the FrontEnd
Using the Drag & Drop function it is possible to define the order of the Groups in the list.

This order will be reflected within the belonging MacroGroups.

**NB:** currently in the list of Groups it is not present in the subdivision in the belonging MacroGroups but the fact that a Group can be associated with only one MacroGroup still allows you to manage intuitively what will be the complessive display order.




<script type="application/json" data-i18n>
  {
  "it": {
    "![Icon: Add](/img/manual-english-icon-add.png) **Add a new project (QGIS)** to be published as WebGis service": "![Icona: aggiungi](/img/manual-english-icon-add.png) **Aggiungi un nuovo progetto (QGIS)** da pubblicare come servizio WebGis",
    "![Icon: Edit](/img/manual-english-icon-edit.png) **Change** group definitions": "![Icona: modifica](/img/manual-english-icon-edit.png) **Modifica** le definizioni del gruppo",
    "![Icon: Erase](/img/manual-english-icon-erase.png) **Delete** group": "![Icona: elimina](/img/manual-english-icon-erase.png) **Elimina** il gruppo",
    "![Icon: View](/img/manual-english-icon-view.png) **Show group details**": "![Icona: visualizza](/img/manual-english-icon-view.png) **Mostra i dettagli del gruppo**",
    "***NB:** the security protocols prevent the creation of screenshots if WMS services with domains other than the publication one are present on the map. **In this case the icons will not be present on the client even if the MapControl is selected.**": "***NB:** i protocolli di sicurezza impediscono di acquisire schermate se nella mappa sono presenti servizi WMS appartenenti a domini diversi da quello di pubblicazione. **In tal caso, le icone non saranno disponibili nel client anche se MapControl è selezionato.**",
    "**ATTENTION:** the permanent removal  of the cartographic group will involve:": "**ATTENZIONE:** la rimozione definitiva del Gruppo cartografico comporta:",
    "**Access and modification powers are managed.**": "**In questa sezione si gestiscono i permessi di accesso e modifica.**",
    "**Add Group:** to create a new Cartographic Group": "**Add Group:** creare un nuovo Gruppo cartografico",
    "**Be careful: this option cancels any differentiation in the access policies applied to the WebGis services contained in the Group.**": "**Attenzione: questa opzione annulla ogni differenziazione delle politiche di accesso applicate ai servizi WebGis contenuti nel Gruppo.**",
    "**Deleting a Cartographic Group from the trash is an irreversible action.**": "**L'eliminazione di un Gruppo cartografico dal cestino è irreversibile.**",
    "**From this item you can access the list of the created cartographic groups.**": "**Questa voce consente di accedere all'elenco dei Gruppi cartografici creati.**",
    "**Group List:** to access the list of groups present": "**Group List:** accedere all'elenco dei gruppi presenti",
    "**N.B.** All projects loaded into the group must be associated with this SRID.": "**N.B.** Tutti i progetti caricati nel gruppo devono essere associati a questo SRID.",
    "**NB:** currently in the list of Groups it is not present in the subdivision in the belonging MacroGroups but the fact that a Group can be associated with only one MacroGroup still allows you to manage intuitively what will be the complessive display order.": "**NB:** al momento l'elenco dei Gruppi non è suddiviso in base ai Macrogruppi di appartenenza; tuttavia, poiché un Gruppo può essere associato a un solo Macrogruppo, è comunque possibile gestire in modo intuitivo l'ordine complessivo di visualizzazione.",
    "**Possible definition of the belonging MacroGroup.**": "**Consente di definire il Macrogruppo di appartenenza.**",
    "**Projection system associated with the group.**": "**Sistema di proiezione associato al Gruppo.**",
    "**REMEBER**": "**RICORDARE**",
    "**Remember:** the presence of users of Editor1 and Editor2 roles is not mandatory and therefore the respective sub-sessions are optional.": "**Nota:** la presenza di utenti con ruolo Editor1 o Editor2 non è obbligatoria e le rispettive sottosezioni sono quindi facoltative.",
    "**Through this item, available only for the Admin or Editor1 users, it is possible to create a new Cartographic Group.**": "**Questa voce, disponibile solo per gli utenti Admin o Editor1, consente di creare un nuovo Gruppo cartografico.**",
    "**`Background color`:** choice of the background color of the maps (default white)": "**`Background color`:** scelta del colore di sfondo delle mappe (bianco per impostazione predefinita)",
    "**`Baselayer`:** choice of the base maps that will be available on the WebGis client": "**`Baselayer`:** scelta delle mappe di base disponibili nel client WebGis",
    "**`Description`**: description of the content": "**`Description`**: descrizione dei contenuti",
    "**`Editor user groups`:** define the **user groups (Editor2) who manage the Group**.": "**`Editor user groups`:** definisce i **gruppi di utenti Editor2 che gestiscono il Gruppo**.",
    "**`Editor1 User`:** defines the **user (Editor1) manager of the Group**.": "**`Editor1 User`:** definisce l'**utente Editor1 che gestisce il Gruppo**.",
    "**`Editor2 User`:** defines the **user (Editor2) manager of the Group**.": "**`Editor2 User`:** definisce l'**utente Editor2 che gestisce il Gruppo**.",
    "**`Header logo img`***: the logo to be displayed in the header del client cartografico": "**`Header logo img`***: logo da visualizzare nell'intestazione del client cartografico",
    "**`Language`***: interface language": "**`Language`***: lingua dell'interfaccia",
    "**`Link to terms`:** link to text": "**`Link to terms`:** collegamento al testo",
    "**`Logo link`:** a eventual link to associate with the logo": "**`Logo link`:** eventuale link da associare al logo",
    "**`Mapcontrols`***: list of tools available on the WebGis client:": "**`Mapcontrols`***: elenco degli strumenti disponibili nel client WebGis:",
    "**`Name *`:** a generic internal identification name (not show in the front end)": "**`Name *`:** nome identificativo interno generico (non visibile nel front end)",
    "**`Terms of use`:** description of the terms of use of the map and any other info": "**`Terms of use`:** descrizione delle condizioni d'uso della mappa e di eventuali altre informazioni",
    "**`Title`***: descriptive title of the Group (will appear in the list of Cartographic Groups)": "**`Title`***: titolo descrittivo del Gruppo (apparirà nell'elenco dei Gruppi cartografici)",
    "**`Use logo image for client`** option": "opzione **`Use logo image for client`**",
    "**`Viewer user groups`:** you define the **user groups (Viewer) which have the credentials to view the contents of the group**.": "**`Viewer user groups`:** definisce i **gruppi di utenti Viewer autorizzati a visualizzare i contenuti del Gruppo**.",
    "**`Viewers users`:** define the individual **users (Viewers) who have the credentials to view the contents of the group**. By choosing the anonymous user (AnonymousUser) the group will be visible and accessible by AnonymousUser": "**`Viewers users`:** definisce i singoli **utenti Viewer autorizzati a visualizzare i contenuti del gruppo**. Se si sceglie l'utente anonimo (AnonymousUser), il gruppo sarà visibile e accessibile a quest'ultimo.",
    "**addlayers:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis. These layers will remain until the end of the work session": "**addlayers:** strumento per caricare temporaneamente nel WebGis file GML, GeoJson, KML, GPX, SHP (compressi) e CSV con coordinate. Questi layer resteranno disponibili fino al termine della sessione di lavoro",
    "**annotation:*** an useful tool to add custom texts or geometrics (points, line, cirlce, polygon) annotations to the map and share them": "**annotation:*** strumento utile per aggiungere alla mappa annotazioni personalizzate di testo o geometriche (punti, linee, cerchi, poligoni) e condividerle",
    "**area:** surface measuring instrument": "**area:** strumento di misurazione delle superfici",
    "**geocoding:** address search tools and toponyms based on OSM; see the [dedicated paragraph](editing-geocoding.md) for using map control as a tool for populating project data": "**geocoding:** strumenti di ricerca di indirizzi e toponimi basati su OSM; per usare il controllo mappa per inserire dati nel progetto, consultare il [paragrafo dedicato](editing-geocoding.md)",
    "**geolocation:** geolocation tool  (available only with https certificate)": "**geolocation:** strumento di geolocalizzazione (disponibile solo con certificato https)",
    "**geoscreenshot:*** tool to create a GeoTIFF of the map area": "**geoscreenshot:*** strumento per creare un GeoTIFF dell'area della mappa",
    "**length:** linear measuring instrument": "**length:** strumento di misurazione lineare",
    "**mouseposition:** display of mouse position coordinates": "**mouseposition:** visualizzazione delle coordinate della posizione del mouse",
    "**overview:** presence of a panoramic map": "**overview:** presenza di una mappa panoramica",
    "**query:** puntual query of geographical layers": "**query:** interrogazione puntuale dei layer geografici",
    "**querybbox:** query via bounding box (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**)": "**querybbox:** interrogazione tramite bounding box (**N.B. è necessario che i layer siano pubblicati come servizi WFS nel progetto QGIS**)",
    "**querybydrawpolygon:** query based on a polygon drawn on the map  (**N.B. it is necessary that the layers are published as WFS services on the QGIS project**)": "**querybydrawpolygon:** interrogazione basata su un poligono disegnato sulla mappa (**N.B. è necessario che i layer siano pubblicati come servizi WFS nel progetto QGIS**)",
    "**querybypolygon:** it will be possible to automatically query the features of one or more layers that fall inside a polygonal element of a guide layer. (Eg what's inside a cadastral parcel?) - **N.B. it is necessary that the all the layers involved in this kind of query are published as WFS services on the QGIS project**": "**querybypolygon:** consente di interrogare automaticamente gli elementi di uno o più layer che ricadono all'interno di un elemento poligonale di un layer guida (ad es. cosa si trova all'interno di una particella catastale?). **N.B. tutti i layer coinvolti in questo tipo di interrogazione devono essere pubblicati come servizi WFS nel progetto QGIS**",
    "**scale:** tool for defining the display scale": "**scale:** strumento per definire la scala di visualizzazione",
    "**scaleline:** presence of the scale bar": "**scaleline:** presenza della barra di scala",
    "**screenshot:*** tool to take a screenshot of the map area": "**screenshot:*** strumento per acquisire un'immagine dell'area della mappa",
    "**streetview:** due to Google polycy, StreetView it will open on a new browse tab without the aspects of synchronization with the map": "**streetview:** a causa delle policy di Google, StreetView si aprirà in una nuova scheda del browser senza sincronizzazione con la mappa",
    "**zoom:** zoom in and zoom out": "**zoom:** ingrandimento e riduzione",
    "**zoombox:** zoom tool based on drawing a rectangle": "**zoombox:** strumento di zoom basato sul disegno di un rettangolo",
    "**zoomhistory:** undo/redo tools to navigate previous and post visualization areas": "**zoomhistory:** strumenti annulla/ripristina per navigare tra le estensioni visualizzate in precedenza e successivamente",
    "**zoomtoextent:** zoom to the initial extension": "**zoomtoextent:** zoom sull'estensione iniziale",
    "A Cartographic Group is create  to **collect a series of cartographic projects belonging, for example, to the same theme** (Urban Planning Regulations, tourist maps ...) and characterized by the same projection system.": "Un Gruppo cartografico viene creato per **raccogliere una serie di progetti cartografici appartenenti, ad esempio, allo stesso tema** (norme urbanistiche, mappe turistiche...) e caratterizzati dallo stesso sistema di proiezione.",
    "A large **+ icon** is available to access the form for creating a new group.": "È disponibile una grande **icona +** per accedere al modulo di creazione di un nuovo gruppo.",
    "A simple filter allows you to view only some cartographic groups based on:": "Un semplice filtro consente di visualizzare solo alcuni Gruppi cartografici in base a:",
    "ACL Users": "Utenti ACL",
    "Add Group": "Aggiungere un gruppo",
    "After filling in the various form, click on the **Save** button to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante **Save** per confermare le scelte.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Base layers and Map interaction tools": "Livelli di base e strumenti di interazione con la mappa",
    "Button: Save": "Pulsante: salva",
    "By default, the map client header, for each WebGis service, is composed of:": "Per impostazione predefinita, l'intestazione del client cartografico per ciascun servizio WebGis è composta da:",
    "Cartographic Group Trash": "Cestino dei Gruppi cartografici",
    "Cartographic Groups": "Gruppi cartografici",
    "Cartographic Groups and the restore functions through the menu on the left sidebar.": "È possibile consultare i Gruppi cartografici eliminati e ripristinarli dal menu nella barra laterale sinistra.",
    "Cartographic groups": "Gruppi cartografici",
    "Copyright": "Copyright",
    "Define the Groups order on the FrontEnd": "Definire l'ordine dei Gruppi nel FrontEnd",
    "Due to the change in licenses, it is no longer possible to use **Bing** and **Google** as BaseLayer outside of Bing and Google applications.": "A causa delle modifiche alle licenze, non è più possibile usare **Bing** e **Google** come BaseLayer al di fuori delle applicazioni Bing e Google.",
    "During creation, some functional characteristics and tools that the WebGis interface will show for all cartographic projects published within the group are also defined.": "Durante la creazione si definiscono anche alcune caratteristiche funzionali e gli strumenti che l'interfaccia WebGis mostrerà per tutti i progetti cartografici pubblicati nel gruppo.",
    "For each group, the Title and Subtitle defined at the time of creation are shown.": "Per ciascun gruppo vengono mostrati il titolo e il sottotitolo definiti durante la creazione.",
    "GEO data": "Dati GEO",
    "General data": "Dati generali",
    "General operations": "Operazioni generali",
    "Groups List": "Elenco dei gruppi",
    "Icon: Add": "Icona: aggiungi",
    "Icon: Edit": "Icona: modifica",
    "Icon: Erase": "Icona: elimina",
    "Icon: View": "Icona: visualizza",
    "If the Group is created by a user associated with the Editor1 role this option is not visible and the Group is associated directly with that user": "Se il Gruppo viene creato da un utente con ruolo Editor1, questa opzione non è visibile e il Gruppo viene associato direttamente a tale utente",
    "If you select the **Use Group logo for the client** options, the map client header, for each WebGis service, will instead consist of:": "Se si seleziona l'opzione **Use Group logo for the client**, l'intestazione del client cartografico per ciascun servizio WebGis sarà invece composta da:",
    "If you select the **Use MacroGroup title and logo for the client** options, the map client header, for each WebGis service, will instead consist of:": "Se si seleziona l'opzione **Use MacroGroup title and logo for the client**, l'intestazione del client cartografico per ciascun servizio WebGis sarà invece composta da:",
    "In case of request to delete the Cartographic Group, a popup will ask whether the deletion of the Group should be permanent or a simple deactivation, which can be restored from the Trash menu.": "Quando si richiede l'eliminazione del Gruppo cartografico, una finestra chiede se eliminarlo definitivamente o disattivarlo soltanto, consentendone il ripristino dal menu Trash.",
    "In the event that the Group is created by an Editor1 type user, the Group will be automatically associated with the MacroGroup associated with the same Editor1.": "Se il Gruppo viene creato da un utente di tipo Editor1, sarà associato automaticamente al Macrogruppo associato allo stesso Editor1.",
    "In the left side menu there is the **Cartographic Groups** item with two sub-items:": "Nel menu laterale è presente la voce **Cartographic Groups**, con due sottovoci:",
    "In this box you can define:": "In questo riquadro è possibile definire:",
    "In this regard, consult the section on [**base layers**](admin-base-layers.md).": "A questo proposito, consultare la sezione sui [**livelli di base**](admin-base-layers.md).",
    "It is possible to access the list of trashed.": "È possibile accedere all'elenco degli elementi eliminati.",
    "It should be remembered that it will be possible to switch from one WebGis service to another, leaving the same geographical extension and scale, only between the projects contained in the same cartographic group.": "Si ricorda che è possibile passare da un servizio WebGis all'altro mantenendo la stessa estensione geografica e scala solo tra i progetti contenuti nello stesso Gruppo cartografico.",
    "Learn more about this in the [dedicated session](user_groups_organization).": "Per ulteriori informazioni, consultare la [sezione dedicata](user_groups_organization).",
    "Let's see in detail the various sub-sessions of the group creation form.": "Vediamo nel dettaglio le varie sottosezioni del modulo di creazione del gruppo.",
    "Let’s see in detail the various sub-sessions of the ACL Users session:": "Vediamo nel dettaglio le varie sottosezioni della sezione ACL Users:",
    "Logo/Picture": "Logo/Immagine",
    "MacroGroups": "Macrogruppi",
    "Number and links to projects published within the Group": "Numero e collegamenti ai progetti pubblicati nel Gruppo",
    "Remember that it is possible to build customized Base Layers starting from open external Base Layer or from the contenents of a projects published on the suite.": "È possibile creare Base Layer personalizzati a partire da Base Layer esterni aperti o dai contenuti di un progetto pubblicato sulla Suite.",
    "Restoring a Cartographic Group involves restoring all the projects it contains and all the accessory settings/functions of both the group and the projects (permissions, searches, editing settings, downloads, etc...).": "Il ripristino di un Gruppo cartografico ripristina tutti i progetti che contiene e le relative impostazioni/funzioni accessorie del gruppo e dei progetti (permessi, ricerche, impostazioni di modifica, download ecc.).",
    "Screenshot: G3W-ADMIN Trash Group": "Schermata: cestino dei Gruppi di G3W-ADMIN",
    "Screenshot: G3W-SUITE Administration Group Add ACL": "Schermata: ACL durante l'aggiunta di un Gruppo nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Group Add Geodata": "Schermata: dati geografici durante l'aggiunta di un Gruppo nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Group List": "Schermata: elenco dei Gruppi nell'amministrazione di G3W-SUITE",
    "Screenshot: Group Delete": "Schermata: eliminazione di un Gruppo",
    "Screenshot: Group Filter": "Schermata: filtro dei Gruppi",
    "The Group with all its related content (projects and widgets) is moved to the Trash session.": "Il Gruppo e tutti i contenuti correlati (progetti e widget) vengono spostati nella sezione Trash.",
    "The entry is present only when the Admin type user creates the Group": "La voce è presente solo quando il Gruppo viene creato da un utente di tipo Admin",
    "The operation of deleting a Cartographic Group is not definitive.": "L'eliminazione di un Gruppo cartografico non è definitiva.",
    "The option **`Propagate viewers user (single and groups) permissions`** allows you to propagate the Viewer users (individuals and/or groups) associated to the Group to ALL the WebGis services present in it.": "L'opzione **`Propagate viewers user (single and groups) permissions`** consente di propagare a TUTTI i servizi WebGis del Gruppo i permessi degli utenti Viewer (singoli e/o gruppi) associati al Gruppo.",
    "The options of this last filter vary based on the type of logged in user.": "Le opzioni di quest'ultimo filtro variano in base al tipo di utente che ha effettuato l'accesso.",
    "The options present will vary according to the type of user (Admin or Editor1) who creates/manages the Group": "Le opzioni disponibili variano in base al tipo di utente (Admin o Editor1) che crea o gestisce il Gruppo",
    "There are also a series of icons to access specific functions:": "Sono inoltre disponibili diverse icone per accedere a funzioni specifiche:",
    "This option is available only if Cartographic macro groups have been created": "Questa opzione è disponibile solo se sono stati creati Macrogruppi cartografici",
    "This order will be reflected within the belonging MacroGroups.": "L'ordine verrà mantenuto all'interno dei Macrogruppi di appartenenza.",
    "To avoid this, set the WMS as **internal WMS** in the [Widget management](admin-widgets-setup.md) section.": "Per evitarlo, impostare il WMS come **internal WMS** nella sezione [Gestione dei widget](admin-widgets-setup.md).",
    "Using the Drag & Drop function it is possible to define the order of the Groups in the list.": "La funzione Drag & Drop consente di definire l'ordine dei Gruppi nell'elenco.",
    "With regard to the **Base Layers**, it is specified that the external services available by default are:": "Per quanto riguarda i **Base Layers**, i servizi esterni disponibili per impostazione predefinita sono:",
    "You can also access the list of groups by clicking on the **\"Show\"** button in the **Cartographic Groups** box on the **Dashboard**.": "È possibile accedere all'elenco dei gruppi anche facendo clic sul pulsante **\"Show\"** nel riquadro **Cartographic Groups** della **Dashboard**.",
    "_**In this section it is possible to view the list of Cartographic Groups present, manage them and create new ones.**_": "_**In questa sezione è possibile consultare l'elenco dei Gruppi cartografici presenti, gestirli e crearne di nuovi.**_",
    "logo and title associated with the **Cartographic Group**": "logo e titolo associati al **Gruppo cartografico**",
    "logo and title associated with the **Cartographic MacroGroup**": "logo e titolo associati al **Macrogruppo cartografico**",
    "logo associated with the **Cartographic Group** (if MacroGroup logo option is active this options takes precedence)": "logo associato al **Gruppo cartografico** (se l'opzione per il logo del Macrogruppo è attiva, questa opzione ha la precedenza)",
    "main title (if set at General Data management level)": "titolo principale (se impostato nella gestione dei dati generali)",
    "the **removal of all the WebGis services** contained therein": "la **rimozione di tutti i servizi WebGis** contenuti nel gruppo",
    "the **removal of all widgets** (eg searches) that would be orphaned after the removal of the WebGis services contained in the group. See the Widget chapter for more information.": "la **rimozione di tutti i widget** (ad es. le ricerche) che resterebbero orfani dopo la rimozione dei servizi WebGis del gruppo. Per ulteriori informazioni, consultare il capitolo sui widget.",
    "the MacroGroup to which they belong": "Macrogruppo di appartenenza",
    "the associated EPSG": "EPSG associato",
    "the different types of users (Editor, Editor and Viewer) associated with them": "tipi di utenti associati (Editor, Editor e Viewer)",
    "title associated with the **Cartographic MacroGroup**": "titolo associato al **Macrogruppo cartografico**",
    "title of the WebGis service": "titolo del servizio WebGis"
  }
}
</script>
