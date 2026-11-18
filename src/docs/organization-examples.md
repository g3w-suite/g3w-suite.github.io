# Access policy examples

## Summary table of access/administration policies
This table summarizes permissions by role.

| Role | Admin1 | Admin2 | Editor1 | Editor2 | Viewer |
| --- | --- | --- | --- | --- | --- |
| **{{t 'Description'}}** | Advanced administrator with access to Django administration. | Basic administrator. | Macro-group manager. | Group manager. | Viewer. |
| **{{t 'Users'}}** | Manages Editor1, Editor2 and Viewer users. | Manages Editor1, Editor2 and Viewer users. | Manages Editor2 and Viewer users. Other Editor1 users cannot manage the users this Editor1 creates. | — | — |
| **{{t 'Cartographic macro-groups'}}** | Creates and manages macro-groups and assigns them to Editor1 users. | Creates and manages macro-groups and assigns them to Editor1 users. | Manages content in assigned macro-groups. | — | Views macro-groups in the front end according to their credentials. |
| **{{t 'Cartographic groups'}}** | Creates and manages groups and sets their access and management permissions. | Creates and manages groups and sets their access and management permissions. | Creates and manages groups within assigned macro-groups. | Manages assigned groups. | Views groups in the front end according to their credentials. |
| **{{t 'WebGIS services'}}** | Publishes and manages services and sets their access and management permissions. | Publishes and manages services and sets their access and management permissions. | Publishes and manages services within the groups they manage. | Publishes and manages services within assigned groups. | Views services according to their credentials. |
| **{{t 'Editing'}}** | Can edit all layers with editing enabled. | Can edit all layers with editing enabled. | Can edit layers with editing enabled in the projects they manage. | Can edit layers with editing enabled in assigned groups. | Can edit layers with editing enabled if their credentials allow it. |

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
In this example, the **Admin** assigns an **Editor1** to each cartographic macro-group to delegate content management.

**Editor1** users can in turn delegate some secondary administrators (**Editor2** role) in managing the contents of the individual Cartographic Groups.

**Editor1** users can manage accounts delegated to them. Account permissions and macro-group assignments are separate; macro-groups do not provide tenant isolation.

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
