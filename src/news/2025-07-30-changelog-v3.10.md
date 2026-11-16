# Changelog G3W-Suite 3.10

Release date: **30 July 2025**

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Francesco Boccacci](/en/about/francesco-boccacci/) • [Leonardo Lami](/en/about/leonardo-lami/) • [Matteo Tosi](/en/about/matteo-tosi/) • [Walter Lorenzetti](/en/about/walter-lorenzetti/)

## Changelog for G3W-SUITE 3.10

**Version 3.10 of G3W-SUITE is characterized by a great refactoring job.**

Among the main innovations we also remember:

- **QGIS 3.40 LTR** compatibility
- [**Elasticsearch**](https://www.elastic.co/) integration
- **Redlining Notes**
- **[Data Plotly](https://plugins.qgis.org/plugins/DataPlotly/) (QGIS plugin) charts management** improvements
- and much more.

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
    <img src="/img/site-lea-logo.avif" alt="LEA" loading="lazy">
    <div class="sponsor-name"><a href="https://lea-ti.ch/it/" target="_blank" rel="noopener noreferrer">LEA</a></div>
    <div class="sponsor-country">{{t 'Switzerland'}}</div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-stanec.avif" alt="Stantec" loading="lazy">
    <div class="sponsor-name"><a href="https://www.stantec.com/" target="_blank" rel="noopener noreferrer">Stantec</a></div>
    <div class="sponsor-country">Canada</div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-arpa-liguria-project.avif" alt="ARPA Liguria" loading="lazy">
    <div class="sponsor-name"><a href="https://www.arpal.liguria.it/" target="_blank" rel="noopener noreferrer">ARPA Liguria</a></div>
    <div class="sponsor-country">{{t 'Italy'}}</div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-intercad.avif" alt="InterCad" loading="lazy">
    <div class="sponsor-name"><a href="https://www.intercad.ch/it/" target="_blank" rel="noopener noreferrer">InterCad</a></div>
    <div class="sponsor-country">{{t 'Switzerland'}}</div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-bonifica-renana.avif" alt="Consorzio Bonifica Renana" loading="lazy">
    <div class="sponsor-name"><a href="https://www.bonificarenana.it/" target="_blank" rel="noopener noreferrer">Consorzio Bonifica Renana</a></div>
    <div class="sponsor-country">{{t 'Italy'}}</div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-carnia.avif" alt="{{t 'Comunita di Montagna della Carnia'}}" loading="lazy">
    <div class="sponsor-name"><a href="https://www.carnia.comunitafvg.it/" target="_blank" rel="noopener noreferrer">{{t 'Comunita di Montagna della Carnia'}}</a></div>
    <div class="sponsor-country">{{t 'Italy'}}</div>
  </div>
</div>

## General

### Feature: QGIS 3.40 LTR compatibility

**G3W-SUITE 3.10 is compatible with the new 3.40 LTR of QGIS**

Take advantage of all the news related to the preparation of QGIS projects with the new LTR version

<img src="/img/site-qgis-340.avif" alt="{{t 'Screenshot: QGIS 340'}}" loading="lazy">

### Feature: ArcGisFeatureServer support

ArcGisFeatureServer data type is now supported

<img src="/img/site-arcgis.avif" alt="{{t 'Screenshot: ArcGIS'}}" loading="lazy">

## Administration

### Feature: Customizable visibility scale of individual layers per single/group user

On the Admin side, it is possible to define, for each layer of a WebGis service, a visibility scale differentiated by user and/or user groups.

Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level

<img src="/img/site-scale-visibility-user.avif" alt="{{t 'Screenshot: Scale Visibility User'}}" loading="lazy">

### Feature: Customize search/query results preview

On the Admin side, it is possible to define, for each project layer, the number of fields shown in the preview of the results of a search and query.

HTML formatting and image previews are now managed in the preview fields

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/uhCK26q79Dc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## Cartographic client and interaction with the map

### Feature: Redlining notes (annotations)

A new MapControl will allow the user to add annotations or drawings to the map:

- texts
- point elements
- open and close linear elements
- circle/polygonal elements

For each of them it will be possible to define size, color, transparency, labeling and more

The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2qQeypQ5a4I" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Map sharing

This tool allows you to share the WebGis service while maintaining the customizations defined by the user, including, if present, the annotations created:

- map extension
- layers on/off
- styles associated with the layers
- annotations

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/1_fqz9nz4vw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Recallable Messages/Info

The Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time.

The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/l7yvejOFZ0g" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Fields number preview and HTML support

It is now possible to configure the number of fields displayed in the preview of the results of a query or search.

The preview now also manages HTML content

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9QYKHaoT5JI" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Exporting 1:N related data associated with the parent layer

Export of 1:N related tables is available for both the complete parent layer and a selection of its features

<img src="/img/site-relation-download-features.avif" alt="{{t 'Screenshot: Relation Download Features'}}" loading="lazy">

<img src="/img/site-relation-download.avif" alt="{{t 'Screenshot: Relation Download'}}" loading="lazy">

## Editing on line

### Feature: Rotate features

The feature rotation function has been added to the editing tools.

The rotation of point geometries is linked to the presence of a field called “**rotation**” in the attribute table, on which the direction of the symbology associated with the point is based

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/RcOZiutW308" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Improve editing tool related to 1:N relations

If a layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and:

- add one or more records to the child table (only if alphanumeric) associating them with all the selected parents
- modify one or more fields of all the records of the child table, connected to the selected father geometries

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8ms1o2EM7vs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Editing form based on a specific style associated with the layer

**Inherited from QGIS project!**

On the Admin side, by activating the editing function on a layer, it is possible to define which default style to use when editing attributes.

The tool is useful if you want to differentiate the display mode of the attributes during the consultation phase from that during the editing phase.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/1LEVpSsI5RQ" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## Searches

### Feature: Elastic Search

A new search tool based on **[Elasticsearch](https://www.elastic.co/elasticsearch)** technology has been added.

This tool allows you to perform comprehensive searches based on a subset of the project layers, simplifying the use by the user.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/mPzX34VL_vk" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Adding the IN (within) operator

On the Admin side, when setting up a default search, it is possible to use the **IN** comparison operator, simplifying the case of searches based on the logical OR operator.

The new feature works wiht or without pagination system in the results

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8ms1o2EM7vs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Increased speed in preparing search form content

The default searches based on **SelectBox** widget (values shown via drop-down menus) have loading times for the values to be displayed that are proportional to the number of records and unique values.

The times for preparing the form contents further increase when the search is based on multiple fields in the case that they are also associated with the **SelectBox** widget.

On the Admin side, it is now possible to associate a table/view of the QGIS project to each search field that directly reports only the unique values ??present in it.

This possibility greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool.

<img src="/img/site-search-based-table.avif" alt="{{t 'Screenshot: Search Based Table'}}" loading="lazy">

## Charts

**G3W-SUITE allows you to associate interactive graphics created on QGIS with the [DataPlotly](https://plugins.qgis.org/plugins/DataPlotly/) plugin to various WebGis services.**

### Feature: Charts order

On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client

<div class="video-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/S0A6f_-ShqU" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
  </div>

### Feature: Charts visibility

Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records) .

It is now possible to define whether these graphs should be displayed

- only on the main chart panel
- only associated with parent attributes
- in both positions (default)

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/qO5xJGcaD8E" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## Minor improvements

### Feature: Permanently delete with one step

[https://github.com/g3w-suite/g3w-admin/pull/1142](https://github.com/g3w-suite/g3w-admin/pull/1142)

### Feature: Add support legend parameters

[https://github.com/g3w-suite/g3w-client/pull/709](https://github.com/g3w-suite/g3w-client/pull/709)

### Feature: Setting client session metadata visibility

[https://github.com/g3w-suite/g3w-admin/pull/1100](https://github.com/g3w-suite/g3w-admin/pull/1100)

### Feature: Portuguese and Ukrainian translation

[https://github.com/g3w-suite/g3w-client/pull/697](https://github.com/g3w-suite/g3w-client/pull/697)

[https://github.com/g3w-suite/g3w-client/pull/750](https://github.com/g3w-suite/g3w-client/pull/750)

<div class="cta-box">
  <p>{{t 'For the full detail see the'}} <a href="https://g3w-suite.readthedocs.io" target="_blank" rel="noopener">{{t 'official manual on ReadTheDocs'}}</a>.</p>
  <div class="btn-group">
    <a class="btn btn--primary" href="{{#it}}/it/docs/demo/{{/it}}{{#en}}/docs/demo/{{/en}}#demo-3-10">{{t 'Try the demo'}}</a>
    <a class="btn btn--outline" href="{{#it}}/it/docs/quick-start/{{/it}}{{#en}}/docs/quick-start/{{/en}}">{{t 'Quick Start'}}</a>
  </div>
</div>

<script type="application/json" data-i18n>
  {
    "it": {
      "**G3W-SUITE 3.10 is compatible with the new 3.40 LTR of QGIS**": "**G3W-SUITE 3.10 è compatibile con la nuova versione LTR 3.40 di QGIS**",
      "**G3W-SUITE allows you to associate interactive graphics created on QGIS with the [DataPlotly](https://plugins.qgis.org/plugins/DataPlotly/) plugin to various WebGis services.**": "**G3W-SUITE permette di associare ai servizi WebGIS grafici interattivi creati in QGIS con il plugin [DataPlotly](https://plugins.qgis.org/plugins/DataPlotly/).**",
      "**Happy mapping with G3W-SUITE!**": "**Buon lavoro con le mappe di G3W-SUITE!**",
      "**Inherited from QGIS project!**": "**Ereditato dal progetto QGIS!**",
      "**QGIS 3.40 LTR** compatibility": "compatibilità con **QGIS 3.40 LTR**",
      "**Redlining Notes**": "**annotazioni sulla mappa**",
      "**Version 3.10 of G3W-SUITE is characterized by a great refactoring job.**": "**La versione 3.10 di G3W-SUITE è caratterizzata da un importante lavoro di refactoring.**",
      "**We hope you enjoy this great work!**": "**Speriamo che questo lavoro vi piaccia!**",
      "**[Data Plotly](https://plugins.qgis.org/plugins/DataPlotly/) (QGIS plugin) charts management** improvements": "miglioramenti nella **gestione dei grafici del plugin QGIS [Data Plotly](https://plugins.qgis.org/plugins/DataPlotly/)**",
      "A new MapControl will allow the user to add annotations or drawings to the map:": "Un nuovo controllo della mappa permette di aggiungere annotazioni o disegni:",
      "A new search tool based on **[Elasticsearch](https://www.elastic.co/elasticsearch)** technology has been added.": "È stato aggiunto un nuovo strumento di ricerca basato su **[Elasticsearch](https://www.elastic.co/elasticsearch)**.",
      "Activating this option will overwrite, for the layers involved, any display scales defined at QGIS project level": "Attivando questa opzione, per i layer interessati vengono sovrascritte le eventuali scale di visualizzazione definite nel progetto QGIS.",
      "Administration": "Amministrazione",
      "Among the **main funder of this version** we remember:": "Tra i **principali finanziatori di questa versione** ricordiamo:",
      "Among the main innovations we also remember:": "Tra le principali novità troviamo:",
      "ArcGisFeatureServer data type is now supported": "È ora supportato il tipo di dati ArcGisFeatureServer.",
      "Cartographic client and interaction with the map": "Client cartografico e interazione con la mappa",
      "Changelog 3.10 - G3W-Suite": "Changelog 3.10 - G3W-Suite",
      "Changelog for G3W-SUITE 3.10": "Novità di G3W-SUITE 3.10",
      "Charts": "Grafici",
      "Comunita di Montagna della Carnia": "Comunità di Montagna della Carnia",
      "Editing on line": "Editing online",
      "Export of 1:N related tables is available for both the complete parent layer and a selection of its features": "Le tabelle collegate con relazioni 1:N possono essere esportate sia per l'intero layer padre sia per una selezione delle sue feature.",
      "Feature: Add support legend parameters": "Funzionalità: supporto per i parametri della legenda",
      "Feature: Adding the IN (within) operator": "Funzionalità: aggiunta dell'operatore IN",
      "Feature: ArcGisFeatureServer support": "Funzionalità: supporto ArcGisFeatureServer",
      "Feature: Charts order": "Funzionalità: ordine dei grafici",
      "Feature: Charts visibility": "Funzionalità: visibilità dei grafici",
      "Feature: Customizable visibility scale of individual layers per single/group user": "Funzionalità: scala di visibilità dei layer per utente o gruppo",
      "Feature: Customize search/query results preview": "Funzionalità: anteprima personalizzabile dei risultati di ricerca e interrogazione",
      "Feature: Editing form based on a specific style associated with the layer": "Funzionalità: modulo di editing basato su uno stile specifico del layer",
      "Feature: Elastic Search": "Funzionalità: Elasticsearch",
      "Feature: Exporting 1:N related data associated with the parent layer": "Funzionalità: esportazione dei dati collegati al layer padre da relazioni 1:N",
      "Feature: Fields number preview and HTML support": "Funzionalità: numero di campi nell'anteprima e supporto HTML",
      "Feature: Improve editing tool related to 1:N relations": "Funzionalità: miglioramento dell'editing nelle relazioni 1:N",
      "Feature: Increased speed in preparing search form content": "Funzionalità: caricamento più rapido dei moduli di ricerca",
      "Feature: Map sharing": "Funzionalità: condivisione della mappa",
      "Feature: Permanently delete with one step": "Funzionalità: eliminazione definitiva in un solo passaggio",
      "Feature: Portuguese and Ukrainian translation": "Funzionalità: traduzione in portoghese e ucraino",
      "Feature: QGIS 3.40 LTR compatibility": "Funzionalità: compatibilità con QGIS 3.40 LTR",
      "Feature: Recallable Messages/Info": "Funzionalità: messaggi e informazioni sempre consultabili",
      "Feature: Redlining notes (annotations)": "Funzionalità: annotazioni sulla mappa",
      "Feature: Rotate features": "Funzionalità: rotazione delle geometrie",
      "Feature: Setting client session metadata visibility": "Funzionalità: configurazione della visibilità dei metadati nel client",
      "For each of them it will be possible to define size, color, transparency, labeling and more": "Per ogni elemento è possibile definire dimensioni, colore, trasparenza, etichetta e altre proprietà.",
      "For the full detail see the": "Per il dettaglio completo consulta il",
      "G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on.": "G3W-SUITE è un **progetto open source**: se puoi, sostieni il nostro lavoro con una donazione o contribuendo al codice, alla documentazione o al sito web.",
      "General": "Generale",
      "Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records) .": "I grafici basati su layer o tabelle figlie di relazioni 1:N sono visibili sia nel menu principale dei grafici sia tra gli attributi delle feature del layer padre, limitatamente ai record collegati.",
      "HTML formatting and image previews are now managed in the preview fields": "I campi dell'anteprima supportano ora la formattazione HTML e le anteprime delle immagini.",
      "If a layer being edited is the parent of one or more 1:N relations, it will be possible to select multiple parents and:": "Se un layer in modifica è il padre di una o più relazioni 1:N, è possibile selezionare più elementi padre e:",
      "It is now possible to configure the number of fields displayed in the preview of the results of a query or search.": "È ora possibile configurare il numero di campi mostrati nell'anteprima dei risultati di una ricerca o interrogazione.",
      "It is now possible to define whether these graphs should be displayed": "Ora è possibile scegliere se mostrare questi grafici:",
      "Italy": "Italia",
      "Minor improvements": "Miglioramenti minori",
      "On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client": "Dal pannello di amministrazione è possibile definire l'ordine dei grafici associati al servizio WebGIS nel pannello Grafici del client cartografico.",
      "On the Admin side, by activating the editing function on a layer, it is possible to define which default style to use when editing attributes.": "Nel pannello di amministrazione, attivando l'editing di un layer, è possibile scegliere lo stile predefinito da usare per modificare gli attributi.",
      "On the Admin side, it is now possible to associate a table/view of the QGIS project to each search field that directly reports only the unique values ??present in it.": "Nel pannello di amministrazione è ora possibile associare a ogni campo di ricerca una tabella o vista del progetto QGIS che contenga direttamente i soli valori univoci.",
      "On the Admin side, it is possible to define, for each layer of a WebGis service, a visibility scale differentiated by user and/or user groups.": "Nel pannello di amministrazione è possibile definire, per ogni layer di un servizio WebGIS, una scala di visibilità differenziata per utenti o gruppi.",
      "On the Admin side, it is possible to define, for each project layer, the number of fields shown in the preview of the results of a search and query.": "Nel pannello di amministrazione è possibile definire, per ogni layer del progetto, il numero di campi mostrati nell'anteprima dei risultati di ricerca e interrogazione.",
      "On the Admin side, when setting up a default search, it is possible to use the **IN** comparison operator, simplifying the case of searches based on the logical OR operator.": "Nel pannello di amministrazione è possibile usare l'operatore di confronto **IN** nelle ricerche predefinite, semplificando le ricerche basate sull'operatore logico OR.",
      "Quick Start": "Guida rapida",
      "Release date: **30 July 2025**": "Data di rilascio: **30 luglio 2025**",
      "Screenshot: ArcGIS": "Schermata: ArcGIS",
      "Screenshot: QGIS 340": "Schermata: QGIS 3.40",
      "Screenshot: Relation Download": "Schermata: download dei dati collegati",
      "Screenshot: Relation Download Features": "Schermata: download delle feature collegate",
      "Screenshot: Scale Visibility User": "Schermata: scala di visibilità per utente",
      "Screenshot: Search Based Table": "Schermata: ricerca basata su una tabella",
      "Searches": "Ricerche",
      "Sponsor and funder": "Sponsor e finanziatori",
      "Switzerland": "Svizzera",
      "Take advantage of all the news related to the preparation of QGIS projects with the new LTR version": "Sfrutta tutte le novità della nuova versione LTR nella preparazione dei progetti QGIS.",
      "The Messages associated with the individual WebGis services and displayed when the services are started can be recalled by the user at any time.": "I messaggi associati ai servizi WebGIS, mostrati all'apertura, possono essere richiamati in qualsiasi momento.",
      "The default searches based on **SelectBox** widget (values shown via drop-down menus) have loading times for the values to be displayed that are proportional to the number of records and unique values.": "Nelle ricerche predefinite basate sul widget **SelectBox**, che mostra i valori in un menu a tendina, i tempi di caricamento dipendono dal numero di record e di valori univoci.",
      "The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output": "Gli elementi disegnati sulla mappa possono essere condivisi insieme alle altre impostazioni del servizio WebGIS e comparire nella stampa.",
      "The feature rotation function has been added to the editing tools.": "La rotazione delle geometrie è stata aggiunta agli strumenti di editing.",
      "The message will be displayed on a resizable modal and can be consulted in overlay while continuing to interact with the various elements of the cartographic client.": "Il messaggio viene mostrato in una finestra ridimensionabile, consultabile mentre si continua a interagire con il client cartografico.",
      "The new feature works wiht or without pagination system in the results": "La funzione è disponibile sia con sia senza paginazione dei risultati.",
      "The preview now also manages HTML content": "L'anteprima supporta ora anche contenuti HTML.",
      "The rotation of point geometries is linked to the presence of a field called “**rotation**” in the attribute table, on which the direction of the symbology associated with the point is based": "La rotazione delle geometrie puntuali richiede un campo chiamato “**rotation**” nella tabella degli attributi, sul quale si basa l'orientamento della simbologia del punto.",
      "The times for preparing the form contents further increase when the search is based on multiple fields in the case that they are also associated with the **SelectBox** widget.": "I tempi aumentano ulteriormente quando la ricerca usa più campi associati al widget **SelectBox**.",
      "The tool is useful if you want to differentiate the display mode of the attributes during the consultation phase from that during the editing phase.": "Lo strumento è utile per differenziare la visualizzazione degli attributi in consultazione da quella in modifica.",
      "This possibility greatly speeds up the loading times of the contents of the user-side search form, increasing the usability of the tool.": "Questa possibilità accelera il caricamento del modulo di ricerca per l'utente, rendendo lo strumento più semplice da usare.",
      "This tool allows you to perform comprehensive searches based on a subset of the project layers, simplifying the use by the user.": "Lo strumento permette di effettuare ricerche su un insieme di layer del progetto, semplificandone l'utilizzo.",
      "This tool allows you to share the WebGis service while maintaining the customizations defined by the user, including, if present, the annotations created:": "Questo strumento permette di condividere il servizio WebGIS mantenendo le personalizzazioni dell'utente, comprese le eventuali annotazioni:",
      "Try the demo": "Prova la demo",
      "[**Elasticsearch**](https://www.elastic.co/) integration": "integrazione di [**Elasticsearch**](https://www.elastic.co/)",
      "add one or more records to the child table (only if alphanumeric) associating them with all the selected parents": "aggiungere uno o più record alla tabella figlia, solo se alfanumerica, associandoli a tutti gli elementi padre selezionati",
      "and much more.": "e molto altro.",
      "annotations": "annotazioni",
      "circle/polygonal elements": "cerchi e poligoni",
      "in both positions (default)": "in entrambe le posizioni (predefinito)",
      "layers on/off": "layer attivi o disattivi",
      "map extension": "estensione della mappa",
      "modify one or more fields of all the records of the child table, connected to the selected father geometries": "modificare uno o più campi di tutti i record della tabella figlia collegati alle geometrie padre selezionate",
      "official manual on ReadTheDocs": "manuale ufficiale su ReadTheDocs",
      "only associated with parent attributes": "solo tra gli attributi del padre",
      "only on the main chart panel": "solo nel pannello principale dei grafici",
      "open and close linear elements": "elementi lineari aperti e chiusi",
      "point elements": "elementi puntuali",
      "styles associated with the layers": "stili associati ai layer",
      "texts": "testi"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Changelog 3.10 - G3W-Suite"
  }
</script>
