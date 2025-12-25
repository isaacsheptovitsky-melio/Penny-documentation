# Base Sheet
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/692e9d-base-sheet)
The **Base Sheet** is a mobile-first container that slides up from the bottom of the screen to display supplementary information or actions.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/containers-base-sheet--bottom) |
| --- |

## Usage

The Base Sheet is our primary overlay pattern for mobile interfaces. It is used to create focused experiences for tasks that would appear in a **Modal** or a side **Drawer** on desktop.

Use a Base Sheet in mobile view to:

* Present a list of actions, like "Pay," "Approve," or "Mark as paid."
* Display details of a selected item, like the transaction history for a specific bill.
* Replace modals and drawers

>🤓 **Tip**: Use the Base Sheet for short-to-medium complexity tasks, like making a selection or filling a simple form. For highly complex workflows, such as a **Job**, a full-screen view will provide a better user experience.

## Variants

### Placement

#### Bottom

The Base Sheet slides up from the bottom of the viewport, making it ergonomic and easy to reach on a mobile device.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/containers-base-sheet--bottom) |
| --- |

#### Left

The Base Sheet slides from the left of the viewport, confirming to sidebar's location and behvior.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/containers-base-sheet--side) |
| --- |

### Loading state

Displays a loading indicator, obscuring the sheet's content. Use this to provide feedback when fetching data, such as loading invoice details.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/containers-base-sheet--loading) |
| --- |

## Use case

The Bottom Sheet streamlines the mobile experience by consolidating multiple desktop UI elements into a single interface. In this example, it replaces two separate components:

* **A 'More actions' menu:** It presents the full list of secondary actions without needing a popover or dropdown menu.
* **A confirmation modal:** It handles the subsequent destructive action, such as confirming to 'Delete bill,' within the same sheet.

>
>
>![](./assets/base-sheet-image-1.gif)
>
>

## Do's and Don'ts

### ✅ Do
**Use the sheet for a single, focused task**
Use the sheet for a single, focused task, like a list of choices.
![](./assets/base-sheet-image-2.png)

### ❌ Don't
**Don't overload the sheet with multiple steps**
Overload the sheet with multiple steps or complex navigation. If a task requires more than a few inputs, use a Job layout instead.
![](./assets/base-sheet-image-3.png)

## Accessibility

**Focus Management:** When a sheet opens, focus is automatically moved inside it. When closed, focus returns to the element that triggered it (e.g., the "Add Vendor" button)

## Related components