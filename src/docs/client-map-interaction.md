# Map navigation and queries

[Back to Cartographic client](g3wsuite_client.md)

## Navigation and interaction with the map

### Map area

At the base of the map area there is an information bar showing:
 * **mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)
 * **project projection system**
 * **share map:** t icon to share the map bringing back various customizations
 * **display scale**

**Share map icon:** share the WebGIS service with its current extent, layer visibility, styles and annotations.
 
![Screenshot: G3wclient Footer2](/img/manual-english-g3wclient-footer2.avif)

 
### Map controls

**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**

![Icon: Navigation Tools](/img/manual-english-icon-navigation-tools.avif) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.

Map-controls available on the left side of the map:

 * ![Icon: Navigation Fitextent](/img/manual-english-icon-navigation-fitextent.avif) **`Fit to extent`:** zoom to the initial extension
 * ![Icon: Navigation Zoomin](/img/manual-english-icon-navigation-zoomin.avif) **`Zoom in and out`:** zoom in and zoom out
 * ![Icon: Navigation Zoomtobox](/img/manual-english-icon-navigation-zoomtobox.avif) **`Zoom to box`:** zoom tool based on drawing a rectangle
 * ![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))
 * ![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **`Query area`:** areal query

	In the top-left panel, choose:
   * geospatial operator
     * intersects
     * within
   * kind of geometry to draw
     * rectangle
     * polygon
     * circle, specifying the radius also manually
     * polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer 
   * layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly
 * ![Icon: Navigation Geolocation](/img/manual-english-icon-navigation-geolocation.avif) **`Geolocation`:** geolocation tool (useful for consultation from tablet)
 * ![Icon: Navigation Streetview](/img/manual-english-icon-navigation-streetview.avif) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map
 * ![Icon: Navigation Addlayer](/img/manual-english-icon-navigation-addlayer.avif) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service
 * ![Icon: Navigation Measure](/img/manual-english-icon-navigation-measure.avif) **`Measure`:** linear and areal measuring instrument
 * ![Icon: Navigation Annotations](/img/manual-english-icon-navigation-annotations.avif) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:
   * point elements
   * free linear and polygonal elements
   * circle/rectangle elements
   * text labels

Here is an example of using the annotation tool

![Screenshot: Annotations Tool](/img/manual-english-annotations-tool.avif)

Map-controls available on the bottom left corner of the map:
 * ![Icon: Navigation Zomme Lastnext](/img/manual-english-icon-navigation-zomme-lastnext.avif) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)

Map-controls available on the top left corner of the map:
  * ![Icon: Navigation Nominatim](/img/manual-english-icon-navigation-nominatim.avif) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level

[Map queries and results](client-map-queries.md)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Navigation Addlayer](/img/manual-english-icon-navigation-addlayer.avif) **`Add layer`:** tool for temporarily uploading GML, GeoJson, KML, GPX, SHP (zipped) and CSV with coordinate to WebGis, or to add a custom WMS service": "![Icona: aggiungi layer](/img/manual-english-icon-navigation-addlayer.avif) **`Aggiungi layer`:** strumento per caricare temporaneamente nel WebGIS file GML, GeoJson, KML, GPX, SHP (compressi) e CSV con coordinate, oppure per aggiungere un servizio WMS personalizzato",
    "![Icon: Navigation Annotations](/img/manual-english-icon-navigation-annotations.avif) **`Redlinining`:** tool to add annotations or drawings objects to the map. For each of them it will be possible to define size, color, transparency, labeling and more. The elements drawn on the map will be shareable together with the other settings of the WebGis service and reported in the print output. The tool permits to create this type of annotations:": "![Icona: annotazioni](/img/manual-english-icon-navigation-annotations.avif) **`Annotazioni`:** strumento per aggiungere annotazioni o disegni alla mappa. Per ciascuno è possibile definire dimensioni, colore, trasparenza, etichetta e altro. Gli elementi disegnati sulla mappa possono essere condivisi insieme alle altre impostazioni del servizio WebGIS e inclusi nella stampa. Lo strumento consente di creare i seguenti tipi di annotazioni:",
    "![Icon: Navigation Fitextent](/img/manual-english-icon-navigation-fitextent.avif) **`Fit to extent`:** zoom to the initial extension": "![Icona: adatta all’estensione](/img/manual-english-icon-navigation-fitextent.avif) **`Adatta all’estensione`:** visualizza l’estensione iniziale",
    "![Icon: Navigation Geolocation](/img/manual-english-icon-navigation-geolocation.avif) **`Geolocation`:** geolocation tool (useful for consultation from tablet)": "![Icona: geolocalizzazione](/img/manual-english-icon-navigation-geolocation.avif) **`Geolocalizzazione`:** strumento di geolocalizzazione (utile per la consultazione da tablet)",
    "![Icon: Navigation Measure](/img/manual-english-icon-navigation-measure.avif) **`Measure`:** linear and areal measuring instrument": "![Icona: misura](/img/manual-english-icon-navigation-measure.avif) **`Misura`:** strumento di misurazione lineare e areale",
    "![Icon: Navigation Nominatim](/img/manual-english-icon-navigation-nominatim.avif) **`Geocoding`:** search tools for addresses and toponyms based on OSM or Bing, based on the providers activated at the administration level": "![Icona: geocodifica](/img/manual-english-icon-navigation-nominatim.avif) **`Geocodifica`:** strumenti per cercare indirizzi e toponimi tramite OSM o Bing, in base ai provider attivati a livello di amministrazione",
    "![Icon: Navigation Query Area](/img/manual-english-icon-navigation-query-area-icon.avif) **`Query area`:** areal query": "![Icona: interrogazione per area](/img/manual-english-icon-navigation-query-area-icon.avif) **`Interrogazione per area`:** interrogazione areale",
    "![Icon: Navigation Querylayer](/img/manual-english-icon-navigation-querylayer.avif) **`Query layer`:** puntual query (all layer or only selected layer in the TOC))": "![Icona: interroga layer](/img/manual-english-icon-navigation-querylayer.avif) **`Interroga layer`:** interrogazione puntuale (tutti i layer o solo quello selezionato nella TOC)",
    "![Icon: Navigation Streetview](/img/manual-english-icon-navigation-streetview.avif) **`Streetview`:** Google StreetView on your map. Due to Google policies, StreetView it will open on a new browse tab without the aspects of synchronization with the map": "![Icona: Streetview](/img/manual-english-icon-navigation-streetview.avif) **`Streetview`:** Google StreetView sulla mappa. In base alle policy di Google, StreetView si apre in una nuova scheda del browser senza sincronizzarsi con la mappa.",
    "![Icon: Navigation Tools](/img/manual-english-icon-navigation-tools.avif) By default, most icons are collapsed; click the **Tools** icon to expand the list of available tools.": "![Icona: strumenti di navigazione](/img/manual-english-icon-navigation-tools.avif) Per impostazione predefinita, la maggior parte delle icone è compressa; fai clic sull’icona **Strumenti** per espandere l’elenco degli strumenti disponibili.",
    "![Icon: Navigation Zomme Lastnext](/img/manual-english-icon-navigation-zomme-lastnext.avif) **`Zoom last/next`:** undo/redo tools to navigate previous and post visualization areas (icons in the down-left corner)": "![Icona: zoom precedente/successivo](/img/manual-english-icon-navigation-zomme-lastnext.avif) **`Zoom precedente/successivo`:** strumenti Annulla/Ripristina per spostarsi tra le aree di visualizzazione precedenti e successive (icone nell’angolo inferiore sinistro)",
    "![Icon: Navigation Zoomin](/img/manual-english-icon-navigation-zoomin.avif) **`Zoom in and out`:** zoom in and zoom out": "![Icona: ingrandisci e riduci](/img/manual-english-icon-navigation-zoomin.avif) **`Ingrandisci e riduci`:** ingrandisce e riduce la mappa",
    "![Icon: Navigation Zoomtobox](/img/manual-english-icon-navigation-zoomtobox.avif) **`Zoom to box`:** zoom tool based on drawing a rectangle": "![Icona: zoom su riquadro](/img/manual-english-icon-navigation-zoomtobox.avif) **`Zoom su riquadro`:** strumento di zoom basato sul disegno di un rettangolo",
    "**Share map icon:** share the WebGIS service with its current extent, layer visibility, styles and annotations.": "**Icona Condividi mappa:** condividi il servizio WebGIS con estensione, visibilità dei layer, stili e annotazioni correnti.",
    "**The icons and description of the functions of the various **`MapControls`** activated at the thematic group level are shown below.**": "**Di seguito sono mostrate le icone e le descrizioni delle funzioni dei diversi **`MapControls`** attivati a livello di gruppo tematico.**",
    "**display scale**": "**scala di visualizzazione**",
    "**mouse coordinates**: coordinates can be shown in project projection system and in WGS84 LatLong (ESPG: 4326)": "**coordinate del mouse**: le coordinate possono essere visualizzate nel sistema di proiezione del progetto e in WGS84 LatLong (ESPG: 4326)",
    "**project projection system**": "**sistema di proiezione del progetto**",
    "**share map:** t icon to share the map bringing back various customizations": "**condividi mappa:** icona per condividere la mappa mantenendo le personalizzazioni",
    "At the base of the map area there is an information bar showing:": "Nella parte inferiore dell’area della mappa è presente una barra informativa che mostra:",
    "Back to Cartographic client": "Torna al client cartografico",
    "Here is an example of using the annotation tool": "Ecco un esempio di utilizzo dello strumento di annotazione.",
    "In the top-left panel, choose:": "Nel pannello in alto a sinistra, scegli:",
    "Map area": "Area della mappa",
    "Map controls": "Controlli della mappa",
    "Map navigation and queries": "Navigazione e interrogazione della mappa",
    "Map queries and results": "Interrogazioni e risultati della mappa",
    "Map-controls available on the bottom left corner of the map:": "Controlli disponibili nell’angolo inferiore sinistro della mappa:",
    "Map-controls available on the left side of the map:": "Controlli disponibili sul lato sinistro della mappa:",
    "Map-controls available on the top left corner of the map:": "Controlli disponibili nell’angolo superiore sinistro della mappa:",
    "Navigation and interaction with the map": "Navigazione e interazione con la mappa",
    "Screenshot: Annotations Tool": "Schermata: strumento di annotazione",
    "Screenshot: G3wclient Footer2": "Schermata: barra inferiore di G3wclient",
    "circle, specifying the radius also manually": "cerchio, specificando anche manualmente il raggio",
    "circle/rectangle elements": "elementi circolari o rettangolari",
    "free linear and polygonal elements": "elementi lineari e poligonali liberi",
    "geospatial operator": "l’operatore geospaziale",
    "intersects": "interseca",
    "kind of geometry to draw": "il tipo di geometria da disegnare",
    "layer/s to query, with the possibility of also querying a temporary vector layer, loaded on the fly": "i layer da interrogare, con la possibilità di interrogare anche un layer vettoriale temporaneo caricato al momento",
    "point elements": "elementi puntuali",
    "polgyon of a layer in the map: features of one or more layers that intersecting/contained a polygonal element of a guide layer": "poligono di un layer sulla mappa: elementi di uno o più layer che intersecano o sono contenuti in un elemento poligonale di un layer guida",
    "polygon": "poligono",
    "rectangle": "rettangolo",
    "text labels": "etichette testuali",
    "within": "contenuto in"
  }
}
</script>
