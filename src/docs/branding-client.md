# Client appearance and customization

[Back to Branding](branding.md)

## G3WSUITE_CUSTOM_CSS

The custom css setting is a string that represents the path to a custom css file that will be loaded in the suite. The path is relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting:

```python
G3WSUITE_CUSTOM_CSS = [
    G3WSUITE_CUSTOM_STATIC_URL +'css/custom.css'
]
```

This custom css can be used to override some default suite css settings and allows for some great customization.

#### Example: remove sections form the main webgis view

Somethimes you do not need the metadata, print, bookmarks section:

![Screenshot: Branding 11 Css Remove Off](/img/manual-english-branding-11-css-remove-off.avif)

Assume you want to remove everyting but the layer view. This can be done by adding the following css to the custom css file:

```css
/* remove the metadata section */
#metadata {
    display: none !important;
}
/* remove the bookmarks section */
#spatialbookmarks {
    display: none !important;
}
/* remove the search section */
#search {
    display: none !important;
}
/* remove the print section */
#print {
    display: none !important;
}
/* remove the "CHOOSE THEME" section */
#g3w-catalog-toc-layers-toolbar {
    display: none !important;
}
```

This results in the following view:

![Screenshot: Branding 12 Css Remove On](/img/manual-english-branding-12-css-remove-on.avif)


The same goes for most of the elements you can check out with the browser's inspector.

Do you want to remove the bottom map logo?

![Logo: Branding 14 Css Map On](/img/manual-english-branding-14-css-map-logo-on.avif)

Then add the following css to the custom css file:

```css
#map_footer_left img{
    display: none !important;
}
```

This will remove the bottom map logo:

![Logo: Branding 15 Css Map Off](/img/manual-english-branding-15-css-map-logo-off.avif)

#### Example: change the skin color

To change the skin color of the suite, you can add the following css to the custom css file:

```css
:root {
    --skin-h: 0;
    --skin-s: 100%;
    --skin-l: 48%;
    --skin-color: hsl(var(--skin-h), var(--skin-s), var(--skin-l));
}
```

This will change the skin color to red (HSL values tested prior in [inkscape](https://inkscape.org/)).

![Screenshot: Branding 13 Css Skin](/img/manual-english-branding-13-css-skin.avif)


### G3W_CLIENT_SEARCH_TITLE

The search section title in the webgis client can be customized by setting the following line in the ```local_settings.py``` file:

```python
G3W_CLIENT_SEARCH_TITLE = "Search for the Holy Grail"
```

This will help user to search for the Holy Grail:

![Screenshot: Branding 17 Search Title](/img/manual-english-branding-17-search-title.avif)

### G3W_CLIENT_HEADER_CUSTOM_LINKS

The header custom links setting is a list of dictionaries that represent links that will be shown in the top bar of the webgis client. Each dictionary creates a new button,
using the icon and as tooltip the title of the dictionary. 

There can be two type of links, **url** and **modal**. The **url** type opens a new tab using the url provided in the dictionary, while the **modal** type opens a modal dialog containing the content provided in the dictionary.

```python
G3W_CLIENT_HEADER_CUSTOM_LINKS = [
    {
        'url': 'https://gis3w.it',
        'title': 'Gis3W company',
        'i18n': True,
        'target': '_blank',
        'img': 'https://gis3w.it/wp-content/uploads/2016/10/logo_qgis-1-100x100.png?x22227'
    },
    {
        "title": "Firefox me!",
        "content": "<div style='position: fixed; top: 10vh; left: 50%; transform: translateX(-50%); background: white; width: 60%; max-width: 600px; min-height: 200px; max-height: 80vh; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); text-align: center; overflow: auto;'><img src='https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Firefox-logos-and-brands-those-icons-flat-those-icons.png' style='width: 50px; margin-bottom: 10px;' /><p>Html example content to show in modal</p></div>",
        "type": "modal",
        "position": 10,
        "img": "https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Firefox-logos-and-brands-those-icons-flat-those-icons.png"
    },
]
```

The **i18n** key is used to translate the title of the link. If set to True, the title will be translated (if possible) using the suite's translation system.

The above example creates changes the top bar from:

![Screenshot: Branding 05 Header Links Off](/img/manual-english-branding-05-header-links-off.avif)

to:

![Screenshot: Branding 06 Header Links On](/img/manual-english-branding-06-header-links-on.avif)

While ths first link opens a new tab with the Gis3W company website, the second link opens a modal dialog like this:

![Screenshot: Branding 07 Header Links Click](/img/manual-english-branding-07-header-links-click.avif)


### G3W_CLIENT_RIGHT_PANEL

The right panel width can be set with the following setting:

```python
G3W_CLIENT_RIGHT_PANEL = {
    'width': 50
}
```

The width is the percentage of the map view that will be dedicated to the right panel. 


### G3W_CLIENT_LEGEND

Customize the WebGIS client legend with these settings:

```python
G3W_CLIENT_LEGEND = {
    "layerfontsize": 20, # layer title font size
    "itemfontsize": 16, # legend rules font size
    'color': 'black', # all text font color
    'transparent': False, # if false, makes a white background
    'boxspace': 10,  # insets around legend
    "layerspace": 8, # space between layers
    'layertitlespace': 4, # space between layer title and rules
    'symbolspace': 4, # spacing between rules
    'iconlabelspace': 5, # spacing between icon and rule name
    'symbolwidth': 18, # width of the icon
    'symbolheight': 4,  # height of the icon
    "showfeaturecount": True  # show the number of features in the legend
}
```

This would change the legend from:

![Screenshot: Branding 19 Legend Off](/img/manual-english-branding-19-legend-off.avif)

to:


![Screenshot: Branding 18 Legend](/img/manual-english-branding-18-legend.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "Assume you want to remove everyting but the layer view. This can be done by adding the following css to the custom css file:": "Per rimuovere tutto tranne la vista dei layer, aggiungi il CSS seguente al file CSS personalizzato:",
    "Back to Branding": "Torna alla personalizzazione",
    "Client appearance and customization": "Aspetto e personalizzazione del client",
    "Customize the WebGIS client legend with these settings:": "Personalizza la legenda del client WebGIS con queste impostazioni:",
    "Do you want to remove the bottom map logo?": "Vuoi rimuovere il logo in fondo alla mappa?",
    "Example: change the skin color": "Esempio: cambiare il colore del tema",
    "Example: remove sections form the main webgis view": "Esempio: rimuovere sezioni dalla vista principale del WebGIS",
    "G3WSUITE_CUSTOM_CSS": "G3WSUITE_CUSTOM_CSS",
    "G3WSUITE_CUSTOM_STATIC_URL": "G3WSUITE_CUSTOM_STATIC_URL",
    "G3W_CLIENT_HEADER_CUSTOM_LINKS": "G3W_CLIENT_HEADER_CUSTOM_LINKS",
    "G3W_CLIENT_LEGEND": "G3W_CLIENT_LEGEND",
    "G3W_CLIENT_RIGHT_PANEL": "G3W_CLIENT_RIGHT_PANEL",
    "G3W_CLIENT_SEARCH_TITLE": "G3W_CLIENT_SEARCH_TITLE",
    "Logo: Branding 14 Css Map On": "Logo: branding 14, logo della mappa CSS attivo",
    "Logo: Branding 15 Css Map Off": "Logo: branding 15, logo della mappa CSS disattivato",
    "Screenshot: Branding 05 Header Links Off": "Schermata: branding 05, link nell'intestazione disattivati",
    "Screenshot: Branding 06 Header Links On": "Schermata: branding 06, link nell'intestazione attivati",
    "Screenshot: Branding 07 Header Links Click": "Schermata: branding 07, clic sui link nell'intestazione",
    "Screenshot: Branding 11 Css Remove Off": "Schermata: branding 11, rimozione CSS disattivata",
    "Screenshot: Branding 12 Css Remove On": "Schermata: branding 12, rimozione CSS attivata",
    "Screenshot: Branding 13 Css Skin": "Schermata: branding 13, tema CSS",
    "Screenshot: Branding 17 Search Title": "Schermata: branding 17, titolo della ricerca",
    "Screenshot: Branding 18 Legend": "Schermata: branding 18, legenda",
    "Screenshot: Branding 19 Legend Off": "Schermata: branding 19, legenda disattivata",
    "Somethimes you do not need the metadata, print, bookmarks section:": "A volte non sono necessarie le sezioni dei metadati, della stampa e dei segnalibri:",
    "The **i18n** key is used to translate the title of the link. If set to True, the title will be translated (if possible) using the suite's translation system.": "La chiave **i18n** serve a tradurre il titolo del collegamento. Se impostata su True, il titolo verrà tradotto, se possibile, tramite il sistema di traduzione della suite.",
    "The above example creates changes the top bar from:": "L'esempio precedente modifica la barra superiore nel modo seguente:",
    "The custom css setting is a string that represents the path to a custom css file that will be loaded in the suite. The path is relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting:": "L'impostazione CSS personalizzata è una stringa che rappresenta il percorso del file CSS personalizzato da caricare nella suite. Il percorso è relativo all'impostazione **G3WSUITE_CUSTOM_STATIC_URL**:",
    "The header custom links setting is a list of dictionaries that represent links that will be shown in the top bar of the webgis client. Each dictionary creates a new button,": "L'impostazione dei collegamenti personalizzati nell'intestazione è un elenco di dizionari che rappresentano i link mostrati nella barra superiore del client WebGIS. Ogni dizionario crea un nuovo pulsante,",
    "The right panel width can be set with the following setting:": "La larghezza del pannello destro può essere impostata con la configurazione seguente:",
    "The same goes for most of the elements you can check out with the browser's inspector.": "Lo stesso vale per la maggior parte degli elementi che puoi esaminare con gli strumenti di sviluppo del browser.",
    "The search section title in the webgis client can be customized by setting the following line in the ```local_settings.py``` file:": "Il titolo della sezione di ricerca nel client WebGIS può essere personalizzato impostando la riga seguente nel file ```local_settings.py```:",
    "The width is the percentage of the map view that will be dedicated to the right panel.": "La larghezza indica la percentuale della vista della mappa riservata al pannello destro.",
    "Then add the following css to the custom css file:": "Aggiungi quindi il CSS seguente al file CSS personalizzato:",
    "There can be two type of links, **url** and **modal**. The **url** type opens a new tab using the url provided in the dictionary, while the **modal** type opens a modal dialog containing the content provided in the dictionary.": "Sono disponibili due tipi di collegamenti: **url** e **modal**. Il tipo **url** apre una nuova scheda usando l'URL specificato nel dizionario, mentre il tipo **modal** apre una finestra di dialogo modale contenente il contenuto definito nel dizionario.",
    "This custom css can be used to override some default suite css settings and allows for some great customization.": "Questo CSS personalizzato consente di sovrascrivere alcune impostazioni CSS predefinite della suite e di personalizzarne l'aspetto.",
    "This results in the following view:": "Il risultato è la vista seguente:",
    "This will change the skin color to red (HSL values tested prior in [inkscape](https://inkscape.org/)).": "Il colore del tema diventerà rosso (valori HSL testati in precedenza con [Inkscape](https://inkscape.org/)).",
    "This will help user to search for the Holy Grail:": "In questo modo si aiuteranno gli utenti a cercare il Santo Graal:",
    "This will remove the bottom map logo:": "In questo modo verrà rimosso il logo in fondo alla mappa:",
    "This would change the legend from:": "La legenda passerà da:",
    "To change the skin color of the suite, you can add the following css to the custom css file:": "Per cambiare il colore del tema della suite, puoi aggiungere il CSS seguente al file CSS personalizzato:",
    "While ths first link opens a new tab with the Gis3W company website, the second link opens a modal dialog like this:": "Il primo collegamento apre una nuova scheda con il sito web di Gis3W, mentre il secondo apre una finestra modale come questa:",
    "to": "a",
    "to:": "a:",
    "using the icon and as tooltip the title of the dictionary.": "che utilizza l'icona e il titolo del dizionario come descrizione al passaggio del mouse."
  }
}
</script>
