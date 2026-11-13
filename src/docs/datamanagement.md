#  Management and organization of geographic data and QGIS projects
_**This section describes how to organize QGIS data and projects locally and how to synchronize them on the server environment for publication purposes**_

Thanks to the integration with the APIs of QGIS it is now possible to manage the main formats (geographic or not) supported by QGIS Server:

* **reading and editing mode**
  * PostGreSQL/PostGIS
  * Oracle Spatial (compiling QGIS Server)
  * SQLite/SpatiaLite
  * GeoPackage
  * ShapeFile


* **reading mode**
  * SQL Server
  * Virtual layer

The suite also allows you to manage the consultation and editing of:
 * **simple join data with no nesting limits**
 * **1:N relation data**
 * **N:M relation data** with limitations

## Data on DB Server

If your geographic data is stored on `Server DB`, it will be sufficient to allow access to the DB from the IP address on which the application is installed.

## Data on SpatiaLite/GeoPackage or OGR format
If your geographical data are stored on `SpatiaLite`, `GeoPackage` or an other physical files (`.shp`, `.kml`, `.tif`...) located on your local PC, you will need:
* **organize data and projects** in predefined local directories and subdirectories
* **upload/synchronize geographic data to the corresponding folder located on the server** where the application is installed

**Of course, mixed solutions with geographical data on PostGreSQL/PostGIS, SpatiaLite and other formats will also be possible.**

### Organization of data and projects

Data on physical files and / or on GeoDB SpatiaLite and QGIS cartographic projects must be organized in compliance with the following indications:
 * a **main directory** named and positioned in according to need's user
   * a **`project_data` sub-directory** that must contain the **geographic data** used for the various cartographic projects, such data can also be organized in subdirectories with no nesting limits.
   * a **`projects` sub-directory** that must contain the **QGIS cartographic projects** (.qgz or .qgs files)

![Screenshot: Datamanagement](/img/manual-english-datamanagement.png)

**NB:** The name of the local directory dedicated to geographic data must correspond to the name defined for the **`DATASOURCE_PATH`** variable set during installation.
[See dedicated paragraph.](settings#base-settings)

That directory is also used to contain **images used in the print layouts** associated with the QGIS cartographic projects.

### Geographical data synchronization on the server

The data stored in the local **`project_data`** directory must be synchronized on the server where the G3W-SUITE application is installed.

The geographic data stored in the local **`project_data`** folder must be loaded, reflecting any subdirectory structure.

To synchronize your data access to the Administration panel of G3W-ADMIN and click on the **`Configurations` icon** ![Icon: Configuration](/img/manual-english-iconconfiguration.png) located in the upper right corner.

Choose the **`File Manager`** item in the linked menu.

![Icon: G3wclient Config](/img/manual-english-g3wclient-icon-config.png)

![Screenshot: G3W-SUITE Administration Configuration Menu](/img/manual-english-g3wsuite-administration-configuration-menu.png)

Using this tool it is possible to manage the physical geographic data on the server in a simple and intuitive way.

**The root directory of the File Manager corresponds to the local **`project_data`** directory**

It will therefore be necessary, in the case of using geographic files on the file system, to synchronize the contents of the local **`project_data`** directory (and any sub-directories) before proceeding with the publication of QGIS projects.
 
Two specific directories can also be created within the root directory of the File Manager:

 * **`media_user`**: a directory exposed on the web, to store your **multimedia files**
 * **`svg:`** a directory to store **extra SVG icons** used your QGIS projects

All the directories can be organized in subdirectories with no nesting limits.

**NB:** The names of these directories are defined by the basic settings set during the installation of the suite.
[See dedicated paragraph.](settings#base-settings)

![Screenshot: G3W-SUITE Administration File Manager](/img/manual-english-g3wsuite-administration-file-manager.png)

The example shows the case in which in the local **project_data** directory there are two directories (**geopackage** and **spatialite**) in addition to the two system directories (**svg** and **media_user**).

### Accessed the File Manager tool
Which users can access and manage data on FileManager?
 * **Admin role users**
 * **Editor1 role users**

In the next chapter the powers and limits of the two roles will be described in detail.

<script type="application/json" data-i18n>
  {
    "it": {
      "**1:N relation data**": "**dati con relazioni 1:N**",
      "**`media_user`**: a directory exposed on the web, to store your **multimedia files**": "**`media_user`**: directory esposta sul web in cui archiviare i **file multimediali**",
      "**`svg:`** a directory to store **extra SVG icons** used your QGIS projects": "**`svg:`** directory in cui archiviare **icone SVG aggiuntive** utilizzate nei progetti QGIS",
      "**Admin role users**": "**Utenti con ruolo Admin**",
      "**Editor1 role users**": "**Utenti con ruolo Editor1**",
      "**N:M relation data** with limitations": "**dati con relazioni N:M**, con alcune limitazioni",
      "**NB:** The name of the local directory dedicated to geographic data must correspond to the name defined for the **`DATASOURCE_PATH`** variable set during installation.": "**Nota:** il nome della directory locale dedicata ai dati geografici deve corrispondere al nome definito per la variabile **`DATASOURCE_PATH`** durante l'installazione.",
      "**NB:** The names of these directories are defined by the basic settings set during the installation of the suite.": "**Nota:** i nomi di queste directory sono definiti dalle impostazioni di base configurate durante l'installazione della suite.",
      "**Of course, mixed solutions with geographical data on PostGreSQL/PostGIS, SpatiaLite and other formats will also be possible.**": "**Naturalmente sono possibili anche soluzioni miste con dati geografici su PostGreSQL/PostGIS, SpatiaLite e altri formati.**",
      "**organize data and projects** in predefined local directories and subdirectories": "**organizzare dati e progetti** in directory e sottodirectory locali predefinite",
      "**reading and editing mode**": "**modalità di lettura e modifica**",
      "**reading mode**": "**modalità di lettura**",
      "**simple join data with no nesting limits**": "**dati con join semplici, senza limiti di annidamento**",
      "**The root directory of the File Manager corresponds to the local **`project_data`** directory**": "**La directory radice di File Manager corrisponde alla directory locale **`project_data`****",
      "**upload/synchronize geographic data to the corresponding folder located on the server** where the application is installed": "**caricare/sincronizzare i dati geografici nella cartella corrispondente sul server** in cui è installata l'applicazione",
      "[See dedicated paragraph.](settings#base-settings)": "[Vedere il paragrafo dedicato.](settings#base-settings)",
      "_**This section describes how to organize QGIS data and projects locally and how to synchronize them on the server environment for publication purposes**_": "_**Questa sezione descrive come organizzare localmente i dati e i progetti QGIS e come sincronizzarli sul server per la pubblicazione**_",
      "a **`project_data` sub-directory** that must contain the **geographic data** used for the various cartographic projects, such data can also be organized in subdirectories with no nesting limits.": "una **sottodirectory `project_data`** contenente i **dati geografici** utilizzati nei vari progetti cartografici; i dati possono essere organizzati in sottodirectory senza limiti di annidamento.",
      "a **`projects` sub-directory** that must contain the **QGIS cartographic projects** (.qgz or .qgs files)": "una **sottodirectory `projects`** contenente i **progetti cartografici QGIS** (file .qgz o .qgs)",
      "a **main directory** named and positioned in according to need's user": "una **directory principale**, denominata e collocata in base alle esigenze dell'utente",
      "Accessed the File Manager tool": "Accesso allo strumento File Manager",
      "All the directories can be organized in subdirectories with no nesting limits.": "Tutte le directory possono essere organizzate in sottodirectory senza limiti di annidamento.",
      "Choose the **`File Manager`** item in the linked menu.": "Scegliere la voce **`File Manager`** nel menu che si apre.",
      "Data on DB Server": "Dati su server DB",
      "Data on physical files and / or on GeoDB SpatiaLite and QGIS cartographic projects must be organized in compliance with the following indications:": "I dati costituiti da file fisici e/o da GeoDB SpatiaLite e i progetti cartografici QGIS devono essere organizzati rispettando le seguenti indicazioni:",
      "Data on SpatiaLite/GeoPackage or OGR format": "Dati in formato SpatiaLite/GeoPackage o OGR",
      "Geographical data synchronization on the server": "Sincronizzazione dei dati geografici sul server",
      "GeoPackage": "GeoPackage",
      "Icon: G3wclient Config": "Icona: configurazione di G3W-Client",
      "If your geographic data is stored on `Server DB`, it will be sufficient to allow access to the DB from the IP address on which the application is installed.": "Se i dati geografici sono archiviati su un `server DB`, è sufficiente consentire l'accesso al database dall'indirizzo IP su cui è installata l'applicazione.",
      "If your geographical data are stored on `SpatiaLite`, `GeoPackage` or an other physical files (`.shp`, `.kml`, `.tif`...) located on your local PC, you will need:": "Se i dati geografici sono archiviati in `SpatiaLite`, `GeoPackage` o altri file fisici (`.shp`, `.kml`, `.tif`...) sul computer locale, sarà necessario:",
      "In the next chapter the powers and limits of the two roles will be described in detail.": "Nel capitolo successivo verranno descritti nel dettaglio i poteri e i limiti dei due ruoli.",
      "It will therefore be necessary, in the case of using geographic files on the file system, to synchronize the contents of the local **`project_data`** directory (and any sub-directories) before proceeding with the publication of QGIS projects.": "Pertanto, se si utilizzano file geografici nel file system, prima di pubblicare i progetti QGIS sarà necessario sincronizzare il contenuto della directory locale **`project_data`** e delle eventuali sottodirectory.",
      "Management and organization of geographic data and QGIS projects": "Gestione e organizzazione dei dati geografici e dei progetti QGIS",
      "Oracle Spatial (compiling QGIS Server)": "Oracle Spatial (compilando QGIS Server)",
      "Organization of data and projects": "Organizzazione dei dati e dei progetti",
      "PostGreSQL/PostGIS": "PostGreSQL/PostGIS",
      "Screenshot: Datamanagement": "Schermata: gestione dei dati",
      "Screenshot: G3W-SUITE Administration Configuration Menu": "Schermata: menu di configurazione dell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration File Manager": "Schermata: File Manager dell'amministrazione di G3W-SUITE",
      "ShapeFile": "Shapefile",
      "SQL Server": "SQL Server",
      "SQLite/SpatiaLite": "SQLite/SpatiaLite",
      "Thanks to the integration with the APIs of QGIS it is now possible to manage the main formats (geographic or not) supported by QGIS Server:": "Grazie all'integrazione con le API di QGIS è ora possibile gestire i principali formati (geografici e non) supportati da QGIS Server:",
      "That directory is also used to contain **images used in the print layouts** associated with the QGIS cartographic projects.": "La directory viene utilizzata anche per contenere le **immagini usate nei layout di stampa** associati ai progetti cartografici QGIS.",
      "The data stored in the local **`project_data`** directory must be synchronized on the server where the G3W-SUITE application is installed.": "I dati archiviati nella directory locale **`project_data`** devono essere sincronizzati sul server in cui è installata l'applicazione G3W-SUITE.",
      "The example shows the case in which in the local **project_data** directory there are two directories (**geopackage** and **spatialite**) in addition to the two system directories (**svg** and **media_user**).": "L'esempio mostra il caso in cui nella directory locale **project_data** sono presenti due directory (**geopackage** e **spatialite**), oltre alle due directory di sistema (**svg** e **media_user**).",
      "The geographic data stored in the local **`project_data`** folder must be loaded, reflecting any subdirectory structure.": "I dati geografici archiviati nella cartella locale **`project_data`** devono essere caricati mantenendo la struttura delle eventuali sottodirectory.",
      "The suite also allows you to manage the consultation and editing of:": "La suite consente inoltre di gestire la consultazione e la modifica di:",
      "To synchronize your data access to the Administration panel of G3W-ADMIN and click on the **`Configurations` icon** ![Icon: Configuration](/img/manual-english-iconconfiguration.png) located in the upper right corner.": "Per sincronizzare i dati, accedere al pannello di amministrazione di G3W-ADMIN e fare clic sull'**icona `Configurazioni`** ![Icona: configurazione](/img/manual-english-iconconfiguration.png) nell'angolo superiore destro.",
      "Two specific directories can also be created within the root directory of the File Manager:": "Nella directory radice di File Manager è inoltre possibile creare due directory specifiche:",
      "Using this tool it is possible to manage the physical geographic data on the server in a simple and intuitive way.": "Questo strumento consente di gestire i dati geografici fisici sul server in modo semplice e intuitivo.",
      "Virtual layer": "Layer virtuale",
      "Which users can access and manage data on FileManager?": "Quali utenti possono accedere a File Manager e gestire i dati?"
    }
  }
</script>
