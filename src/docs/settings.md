# Settings

The following variables can be added to or edited in the project’s `local_settings.py`:

**In this page**

- [Base settings](#base-settings)
- [Database logging](#database-logging)
- [Frontend portal setting](#frontend-portal-setting)
- [Editing settings](#editing-settings)
- [Caching settings](#caching-settings)
- [File manager settings](#file-manager-settings)
- [Qplotly settings](#qplotly-settings)
- [Openrouteservice settings](#openrouteservice-settings)
- [Vendors settings](#vendors-settings)
- [Google reCAPTCHA](#google-recaptcha)
- [Registration](#registration)

## Base settings

### `G3WADMIN_PROJECT_APPS`
Custom django map server module other than `qdjango` (QGIS-Server provider)

### `G3WADMIN_LOCAL_MORE_APPS`
Custom django modules that is possible to add, i.e. `g3w-admin-portal` (https://github.com/g3w-suite/g3w-admin-portal) module and other third part django modules.
G3W-SUITE accessory modules:

- `g3w-admin-portal` (https://github.com/g3w-suite/g3w-admin-portal)
- `caching`
- `filemanager`
- `editing`

### `DATASOURCE_PATH`
Path to geo data directory (shp, Spatialite, raster, etc..).

### `G3WFILE_FORM_UPLOAD_FORMATS`
List of formats file that `file form ajax uploader` can manage at global level.
Default is `['qgs', 'qgz', 'png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ods']`

> **Important**
> Last part of path could be common with QGIS project datasource path. I.e.:
>
> *QGIS project*:
> `<datasource>/<path>/<to>/project_data/<geodata>.shp`
>
> *local_settings.py*:
> `DATASOURCE_PATH = /<local_server_<path>/<to>/project_data`
>
>

Mandatory.

### `G3WADMIN_VECTOR_LAYER_DOWNLOAD_FORMATS`
Default is `['shp', 'xls']`, set download data format. Values possible:
  - *shp*: download into Esri Shape format.
  - *xls*: download into Excel format
  - *gpx*: download into GPS format (only for Point and Line layers)

### `RESET_USER_PASSWORD`
Default is `False`, set tot `True` to activate reset user password by email workflow.
If set to True remember to set Django emailing settings (https://docs.djangoproject.com/en/2.2/topics/email/).

### `CLIENT_OWS_METHOD`
Default is `'GET'`, set to `'POST'` to change default http call method.

## Database logging

With v3.6.x version G3W-SUITE can save message logs inside the database.
To activate it is sufficient add a new log `handler` inside Django `LOGGING` settings and use it for a `logger`:
~~~
LOGGING = {
    ...
    'handlers': {
        ...
        'db_log': {
            'level': 'DEBUG',
            'class': 'core.utils.logs.db_handler.DatabaseLogHandler'
            },
        ...
    }
    ...
    'loggers': {
        ...
        '': {
            'handlers': ['db_log'],
            'level': 'DEBUG',
        },
        ...
    }
}
~~~

> **Important**
> This logging system continues to save log records with no upper limit. To keep the table from getting too big, there is a `django command` that deletes records older than a set number of days.
> Is possible set a cronjob with the follow command:
>
> `python3 manage.py clear_db_logs --days 30`
>
> In this case records older than 30 days will be deleted.
>

## Frontend portal setting

### `FRONTEND`
Default is `False`, set to `True` for activate **G3W-SUITE** frontend portal like `g3w-admin-portal`.
If it's set to `True` base url path for G3W-SUITE admin section become `/admin/`.

### `FRONTEND_APP`
Module name added to `G3WADMIN_LOCAL_MORE_APPS` to use as `portal-frontend`. I.e.

~~~
G3WADMIN_LOCAL_MORE_APPS = [
    ...
    'frontend',
    ...
]

FRONTEND = True
FRONTEND_APP = 'frontend'
~~~

See [Appearance settings](appearance-settings.md) for logos, layout, and map client options.

## Editing settings
Settings params for `editing` module.

### `EDITING_SHOW_ACTIVE_BUTTON`
Default is `True`. Set to `False` for not show editing button activate/deactivate into layers project list.

### `EDITING_ANONYMOUS`
Default is `False`. Set to `True` to render possible give to `anonymous user` editing permissions.

### `EDITING_LOGGING`
Default is `False`. Set to `True` to log users editing action into database.

## Caching settings

### Project configuration cache

The `/api/config` response is cached separately from map tiles, by project and user. Project and related configuration changes invalidate the affected cache.

`QDJANGO_PRJ_CACHE` enables this cache and defaults to `True`; set it to `False` to disable it. The cache uses Django's default cache backend. Docker configures Redis as that backend.

### Tile cache

Settings params for `caching` module

### `TILESTACHE_CACHE_NAME`
A name to identify caching

### `TILESTACHE_CACHE_TYPE`
Default is `Disk` to save tile on a disk. Set to `Memcache` for to use *Memcached* caching framework (https://www.memcached.org/)

### `TILESTACHE_CACHE_DISK_PATH`
Path to disk space where to save tile created by tilestache if `TILESTAHCE_CACHE_TYEPE` is se to `Disk`.

### `TILESTACHE_CACHE_TOKEN`
Mandatory, strign to use as token for internal WMS call for caching module.

## File manager settings
Settings params for `filemanager` module.

### `FILEMANAGER_ROOT_PATH`
Mandatory, path to disk space where to CRUD geo data files i.e. Shp Raster, etc.

### `FILEMANAGER_MAX_UPLOAD_N_FILES`
Default is 5, max number files to upload simultaneously.

## Qplotly settings

### `LOAD_QPLOTLY_FROM_PROJECT`
Default is `False`, set to `True` to import DataPlotly settings from QGIS project.

## Openrouteservice settings

### `ORS_API_ENDPOINT`
Default is `http://localhost:8080/ors/v2/`, this is the endpoint for Openrouteservice API.

### `ORS_API_KEY`
Openrouteservice API key, optional, can be blank if the key is not required by the endpoint.

### `ORS_PROFILES`
List of available Openrouteservice profiles, default: `("driving-car", "driving-hgv")`

## Vendors settings
Settings variables about third part services, i.e. Google API etc..

### `VENDOR_KEYS`
A list with services API keys.
I.e.

~~~
VENDOR_KEYS = {
 'google': 'fhgnrjwipòflsjhjjdhjdhashhabs',
 'bing': 'agbsgtrkADgstejaaklkklkds8irncdfk'
}
~~~

At the moment only `Google` and `Bing` services are supported, for background base map and for google geoconding
service plus of `Nominatim` default service.

## Google reCAPTCHA
Google reCAPTCHA system can be added to *login form* and to *password reset form* ((is activated)) and *registration form* (is activated)

### `RECAPTCHA`
Default is *False*, active or deactive Google reCAPTCHA checkbox.

### `RECAPTCHA_VERSION`
Default is *2*, reCAPTCHA version *2* or *3*

### `RECAPTCHA_PUBLIC_KEY`
Required if RECAPTCHA is True, Google reCAPATCHA public key.

### `RECAPTCHA_PRIVATE_KEY`
Required if RECAPTCHA is True, Google reCAPATCHA private key.

## Registration
Settings variables for user registration system.

### `REGISTRATION_OPEN`
Default is *False*, Activate/deactivate the user registration system.

### `REGISTRATION_ACTIVE_BY_ADMIN`
Default is *False*, if *True* the activation of a self-signed user must be done by administrator user.

### `ACCOUNT_ACTIVATION_DAYS`
Default is *2*, this is the number of days users will have to activate their accounts after registering. If a user does not activate within that period, the account will remain permanently inactive unless a site administrator manually activates it.

### `REGISTRATION_EMAIL_SUBJECT_PREFIX`
Default *[G3W-SUITE]*, Prefix for email subjects of Registration workflow: activation, activated and activation admin email.

### `REGISTRATION_EMAIL_BODY_SIGN`
Default *g3wsuite.it*, Email's sign of emails of Registration workflow: activation, activated and activation admin email.

<script type="application/json" data-i18n>
  {
    "it": {
      "**Important**": "**Importante**",
      "**In this page**": "**In questa pagina**",
      "*QGIS project*:": "*Progetto QGIS*:",
      "*gpx*: download into GPS format (only for Point and Line layers)": "*gpx*: scarica in formato GPS (solo per layer di punti e linee)",
      "*local_settings.py*:": "*local_settings.py*:",
      "*shp*: download into Esri Shape format.": "*shp*: scarica in formato Esri Shapefile.",
      "*xls*: download into Excel format": "*xls*: scarica in formato Excel",
      "A list with services API keys.": "Elenco delle chiavi API dei servizi.",
      "A name to identify caching": "Nome identificativo della cache",
      "At the moment only `Google` and `Bing` services are supported, for background base map and for google geoconding": "Al momento sono supportati solo i servizi `Google` e `Bing`, per le mappe di base e per la geocodifica Google",
      "Base settings": "Impostazioni di base",
      "Caching settings": "Impostazioni della cache",
      "Client layout settings": "Impostazioni del layout del client",
      "Custom django map server module other than `qdjango` (QGIS-Server provider)": "Modulo personalizzato per il server cartografico Django diverso da `qdjango` (provider QGIS Server)",
      "Custom django modules that is possible to add, i.e. `g3w-admin-portal` (https://github.com/g3w-suite/g3w-admin-portal) module and other third part django modules.": "Moduli Django personalizzati che è possibile aggiungere, ad esempio `g3w-admin-portal` (https://github.com/g3w-suite/g3w-admin-portal) e altri moduli Django di terze parti.",
      "Database logging": "Registrazione dei log nel database",
      "Default *[G3W-SUITE]*, Prefix for email subjects of Registration workflow: activation, activated and activation admin email.": "Valore predefinito *[G3W-SUITE]*: prefisso degli oggetti delle e-mail del flusso di registrazione, comprese quelle di attivazione, conferma e notifica all'amministratore.",
      "Default *g3wsuite.it*, Email's sign of emails of Registration workflow: activation, activated and activation admin email.": "Valore predefinito *g3wsuite.it*: firma delle e-mail del flusso di registrazione, comprese quelle di attivazione, conferma e notifica all'amministratore.",
      "Default is *2*, reCAPTCHA version *2* or *3*": "Il valore predefinito è *2*; le versioni di reCAPTCHA disponibili sono *2* e *3*.",
      "Default is *2*, this is the number of days users will have to activate their accounts after registering. If a user does not activate within that period, the account will remain permanently inactive unless a site administrator manually activates it.": "Il valore predefinito è *2*: numero di giorni entro cui gli utenti devono attivare i propri account dopo la registrazione. Se un utente non lo attiva entro tale periodo, l'account resterà inattivo in modo permanente, a meno che un amministratore del sito non lo attivi manualmente.",
      "Default is *False*, Activate/deactivate the user registration system.": "Il valore predefinito è *False*; attiva o disattiva il sistema di registrazione degli utenti.",
      "Default is *False*, active or deactive Google reCAPTCHA checkbox.": "Il valore predefinito è *False*; attiva o disattiva la casella di controllo Google reCAPTCHA.",
      "Default is *False*, if *True* the activation of a self-signed user must be done by administrator user.": "Il valore predefinito è *False*; se impostato su *True*, un utente registrato autonomamente deve essere attivato da un amministratore.",
      "Default is 5, max number files to upload simultaneously.": "Il valore predefinito è 5: numero massimo di file caricabili contemporaneamente.",
      "Default is `'GET'`, set to `'POST'` to change default http call method.": "Il valore predefinito è `'GET'`; impostare `'POST'` per modificare il metodo predefinito delle richieste HTTP.",
      "Default is `Disk` to save tile on a disk. Set to `Memcache` for to use *Memcached* caching framework (https://www.memcached.org/)": "Il valore predefinito è `Disk` per salvare le tile su disco. Impostare `Memcache` per usare il framework di caching *Memcached* (https://www.memcached.org/).",
      "Default is `False`, set to `True` for activate **G3W-SUITE** frontend portal like `g3w-admin-portal`.": "Il valore predefinito è `False`; impostare `True` per attivare il portale front-end di **G3W-SUITE**, come `g3w-admin-portal`.",
      "Default is `False`, set to `True` to import DataPlotly settings from QGIS project.": "Il valore predefinito è `False`; impostare `True` per importare le impostazioni di DataPlotly dal progetto QGIS.",
      "Default is `False`, set tot `True` to activate reset user password by email workflow.": "Il valore predefinito è `False`; impostare `True` per attivare la procedura di reimpostazione della password utente tramite e-mail.",
      "Default is `False`. Set to `True` to log users editing action into database.": "Il valore predefinito è `False`. Impostare `True` per registrare nel database le azioni di modifica degli utenti.",
      "Default is `False`. Set to `True` to render possible give to `anonymous user` editing permissions.": "Il valore predefinito è `False`. Impostare `True` per poter concedere i permessi di modifica all'`utente anonimo`.",
      "Default is `True`. Set to `False` for not show editing button activate/deactivate into layers project list.": "Il valore predefinito è `True`. Impostare `False` per non mostrare il pulsante di attivazione/disattivazione della modifica nell'elenco dei layer del progetto.",
      "Default is `['qgs', 'qgz', 'png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ods']`": "Il valore predefinito è `['qgs', 'qgz', 'png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ods']`.",
      "Default is `['shp', 'xls']`, set download data format. Values possible:": "Il valore predefinito è `['shp', 'xls']`; definisce il formato di download dei dati. I valori possibili sono:",
      "Default is `http://localhost:8080/ors/v2/`, this is the endpoint for Openrouteservice API.": "Il valore predefinito è `http://localhost:8080/ors/v2/`, l'endpoint dell'API Openrouteservice.",
      "Editing settings": "Impostazioni di modifica",
      "File manager settings": "Impostazioni di File Manager",
      "Frontend portal setting": "Impostazione del portale front-end",
      "G3W-SUITE accessory modules:": "Moduli aggiuntivi di G3W-SUITE:",
      "General layout settings": "Impostazioni generali del layout",
      "Google reCAPTCHA": "Google reCAPTCHA",
      "Google reCAPTCHA system can be added to *login form* and to *password reset form* ((is activated)) and *registration form* (is activated)": "È possibile aggiungere Google reCAPTCHA al *modulo di accesso*, al *modulo di reimpostazione della password* (se attivato) e al *modulo di registrazione* (se attivato).",
      "I.e.": "Ad esempio:",
      "If it's set to `True` base url path for G3W-SUITE admin section become `/admin/`.": "Se impostato su `True`, il percorso URL di base della sezione di amministrazione di G3W-SUITE diventa `/admin/`.",
      "If set to True remember to set Django emailing settings (https://docs.djangoproject.com/en/2.2/topics/email/).": "Se impostato su True, ricordarsi di configurare le impostazioni e-mail di Django (https://docs.djangoproject.com/en/2.2/topics/email/).",
      "In this case records older than 30 days will be deleted.": "In questo caso verranno eliminati i record più vecchi di 30 giorni.",
      "Is possible set a cronjob with the follow command:": "È possibile pianificare un cron job con il comando seguente:",
      "Last part of path could be common with QGIS project datasource path. I.e.:": "La parte finale del percorso può coincidere con il percorso delle sorgenti dati del progetto QGIS. Ad esempio:",
      "List of available Openrouteservice profiles, default: `(\"driving-car\", \"driving-hgv\")`": "Elenco dei profili Openrouteservice disponibili; il valore predefinito è `(\"driving-car\", \"driving-hgv\")`.",
      "List of formats file that `file form ajax uploader` can manage at global level.": "Elenco dei formati di file che il `caricatore AJAX del modulo file` può gestire a livello globale.",
      "Mandatory, path to disk space where to CRUD geo data files i.e. Shp Raster, etc.": "Obbligatorio: percorso su disco in cui eseguire operazioni CRUD sui file di dati geografici, ad es. Shp, raster ecc.",
      "Mandatory, strign to use as token for internal WMS call for caching module.": "Obbligatorio: stringa da usare come token per le chiamate WMS interne del modulo di caching.",
      "Mandatory.": "Obbligatorio.",
      "Module name added to `G3WADMIN_LOCAL_MORE_APPS` to use as `portal-frontend`. I.e.": "Nome del modulo aggiunto a `G3WADMIN_LOCAL_MORE_APPS` da usare come `portal-frontend`. Ad esempio:",
      "Openrouteservice API key, optional, can be blank if the key is not required by the endpoint.": "Chiave API Openrouteservice, facoltativa; può essere vuota se l'endpoint non la richiede.",
      "Openrouteservice settings": "Impostazioni di Openrouteservice",
      "Path to disk space where to save tile created by tilestache if `TILESTAHCE_CACHE_TYEPE` is se to `Disk`.": "Percorso su disco in cui salvare le tile create da tilestache se `TILESTAHCE_CACHE_TYEPE` è impostato su `Disk`.",
      "Path to geo data directory (shp, Spatialite, raster, etc..).": "Percorso della directory dei dati geografici (shp, Spatialite, raster ecc.).",
      "Project configuration cache": "Cache della configurazione del progetto",
      "Qplotly settings": "Impostazioni di Qplotly",
      "Registration": "Registrazione",
      "Required if RECAPTCHA is True, Google reCAPATCHA private key.": "Obbligatoria se RECAPTCHA è True: chiave privata Google reCAPTCHA.",
      "Required if RECAPTCHA is True, Google reCAPATCHA public key.": "Obbligatoria se RECAPTCHA è True: chiave pubblica Google reCAPTCHA.",
      "See [Appearance settings](appearance-settings.md) for logos, layout, and map client options.": "Consulta le [impostazioni grafiche](appearance-settings.md) per loghi, layout e opzioni del client cartografico.",
      "Settings": "Impostazioni",
      "Settings params for `caching` module": "Parametri di configurazione del modulo `caching`",
      "Settings params for `editing` module.": "Parametri di configurazione del modulo `editing`.",
      "Settings params for `filemanager` module.": "Parametri di configurazione del modulo `filemanager`.",
      "Settings variables about third part services, i.e. Google API etc..": "Variabili di configurazione per servizi di terze parti, ad es. API Google ecc.",
      "Settings variables for user registration system.": "Variabili di configurazione del sistema di registrazione degli utenti.",
      "The `/api/config` response is cached separately from map tiles, by project and user. Project and related configuration changes invalidate the affected cache.": "La risposta di `/api/config` viene memorizzata per progetto e utente, separatamente dalle tile della mappa. Le modifiche al progetto e alle configurazioni associate invalidano la cache interessata.",
      "The following variables can be added to or edited in the project’s `local_settings.py`:": "Le seguenti variabili possono essere aggiunte o modificate nel file `local_settings.py` del progetto:",
      "This logging system continues to save log records with no upper limit. To keep the table from getting too big, there is a `django command` that deletes records older than a set number of days.": "Questo sistema continua a salvare i record di log senza limiti. Per evitare che la tabella diventi troppo grande, è disponibile un `comando Django` che elimina i record più vecchi di un numero di giorni specificato.",
      "Tile cache": "Cache delle tile",
      "To activate it is sufficient add a new log `handler` inside Django `LOGGING` settings and use it for a `logger`:": "Per attivarla è sufficiente aggiungere un nuovo `handler` di log alle impostazioni `LOGGING` di Django e utilizzarlo per un `logger`:",
      "Vendors settings": "Impostazioni dei fornitori",
      "With v3.6.x version G3W-SUITE can save message logs inside the database.": "Dalla versione 3.6.x, G3W-SUITE può salvare i messaggi di log nel database.",
      "`QDJANGO_PRJ_CACHE` enables this cache and defaults to `True`; set it to `False` to disable it. The cache uses Django's default cache backend. Docker configures Redis as that backend.": "`QDJANGO_PRJ_CACHE` abilita questa cache ed è `True` per impostazione predefinita; impostalo su `False` per disattivarla. La cache usa il backend predefinito di Django. Docker configura Redis come backend.",
      "service plus of `Nominatim` default service.": "oltre al servizio predefinito `Nominatim`."
    }
  }
</script>
