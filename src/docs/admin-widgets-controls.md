# Widget constraints and search tools

[Back to Administration panel](g3wsuite_administration.md)

## Widgets management

### ![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) Display and editing constraints

Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.

See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).


### ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) Hide columns by User/Groups
**Hide selected layer fields from individual users or groups during viewing.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png).

Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.

![Screenshot: G3W-SUITE Administration Hide Columns New](/img/manual-english-g3wsuite-administration-hide-columns-new.png)

Clicking on the item will open a modal window which will allow you to define:
 * list of fields to hide
 * list of users for whom these fields should be hidden 
 * list of users groups for whom these fields should be hidden

Once all the constraints have been setted, click on the OK to confirm the rules.

[Search widgets](admin-search.md)

### ![Icon: Styles](/img/manual-english-icon-styles.png) Manage layer styles

If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.

It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.

![Screenshot: G3W-SUITE Administration Styles](/img/manual-english-g3wsuite-administration-styles.png)

### Project layers actions
At the top right, identified by the item "Project layers actions", there are icons dedicated to settings that act on multiple elements of the project:
   * ![Icon: Multi Editing](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users
   * ![Icon: Clone Users](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users
   * ![Icon: Chart Order](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Chart Order](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level": "![Icona: ordine dei grafici](/img/manual-english-icon-chart-order.png) **`Project’s Qplotly widget order`:** consente di definire l'ordine di visualizzazione dei grafici attivi nell'interfaccia del client",
    "![Icon: Clone Users](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users": "![Icona: clona utenti](/img/manual-english-icon-clone-users.png) **`Copy permissions`:** consente di clonare tutte le impostazioni definite per un utente (permessi di modifica, vari vincoli...) nel progetto gestito e assegnarle ad altri utenti",
    "![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.png) ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.png) Display and editing constraints": "![Icona: vincoli geografici](/img/manual-english-icon-geoconstraints.png) ![Icona: vincoli alfanumerici](/img/manual-english-icon-alpha-constraints.png) Vincoli di visualizzazione e modifica",
    "![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) Hide columns by User/Groups": "![Icona: nascondi colonne](/img/manual-english-icon-hide-columns.png) Nascondere le colonne per utente/gruppo",
    "![Icon: Multi Editing](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users": "![Icona: modifica multipla](/img/manual-english-icon-multi-editing.png) **`Editing layer`:** consente di attivare la modifica online su più layer contemporaneamente, semplificando la definizione degli utenti abilitati",
    "![Icon: Styles](/img/manual-english-icon-styles.png) Manage layer styles": "![Icona: stili](/img/manual-english-icon-styles.png) Gestire gli stili del layer",
    "**Hide selected layer fields from individual users or groups during viewing.**": "**Nascondi i campi selezionati del layer a singoli utenti o gruppi durante la consultazione.**",
    "At the top right, identified by the item \"Project layers actions\", there are icons dedicated to settings that act on multiple elements of the project:": "In alto a destra, sotto la voce \"Project layers actions\", sono presenti icone dedicate a impostazioni che agiscono su più elementi del progetto:",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.": "Facendo clic sull'icona verrà mostrato l'elenco degli eventuali vincoli alfanumerici esistenti sulle colonne e la voce `+ Create New Column Level constraints` per crearne uno nuovo.",
    "Clicking on the item will open a modal window which will allow you to define:": "Facendo clic sulla voce si aprirà una finestra modale che consente di definire:",
    "Icon: Chart Order": "Icona: ordine dei grafici",
    "Icon: Clone Users": "Icona: clona utenti",
    "Icon: Multi Editing": "Icona: modifica multipla",
    "If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.": "Se nel progetto QGIS **allo stesso layer sono associati più stili**, questi saranno disponibili.",
    "It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.": "È possibile associare nuovi stili **caricando i relativi file QML** e **impostare lo stile predefinito**.",
    "Once all the constraints have been setted, click on the OK to confirm the rules.": "Dopo aver impostato tutti i vincoli, fare clic su OK per confermare le regole.",
    "Project layers actions": "Azioni sui layer del progetto",
    "Screenshot: G3W-SUITE Administration Hide Columns New": "Schermata: nuovo vincolo di colonne nascoste nell'amministrazione di G3W-SUITE",
    "Screenshot: G3W-SUITE Administration Styles": "Schermata: stili nell'amministrazione di G3W-SUITE",
    "Search widgets": "Widget di ricerca",
    "See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).": "Consultare il paragrafo dedicato alle [impostazioni di amministrazione della modifica](editing-administration-settings.md).",
    "This setting is also available for the AnonymousUser user": "Questa impostazione è disponibile anche per l'utente AnonymousUser",
    "Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.": "I widget **Geo-constraints by user/group** e **Alphanumeric and QGIS expressions constraints by user/groups** consentono di definire filtri di modifica e visualizzazione per gli utenti autorizzati a consultare o modificare il progetto.",
    "To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png).": "Per attivare questo tipo di vincolo, fare clic sull'icona Hide columns by User/Groups ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.png) associata al layer interessato.",
    "Widget constraints and search tools": "Vincoli dei widget e strumenti di ricerca",
    "Widgets management": "Gestione dei widget",
    "list of fields to hide": "elenco dei campi da nascondere",
    "list of users for whom these fields should be hidden": "elenco degli utenti a cui nascondere questi campi",
    "list of users groups for whom these fields should be hidden": "elenco dei gruppi di utenti a cui nascondere questi campi"
  }
}
</script>
