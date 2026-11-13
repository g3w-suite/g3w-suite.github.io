# How to Add a New Translation (i.e. Italian) to G3W-SUITE

This step-by-step guide shows you how to contribute to G3W-SUITE internationalization by adding new language translations to the project.

## G3W-ADMIN


### 1. Declare new language inside base settings

Declare the new language to django setting `LANGUAGES` list inse the `base/settings/base.py`
Open your settings.py file and make sure the following settings are present or correctly configured:

```python
...
LANGUAGES = [
    ('en', _('English')),
    ('it', _('Italian')), # Add t the end of list the new language
]
...

```

### 2. Create Translation Files

From your project root (where manage.py is located), run:

```
python3 manage makemessages -l it
```

This command:

Scans your codebase for marked translatable strings;

Creates **.po** files in `locale/it/LC_MESSAGES/`.

Directory structure:

```
locale/
└── it/
    └── LC_MESSAGES/
        └── django.po
```

#### Important

G3W-SUITE is a modular Django application, so you may have multiple **django.po** files. For example, each module (e.g. `core`, `qdjango`, etc.) can contain its own `locale/<lang>/LC_MESSAGES/django.po` file.

### 4. Translate the Messages

Open the locale/it/LC_MESSAGES/django.po file and translate the strings.

Example:

```po
#: templates/home.html:10
msgid "Welcome to the site!"
msgstr "Benvenuto sul sito!"
```

### 5. Compile the Translations

After finishing (or updating) your translations, run:

```
python3 manage.py compilemessages
```

This creates the compiled **.mo** files Django uses to load translations:

`locale/it/LC_MESSAGES/django.mo`

## G3W-CLIENT

Language files are stored into the [`src/assets/locales`](https://github.com/g3w-suite/g3w-client/blob/dev/src/assets/locales) folder.

By adding some of these lines (eg. into your `plugin.js` or `custom.js`) you can change or add custom translation entries:

```js
const gettext = g3wsdk.core.i18n.t;
const GUI     = g3wsdk.gui.GUI;

GUI.isReady().then(() => {
  gettext.register('en', { 'Credits': 'Impressum' }); // change default "en" locale: `Credits` (en) → `Impressum` (en)
  gettext.register('it', { 'Credits': 'Impressum' }); // change default "it" locale: `Credits` (en) → `Impressum` (it)
});
```

Otherwise, edit one of that files and then submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with appropriate changes.

<script type="application/json" data-i18n>
  {
    "it": {
      "1. Declare new language inside base settings": "1. Dichiarare la nuova lingua nelle impostazioni di base",
      "2. Create Translation Files": "2. Creare i file di traduzione",
      "4. Translate the Messages": "4. Tradurre i messaggi",
      "5. Compile the Translations": "5. Compilare le traduzioni",
      "After finishing (or updating) your translations, run:": "Al termine (o dopo aver aggiornato le traduzioni), eseguire:",
      "By adding some of these lines (eg. into your `plugin.js` or `custom.js`) you can change or add custom translation entries:": "Aggiungendo alcune di queste righe (ad es. nel file `plugin.js` o `custom.js`) è possibile modificare o aggiungere voci di traduzione personalizzate:",
      "Creates **.po** files in `locale/it/LC_MESSAGES/`.": "Crea i file **.po** in `locale/it/LC_MESSAGES/`.",
      "Declare the new language to django setting `LANGUAGES` list inse the `base/settings/base.py`": "Dichiarare la nuova lingua nell'elenco `LANGUAGES` delle impostazioni Django in `base/settings/base.py`.",
      "Directory structure:": "Struttura delle directory:",
      "Example:": "Esempio:",
      "From your project root (where manage.py is located), run:": "Dalla directory principale del progetto (dove si trova manage.py), eseguire:",
      "G3W-ADMIN": "G3W-ADMIN",
      "G3W-CLIENT": "G3W-CLIENT",
      "G3W-SUITE is a modular Django application, so you may have multiple **django.po** files. For example, each module (e.g. `core`, `qdjango`, etc.) can contain its own `locale/<lang>/LC_MESSAGES/django.po` file.": "G3W-SUITE è un'applicazione Django modulare, quindi possono essere presenti più file **django.po**. Ad esempio, ogni modulo (come `core`, `qdjango` ecc.) può contenere il proprio file `locale/<lang>/LC_MESSAGES/django.po`.",
      "How to Add a New Translation (i.e. Italian) to G3W-SUITE": "Come aggiungere una nuova traduzione (ad es. in italiano) a G3W-SUITE",
      "Important": "Importante",
      "Language files are stored into the [`src/assets/locales`](https://github.com/g3w-suite/g3w-client/blob/dev/src/assets/locales) folder.": "I file delle lingue sono archiviati nella cartella [`src/assets/locales`](https://github.com/g3w-suite/g3w-client/blob/dev/src/assets/locales).",
      "Open the locale/it/LC_MESSAGES/django.po file and translate the strings.": "Aprire il file locale/it/LC_MESSAGES/django.po e tradurre le stringhe.",
      "Open your settings.py file and make sure the following settings are present or correctly configured:": "Aprire il file settings.py e verificare che le seguenti impostazioni siano presenti o configurate correttamente:",
      "Otherwise, edit one of that files and then submit a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with appropriate changes.": "In alternativa, modificare uno di questi file e inviare una [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) con le modifiche appropriate.",
      "Scans your codebase for marked translatable strings;": "Esamina il codice alla ricerca delle stringhe contrassegnate come traducibili;",
      "This command:": "Questo comando:",
      "This creates the compiled **.mo** files Django uses to load translations:": "Questo comando crea i file compilati **.mo** che Django utilizza per caricare le traduzioni:",
      "This step-by-step guide shows you how to contribute to G3W-SUITE internationalization by adding new language translations to the project.": "Questa guida passo passo spiega come contribuire all'internazionalizzazione di G3W-SUITE aggiungendo nuove traduzioni al progetto."
    }
  }
</script>
