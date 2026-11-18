---
title: WebGIS roles and organization
description: "G3W-SUITE organizes WebGIS services on two thematic or functional levels:"
---

# WebGIS roles and organization


G3W-SUITE organizes WebGIS services on two thematic or functional levels:

- **`Cartographic MacroGroups`**
- **`Cartographic groups`**

**These organizational levels can be associated with different types of users (Editor 1, Editor2 and Viewer) in order to manage the access/management powers to the individual elements in a granular way.**

The following diagram shows an example of the functional use of these organizational levels within a Union of Municipalities.

Access policies and individual functional modules may be associated with each WebGis service.

```mermaid {{t 'Two municipal administrations have separate macro-groups; each contains cartographic groups that can contain WebGIS services'}}
flowchart TB
  a["{{t 'Macro-group'}}: {{t 'Administration'}} A"] --> a1["{{t 'Service'}} A"] & a2["{{t 'Service'}} B"] & a3["{{t 'Service'}} C"]
  b["{{t 'Macro-group'}}: {{t 'Administration'}} B"] --> b1["{{t 'Service'}} A"] & b2["{{t 'Service'}} B"] & b3["{{t 'Service'}} C"]
  a2 --> a2w1["WebGIS 1"] & a2w2["WebGIS 2"] & a2w3["WebGIS 3"]
  a3 --> a3w1["WebGIS 1"] & a3w2["WebGIS 2"]
  b2 --> b2w1["WebGIS 1"] & b2w2["WebGIS 2"] & b2w3["WebGIS 3"]
```

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
 * **Anonymous user:** a visitor who has not signed in. Public access is granted by assigning permissions to the anonymous user.

**Pay attention:** The use of the **Editor1** user and **MacroGroups** is recommended only in specific cases or when you want to manage autonomous work environments (e.g. single Public Administrations) in a multi-environment context (e.g. Union of Public Administrations).


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
Without macro-groups, admins manage the suite directly and can:
 * create users (individuals and/or groups) of various types
 * create **Cartographic Groups**
 * publish **WebGis services** within the individual **Cartographic Groups**
 * activate some specific modules on individual WebGis services

When creating a cartographic group, the Admin user can define:
 * the eventual user (individual/group) **Editor 2** to associate the Group with
 * **Viewers** users (individuals/groups) who will have access to this container

```mermaid {{t 'Without macro-groups, Admin manages all cartographic groups and can delegate group management to Editor2; Viewers can access authorized WebGIS services'}}
flowchart TB
  admin["Admin"] --> groups["{{t 'Cartographic groups'}}<br/>Editor2"]
  groups --> a1["{{t 'Service'}} A"] & a2["{{t 'Service'}} B"] & a3["{{t 'Service'}} C"] & b1["{{t 'Service'}} A"] & b2["{{t 'Service'}} B"] & b3["{{t 'Service'}} C"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

In the event that the Cartographic Group is assigned to **Editor 2** (single or group users), they will may autonomously publish/update WebGis services inside in this container. 

**Editor 2** users will also be able to define the access policies to the published WebGis services, limited to the Viewers users associated with the Cartographic Group by the Admin user.

Even the **Admin** user can publish **WebGis services** within a Cartographic Group and, if necessary, associate them with a user (single and/or group) of **Editor 2** type.

### Two organization levels (presence of MacroGroups)

**Macrogroups** can be created only by **Admin** users.

A macro-group can have zero, one or several **Editor1** users. An **Editor1** user can be assigned to more than one macro-group. The assignments delegate management of content; they do not create separate user directories or installations. Admins retain access to all groups.

```mermaid {{t 'Admin oversees both macro-groups; each has its own Editor1, with Editor2 at group level and Viewer access at WebGIS service level'}}
flowchart TB
  admin["Admin"] --> a["{{t 'Macro-group'}}: {{t 'Administration'}} A<br/>Editor1"] & b["{{t 'Macro-group'}}: {{t 'Administration'}} B<br/>Editor1"]
  a --> a1["{{t 'Service'}} A<br/>Editor2"] & a2["{{t 'Service'}} B<br/>Editor2"] & a3["{{t 'Service'}} C<br/>Editor2"]
  b --> b1["{{t 'Service'}} A<br/>Editor2"] & b2["{{t 'Service'}} B<br/>Editor2"] & b3["{{t 'Service'}} C<br/>Editor2"]
  a2 --> a2w1["WebGIS 1<br/>Viewer"] & a2w2["WebGIS 2<br/>Viewer"] & a2w3["WebGIS 3<br/>Viewer"]
  a3 --> a3w1["WebGIS 1<br/>Viewer"] & a3w2["WebGIS 2<br/>Viewer"]
  b2 --> b2w1["WebGIS 1<br/>Viewer"] & b2w2["WebGIS 2<br/>Viewer"] & b2w3["WebGIS 3<br/>Viewer"]
```

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

When File Manager is enabled, **Editor1** users work in a subfolder named after their username, not after the macro-group. Saving an Editor1 user in the administration panel creates that folder under `DATASOURCE_PATH` (typically `project_data` in Docker). If `FILEMANAGER_ROOT_PATH` points elsewhere, provision the corresponding username subfolder there as well.

[Access policies and organization examples](access-policy-examples.md)
