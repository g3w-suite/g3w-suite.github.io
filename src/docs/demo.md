# Demo

## <span id="demo-3-11"></span>Try the live demo

Explore a building and maintenance management project in the stable G3W-SUITE 3.11 demo, based on QGIS 3.44 LTR. Search the map, view charts and print reports.

To try geometric and relational editing, sign in with the public demo account:

- user: **viewer1**
- password: **G3wsuite123**

Features being edited by another user may be temporarily locked.

[Open the stable demo](https://v311.g3wsuite.it/ "primary-button") [Release notes 3.11](/en/news/v3.11/ "outline-button")

## <span id="demo-3-10"></span>Other versions

The maintenance demo uses G3W-SUITE 3.10 and QGIS 3.40 LTR.

[Open the 3.10 demo](https://v310.g3wsuite.it/it/map/demo-310/) · [Release notes 3.10](/en/news/v3.10/)

## <span id="demo-dev"></span>Development branch

Follow development of the next major version on [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).

## Demo tutorial

**_The tutorial is based on a QGIS project dedicated to the management of a layer representing a series of buildings located on the territory._**

**_In addition to the geographical aspects, the project involves the management of numerous and diversified attributes and of the related maintenance interventions through a 1: n type relation._**

In this tutorial you will:
* customize the various graphic-functional aspects of the basic project
* publish the project as a WebGis service
* create personalized searches
* add plots made with DataPlotly QGIS plugin
* activate the editing functionality by customizing associated forms and widgets

![Screenshot: Demo Webgis Project](/img/manual-english-demo-webgis-project.avif)

## Download demo data

The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from [this link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.

The .zip file contains the **`G3W-SUITE`** directory with three sub directories:
* **`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial
* **`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)
* **`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format

![Screenshot: Demo Zip File](/img/manual-english-demo-zip-file.avif)

Inside the **`build_management_demo.sqlite` SpatiaLite DB** there are the following layers:
* **`buildings` (polygon layer):** reference layer for editing aspects
* **`maintenance_works` (alphanumeric table):** with the maintenance interventions associated with the individual buildings
* **`buildings_rating` (alphanumeric table):** with the annual assessments relating to individual buildings
* **`roads` (linear layer):** layer to define the address associated to any buildings
* **`work_areas` (polygon layer):** with the perimeter of work areas to be used to define any geo-constraints
* **`type_subtype` (alphanumeric table):** a decoding table of the type and subtype values associated with the individual buildings

**IMPORTANT: a copy of this data are present on the server, you can not change your local data copy**

The project (**based on QGIS LTR 3.44.x**) foresees:
* a **dressing categorized by the `buildings` layer** based on the categorical field **`type`**
* the presence of a **1: n relation** between the **`buildings`** layer and the alphanumeric **`maintenance_works`** and **`buildings_rating`** tables
* pre-developed **query forms** for the **`buildings`** layer and the **`maintenance_works`** table
* predefined **editing widgets** for the fields of the two main layers: **`buildings`** , **`maintenance_works`** and **`buildings_rating`** tables
* two standard **print layout** and an two **atlas print layout** based on buildgs layer features


![Screenshot: Demo QGIS Project](/img/manual-english-demo-qgis-project.avif)

### Modify the QGIS project title

The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.

**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**

![Screenshot: Qgisserver Change Title](/img/manual-english-qgisserver-change-title.avif)

## Next steps

- [Publish and update a service](demo-publish.md)
- [Activate additional functions](demo-widgets.md)
- [Online editing](demo-editing.md)

<script type="application/json" data-i18n>
{
  "it": {
    "**IMPORTANT: a copy of this data are present on the server, you can not change your local data copy**": "**IMPORTANTE: sul server è presente una copia di questi dati; non è possibile modificare la copia locale dei dati.**",
    "**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**": "**Quindi, prima di pubblicare il progetto, sarà NECESSARIO modificare il titolo associato al progetto di base (`Project -> Properties ... - Session: General`)**",
    "**_In addition to the geographical aspects, the project involves the management of numerous and diversified attributes and of the related maintenance interventions through a 1: n type relation._**": "**_Oltre agli aspetti geografici, il progetto prevede la gestione di numerosi e diversificati attributi e dei relativi interventi di manutenzione tramite una relazione di tipo 1:n._**",
    "**_The tutorial is based on a QGIS project dedicated to the management of a layer representing a series of buildings located on the territory._**": "**_Il tutorial si basa su un progetto QGIS dedicato alla gestione di un layer che rappresenta una serie di edifici presenti sul territorio._**",
    "**`buildings_rating` (alphanumeric table):** with the annual assessments relating to individual buildings": "**`buildings_rating` (tabella alfanumerica):** contiene le valutazioni annuali relative ai singoli edifici",
    "**`buildings` (polygon layer):** reference layer for editing aspects": "**`buildings` (layer poligonale):** layer di riferimento per gli aspetti legati alla modifica",
    "**`maintenance_works` (alphanumeric table):** with the maintenance interventions associated with the individual buildings": "**`maintenance_works` (tabella alfanumerica):** contiene gli interventi di manutenzione associati ai singoli edifici",
    "**`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format": "**`plots`**: contiene una serie di grafici creati con il plugin **DataPlotly** e salvati in formato XML",
    "**`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)": "**`project_data/spatialite`**: contiene un DB SpatiaLite con i dati di base (**`build_management_demo.sqlite`**)",
    "**`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial": "**`projects`:** contiene un progetto QGIS (**`public-buildings-management-demo-310.qgs`**) già ottimizzato per il tutorial",
    "**`roads` (linear layer):** layer to define the address associated to any buildings": "**`roads` (layer lineare):** layer per definire l'indirizzo associato agli edifici",
    "**`type_subtype` (alphanumeric table):** a decoding table of the type and subtype values associated with the individual buildings": "**`type_subtype` (tabella alfanumerica):** tabella di decodifica dei valori di tipo e sottotipo associati ai singoli edifici",
    "**`work_areas` (polygon layer):** with the perimeter of work areas to be used to define any geo-constraints": "**`work_areas` (layer poligonale):** contiene il perimetro delle aree di lavoro da utilizzare per definire eventuali vincoli geografici",
    "Activate additional functions": "Attivare funzioni aggiuntive",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "Customize the demo": "Personalizzare la demo",
    "Demo introduction": "Introduzione alla demo",
    "Demo tutorial": "Tutorial della demo",
    "Development branch": "Branch di sviluppo",
    "Download demo data": "Scaricare i dati della demo",
    "Explore a building and maintenance management project in the stable G3W-SUITE 3.11 demo, based on QGIS 3.44 LTR. Search the map, view charts and print reports.": "Esplora un progetto per la gestione di edifici e manutenzioni nella demo stabile di G3W-SUITE 3.11, basata su QGIS 3.44 LTR. Cerca sulla mappa, consulta i grafici e stampa i report.",
    "Features being edited by another user may be temporarily locked.": "Le feature in modifica da parte di un altro utente possono essere temporaneamente bloccate.",
    "Follow development of the next major version on [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).": "Segui lo sviluppo della prossima versione principale su [GitHub](https://github.com/g3w-suite/g3w-admin/tree/dev).",
    "Follow these steps to prepare a project, publish it as a WebGIS service, and try its main functions.": "Segui questi passaggi per preparare un progetto, pubblicarlo come servizio WebGIS e provarne le funzioni principali.",
    "In this tutorial you will:": "In questo tutorial:",
    "Inside the **`build_management_demo.sqlite` SpatiaLite DB** there are the following layers:": "Nel **DB SpatiaLite `build_management_demo.sqlite`** sono presenti i seguenti layer:",
    "Introduction": "Introduzione",
    "Modify the QGIS project title": "Modificare il titolo del progetto QGIS",
    "Next steps": "Passaggi successivi",
    "Online editing": "Modifica online",
    "Open the 3.10 demo": "Apri la demo 3.10",
    "Open the stable demo": "Apri la demo stabile",
    "Other versions": "Altre versioni",
    "Prepare the demo data": "Preparare i dati della demo",
    "Publish and update a service": "Pubblicare e aggiornare un servizio",
    "Release notes 3.10": "Note di rilascio 3.10",
    "Release notes 3.11": "Note di rilascio 3.11",
    "Screenshot: Demo QGIS Project": "Schermata: progetto QGIS della demo",
    "Screenshot: Demo Webgis Project": "Schermata: progetto WebGIS della demo",
    "Screenshot: Demo Zip File": "Schermata: file ZIP della demo",
    "Screenshot: Qgisserver Change Title": "Schermata: modifica del titolo in QGIS Server",
    "Steps": "Passaggi",
    "The .zip file contains the **`G3W-SUITE`** directory with three sub directories:": "Il file .zip contiene la directory **`G3W-SUITE`** con tre sottodirectory:",
    "The maintenance demo uses G3W-SUITE 3.10 and QGIS 3.40 LTR.": "La demo di manutenzione usa G3W-SUITE 3.10 e QGIS 3.40 LTR.",
    "The project (**based on QGIS LTR 3.44.x**) foresees:": "Il progetto (**basato su QGIS LTR 3.44.x**) prevede:",
    "The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.": "Il sistema di pubblicazione utilizza il **titolo del progetto** come **identificativo univoco del servizio WebGIS**.",
    "The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from [this link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.": "Il tutorial si basa su dati predefiniti e su un progetto QGIS 3.44.x LTR **scaricabile da [questo link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.",
    "To try geometric and relational editing, sign in with the public demo account:": "Per provare la modifica geometrica e relazionale, accedi con l'account pubblico della demo:",
    "Try the live demo": "Prova la demo",
    "a **dressing categorized by the `buildings` layer** based on the categorical field **`type`**": "una **simbologia categorizzata del layer `buildings`** basata sul campo categoriale **`type`**",
    "activate the editing functionality by customizing associated forms and widgets": "attivare la funzionalità di modifica personalizzando i moduli e i widget associati",
    "add plots made with DataPlotly QGIS plugin": "aggiungere grafici creati con il plugin DataPlotly di QGIS",
    "create personalized searches": "creare ricerche personalizzate",
    "customize the various graphic-functional aspects of the basic project": "personalizzare i diversi aspetti grafico-funzionali del progetto di base",
    "password: **G3wsuite123**": "password: **G3wsuite123**",
    "pre-developed **query forms** for the **`buildings`** layer and the **`maintenance_works`** table": "**moduli di interrogazione preconfigurati** per il layer **`buildings`** e la tabella **`maintenance_works`**",
    "predefined **editing widgets** for the fields of the two main layers: **`buildings`** , **`maintenance_works`** and **`buildings_rating`** tables": "**widget di modifica predefiniti** per i campi dei due layer principali: **`buildings`** e le tabelle **`maintenance_works`** e **`buildings_rating`**",
    "publish the project as a WebGis service": "pubblicare il progetto come servizio WebGIS",
    "the presence of a **1: n relation** between the **`buildings`** layer and the alphanumeric **`maintenance_works`** and **`buildings_rating`** tables": "la presenza di una **relazione 1:n** tra il layer **`buildings`** e le tabelle alfanumeriche **`maintenance_works`** e **`buildings_rating`**",
    "two standard **print layout** and an two **atlas print layout** based on buildgs layer features": "due **layout di stampa** standard e due **layout di stampa atlante** basati sulle entità del layer degli edifici",
    "user: **viewer1**": "utente: **viewer1**"
  }
}
</script>
