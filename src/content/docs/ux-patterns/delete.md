---
title: Delete
description: Users can delete existing resources with confirmation steps to prevent accidental data loss.
---

Users can delete existing resources.

**Preventing accidental deletions:** To prevent unintended data loss, all destructive actions (e.g., "Delete vendor," "Delete bill") must include another confirmation step.

**Confirmation friction:** This confirmation step uses a **[Modal](/components/containers/modal)**, is to add friction, ensuring the user verifies their intent before an irreversible action is processed.

![Delete flow](/Penny-documentation/ux-patterns/delete/delete-flow.png)

## How to best implement

### Resource

Position deletion triggers as an action to a row. Always trigger a confirmation modal upon selection to prevent accidental data loss.

![Delete resource from table row](/Penny-documentation/ux-patterns/delete/delete-resource-table-interaction.gif)

### Resource: details

Position deletion triggers within the drawer's footer menu. Always trigger a confirmation modal upon selection to prevent accidental data loss.

![Delete resource from details drawer](/Penny-documentation/ux-patterns/delete/delete-resource-drawer-interaction.gif)

![Delete confirmation modal example](/Penny-documentation/ux-patterns/delete/delete-confirmation-modal.png)
