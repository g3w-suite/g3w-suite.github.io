# Changelog G3W-Suite 3.9

Release date: **23 January 2025**

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Francesco Boccacci](/en/about/francesco-boccacci/) • [Leonardo Lami](/en/about/leonardo-lami/) • [Matteo Tosi](/en/about/matteo-tosi/) • [Walter Lorenzetti](/en/about/walter-lorenzetti/)

## Changelog for G3W-SUITE 3.9

**Version 3.9 of G3W-SUITE is characterized by a great refactoring job.**

Among the main innovations we also remember:

- a complete **restyling** of the cartographic client
- **simpler management** of editing permission configurations dedicated to complex projects
- **new editing features** inherited from the QGIS project

### **We hope you enjoy this great work!**

### **Happy mapping with G3W-SUITE!**

## Sponsor and funder

{{#en}}

Open source project · Gis3W [main sponsor](/en/sponsors/).

{{/en}}{{#it}}

G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on.

{{/it}}

Among the **main funder of this version** we remember:

<div class="changelog-sponsors">
  <div class="changelog-sponsor-card">
    <img src="/img/site-irpi-logo.png" alt="IRPI CNR" loading="lazy">
    <div class="sponsor-name"><a href="https://www.irpi.cnr.it/" target="_blank" rel="noopener noreferrer">IRPI CNR</a></div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-grosseto-logo.png" alt="{{t 'Public Administration of Grosseto'}}" loading="lazy">
    <div class="sponsor-name"><a href="https://www.comune.grosseto.it/" target="_blank" rel="noopener noreferrer">{{t 'Public Administration of Grosseto'}}</a></div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-logomcr.png" alt="{{t 'Rovereto Civic Museum Foundation'}}" loading="lazy">
    <div class="sponsor-name"><a href="https://www.fondazionemcr.it/" target="_blank" rel="noopener noreferrer">{{t 'Rovereto Civic Museum Foundation'}}</a></div>
  </div>
</div>

## General

### Feature: A complete restyling of the cartographic client

The cartographic client has undergone a major restyling to make the interface cleaner, more functional and eliminate some problems with the correct display of the various contextual menus.

<img src="/img/site-new-client2.png" alt="{{t 'Screenshot: New Client2'}}" loading="lazy">

### Feature: Upgrade to Django 4.2

Migration to Django 4.2 and integration of new features in the release

<img src="/img/site-g3wsuite-django-4-2-admin-screen.jpg" alt="{{t 'Screenshot: G3W-SUITE Django 4 2 Admin Screen'}}" loading="lazy">

## Administration

### Feature: Cloning editing powers between users**  **

This function helps in the management of complex projects where users must be able to edit many layers, even with different powers.

Through this function it is possible to clone the editing settings of a user and automatically apply the same settings to other users and/or groups of users.

<img src="/img/site-user-copy-permissions.png" alt="{{t 'Screenshot: User Copy Permissions'}}" loading="lazy">

### Feature: Definition of the layers visible in the list of editable layers

In the case of layers with many 1:N relations (even cascade ones), it could be useful not to allow direct editing on the child layers but to allow it only starting from the parent.

This function allows you not to make the child layers visible in the list of editable layers, simplifying the interface and forcing the workflow's user in this direction.

<img src="/img/site-visibility-layers-editable.png" alt="{{t 'Screenshot: Visibility Layers Editable'}}" loading="lazy">

## Cartographic client and interaction with the map

### Feature: Refactoring

The client has undergone extensive refactoring work in order to improve the graphic appearance, standardize the operational flows and eliminate small bugs present in previous versions.

<img src="/img/site-new-client.png" alt="{{t 'Screenshot: New Client'}}" loading="lazy">

### Feature: Pagination of records of the child layer of 1:N relation

In order to allow the management of large amounts of data, the list of records of a layer related in 1:N mode is displayed on the basis of a pagination system.

<img src="/img/site-webgis-related-records-pagination.png" alt="{{t 'Screenshot: Webgis Related Records Pagination'}}" loading="lazy">

### Feature: Pagination of search and query results

The pagination system allows you to manage a large number of results without encountering client time-out problems.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/uzrrub_WxMk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Automatic filter on search results

This feature allows the user to perform a search by automatically activating the filter on the search results.

This will allow only the results obtained to be automatically displayed in the map and attribute table.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TJiXPpSVm7E" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Sorting fields of the attribute table

**Inherited from QGIS project!**

The ordering of the fields of the layer attributes table defined in QGIS is inherited from the WebGis service

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/1TH5y2DWDxw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## Editing on line

### Feature: Value relation widget: “Allow multiple selections” option integrated

**Inherited from QGIS project!**

With this version it is possible to allow the choice of more than one value among those associated with a field via the “value relation” widget.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/1wRyPBNtNBY" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Multirecords editing on 1:N relations

Starting from a parent feature, it will be possible to select some child records and edit some fields for all the selected records.

Not only that, it is also possible to select multiple parent features and modify the attributes for all the records, of the child layer, associated with the selected parents.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8ta7AVfr7-o" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Value relation widget: order setting

**Inherited from QGIS project!**

The list of values listed in the drop-down menu can be sorted both by key and by value, defining this aspect on the QGIS project.

<img src="/img/site-editing-order-value-key.png" alt="{{t 'Screenshot: Editing Order Value Key'}}" loading="lazy">

### Feature: Copy and paste between layers

The workflow related to the “copy and paste between layers” operation has been restructured and improved.

The workflow is now identical whether this operation is carried out directly on a layer or on a child layer of a relation.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/RkI1DMS-Fbc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Conditional field groups

**Inherited from QGIS project!**

Visibility management of conditional field groups has been implemented and improved, managing conditions based on Boolean fields or with multiple choices.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Q3RbLSy2kCQ" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Store of the user groups associated with the user

During the editing phase, not only the individual user can be traced, but also the groups of users associated with him, differentiating the creation and modification of features

<img src="/img/site-editing-user-group-log.png" alt="{{t 'Screenshot: Editing User Group Log'}}" loading="lazy">

## Print

### Feature: Print layout exclusion

**Eredited from QGIS projects**

If on the QGIS project I exclude a print layout from those available in the WMS service, this is excluded also from the WebGis service

<img src="/img/site-exclude-map-layouts.png" alt="{{t 'Screenshot: Exclude Map Layouts'}}" loading="lazy">

## Minor improvements

### Feature: Editing: checkbox widget improved

[https://github.com/g3w-suite/g3w-admin/issues/958](https://github.com/g3w-suite/g3w-admin/issues/958)

### Feature: Points layers export: add coordinates on CSV

[https://github.com/g3w-suite/g3w-admin/issues/963](https://github.com/g3w-suite/g3w-admin/issues/963)

### Feature: State of user visible in the users list

[https://github.com/g3w-suite/g3w-admin/issues/941](https://github.com/g3w-suite/g3w-admin/issues/941)

<div class="cta-box">
  <p>{{t 'For the full detail see the'}} <a href="https://g3w-suite.readthedocs.io" target="_blank" rel="noopener">{{t 'official manual on ReadTheDocs'}}</a>.</p>
  <div class="btn-group">
    <a class="btn btn--primary" href="{{#it}}/it/docs/demo/{{/it}}{{#en}}/docs/demo/{{/en}}#demo-3-11">{{t 'Try the current demo'}}</a>
    <a class="btn btn--outline" href="{{#it}}/it/docs/quick-start/{{/it}}{{#en}}/docs/quick-start/{{/en}}">{{t 'Quick Start'}}</a>
  </div>
</div>

<script type="application/json" data-i18n>
  {
    "it": {
      "**Eredited from QGIS projects**": "**Ereditato dai progetti QGIS**",
      "**Happy mapping with G3W-SUITE!**": "**Buon lavoro con le mappe di G3W-SUITE!**",
      "**Inherited from QGIS project!**": "**Ereditato dal progetto QGIS!**",
      "**Version 3.9 of G3W-SUITE is characterized by a great refactoring job.**": "**La versione 3.9 di G3W-SUITE è caratterizzata da un importante lavoro di refactoring.**",
      "**We hope you enjoy this great work!**": "**Speriamo che questo lavoro vi piaccia!**",
      "**new editing features** inherited from the QGIS project": "**nuove funzionalità di editing** ereditate dal progetto QGIS",
      "**simpler management** of editing permission configurations dedicated to complex projects": "**gestione più semplice** delle configurazioni dei permessi di editing per i progetti complessi",
      "Administration": "Amministrazione",
      "Among the **main funder of this version** we remember:": "Tra i **principali finanziatori di questa versione** ricordiamo:",
      "Among the main innovations we also remember:": "Tra le principali novità troviamo:",
      "Cartographic client and interaction with the map": "Client cartografico e interazione con la mappa",
      "Changelog 3.9 - G3W-Suite": "Changelog 3.9 - G3W-Suite",
      "Changelog for G3W-SUITE 3.9": "Novità di G3W-SUITE 3.9",
      "During the editing phase, not only the individual user can be traced, but also the groups of users associated with him, differentiating the creation and modification of features": "Durante l'editing è possibile tracciare sia il singolo utente sia i gruppi a cui appartiene, distinguendo tra creazione e modifica delle feature.",
      "Editing on line": "Editing online",
      "Feature: A complete restyling of the cartographic client": "Funzionalità: nuovo aspetto del client cartografico",
      "Feature: Automatic filter on search results": "Funzionalità: filtro automatico sui risultati di ricerca",
      "Feature: Cloning editing powers between users**  **": "Funzionalità: copia dei permessi di editing tra utenti**  **",
      "Feature: Conditional field groups": "Funzionalità: gruppi di campi condizionali",
      "Feature: Copy and paste between layers": "Funzionalità: copia e incolla tra layer",
      "Feature: Definition of the layers visible in the list of editable layers": "Funzionalità: scelta dei layer visibili nell'elenco dei layer modificabili",
      "Feature: Editing: checkbox widget improved": "Funzionalità: miglioramento del widget checkbox nell'editing",
      "Feature: Multirecords editing on 1:N relations": "Funzionalità: modifica multipla dei record nelle relazioni 1:N",
      "Feature: Pagination of records of the child layer of 1:N relation": "Funzionalità: paginazione dei record del layer figlio nelle relazioni 1:N",
      "Feature: Pagination of search and query results": "Funzionalità: paginazione dei risultati di ricerca e interrogazione",
      "Feature: Points layers export: add coordinates on CSV": "Funzionalità: aggiunta delle coordinate all'esportazione CSV dei layer puntuali",
      "Feature: Print layout exclusion": "Funzionalità: esclusione dei layout di stampa",
      "Feature: Refactoring": "Funzionalità: refactoring",
      "Feature: Sorting fields of the attribute table": "Funzionalità: ordinamento dei campi della tabella degli attributi",
      "Feature: State of user visible in the users list": "Funzionalità: stato visibile nell'elenco degli utenti",
      "Feature: Store of the user groups associated with the user": "Funzionalità: registrazione dei gruppi associati all'utente",
      "Feature: Upgrade to Django 4.2": "Funzionalità: aggiornamento a Django 4.2",
      "Feature: Value relation widget: order setting": "Funzionalità: ordinamento del widget relazione valore",
      "Feature: Value relation widget: “Allow multiple selections” option integrated": "Funzionalità: selezione multipla nel widget relazione valore",
      "For the full detail see the": "Per il dettaglio completo consulta il",
      "G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on.": "G3W-SUITE è un **progetto open source**: se puoi, sostieni il nostro lavoro con una donazione o contribuendo al codice, alla documentazione o al sito web.",
      "General": "Generale",
      "If on the QGIS project I exclude a print layout from those available in the WMS service, this is excluded also from the WebGis service": "Se nel progetto QGIS un layout di stampa è escluso da quelli disponibili nel servizio WMS, sarà escluso anche dal servizio WebGIS.",
      "In order to allow the management of large amounts of data, the list of records of a layer related in 1:N mode is displayed on the basis of a pagination system.": "Per gestire grandi quantità di dati, l'elenco dei record di un layer collegato tramite una relazione 1:N è suddiviso in pagine.",
      "In the case of layers with many 1:N relations (even cascade ones), it could be useful not to allow direct editing on the child layers but to allow it only starting from the parent.": "Per layer con numerose relazioni 1:N, anche in cascata, può essere utile consentire la modifica dei layer figli solo a partire dal padre.",
      "Migration to Django 4.2 and integration of new features in the release": "Migrazione a Django 4.2 e integrazione delle novità della versione.",
      "Minor improvements": "Miglioramenti minori",
      "Not only that, it is also possible to select multiple parent features and modify the attributes for all the records, of the child layer, associated with the selected parents.": "È anche possibile selezionare più feature padre e modificare gli attributi di tutti i record del layer figlio a esse collegati.",
      "Print": "Stampa",
      "Public Administration of Grosseto": "Comune di Grosseto",
      "Quick Start": "Guida rapida",
      "Release date: **23 January 2025**": "Data di rilascio: **23 gennaio 2025**",
      "Rovereto Civic Museum Foundation": "Fondazione Museo Civico di Rovereto",
      "Screenshot: Editing Order Value Key": "Schermata: ordinamento dei valori nel modulo di editing",
      "Screenshot: Editing User Group Log": "Schermata: registrazione dei gruppi utente nell'editing",
      "Screenshot: Exclude Map Layouts": "Schermata: esclusione dei layout di stampa",
      "Screenshot: G3W-SUITE Django 4 2 Admin Screen": "Schermata: amministrazione di G3W-SUITE con Django 4.2",
      "Screenshot: New Client": "Schermata: nuovo client cartografico",
      "Screenshot: New Client2": "Schermata: nuova interfaccia del client",
      "Screenshot: User Copy Permissions": "Schermata: copia dei permessi tra utenti",
      "Screenshot: Visibility Layers Editable": "Schermata: visibilità dei layer modificabili",
      "Screenshot: Webgis Related Records Pagination": "Schermata: paginazione dei record collegati",
      "Sponsor and funder": "Sponsor e finanziatori",
      "Starting from a parent feature, it will be possible to select some child records and edit some fields for all the selected records.": "A partire da una feature padre è possibile selezionare alcuni record figli e modificarne i campi contemporaneamente.",
      "The cartographic client has undergone a major restyling to make the interface cleaner, more functional and eliminate some problems with the correct display of the various contextual menus.": "Il client cartografico è stato rinnovato per rendere l'interfaccia più pulita e funzionale e risolvere problemi di visualizzazione dei menu contestuali.",
      "The client has undergone extensive refactoring work in order to improve the graphic appearance, standardize the operational flows and eliminate small bugs present in previous versions.": "Un ampio lavoro di refactoring ha migliorato l'aspetto del client, uniformato i flussi operativi e corretto piccoli problemi delle versioni precedenti.",
      "The list of values listed in the drop-down menu can be sorted both by key and by value, defining this aspect on the QGIS project.": "I valori del menu a tendina possono essere ordinati per chiave o per valore, configurando l'opzione nel progetto QGIS.",
      "The ordering of the fields of the layer attributes table defined in QGIS is inherited from the WebGis service": "Il servizio WebGIS eredita l'ordine dei campi della tabella degli attributi definito in QGIS.",
      "The pagination system allows you to manage a large number of results without encountering client time-out problems.": "La paginazione permette di gestire numerosi risultati senza incorrere in problemi di timeout del client.",
      "The workflow is now identical whether this operation is carried out directly on a layer or on a child layer of a relation.": "Il flusso è ora lo stesso sia per un layer sia per il layer figlio di una relazione.",
      "The workflow related to the “copy and paste between layers” operation has been restructured and improved.": "Il flusso di lavoro per la copia e l'incolla tra layer è stato riorganizzato e migliorato.",
      "This feature allows the user to perform a search by automatically activating the filter on the search results.": "Questa funzione attiva automaticamente il filtro sui risultati di una ricerca.",
      "This function allows you not to make the child layers visible in the list of editable layers, simplifying the interface and forcing the workflow's user in this direction.": "La funzione permette di nascondere i layer figli dall'elenco dei layer modificabili, semplificando l'interfaccia e guidando gli utenti verso questo flusso di lavoro.",
      "This function helps in the management of complex projects where users must be able to edit many layers, even with different powers.": "Questa funzione facilita la gestione di progetti complessi in cui gli utenti devono poter modificare numerosi layer con permessi diversi.",
      "This will allow only the results obtained to be automatically displayed in the map and attribute table.": "In questo modo solo i risultati ottenuti vengono mostrati automaticamente sulla mappa e nella tabella degli attributi.",
      "Through this function it is possible to clone the editing settings of a user and automatically apply the same settings to other users and/or groups of users.": "È possibile copiare le impostazioni di editing di un utente e applicarle automaticamente ad altri utenti o gruppi.",
      "Try the current demo": "Prova la demo attuale",
      "Visibility management of conditional field groups has been implemented and improved, managing conditions based on Boolean fields or with multiple choices.": "La gestione della visibilità dei gruppi di campi condizionali è stata implementata e migliorata, supportando condizioni basate su campi booleani o a scelta multipla.",
      "With this version it is possible to allow the choice of more than one value among those associated with a field via the “value relation” widget.": "Questa versione permette di selezionare più valori tra quelli associati a un campo tramite il widget “relazione valore”.",
      "a complete **restyling** of the cartographic client": "un completo **restyling** del client cartografico",
      "official manual on ReadTheDocs": "manuale ufficiale su ReadTheDocs"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Changelog 3.9 - G3W-Suite"
  }
</script>
