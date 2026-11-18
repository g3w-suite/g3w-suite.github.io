# Layer visibility and constraints

## Widgets management

### ![Icon: Geoconstraints](/img/manual-english-icon-geoconstraints.avif) ![Icon: Alpha Constraints](/img/manual-english-icon-alpha-constraints.avif) Display and editing constraints

Through the **Geo-constraints by user/group** and **Alphanumeric and QGIS expressions constraints by user/groups**  widgets it is possible to define editing and display filters for users authorized to consult/edit the project.

See the dedicated paragraph in [Administration settings for editing](editing-administration-settings.md).


### ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.avif) Hide columns by User/Groups
**Hide selected layer fields from individual users or groups during viewing.**

This setting is also available for the AnonymousUser user

To activate this type of constraint, you must click, at the level of the layer of interest, on the Hide columns by User/Groups icon ![Icon: Hide Columns](/img/manual-english-icon-hide-columns.avif).

Clicking on the icon will show the list of any existing alphanumeric column constraints and the item `+ Create New Column Level constraints` to create a new one.

![Screenshot: G3W-SUITE Administration Hide Columns New](/img/manual-english-g3wsuite-administration-hide-columns-new.avif)

Clicking on the item will open a modal window which will allow you to define:
 * list of fields to hide
 * list of users for whom these fields should be hidden 
 * list of users groups for whom these fields should be hidden

Once all the constraints have been setted, click on the OK to confirm the rules.

[Search widgets](admin-search.md)

### ![Icon: Styles](/img/manual-english-icon-styles.avif) Manage layer styles

If **multi styles have been associated with the same layer** in the QGIS project, they will be exposed.

It will be possible to associate new layers by **loading related QML files** and **set the style to be used as default**.

![Screenshot: G3W-SUITE Administration Styles](/img/manual-english-g3wsuite-administration-styles.avif)

### Project layers actions
At the top right, identified by the item "Project layers actions", there are icons dedicated to settings that act on multiple elements of the project:
   * ![Icon: Multi Editing](/img/manual-english-icon-multi-editing.avif) **`Editing layer`:** allows you to enable online editing on multiple layers at the same time, simplifying the definition of enabled users
   * ![Icon: Clone Users](/img/manual-english-icon-clone-users.avif) **`Copy permissions`:** allows you to clone all the settings defined for a user (editing permissions, various constraints...), relating to the project being managed, and assign them to other users
   * ![Icon: Chart Order](/img/manual-english-icon-chart-order.avif) **`Project’s Qplotly widget order`:** allows you to define the display order of active graphs at the client interface level
