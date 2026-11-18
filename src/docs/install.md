# Manual installation

These instructions use Ubuntu 24.04 LTS (Noble) and Python 3.12.3.
Use this installation for development, not production.

For other releases, check the [version compatibility table](versions.md) before choosing Python and QGIS versions.
The commands below select G3W-ADMIN v3.11.4. The QGIS LTR repository changes over time, so check the installed QGIS version against that table.

For a containerized deployment, follow the [Docker installation guide](docker.md) instead.

**In this page**

- [Install required packages](#install-required-packages)
- [Install QGIS Server](#install-qgis-server)
- [Installation of node.js and Yarn](#installation-of-nodejs-and-yarn)
- [Virtualenv creation](#virtualenv-creation)
- [Install G3W-SUITE](#install-g3w-suite)
- [Deploy G3W-SUITE](#deploy-g3w-suite)
- [Manual installation steps](#manual-installation-steps)

## Install required packages
First step is install dev libraries packages for python module

```bash
sudo apt-get install -y \
    libxml2-dev \
    libxslt1-dev \
    libgdal-dev \
    python3-dev
```

If you are running a ubuntu Server version is necessary to install also a XServer for the Qt libraries. 
Is possible install `XVFB` a virtual framebuffer X server for X Version 11 and run it.

```bash
sudo apt install -y xvfb

sudo Xvfb :99 -screen 0 640x480x24 -nolisten tcp &
export DISPLAY=:99
```
I suggest you to create a systemd service to run it on bootstrap.


## Install QGIS Server

```sh
sudo install -d /etc/apt/keyrings && \
curl -fsSL https://download.qgis.org/downloads/qgis-archive-keyring.gpg | sudo tee /etc/apt/keyrings/qgis-archive-keyring.gpg > /dev/null && \
echo "deb [signed-by=/etc/apt/keyrings/qgis-archive-keyring.gpg] https://qgis.org/ubuntu-ltr noble main" | \
sudo tee /etc/apt/sources.list.d/qgis.list && \
sudo apt-get update && sudo apt-get install -y python3-qgis qgis-server
```

## Installation of node.js and Yarn
G3W-ADMIN use javacript package manager [**Yarn**](https://yarnpkg.com/) and [**Node.js**](https://nodejs.org/it/)

```bash
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
sudo echo "deb https://dl.yarnpkg.com/debian/ stable main" | \
sudo tee /etc/apt/sources.list.d/yarn.list && \
sudo apt-get update && sudo apt install -y yarn && sudo apt-get clean
```
## Create virtualenv

Install the follow python package
[**Virtualenv**](https://virtualenv.pypa.io/en/stable/)
[*Virtualenvwrapper*](https://bitbucket.org/virtualenvwrapper/virtualenvwrapper/src/master/)

The following instructions are for python 3.12

Install python pip and virtualenvwrapper

```bash
sudo apt-get install python3-pip && sudo pip3 install virtualenvwrapper --break-system-packages
```

Create a directory where to create environments for your virtualenvs.
```bash
mkdir <path_to_virtualenvs_directory>
```

To activate virtuenvwrapper on system login, add follow lines to 'bashrc' config file of your user
```bash
nano ~/.bashrc
....
export WORKON_HOME=<path_to_virtualenvs_directory>
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```
Login again with your user to activate `Virtualenvwrapper`

```bash
sudo su <my_ubuntu_username>
```

## Virtualenv creation
To create a virtualnenv is sufficient call mkvirtualenv follow by the identification name for virtualenv (to use QGIS API into a virtualenv only solution is to give access python system site-packages to it using *--system-site-packages* option)
```bash
mkvirtualenv --system-site-packages g3wsuite
```


This last command just make active your new virtualenv environment, for the next times is possible use the follow command to activate the virtualenv environment:

```bash
workon g3wsuite
```

To check that the active environment can import QGIS on Ubuntu, run:

```bash
python -c "import qgis.core; print(qgis.core.__file__)"
```

If the import fails, check that `python3-qgis` is installed and that the environment uses the system Python with access to system site packages.

### Use of native `venv` Python3
For G3W-SUITE deploy clearly can be used the native Python3 `venv` module, `virtualenvwrapper` is a third part module that render the use and management of virtual environments very simple.

## Install G3W-SUITE

### Clone code from github
```bash
git clone --branch v3.11.4 https://github.com/g3w-suite/g3w-admin.git
cd g3w-admin
```

### Set local_settings.py file
G3W-ADMIN is a Django application. Copy the example settings file from the repository root:
```bash
cp g3w-admin/base/settings/local_settings_example.py g3w-admin/base/settings/local_settings.py
```

set database connection parameters (DATABASES), media root (MEDIA_ROOT) and session cookies name (SESSION_COOKIE_NAME):

```python
...

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': '<db_name>',
        'USER': '<db_user>',
        'PASSWORD': '<db_user_password>',
        'HOST': '<db_host>',
        'PORT': '<db_port>',
    }
}

...

DATASOURCE_PATH = '<static_path_to_gis_data_source>'

...

MEDIA_ROOT = '<path_to_media_root>'

...

SESSION_COOKIE_NAME = '<unique_session_id>'
```

!!IMPORTANT!! Make sure that paths set for DATASOURCE_PATH and MEDIA_ROOT exist.

### With paver commands

G3W-ADMIN has a series of [paver](http://pythonhosted.org/Paver/) CLI commands to administrate the suite.
After prepared environment if sufficient invoke paver *install* task
Run the following commands from the cloned repository root.

#### Install paver
```bash
pip3 install paver 
```
#### Install G3W-SUITE
```bash
paver install
```

The installation prompts you to create the first administrator account.

### Run G3W-SUITE

#### By Django
```shell
cd g3w-admin
python3 manage.py runserver 0.0.0.0:8000
```

#### To run the application with paver (EXPERIMENTAL)

From the repository root:

```bash
paver start
```

and for stop
```bash
paver stop
```


G3W-ADMIN is a django application so is possible run app by standard django manage.py commands

```bash
./manage.py runserver
```

## Deploy G3W-SUITE

As other Django application, G3W-SUITE can be deployed by its wsgi capabilities.
On the web if simple to find tutorial for deploy a Django application.

The simpler way is to use [Apache2](https://httpd.apache.org/) as server WEB and its [mod_wsgi](https://en.wikipedia.org/wiki/Mod_wsgi) module.

Alternative solutions are:


* [Apache2](https://httpd.apache.org/) + [mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) + [Uwsgi](https://uwsgi-docs.readthedocs.io/en/latest/)
* [Apache2](https://httpd.apache.org/) + [mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) + [Gunicorn](http://gunicorn.org/)
* [Nginx](https://nginx.org/) + [Uwsgi](https://uwsgi-docs.readthedocs.io/en/latest/)
* [Nginx](https://nginx.org/) + [Gunicorn](http://gunicorn.org/)


## Manual installation steps

The preferred installation is by using the `paver` script as mentioned above, but in case you need to customize the installation process, here are the build and setup steps:

### Build static js code


```bash
# From the repository directory, run:
yarn --ignore-engines --ignore-scripts --prod
nodejs -e "try { require('fs').symlinkSync(require('path').resolve('node_modules/@bower_components'), 'g3w-admin/core/static/bower_components', 'junction') } catch (e) { }"
```

Run the JavaScript and requirements commands from the repository root. The symlink makes the components available for static collection.

### Install requirements

Possibly within a virtual env:

```bash
pip install -r requirements.txt
pip install -r requirements_huey.txt
```

### Django setup

Run these commands from the directory containing `manage.py`:

```bash
cd g3w-admin
python manage.py collectstatic --noinput
python manage.py migrate --noinput
```

After migration, create an administrator account from the directory containing `manage.py`:

```bash
python manage.py createsuperuser
```

Install some fixtures for EPSG and other suite options:

```bash
for FIXTURE in 'BaseLayer.json' 'G3WGeneralDataSuite.json' 'G3WMapControls.json' 'G3WSpatialRefSys.json'; do
    python manage.py loaddata  core/fixtures/${FIXTURE}
done
```

Sync menu tree items (re-run this command in case you installed optional modules and they are not visible in the admin menu tree):

```bash
python manage.py sitetree_resync_apps
```

## Line endings in a Git checkout

Run `git ls-files --eol` to inspect line endings and check the repository's `.gitattributes` for its intended checkout settings. Normalizing the Git index does not by itself rewrite files in the working tree.

To normalize tracked files, first preserve all changes, including staged changes. The following command stages every tracked file, so do not run it if you need to keep uncommitted changes.

```bash
git add --renormalize .
git diff --cached
git ls-files --eol
```

Review the staged diff before committing it. To refresh working-tree files, make a fresh checkout after committing the normalization. Git applies the repository's attributes and your Git configuration when writing files, so confirm they specify LF for the working tree if LF is required.

## Continuous integration testing

CI tests are automatically run on GitHub by custom actions.

The v3.11.4 checkout includes [docker-compose.ltr.yml](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/docker-compose.ltr.yml) and [Dockerfile.ltr.deps](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/ci_scripts/Dockerfile.ltr.deps). The `dev` branch has separate development configurations.

<script type="application/json" data-i18n>
  {
    "it": {
      "!!IMPORTANT!! Make sure that paths set for DATASOURCE_PATH and MEDIA_ROOT exist.": "!!IMPORTANTE!! Verifica che i percorsi impostati per `DATASOURCE_PATH` e `MEDIA_ROOT` esistano.",
      "**In this page**": "**In questa pagina**",
      "After migration, create an administrator account from the directory containing `manage.py`:": "Dopo la migrazione, crea un account amministratore dalla directory che contiene `manage.py`:",
      "After prepared environment if sufficient invoke paver *install* task": "Dopo aver preparato l'ambiente, è sufficiente eseguire il task *install* di paver.",
      "Alternative solutions are:": "In alternativa, è possibile utilizzare:",
      "As other Django application, G3W-SUITE can be deployed by its wsgi capabilities.": "Come le altre applicazioni Django, G3W-SUITE può essere distribuita tramite le proprie funzionalità WSGI.",
      "Build static js code": "Compilare il codice JavaScript statico",
      "By Django": "Con Django",
      "CI tests are automatically run on GitHub by custom actions.": "I test di integrazione continua vengono eseguiti automaticamente su GitHub tramite azioni personalizzate.",
      "Clone code from github": "Clonare il codice da GitHub",
      "Continuous integration testing": "Test di integrazione continua",
      "Create a directory where to create environments for your virtualenvs.": "Crea una directory in cui archiviare gli ambienti virtuali.",
      "Create virtualenv": "Creare un ambiente virtuale",
      "Deploy G3W-SUITE": "Distribuire G3W-SUITE",
      "Django setup": "Configurazione di Django",
      "First step is install dev libraries packages for python module": "Per prima cosa, installa le librerie di sviluppo necessarie ai moduli Python.",
      "For G3W-SUITE deploy clearly can be used the native Python3 `venv` module, `virtualenvwrapper` is a third part module that render the use and management of virtual environments very simple.": "Per distribuire G3W-SUITE è possibile utilizzare il modulo nativo `venv` di Python 3. `virtualenvwrapper` è un modulo di terze parti che semplifica notevolmente l'uso e la gestione degli ambienti virtuali.",
      "For a containerized deployment, follow the [Docker installation guide](docker.md) instead.": "Per un’installazione in container, segui la [guida all’installazione Docker](docker.md).",
      "For other releases, check the [version compatibility table](versions.md) before choosing Python and QGIS versions.": "Per le altre versioni, consulta la [tabella di compatibilità](versions.md) prima di scegliere le versioni di Python e QGIS. Le soluzioni per versioni precedenti di Ubuntu e Python non sono istruzioni per questa installazione.",
      "From the repository root:": "Dalla radice del repository:",
      "G3W-ADMIN has a series of [paver](http://pythonhosted.org/Paver/) CLI commands to administrate the suite.": "G3W-ADMIN mette a disposizione una serie di comandi CLI [paver](http://pythonhosted.org/Paver/) per amministrare la suite.",
      "G3W-ADMIN is a Django application. Copy the example settings file from the repository root:": "G3W-ADMIN è un'applicazione Django. Copia il file di configurazione di esempio dalla radice del repository:",
      "G3W-ADMIN is a django application so is possible run app by standard django manage.py commands": "G3W-ADMIN è un'applicazione Django, quindi può essere avviata con i normali comandi `manage.py` di Django.",
      "G3W-ADMIN use javacript package manager [**Yarn**](https://yarnpkg.com/) and [**Node.js**](https://nodejs.org/it/)": "G3W-ADMIN utilizza il gestore di pacchetti JavaScript [**Yarn**](https://yarnpkg.com/) e [**Node.js**](https://nodejs.org/it/).",
      "I suggest you to create a systemd service to run it on bootstrap.": "È consigliabile creare un servizio systemd per avviare il server automaticamente all'avvio.",
      "If the import fails, check that `python3-qgis` is installed and that the environment uses the system Python with access to system site packages.": "Se l'importazione fallisce, verifica che `python3-qgis` sia installato e che l'ambiente usi il Python di sistema con accesso ai pacchetti di sistema.",
      "If you are running a ubuntu Server version is necessary to install also a XServer for the Qt libraries.": "Se utilizzi Ubuntu Server, è necessario installare anche un server X per le librerie Qt.",
      "Install G3W-SUITE": "Installare G3W-SUITE",
      "Install QGIS Server": "Installare QGIS Server",
      "Install paver": "Installare paver",
      "Install python pip and virtualenvwrapper": "Installare pip per Python e virtualenvwrapper",
      "Install required packages": "Installare i pacchetti necessari",
      "Install requirements": "Installare i requisiti",
      "Install some fixtures for EPSG and other suite options:": "Caricare alcuni fixture per EPSG e altre opzioni della suite:",
      "Install the follow python package": "Installare i seguenti pacchetti Python",
      "Installation of node.js and Yarn": "Installazione di Node.js e Yarn",
      "Is possible install `XVFB` a virtual framebuffer X server for X Version 11 and run it.": "È possibile installare `XVFB`, un server X virtuale basato su framebuffer per X11, ed eseguirlo.",
      "Line endings in a Git checkout": "Fine riga in una copia Git",
      "Login again with your user to activate `Virtualenvwrapper`": "Accedi nuovamente con il tuo utente per attivare `Virtualenvwrapper`.",
      "Manual installation": "Installazione manuale",
      "Manual installation steps": "Passaggi per l'installazione manuale",
      "On the web if simple to find tutorial for deploy a Django application.": "Sul web è facile trovare tutorial per distribuire un'applicazione Django.",
      "Possibly within a virtual env:": "Se necessario, all'interno di un ambiente virtuale:",
      "Review the staged diff before committing it. To refresh working-tree files, make a fresh checkout after committing the normalization. Git applies the repository's attributes and your Git configuration when writing files, so confirm they specify LF for the working tree if LF is required.": "Controlla il diff nell'indice prima di committarlo. Per aggiornare i file della copia di lavoro, crea una nuova copia dopo il commit della normalizzazione. Quando scrive i file, Git applica gli attributi del repository e la tua configurazione Git: se serve LF, verifica che lo prevedano per la copia di lavoro.",
      "Run G3W-SUITE": "Avviare G3W-SUITE",
      "Run `git ls-files --eol` to inspect line endings and check the repository's `.gitattributes` for its intended checkout settings. Normalizing the Git index does not by itself rewrite files in the working tree.": "Esegui `git ls-files --eol` per controllare i fine riga e verifica le impostazioni del file `.gitattributes` del repository. La normalizzazione dell'indice Git non riscrive da sola i file nella copia di lavoro.",
      "Run the JavaScript and requirements commands from the repository root. The symlink makes the components available for static collection.": "Esegui i comandi JavaScript e dei requisiti dalla radice del repository. Il collegamento simbolico rende disponibili i componenti per la raccolta dei file statici.",
      "Run the following commands from the cloned repository root.": "Esegui i comandi seguenti dalla radice del repository clonato.",
      "Run these commands from the directory containing `manage.py`:": "Esegui questi comandi dalla directory che contiene `manage.py`:",
      "Set local_settings.py file": "Configurare il file local_settings.py",
      "Sync menu tree items (re-run this command in case you installed optional modules and they are not visible in the admin menu tree):": "Sincronizzare gli elementi del menu (eseguire di nuovo il comando se hai installato moduli opzionali che non compaiono nel menu di amministrazione):",
      "The commands below select G3W-ADMIN v3.11.4. The QGIS LTR repository changes over time, so check the installed QGIS version against that table.": "I comandi seguenti selezionano G3W-ADMIN v3.11.4. Il repository QGIS LTR cambia nel tempo: verifica quindi la versione QGIS installata rispetto alla tabella.",
      "The following instructions are for python 3.12": "Le istruzioni seguenti si riferiscono a Python 3.12.",
      "The installation prompts you to create the first administrator account.": "L'installazione richiede di creare il primo account amministratore.",
      "The preferred installation is by using the `paver` script as mentioned above, but in case you need to customize the installation process, here are the build and setup steps:": "Il metodo consigliato è utilizzare lo script `paver` descritto sopra. Se devi personalizzare il processo di installazione, segui questi passaggi di compilazione e configurazione:",
      "The simpler way is to use [Apache2](https://httpd.apache.org/) as server WEB and its [mod_wsgi](https://en.wikipedia.org/wiki/Mod_wsgi) module.": "La soluzione più semplice consiste nell'utilizzare [Apache2](https://httpd.apache.org/) come server web e il relativo modulo [mod_wsgi](https://en.wikipedia.org/wiki/Mod_wsgi).",
      "The v3.11.4 checkout includes [docker-compose.ltr.yml](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/docker-compose.ltr.yml) and [Dockerfile.ltr.deps](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/ci_scripts/Dockerfile.ltr.deps). The `dev` branch has separate development configurations.": "La copia v3.11.4 include [docker-compose.ltr.yml](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/docker-compose.ltr.yml) e [Dockerfile.ltr.deps](https://github.com/g3w-suite/g3w-admin/blob/v3.11.4/ci_scripts/Dockerfile.ltr.deps). Il branch `dev` dispone di configurazioni di sviluppo separate.",
      "These instructions use Ubuntu 24.04 LTS (Noble) and Python 3.12.3.": "Queste istruzioni usano Ubuntu 24.04 LTS (Noble) e Python 3.12.3.",
      "This last command just make active your new virtualenv environment, for the next times is possible use the follow command to activate the virtualenv environment:": "L'ultimo comando attiva il nuovo ambiente virtuale. Per attivarlo in seguito, puoi usare il comando seguente:",
      "To activate virtuenvwrapper on system login, add follow lines to 'bashrc' config file of your user": "Per attivare virtualenvwrapper all'accesso al sistema, aggiungi le righe seguenti al file di configurazione `.bashrc` del tuo utente.",
      "To check that the active environment can import QGIS on Ubuntu, run:": "Per verificare che l'ambiente attivo possa importare QGIS su Ubuntu, esegui:",
      "To create a virtualnenv is sufficient call mkvirtualenv follow by the identification name for virtualenv (to use QGIS API into a virtualenv only solution is to give access python system site-packages to it using *--system-site-packages* option)": "Per creare un ambiente virtuale, esegui `mkvirtualenv` seguito dal nome dell'ambiente. Per utilizzare l'API QGIS, abilita l'accesso ai pacchetti Python di sistema con l'opzione *--system-site-packages*.",
      "To normalize tracked files, first preserve all changes, including staged changes. The following command stages every tracked file, so do not run it if you need to keep uncommitted changes.": "Per normalizzare i file tracciati, salva prima tutte le modifiche, comprese quelle nell'indice. Il comando seguente inserisce nell'indice tutti i file tracciati: non eseguirlo se devi conservare modifiche non committate.",
      "To run the application with paver (EXPERIMENTAL)": "Avviare l'applicazione con paver (SPERIMENTALE)",
      "Use of native `venv` Python3": "Uso del modulo nativo `venv` di Python 3",
      "Use this installation for development, not production.": "Usa questa installazione per lo sviluppo, non per la produzione.",
      "Virtualenv creation": "Creazione dell'ambiente virtuale",
      "With paver commands": "Con i comandi paver",
      "and for stop": "Per arrestarla:",
      "set database connection parameters (DATABASES), media root (MEDIA_ROOT) and session cookies name (SESSION_COOKIE_NAME):": "Impostare i parametri di connessione al database (`DATABASES`), la directory dei media (`MEDIA_ROOT`) e il nome dei cookie di sessione (`SESSION_COOKIE_NAME`):"
    }
  }
</script>
