# Delete
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/97d3e6-delete)
Users can delete existing resources.


**Preventing accidental deletions:** To prevent unintended data loss, all destructive actions (e.g., "Delete vendor," "Delete bill") must include another confirmation step.

**Confirmation friction:** This confirmation step uses a **[Modal](https://zeroheight.com/98bb1df01/p/216a44)**, is to add friction, ensuring the user verifies their intent before an irreversible action is processed.

![Delete confirmation modal example](.././assets/delete-confirmation-modal.png)

## How to best implement

### Resource

Position deletion triggers as an action to a row. Always trigger a confirmation modal upon selection to prevent accidental data loss.

![Delete resource from table row](.././assets/delete-resource-table-interaction.gif)

### Resource: details

Position deletion triggers within the drawer's footer menu. Always trigger a confirmation modal upon selection to prevent accidental data loss.

![Delete resource from details drawer](.././assets/delete-resource-drawer-interaction.gif)

## Related patterns