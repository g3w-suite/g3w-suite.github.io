# Users and macro-groups

## Users and Users Groups management
In the left side menu there is the **Users** item with four sub-items:
 * **Add user**
 * **Users list**
 * **Add groups users**
 * **Groups users list**

 A dedicated module integrates Active Directory users via **LDAP**.
 
### Add user
Use this form to add users and set their properties.

 * **`Anagraphic`**: first name, last name and email address
 * **`Login data`**: username and password
 * **`User backend`**: info on user creation (G3W-SUITE or LDAP)
 * **`ACL/Roles`**
   * **Superuser status** (Admin1 and Admin2 users only)
   * **Staff status**: deep administration of the application (Admin1 users only)
   * Main roles (**Editor1, Editor2 or Viewer**)
   * **User Editor groups**: Editor2 User Groups the user must belong to
   * **User Viewer groups**: Viewer User Groups the user must belong to
 * **`User data`**:
   * Departments and image to be associated with the profile

![Screenshot: G3W-SUITE Administration User Add](/img/manual-english-g3wsuite-administration-user-add.avif)

After filling in the various form, click on the Save button to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)

### Users list
Through this form you can consult the list of enabled users and their characteristics:
 * Username
 * Roles
 * User groups to which they belong
 * Associated Cartographic MacroGroups (optional)
 * State of user: active/deactivated
 * Super user and Staff privileges
 * Email, First and Last name
 * Created: creation date
 * Backend: info on user creation (G3W-SUITE or LDAP)
 
![Screenshot: G3W-SUITE Administration User List](/img/manual-english-g3wsuite-administration-user-list.avif)

The icons at the head of each row, allow you to:
 * ![Icon: Edit](/img/manual-english-icon-edit.avif) **Modify:** to modify the characteristics of the user
 * ![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete:** to permanently delete a user
 
### Add Group Users
Use this form to create user groups and assign their roles.
Use this form to create user groups and assign their roles.

It is possible to create only two types of user groups:
 * **`Editor`:** in which only Editor2 users can be inserted
 * **`Viewer`:** in which only Viewer users can be inserted

The association between user and user groups can also be achieved at the individual user management level.
The association between user and user groups can also be achieved at the individual user management level.

In the specific form for creating user groups, the following info are defined:
 * **Name**
 * **Role:** Editor or Viewer
 * **Users:** list of users belonging to the group

![Screenshot: G3W-SUITE Administration Usergroup Add](/img/manual-english-g3wsuite-administration-usergroup-add.avif)
 
After filling in the from, click on the **Save** button to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)

### Groups users list
Through this form it is possible to consult the list of enabled user groups, their characteristics and the individual users belonging to the group.

![Screenshot: G3W-SUITE Administration Usergroup List](/img/manual-english-g3wsuite-administration-usergroup-list.avif)

Using the icons at the head of each row, you can:
 * ![Icon: View](/img/manual-english-icon-view.avif) **Show details:** to consult the characteristics of the user group
 * ![Icon: Edit](/img/manual-english-icon-edit.avif) **Modify:** to modify the characteristics of the group
 * ![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete:** to permanently delete a group and therefore association with users belonging to the group itself

## Macro Cartographic Groups
In this section it is possible to view the list of Cartographic Macrogroups, manage them and create new ones.

**ATTENTION: use the Cartographic MacroGroups only if you need them.**

See chapter [Hierarchical organization of WebGis services and types of Users](user_groups_organization.md) to learn more about this aspect.

For example, you can create a **Macrogroup** to collect a series of **Cartographic Groups** belonging to the same Administration (single Municipality within a Union of Municipalities) or more simply to have main containers that contain second level groupings (Groups).

On the left side menu there is the **MacroGroup Cartographic** item with two sub-items:
 * **Add MacroGroups:** to create a new Cartographic MacroGroup
 * **MacroGroups list:** to access the list of MacroGroups present
 
### Add MacroGroups
Through this item, available only for the **Admin** users, it will be possible to **create a new Cartographic MacroGroup.

Assign one or more Editor1 users to a cartographic macro-group when you need to delegate content management.

Learn more about this in the [dedicated session](user_groups_organization)

#### ACL users
**`Editor users`:** select the **Editor1** users who can manage the macro-group's content. Only admins can change the macro-group itself or its assignments.

#### General data
 * **`Identification name *`:** a generic internal identification name (not show in the front end)
 * **`Title *`:** descriptive title of the MacroGroup (will appear in the list of MacroGroups) and, eventually, in the client header
   * **Use title for client** option
   * **Use logo image for client** option
 * **`Description`:** the description to be associated with the MacroGroup in the frontend
 * **`Logo img*`:** the logo to be associated with the MacroGroup in the frontend and, eventually, in the client header

Client header composition follows the [Cartographic Group logo settings](admin-cartographic-groups.md).

After compiling the form, click on the **Save button** to confirm your choices.

![Button: Save](/img/manual-english-buttom-save.avif)


### MacroGroups list
The menu provides access to the list of cartographic macro-groups present.

![Screenshot: G3W-SUITE Administration Macrogroup List](/img/manual-english-g3wsuite-administration-macrogroup-list.avif)

There are a series of icons to access specific functions:
 * ![Icon: View](/img/manual-english-icon-view.avif) **Show the details** of the MacroGroup
 * ![Icon: Edit](/img/manual-english-icon-edit.avif) **Change** characteristics of the MacroGroup
 * ![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete** MacroGroup

Deleting a macro-group removes its associations with cartographic groups. It does not delete the groups, their projects, or their widgets. A cartographic group can belong to more than one macro-group.

#### Define the MacroGroups order on the FrontEnd
Through the Drag & Drop function it is possible to define the order of the MacroGroups in the list. This order will be reflected in the FrontEnd.





<script type="application/json" data-i18n>
  {
    "it": {
      "![Icon: Edit](/img/manual-english-icon-edit.avif) **Change** characteristics of the MacroGroup": "![Icona: modifica](/img/manual-english-icon-edit.avif) **Modifica** le caratteristiche del Macrogruppo",
      "![Icon: Edit](/img/manual-english-icon-edit.avif) **Modify:** to modify the characteristics of the group": "![Icona: modifica](/img/manual-english-icon-edit.avif) **Modifica:** modificare le caratteristiche del gruppo",
      "![Icon: Edit](/img/manual-english-icon-edit.avif) **Modify:** to modify the characteristics of the user": "![Icona: modifica](/img/manual-english-icon-edit.avif) **Modifica:** modificare le caratteristiche dell'utente",
      "![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete** MacroGroup": "![Icona: elimina](/img/manual-english-icon-erase.avif) **Elimina** il Macrogruppo",
      "![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete:** to permanently delete a group and therefore association with users belonging to the group itself": "![Icona: elimina](/img/manual-english-icon-erase.avif) **Elimina:** eliminare definitivamente un gruppo e la relativa associazione con gli utenti che ne fanno parte",
      "![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete:** to permanently delete a user": "![Icona: elimina](/img/manual-english-icon-erase.avif) **Elimina:** eliminare definitivamente l'utente",
      "![Icon: View](/img/manual-english-icon-view.avif) **Show details:** to consult the characteristics of the user group": "![Icona: visualizza](/img/manual-english-icon-view.avif) **Mostra dettagli:** consultare le caratteristiche del gruppo di utenti",
      "![Icon: View](/img/manual-english-icon-view.avif) **Show the details** of the MacroGroup": "![Icona: visualizza](/img/manual-english-icon-view.avif) **Mostra i dettagli** del Macrogruppo",
      "**ATTENTION: use the Cartographic MacroGroups only if you need them.**": "**ATTENZIONE: utilizzare i Macrogruppi cartografici solo se necessario.**",
      "**Add MacroGroups:** to create a new Cartographic MacroGroup": "**Add MacroGroups:** creare un nuovo Macrogruppo cartografico",
      "**Add groups users**": "**Add groups users**",
      "**Add user**": "**Add user**",
      "**Groups users list**": "**Groups users list**",
      "**MacroGroups list:** to access the list of MacroGroups present": "**MacroGroups list:** accedere all'elenco dei Macrogruppi presenti",
      "**Name**": "**Nome**",
      "**Role:** Editor or Viewer": "**Role:** Editor o Viewer",
      "**Staff status**: deep administration of the application (Admin1 users only)": "**Stato Staff**: amministrazione avanzata dell'applicazione (solo utenti Admin1)",
      "**Superuser status** (Admin1 and Admin2 users only)": "**Stato di superutente** (solo utenti Admin1 e Admin2)",
      "**Use logo image for client** option": "opzione **Use logo image for client**",
      "**Use title for client** option": "opzione **Use title for client**",
      "**User Editor groups**: Editor2 User Groups the user must belong to": "**Gruppi Editor dell'utente**: gruppi di utenti Editor2 a cui l'utente deve appartenere",
      "**User Viewer groups**: Viewer User Groups the user must belong to": "**Gruppi Viewer dell'utente**: gruppi di utenti Viewer a cui l'utente deve appartenere",
      "**Users list**": "**Users list**",
      "**Users:** list of users belonging to the group": "**Users:** elenco degli utenti appartenenti al gruppo",
      "**`Anagraphic`**: first name, last name and email address": "**`Anagraphic`**: nome, cognome e indirizzo e-mail",
      "**`Description`:** the description to be associated with the MacroGroup in the frontend": "**`Description`:** descrizione da associare al Macrogruppo nel front end",
      "**`Editor users`:** select the **Editor1** users who can manage the macro-group's content. Only admins can change the macro-group itself or its assignments.": "**`Editor users`:** seleziona gli utenti **Editor1** che possono gestire i contenuti del macrogruppo. Solo gli amministratori possono modificare il macrogruppo o le sue assegnazioni.",
      "**`Editor`:** in which only Editor2 users can be inserted": "**`Editor`:** possono includere solo utenti Editor2",
      "**`Identification name *`:** a generic internal identification name (not show in the front end)": "**`Identification name *`:** un nome identificativo interno generico (non visibile nel front end)",
      "**`Login data`**: username and password": "**`Login data`**: nome utente e password",
      "**`Logo img*`:** the logo to be associated with the MacroGroup in the frontend and, eventually, in the client header": "**`Logo img*`:** logo da associare al Macrogruppo nel front end ed eventualmente nell'intestazione del client",
      "**`Title *`:** descriptive title of the MacroGroup (will appear in the list of MacroGroups) and, eventually, in the client header": "**`Title *`:** titolo descrittivo del Macrogruppo (apparirà nell'elenco dei Macrogruppi ed eventualmente nell'intestazione del client)",
      "**`User backend`**: info on user creation (G3W-SUITE or LDAP)": "**`User backend`**: informazioni sulla creazione dell'utente (G3W-SUITE o LDAP)",
      "**`User data`**:": "**`Dati utente`**:",
      "**`Viewer`:** in which only Viewer users can be inserted": "**`Viewer`:** possono includere solo utenti Viewer",
      "A dedicated module integrates Active Directory users via **LDAP**.": "Un modulo dedicato integra gli utenti Active Directory tramite **LDAP**.",
      "ACL users": "Utenti ACL",
      "Add Group Users": "Aggiungere gruppi di utenti",
      "Add MacroGroups": "Aggiungere Macrogruppi",
      "Add user": "Aggiungere un utente",
      "After compiling the form, click on the **Save button** to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante **Save** per confermare le scelte.",
      "After filling in the from, click on the **Save** button to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante **Save** per confermare le scelte.",
      "After filling in the various form, click on the Save button to confirm your choices.": "Dopo aver compilato il modulo, fare clic sul pulsante Save per confermare le scelte.",
      "Assign one or more Editor1 users to a cartographic macro-group when you need to delegate content management.": "Assegna uno o più utenti Editor1 a un macrogruppo cartografico quando vuoi delegare la gestione dei contenuti.",
      "Associated Cartographic MacroGroups (optional)": "Macrogruppi cartografici associati (facoltativo)",
      "Backend: info on user creation (G3W-SUITE or LDAP)": "Backend: informazioni sulla creazione dell'utente (G3W-SUITE o LDAP)",
      "Button: Save": "Pulsante: salva",
      "Client header composition follows the [Cartographic Group logo settings](admin-cartographic-groups.md).": "La composizione dell'intestazione del client segue le [impostazioni del logo del Gruppo cartografico](admin-cartographic-groups.md).",
      "Created: creation date": "Created: data di creazione",
      "Define the MacroGroups order on the FrontEnd": "Definire l'ordine dei Macrogruppi nel FrontEnd",
      "Deleting a macro-group removes its associations with cartographic groups. It does not delete the groups, their projects, or their widgets. A cartographic group can belong to more than one macro-group.": "Eliminare un macrogruppo rimuove le sue associazioni ai gruppi cartografici, ma non elimina i gruppi, i loro progetti o i loro widget. Un gruppo cartografico può appartenere a più macrogruppi.",
      "Departments and image to be associated with the profile": "Dipartimenti e immagine da associare al profilo",
      "Email, First and Last name": "E-mail, nome e cognome",
      "For example, you can create a **Macrogroup** to collect a series of **Cartographic Groups** belonging to the same Administration (single Municipality within a Union of Municipalities) or more simply to have main containers that contain second level groupings (Groups).": "Ad esempio, è possibile creare un **Macrogroup** per raccogliere una serie di **Gruppi cartografici** appartenenti alla stessa amministrazione (un singolo Comune all'interno di un'Unione di Comuni) oppure, più semplicemente, per creare contenitori principali che includono raggruppamenti di secondo livello (Gruppi).",
      "General data": "Dati generali",
      "Groups users list": "Elenco dei gruppi di utenti",
      "Hierarchical organization of WebGis services and types of Users": "Organizzazione gerarchica dei servizi WebGis e tipi di utenti",
      "Icon: Edit": "Icona: modifica",
      "Icon: Erase": "Icona: elimina",
      "Icon: View": "Icona: visualizza",
      "In the left side menu there is the **Users** item with four sub-items:": "Nel menu laterale si trova la voce **Users**, con quattro sottovoci:",
      "In the specific form for creating user groups, the following info are defined:": "Nel modulo specifico per la creazione dei gruppi di utenti si definiscono le seguenti informazioni:",
      "In this section it is possible to view the list of Cartographic Macrogroups, manage them and create new ones.": "In questa sezione è possibile consultare l'elenco dei Macrogruppi cartografici, gestirli e crearne di nuovi.",
      "It is possible to create only two types of user groups:": "È possibile creare solo due tipi di gruppi di utenti:",
      "Learn more about this in the [dedicated session](user_groups_organization)": "Per ulteriori informazioni, consultare la [sezione dedicata](user_groups_organization)",
      "Macro Cartographic Groups": "Macrogruppi cartografici",
      "MacroGroups list": "Elenco dei Macrogruppi",
      "Main roles (**Editor1, Editor2 or Viewer**)": "Ruoli principali (**Editor1, Editor2 o Viewer**)",
      "On the left side menu there is the **MacroGroup Cartographic** item with two sub-items:": "Nel menu laterale è presente la voce **MacroGroup Cartographic**, con due sottovoci:",
      "Roles": "Ruoli",
      "Screenshot: G3W-SUITE Administration Macrogroup List": "Schermata: elenco dei Macrogruppi nell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration User Add": "Schermata: aggiunta di un utente nell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration User List": "Schermata: elenco degli utenti nell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration Usergroup Add": "Schermata: aggiunta di un gruppo di utenti nell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration Usergroup List": "Schermata: elenco dei gruppi di utenti nell'amministrazione di G3W-SUITE",
      "See chapter [Hierarchical organization of WebGis services and types of Users](user_groups_organization.md) to learn more about this aspect.": "Per ulteriori informazioni, consultare il capitolo [Organizzazione gerarchica dei servizi WebGis e tipi di utenti](user_groups_organization.md).",
      "State of user: active/deactivated": "Stato dell'utente: attivo/disattivato",
      "Super user and Staff privileges": "Privilegi di superutente e Staff",
      "The association between user and user groups can also be achieved at the individual user management level.": "L'associazione tra utenti e gruppi di utenti può essere effettuata anche dalla gestione del singolo utente.",
      "The icons at the head of each row, allow you to:": "Le icone all'inizio di ogni riga consentono di:",
      "The menu provides access to the list of cartographic macro-groups present.": "Il menu consente di accedere all'elenco dei Macrogruppi cartografici presenti.",
      "There are a series of icons to access specific functions:": "Sono disponibili diverse icone per accedere a funzioni specifiche:",
      "Through the Drag & Drop function it is possible to define the order of the MacroGroups in the list. This order will be reflected in the FrontEnd.": "La funzione Drag & Drop consente di definire l'ordine dei Macrogruppi nell'elenco. L'ordine verrà mantenuto nel FrontEnd.",
      "Through this form it is possible to consult the list of enabled user groups, their characteristics and the individual users belonging to the group.": "Questo modulo consente di consultare l'elenco dei gruppi di utenti abilitati, le relative caratteristiche e gli utenti che ne fanno parte.",
      "Through this form you can consult the list of enabled users and their characteristics:": "Questo modulo consente di consultare l'elenco degli utenti abilitati e le relative caratteristiche:",
      "Through this item, available only for the **Admin** users, it will be possible to **create a new Cartographic MacroGroup.": "Questa voce, disponibile solo per gli utenti **Admin**, consente di **creare un nuovo Macrogruppo cartografico.",
      "Use this form to add users and set their properties.": "Usa questo modulo per aggiungere utenti e definirne le proprietà.",
      "Use this form to create user groups and assign their roles.": "Usa questo modulo per creare gruppi di utenti e assegnare i ruoli.",
      "User groups to which they belong": "Gruppi di utenti a cui appartengono",
      "Username": "Nome utente",
      "Users and Users Groups management": "Gestione degli utenti e dei gruppi di utenti",
      "Users and macro-groups": "Utenti e macrogruppi",
      "Users list": "Elenco degli utenti",
      "Using the icons at the head of each row, you can:": "Le icone all'inizio di ogni riga consentono di:"
    }
  }
</script>
