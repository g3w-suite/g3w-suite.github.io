# Users and cartographic macro-groups

[Back to Administration panel](g3wsuite_administration.md)

## Users and Users Groups management
In the left side menu there is the **Users** item with four sub-items:
 * **Add user**
 * **Users list**
 * **Add groups users**
 * **Groups users list**

 Please note that the Suite is equipped with a dedicated module for the integration of Active Directory users via **LDAP**.
 
### Add user
Through this form it is possible to insert new users and define their characteristics.

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

![](/img/manual-english-g3wsuite-administration-user-add.png)

After filling in the various form, click on the Save button to confirm your choices.

![](/img/manual-english-buttom-save.png)

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
 
![](/img/manual-english-g3wsuite-administration-user-list.png)

The icons at the head of each row, allow you to:
 * ![](/img/manual-english-icon-edit.png) **Modify:** to modify the characteristics of the user
 * ![](/img/manual-english-icon-erase.png) **Delete:** to permanently delete a user
 
### Add Group Users
Through this form it is possible to create new user groups and define their role.
Through this form it is possible to create new user groups and define their role.

It is possible to create only two types of user groups:
 * **`Editor`:** in which only Editor2 users can be inserted
 * **`Viewer`:** in which only Viewer users can be inserted

The association between user and user groups can also be achieved at the individual user management level.
The association between user and user groups can also be achieved at the individual user management level.

In the specific form for creating user groups, the following info are defined:
 * **Name**
 * **Role:** Editor or Viewer
 * **Users:** list of users belonging to the group

![](/img/manual-english-g3wsuite-administration-usergroup-add.png)
 
After filling in the from, click on the **Save** button to confirm your choices.

![](/img/manual-english-buttom-save.png)

### Groups users list
Through this form it is possible to consult the list of enabled user groups, their characteristics and the individual users belonging to the group.

![](/img/manual-english-g3wsuite-administration-usergroup-list.png)

Using the icons at the head of each row, you can:
 * ![](/img/manual-english-icon-view.png) **Show details:** to consult the characteristics of the user group 
 * ![](/img/manual-english-icon-edit.png) **Modify:** to modify the characteristics of the group 
 * ![](/img/manual-english-icon-erase.png) **Delete:** to permanently delete a group and therefore association with users belonging to the group itself

## Macro Cartographic Groups
In this section it is possible to view the list of Cartographic Macrogroups, manage them and create new ones.

**ATTENTION: use the Cartographic MacroGroups only if you need them.**

See chapter [Hierarchical organization of WebGis services and types of Users](user_groups_organization#hierarchical-organization-of-WebGis-services-and-types-of-users-roles) to learn more about this aspect.

For example, you can create a **Macrogroup** to collect a series of **Cartographic Groups** belonging to the same Administration (single Municipality within a Union of Municipalities) or more simply to have main containers that contain second level groupings (Groups).

On the left side menu there is the **MacroGroup Cartographic** item with two sub-items:
 * **Add MacroGroups:** to create a new Cartographic MacroGroup
 * **MacroGroups list:** to access the list of MacroGroups present
 
### Add MacroGroups
Through this item, available only for the **Admin** users, it will be possible to **create a new Cartographic MacroGroup.

If necessary, each Cartographic MacroGroup can be associated with a specific Editor1 user.

Learn more about this in the [dedicated session](user_groups_organization)

#### ACL users
**`Editor users`:** you define the **Editor1 user** who will become the **MacroGroup administrator**. This user will can manage the MacroGroup by creating Cartographic Groups, publishing projects and creating Users or User Groups.

#### General data
 * **`Identification name *`:** a generic internal identification name (not show in the front end)
 * **`Title *`:** descriptive title of the MacroGroup (will appear in the list of MacroGroups) and, eventually, in the client header
   * **Use title for client** option
   * **Use logo image for client** option
 * **`Description`:** the description to be associated with the MacroGroup in the frontend
 * **`Logo img*`:** the logo to be associated with the MacroGroup in the frontend and, eventually, in the client header

Client header composition follows the [Cartographic Group logo settings](admin-cartographic-groups.md).

After compiling the form, click on the **Save button** to confirm your choices.

![](/img/manual-english-buttom-save.png)


### MacroGroups list
The menu provides access to the list of cartographic macro-groups present.

![](/img/manual-english-g3wsuite-administration-macrogroup-list.png)

There are a series of icons to access specific functions:
 * ![](/img/manual-english-icon-view.png) **Show the details** of the MacroGroup
 * ![](/img/manual-english-icon-edit.png) **Change** characteristics of the MacroGroup
 * ![](/img/manual-english-icon-erase.png) **Delete** MacroGroup

**ATTENTION:** the removal of the Cartographic MacroGroup group will result in:
 * the **removal of all the Cartographic Groups** contained in it
 * the **removal of all the cartographic projects** contained in the individual Groups
 * the **removal of all the widgets** (eg searches) that would remain orphaned after the removal of the cartographic projects contained in the group. See the Widget chapter for more information.

#### Define the MacroGroups order on the FrontEnd
Through the Drag & Drop function it is possible to define the order of the MacroGroups in the list. This order will be reflected in the FrontEnd.
