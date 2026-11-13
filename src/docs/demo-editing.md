# Try online editing

[Back to Demo tutorial](demo.md)

## Editing on line
_**Forms and editing widgets are already defined on the project associated with the tutorial for the geometric layer of buildings and for the alphanumeric table related interventions_maintenance.**_

* **`Buildings`**
  * **id** (integer - primary key): autogenerate
  * **name** (text NOT NULL): text edit
  * **address** (text): Value relation (roads layer - code/name fileds)
  * **zone** (text): text edit (with default values based on a QGIS expression to for association with the intersecting works area)
  * **type** (text NOT NULL): unique values (Administrative, Commercial, Residential)
  * **subtype** (text NOT NULL): value relation with multiple selections (based on type_subtype table for a drill-down cascading forms)
  * **attachment** (integer): check box 1/0 (the visibility of the conditional form Documents is based on this field)
  * **photo** (text): attachment
  * **link** (text): text edit
  * **form** (text): attachment
  * **user** (text): text edit (automatically filled in with the G3W-SUITE  username creator of the feature)
  * **year** (integer NOT NULL): unique values (2015,2016,2017,2018,2019,2020)
  * **high** (integer NOT NULL): range (10-30 step 2)
  * **volume** (integer): range (50-200 step 10)
  * **surface** (integer): text edit
  * **architectural_barriers** (text): Checkbox (Checked - Not checked)
  * **date_barriers** (date): date (yyyy/MM/dd)
  * **safety_exits** (text): checkbox (Checked - Not checked)
  * **date_exits** (date): date (yyyy/MM/dd)
  * **fire_system** (text): Checkbox (Checked - Not checked)
  * **date_fire** (date): date (yyyy/MM/dd)


* **`Maintenance_works`**
  * **id** (integer - primary key): autogenerate
  * **id_buildings** (text - relation key): text edit
  * **maintenance** (text NOT NULL): unique values
  * **date** (date): date (yyyy/MM/dd)
  * **form** (text): attachment
  * **value** (integer): range (10-30 step 2)
  * **outcome** (text): unique values (good, medium, bad)
  * **responsible** (text): text edit
  * **cost** (integer): range (1000-5000 step 1)
  * **validation** (boolean): checkbox (0/1)
   
* **`Buildings rating`**
  * **id** (integer - primary key): autogenerate
  * **id_buildings** (text - relation key): text edit
  * **date** (date): date (yyyy/MM/dd)
  * **value** (integer): range (1000-4000 step 500)
  * **year** (integer): range (2018-2022 step 1)

To activate the editing function on webgis, access the list of layers and identify the three layers shown above.

![Screenshot: G3W-SUITE Administration Project Layer List](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Clicking on the icon **Editing layer** ![Icon: Editing](/img/manual-english-icon-editing.png) (placed at the left of each rows) will open a modal window that will allow you to:
* define the **`editing activation scale`** (only for geometric tables)
* define the **`Viewer users`** (individuals or groups) **`enabled`** for online editing

With regard to the last aspect, it should be noted that **Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**

![Screenshot: Editing Setting](/img/manual-english-editing-setting.png)

Once the editing function is activated, updating the service, the **`Tools menu` will appear on the left panel.**

**By activating the editing function it will be possible to edit the geometries and attributes of the Public Buildings layer and the related interventions.**

![Screenshot: Editing Client Start](/img/manual-english-editing-client-start.png)

![Screenshot: Demo Editing Web](/img/manual-english-demo-editing-web.png)

![Screenshot: Editing Form2](/img/manual-english-editing-form2.png)

For **further information** on the web editing function, read the [**dedicated section on the manual**](editing-client-tools.md).

<script type="application/json" data-i18n>
{
  "it": {
    "**`Buildings`**": "**`Buildings`**",
    "**`Buildings rating`**": "**`Buildings rating`**",
    "**`Maintenance_works`**": "**`Maintenance_works`**",
    "**By activating the editing function it will be possible to edit the geometries and attributes of the Public Buildings layer and the related interventions.**": "**Attivando la funzione di modifica sarà possibile modificare le geometrie e gli attributi del layer Public Buildings e dei relativi interventi.**",
    "**Editing layer**": "**Layer di modifica**",
    "**Viewer users**": "**Utenti Viewer**",
    "**further information**": "**ulteriori informazioni**",
    "**`address`** (text): Value relation (roads layer - code/name fileds)": "**`address`** (testo): relazione dei valori (layer roads - campi code/name)",
    "**`architectural_barriers`** (text): Checkbox (Checked - Not checked)": "**`architectural_barriers`** (testo): casella di controllo (selezionata - non selezionata)",
    "**`attachment`** (integer): check box 1/0 (the visibility of the conditional form Documents is based on this field)": "**`attachment`** (intero): casella di controllo 1/0 (la visibilità del modulo condizionale Documents dipende da questo campo)",
    "**`cost`** (integer): range (1000-5000 step 1)": "**`cost`** (intero): intervallo (1000-5000, passo 1)",
    "**`date`** (date): date (yyyy/MM/dd)": "**`date`** (data): data (yyyy/MM/dd)",
    "**`date_barriers`** (date): date (yyyy/MM/dd)": "**`date_barriers`** (data): data (yyyy/MM/dd)",
    "**`date_exits`** (date): date (yyyy/MM/dd)": "**`date_exits`** (data): data (yyyy/MM/dd)",
    "**`date_fire`** (date): date (yyyy/MM/dd)": "**`date_fire`** (data): data (yyyy/MM/dd)",
    "**`fire_system`** (text): Checkbox (Checked - Not checked)": "**`fire_system`** (testo): casella di controllo (selezionata - non selezionata)",
    "**`form`** (text): attachment": "**`form`** (testo): allegato",
    "**`high`** (integer NOT NULL): range (10-30 step 2)": "**`high`** (intero NOT NULL): intervallo (10-30, passo 2)",
    "**`id`** (integer - primary key): autogenerate": "**`id`** (intero - chiave primaria): generato automaticamente",
    "**`id_buildings`** (text - relation key): text edit": "**`id_buildings`** (testo - chiave di relazione): modifica testo",
    "**`link`** (text): text edit": "**`link`** (testo): modifica testo",
    "**`maintenance`** (text NOT NULL): unique values": "**`maintenance`** (testo NOT NULL): valori univoci",
    "**`name`** (text NOT NULL): text edit": "**`name`** (testo NOT NULL): modifica testo",
    "**`outcome`** (text): unique values (good, medium, bad)": "**`outcome`** (testo): valori univoci (good, medium, bad)",
    "**`photo`** (text): attachment": "**`photo`** (testo): allegato",
    "**`responsible`** (text): text edit": "**`responsible`** (testo): modifica testo",
    "**`safety_exits`** (text): checkbox (Checked - Not checked)": "**`safety_exits`** (testo): casella di controllo (selezionata - non selezionata)",
    "**`subtype`** (text NOT NULL): value relation with multiple selections (based on type_subtype table for a drill-down cascading forms)": "**`subtype`** (testo NOT NULL): relazione dei valori con selezioni multiple (basata sulla tabella type_subtype per moduli a cascata con selezione progressiva)",
    "**`surface`** (integer): text edit": "**`surface`** (intero): modifica testo",
    "**`type`** (text NOT NULL): unique values (Administrative, Commercial, Residential)": "**`type`** (testo NOT NULL): valori univoci (Administrative, Commercial, Residential)",
    "**`user`** (text): text edit (automatically filled in with the G3W-SUITE  username creator of the feature)": "**`user`** (testo): modifica testo (compilato automaticamente con il nome utente G3W-SUITE che ha creato l'entità)",
    "**`validation`** (boolean): checkbox (0/1)": "**`validation`** (booleano): casella di controllo (0/1)",
    "**`value`** (integer): range (10-30 step 2)": "**`value`** (intero): intervallo (10-30, passo 2)",
    "**`value`** (integer): range (1000-4000 step 500)": "**`value`** (intero): intervallo (1000-4000, passo 500)",
    "**`volume`** (integer): range (50-200 step 10)": "**`volume`** (intero): intervallo (50-200, passo 10)",
    "**`year`** (integer NOT NULL): unique values (2015,2016,2017,2018,2019,2020)": "**`year`** (intero NOT NULL): valori univoci (2015,2016,2017,2018,2019,2020)",
    "**`year`** (integer): range (2018-2022 step 1)": "**`year`** (intero): intervallo (2018-2022, passo 1)",
    "Back to Demo tutorial": "Torna al tutorial della demo",
    "_**Forms and editing widgets are already defined on the project associated with the tutorial for the geometric layer of buildings and for the alphanumeric table related interventions_maintenance.**_": "_**Nel progetto del tutorial sono già definiti moduli e widget di modifica per il layer geometrico degli edifici e per la tabella alfanumerica dei relativi interventi.**_",
    "**id** (integer - primary key): autogenerate": "**id** (intero - chiave primaria): generato automaticamente",
    "**name** (text NOT NULL): text edit": "**name** (testo NOT NULL): modifica testo",
    "**address** (text): Value relation (roads layer - code/name fileds)": "**address** (testo): relazione dei valori (layer roads - campi code/name)",
    "**zone** (text): text edit (with default values based on a QGIS expression to for association with the intersecting works area)": "**zone** (testo): modifica testo (con valori predefiniti basati su un'espressione QGIS per l'associazione all'area di lavoro intersecante)",
    "**type** (text NOT NULL): unique values (Administrative, Commercial, Residential)": "**type** (testo NOT NULL): valori univoci (Administrative, Commercial, Residential)",
    "**subtype** (text NOT NULL): value relation with multiple selections (based on type_subtype table for a drill-down cascading forms)": "**subtype** (testo NOT NULL): relazione dei valori con selezioni multiple (basata sulla tabella type_subtype per moduli a cascata con selezione progressiva)",
    "**attachment** (integer): check box 1/0 (the visibility of the conditional form Documents is based on this field)": "**attachment** (intero): casella di controllo 1/0 (la visibilità del modulo condizionale Documents dipende da questo campo)",
    "**photo** (text): attachment": "**photo** (testo): allegato",
    "**link** (text): text edit": "**link** (testo): modifica testo",
    "**form** (text): attachment": "**form** (testo): allegato",
    "**user** (text): text edit (automatically filled in with the G3W-SUITE  username creator of the feature)": "**user** (testo): modifica testo (compilato automaticamente con il nome utente G3W-SUITE che ha creato l'entità)",
    "**year** (integer NOT NULL): unique values (2015,2016,2017,2018,2019,2020)": "**year** (intero NOT NULL): valori univoci (2015,2016,2017,2018,2019,2020)",
    "**high** (integer NOT NULL): range (10-30 step 2)": "**high** (intero NOT NULL): intervallo (10-30, passo 2)",
    "**volume** (integer): range (50-200 step 10)": "**volume** (intero): intervallo (50-200, passo 10)",
    "**surface** (integer): text edit": "**surface** (intero): modifica testo",
    "**architectural_barriers** (text): Checkbox (Checked - Not checked)": "**architectural_barriers** (testo): casella di controllo (selezionata - non selezionata)",
    "**date_barriers** (date): date (yyyy/MM/dd)": "**date_barriers** (data): data (yyyy/MM/dd)",
    "**safety_exits** (text): checkbox (Checked - Not checked)": "**safety_exits** (testo): casella di controllo (selezionata - non selezionata)",
    "**date_exits** (date): date (yyyy/MM/dd)": "**date_exits** (data): data (yyyy/MM/dd)",
    "**fire_system** (text): Checkbox (Checked - Not checked)": "**fire_system** (testo): casella di controllo (selezionata - non selezionata)",
    "**date_fire** (date): date (yyyy/MM/dd)": "**date_fire** (data): data (yyyy/MM/dd)",
    "**id_buildings** (text - relation key): text edit": "**id_buildings** (testo - chiave di relazione): modifica testo",
    "**maintenance** (text NOT NULL): unique values": "**maintenance** (testo NOT NULL): valori univoci",
    "**date** (date): date (yyyy/MM/dd)": "**date** (data): data (yyyy/MM/dd)",
    "**value** (integer): range (10-30 step 2)": "**value** (intero): intervallo (10-30, passo 2)",
    "**outcome** (text): unique values (good, medium, bad)": "**outcome** (testo): valori univoci (good, medium, bad)",
    "**responsible** (text): text edit": "**responsible** (testo): modifica testo",
    "**cost** (integer): range (1000-5000 step 1)": "**cost** (intero): intervallo (1000-5000, passo 1)",
    "**validation** (boolean): checkbox (0/1)": "**validation** (booleano): casella di controllo (0/1)",
    "**value** (integer): range (1000-4000 step 500)": "**value** (intero): intervallo (1000-4000, passo 500)",
    "**year** (integer): range (2018-2022 step 1)": "**year** (intero): intervallo (2018-2022, passo 1)",
    "Clicking on the icon **Editing layer** ![Icon: Editing](/img/manual-english-icon-editing.png) (placed at the left of each rows) will open a modal window that will allow you to:": "Facendo clic sull'icona **Layer di modifica** ![Icona: modifica](/img/manual-english-icon-editing.png) (a sinistra di ogni riga) si aprirà una finestra modale che consentirà di:",
    "Editing on line": "Modifica online",
    "For **further information** on the web editing function, read the [**dedicated section on the manual**](editing-client-tools.md).": "Per **ulteriori informazioni** sulla funzione di modifica sul web, consulta la [**sezione dedicata del manuale**](editing-client-tools.md).",
    "Forms and editing widgets are already defined on the project associated with the tutorial for the geometric layer of buildings and for the alphanumeric table related interventions": "Nel progetto del tutorial sono già definiti moduli e widget di modifica per il layer geometrico degli edifici e per la tabella alfanumerica dei relativi interventi",
    "Screenshot: Demo Editing Web": "Schermata: modifica online della demo",
    "Screenshot: Editing Client Start": "Schermata: avvio del client di modifica",
    "Screenshot: Editing Form2": "Schermata: modulo di modifica",
    "Screenshot: Editing Setting": "Schermata: impostazioni di modifica",
    "Screenshot: G3W-SUITE Administration Project Layer List": "Schermata: elenco dei layer del progetto nell'amministrazione G3W-SUITE",
    "To activate the editing function on webgis, access the list of layers and identify the three layers shown above.": "Per attivare la funzione di modifica nel WebGIS, apri l'elenco dei layer e individua i tre layer mostrati sopra.",
    "With regard to the last aspect, it should be noted that **Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**": "A questo proposito, si noti che gli **utenti Viewer** (singoli o gruppi) **disponibili** nel menu a discesa **saranno limitati a quelli autorizzati a consultare il progetto WebGIS**",
    "Once the editing function is activated, updating the service, the **`Tools menu` will appear on the left panel.**": "Una volta attivata la funzione di modifica e aggiornato il servizio, nel pannello sinistro apparirà il **`menu Strumenti`**.",
    "Try online editing": "Provare la modifica online",
    "define the **`Viewer users`** (individuals or groups) **`enabled`** for online editing": "definire gli **utenti Viewer** (singoli o gruppi) **abilitati** alla modifica online",
    "define the **`editing activation scale`** (only for geometric tables)": "definire la **scala di attivazione della modifica** (solo per le tabelle geometriche)"
  }
}
</script>
