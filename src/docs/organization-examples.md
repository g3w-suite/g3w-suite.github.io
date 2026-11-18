# Access policy examples

## Summary table of access/administration policies
This table summarizes permissions by role.

| Role | Admin1 | Admin2 | Editor1 | Editor2 | Viewer |
| --- | --- | --- | --- | --- | --- |
| **{{t 'Description'}}** | Advanced administrator with access to Django administration. | Basic administrator. | Macro-group manager. | Group manager. | Viewer. |
| **{{t 'Users'}}** | Manages Editor1, Editor2 and Viewer users. | Manages Editor1, Editor2 and Viewer users. | Manages Editor2 and Viewer users. Other Editor1 users cannot manage the users this Editor1 creates. | — | — |
| **{{t 'Cartographic macro-groups'}}** | Creates and manages macro-groups and assigns them to Editor1 users. | Creates and manages macro-groups and assigns them to Editor1 users. | Manages content in the assigned macro-group. | — | Views macro-groups in the front end according to their credentials. |
| **{{t 'Cartographic groups'}}** | Creates and manages groups and sets their access and management permissions. | Creates and manages groups and sets their access and management permissions. | Creates and manages groups within the assigned macro-group. Sets access and management permissions only for users they created. | Manages assigned groups. | Views groups in the front end according to their credentials. |
| **{{t 'WebGIS services'}}** | Publishes and manages services and sets their access and management permissions. | Publishes and manages services and sets their access and management permissions. | Publishes and manages services within the groups they manage. Sets access and management permissions only for users they created. | Publishes and manages services within assigned groups. | Views services according to their credentials. |
| **{{t 'Editing'}}** | Can edit all layers with editing enabled. | Can edit all layers with editing enabled. | Can edit layers with editing enabled in the assigned macro-group. | Can edit layers with editing enabled in assigned groups. | Can edit layers with editing enabled if their credentials allow it. |

## Examples of organization

### Basic organization
In this case the main administrator (**Admin role**) manages users, containers and all WebGis services
Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic groups)**

```mermaid {{t 'Basic organization on one level: Admin manages cartographic groups directly, and viewers can access authorized WebGIS services'}}
flowchart TB
  admin["Admin"] --> groups["{{t 'Cartographic groups'}}"]
  groups --> a1["{{t 'Service'}} A"] & a2["{{t 'Service'}} B"] & a3["{{t 'Service'}} C"] & b1["{{t 'Service'}} A"] & b2["{{t 'Service'}} B"] & b3["{{t 'Service'}} C"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

**Contents organized on two levels (Cartographic macro-groups and cartographic groups)**

```mermaid {{t 'Basic organization on two levels: Admin manages both macro-groups and their cartographic groups, and viewers can access authorized WebGIS services'}}
flowchart TB
  admin["Admin"] --> a["{{t 'Macro-group'}}: {{t 'Administration'}} A"] & b["{{t 'Macro-group'}}: {{t 'Administration'}} B"]
  a --> a1["{{t 'Service'}} A"] & a2["{{t 'Service'}} B"] & a3["{{t 'Service'}} C"]
  b --> b1["{{t 'Service'}} A"] & b2["{{t 'Service'}} B"] & b3["{{t 'Service'}} C"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

### Medium organization
In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.

User management will remain limited to the main administrator (**Admin** role)

Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic groups)**

```mermaid {{t 'Intermediate organization on one level: Admin delegates content management for cartographic groups to Editor2, and viewers can access authorized WebGIS services'}}
flowchart TB
  admin["Admin"] --> groups["{{t 'Cartographic groups'}}<br/>Editor2"]
  groups --> a1["{{t 'Service'}} A"] & a2["{{t 'Service'}} B"] & a3["{{t 'Service'}} C"] & b1["{{t 'Service'}} A"] & b2["{{t 'Service'}} B"] & b3["{{t 'Service'}} C"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

**Contents organized on two levels (Cartographic macro-groups and cartographic groups)**

```mermaid {{t 'Intermediate organization on two levels: Admin manages both macro-groups, Editor2 manages cartographic group content, and viewers can access authorized WebGIS services'}}
flowchart TB
  admin["Admin"] --> a["{{t 'Macro-group'}}: {{t 'Administration'}} A"] & b["{{t 'Macro-group'}}: {{t 'Administration'}} B"]
  a --> a1["{{t 'Service'}} A<br/>Editor2"] & a2["{{t 'Service'}} B<br/>Editor2"] & a3["{{t 'Service'}} C<br/>Editor2"]
  b --> b1["{{t 'Service'}} A<br/>Editor2"] & b2["{{t 'Service'}} B<br/>Editor2"] & b3["{{t 'Service'}} C<br/>Editor2"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

### Advanced organization
The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.

In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.

**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.

**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups

Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).

In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly

```mermaid {{t 'Advanced organization: Admin assigns an Editor1 to each independent macro-group; each Editor1 manages its own users and can delegate group content to Editor2'}}
flowchart TB
  admin["Admin"] --> a["{{t 'Macro-group'}}: {{t 'Administration'}} A<br/>Editor1"] & b["{{t 'Macro-group'}}: {{t 'Administration'}} B<br/>Editor1"]
  a --> a1["{{t 'Service'}} A<br/>Editor2"] & a2["{{t 'Service'}} B<br/>Editor2"] & a3["{{t 'Service'}} C<br/>Editor2"]
  b --> b1["{{t 'Service'}} A<br/>Editor2"] & b2["{{t 'Service'}} B<br/>Editor2"] & b3["{{t 'Service'}} C<br/>Editor2"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

<script type="application/json" data-i18n>
{
  "it": {
    "**Contents organized on a single level (Cartographic groups)**": "**Contenuti organizzati su un solo livello (Gruppi cartografici)**",
    "**Contents organized on two levels (Cartographic macro-groups and cartographic groups)**": "**Contenuti organizzati su due livelli (Macrogruppi cartografici e Gruppi cartografici)**",
    "**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups": "Gli utenti **Editor1** possono creare e gestire utenti nel proprio ambiente di lavoro (Macrogruppo), mantenendoli separati da quelli creati dagli altri utenti Editor1 e associati ad altri Macrogruppi.",
    "**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.": "Gli utenti **Editor1** possono a loro volta delegare alcuni amministratori secondari (**ruolo Editor2**) per la gestione dei contenuti dei singoli Gruppi cartografici.",
    "Access policy examples": "Esempi di criteri di accesso",
    "Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
    "Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
    "Administration": "Amministrazione",
    "Advanced administrator with access to Django administration.": "Amministratore avanzato con accesso al pannello di amministrazione di Django.",
    "Advanced organization": "Organizzazione avanzata",
    "Advanced organization: Admin assigns an Editor1 to each independent macro-group; each Editor1 manages its own users and can delegate group content to Editor2": "Organizzazione avanzata: Admin assegna un Editor1 a ciascun Macrogruppo indipendente; ciascun Editor1 gestisce i propri utenti e può delegare a Editor2 la gestione dei contenuti dei Gruppi",
    "Basic administrator.": "Amministratore base.",
    "Basic organization": "Organizzazione di base",
    "Basic organization on one level: Admin manages cartographic groups directly, and viewers can access authorized WebGIS services": "Organizzazione di base su un livello: Admin gestisce direttamente i Gruppi cartografici e i Viewer possono accedere ai servizi WebGIS autorizzati",
    "Basic organization on two levels: Admin manages both macro-groups and their cartographic groups, and viewers can access authorized WebGIS services": "Organizzazione di base su due livelli: Admin gestisce entrambi i Macrogruppi e i relativi Gruppi cartografici; i Viewer possono accedere ai servizi WebGIS autorizzati",
    "Can edit all layers with editing enabled.": "Può modificare tutti i layer per cui è abilitata la modifica.",
    "Can edit layers with editing enabled if their credentials allow it.": "Può modificare i layer per cui è abilitata la modifica, se le credenziali lo consentono.",
    "Can edit layers with editing enabled in assigned groups.": "Può modificare i layer per cui è abilitata la modifica nei gruppi assegnati.",
    "Can edit layers with editing enabled in the assigned macro-group.": "Può modificare i layer per cui è abilitata la modifica nel macrogruppo assegnato.",
    "Cartographic groups": "Gruppi cartografici",
    "Cartographic macro-groups": "Macrogruppi cartografici",
    "Creates and manages groups and sets their access and management permissions.": "Crea e gestisce i gruppi e ne imposta i permessi di accesso e gestione.",
    "Creates and manages groups within the assigned macro-group. Sets access and management permissions only for users they created.": "Crea e gestisce i gruppi nel macrogruppo assegnato. Imposta i permessi di accesso e gestione solo per gli utenti che ha creato.",
    "Creates and manages macro-groups and assigns them to Editor1 users.": "Crea e gestisce i macrogruppi e li assegna agli utenti Editor1.",
    "Description": "Descrizione",
    "Editing": "Modifica",
    "Examples of organization": "Esempi di organizzazione",
    "Group manager.": "Gestore dei gruppi.",
    "In this case the main administrator (**Admin role**) manages users, containers and all WebGis services": "In questo caso l'amministratore principale (**ruolo Admin**) gestisce utenti, contenitori e tutti i servizi WebGIS.",
    "In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.": "In questo caso l'amministratore principale (**ruolo Admin**) desidera delegare ad alcuni amministratori secondari (**ruolo Editor2**) la gestione dei contenuti (WebGIS) dei singoli Gruppi cartografici.",
    "In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.": "In questo caso l'amministratore principale (**ruolo Admin**) delega ad alcuni amministratori secondari (**ruolo Editor1**) la gestione dei contenuti dei singoli sottosistemi identificati dai Macrogruppi cartografici.",
    "In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly": "In genere, in questo caso l'amministratore principale (**ruolo Admin**) si occupa solo di creare i Macrogruppi, gli utenti **Editor1** e di associarli correttamente.",
    "Intermediate organization on one level: Admin delegates content management for cartographic groups to Editor2, and viewers can access authorized WebGIS services": "Organizzazione intermedia su un livello: Admin delega a Editor2 la gestione dei contenuti dei Gruppi cartografici; i Viewer possono accedere ai servizi WebGIS autorizzati",
    "Intermediate organization on two levels: Admin manages both macro-groups, Editor2 manages cartographic group content, and viewers can access authorized WebGIS services": "Organizzazione intermedia su due livelli: Admin gestisce entrambi i Macrogruppi, Editor2 gestisce i contenuti dei Gruppi cartografici e i Viewer possono accedere ai servizi WebGIS autorizzati",
    "Macro-group": "Macrogruppo",
    "Macro-group manager.": "Gestore del macrogruppo.",
    "Manages Editor1, Editor2 and Viewer users.": "Gestisce gli utenti Editor1, Editor2 e Viewer.",
    "Manages Editor2 and Viewer users. Other Editor1 users cannot manage the users this Editor1 creates.": "Gestisce gli utenti Editor2 e Viewer. Gli altri Editor1 non possono gestire gli utenti che ha creato.",
    "Manages assigned groups.": "Gestisce i gruppi assegnati.",
    "Manages content in the assigned macro-group.": "Gestisce i contenuti del macrogruppo assegnato.",
    "Medium organization": "Organizzazione intermedia",
    "Publishes and manages services and sets their access and management permissions.": "Pubblica e gestisce i servizi e ne imposta i permessi di accesso e gestione.",
    "Publishes and manages services within assigned groups.": "Pubblica e gestisce i servizi nei gruppi assegnati.",
    "Publishes and manages services within the groups they manage. Sets access and management permissions only for users they created.": "Pubblica e gestisce i servizi nei gruppi di sua competenza. Imposta i permessi di accesso e gestione solo per gli utenti che ha creato.",
    "Role": "Ruolo",
    "Service": "Servizio",
    "Summary table of access/administration policies": "Tabella riepilogativa dei criteri di accesso e amministrazione",
    "The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.": "In questo caso è necessario creare sottosistemi completamente distinti e separati, non solo per i contenuti ma anche per gli utenti.",
    "This table summarizes permissions by role.": "Questa tabella riepiloga i permessi per ruolo.",
    "User management will remain limited to the main administrator (**Admin** role)": "La gestione degli utenti resterà di competenza esclusiva dell'amministratore principale (**ruolo Admin**).",
    "Users": "Utenti",
    "Viewer.": "Utente con permessi di consultazione.",
    "Views groups in the front end according to their credentials.": "Visualizza i gruppi nel portale in base alle proprie credenziali.",
    "Views macro-groups in the front end according to their credentials.": "Visualizza i macrogruppi nel portale in base alle proprie credenziali.",
    "Views services according to their credentials.": "Consulta i servizi in base alle proprie credenziali.",
    "WebGIS services": "Servizi WebGIS"
  }
}
</script>
