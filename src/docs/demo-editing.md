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

![](/img/manual-english-g3wsuite-administration-project-layer-list.png)

Clicking on the icon **Editing layer** ![](/img/manual-english-icon-editing.png) (placed at the left of each rows) will open a modal window that will allow you to:
* define the **`editing activation scale`** (only for geometric tables)
* define the **`Viewer users`** (individuals or groups) **`enabled`** for online editing

With regard to the last aspect, it should be noted that **Viewers users** (individuals or groups) **available** in the drop-down menu **will be limited to those who have allowed access in consultation to the WebGis project**

![](/img/manual-english-editing-setting.png)

Once the editing function is activated, updating the service, the **`Tools menu` will appear on the left panel.**

**By activating the editing function it will be possible to edit the geometries and attributes of the Public Buildings layer and the related interventions.**

![](/img/manual-english-editing-client-start.png) 

![](/img/manual-english-demo-editing-web.png)

![](/img/manual-english-editing-form2.png)

For **further information** on the web editing function, read the [**dedicated section on the manual**](editing-client-tools.md).
