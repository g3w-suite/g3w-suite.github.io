# Hierarchical organization of WebGis services and types of Users (roles)
_**This paragraph allows you to understand how G3W-SUITE makes it possible to manage the individual WebGis services in a structured and hierarchical way.**_

In G3W-SUITE it is possible to organize WebGis services on two thematic/functional levels
 * **`Cartographic MacroGroups`**
   * **`Cartographic groups`**

**These organizational levels can be associated with different types of users (Editor 1, Editor2 and Viewer) in order to manage the access/management powers to the individual elements in a granular way.**

The following image shows an example of the functional use of these organizational levels within a Union of Municipalities.

Access policies and individual functional modules may be associated with each WebGis service.

![Screenshot: G3W-SUITE Administration Organization Containers Simple](/img/manual-english-g3wsuite-administration-organization-containers-simple.png)

## Types of Users (Roles)
In G3W-SUITE you can create **Users** and **Users Groups** and associate them with specific roles:
 * **`Admin`:** If the "Staff status" option is also active for this user, the administrator can also access the session of Django administration (basic configuration of the suite)
 * **`Editor1*`:** **administrator of one or more Cartographic MacroGroups** for which it will be possible:
   * create users and/or user groups
   * create Cartographic Groups and, if necessary, assign them to an Editor 2 user
   * publish WebGis services and define their access policy
   * activate and configure some functional modules
 * **`Editor2`:** **administrator of one or more Cartographic Groups** for which it will be possible:
   * publish/update WebGis services and define their access policy
   * activate and configure some functional modules
 * **`Viewer`:** user with access permission in **consultation on WebGis service**s characterized by authentication. This user can also use individual functional Modules if the relative permissions have been attributed to him
 * **`Anonymus User`:** user to be associated with WebGis services and/or functional modules **with free access**

**Pay attention:** The use of the **Editor1** user and **MacroGroups** is recommended only in specific cases or when you want to manage autonomous work environments (e.g. single Public Administrations) in a multi-environment context (e.g. Union of Public Administrations).


In this case the individual **Editor1** users will be associated with cartographic Macrogroups and will **manage users and contents completely independently** from those of other Macrogroups associated with other Editor1 users.

## Hierarchical organization of contents
_**The following paragraph is dedicated to better understanding the relationships between the different types of users and the different elements of the suite (MacroGroups, Map Groups, WebGis services ...).**_

In G3W-SUITE it is possible to manage Webgis services in a more or less structured way
 * **an organizational level** (Cartographic Groups):
 * **two organizational levels** (MacroGroups and Cartographic Groups)

These hierarchical levels can be used for **organizational purposes** (thematic containers) and/or **functional** (containers managed by different users/roles).

It is in fact possible to associate the two types of containers (MacroGroups and Cartographic Groups) to users with different roles/powers (Editor1 and Editor2) who will thus become the Administrators of all their contents.

In particular **Editor1 users will also be able to create/manage users who can be associated with the Cartographic Groups and WebGis services present in the reference MacroGroup**.

The cases relating to one or two organizational levels will be better described below.

### One organization level (absence of MacroGroups)
If MacroGroups are not needed, the Admin user will be the only administrator of the suite and can therefore:
 * create users (individuals and/or groups) of various types
 * create **Cartographic Groups**
 * publish **WebGis services** within the individual **Cartographic Groups**
 * activate some specific modules on individual WebGis services

When creating a cartographic group, the Admin user can define:
 * the eventual user (individual/group) **Editor 2** to associate the Group with
 * **Viewers** users (individuals/groups) who will have access to this container

![Screenshot: G3W-SUITE Administration Organization Containers No Mg](/img/manual-english-g3wsuite-administration-organization-containers-no-mg.png)

In the event that the Cartographic Group is assigned to **Editor 2** (single or group users), they will may autonomously publish/update WebGis services inside in this container. 

**Editor 2** users will also be able to define the access policies to the published WebGis services, limited to the Viewers users associated with the Cartographic Group by the Admin user.

Even the **Admin** user can publish **WebGis services** within a Cartographic Group and, if necessary, associate them with a user (single and/or group) of **Editor 2** type.

### Two organization levels (presence of MacroGroups)

**Macrogroups** can be created only by **Admin** users.

Each **Macrogroup** can be associated with only one **Editor1** user.

Each MacroGroup can be considered as a watertight compartment within which the associated Editor 1 user (administrator of the MacroGroup), will be able to create users and user groups that will be made available to define access permissions for content (Groups Maps, WebGis services, functional modules …) of the reference MacroGroup only.

In this way it will be possible to create totally independent entities, the MacroGroups, which will be managed exclusively by the user Editor 1 associated with them.

Clearly the Admin users (1 and 2) will continue to have full powers on all groups present in the system.

![Screenshot: G3W-SUITE Administration Organization Containers](/img/manual-english-g3wsuite-administration-organization-containers.png)

As previously specified, **Editor 1** user will be able to:
 * create **users** (single and/or groups) of type Editor2 and Viewer
 * create **Cartographic Groups** within its **Macro Group**
 * publish **WebGis services** within his **Cartographic Groups**
 * activate **specific modules** on individual **WebGis services**

When Editor 1 user creates a Cartographic Group, he can define:
 * the eventual **Editor2** user (individual/group) to associate with this Group
 * **Viewers** users (individuals/groups) who will have access to this container


## Accessed the File Manager tool
As described in the previous chapter, the users who can access the FileManager are the following:
 * **Admin role users**
 * **Editor1 role users**

**Admin role users** will be able to access/edit/upload all the contents of the FileManager.

**Editor1 role users** (administrators of a specific MacroGroup) will be able to access/modify/upload only the contents present within a folder identified with the same user name as Editor1 itself.

The creation of a **Editor1** role user (**administrator of a MacroGroup**) determines the automatic creation of a subfolder of the **project_data** folder with the same name as that defined for the Editor1 user.

This user will manage, independently, only the contents of that folder.

Again from the perspective of an infrastructure dedicated to a Union of Municipalities, this will allow each Editor1 (manager of one Administrations) to be able to independently manage the geographical data of their own Administration.

## Summary table of access/administration policies
Below is a summary table of the powers associated with the different roles.

![Screenshot: Roles Table](/img/manual-english-roles-table.png)

## Examples of organization

### Basic organization
In this case the main administrator (**Admin role**) manages users, containers and all WebGis services
Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic goups)**
![Screenshot: Organization Case A1](/img/manual-english-organization-case-a1.png)

**Contents organized on two levels(Cartographic Macrooups and Cartographic goups)**
![Screenshot: Organization Case A2](/img/manual-english-organization-case-a2.png)

### Medium organization
In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.

User management will remain limited to the main administrator (**Admin** role)

Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic goups)**
![Screenshot: Organization Case B1](/img/manual-english-organization-case-b1.png)

**Contents organized on two levels (Cartographic Macrooups and Cartographic goups)**
![Screenshot: Organization Case B2](/img/manual-english-organization-case-b2.png)

### Advanced organization
The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.

In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.

**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.

**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups

Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).

In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly

![Screenshot: Organization Case C](/img/manual-english-organization-case-c.png)

<script type="application/json" data-i18n>
  {
    "it": {
      "**`Admin`:** If the \"Staff status\" option is also active for this user, the administrator can also access the session of Django administration (basic configuration of the suite)": "**`Admin`:** se per l'utente è attiva anche l'opzione \"Staff status\", l'amministratore può accedere all'interfaccia di amministrazione di Django (configurazione di base della suite)",
      "**`Anonymus User`:** user to be associated with WebGis services and/or functional modules **with free access**": "**`Anonymus User`:** utente da associare a servizi WebGIS e/o moduli funzionali **ad accesso libero**",
      "**`Cartographic groups`**": "**`Gruppi cartografici`**",
      "**`Cartographic MacroGroups`**": "**`Macrogruppi cartografici`**",
      "**`Editor1*`:** **administrator of one or more Cartographic MacroGroups** for which it will be possible:": "**`Editor1*`:** **amministratore di uno o più Macrogruppi cartografici**, con la possibilità di:",
      "**`Editor2`:** **administrator of one or more Cartographic Groups** for which it will be possible:": "**`Editor2`:** **amministratore di uno o più Gruppi cartografici**, con la possibilità di:",
      "**`Viewer`:** user with access permission in **consultation on WebGis service**s characterized by authentication. This user can also use individual functional Modules if the relative permissions have been attributed to him": "**`Viewer`:** utente autorizzato alla **consultazione dei servizi WebGIS** che richiedono autenticazione. Può inoltre usare i singoli moduli funzionali se gli sono stati assegnati i relativi permessi",
      "**Admin role users**": "**Utenti con ruolo Admin**",
      "**Admin role users** will be able to access/edit/upload all the contents of the FileManager.": "Gli **utenti con ruolo Admin** potranno accedere, modificare e caricare tutti i contenuti di File Manager.",
      "**an organizational level** (Cartographic Groups):": "**un livello organizzativo** (Gruppi cartografici):",
      "**Contents organized on a single level (Cartographic goups)**": "**Contenuti organizzati su un solo livello (Gruppi cartografici)**",
      "**Contents organized on two levels (Cartographic Macrooups and Cartographic goups)**": "**Contenuti organizzati su due livelli (Macrogruppi cartografici e Gruppi cartografici)**",
      "**Contents organized on two levels(Cartographic Macrooups and Cartographic goups)**": "**Contenuti organizzati su due livelli (Macrogruppi cartografici e Gruppi cartografici)**",
      "**Editor 2** users will also be able to define the access policies to the published WebGis services, limited to the Viewers users associated with the Cartographic Group by the Admin user.": "Gli utenti **Editor 2** potranno anche definire i criteri di accesso ai servizi WebGIS pubblicati, limitandoli agli utenti Viewer associati al Gruppo cartografico dall'utente Admin.",
      "**Editor1 role users**": "**Utenti con ruolo Editor1**",
      "**Editor1 role users** (administrators of a specific MacroGroup) will be able to access/modify/upload only the contents present within a folder identified with the same user name as Editor1 itself.": "Gli **utenti con ruolo Editor1** (amministratori di uno specifico Macrogruppo) potranno accedere, modificare e caricare solo i contenuti presenti nella cartella identificata dal nome dello stesso utente Editor1.",
      "**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups": "Gli utenti **Editor1** possono creare e gestire utenti nel proprio ambiente di lavoro (Macrogruppo), mantenendoli separati da quelli creati dagli altri utenti Editor1 e associati ad altri Macrogruppi.",
      "**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.": "Gli utenti **Editor1** possono a loro volta delegare alcuni amministratori secondari (**ruolo Editor2**) per la gestione dei contenuti dei singoli Gruppi cartografici.",
      "**Macrogroups** can be created only by **Admin** users.": "I **Macrogruppi** possono essere creati solo dagli utenti **Admin**.",
      "**Pay attention:** The use of the **Editor1** user and **MacroGroups** is recommended only in specific cases or when you want to manage autonomous work environments (e.g. single Public Administrations) in a multi-environment context (e.g. Union of Public Administrations).": "**Attenzione:** si consiglia di usare l'utente **Editor1** e i **Macrogruppi** solo in casi specifici o quando si desidera gestire ambienti di lavoro autonomi (ad es. singole amministrazioni pubbliche) in un contesto multi-ente (ad es. un'unione di amministrazioni pubbliche).",
      "**These organizational levels can be associated with different types of users (Editor 1, Editor2 and Viewer) in order to manage the access/management powers to the individual elements in a granular way.**": "**Questi livelli organizzativi possono essere associati a diversi tipi di utenti (Editor 1, Editor2 e Viewer) per gestire in modo granulare i permessi di accesso e amministrazione dei singoli elementi.**",
      "**two organizational levels** (MacroGroups and Cartographic Groups)": "**due livelli organizzativi** (Macrogruppi e Gruppi cartografici)",
      "**Viewers** users (individuals/groups) who will have access to this container": "gli utenti **Viewer** (singoli o gruppi) che avranno accesso a questo contenitore",
      "_**The following paragraph is dedicated to better understanding the relationships between the different types of users and the different elements of the suite (MacroGroups, Map Groups, WebGis services ...).**_": "_**Il paragrafo seguente aiuta a comprendere meglio le relazioni tra i diversi tipi di utenti e i vari elementi della suite (Macrogruppi, Gruppi cartografici, servizi WebGIS...).**_",
      "_**This paragraph allows you to understand how G3W-SUITE makes it possible to manage the individual WebGis services in a structured and hierarchical way.**_": "_**Questo paragrafo spiega come G3W-SUITE consenta di gestire i singoli servizi WebGIS in modo strutturato e gerarchico.**_",
      "Access policies and individual functional modules may be associated with each WebGis service.": "A ciascun servizio WebGIS è possibile associare criteri di accesso e moduli funzionali specifici.",
      "Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
      "Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
      "Accessed the File Manager tool": "Accesso allo strumento File Manager",
      "activate **specific modules** on individual **WebGis services**": "attivare **moduli specifici** nei singoli **servizi WebGIS**",
      "activate and configure some functional modules": "attivare e configurare alcuni moduli funzionali",
      "activate some specific modules on individual WebGis services": "attivare moduli specifici nei singoli servizi WebGIS",
      "Advanced organization": "Organizzazione avanzata",
      "Again from the perspective of an infrastructure dedicated to a Union of Municipalities, this will allow each Editor1 (manager of one Administrations) to be able to independently manage the geographical data of their own Administration.": "Anche nel caso di un'infrastruttura dedicata a un'Unione di Comuni, ciò consentirà a ciascun Editor1 (responsabile di un'amministrazione) di gestire in autonomia i dati geografici della propria amministrazione.",
      "As described in the previous chapter, the users who can access the FileManager are the following:": "Come descritto nel capitolo precedente, possono accedere a File Manager i seguenti utenti:",
      "As previously specified, **Editor 1** user will be able to:": "Come già specificato, l'utente **Editor 1** potrà:",
      "Basic organization": "Organizzazione di base",
      "Below is a summary table of the powers associated with the different roles.": "Di seguito è riportata una tabella riepilogativa dei poteri associati ai diversi ruoli.",
      "Clearly the Admin users (1 and 2) will continue to have full powers on all groups present in the system.": "Naturalmente gli utenti Admin (1 e 2) continueranno ad avere pieni poteri su tutti i gruppi presenti nel sistema.",
      "create **Cartographic Groups**": "creare **Gruppi cartografici**",
      "create **Cartographic Groups** within its **Macro Group**": "creare **Gruppi cartografici** all'interno del proprio **Macrogruppo**",
      "create **users** (single and/or groups) of type Editor2 and Viewer": "creare **utenti** (singoli e/o gruppi) di tipo Editor2 e Viewer",
      "create Cartographic Groups and, if necessary, assign them to an Editor 2 user": "creare Gruppi cartografici e, se necessario, assegnarli a un utente Editor 2",
      "create users (individuals and/or groups) of various types": "creare utenti (singoli e/o gruppi) di vari tipi",
      "create users and/or user groups": "creare utenti e/o gruppi di utenti",
      "Each **Macrogroup** can be associated with only one **Editor1** user.": "A ciascun **Macrogruppo** può essere associato un solo utente **Editor1**.",
      "Each MacroGroup can be considered as a watertight compartment within which the associated Editor 1 user (administrator of the MacroGroup), will be able to create users and user groups that will be made available to define access permissions for content (Groups Maps, WebGis services, functional modules …) of the reference MacroGroup only.": "Ogni Macrogruppo può essere considerato un compartimento isolato, nel quale l'utente Editor 1 associato (amministratore del Macrogruppo) può creare utenti e gruppi di utenti da usare per definire le autorizzazioni di accesso ai contenuti (Gruppi cartografici, servizi WebGIS, moduli funzionali...) del solo Macrogruppo di riferimento.",
      "Even the **Admin** user can publish **WebGis services** within a Cartographic Group and, if necessary, associate them with a user (single and/or group) of **Editor 2** type.": "Anche l'utente **Admin** può pubblicare **servizi WebGIS** all'interno di un Gruppo cartografico e, se necessario, associarli a un utente **Editor 2** (singolo e/o gruppo).",
      "Examples of organization": "Esempi di organizzazione",
      "Hierarchical organization of contents": "Organizzazione gerarchica dei contenuti",
      "Hierarchical organization of WebGis services and types of Users (roles)": "Organizzazione gerarchica dei servizi WebGIS e tipi di utenti (ruoli)",
      "If MacroGroups are not needed, the Admin user will be the only administrator of the suite and can therefore:": "Se non sono necessari i Macrogruppi, l'utente Admin sarà l'unico amministratore della suite e potrà quindi:",
      "In G3W-SUITE it is possible to manage Webgis services in a more or less structured way": "In G3W-SUITE è possibile gestire i servizi WebGIS con diversi livelli di struttura:",
      "In G3W-SUITE it is possible to organize WebGis services on two thematic/functional levels": "In G3W-SUITE è possibile organizzare i servizi WebGIS su due livelli tematici/funzionali:",
      "In G3W-SUITE you can create **Users** and **Users Groups** and associate them with specific roles:": "In G3W-SUITE è possibile creare **utenti** e **gruppi di utenti** e associarli a ruoli specifici:",
      "In particular **Editor1 users will also be able to create/manage users who can be associated with the Cartographic Groups and WebGis services present in the reference MacroGroup**.": "In particolare, gli utenti **Editor1 potranno anche creare e gestire utenti da associare ai Gruppi cartografici e ai servizi WebGIS presenti nel Macrogruppo di riferimento**.",
      "In the event that the Cartographic Group is assigned to **Editor 2** (single or group users), they will may autonomously publish/update WebGis services inside in this container.": "Se il Gruppo cartografico viene assegnato a **Editor 2** (utente singolo o gruppo), gli utenti potranno pubblicare o aggiornare autonomamente i servizi WebGIS al suo interno.",
      "In this case the individual **Editor1** users will be associated with cartographic Macrogroups and will **manage users and contents completely independently** from those of other Macrogroups associated with other Editor1 users.": "In questo caso, i singoli utenti **Editor1** saranno associati a Macrogruppi cartografici e **gestiranno utenti e contenuti in modo del tutto indipendente** da quelli degli altri Macrogruppi associati ad altri utenti Editor1.",
      "In this case the main administrator (**Admin role**) manages users, containers and all WebGis services": "In questo caso l'amministratore principale (**ruolo Admin**) gestisce utenti, contenitori e tutti i servizi WebGIS.",
      "In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.": "In questo caso l'amministratore principale (**ruolo Admin**) desidera delegare ad alcuni amministratori secondari (**ruolo Editor2**) la gestione dei contenuti (WebGIS) dei singoli Gruppi cartografici.",
      "In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.": "In questo caso l'amministratore principale (**ruolo Admin**) delega ad alcuni amministratori secondari (**ruolo Editor1**) la gestione dei contenuti dei singoli sottosistemi identificati dai Macrogruppi cartografici.",
      "In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly": "In genere, in questo caso l'amministratore principale (**ruolo Admin**) si occupa solo di creare i Macrogruppi, gli utenti **Editor1** e di associarli correttamente.",
      "In this way it will be possible to create totally independent entities, the MacroGroups, which will be managed exclusively by the user Editor 1 associated with them.": "In questo modo è possibile creare entità del tutto indipendenti, i Macrogruppi, gestiti esclusivamente dall'utente Editor 1 a essi associato.",
      "It is in fact possible to associate the two types of containers (MacroGroups and Cartographic Groups) to users with different roles/powers (Editor1 and Editor2) who will thus become the Administrators of all their contents.": "È infatti possibile associare i due tipi di contenitore (Macrogruppi e Gruppi cartografici) a utenti con ruoli e permessi diversi (Editor1 ed Editor2), che diventeranno così amministratori di tutti i relativi contenuti.",
      "Medium organization": "Organizzazione intermedia",
      "One organization level (absence of MacroGroups)": "Un livello organizzativo (senza Macrogruppi)",
      "publish **WebGis services** within his **Cartographic Groups**": "pubblicare **servizi WebGIS** nei propri **Gruppi cartografici**",
      "publish **WebGis services** within the individual **Cartographic Groups**": "pubblicare **servizi WebGIS** all'interno dei singoli **Gruppi cartografici**",
      "publish WebGis services and define their access policy": "pubblicare servizi WebGIS e definirne i criteri di accesso",
      "publish/update WebGis services and define their access policy": "pubblicare o aggiornare servizi WebGIS e definirne i criteri di accesso",
      "Screenshot: G3W-SUITE Administration Organization Containers": "Schermata: contenitori organizzativi dell'amministrazione di G3W-SUITE",
      "Screenshot: G3W-SUITE Administration Organization Containers No Mg": "Schermata: contenitori organizzativi dell'amministrazione di G3W-SUITE senza macrogruppi",
      "Screenshot: G3W-SUITE Administration Organization Containers Simple": "Schermata: contenitori organizzativi semplici dell'amministrazione di G3W-SUITE",
      "Screenshot: Organization Case A1": "Schermata: caso organizzativo A1",
      "Screenshot: Organization Case A2": "Schermata: caso organizzativo A2",
      "Screenshot: Organization Case B1": "Schermata: caso organizzativo B1",
      "Screenshot: Organization Case B2": "Schermata: caso organizzativo B2",
      "Screenshot: Organization Case C": "Schermata: caso organizzativo C",
      "Screenshot: Roles Table": "Schermata: tabella dei ruoli",
      "Summary table of access/administration policies": "Tabella riepilogativa dei criteri di accesso e amministrazione",
      "The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.": "In questo caso è necessario creare sottosistemi completamente distinti e separati, non solo per i contenuti ma anche per gli utenti.",
      "The cases relating to one or two organizational levels will be better described below.": "I casi con uno o due livelli organizzativi sono descritti più dettagliatamente di seguito.",
      "The creation of a **Editor1** role user (**administrator of a MacroGroup**) determines the automatic creation of a subfolder of the **project_data** folder with the same name as that defined for the Editor1 user.": "La creazione di un utente con ruolo **Editor1** (**amministratore di un Macrogruppo**) comporta la creazione automatica, nella cartella **project_data**, di una sottocartella con lo stesso nome assegnato all'utente Editor1.",
      "the eventual **Editor2** user (individual/group) to associate with this Group": "l'eventuale utente **Editor2** (singolo o gruppo) da associare al Gruppo",
      "the eventual user (individual/group) **Editor 2** to associate the Group with": "l'eventuale utente **Editor 2** (singolo o gruppo) da associare al gruppo",
      "The following image shows an example of the functional use of these organizational levels within a Union of Municipalities.": "L'immagine seguente mostra un esempio di utilizzo funzionale di questi livelli organizzativi all'interno di un'Unione di Comuni.",
      "These hierarchical levels can be used for **organizational purposes** (thematic containers) and/or **functional** (containers managed by different users/roles).": "Questi livelli gerarchici possono essere usati a fini **organizzativi** (contenitori tematici) e/o **funzionali** (contenitori gestiti da utenti o ruoli diversi).",
      "This user will manage, independently, only the contents of that folder.": "L'utente gestirà autonomamente solo i contenuti di quella cartella.",
      "Two organization levels (presence of MacroGroups)": "Due livelli organizzativi (con Macrogruppi)",
      "Types of Users (Roles)": "Tipi di utenti (ruoli)",
      "User management will remain limited to the main administrator (**Admin** role)": "La gestione degli utenti resterà di competenza esclusiva dell'amministratore principale (**ruolo Admin**).",
      "When creating a cartographic group, the Admin user can define:": "Quando crea un gruppo cartografico, l'utente Admin può definire:",
      "When Editor 1 user creates a Cartographic Group, he can define:": "Quando l'utente Editor 1 crea un Gruppo cartografico, può definire:"
    }
  }
</script>
