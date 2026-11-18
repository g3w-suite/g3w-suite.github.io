# Manage cartographic groups

## Groups List
**From this item you can access the list of the created cartographic groups.**

### General operations
For each group, the Title and associated EPSG are shown.

There are also a series of icons to access specific functions:
 * ![Icon: Add](/img/manual-english-icon-add.avif) **Add a new project (QGIS)** to be published as WebGis service
 * Number and links to projects published within the Group
 * ![Icon: View](/img/manual-english-icon-view.avif) **Show group details**
 * ![Icon: Edit](/img/manual-english-icon-edit.avif) **Change** group definitions
 * ![Icon: Erase](/img/manual-english-icon-erase.avif) **Delete** group

 In case of request to delete the Cartographic Group, a popup will ask whether the deletion of the Group should be permanent or a simple deactivation, which can be restored from the Trash menu.

 ![Screenshot: Group Delete](/img/manual-english-group-delete.avif)

**ATTENTION:** the permanent removal  of the cartographic group will involve:
 * the **removal of all the WebGis services** contained therein
 * the **removal of all widgets** (eg searches) that would be orphaned after the removal of the WebGis services contained in the group. See the Widget chapter for more information.

A large **+ icon** is available to access the form for creating a new group.

![Screenshot: G3W-SUITE Administration Group List](/img/manual-english-g3wsuite-administration-group-list.avif)

Filter cartographic groups by:
 * the MacroGroup to which they belong
 * the associated EPSG
 * the associated Editor1/Editor2 users and Editor2/Viewer user groups

The options of this last filter vary based on the type of logged in user.

![Screenshot: Group Filter](/img/manual-english-group-filter.avif)

### Cartographic Group Trash

The operation of deleting a Cartographic Group is not definitive.

The Group with all its related content (projects and widgets) is moved to the Trash session.

Open the list of deleted groups.

Cartographic Groups and the restore functions through the menu on the left sidebar.

![Screenshot: G3W-ADMIN Trash Group](/img/manual-english-g3wadmin-trash-group.avif)

Restoring a Cartographic Group involves restoring all the projects it contains and all the accessory settings/functions of both the group and the projects (permissions, searches, editing settings, downloads, etc...).

**Deleting a Cartographic Group from the trash is an irreversible action.**

### Define the Groups order on the FrontEnd
Drag and drop groups to change their order in the list.

This order will be reflected within the belonging MacroGroups.

**NB:** currently in the list of Groups it is not present in the subdivision in the belonging MacroGroups but the fact that a Group can be associated with only one MacroGroup still allows you to manage intuitively what will be the complessive display order.
