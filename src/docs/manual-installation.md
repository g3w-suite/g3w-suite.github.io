---
title: Manual installation
description: These instructions use Ubuntu 24.04 LTS (Noble) and Python 3.12.3. Use this installation for development, not production.
---

# Manual installation

These instructions use Ubuntu 24.04 LTS (Noble) and Python 3.12.3.
Use this installation for development, not production.

For other releases, check the [version compatibility table](versions-and-compatibility.md) before choosing Python and QGIS versions.
The commands below select G3W-ADMIN v3.11.4. The QGIS LTR repository changes over time, so check the installed QGIS version against that table.

For a containerized deployment, follow the [Docker installation guide](docker-installation.md) instead.

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
