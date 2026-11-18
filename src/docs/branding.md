# Branding the G3W-Suite

Customize the G3W-SUITE interface to match your organization's branding.

To customize branding in the source code, edit the Docker project's ```local_settings.py``` file and, if needed, its CSS. The manual also covers customization through the interface.


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

```
g3w-admin/
└── core/
    └── static/
        └── custom_static/
            ├── css/
            │   └── custom.css
            ├── favicon.ico
            ├── logo_login.png
            ├── logo_main.png
            └── logo_reduced.png
```

In this case the setting needs to be adjusted to contain the static folder (note the initial static folder):

```python
G3WSUITE_CUSTOM_STATIC_URL = '/static/custom_static/'
```


## G3WSUITE_POWERD_BY

The powered by setting, turned on by default, shows information about the suite and the main developers behind it in the credits section, which is accessible from the top bar of the suite.

Without any interaction the section looks like this:

![Screenshot: Branding 01 Credits On](/img/manual-english-branding-01-credits-on.avif)

Adding the following line to the ```local_settings.py``` file will turn off the *powered by* section and show only what has been set in the **Map CLient Data** section of the **General Suite Data**:

```python
G3WSUITE_POWERD_BY=False
```

![Screenshot: Branding 02 Credits Off](/img/manual-english-branding-02-credits-off.avif)


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

![Screenshot: Branding 08 Logos Login](/img/manual-english-branding-08-logos-login.avif)

and to the following admin logo icon:

![Screenshot: Branding 09 Logos Main](/img/manual-english-branding-09-logos-main.avif)

and its reduced form:

![Screenshot: Branding 10 Logos Reduced](/img/manual-english-branding-10-logos-reduced.avif)

## G3WSUITE_CUSTOM_TITLE

The title of the html page of the suite. Usually the title defaults to **g3w-admin** for the admin section and **g3w-client** for the webgis client.

![Screenshot: Branding 03 Html Title Off](/img/manual-english-branding-03-html-title-off.avif)

By setting the following line in the ```local_settings.py``` file:

```python
G3WSUITE_CUSTOM_TITLE = "The Etruscan Webgis for the masses"
```

we get the following result:

![Screenshot: Branding 04 Html Title On](/img/manual-english-branding-04-html-title-on.avif)

[Client appearance and customization](branding-client.md)

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
    "**G3WSUITE_FAVICON**: The favicon of the suite.": "**G3WSUITE_FAVICON**: favicon della suite.",
    "**G3WSUITE_LOGIN_LOGO**: The logo that appears on the login screen.": "**G3WSUITE_LOGIN_LOGO**: logo visualizzato nella schermata di accesso.",
    "**G3WSUITE_MAIN_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section. Mind that this one needs to be around 200x60 pixels to fit nicely.": "**G3WSUITE_MAIN_LOGO**: logo visualizzato nell'angolo superiore sinistro della suite quando si accede alla sezione di amministrazione. Per adattarsi correttamente, dovrebbe avere dimensioni di circa 200x60 pixel.",
    "**G3WSUITE_RID_LOGO**: The logo that appears in the top left corner of the suite when logged in the admin section, with the sidebar reduced. Mind that this one needs to be around 60x60 pixels to fit nicely.": "**G3WSUITE_RID_LOGO**: logo visualizzato nell'angolo superiore sinistro della suite quando si accede alla sezione di amministrazione con la barra laterale ridotta. Per adattarsi correttamente, dovrebbe avere dimensioni di circa 60x60 pixel.",
    "**NOTE:** When testing this in development/debug mode, the static folder **custom_static** needs to be created in the static folder of the **core** package of the g3w-admin app.": "**NOTA:** durante i test in modalità sviluppo/debug, la cartella statica **custom_static** deve essere creata nella cartella statica del pacchetto **core** dell'app g3w-admin.",
    "Adding the following line to the ```local_settings.py``` file will turn off the *powered by* section and show only what has been set in the **Map CLient Data** section of the **General Suite Data**:": "Aggiungendo la riga seguente al file ```local_settings.py``` si disattiva la sezione *powered by* e si mostra solo quanto configurato nella sezione **Map Client Data** di **General Suite Data**:",
    "Branding the G3W-Suite": "Personalizzare il marchio di G3W-Suite",
    "By setting the following line in the ```local_settings.py``` file:": "Impostando la riga seguente nel file ```local_settings.py```:",
    "Client appearance and customization": "Aspetto e personalizzazione del client",
    "Customize the G3W-SUITE interface to match your organization's branding.": "Personalizza l'interfaccia di G3W-SUITE in base all'identità della tua organizzazione.",
    "First, inside the ```g3w-admin/base/settings/__init__.py``` file, we need to change the following line:": "Per prima cosa, nel file ```g3w-admin/base/settings/__init__.py```, è necessario modificare la riga seguente:",
    "G3WSUITE_CUSTOM_STATIC_URL": "G3WSUITE_CUSTOM_STATIC_URL",
    "G3WSUITE_CUSTOM_TITLE": "G3WSUITE_CUSTOM_TITLE",
    "G3WSUITE_POWERD_BY": "G3WSUITE_POWERD_BY",
    "In this case the setting needs to be adjusted to contain the static folder (note the initial static folder):": "In questo caso, l'impostazione deve includere la cartella statica (nota la cartella static iniziale):",
    "Logos": "Loghi",
    "Most of the style related settings depend on the ```G3WSUITE_CUSTOM_STATIC_URL``` attribute. This setting is a string that represents the URL from which **custom** static files are served.": "La maggior parte delle impostazioni relative allo stile dipende dall'attributo ```G3WSUITE_CUSTOM_STATIC_URL```. Questa impostazione è una stringa che rappresenta l'URL da cui vengono serviti i file statici **personalizzati**.",
    "Screenshot: Branding 01 Credits On": "Schermata: branding 01, crediti attivi",
    "Screenshot: Branding 02 Credits Off": "Schermata: branding 02, crediti disattivati",
    "Screenshot: Branding 03 Html Title Off": "Schermata: branding 03, titolo HTML disattivato",
    "Screenshot: Branding 04 Html Title On": "Schermata: branding 04, titolo HTML attivato",
    "Screenshot: Branding 08 Logos Login": "Schermata: branding 08, loghi nella schermata di accesso",
    "Screenshot: Branding 09 Logos Main": "Schermata: branding 09, logo principale",
    "Screenshot: Branding 10 Logos Reduced": "Schermata: branding 10, logo ridotto",
    "Setting a default language": "Impostare una lingua predefinita",
    "The following settings will force the suite to load as default language the one specified": "Le impostazioni seguenti forzano il caricamento della suite nella lingua predefinita specificata",
    "The powered by setting, turned on by default, shows information about the suite and the main developers behind it in the credits section, which is accessible from the top bar of the suite.": "L'impostazione powered by, attiva per impostazione predefinita, mostra le informazioni sulla suite e sui principali sviluppatori nella sezione dei crediti, accessibile dalla barra superiore.",
    "The settings for these images are strings that represent the path to the image, relative to the **G3WSUITE_CUSTOM_STATIC_URL** setting.": "Le impostazioni di queste immagini sono stringhe che rappresentano il percorso dell'immagine, relativo all'impostazione **G3WSUITE_CUSTOM_STATIC_URL**.",
    "The title of the html page of the suite. Usually the title defaults to **g3w-admin** for the admin section and **g3w-client** for the webgis client.": "Titolo della pagina HTML della suite. In genere è **g3w-admin** per la sezione di amministrazione e **g3w-client** per il client WebGIS.",
    "Then we need to create a new file in the ```g3w-admin/core``` folder called ```i18n_middleware.py``` with the following content:": "Quindi occorre creare nella cartella ```g3w-admin/core``` un nuovo file chiamato ```i18n_middleware.py``` con il contenuto seguente:",
    "There might be cases where the suite needs to be loaded in a specific language.": "In alcuni casi può essere necessario caricare la suite in una lingua specifica.",
    "This can be done, even if it is not exactly for the faint of heart.": "È possibile farlo, anche se la procedura non è proprio per i deboli di cuore.",
    "This is based on the following [gist](https://gist.github.com/vstoykov/1366794?permalink_comment_id=3649179#gistcomment-3649179).": "Questa soluzione si basa sul seguente [gist](https://gist.github.com/vstoykov/1366794?permalink_comment_id=3649179#gistcomment-3649179).",
    "This setting also needs a tweak in the ```config/nginx/locations``` file, when in production:": "In produzione è necessario modificare anche il file ```config/nginx/locations```:",
    "This will lead to a login page like this:": "Il risultato sarà una schermata di accesso come questa:",
    "To customize branding in the source code, edit the Docker project's ```local_settings.py``` file and, if needed, its CSS. The manual also covers customization through the interface.": "Per personalizzare l'identità nel codice sorgente, modifica il file ```local_settings.py``` del progetto Docker e, se necessario, il CSS. Il manuale descrive anche la personalizzazione tramite interfaccia.",
    "To get this properly applied, we need to make a few changes g3w-admin code base.": "Per applicare correttamente questa configurazione, è necessario apportare alcune modifiche al codice di g3w-admin.",
    "When it comes to logos, 4 images can be customized:": "È possibile personalizzare quattro immagini relative ai loghi:",
    "When the suite is loaded, the client language is set to the browser's default language.": "Quando viene caricata, la lingua del client corrisponde a quella predefinita del browser.",
    "Without any interaction the section looks like this:": "Senza alcuna modifica, la sezione appare così:",
    "and its reduced form:": "e la sua versione ridotta:",
    "and to the following admin logo icon:": "e la seguente icona del logo nell'area di amministrazione:",
    "in the ```g3w-suite-docker/config/g3w-suite/settings_docker.py``` file in the **LANGUAGE_CODE** setting:": "nell'impostazione **LANGUAGE_CODE** del file ```g3w-suite-docker/config/g3w-suite/settings_docker.py```:",
    "to": "a",
    "we get the following result:": "si ottiene il risultato seguente:"
  }
}
</script>
