# Manage cartographic groups

[Back to Administration panel](g3wsuite_administration.md)

## Groups List
**From this item you can access the list of the created cartographic groups.**

### General operations
For each group, the Title and Subtitle defined at the time of creation are shown.

There are also a series of icons to access specific functions:
 * ![Icon: Add](/img/manual-english-icon-add.png) **Add a new project (QGIS)** to be published as WebGis service
 * Number and links to projects published within the Group
 * ![Icon: View](/img/manual-english-icon-view.png) **Show group details**
 * ![Icon: Edit](/img/manual-english-icon-edit.png) **Change** group definitions
 * ![Icon: Erase](/img/manual-english-icon-erase.png) **Delete** group

 In case of request to delete the Cartographic Group, a popup will ask whether the deletion of the Group should be permanent or a simple deactivation, which can be restored from the Trash menu.

 ![Screenshot: Group Delete](/img/manual-english-group-delete.png)

**ATTENTION:** the permanent removal  of the cartographic group will involve:
 * the **removal of all the WebGis services** contained therein
 * the **removal of all widgets** (eg searches) that would be orphaned after the removal of the WebGis services contained in the group. See the Widget chapter for more information.

A large **+ icon** is available to access the form for creating a new group.

![Screenshot: G3W-SUITE Administration Group List](/img/manual-english-g3wsuite-administration-group-list.png)

Filter cartographic groups by:
 * the MacroGroup to which they belong
 * the associated EPSG
 * the different types of users (Editor, Editor and Viewer) associated with them

The options of this last filter vary based on the type of logged in user.

![Screenshot: Group Filter](/img/manual-english-group-filter.png)

### Cartographic Group Trash

The operation of deleting a Cartographic Group is not definitive.

The Group with all its related content (projects and widgets) is moved to the Trash session.

Open the list of deleted groups.

Cartographic Groups and the restore functions through the menu on the left sidebar.

![Screenshot: G3W-ADMIN Trash Group](/img/manual-english-g3wadmin-trash-group.png)

Restoring a Cartographic Group involves restoring all the projects it contains and all the accessory settings/functions of both the group and the projects (permissions, searches, editing settings, downloads, etc...).

**Deleting a Cartographic Group from the trash is an irreversible action.**

### Define the Groups order on the FrontEnd
Drag and drop groups to change their order in the list.

This order will be reflected within the belonging MacroGroups.

**NB:** currently in the list of Groups it is not present in the subdivision in the belonging MacroGroups but the fact that a Group can be associated with only one MacroGroup still allows you to manage intuitively what will be the complessive display order.

<script type="application/json" data-i18n>
{
  "it": {
    "![Icon: Add](/img/manual-english-icon-add.png) **Add a new project (QGIS)** to be published as WebGis service": "![Icona: aggiungi](/img/manual-english-icon-add.png) **Aggiungi un nuovo progetto (QGIS)** da pubblicare come servizio WebGis",
    "![Icon: Edit](/img/manual-english-icon-edit.png) **Change** group definitions": "![Icona: modifica](/img/manual-english-icon-edit.png) **Modifica** le definizioni del gruppo",
    "![Icon: Erase](/img/manual-english-icon-erase.png) **Delete** group": "![Icona: elimina](/img/manual-english-icon-erase.png) **Elimina** il gruppo",
    "![Icon: View](/img/manual-english-icon-view.png) **Show group details**": "![Icona: visualizza](/img/manual-english-icon-view.png) **Mostra i dettagli del gruppo**",
    "**ATTENTION:** the permanent removal  of the cartographic group will involve:": "**ATTENZIONE:** la rimozione definitiva del Gruppo cartografico comporta:",
    "**Deleting a Cartographic Group from the trash is an irreversible action.**": "**L'eliminazione di un Gruppo cartografico dal cestino è irreversibile.**",
    "**From this item you can access the list of the created cartographic groups.**": "**Questa voce consente di accedere all'elenco dei Gruppi cartografici creati.**",
    "**NB:** currently in the list of Groups it is not present in the subdivision in the belonging MacroGroups but the fact that a Group can be associated with only one MacroGroup still allows you to manage intuitively what will be the complessive display order.": "**NB:** al momento l'elenco dei Gruppi non è suddiviso in base ai Macrogruppi di appartenenza; tuttavia, poiché un Gruppo può essere associato a un solo Macrogruppo, è comunque possibile gestire in modo intuitivo l'ordine complessivo di visualizzazione.",
    "A large **+ icon** is available to access the form for creating a new group.": "È disponibile una grande **icona +** per accedere al modulo di creazione di un nuovo gruppo.",
    "Back to Administration panel": "Torna al pannello di amministrazione",
    "Cartographic Group Trash": "Cestino dei Gruppi cartografici",
    "Cartographic Groups": "Gruppi cartografici",
    "Cartographic Groups and the restore functions through the menu on the left sidebar.": "È possibile consultare i Gruppi cartografici eliminati e ripristinarli dal menu nella barra laterale sinistra.",
    "Define the Groups order on the FrontEnd": "Definire l'ordine dei Gruppi nel FrontEnd",
    "Drag and drop groups to change their order in the list.": "Trascina i gruppi per cambiarne l'ordine nell'elenco.",
    "Filter cartographic groups by:": "Filtra i gruppi cartografici per:",
    "For each group, the Title and Subtitle defined at the time of creation are shown.": "Per ciascun gruppo vengono mostrati il titolo e il sottotitolo definiti durante la creazione.",
    "General operations": "Operazioni generali",
    "Groups List": "Elenco dei gruppi",
    "Icon: Add": "Icona: aggiungi",
    "Icon: Edit": "Icona: modifica",
    "Icon: Erase": "Icona: elimina",
    "Icon: View": "Icona: visualizza",
    "In case of request to delete the Cartographic Group, a popup will ask whether the deletion of the Group should be permanent or a simple deactivation, which can be restored from the Trash menu.": "Quando si richiede l'eliminazione del Gruppo cartografico, una finestra chiede se eliminarlo definitivamente o disattivarlo soltanto, consentendone il ripristino dal menu Trash.",
    "MacroGroups": "Macrogruppi",
    "Manage cartographic groups": "Gestire i gruppi cartografici",
    "Number and links to projects published within the Group": "Numero e collegamenti ai progetti pubblicati nel Gruppo",
    "Open the list of deleted groups.": "Apri l'elenco dei gruppi eliminati.",
    "Restoring a Cartographic Group involves restoring all the projects it contains and all the accessory settings/functions of both the group and the projects (permissions, searches, editing settings, downloads, etc...).": "Il ripristino di un Gruppo cartografico ripristina tutti i progetti che contiene e le relative impostazioni/funzioni accessorie del gruppo e dei progetti (permessi, ricerche, impostazioni di modifica, download ecc.).",
    "Screenshot: G3W-ADMIN Trash Group": "Schermata: cestino dei Gruppi di G3W-ADMIN",
    "Screenshot: G3W-SUITE Administration Group List": "Schermata: elenco dei Gruppi nell'amministrazione di G3W-SUITE",
    "Screenshot: Group Delete": "Schermata: eliminazione di un Gruppo",
    "Screenshot: Group Filter": "Schermata: filtro dei Gruppi",
    "The Group with all its related content (projects and widgets) is moved to the Trash session.": "Il Gruppo e tutti i contenuti correlati (progetti e widget) vengono spostati nella sezione Trash.",
    "The operation of deleting a Cartographic Group is not definitive.": "L'eliminazione di un Gruppo cartografico non è definitiva.",
    "The options of this last filter vary based on the type of logged in user.": "Le opzioni di quest'ultimo filtro variano in base al tipo di utente che ha effettuato l'accesso.",
    "There are also a series of icons to access specific functions:": "Sono inoltre disponibili diverse icone per accedere a funzioni specifiche:",
    "This order will be reflected within the belonging MacroGroups.": "L'ordine verrà mantenuto all'interno dei Macrogruppi di appartenenza.",
    "the **removal of all the WebGis services** contained therein": "la **rimozione di tutti i servizi WebGis** contenuti nel gruppo",
    "the **removal of all widgets** (eg searches) that would be orphaned after the removal of the WebGis services contained in the group. See the Widget chapter for more information.": "la **rimozione di tutti i widget** (ad es. le ricerche) che resterebbero orfani dopo la rimozione dei servizi WebGis del gruppo. Per ulteriori informazioni, consultare il capitolo sui widget.",
    "the MacroGroup to which they belong": "Macrogruppo di appartenenza",
    "the associated EPSG": "EPSG associato",
    "the different types of users (Editor, Editor and Viewer) associated with them": "tipi di utenti associati (Editor, Editor e Viewer)"
  }
}
</script>
