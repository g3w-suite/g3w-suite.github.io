# Appearance settings

## General layout settings

### `G3WSUITE_POWERD_BY`
Default is `True`, set to `False` for don't show bottom `attribution` informations.

### `G3WSUITE_CUSTOM_STATIC_URL`
A custom url from to load custom static files as images, css, etc..

### `G3WSUITE_MAIN_LOGO`
Main admin section logo image.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`

### `G3WSUITE_RID_LOGO`
Main admin section reduced logo image.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`

### `G3WSUITE_LOGIN_LOGO`
Login logo image.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`

### `G3WSUITE_CUSTOM_TITLE`
**G3W-SUITE** html page title.
If is not set, title is: `g3w-admin` for admin section and `g3w-client` for webgis client.

### `G3WSUITE_FAVICON`
Favorite icon image.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`

### `G3WSUITE_CUSTOM_CSS`
A list of custom css files added to `admin` pages and to the `client`.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`.
I.e.

~~~
G3WSUITE_CUSTOM_CSS = [
    G3WSUITE_CUSTOM_STATIC_URL +'css/custom.css'
]
~~~

### `G3WSUITE_CUSTOM_JS`
A list of custom js files added to `admin` pages and to the `client`.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`.
I.e.

~~~
G3WSUITE_CUSTOM_JS = [
    G3WSUITE_CUSTOM_STATIC_URL +'js/custom.js'
]
~~~

## Client layout settings

### `G3W_CLIENT_SEARCH_TITLE`
Custom webgis client `search` section title.

### `G3W_CLIENT_SEARCH_ENDPOINT`
Search url endpoint for 'searches calling', default `ows`.
 - `ows`: by wms search;
 - `api`: by g3w-suite layer vector API.

### `G3W_CLIENT_HEADER_CUSTOM_LINKS`
A list of dict of custom links to add into main top bar of webgis client.
I.e.

~~~
~~~

   G3W_CLIENT_HEADER_CUSTOM_LINKS = [
        {
            'url': 'https://gis3w.it',
            'title': 'Gis3W company',
            'i18n': True, #(False as default value)
            'target': '_blank'
            'img': 'https://gis3w.it/wp-content/uploads/2016/10/logo_qgis-1-100x100.png?x22227'
        },
        {
           'title': 'Modal 1',
           'content': '<p>Html example content to show in modal</p>',
           'type': 'modal',
           'position': 10
       },
   ]

`i18n` (optional) set True if you want lent client try to translate title.

### `G3W_CLIENT_LEGEND`
A dict to customize **QGIS-server** legend image generate with WMS `GetLegendGraphics` request.
I.e.

~~~
G3W_CLIENT_LEGEND = {
   'color': 'red',
   'fontsize': 8,
   'transparent': True,
   'boxspace': 4,
   'layerspace': 4,
   'layertitle': True,
   'layertitlespace': 4,
   'symbolspace': None,
   'iconlabelspace': 2,
   'symbolwidth': 8,
   'symbolheight': 4
}
~~~

### `G3W_CLIENT_RIGHT_PANEL`
Custom properties settings for webgis right panel section (default, width 33%).
A the moment only `width` is managed.
I.e.

~~~
G3W_CLIENT_RIGHT_PANEL = {
    'width': 33
}
~~~

### `G3W_CLIENT_NOT_SHOW_EMPTY_VECTORLAYER`
Default is `False`. Set to `True` for remove from webgis TOC vector layer empty, without data.

### `GEOCONDING_PROVIDERS`
Set the geocoding providers available for webgis services:
~~~
GEOCODING_PROVIDERS = {
  "nominatim": {
    "label": "Nominatim (OSM)",
    "url": "https://nominatim.openstreetmap.org/search"
  },
}
~~~

You can also add custom providers (or edit the existing ones within `static/client/geocoding-providers` folder), just remember to use javascript file name as "provider" identifier:

~~~
https://dev.g3wsuite.it/static/client/geocoding-providers/nominatim.js
https://dev.g3wsuite.it/static/client/geocoding-providers/bing_streets.js
https://dev.g3wsuite.it/static/client/geocoding-providers/bing_places.js
https://dev.g3wsuite.it/static/client/geocoding-providers/your_custom_provider.js
~~~

~~~
VENDOR_KEYS['bing'] = 'bing.secret.key'

GEOCODING_PROVIDERS = {
 "nominatim": {
   "label": "Nominatim (OSM)",
   "url": "https://nominatim.openstreetmap.org/search",
   # "icon": "road",
 },
 "bing_streets": {
    "label": "Bing Streets",
    "url": "https://dev.virtualearth.net/REST/v1/Locations/?key=" + VENDOR_KEYS['bing'],
    # "icon": "road",
  },
 "bing_places": {
    "label": "Bing Places",
    "url": "https://dev.virtualearth.net/REST/v1/LocalSearch/?key=" + VENDOR_KEYS['bing'],
    # "icon": "poi",
  },
  "your_custom_provider": {
    "label": "Custom Provider",
    "url": "url": "https://your-custom-server.com/Search/?key=super.secret.key",
    "icon": "poi",
  },
}
~~~

NB: for more info see: `Getting a Bing maps key <https://learn.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key>`

<script type="application/json" data-i18n>
  {
    "it": {
      "**G3W-SUITE** html page title.": "Titolo della pagina HTML di **G3W-SUITE**.",
      "A custom url from to load custom static files as images, css, etc..": "URL personalizzato da cui caricare file statici personalizzati, come immagini, CSS ecc.",
      "A dict to customize **QGIS-server** legend image generate with WMS `GetLegendGraphics` request.": "Dizionario per personalizzare l'immagine della legenda di **QGIS Server**, generata con una richiesta WMS `GetLegendGraphics`.",
      "A list of custom css files added to `admin` pages and to the `client`.": "Elenco di file CSS personalizzati aggiunti alle pagine `admin` e al `client`.",
      "A list of custom js files added to `admin` pages and to the `client`.": "Elenco di file JavaScript personalizzati aggiunti alle pagine `admin` e al `client`.",
      "A list of dict of custom links to add into main top bar of webgis client.": "Elenco di dizionari con link personalizzati da aggiungere alla barra superiore principale del client WebGIS.",
      "A the moment only `width` is managed.": "Al momento è gestito solo `width`.",
      "Appearance settings": "Impostazioni grafiche",
      "Client layout settings": "Impostazioni del layout del client",
      "Custom properties settings for webgis right panel section (default, width 33%).": "Impostazioni personalizzate delle proprietà del pannello destro del WebGIS (larghezza predefinita: 33%).",
      "Custom webgis client `search` section title.": "Titolo personalizzato della sezione `search` del client WebGIS.",
      "Default is `False`. Set to `True` for remove from webgis TOC vector layer empty, without data.": "Il valore predefinito è `False`. Impostare `True` per rimuovere dal TOC del WebGIS i layer vettoriali vuoti, privi di dati.",
      "Default is `True`, set to `False` for don't show bottom `attribution` informations.": "Il valore predefinito è `True`; impostare `False` per non mostrare le informazioni di `attribuzione` in fondo alla pagina.",
      "Favorite icon image.": "Immagine dell'icona preferita.",
      "General layout settings": "Impostazioni generali del layout",
      "I.e.": "Ad esempio:",
      "If is not set, title is: `g3w-admin` for admin section and `g3w-client` for webgis client.": "Se non impostato, il titolo sarà `g3w-admin` per la sezione di amministrazione e `g3w-client` per il client WebGIS.",
      "Login logo image.": "Immagine del logo della schermata di accesso.",
      "Main admin section logo image.": "Immagine del logo principale della sezione di amministrazione.",
      "Main admin section reduced logo image.": "Immagine ridotta del logo della sezione di amministrazione.",
      "Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`": "È obbligatorio impostare `G3WSUITE_CUSTOM_STATIC_URL`.",
      "Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`.": "È obbligatorio impostare `G3WSUITE_CUSTOM_STATIC_URL`.",
      "NB: for more info see: `Getting a Bing maps key <https://learn.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key>`": "Nota: per ulteriori informazioni vedere `Come ottenere una chiave Bing Maps <https://learn.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key>`.",
      "Search url endpoint for 'searches calling', default `ows`.": "Endpoint URL di ricerca per le chiamate di ricerca; il valore predefinito è `ows`.",
      "Set the geocoding providers available for webgis services:": "Imposta i provider di geocodifica disponibili per i servizi WebGIS:",
      "You can also add custom providers (or edit the existing ones within `static/client/geocoding-providers` folder), just remember to use javascript file name as \"provider\" identifier:": "È possibile aggiungere provider personalizzati (o modificare quelli esistenti nella cartella `static/client/geocoding-providers`); ricordarsi di usare il nome del file JavaScript come identificatore del \"provider\":",
      "`api`: by g3w-suite layer vector API.": "`api`: tramite l'API vettoriale dei layer di G3W-SUITE.",
      "`i18n` (optional) set True if you want lent client try to translate title.": "`i18n` (facoltativo): impostare True per consentire al client di provare a tradurre il titolo.",
      "`ows`: by wms search;": "`ows`: ricerca tramite WMS;"
    }
  }
</script>
