# Branding the G3W-Suite

The G3W-Suite is a web application that can be customized to match the look and feel of your organization. This section covers the branding options available.

It is beyond the scope of this section to explain how to customize the G3W-Suite's branding using the project UI options, since that is already covered in the relative section of the manual. This section will focus on how to customize the G3W-Suite's branding by editing the settings (```local_settings.py``` of the docker project) file in the source code and possibly some css settings.


## G3WSUITE_CUSTOM_STATIC_URL

Most of the style related settings depend on the ```G3WSUITE_CUSTOM_STATIC_URL``` attribute. This setting is a string that represents the URL from which **custom** static files are served. 

```python
G3WSUITE_CUSTOM_STATIC_URL = '/custom_static/'
```

This setting also needs a tweak in the ```config/nginx/locations``` file, when in production:

```nginx
location /custom_static/ {
    root /shared-volume/project_data/;
}
```

**NOTE:** When testing this in development/debug mode, the static folder **custom_static** needs to be created in the static folder of the **core** package of the g3w-admin app. 

![Screenshot: Branding 16 Static Folder](/img/manual-english-branding-16-static-folder.png)


In this case the setting needs to be adjusted to contain the static folder (note the initial static folder):

```python
G3WSUITE_CUSTOM_STATIC_URL = '/static/custom_static/'
```


## G3WSUITE_POWERD_BY

The powered by setting, turned on by default, shows information about the suite and the main developers behind it in the credits section, which is accessible from the top bar of the suite.

Without any interaction the section looks like this:

![Screenshot: Branding 01 Credits On](/img/manual-english-branding-01-credits-on.png)

Adding the following line to the ```local_settings.py``` file will turn off the *powered by* section and show only what has been set in the **Map CLient Data** section of the **General Suite Data**:

```python
G3WSUITE_POWERD_BY=False
```

![Screenshot: Branding 02 Credits Off](/img/manual-english-branding-02-credits-off.png)


## Logos

When it comes to logos, 4 images can be customized:

- **G3WSUITE_MAIN_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section. Mind that this one needs to be around 200x60 pixels to fit nicely.
- **G3WSUITE_RID_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section, with the sidebar reduced. Mind that this one needs to be around 60x60 pixels to fit nicely.
- **G3WSUITE_LOGIN_LOGO**: The logo that appears on the login screen.
- **G3WSUITE_FAVICON**: The favicon of the suite.

The settings for these images are strings that represent the path to the image, relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting.

```python
G3WSUITE_FAVICON = G3WSUITE_CUSTOM_STATIC_URL + 'favicon.ico'
G3WSUITE_MAIN_LOGO = G3WSUITE_CUSTOM_STATIC_URL + 'logo_main.png'
G3WSUITE_RID_LOGO = G3WSUITE_CUSTOM_STATIC_URL + 'logo_reduced.png'
G3WSUITE_LOGIN_LOGO = G3WSUITE_CUSTOM_STATIC_URL + 'logo_login.png'
```

This will lead to a login page like this:

![Screenshot: Branding 08 Logos Login](/img/manual-english-branding-08-logos-login.png)

and to the following admin logo icon:

![Screenshot: Branding 09 Logos Main](/img/manual-english-branding-09-logos-main.png)

and its reduced form:

![Screenshot: Branding 10 Logos Reduced](/img/manual-english-branding-10-logos-reduced.png)

## G3WSUITE_CUSTOM_TITLE

The title of the html page of the suite. Usually the title defaults to **g3w-admin** for the admin section and **g3w-client** for the webgis client.

![Screenshot: Branding 03 Html Title Off](/img/manual-english-branding-03-html-title-off.png)

By setting the following line in the ```local_settings.py``` file:

```python
G3WSUITE_CUSTOM_TITLE = "The Etruscan Webgis for the masses"
```

we get the following result:

![Screenshot: Branding 04 Html Title On](/img/manual-english-branding-04-html-title-on.png)



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

![Screenshot: Branding 11 Css Remove Off](/img/manual-english-branding-11-css-remove-off.png)

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

![Screenshot: Branding 12 Css Remove On](/img/manual-english-branding-12-css-remove-on.png)


The same goes for most of the elements you can check out with the browser's inspector.

Do you want to remove the bottom map logo?

![Logo: Branding 14 Css Map On](/img/manual-english-branding-14-css-map-logo-on.png)

Then add the following css to the custom css file:

```css
#map_footer_left img{
    display: none !important;
}
```

This will remove the bottom map logo:

![Logo: Branding 15 Css Map Off](/img/manual-english-branding-15-css-map-logo-off.png)

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

![Screenshot: Branding 13 Css Skin](/img/manual-english-branding-13-css-skin.png)


### G3W_CLIENT_SEARCH_TITLE

The search section title in the webgis client can be customized by setting the following line in the ```local_settings.py``` file:

```python
G3W_CLIENT_SEARCH_TITLE = "Search for the Holy Grail"
```

This will help user to search for the Holy Grail:

![Screenshot: Branding 17 Search Title](/img/manual-english-branding-17-search-title.png)

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

![Screenshot: Branding 05 Header Links Off](/img/manual-english-branding-05-header-links-off.png)

to:

![Screenshot: Branding 06 Header Links On](/img/manual-english-branding-06-header-links-on.png)

While ths first link opens a new tab with the Gis3W company website, the second link opens a modal dialog like this:

![Screenshot: Branding 07 Header Links Click](/img/manual-english-branding-07-header-links-click.png)


### G3W_CLIENT_RIGHT_PANEL

The right panel width can be set with the following setting:

```python
G3W_CLIENT_RIGHT_PANEL = {
    'width': 50
}
```

The width is the percentage of the map view that will be dedicated to the right panel. 


### G3W_CLIENT_LEGEND

It is possible to customize the legend of the webgis client to some extent. The following settings are available:

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

![Screenshot: Branding 19 Legend Off](/img/manual-english-branding-19-legend-off.png)

to:


![Screenshot: Branding 18 Legend](/img/manual-english-branding-18-legend.png)



## Setting a default language


When the suite is loaded, the client language is set to the browser's default language. 
There might be cases where the suite needs to be loaded in a specific language. 
This can be done, even if it is not exactly for the faint of heart.

The following settings will force the suite to load as default language the one specified 
in the ```g3w-suite-docker/config/g3w-suite/settings_docker.py``` file in the **LANGUAGE_CODE** setting:

```python
LANGUAGE_CODE = 'it'
```

To get this properly applied, we need to make a few changes g3w-admin code base.

First, inside the ```g3w-admin/base/settings/__init__.py``` file, we need to change the following line:

```python
MIDDLEWARE = MIDDLEWARE + G3WADMIN_MIDDLEWARE
```

to 

```python
MIDDLEWARE =  ['core.i18n_middleware.i18n_middleware'] + MIDDLEWARE + G3WADMIN_MIDDLEWARE
```

Then we need to create a new file in the ```g3w-admin/core``` folder called ```i18n_middleware.py``` with the following content:

```python
from contextlib import suppress
from django.conf import settings

def i18n_middleware(get_response):
    """
    Ignore Accept-Language HTTP headers.

    This will force the I18N machinery to always choose settings.LANGUAGE_CODE
    as the default initial language unless another one is set via sessions or cookies.

    Should be installed *before* any middleware that checks
    request.META['HTTP_ACCEPT_LANGUAGE'], namely
    `django.middleware.locale.LocaleMiddleware`.
    """

    def middleware(request):
        lang = getattr(settings, 'LANGUAGE_CODE')
        accept = request.META.get('HTTP_ACCEPT_LANGUAGE', '').split(',')

        with suppress(ValueError):
            # Remove `lang` from the HTTP_ACCEPT_LANGUAGE to avoid duplicates
            accept.remove(lang)

        accept = [lang] + accept
        request.META['HTTP_ACCEPT_LANGUAGE'] = f"""{','.join(accept)}"""
        return get_response(request)

    return middleware
```

This is based on the following [gist](https://gist.github.com/vstoykov/1366794?permalink_comment_id=3649179#gistcomment-3649179).

<script type="application/json" data-i18n>
{
  "it": {
    "**NOTE:** When testing this in development/debug mode, the static folder **custom_static** needs to be created in the static folder of the **core** package of the g3w-admin app.": "**NOTA:** durante i test in modalità sviluppo/debug, la cartella statica **custom_static** deve essere creata nella cartella statica del pacchetto **core** dell'app g3w-admin.",
    "**The geographic portal**": "**Il portale geografico**",
    "### Example: change the skin color": "Esempio: cambiare il colore del tema",
    "### Example: remove sections form the main webgis view": "Esempio: rimuovere sezioni dalla vista principale del WebGIS",
    "#### Example: change the skin color": "Esempio: cambiare il colore del tema",
    "#### Example: remove sections form the main webgis view": "Esempio: rimuovere sezioni dalla vista principale del WebGIS",
    "Branding the G3W-Suite": "Personalizzare il marchio di G3W-Suite",
    "Do you want to remove the bottom map logo?": "Vuoi rimuovere il logo in fondo alla mappa?",
    "G3WSUITE_CUSTOM_CSS": "G3WSUITE_CUSTOM_CSS",
    "G3WSUITE_CUSTOM_STATIC_URL": "G3WSUITE_CUSTOM_STATIC_URL",
    "G3WSUITE_CUSTOM_TITLE": "G3WSUITE_CUSTOM_TITLE",
    "G3WSUITE_POWERD_BY": "G3WSUITE_POWERD_BY",
    "G3W_CLIENT_HEADER_CUSTOM_LINKS": "G3W_CLIENT_HEADER_CUSTOM_LINKS",
    "G3W_CLIENT_LEGEND": "G3W_CLIENT_LEGEND",
    "G3W_CLIENT_RIGHT_PANEL": "G3W_CLIENT_RIGHT_PANEL",
    "G3W_CLIENT_SEARCH_TITLE": "G3W_CLIENT_SEARCH_TITLE",
    "It is beyond the scope of this section to explain how to customize the G3W-Suite's branding using the project UI options, since that is already covered in the relative section of the manual. This section will focus on how to customize the G3W-Suite's branding by editing the settings (```local_settings.py``` of the docker project) file in the source code and possibly some css settings.": "Esula dagli obiettivi di questa sezione spiegare come personalizzare il marchio di G3W-Suite tramite le opzioni dell'interfaccia del progetto, già descritte nella sezione corrispondente del manuale. Qui ci concentreremo sulla personalizzazione del marchio di G3W-Suite modificando nel codice sorgente il file delle impostazioni (```local_settings.py``` del progetto Docker) ed eventualmente alcune impostazioni CSS.",
    "Most of the style related settings depend on the ```G3WSUITE_CUSTOM_STATIC_URL``` attribute. This setting is a string that represents the URL from which **custom** static files are served.": "La maggior parte delle impostazioni relative allo stile dipende dall'attributo ```G3WSUITE_CUSTOM_STATIC_URL```. Questa impostazione è una stringa che rappresenta l'URL da cui vengono serviti i file statici **personalizzati**.",
    "This setting also needs a tweak in the ```config/nginx/locations``` file, when in production:": "In produzione è necessario modificare anche il file ```config/nginx/locations```:",
    "The powered by setting, turned on by default, shows information about the suite and the main developers behind it in the credits section, which is accessible from the top bar of the suite.": "L'impostazione powered by, attiva per impostazione predefinita, mostra le informazioni sulla suite e sui principali sviluppatori nella sezione dei crediti, accessibile dalla barra superiore.",
    "Without any interaction the section looks like this:": "Senza alcuna modifica, la sezione appare così:",
    "Adding the following line to the ```local_settings.py``` file will turn off the *powered by* section and show only what has been set in the **Map CLient Data** section of the **General Suite Data**:": "Aggiungendo la riga seguente al file ```local_settings.py``` si disattiva la sezione *powered by* e si mostra solo quanto configurato nella sezione **Map Client Data** di **General Suite Data**:",
    "When it comes to logos, 4 images can be customized:": "È possibile personalizzare quattro immagini relative ai loghi:",
    "**G3WSUITE_MAIN_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section. Mind that this one needs to be around 200x60 pixels to fit nicely.": "**G3WSUITE_MAIN_LOGO**: logo visualizzato nell'angolo superiore sinistro della suite quando si accede alla sezione di amministrazione. Per adattarsi correttamente, dovrebbe avere dimensioni di circa 200x60 pixel.",
    "**G3WSUITE_RID_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section, with the sidebar reduced. Mind that this one needs to be around 60x60 pixels to fit nicely.": "**G3WSUITE_RID_LOGO**: logo visualizzato nell'angolo superiore sinistro della suite quando si accede alla sezione di amministrazione con la barra laterale ridotta. Per adattarsi correttamente, dovrebbe avere dimensioni di circa 60x60 pixel.",
    "**G3WSUITE_LOGIN_LOGO**: The logo that appears on the login screen.": "**G3WSUITE_LOGIN_LOGO**: logo visualizzato nella schermata di accesso.",
    "**G3WSUITE_FAVICON**: The favicon of the suite.": "**G3WSUITE_FAVICON**: favicon della suite.",
    "The settings for these images are strings that represent the path to the image, relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting.": "Le impostazioni di queste immagini sono stringhe che rappresentano il percorso dell'immagine, relativo all'impostazione **G3WSUITE_CUSTOM_STATIC_URL**.",
    "This will lead to a login page like this:": "Il risultato sarà una schermata di accesso come questa:",
    "and to the following admin logo icon:": "e la seguente icona del logo nell'area di amministrazione:",
    "and its reduced form:": "e la sua versione ridotta:",
    "The title of the html page of the suite. Usually the title defaults to **g3w-admin** for the admin section and **g3w-client** for the webgis client.": "Titolo della pagina HTML della suite. In genere è **g3w-admin** per la sezione di amministrazione e **g3w-client** per il client WebGIS.",
    "By setting the following line in the ```local_settings.py``` file:": "Impostando la riga seguente nel file ```local_settings.py```:",
    "we get the following result:": "si ottiene il risultato seguente:",
    "The custom css setting is a string that represents the path to a custom css file that will be loaded in the suite. The path is relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting:": "L'impostazione CSS personalizzata è una stringa che rappresenta il percorso del file CSS personalizzato da caricare nella suite. Il percorso è relativo all'impostazione **G3WSUITE_CUSTOM_STATIC_URL**:",
    "This custom css can be used to override some default suite css settings and allows for some great customization.": "Questo CSS personalizzato consente di sovrascrivere alcune impostazioni CSS predefinite della suite e di personalizzarne l'aspetto.",
    "Somethimes you do not need the metadata, print, bookmarks section:": "A volte non sono necessarie le sezioni dei metadati, della stampa e dei segnalibri:",
    "Assume you want to remove everyting but the layer view. This can be done by adding the following css to the custom css file:": "Per rimuovere tutto tranne la vista dei layer, aggiungi il CSS seguente al file CSS personalizzato:",
    "This results in the following view:": "Il risultato è la vista seguente:",
    "The same goes for most of the elements you can check out with the browser's inspector.": "Lo stesso vale per la maggior parte degli elementi che puoi esaminare con gli strumenti di sviluppo del browser.",
    "Then add the following css to the custom css file:": "Aggiungi quindi il CSS seguente al file CSS personalizzato:",
    "This will remove the bottom map logo:": "In questo modo verrà rimosso il logo in fondo alla mappa:",
    "To change the skin color of the suite, you can add the following css to the custom css file:": "Per cambiare il colore del tema della suite, puoi aggiungere il CSS seguente al file CSS personalizzato:",
    "This will change the skin color to red (HSL values tested prior in [inkscape](https://inkscape.org/)).": "Il colore del tema diventerà rosso (valori HSL testati in precedenza con [Inkscape](https://inkscape.org/)).",
    "The search section title in the webgis client can be customized by setting the following line in the ```local_settings.py``` file:": "Il titolo della sezione di ricerca nel client WebGIS può essere personalizzato impostando la riga seguente nel file ```local_settings.py```:",
    "This will help user to search for the Holy Grail:": "In questo modo si aiuteranno gli utenti a cercare il Santo Graal:",
    "The header custom links setting is a list of dictionaries that represent links that will be shown in the top bar of the webgis client. Each dictionary creates a new button, using the icon and as tooltip the title of the dictionary.": "L'impostazione dei collegamenti personalizzati nell'intestazione è un elenco di dizionari che rappresentano i link mostrati nella barra superiore del client WebGIS. Ogni dizionario crea un nuovo pulsante, usando l'icona e il titolo del dizionario come descrizione al passaggio del mouse.",
    "There can be two type of links, **url** and **modal**. The **url** type opens a new tab using the url provided in the dictionary, while the **modal** type opens a modal dialog containing the content provided in the dictionary.": "Sono disponibili due tipi di collegamenti: **url** e **modal**. Il tipo **url** apre una nuova scheda usando l'URL specificato nel dizionario, mentre il tipo **modal** apre una finestra di dialogo modale contenente il contenuto definito nel dizionario.",
    "The **i18n** key is used to translate the title of the link. If set to True, the title will be translated (if possible) using the suite's translation system.": "La chiave **i18n** serve a tradurre il titolo del collegamento. Se impostata su True, il titolo verrà tradotto, se possibile, tramite il sistema di traduzione della suite.",
    "The above example creates changes the top bar from:": "L'esempio precedente modifica la barra superiore nel modo seguente:",
    "While ths first link opens a new tab with the Gis3W company website, the second link opens a modal dialog like this:": "Il primo collegamento apre una nuova scheda con il sito web di Gis3W, mentre il secondo apre una finestra modale come questa:",
    "The right panel width can be set with the following setting:": "La larghezza del pannello destro può essere impostata con la configurazione seguente:",
    "The width is the percentage of the map view that will be dedicated to the right panel.": "La larghezza indica la percentuale della vista della mappa riservata al pannello destro.",
    "It is possible to customize the legend of the webgis client to some extent. The following settings are available:": "È possibile personalizzare in parte la legenda del client WebGIS. Sono disponibili le seguenti impostazioni:",
    "This would change the legend from:": "La legenda passerà da:",
    "Setting a default language": "Impostare una lingua predefinita",
    "When the suite is loaded, the client language is set to the browser's default language.": "Quando viene caricata, la lingua del client corrisponde a quella predefinita del browser.",
    "There might be cases where the suite needs to be loaded in a specific language.": "In alcuni casi può essere necessario caricare la suite in una lingua specifica.",
    "This can be done, even if it is not exactly for the faint of heart.": "È possibile farlo, anche se la procedura non è proprio per i deboli di cuore.",
    "The following settings will force the suite to load as default language the one specified in the ```g3w-suite-docker/config/g3w-suite/settings_docker.py``` file in the **LANGUAGE_CODE** setting:": "Le impostazioni seguenti forzano il caricamento della suite nella lingua predefinita specificata nell'impostazione **LANGUAGE_CODE** del file ```g3w-suite-docker/config/g3w-suite/settings_docker.py```:",
    "To get this properly applied, we need to make a few changes g3w-admin code base.": "Per applicare correttamente questa configurazione, è necessario apportare alcune modifiche al codice di g3w-admin.",
    "First, inside the ```g3w-admin/base/settings/__init__.py``` file, we need to change the following line:": "Per prima cosa, nel file ```g3w-admin/base/settings/__init__.py```, è necessario modificare la riga seguente:",
    "Then we need to create a new file in the ```g3w-admin/core``` folder called ```i18n_middleware.py``` with the following content:": "Quindi occorre creare nella cartella ```g3w-admin/core``` un nuovo file chiamato ```i18n_middleware.py``` con il contenuto seguente:",
    "This is based on the following [gist](https://gist.github.com/vstoykov/1366794?permalink_comment_id=3649179#gistcomment-3649179).": "Questa soluzione si basa sul seguente [gist](https://gist.github.com/vstoykov/1366794?permalink_comment_id=3649179#gistcomment-3649179).",
    "Screenshot: Branding 01 Credits On": "Schermata: branding 01, crediti attivi",
    "Screenshot: Branding 02 Credits Off": "Schermata: branding 02, crediti disattivati",
    "Screenshot: Branding 03 Html Title Off": "Schermata: branding 03, titolo HTML disattivato",
    "Screenshot: Branding 04 Html Title On": "Schermata: branding 04, titolo HTML attivato",
    "Screenshot: Branding 05 Header Links Off": "Schermata: branding 05, link nell'intestazione disattivati",
    "Screenshot: Branding 06 Header Links On": "Schermata: branding 06, link nell'intestazione attivati",
    "Screenshot: Branding 07 Header Links Click": "Schermata: branding 07, clic sui link nell'intestazione",
    "Screenshot: Branding 08 Logos Login": "Schermata: branding 08, loghi nella schermata di accesso",
    "Screenshot: Branding 09 Logos Main": "Schermata: branding 09, logo principale",
    "Screenshot: Branding 10 Logos Reduced": "Schermata: branding 10, logo ridotto",
    "Screenshot: Branding 11 Css Remove Off": "Schermata: branding 11, rimozione CSS disattivata",
    "Screenshot: Branding 12 Css Remove On": "Schermata: branding 12, rimozione CSS attivata",
    "Screenshot: Branding 13 Css Skin": "Schermata: branding 13, tema CSS",
    "Logo: Branding 14 Css Map On": "Logo: branding 14, logo della mappa CSS attivo",
    "Logo: Branding 15 Css Map Off": "Logo: branding 15, logo della mappa CSS disattivato",
    "Screenshot: Branding 16 Static Folder": "Schermata: branding 16, cartella statica",
    "Screenshot: Branding 17 Search Title": "Schermata: branding 17, titolo della ricerca",
    "Screenshot: Branding 18 Legend": "Schermata: branding 18, legenda",
    "Screenshot: Branding 19 Legend Off": "Schermata: branding 19, legenda disattivata"
  }
}
</script>