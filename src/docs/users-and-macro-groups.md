---
title: Users and macro-groups
description: "In the left side menu there is the Users item with four sub-items:"
---

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

See chapter [Hierarchical organization of WebGis services and types of Users](webgis-roles-and-organization.md) to learn more about this aspect.

For example, you can create a **Macrogroup** to collect a series of **Cartographic Groups** belonging to the same Administration (single Municipality within a Union of Municipalities) or more simply to have main containers that contain second level groupings (Groups).

On the left side menu there is the **MacroGroup Cartographic** item with two sub-items:
 * **Add MacroGroups:** to create a new Cartographic MacroGroup
 * **MacroGroups list:** to access the list of MacroGroups present
 
### Add MacroGroups
Through this item, available only for the **Admin** users, it will be possible to **create a new Cartographic MacroGroup.

Assign one or more Editor1 users to a cartographic macro-group when you need to delegate content management.

Learn more about this in the [dedicated session](webgis-roles-and-organization.md)

#### ACL users
**`Editor users`:** select the **Editor1** users who can manage the macro-group's content. Only admins can change the macro-group itself or its assignments.

#### General data
 * **`Identification name *`:** a generic internal identification name (not show in the front end)
 * **`Title *`:** descriptive title of the MacroGroup (will appear in the list of MacroGroups) and, eventually, in the client header
   * **Use title for client** option
   * **Use logo image for client** option
 * **`Description`:** the description to be associated with the MacroGroup in the frontend
 * **`Logo img*`:** the logo to be associated with the MacroGroup in the frontend and, eventually, in the client header

Client header composition follows the [Cartographic Group logo settings](cartographic-groups.md).

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
