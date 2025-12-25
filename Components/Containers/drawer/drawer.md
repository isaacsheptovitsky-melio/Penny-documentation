# Drawer
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/179ec6-drawer)
The Drawer component is a side panel for extra context, mainly supporting **Resources** and **Job** layouts


| [Storybook](https://penny.melio.com/?path=/story/containers-drawer--main)  |
| --- |

## Usage

* Commonly used in the [Resources layout](https://zeroheight.com/98bb1df01/p/63ec5f) to display additional information
* It is also used in the [Job layout](https://zeroheight.com/98bb1df01/p/63ec5f) to support the user's workflow by enabling the completion of a smaller supplementary task

## Drawer sizes

Drawers are available in 3 sizes: 

>![Drawer sizes comparison](./assets/drawer-sizes-comparison.png)

### Small: 480px

For minimal content, such as bill details.

>![Small drawer - bill details](./assets/drawer-small-bill-details.png)
>*Bill details drawer*

### Medium: 708px

Used to display additional information for complex entities such as Vendor details:

>![Medium drawer - vendor details](./assets/drawer-medium-vendor-details.png)
>*Vendor details drawer*

### Large: 1216px

Used to display additional information alongside an attachment, such as Bill with the PDF file attached:

>![Large drawer - bill details with attachment](./assets/drawer-large-bill-with-attachment.png)
>*Bill details with attachment drawer*

## When to use the Drawer

The Drawer component supports two primary use cases:

1. Complementing the **Resources** layout by displaying additional details, enabling limited editing, and providing relevant actions.
2. Enhancing the **Job layout** by allowing users to edit the secondary job alongside the primary one.

### Complementing the **Resources layout**

A good example would be the Vendor details drawer:

* It shows additional details that can't be displayed in the Vendors table
* It allows for minor edits and triggering simple actions
* It preserves the context of the Vendors table in the background

>![Medium drawer - vendor details](./assets/drawer-medium-vendor-details.png)
>*Vendor details drawer*

### Enhancing the **Job layout**

Within a Job layout flow, the user may need to complete a smaller task to finalize the process

>![Medium drawer - vendor details](./assets/drawer-medium-vendor-details.png)
>*EXAMPLE NEEDED HERE*

## Guidelines

The decision to use a Drawer depends on the complexity and focus required for the task. Here's a framework to determine when a **drawer is sufficient** and when a **new page layout is needed**:

| ✅ **Use a drawer when:** | ❌ **Move to a dedicated Job layout when:** |
| --- | --- |
| The user is performing a **secondary task** while keeping context from the main screen. | The task is **primary and demands full attention** (completing a workflow, filling out a complex form) |
| The task is **quick and lightweight**, such as making minor edits, viewing details, or triggering simple actions. | The amount of information **overflows the drawer's space**, requiring excessive scrolling. |
| The layout remains **readable and scannable**, even in a narrower panel. | Multiple steps or **progressive disclosure** are necessary (e.g., tabs, accordions). |

>📌 While the guidelines recommend using the Drawer for quick and lightweight secondary tasks, it can also accommodate more complex experiences when such complexity is the exception rather than the norm.

## Mobile interpretation

In mobile, an open drawer is displayed over the entire viewport:

>![Mobile drawer example](./assets/drawer-mobile-example.png)

## Related components