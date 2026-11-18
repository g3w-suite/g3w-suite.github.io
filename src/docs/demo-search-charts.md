# Search and charts in the demo

## Search widget creation

To create a search tool available at WebGis level, **choose the vector layer** on which to apply the tool and **click on the `Widget list icon` ![Icon: Widget](/img/manual-english-icon-widget.avif)**

**NB:** there may be a number of searches created by other users for the same layer.

You can activate them by **clicking on the `Linked` chekbox**.

![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.avif)

The listed searches can be **modified, deleted or unlinked** using the appropriate icons.

To **create a new search**, click on the blue link **`New widget`**.

Use the [search widget reference](admin-search.md) to choose the fields, input widgets, and comparison operators.

The example below shows the compilation of the form for creating a search widget dedicated to a cadastral cartography layer.

![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.avif)

Once the form has been filled in, click on the **`OK button` to save** the settings.

Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.

**The widget will already be **`linked`** and therefore available in the WebGis interface on the left panel.**

![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.avif)

## Plots widget

**Add plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**

The module, based on the [Plotly library](https://plotly.com/), manages **plots saved as xml**.

The plots are connected to the layers defined on the QGIS project, in this way, as for the searches and the constraints, it is possible to activate the same plots on all WebGis services in which the reference layer is present.

For this reason, there may be some plots created by other users for the same layer.
You can activate them by **clicking on the `Linked` chekbox**.


![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.avif)

The title of the chart, defined at the plugin level, will be the unique identifier.

Try to create your plots in the QGIS project, save them as .xml and upload them to view the resluts on the webgis.

![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.avif)

![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.avif)

In the client, try filtering the charts by visible or selected features. See [chart filters](client-tools-and-toc.md#charts) for the controls and their effect on related data.

<script type="application/json" data-i18n>
{
  "it": {
    "![Screenshot: Demo Search Result](/img/manual-english-demo-search-result.avif)": "![Schermata: risultato della ricerca nella demo](/img/manual-english-demo-search-result.avif)",
    "![Screenshot: G3W-SUITE Administration Plots](/img/manual-english-g3wsuite-administration-plots.avif)": "![Schermata: grafici nell'amministrazione G3W-SUITE](/img/manual-english-g3wsuite-administration-plots.avif)",
    "![Screenshot: G3W-SUITE Administration Project Search Form](/img/manual-english-g3wsuite-administration-project-search-form.avif)": "![Schermata: modulo di ricerca del progetto nell'amministrazione G3W-SUITE](/img/manual-english-g3wsuite-administration-project-search-form.avif)",
    "![Screenshot: G3W-SUITE Administration Project Widget List](/img/manual-english-g3wsuite-administration-project-widget-list.avif)": "![Schermata: elenco dei widget del progetto nell'amministrazione G3W-SUITE](/img/manual-english-g3wsuite-administration-project-widget-list.avif)",
    "![Screenshot: G3W-SUITE Client Plots](/img/manual-english-g3wsuite-client-plots.avif)": "![Schermata: grafici del client G3W-SUITE](/img/manual-english-g3wsuite-client-plots.avif)",
    "![Screenshot: G3W-SUITE QGIS Plots](/img/manual-english-g3wsuite-qgis-plots.avif)": "![Schermata: grafici QGIS di G3W-SUITE](/img/manual-english-g3wsuite-qgis-plots.avif)",
    "**Add plots created using QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (a great plugin developed by [Matteo Ghetta](https://github.com/ghtmtt)) in the cartographic client.**": "**Aggiungi al client cartografico i grafici creati con QGIS [DataPlotly](https://github.com/ghtmtt/DataPlotly) (un ottimo plugin sviluppato da [Matteo Ghetta](https://github.com/ghtmtt)).**",
    "**NB:** there may be a number of searches created by other users for the same layer.": "**Nota:** potrebbero essere presenti ricerche create da altri utenti per lo stesso layer.",
    "**The widget will already be **`linked`** and therefore available in the WebGis interface on the left panel.**": "**Il widget sarà già **`collegato`** e quindi disponibile nel pannello sinistro dell'interfaccia WebGIS.**",
    "For this reason, there may be some plots created by other users for the same layer.": "Per questo motivo, potrebbero esserci grafici creati da altri utenti per lo stesso layer.",
    "In the client, try filtering the charts by visible or selected features. See [chart filters](client-tools-and-toc.md#charts) for the controls and their effect on related data.": "Nel client, prova a filtrare i grafici per elementi visibili o selezionati. Consulta [i filtri dei grafici](client-tools-and-toc.md#charts) per conoscere i controlli e il loro effetto sui dati correlati.",
    "Once the form has been filled in, click on the **`OK button` to save** the settings.": "Dopo aver compilato il modulo, fai clic su **`OK` per salvare** le impostazioni.",
    "Once the settings are saved, the created widget will appear in the list of Widgets associated with the layer.": "Dopo aver salvato le impostazioni, il widget creato apparirà nell'elenco dei widget associati al layer.",
    "Plots widget": "Widget dei grafici",
    "Search and charts in the demo": "Ricerche e grafici nella demo",
    "Search widget creation": "Creazione di un widget di ricerca",
    "The example below shows the compilation of the form for creating a search widget dedicated to a cadastral cartography layer.": "L'esempio seguente mostra la compilazione del modulo per creare un widget di ricerca dedicato a un layer cartografico catastale.",
    "The listed searches can be **modified, deleted or unlinked** using the appropriate icons.": "Le ricerche elencate possono essere **modificate, eliminate o scollegate** tramite le icone corrispondenti.",
    "The module, based on the [Plotly library](https://plotly.com/), manages **plots saved as xml**.": "Il modulo, basato sulla [libreria Plotly](https://plotly.com/), gestisce **grafici salvati in formato XML**.",
    "The plots are connected to the layers defined on the QGIS project, in this way, as for the searches and the constraints, it is possible to activate the same plots on all WebGis services in which the reference layer is present.": "I grafici sono collegati ai layer definiti nel progetto QGIS; così, come avviene per le ricerche e i vincoli, è possibile attivare gli stessi grafici in tutti i servizi WebGIS in cui è presente il layer di riferimento.",
    "The title of the chart, defined at the plugin level, will be the unique identifier.": "Il titolo del grafico, definito nel plugin, sarà il suo identificativo univoco.",
    "To **create a new search**, click on the blue link **`New widget`**.": "Per **creare una nuova ricerca**, fai clic sul collegamento blu **`Nuovo widget`**.",
    "To create a search tool available at WebGis level, **choose the vector layer** on which to apply the tool and **click on the `Widget list icon` ![Icon: Widget](/img/manual-english-icon-widget.avif)**": "Per creare uno strumento di ricerca disponibile nel WebGIS, **scegli il layer vettoriale** a cui applicarlo e **fai clic sull'icona `Elenco dei widget` ![Icona: widget](/img/manual-english-icon-widget.avif)**",
    "Try to create your plots in the QGIS project, save them as .xml and upload them to view the resluts on the webgis.": "Prova a creare i grafici nel progetto QGIS, salvali in formato .xml e caricali per visualizzarli nel WebGIS.",
    "Use the [search widget reference](admin-search.md) to choose the fields, input widgets, and comparison operators.": "Usa la [guida ai widget di ricerca](admin-search.md) per scegliere campi, widget di input e operatori di confronto.",
    "You can activate them by **clicking on the `Linked` chekbox**.": "Puoi attivarli **selezionando la casella `Collegato`**."
  }
}
</script>
