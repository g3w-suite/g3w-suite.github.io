---
title: Branding
description: Customize the G3W-SUITE interface to match your organization's branding.
---

# Branding

Customize the G3W-SUITE interface to match your organization's branding.

Set branding options in `g3w-admin/base/settings/local_settings.py`. With the Docker stack, edit `config/g3w-suite/settings_docker.py` instead: Compose mounts it as `local_settings.py`.

- [Custom files](#g3wsuite_custom_static_url)
- [Logos](#logos)
- [Stylesheets and scripts](#stylesheets-and-scripts)
- [Map client appearance](#map-client-appearance)
- [Setting a default language](#setting-a-default-language)

## G3WSUITE_CUSTOM_STATIC_URL

Most of the style related settings depend on the ```G3WSUITE_CUSTOM_STATIC_URL``` attribute. This setting is a string that represents the URL from which **custom** static files are served. 

```python
G3WSUITE_CUSTOM_STATIC_URL = '/static/overrides/'
```

For this Docker example, put the custom files under `config/g3w-suite/overrides/static/`. Compose mounts that directory in NGINX, which serves it at `/static/overrides/`.

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

This setting overrides the browser tab title in the administration panel and the title prefix in the map client. The client appends the project title.

![Screenshot: Branding 03 Html Title Off](/img/manual-english-branding-03-html-title-off.avif)

By setting the following line in the ```local_settings.py``` file:

```python
G3WSUITE_CUSTOM_TITLE = "The Etruscan Webgis for the masses"
```

we get the following result:

![Screenshot: Branding 04 Html Title On](/img/manual-english-branding-04-html-title-on.avif)

## Stylesheets and scripts

### G3WSUITE_CUSTOM_CSS

`G3WSUITE_CUSTOM_CSS` is a list of stylesheet URLs. The client and administration templates load this list when `G3WSUITE_CUSTOM_STATIC_URL` is set:

```python
G3WSUITE_CUSTOM_CSS = [
    G3WSUITE_CUSTOM_STATIC_URL +'css/custom.css'
]
```

This custom css can be used to override some default suite css settings and allows for some great customization.

Use the project settings to control which map tools are available. For visual changes, inspect the current client markup before writing selectors; element IDs can change between releases.

#### Example: change the skin color

To change the skin color of the suite, you can add the following css to the custom css file:

```css
body #app {
    --skin-color: #f50000;
}
```

This changes the map client's accent color to red.

![Screenshot: Branding 13 Css Skin](/img/manual-english-branding-13-css-skin.avif)

### `G3WSUITE_CUSTOM_JS`
A list of custom js files added to `admin` pages and to the `client`.
Mandatory is set `G3WSUITE_CUSTOM_STATIC_URL`.
I.e.

~~~
G3WSUITE_CUSTOM_JS = [
    G3WSUITE_CUSTOM_STATIC_URL +'js/custom.js'
]
~~~

## Map client appearance

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

The width is a percentage of the map view (45% by default).


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

## Setting a default language


Set `LANGUAGE_CODE` in the same settings file to change Django's fallback language:

```python
LANGUAGE_CODE = 'it'
```

This is a fallback, not a way to force one language for all visitors. Django can still select a supported language from the URL, the language cookie or the browser preferences.
