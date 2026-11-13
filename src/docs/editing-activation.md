# Editing activation and overview

[Back to Online editing](g3wsuite_editing.md)

## Activation and configuration
### Introduction and main features
The **editing settings** are defined partly at the **QGIS project level (editing form structure, widgets associated with individual attributes, 1:n and, in part, N:M relations)** and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).

Thanks to the integration with the APIs of QGIS it is now possible to manage the main formats (geographically and not) supported by QGIS Server:

 * **reading and editing mode**
   * PostGreSQL/PostGis
   * SQLite/SpatiaLite
   * Oracle Spatial
   * GeoPackage
   * ShapeFile

 * **reading mode**
   * SQL Server
   * Virtual layer

**Pay attention!**
An important note in relation to the formats supported in editing: please remember that only data on PostGreSQL/PostGis and Oracle Satial support multi-user editing.

Multi-user editing on formats such as Shapefile, but also GeoPackage and SpatiaLite, can lead to data corruption.

### 1:N and N:M relational editing

The editing function manages both direct editing on geometric and alphanumeric layers, and editing on layers in a 1:N or N:M (only in paert) relations, also both geometric and alphanumeric.

**Attention:** the management of the editing of the N: M relations is limited to the management of the 1:N relationship between the parent layer and the intermediate table.

This means that currently it is not possible to create new records in table M but only:
 * modify the current relations present
 * create new relations between new elements of layer N and pre-existing records of layer M

The **editing settings** are defined partly at the **QGIS project level** (**editing form structure, widgets associated with individual attributes, 1:n  and N:M relations**) and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).

### Multi-user editing
G3W-SUITE manages **multi-user editing** through a **feature lock system**.

It’s strongly recommended to allow multi-user editing only in the case of layers on the GeoDatabase and not on physical files.

When an enabled user activates the editing function at the map client level, the **features visible on the map at that time will be blocked**, in relation to the editing aspect, **for all the other enabled users** who will still be able to edit features present outside this geographical extension. .

In case of features of a layer locked by other users, the user will receive a warning message when starting the editing.

This block will be deactivated when the user exits the editing mode.

<script type="application/json" data-i18n>
{
  "it": {
    "**Attention:** the management of the editing of the N: M relations is limited to the management of the 1:N relationship between the parent layer and the intermediate table.": "**Attenzione:** la modifica delle relazioni N:M è limitata alla gestione della relazione 1:N tra il layer padre e la tabella intermedia.",
    "**Pay attention!**": "**Attenzione!**",
    "**reading and editing mode**": "**modalità di lettura e modifica**",
    "**reading mode**": "**modalità di lettura**",
    "1:N and N:M relational editing": "Modifica relazionale 1:N e N:M",
    "Activation and configuration": "Attivazione e configurazione",
    "An important note in relation to the formats supported in editing: please remember that only data on PostGreSQL/PostGis and Oracle Satial support multi-user editing.": "Una nota importante sui formati supportati per la modifica: solo i dati su PostGreSQL/PostGis e Oracle Spatial supportano la modifica multiutente.",
    "Back to Online editing": "Torna alle modifiche online",
    "create new relations between new elements of layer N and pre-existing records of layer M": "creare nuove relazioni tra nuovi elementi del layer N e record già esistenti del layer M",
    "Editing activation and overview": "Attivazione e panoramica delle modifiche",
    "G3W-SUITE manages **multi-user editing** through a **feature lock system**.": "G3W-SUITE gestisce la **modifica multiutente** tramite un **sistema di blocco degli elementi**.",
    "In case of features of a layer locked by other users, the user will receive a warning message when starting the editing.": "Se alcuni elementi di un layer sono bloccati da altri utenti, all’avvio della modifica viene mostrato un messaggio di avviso.",
    "Introduction and main features": "Introduzione e funzionalità principali",
    "It’s strongly recommended to allow multi-user editing only in the case of layers on the GeoDatabase and not on physical files.": "Si consiglia vivamente di consentire la modifica multiutente solo per i layer su GeoDatabase, non per quelli archiviati in file fisici.",
    "modify the current relations present": "modificare le relazioni esistenti",
    "Multi-user editing": "Modifica multiutente",
    "Multi-user editing on formats such as Shapefile, but also GeoPackage and SpatiaLite, can lead to data corruption.": "La modifica multiutente di formati come Shapefile, GeoPackage e SpatiaLite può causare la corruzione dei dati.",
    "Thanks to the integration with the APIs of QGIS it is now possible to manage the main formats (geographically and not) supported by QGIS Server:": "Grazie all’integrazione con le API di QGIS è ora possibile gestire i principali formati, geografici e non, supportati da QGIS Server:",
    "The **editing settings** are defined partly at the **QGIS project level (editing form structure, widgets associated with individual attributes, 1:n and, in part, N:M relations)** and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).": "Le **impostazioni di modifica** sono definite in parte a **livello di progetto QGIS (struttura del modulo di modifica, widget associati ai singoli attributi, relazioni 1:n e, in parte, N:M)** e in parte a **livello di amministrazione** (utenti autorizzati alla modifica, scala di attivazione, vincoli alfanumerici e geografici).",
    "The **editing settings** are defined partly at the **QGIS project level** (**editing form structure, widgets associated with individual attributes, 1:n  and N:M relations**) and partly at the **Administration level** (users with editing power, activation scale, alpha and geo constraints).": "Le **impostazioni di modifica** sono definite in parte a **livello di progetto QGIS** (**struttura del modulo di modifica, widget associati ai singoli attributi, relazioni 1:n e N:M**) e in parte a **livello di amministrazione** (utenti autorizzati alla modifica, scala di attivazione, vincoli alfanumerici e geografici).",
    "The editing function manages both direct editing on geometric and alphanumeric layers, and editing on layers in a 1:N or N:M (only in paert) relations, also both geometric and alphanumeric.": "La funzione di modifica gestisce sia la modifica diretta dei layer geometrici e alfanumerici, sia la modifica di layer con relazioni 1:N o N:M (solo in parte), anch’essi geometrici o alfanumerici.",
    "This block will be deactivated when the user exits the editing mode.": "Il blocco viene rimosso quando l’utente esce dalla modalità di modifica.",
    "This means that currently it is not possible to create new records in table M but only:": "Ciò significa che al momento non è possibile creare nuovi record nella tabella M, ma solo:",
    "When an enabled user activates the editing function at the map client level, the **features visible on the map at that time will be blocked**, in relation to the editing aspect, **for all the other enabled users** who will still be able to edit features present outside this geographical extension. .": "Quando un utente autorizzato attiva la funzione di modifica nel client cartografico, gli **elementi visibili sulla mappa in quel momento vengono bloccati** per la modifica **a tutti gli altri utenti autorizzati**, che potranno comunque modificare gli elementi al di fuori di questa estensione geografica."
  }
}
</script>
