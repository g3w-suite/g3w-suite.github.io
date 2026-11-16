# Access policies and organization examples

[Back to Users and organization](user_groups_organization.md)

## Summary table of access/administration policies
This table summarizes permissions by role.

![Screenshot: Roles Table](/img/manual-english-roles-table.avif)

## Examples of organization

### Basic organization
In this case the main administrator (**Admin role**) manages users, containers and all WebGis services
Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic goups)**
![Screenshot: Organization Case A1](/img/manual-english-organization-case-a1.avif)

**Contents organized on two levels(Cartographic Macrooups and Cartographic goups)**
![Screenshot: Organization Case A2](/img/manual-english-organization-case-a2.avif)

### Medium organization
In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.

User management will remain limited to the main administrator (**Admin** role)

Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)

**Contents organized on a single level (Cartographic goups)**
![Screenshot: Organization Case B1](/img/manual-english-organization-case-b1.avif)

**Contents organized on two levels (Cartographic Macrooups and Cartographic goups)**
![Screenshot: Organization Case B2](/img/manual-english-organization-case-b2.avif)

### Advanced organization
The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.

In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.

**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.

**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups

Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).

In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly

![Screenshot: Organization Case C](/img/manual-english-organization-case-c.avif)

<script type="application/json" data-i18n>
{
  "it": {
    "**Contents organized on a single level (Cartographic goups)**": "**Contenuti organizzati su un solo livello (Gruppi cartografici)**",
    "**Contents organized on two levels (Cartographic Macrooups and Cartographic goups)**": "**Contenuti organizzati su due livelli (Macrogruppi cartografici e Gruppi cartografici)**",
    "**Contents organized on two levels(Cartographic Macrooups and Cartographic goups)**": "**Contenuti organizzati su due livelli (Macrogruppi cartografici e Gruppi cartografici)**",
    "**Editor1** users can create/manage users within their work environment (Macrogroup) ensuring separation from users created by other Editor1 users and related to other MacroGroups": "Gli utenti **Editor1** possono creare e gestire utenti nel proprio ambiente di lavoro (Macrogruppo), mantenendoli separati da quelli creati dagli altri utenti Editor1 e associati ad altri Macrogruppi.",
    "**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.": "Gli utenti **Editor1** possono a loro volta delegare alcuni amministratori secondari (**ruolo Editor2**) per la gestione dei contenuti dei singoli Gruppi cartografici.",
    "Access policies and organization examples": "Politiche di accesso ed esempi organizzativi",
    "Access to Cartographic Groups and individual WebGIS services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**).": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
    "Access to Cartographic Groups and individual WebGis services can be limited to system users (**Viewer** role) or to free access (**Anonymous user**)": "L'accesso ai Gruppi cartografici e ai singoli servizi WebGIS può essere limitato agli utenti del sistema (**ruolo Viewer**) oppure essere libero (**utente Anonymous**).",
    "Advanced organization": "Organizzazione avanzata",
    "Back to Users and organization": "Torna a utenti e organizzazione",
    "Basic organization": "Organizzazione di base",
    "Examples of organization": "Esempi di organizzazione",
    "In this case the main administrator (**Admin role**) manages users, containers and all WebGis services": "In questo caso l'amministratore principale (**ruolo Admin**) gestisce utenti, contenitori e tutti i servizi WebGIS.",
    "In this case the main administrator (**Admin role**) wants to delegate some secondary administrators (**Editor2** role) in managing the contents (WebGis) of the individual Cartographic Groups.": "In questo caso l'amministratore principale (**ruolo Admin**) desidera delegare ad alcuni amministratori secondari (**ruolo Editor2**) la gestione dei contenuti (WebGIS) dei singoli Gruppi cartografici.",
    "In this case, the main administrator (**Admin** role) delegates some secondary administrators (**Editor1** role) in managing the contents of the individual subsystems identified by the Cartographic MacroGroups.": "In questo caso l'amministratore principale (**ruolo Admin**) delega ad alcuni amministratori secondari (**ruolo Editor1**) la gestione dei contenuti dei singoli sottosistemi identificati dai Macrogruppi cartografici.",
    "In this case, usually, the main administrator (**Admin** role) only takes care of creating the Macrogroups, the **Editor1** users and associating them correctly": "In genere, in questo caso l'amministratore principale (**ruolo Admin**) si occupa solo di creare i Macrogruppi, gli utenti **Editor1** e di associarli correttamente.",
    "Medium organization": "Organizzazione intermedia",
    "Screenshot: Organization Case A1": "Schermata: caso organizzativo A1",
    "Screenshot: Organization Case A2": "Schermata: caso organizzativo A2",
    "Screenshot: Organization Case B1": "Schermata: caso organizzativo B1",
    "Screenshot: Organization Case B2": "Schermata: caso organizzativo B2",
    "Screenshot: Organization Case C": "Schermata: caso organizzativo C",
    "Screenshot: Roles Table": "Schermata: tabella dei ruoli",
    "Summary table of access/administration policies": "Tabella riepilogativa dei criteri di accesso e amministrazione",
    "The case in question involves the need to create completely distinct and separate subsystems with regard to not only the contents but also the users.": "In questo caso è necessario creare sottosistemi completamente distinti e separati, non solo per i contenuti ma anche per gli utenti.",
    "This table summarizes permissions by role.": "Questa tabella riepiloga i permessi per ruolo.",
    "User management will remain limited to the main administrator (**Admin** role)": "La gestione degli utenti resterà di competenza esclusiva dell'amministratore principale (**ruolo Admin**)."
  }
}
</script>
