# Changelog G3W-Suite 3.8

Release date: **17 June 2024**

{{#en}}By{{/en}}{{#it}}A cura di{{/it}} [Francesco Boccacci](/en/about/francesco-boccacci/) • [Leonardo Lami](/en/about/leonardo-lami/) • [Matteo Tosi](/en/about/matteo-tosi/) • [Walter Lorenzetti](/en/about/walter-lorenzetti/)

## Changelog for G3W-SUITE 3.8

**G3W-SUITE 3.8 is characterized by refactoring work relating to the management aspects of the tools, the visualization of tabular data and the aspects of coherence in saving the changes made in editing in the case of 1:N cascade relations.**

Furthermore, the version features these important new features:

- **QGIS 3.34 LTR** compatibility
- the possibility to **hide layers** from the TOC
- the possibility for the **logged user** to create/save **customized themes** as in **QGIS**
- export the map also in **SVG and GeoPDF format** by defining c**ustom scale and DPI values**
- **multigeometric layer editing management**
- **download attribute** of a layer in **PDF** format

### **We hope you enjoy this great work!**

### **Happy mapping with G3W-SUITE!**

## Sponsor and funder

{{#en}}

Open source project · Gis3W [main sponsor](/en/sponsors/).

{{/en}}{{#it}}

G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on. Among the **main funder of this version** we remember:

{{/it}}

<div class="changelog-sponsors">
  <div class="changelog-sponsor-card">
    <img src="/img/site-qmap-logo.png" alt="QMAP" loading="lazy">
    <div class="sponsor-name"><a href="https://qmap.ro/" target="_blank" rel="noopener noreferrer">QMAP</a></div>
  </div>
  <div class="changelog-sponsor-card">
    <img src="/img/site-bonifica-renana-logo.jpg" alt="{{t 'Reno Reclamation Consortium'}}" loading="lazy">
    <div class="sponsor-name"><a href="https://www.bonificarenana.it" target="_blank" rel="noopener noreferrer">{{t 'Reno Reclamation Consortium'}}</a></div>
  </div>
  <div class="changelog-sponsor-card">
    <div class="sponsor-name">SC FOCA MANAGEMENT PARTNERS SRL</div>
  </div>
</div>

## General

### Feature: QGIS 3.34 LTR compatibility

**G3W-SUITE 3.8 is compatible with the new 3.34 LTR of QGIS**

Take advantage of all the news related to the preparation of QGIS projects with the new LTR version

<img src="/img/site-qgis-3-34.png" alt="{{t 'Screenshot: QGIS 3 34'}}" loading="lazy">

## Administration

### Feature: Cartographic Groups filters**  **

The list of Cartographic Groups can be filtered based on:

- the MacroGroup to which they belong
- the associated EPSG
- the different types of users (Editor, Editor and Viewer) associated with them

The options of this last filter vary based on the type of logged in user

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/s1pFPlCj7P0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Hide layers in the TOC**  **

It is now possible to hide one or more layers from the TOC, still continuing to view it on the map or make it available for searches, aspects related to editing and other functions

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/hXRppHISpyc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Download attributes of a feature in PDF format

It is possible to allow the download, in PDF format, of the attributes of the geometries displayed following queries or searches.

There are limitations related to the structure of the customized form

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9zba2gbRuIc" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## QGIS Server API

### Feature: OGC API - Feature (WFS3)

G3W-SUITE exposes the service managed by QGIS Server

For more information:

[https://docs.qgis.org/3.34/en/docs/server_manual/services/ogcapif.html](https://docs.qgis.org/3.34/en/docs/server_manual/services/ogcapif.html)

<img src="/img/site-wfs3.png" alt="{{t 'Screenshot: Wfs3'}}" loading="lazy">

## Cartographic client and interaction with the map

### Feature: Custom users themes

Logged users can create their own themes (combination of on/off layers) and save them for future use as in QGIS.

The styles associated with individual layers are also managed within themes.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/tJNYevgsiFQ" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

## Editing on line

### Feature: 1:N cascade relations editing

The editing flow relating to the management of 1:N cascade relations has been completely revisited to ensure greater robustness and manage the various possible cases.

In the case of 1:N cascading vector-type relations, a new method (copy features from another layer) has been added to the manual creation of new children features of the relation.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dOI4Ulnqjuw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: AddPart tool

As in QGIS, the AddPart tool also allows the creation/association of geometry to records, of geometric layers, which do not have them

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VVLaZgjSXN8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Multigeometric layer editing

It is possible to easily manage multigeometric layers by associating different types of geometries with the individual records of the layer

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VVLaZgjSXN8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Start editing from the attribute table

In the case of an editable layer, it is possible to start editing the individual features directly from the attribute table.

It is also possible to easily switch from displaying data in a table to that in an extended form and vice versa.

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9E96LmGolW0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Attribute type field constraints

The recognition of field types (integer, double, text…) allows you to avoid entering incorrect values on the various fields in order to avoid errors when saving

<img src="/img/site-field-type-constraints.png" alt="{{t 'Screenshot: Field Type Constraints'}}" loading="lazy">

## Print

### Feature: New print formats

With this version it is also possible to export prints to **JPG**, **SVG** and **GeoPDF**

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8zr4TCzKdV8" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Custom scale and DPI

The user can manually define the scale and DPI values for the the print outputs

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lwEZdJUGjl4" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

### Feature: Print layout exclusion

**Eredited from QGIS projects**

If on the QGIS project I exclude a print layout from those available in the WMS service, this is excluded also from the WebGis service

<img src="/img/site-exclude-map-layouts.png" alt="{{t 'Screenshot: Exclude Map Layouts'}}" loading="lazy">

## FrontEnd

### Feature: List of GC services associated with published services

For each published WebGis service, the associated OGC services can be consulted

<img src="/img/site-frontend-ogc.png" alt="{{t 'Screenshot: Frontend OGC'}}" loading="lazy">

## Minor improvements

### Feature: WFS query on embedded layer

WFS queries (QueryByBox, QueryByPolyon and QueryByDrawPolygon) are extended to layers deriving from embedded projects

<div class="video-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/E5Y2ABZDa5w" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>
</div>

<div class="cta-box">
  <p>{{t 'For the full detail see the'}} <a href="https://g3w-suite.readthedocs.io" target="_blank" rel="noopener">{{t 'official manual on ReadTheDocs'}}</a>.</p>
  <div class="btn-group">
    <a class="btn btn--primary" href="/{{t 'en'}}/about/#demo-3-11">{{t 'Try the current demo'}}</a>
    <a class="btn btn--outline" href="{{#it}}/it/docs/quick-start/{{/it}}{{#en}}/docs/quick-start/{{/en}}">{{t 'Quick Start'}}</a>
  </div>
</div>

<script type="application/json" data-i18n>
  {
    "it": {
      "**Eredited from QGIS projects**": "**Ereditato dai progetti QGIS**",
      "**G3W-SUITE 3.8 is characterized by refactoring work relating to the management aspects of the tools, the visualization of tabular data and the aspects of coherence in saving the changes made in editing in the case of 1:N cascade relations.**": "**G3W-SUITE 3.8 introduce un lavoro di refactoring sulla gestione degli strumenti, sulla visualizzazione dei dati tabellari e sulla coerenza del salvataggio delle modifiche nelle relazioni 1:N in cascata.**",
      "**G3W-SUITE 3.8 is compatible with the new 3.34 LTR of QGIS**": "**G3W-SUITE 3.8 è compatibile con la nuova versione LTR 3.34 di QGIS**",
      "**Happy mapping with G3W-SUITE!**": "**Buon lavoro con le mappe di G3W-SUITE!**",
      "**QGIS 3.34 LTR** compatibility": "compatibilità con **QGIS 3.34 LTR**",
      "**We hope you enjoy this great work!**": "**Speriamo che questo lavoro vi piaccia!**",
      "**download attribute** of a layer in **PDF** format": "**download degli attributi** di un layer in formato **PDF**",
      "**multigeometric layer editing management**": "**gestione dell'editing dei layer multigeometria**",
      "Administration": "Amministrazione",
      "As in QGIS, the AddPart tool also allows the creation/association of geometry to records, of geometric layers, which do not have them": "Come in QGIS, lo strumento AddPart permette di creare o associare una geometria ai record dei layer geometrici che ne sono privi.",
      "Cartographic client and interaction with the map": "Client cartografico e interazione con la mappa",
      "Changelog 3.8 - G3W-Suite": "Changelog 3.8 - G3W-Suite",
      "Changelog for G3W-SUITE 3.8": "Novità di G3W-SUITE 3.8",
      "Editing on line": "Editing online",
      "Feature: 1:N cascade relations editing": "Funzionalità: modifica delle relazioni 1:N in cascata",
      "Feature: AddPart tool": "Funzionalità: strumento AddPart",
      "Feature: Attribute type field constraints": "Funzionalità: vincoli sul tipo di campo",
      "Feature: Cartographic Groups filters**  **": "Funzionalità: filtri dei gruppi cartografici**  **",
      "Feature: Custom scale and DPI": "Funzionalità: scala e DPI personalizzati",
      "Feature: Custom users themes": "Funzionalità: temi personalizzati degli utenti",
      "Feature: Download attributes of a feature in PDF format": "Funzionalità: download degli attributi di una feature in PDF",
      "Feature: Hide layers in the TOC**  **": "Funzionalità: nascondere i layer nella legenda**  **",
      "Feature: List of GC services associated with published services": "Funzionalità: elenco dei servizi OGC associati ai servizi pubblicati",
      "Feature: Multigeometric layer editing": "Funzionalità: editing dei layer multigeometria",
      "Feature: New print formats": "Funzionalità: nuovi formati di stampa",
      "Feature: OGC API - Feature (WFS3)": "Funzionalità: OGC API - Feature (WFS3)",
      "Feature: Print layout exclusion": "Funzionalità: esclusione dei layout di stampa",
      "Feature: QGIS 3.34 LTR compatibility": "Funzionalità: compatibilità con QGIS 3.34 LTR",
      "Feature: Start editing from the attribute table": "Funzionalità: avvio dell'editing dalla tabella degli attributi",
      "Feature: WFS query on embedded layer": "Funzionalità: interrogazione WFS su layer incorporati",
      "For each published WebGis service, the associated OGC services can be consulted": "Per ogni servizio WebGIS pubblicato è possibile consultare i servizi OGC associati.",
      "For more information:": "Per maggiori informazioni:",
      "For the full detail see the": "Per il dettaglio completo consulta il",
      "FrontEnd": "Interfaccia web",
      "Furthermore, the version features these important new features:": "La versione introduce inoltre queste importanti novità:",
      "G3W-SUITE exposes the service managed by QGIS Server": "G3W-SUITE espone il servizio gestito da QGIS Server.",
      "G3W-SUITE is an **open source project** and if you are able to, consider supporting our work through donations or contributions to the code documentation, web site and so on. Among the **main funder of this version** we remember:": "G3W-SUITE è un **progetto open source**: se puoi, sostieni il nostro lavoro con una donazione o contribuendo al codice, alla documentazione o al sito web. Tra i **principali finanziatori di questa versione** ricordiamo:",
      "General": "Generale",
      "If on the QGIS project I exclude a print layout from those available in the WMS service, this is excluded also from the WebGis service": "Se nel progetto QGIS un layout di stampa è escluso da quelli disponibili nel servizio WMS, sarà escluso anche dal servizio WebGIS.",
      "In the case of 1:N cascading vector-type relations, a new method (copy features from another layer) has been added to the manual creation of new children features of the relation.": "Per le relazioni 1:N vettoriali in cascata, alla creazione manuale di nuove feature figlie si aggiunge la possibilità di copiarle da un altro layer.",
      "In the case of an editable layer, it is possible to start editing the individual features directly from the attribute table.": "Per un layer modificabile è possibile avviare l'editing delle singole feature direttamente dalla tabella degli attributi.",
      "It is also possible to easily switch from displaying data in a table to that in an extended form and vice versa.": "È inoltre possibile passare facilmente dalla visualizzazione dei dati in tabella a quella in un modulo esteso e viceversa.",
      "It is now possible to hide one or more layers from the TOC, still continuing to view it on the map or make it available for searches, aspects related to editing and other functions": "È ora possibile nascondere uno o più layer dalla legenda, mantenendoli visibili sulla mappa o disponibili per ricerche, editing e altre funzioni.",
      "It is possible to allow the download, in PDF format, of the attributes of the geometries displayed following queries or searches.": "È possibile consentire il download in PDF degli attributi delle geometrie visualizzate dopo una ricerca o interrogazione.",
      "It is possible to easily manage multigeometric layers by associating different types of geometries with the individual records of the layer": "È possibile gestire facilmente i layer multigeometria, associando tipi di geometria diversi ai singoli record.",
      "Logged users can create their own themes (combination of on/off layers) and save them for future use as in QGIS.": "Gli utenti autenticati possono creare temi personali, combinando layer attivi e disattivi, e salvarli per utilizzarli in seguito, come in QGIS.",
      "Minor improvements": "Miglioramenti minori",
      "Print": "Stampa",
      "Quick Start": "Guida rapida",
      "Release date: **17 June 2024**": "Data di rilascio: **17 giugno 2024**",
      "Reno Reclamation Consortium": "Consorzio della Bonifica Renana",
      "Screenshot: Exclude Map Layouts": "Schermata: esclusione dei layout di stampa",
      "Screenshot: Field Type Constraints": "Schermata: vincoli sul tipo di campo",
      "Screenshot: Frontend OGC": "Schermata: servizi OGC nell'interfaccia web",
      "Screenshot: QGIS 3 34": "Schermata: QGIS 3.34",
      "Screenshot: Wfs3": "Schermata: WFS3",
      "Sponsor and funder": "Sponsor e finanziatori",
      "Take advantage of all the news related to the preparation of QGIS projects with the new LTR version": "Sfrutta tutte le novità della nuova versione LTR nella preparazione dei progetti QGIS.",
      "The editing flow relating to the management of 1:N cascade relations has been completely revisited to ensure greater robustness and manage the various possible cases.": "Il flusso di editing delle relazioni 1:N in cascata è stato rivisto per renderlo più robusto e gestire i diversi casi possibili.",
      "The list of Cartographic Groups can be filtered based on:": "L'elenco dei gruppi cartografici può essere filtrato in base a:",
      "The options of this last filter vary based on the type of logged in user": "Le opzioni di quest'ultimo filtro variano in base al tipo di utente autenticato.",
      "The recognition of field types (integer, double, text…) allows you to avoid entering incorrect values on the various fields in order to avoid errors when saving": "Il riconoscimento del tipo di campo (intero, decimale, testo…) evita l'inserimento di valori non corretti e previene errori durante il salvataggio.",
      "The styles associated with individual layers are also managed within themes.": "I temi comprendono anche gli stili associati ai singoli layer.",
      "The user can manually define the scale and DPI values for the the print outputs": "L'utente può definire manualmente la scala e i DPI per la stampa.",
      "There are limitations related to the structure of the customized form": "Sono presenti limitazioni legate alla struttura del modulo personalizzato.",
      "Try the current demo": "Prova la demo attuale",
      "WFS queries (QueryByBox, QueryByPolyon and QueryByDrawPolygon) are extended to layers deriving from embedded projects": "Le interrogazioni WFS (QueryByBox, QueryByPolyon e QueryByDrawPolygon) sono estese ai layer provenienti da progetti incorporati.",
      "With this version it is also possible to export prints to **JPG**, **SVG** and **GeoPDF**": "Con questa versione è inoltre possibile esportare le stampe in **JPG**, **SVG** e **GeoPDF**.",
      "en": "it",
      "export the map also in **SVG and GeoPDF format** by defining c**ustom scale and DPI values**": "esportazione della mappa anche in **formato SVG e GeoPDF**, con **scala e DPI personalizzati**",
      "official manual on ReadTheDocs": "manuale ufficiale su ReadTheDocs",
      "the MacroGroup to which they belong": "il macrogruppo di appartenenza",
      "the associated EPSG": "l'EPSG associato",
      "the different types of users (Editor, Editor and Viewer) associated with them": "i tipi di utenti associati (Editor, Editor e Viewer)",
      "the possibility for the **logged user** to create/save **customized themes** as in **QGIS**": "possibilità per gli **utenti autenticati** di creare e salvare **temi personalizzati**, come in **QGIS**",
      "the possibility to **hide layers** from the TOC": "possibilità di **nascondere i layer** dalla legenda"
    }
  }
</script>

<script type="application/json" data-i18n-meta>
  {
    "title": "Changelog 3.8 - G3W-Suite"
  }
</script>
