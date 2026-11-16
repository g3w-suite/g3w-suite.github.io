# Configure charts

[Back to Administration panel](g3wsuite_administration.md)

## ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) QPlotly widget

### Activate charts on your WebGis

**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.

At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) and load the xml by clicking on the **'New Qplotly widget'** button.

As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.

After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:
 * **Edit icon:** to reload the XML file after editing the chart in QGIS
 * **Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)
 * **Download icon:** to download the XML
 * **Related widgets icon:** to create multiple charts (see the dedicated section below)
 * **Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client
 * **Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)

For each chart, the following information is displayed:
 * **Title:** defined in the DataPltly plugin
 * **Type:** chart type
 * **Linked checkbox:** to activate/deactivate the chart without removing it
 
![Screenshot: Charts Admin](/img/manual-english-charts-admin.avif)

It is also possible:
 * **download the plot XML file** to reuse it in QGIS
 * **define the activation status** of the plots when the WebGis service is started

![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.avif)

The title of the chart, defined at the plugin level, will be the unique identifier.

In the client, **filter charts by features visible on the map or selected by the user**.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.avif)
![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.avif)

### Multiple charts

The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.

In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.

Steps to create a multiple graph:
 * access the list of graphs associated with a specific layer
 * click the Related widgets icon for one of the graphs to which you want to associate other graphs
 * in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer
 * sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).
 
![Screenshot: Charts Admin Multicharts](/img/manual-english-charts-admin-multicharts.avif)

### Charts based on 1:N data relation (child layer)

If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.

![Screenshot: G3wclient Fomr 1 N Plots](/img/manual-english-g3wclient-fomr-1-n-plots.avif)

![Screenshot: Charts On Childs](/img/manual-english-charts-on-childs.avif)

### Chart visibility
Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).

Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:
 * **Sidebar:** only on the main chart panel
 * **Query:** only associated with parent attributes only at the parent feature attribute level
 * **Sidebar, Query:** in both positions (default)

### Chart order
On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.

To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![Icon: Chart Order](/img/manual-english-icon-chart-order.avif)

You can use Drag&Drop to define the order on the widget list

![Screenshot: Chart Order Settings](/img/manual-english-chart-order-settings.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) QPlotly widget": "![Icona: DataPlotly](/img/manual-english-icon-dataplotly.avif) Widget QPlotly",
    "**Active at startup checkbox:** to define whether the chart should be active when accessing the Charts menu in the web client": "**Casella Attivo all'avvio:** definire se il grafico deve essere attivo quando si accede al menu Charts del client web",
    "**Delete icon:** to delete the chart (deleted for all similar layers, even in other projects)": "**Icona Elimina:** eliminare il grafico (verrà rimosso per tutti i layer simili, anche in altri progetti)",
    "**Download icon:** to download the XML": "**Icona Scarica:** scaricare il file XML",
    "**Edit icon:** to reload the XML file after editing the chart in QGIS": "**Icona Modifica:** ricaricare il file XML dopo aver modificato il grafico in QGIS",
    "**Linked checkbox:** to activate/deactivate the chart without removing it": "**Casella Linked:** attivare o disattivare il grafico senza rimuoverlo",
    "**Position drop-down menu:** to define whether the chart should be displayed in the client sidebar, associated with the queried feature (Query), related to data from a 1:N relationship, or in both positions (Sidebar, Query)": "**Menu a discesa Position:** definire se mostrare il grafico nella barra laterale del client, associato all'elemento interrogato (Query), ai dati di una relazione 1:N oppure in entrambe le posizioni (Sidebar, Query)",
    "**Query:** only associated with parent attributes only at the parent feature attribute level": "**Query:** solo associati agli attributi del padre, a livello degli attributi dell'elemento padre",
    "**Related widgets icon:** to create multiple charts (see the dedicated section below)": "**Icona Widget correlati:** creare grafici multipli (vedere la sezione dedicata più avanti)",
    "**Sidebar, Query:** in both positions (default)": "**Sidebar, Query:** in entrambe le posizioni (predefinito)",
    "**Sidebar:** only on the main chart panel": "**Sidebar:** solo nel pannello principale dei grafici",
    "**Title:** defined in the DataPltly plugin": "**Title:** definito nel plugin DataPlotly",
    "**Type:** chart type": "**Type:** tipo di grafico",
    "**View plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**": "**Visualizzare nel client cartografico i grafici creati con [DataPlotly](https://github.com/ghtmtt/DataPlotly) per QGIS (un ottimo plugin sviluppato da [Matteo Ghetta](https://github.com/ghtmtt)).**",
    "**define the activation status** of the plots when the WebGis service is started": "**definire lo stato di attivazione** dei grafici all'avvio del servizio WebGis",
    "**download the plot XML file** to reuse it in QGIS": "**scaricare il file XML del grafico** per riutilizzarlo in QGIS",
    "Activate charts on your WebGis": "Attivare i grafici nel WebGis",
    "Admin side, via the ‘Position’ drop-down menù, it is now possible to define whether these graphs should be displayed:": "Dal lato Admin, tramite il menu a discesa ‘Position’, è possibile definire se mostrare questi grafici:",
    "After loading the XML file, the loaded chart will be listed, and icons and checkboxes will allow you to select its display modes:": "Dopo aver caricato il file XML, il grafico apparirà nell'elenco; icone e caselle di controllo consentono di scegliere le modalità di visualizzazione:",
    "As with searches, the uploaded graph will now be available in all projects that contain the same layer. As with searches, to activate the graph in other projects, access the layer and check the **'Linked'** checkbox.": "Come le ricerche, il grafico caricato sarà disponibile in tutti i progetti che contengono lo stesso layer. Per attivarlo negli altri progetti, accedere al layer e selezionare la casella **'Linked'**.",
    "At the level of the layer for which the charts has been prepared, click on the **QPlotly widgets** icon ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) and load the xml by clicking on the **'New Qplotly widget'** button.": "Nel layer per cui sono stati preparati i grafici, fare clic sull'icona **QPlotly widgets** ![Icon: Dataplotly](/img/manual-english-icon-dataplotly.avif) e caricare il file XML facendo clic sul pulsante **'New Qplotly widget'**.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Chart order": "Ordine dei grafici",
    "Chart visibility": "Visibilità dei grafici",
    "Charts based on 1:N data relation (child layer)": "Grafici basati su una relazione dati 1:N (layer figlio)",
    "Configure charts": "Configurare i grafici",
    "For each chart, the following information is displayed:": "Per ciascun grafico vengono visualizzate le seguenti informazioni:",
    "Graphs based on child layers/tables of a 1:N relations are visible both in the main graphs menu and associated with the attributes of a feature of the parent layer (for the relations-limited records).": "I grafici basati su layer o tabelle figlie di una relazione 1:N sono visibili sia nel menu principale dei grafici sia tra gli attributi di un elemento del layer padre (per i record limitati dalla relazione).",
    "Icon: Chart Order": "Icona: ordine dei grafici",
    "Icon: Dataplotly": "Icona: DataPlotly",
    "If the chart is linked to a child layer in a 1:N relation, it can also be displayed at the information level of the individual parent features and in the display of the table of related children.": "Se il grafico è collegato a un layer figlio in una relazione 1:N, può essere mostrato anche nelle informazioni dei singoli elementi del layer padre e nella tabella dei figli correlati.",
    "In G3W-SUITE, you can associate two or more graphs to display them as overlapping graphs on the client.": "In G3W-SUITE è possibile associare due o più grafici e mostrarli sovrapposti nel client.",
    "In the client, **filter charts by features visible on the map or selected by the user**.": "Nel client, **filtra i grafici in base alle geometrie visibili sulla mappa o selezionate dall'utente**.",
    "It is also possible:": "È inoltre possibile:",
    "Multiple charts": "Grafici multipli",
    "On the Admin side it is possible to define the display order of the graphs, associated with the WebGis service, within the Charts panel of the cartographic client.": "Dal lato Admin è possibile definire l'ordine di visualizzazione dei grafici associati al servizio WebGis nel pannello Charts del client cartografico.",
    "Screenshot: Chart Order Settings": "Schermata: impostazioni dell'ordine dei grafici",
    "Screenshot: Charts Admin": "Schermata: amministrazione dei grafici",
    "Screenshot: Charts Admin Multicharts": "Schermata: grafici multipli nell'amministrazione",
    "Screenshot: Charts On Childs": "Schermata: grafici sui layer figlio",
    "Screenshot: G3W-SUITE Administration Plots": "Schermata: grafici nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Client Plots": "Schermata: grafici del client G3W-SUITE",
    "Screenshot: G3W-SUITE QGIS Plots": "Schermata: grafici QGIS di G3W-SUITE",
    "Screenshot: G3wclient Fomr 1 N Plots": "Schermata: grafici 1:N nel modulo client G3W",
    "Steps to create a multiple graph:": "Procedura per creare un grafico multiplo:",
    "The QGIS DataPlotly plugin does not allow you to export the XML of multiple overlapping graphs.": "Il plugin DataPlotly per QGIS non consente di esportare l'XML di più grafici sovrapposti.",
    "The module, based on the [Plotly library](https://plotly.com/), , manages plots builts and saved as xml in the DataPlotly QGIS plugin.": "Il modulo, basato sulla [libreria Plotly](https://plotly.com/), gestisce i grafici creati e salvati come XML nel plugin DataPlotly per QGIS.",
    "The title of the chart, defined at the plugin level, will be the unique identifier.": "Il titolo del grafico, definito nel plugin, sarà l'identificatore univoco.",
    "To access the configuration menu, click on the **'Project QPlotly widgets order'** icon ![Icon: Chart Order](/img/manual-english-icon-chart-order.avif)": "Per accedere al menu di configurazione, fare clic sull'icona **'Project QPlotly widgets order'** ![Icon: Chart Order](/img/manual-english-icon-chart-order.avif)",
    "You can use Drag&Drop to define the order on the widget list": "È possibile usare Drag&Drop per definire l'ordine nell'elenco dei widget",
    "access the list of graphs associated with a specific layer": "accedere all'elenco dei grafici associati a un layer specifico",
    "click the Related widgets icon for one of the graphs to which you want to associate other graphs": "fare clic sull'icona Related widgets di uno dei grafici a cui si desidera associare altri grafici",
    "in the window, add the graphs that will make up the multiple graph from those already present and associated with the layer": "nella finestra, aggiungere al grafico multiplo i grafici già presenti e associati al layer",
    "sort the graphs to define their display order (the title shown will be the one associated with the first graph in the list).": "ordinare i grafici per definirne l'ordine di visualizzazione (verrà mostrato il titolo del primo grafico nell'elenco)."
  }
}
</script>
