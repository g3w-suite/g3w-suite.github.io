# Changelog G3W-Suite 3.7

Release date: **13 December 2023**

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Francesco Boccacci](/en/about/francesco-boccacci/) • [Leonardo Lami](/en/about/leonardo-lami/) • [Matteo Tosi](/en/about/matteo-tosi/) • [Walter Lorenzetti](/en/about/walter-lorenzetti/)

## Changelog for G3W-SUITE 3.7

### Version 3.7 of G3W-SUITE is characterized by the release of a module dedicated to the** integration of analysis models created on QGIS via ModelDesigner**.

#### This function will allow you to activate analysis models on individual WebGis services and allow such analyzes to be carried out directly in the web environment.

#### All thanks to the **continuous integration of G3W-SUITE with the QGIS API**.

Among the main innovations we also remember:

- **possibility for logged in users to create filters on layers and save them to retrieve them when necessary**
- **editing tables related via join**
- **management of the Relation reference widget linked to 1:N relations**
- **integration with the OSM and BING APIs for displaying results on the map and saving them on predefined layers**
- **user/pwd recovery system**
- **definition of multi-layer editing permissions**
- **PostGis ratser supported**
- **…and much more!**

<img src="/img/site-g3wsuite-3-7.png" alt="Screenshot: G3W-SUITE 3 7" loading="lazy">

### **We hope you enjoy this great work!**

### **Happy mapping!**

<img src="/img/site-qprocessing-logo.png" alt="Logo: Qprocessing" loading="lazy">

## Sponsor and funder

G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on.

Among the **main funder of this version** we remember:

<div class="changelog-sponsors">
  <div class="changelog-sponsor-card">
    <img src="/img/site-arpa-piemonte.png" alt="Piemonte Regional Environmental Protection Agency" loading="lazy">
    <div class="sponsor-name"><a href="https://www.arpa.piemonte.it/" target="_blank" rel="noopener noreferrer">Piemonte Regional Environmental Protection Agency</a></div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-qtibia-long.png" alt="QTIBIA Engineering" loading="lazy">
    <div class="sponsor-name"><a href="https://qtibia.ro/" target="_blank" rel="noopener noreferrer">QTIBIA Engineering</a></div>
  </div>
</div>

## Geographical analysis

### Feature: Integration of QGIS Processing API

##### **Thanks to this new integration it is possible to import geographical analysis models created in QGIS via the Model Designer and make them available on your WebGis services!**

**Discover all the news about this feature on the [dedicated page](/en/news/model-builder-processing/).**

<div class="video-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/9X4A11wqQdg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
  </div>

## Administration

### Feature: Password recovery system**  **

It is possible to activate the following functions at user log level:

- **user name recovery**
- **password recovery**
- **obligation to change password upon first login**

Recovery is carried out via the email associated with the individual user

<img src="/img/site-recovery-pwd.png" alt="Screenshot: Recovery Pwd" loading="lazy">

### Feature: External user registration system**  **

**It is possible to activate a viewer-type external user registration system.**

On the Administration side it will be possible to define which user groups to which new users will be automatically associated.

Recovery is carried out via the email associated with the individual user

<img src="/img/site-external-user.png" alt="Screenshot: External User" loading="lazy">

### Feature: Creation of user groups****

**From this version it is possible to define the users belonging to a user group directly when creating the group**

<img src="/img/site-users-group.png" alt="Screenshot: Users Group" loading="lazy">

### Feature: Give permission to upload geo-data into FileManager section to Editor Level 1 users****

G3W-SUITE allows you to create cartographic containers of various levels and associate them, for content management, with administrators (Editor 1 and Editor2) of various levels.

Until now, only the Admin user could upload and manage geographic data on a physical file in the FileManager session.

**With this version, Editor1 will also be able to manage cartographic contents on FileManager in a folder dedicated to it, simplifying content management in situations where it is necessary to set up administrator users of different levels.**

<img src="/img/site-webgis-mobile-editing-screen.png" alt="Screenshot: Webgis Mobile Editing Screen" loading="lazy">

### Feature: Format of WMS GetMap response definition****

**In the publication form of the webgis service it is possible to define the image format of WMS *GetMap* request.**

The value available will be the standard formats that QGIS server can manage.

<img src="/img/site-wmsgetmap.png" alt="Screenshot: Wmsgetmap" loading="lazy">

### Feature: Set geocoding provide for gecoding map control****

**In the publication form of the webgis service it is possible to define the geocoding endpoints if the project groups have the ‘geocoding’ mapcontrol (ex ‘nominatim’) active.**

<img src="/img/site-webgis-group-switcher-screen.png" alt="Screenshot: Webgis Group Switcher Screen" loading="lazy">

## Supported data types

### Feature: PostGis Raster supported****

**PostGis rasters join the other geographic formats supported by the suite.**

<img src="/img/site-postgis-raster.png" alt="Screenshot: PostGIS Raster" loading="lazy">

## General

### Feature: Management of the Relation reference widget (1:N relations)

**Inherited from QGIS project**

The “Relation references” widget is now managed and inherited by the suite.

It is therefore possible to define an expression to display in place of the foreign key on which the relationship is based.

The expression will be displayed:

- in the editing phase of the related table
- in the values shown on searches based on that layer/field

<img src="/img/site-relation-reference.png" alt="Screenshot: Relation Reference" loading="lazy">

### Feature: 1:N relations based on multi fields

**Inherited from QGIS project**

**From this version the suite also manages 1:N relations based on multiple key fields**

<img src="/img/site-multi-fields-relation.png" alt="Screenshot: Multi Fields Relation" loading="lazy">

## Editing on line

### Feature: Editing tables related via join

**Inherited from QGIS project**

**It is now possible to edit tables related with 1:1 and N:1 joins starting from the parent layer.**

The function allows you to:

- **modify records already present in the joined table and already related**
- **add new records in the joined table**

<div class="video-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/4edHwHzMvhc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
  </div>

### Feature: Activation/setting of editing on multiple layers at the same time

In case you need to activate online editing on many layers, you can now do it via a new function

- **the editing activation scale will be the same for all selected layers**
- **users and related editing powers will be defined, without differentiation, on all selected layers**
- **the fields to be used for feature insertion/modification logs can be defined manually**
- **log recording will only occur for those layers that have fields with that name.**

<div class="video-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OW9Bl-s6DOg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
  </div>

## Searches

### Feature: Search values based on editing widgets

**Inherited from QGIS project**

The preparation of a search based on a field of a layer on which one of these widgets is active, on the QGIS side, determines the display of the values defined in the widget also at the level of the values on which the searches are based:

- **Value relations**
- **Value map**
- **Relation reference**

<img src="/img/site-search-widget-relation.png" alt="Screenshot: Search Widget Relation" loading="lazy">

## Interaction with the map

### Feature: Filters on layers

The function allowing users to set up filters on layers has been enriched.

All the filters created would propagate, with a view to consistency, on:

- features displayed on the map
- attribute table contents
- data underlying the charts
- editable geometries

Furthermore, if the user is logged in, it will be possible to save the filters created and recover them in any other work session.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MgDMKJ1Fp_s" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: 1:N relations between geometric layers

In the case of a 1:N relation between layers, both geometric, it will be possible to zoom in on the individual child following their visualization starting from the parent

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LWih5ICaNPo" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

<div class="cta-box">
  <p>{{t 'For complete details, see the'}} <a href="https://g3w-suite.readthedocs.io" target="_blank" rel="noopener">{{t 'official ReadTheDocs documentation'}}</a>.</p>
  <div class="btn-group">
    <a class="btn btn--primary" href="{{#it}}/it/docs/demo/{{/it}}{{#en}}/docs/demo/{{/en}}#demo-3-11">{{t 'Try the current demo'}}</a>
    <a class="btn btn--outline" href="{{#it}}/it/docs/quick-start/{{/it}}{{#en}}/docs/quick-start/{{/en}}">{{t 'Quick Start'}}</a>
  </div>
</div>

<script type="application/json" data-i18n>
  {
    "it": {
      "**From this version it is possible to define the users belonging to a user group directly when creating the group**": "**Da questa versione è possibile definire gli utenti appartenenti a un gruppo direttamente durante la sua creazione.**",
      "**From this version the suite also manages 1:N relations based on multiple key fields**": "**Da questa versione la suite gestisce anche le relazioni 1:N basate su più campi chiave.**",
      "**Happy mapping!**": "**Buon lavoro con le mappe!**",
      "**In the publication form of the webgis service it is possible to define the geocoding endpoints if the project groups have the ‘geocoding’ mapcontrol (ex ‘nominatim’) active.**": "**Nel modulo di pubblicazione del servizio WebGIS è possibile definire gli endpoint di geocodifica se per i gruppi di progetti è attivo il controllo ‘geocoding’ (ad esempio ‘nominatim’).**",
      "**In the publication form of the webgis service it is possible to define the image format of WMS *GetMap* request.**": "**Nel modulo di pubblicazione del servizio WebGIS è possibile definire il formato immagine della richiesta WMS *GetMap*.**",
      "**It is now possible to edit tables related with 1:1 and N:1 joins starting from the parent layer.**": "**È ora possibile modificare le tabelle collegate con join 1:1 e N:1 a partire dal layer padre.**",
      "**It is possible to activate a viewer-type external user registration system.**": "**È possibile attivare un sistema di registrazione esterna per utenti di tipo viewer.**",
      "**PostGis rasters join the other geographic formats supported by the suite.**": "**I raster PostGIS si aggiungono agli altri formati geografici supportati dalla suite.**",
      "**PostGis ratser supported**": "**supporto per i raster PostGIS**",
      "**Thanks to this new integration it is possible to import geographical analysis models created in QGIS via the Model Designer and make them available on your WebGis services!**": "**Grazie a questa integrazione puoi importare i modelli di analisi geografica creati in QGIS con Model Designer e renderli disponibili nei tuoi servizi WebGIS!**",
      "**We hope you enjoy this great work!**": "**Speriamo che questo lavoro vi piaccia!**",
      "**With this version, Editor1 will also be able to manage cartographic contents on FileManager in a folder dedicated to it, simplifying content management in situations where it is necessary to set up administrator users of different levels.**": "**Con questa versione anche gli utenti Editor1 possono gestire contenuti cartografici nel FileManager, in una cartella dedicata: la gestione dei contenuti diventa più semplice quando servono amministratori di livelli diversi.**",
      "**add new records in the joined table**": "**aggiungere nuovi record alla tabella collegata**",
      "**definition of multi-layer editing permissions**": "**definizione dei permessi di editing su più layer**",
      "**editing tables related via join**": "**modifica delle tabelle collegate tramite join**",
      "**integration with the OSM and BING APIs for displaying results on the map and saving them on predefined layers**": "**integrazione con le API OSM e BING per mostrare i risultati sulla mappa e salvarli in layer predefiniti**",
      "**log recording will only occur for those layers that have fields with that name.**": "**il registro sarà compilato solo per i layer che dispongono di campi con quei nomi.**",
      "**management of the Relation reference widget linked to 1:N relations**": "**gestione del widget riferimento relazione per le relazioni 1:N**",
      "**modify records already present in the joined table and already related**": "**modificare i record già presenti e collegati nella tabella in join**",
      "**obligation to change password upon first login**": "**obbligo di cambiare password al primo accesso**",
      "**password recovery**": "**recupero della password**",
      "**possibility for logged in users to create filters on layers and save them to retrieve them when necessary**": "**possibilità per gli utenti autenticati di creare filtri sui layer e salvarli per utilizzarli in seguito**",
      "**the editing activation scale will be the same for all selected layers**": "**la scala di attivazione dell'editing sarà uguale per tutti i layer selezionati**",
      "**the fields to be used for feature insertion/modification logs can be defined manually**": "**i campi da usare per registrare inserimenti e modifiche delle feature possono essere definiti manualmente**",
      "**user name recovery**": "**recupero del nome utente**",
      "**user/pwd recovery system**": "**sistema di recupero delle credenziali**",
      "**users and related editing powers will be defined, without differentiation, on all selected layers**": "**gli utenti e i relativi permessi di editing saranno definiti allo stesso modo per tutti i layer selezionati**",
      "**…and much more!**": "**…e molto altro!**",
      "Administration": "Amministrazione",
      "All thanks to the **continuous integration of G3W-SUITE with the QGIS API**.": "Tutto questo grazie alla **continua integrazione di G3W-SUITE con le API di QGIS**.",
      "All the filters created would propagate, with a view to consistency, on:": "Per mantenere la coerenza, i filtri creati si applicano a:",
      "Among the **main funder of this version** we remember:": "Tra i **principali finanziatori di questa versione** ricordiamo:",
      "Among the main innovations we also remember:": "Tra le principali novità troviamo:",
      "Changelog 3.7 - G3W-Suite": "Changelog 3.7 - G3W-Suite",
      "Changelog for G3W-SUITE 3.7": "Novità di G3W-SUITE 3.7",
      "Editing on line": "Editing online",
      "Feature: 1:N relations based on multi fields": "Funzionalità: relazioni 1:N basate su più campi",
      "Feature: 1:N relations between geometric layers": "Funzionalità: relazioni 1:N tra layer geometrici",
      "Feature: Activation/setting of editing on multiple layers at the same time": "Funzionalità: attivazione e configurazione dell'editing su più layer",
      "Feature: Creation of user groups****": "Funzionalità: creazione dei gruppi utente****",
      "Feature: Editing tables related via join": "Funzionalità: modifica delle tabelle collegate tramite join",
      "Feature: External user registration system**  **": "Funzionalità: registrazione esterna degli utenti**  **",
      "Feature: Filters on layers": "Funzionalità: filtri sui layer",
      "Feature: Format of WMS GetMap response definition****": "Funzionalità: formato della risposta WMS GetMap****",
      "Feature: Give permission to upload geo-data into FileManager section to Editor Level 1 users****": "Funzionalità: permesso di caricare dati geografici nel FileManager per gli utenti Editor1****",
      "Feature: Integration of QGIS Processing API": "Funzionalità: integrazione delle API QGIS Processing",
      "Feature: Management of the Relation reference widget (1:N relations)": "Funzionalità: gestione del widget riferimento relazione (relazioni 1:N)",
      "Feature: Password recovery system**  **": "Funzionalità: recupero della password**  **",
      "Feature: PostGis Raster supported****": "Funzionalità: supporto per PostGIS Raster****",
      "Feature: Search values based on editing widgets": "Funzionalità: valori di ricerca basati sui widget di editing",
      "Feature: Set geocoding provide for gecoding map control****": "Funzionalità: configurazione del servizio di geocodifica****",
      "For complete details, see the": "Per il dettaglio completo consulta il",
      "Furthermore, if the user is logged in, it will be possible to save the filters created and recover them in any other work session.": "Gli utenti autenticati possono inoltre salvare i filtri creati e recuperarli nelle sessioni di lavoro successive.",
      "G3W-SUITE allows you to create cartographic containers of various levels and associate them, for content management, with administrators (Editor 1 and Editor2) of various levels.": "G3W-SUITE permette di creare contenitori cartografici di diversi livelli e associarli ad amministratori (Editor1 ed Editor2) per la gestione dei contenuti.",
      "G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on.": "G3W-SUITE è un **progetto open source**: se puoi, sostieni il nostro lavoro con una donazione o contribuendo al codice, alla documentazione o al sito web.",
      "General": "Generale",
      "Geographical analysis": "Analisi geografica",
      "In case you need to activate online editing on many layers, you can now do it via a new function": "Una nuova funzione permette di attivare l'editing online su più layer contemporaneamente.",
      "In the case of a 1:N relation between layers, both geometric, it will be possible to zoom in on the individual child following their visualization starting from the parent": "In una relazione 1:N tra layer geometrici è possibile fare zoom sui singoli elementi figli visualizzati a partire dal padre.",
      "Interaction with the map": "Interazione con la mappa",
      "It is possible to activate the following functions at user log level:": "Per l'accesso degli utenti è possibile attivare le seguenti funzioni:",
      "It is therefore possible to define an expression to display in place of the foreign key on which the relationship is based.": "È quindi possibile definire un'espressione da mostrare al posto della chiave esterna su cui si basa la relazione.",
      "On the Administration side it will be possible to define which user groups to which new users will be automatically associated.": "Nel pannello di amministrazione si possono definire i gruppi a cui associare automaticamente i nuovi utenti.",
      "Quick Start": "Guida rapida",
      "Recovery is carried out via the email associated with the individual user": "Il recupero avviene tramite l'indirizzo email associato all'utente.",
      "Release date: **13 December 2023**": "Data di rilascio: **13 dicembre 2023**",
      "Searches": "Ricerche",
      "Sponsor and funder": "Sponsor e finanziatori",
      "Supported data types": "Tipi di dati supportati",
      "The expression will be displayed:": "L'espressione sarà mostrata:",
      "The function allowing users to set up filters on layers has been enriched.": "La funzione che permette agli utenti di impostare filtri sui layer è stata migliorata.",
      "The function allows you to:": "La funzione permette di:",
      "The preparation of a search based on a field of a layer on which one of these widgets is active, on the QGIS side, determines the display of the values defined in the widget also at the level of the values on which the searches are based:": "Quando una ricerca usa un campo associato a uno di questi widget in QGIS, i valori definiti nel widget sono disponibili anche nella ricerca:",
      "The value available will be the standard formats that QGIS server can manage.": "Sono disponibili i formati standard gestiti da QGIS Server.",
      "The “Relation references” widget is now managed and inherited by the suite.": "La suite supporta ed eredita ora il widget “riferimento relazione”.",
      "This function will allow you to activate analysis models on individual WebGis services and allow such analyzes to be carried out directly in the web environment.": "Questa funzione permette di attivare modelli di analisi nei singoli servizi WebGIS ed eseguirli direttamente sul web.",
      "Try the current demo": "Prova la demo attuale",
      "Until now, only the Admin user could upload and manage geographic data on a physical file in the FileManager session.": "Finora solo l'utente Admin poteva caricare e gestire file di dati geografici nella sezione FileManager.",
      "Version 3.7 of G3W-SUITE is characterized by the release of a module dedicated to the** integration of analysis models created on QGIS via ModelDesigner**.": "G3W-SUITE 3.7 introduce un modulo dedicato all'**integrazione dei modelli di analisi creati in QGIS con Model Designer**.",
      "attribute table contents": "contenuti della tabella degli attributi",
      "data underlying the charts": "dati alla base dei grafici",
      "editable geometries": "geometrie modificabili",
      "features displayed on the map": "feature visualizzate sulla mappa",
      "in the editing phase of the related table": "durante la modifica della tabella collegata",
      "in the values shown on searches based on that layer/field": "tra i valori mostrati nelle ricerche basate su quel layer o campo",
      "official ReadTheDocs documentation": "manuale ufficiale su ReadTheDocs"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Changelog 3.7 - G3W-Suite"
  }
</script>
