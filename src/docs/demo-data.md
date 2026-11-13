# Prepare the demo data

[Back to Demo tutorial](demo.md)

## Download demo data

The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from [this link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.

The .zip file contains the **`G3W-SUITE`** directory with three sub directories:
* **`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial
* **`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)
* **`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format

![Screenshot: Demo Zip File](/img/manual-english-demo-zip-file.png)

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


![Screenshot: Demo QGIS Project](/img/manual-english-demo-qgis-project.png)

### Modify the QGIS project title

The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.

**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**

![Screenshot: Qgisserver Change Title](/img/manual-english-qgisserver-change-title.png)

<script type="application/json" data-i18n>
{
  "it": {
    "**`buildings_rating` (alphanumeric table):** with the annual assessments relating to individual buildings": "**`buildings_rating` (tabella alfanumerica):** contiene le valutazioni annuali relative ai singoli edifici",
    "**`buildings` (polygon layer):** reference layer for editing aspects": "**`buildings` (layer poligonale):** layer di riferimento per gli aspetti legati alla modifica",
    "**`maintenance_works` (alphanumeric table):** with the maintenance interventions associated with the individual buildings": "**`maintenance_works` (tabella alfanumerica):** contiene gli interventi di manutenzione associati ai singoli edifici",
    "**`plots`**: containing a a series of plots created with the **DataPlotly** plugin and saved in xml format": "**`plots`**: contiene una serie di grafici creati con il plugin **DataPlotly** e salvati in formato XML",
    "**`project_data/spatialite`**: containing a SpatiaLite DB with basic data (**`build_management_demo.sqlite`**)": "**`project_data/spatialite`**: contiene un DB SpatiaLite con i dati di base (**`build_management_demo.sqlite`**)",
    "**`projects`:** containing a QGIS project (**`public-buildings-management-demo-310.qgs`**) already optimized for the tutorial": "**`projects`:** contiene un progetto QGIS (**`public-buildings-management-demo-310.qgs`**) già ottimizzato per il tutorial",
    "**`roads` (linear layer):** layer to define the address associated to any buildings": "**`roads` (layer lineare):** layer per definire l'indirizzo associato agli edifici",
    "**`type_subtype` (alphanumeric table):** a decoding table of the type and subtype values associated with the individual buildings": "**`type_subtype` (tabella alfanumerica):** tabella di decodifica dei valori di tipo e sottotipo associati ai singoli edifici",
    "**`work_areas` (polygon layer):** with the perimeter of work areas to be used to define any geo-constraints": "**`work_areas` (layer poligonale):** contiene il perimetro delle aree di lavoro da utilizzare per definire eventuali vincoli geografici",
    "**IMPORTANT: a copy of this data are present on the server, you can not change your local data copy**": "**IMPORTANTE: sul server è presente una copia di questi dati; non è possibile modificare la copia locale dei dati.**",
    "**So, before publishing the project, it will be NECESSARY to change the title associated with the basic project (`Project -> Properties ... - Session: General`)**": "**Quindi, prima di pubblicare il progetto, sarà NECESSARIO modificare il titolo associato al progetto di base (`Project -> Properties ... - Session: General`)**",
    "a **dressing categorized by the `buildings` layer** based on the categorical field **`type`**": "una **simbologia categorizzata del layer `buildings`** basata sul campo categoriale **`type`**",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "Download demo data": "Scaricare i dati della demo",
    "Inside the **`build_management_demo.sqlite` SpatiaLite DB** there are the following layers:": "Nel **DB SpatiaLite `build_management_demo.sqlite`** sono presenti i seguenti layer:",
    "Modify the QGIS project title": "Modificare il titolo del progetto QGIS",
    "pre-developed **query forms** for the **`buildings`** layer and the **`maintenance_works`** table": "**moduli di interrogazione preconfigurati** per il layer **`buildings`** e la tabella **`maintenance_works`**",
    "predefined **editing widgets** for the fields of the two main layers: **`buildings`** , **`maintenance_works`** and **`buildings_rating`** tables": "**widget di modifica predefiniti** per i campi dei due layer principali: **`buildings`** e le tabelle **`maintenance_works`** e **`buildings_rating`**",
    "Prepare the demo data": "Preparare i dati della demo",
    "Screenshot: Demo QGIS Project": "Schermata: progetto QGIS della demo",
    "Screenshot: Demo Zip File": "Schermata: file ZIP della demo",
    "Screenshot: Qgisserver Change Title": "Schermata: modifica del titolo in QGIS Server",
    "The .zip file contains the **`G3W-SUITE`** directory with three sub directories:": "Il file .zip contiene la directory **`G3W-SUITE`** con tre sottodirectory:",
    "the presence of a **1: n relation** between the **`buildings`** layer and the alphanumeric **`maintenance_works`** and **`buildings_rating`** tables": "la presenza di una **relazione 1:n** tra il layer **`buildings`** e le tabelle alfanumeriche **`maintenance_works`** e **`buildings_rating`**",
    "The project (**based on QGIS LTR 3.44.x**) foresees:": "Il progetto (**basato su QGIS LTR 3.44.x**) prevede:",
    "The publication system provides for the use of the **title of the project** as the **unique identifier of the WebGis service**.": "Il sistema di pubblicazione utilizza il **titolo del progetto** come **identificativo univoco del servizio WebGIS**.",
    "The tutorial is based on predefined data and QGIS 3.44.x LTR project **downloadable from [this link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.": "Il tutorial si basa su dati predefiniti e su un progetto QGIS 3.44.x LTR **scaricabile da [questo link](https://drive.google.com/file/d/1Xpx1FvTNWtx74maXe7jatU_GgyC8QlpB/view?usp=sharing)**.",
    "two standard **print layout** and an two **atlas print layout** based on buildgs layer features": "due **layout di stampa** standard e due **layout di stampa atlante** basati sulle entità del layer degli edifici"
  }
}
</script>
