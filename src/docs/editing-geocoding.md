# Geocoding and map-based data entry

[Back to Online editing](g3wsuite_editing.md)

## Geocoding map control use case for populating project layers
A specific editing function is associated with the Geocoding map control.

See the dedicate paragha

In fact, it is possible to use the results deriving from the providers associated with this map control (OSM, Bing Streets, Bing Places) to populate point layers present within the webgis service.

Below are the settings and steps to perform for this purpose.

#### Activation of Geocoding map control at Cartographic Group level
First of all, **Geocoding** must be associated with the Cartographic Group by selecting it at the **Base Layers and Map default features** session level. This will ensure that the tool is present on all WebGis services published within the Group.

![Screenshot: Geocoding Providers](/img/manual-english-geocoding-providers.png)

#### Definition of the providers to use for each WebGis service
In the publication form of your QGIS project you need to define the providers to be associated with the Geocoding map control:
 * **Nominatim (OSM):** addresses based on OpenStreetMap
 * **Bing Streets:** Addresses based on Bing maps
 * **Bing Places:** places based on Bing maps (service available only for the USA)

The association is created at the **Geocoding providers** session level.

The use of the providers Bing Streets and Bing Places requires the acquisition of a free Bing API.

See [Settings](settings) section for the API key definition.

#### Using the Geocoding map control on the WebGis service
The Geocoding tool allows you to search for addresses and places (based on active providers) and view their position on the map and the associated information on the information panel on the right.

It is possible to load markers relating to multiple searches into the map.

![Screenshot: Geocoding Marker](/img/manual-english-geocoding-marker.png)

On the right of the search tool there will now be three new icons:
 * **Clear markers selection:** to delete all markers inserted on the map
 * **Toogle markers visibility:** to activate/deactivate the display of markers
 * **Toogle sidebar panel:** to view the list of markers loaded in the map and their attributes on the right panel

![Screenshot: Geocoding Icons](/img/manual-english-geocoding-icons.png)

#### Insert the markers present in the map into a vector layer
This function allows you to insert the results, obtained through the Geocoding map control, at the level of one or more layers, exclusively point-like, present in the WebGis service.

To be able to carry out this operation, the online editing functionality must be active on these layers.

Only in this case will there be a pencil icon at the search results level.

Clicking on this icon will show the list of point layers on which online editing is enabled.

After choosing the layer on which to insert the result, click on the pencil icon to the right of the layer name to determine the insertion of the point on the layer itself.

![Screenshot: Geocoding Insert](/img/manual-english-geocoding-insert.png)

On the right, the information panel will open which will show the attributes of the self-editing layer filled in only to the fields of the same name as those of the source markers.

![Screenshot: Geocoding Insert Attributes](/img/manual-english-geocoding-insert-attributes.png)

By clicking on the green **Insert/Edit** button the point will be permanently saved on the layer in use.

<script type="application/json" data-i18n>
{
  "it": {
    "**Bing Places:** places based on Bing maps (service available only for the USA)": "**Bing Places:** luoghi basati sulle mappe Bing (servizio disponibile solo negli Stati Uniti)",
    "**Bing Streets:** Addresses based on Bing maps": "**Bing Streets:** indirizzi basati sulle mappe Bing",
    "**Clear markers selection:** to delete all markers inserted on the map": "**Cancella la selezione dei segnaposto:** elimina tutti i segnaposto inseriti sulla mappa",
    "**Nominatim (OSM):** addresses based on OpenStreetMap": "**Nominatim (OSM):** indirizzi basati su OpenStreetMap",
    "**Toogle markers visibility:** to activate/deactivate the display of markers": "**Attiva/disattiva la visibilità dei segnaposto:** mostra o nasconde i segnaposto",
    "**Toogle sidebar panel:** to view the list of markers loaded in the map and their attributes on the right panel": "**Attiva/disattiva il pannello laterale:** mostra nel pannello a destra l’elenco dei segnaposto caricati sulla mappa e i relativi attributi",
    "A specific editing function is associated with the Geocoding map control.": "Al controllo di geocodifica della mappa è associata una specifica funzione di modifica.",
    "Activation of Geocoding map control at Cartographic Group level": "Attivazione del controllo di geocodifica a livello di Gruppo cartografico",
    "After choosing the layer on which to insert the result, click on the pencil icon to the right of the layer name to determine the insertion of the point on the layer itself.": "Dopo aver scelto il layer in cui inserire il risultato, fai clic sull’icona a forma di matita a destra del nome del layer per inserirvi il punto.",
    "Back to Online editing": "Torna alle modifiche online",
    "Below are the settings and steps to perform for this purpose.": "Di seguito sono descritte le impostazioni e le procedure necessarie.",
    "By clicking on the green **Insert/Edit** button the point will be permanently saved on the layer in use.": "Facendo clic sul pulsante verde **Inserisci/Modifica**, il punto verrà salvato definitivamente nel layer in uso.",
    "Clicking on this icon will show the list of point layers on which online editing is enabled.": "Facendo clic su questa icona viene mostrato l’elenco dei layer puntuali per i quali è attiva la modifica online.",
    "Definition of the providers to use for each WebGis service": "Definizione dei provider da usare per ogni servizio WebGIS",
    "First of all, **Geocoding** must be associated with the Cartographic Group by selecting it at the **Base Layers and Map default features** session level. This will ensure that the tool is present on all WebGis services published within the Group.": "Per prima cosa, è necessario associare **Geocoding** al Gruppo cartografico selezionandolo nella sezione **Layer di base e funzioni predefinite della mappa**. In questo modo lo strumento sarà disponibile in tutti i servizi WebGIS pubblicati nel gruppo.",
    "Geocoding and map-based data entry": "Geocodifica e inserimento di dati sulla mappa",
    "Geocoding map control use case for populating project layers": "Caso d’uso del controllo di geocodifica per popolare i layer del progetto",
    "In fact, it is possible to use the results deriving from the providers associated with this map control (OSM, Bing Streets, Bing Places) to populate point layers present within the webgis service.": "È infatti possibile usare i risultati ottenuti dai provider associati a questo controllo della mappa (OSM, Bing Streets, Bing Places) per popolare i layer puntuali presenti nel servizio WebGIS.",
    "In the publication form of your QGIS project you need to define the providers to be associated with the Geocoding map control:": "Nel modulo di pubblicazione del progetto QGIS occorre definire i provider da associare al controllo di geocodifica:",
    "Insert the markers present in the map into a vector layer": "Inserimento dei segnaposto della mappa in un layer vettoriale",
    "It is possible to load markers relating to multiple searches into the map.": "È possibile caricare sulla mappa i segnaposto relativi a più ricerche.",
    "On the right of the search tool there will now be three new icons:": "A destra dello strumento di ricerca sono disponibili tre nuove icone:",
    "On the right, the information panel will open which will show the attributes of the self-editing layer filled in only to the fields of the same name as those of the source markers.": "A destra si apre il pannello informativo con gli attributi del layer di destinazione compilati solo nei campi che hanno lo stesso nome di quelli dei segnaposto di origine.",
    "Only in this case will there be a pencil icon at the search results level.": "Solo in questo caso, accanto ai risultati di ricerca apparirà l’icona a forma di matita.",
    "Screenshot: Geocoding Icons": "Schermata: icone di geocodifica",
    "Screenshot: Geocoding Insert": "Schermata: inserimento tramite geocodifica",
    "Screenshot: Geocoding Insert Attributes": "Schermata: attributi per inserimento tramite geocodifica",
    "Screenshot: Geocoding Marker": "Schermata: segnaposto di geocodifica",
    "Screenshot: Geocoding Providers": "Schermata: provider di geocodifica",
    "See [Settings](settings) section for the API key definition.": "Per configurare la chiave API, consulta la sezione [Impostazioni](settings).",
    "See the dedicate paragha": "Vedi il paragrafo dedicato.",
    "The association is created at the **Geocoding providers** session level.": "L’associazione viene configurata nella sezione **Provider di geocodifica**.",
    "The Geocoding tool allows you to search for addresses and places (based on active providers) and view their position on the map and the associated information on the information panel on the right.": "Lo strumento di geocodifica consente di cercare indirizzi e luoghi tramite i provider attivi e di visualizzarne la posizione sulla mappa e le informazioni associate nel pannello a destra.",
    "The use of the providers Bing Streets and Bing Places requires the acquisition of a free Bing API.": "Per usare i provider Bing Streets e Bing Places è necessario ottenere una Bing API gratuita.",
    "This function allows you to insert the results, obtained through the Geocoding map control, at the level of one or more layers, exclusively point-like, present in the WebGis service.": "Questa funzione consente di inserire i risultati ottenuti tramite il controllo di geocodifica in uno o più layer puntuali presenti nel servizio WebGIS.",
    "To be able to carry out this operation, the online editing functionality must be active on these layers.": "Per eseguire questa operazione, la funzione di modifica online deve essere attiva su questi layer.",
    "Using the Geocoding map control on the WebGis service": "Uso del controllo di geocodifica nel servizio WebGIS"
  }
}
</script>
