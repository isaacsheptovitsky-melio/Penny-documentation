---
title: Tabs
description: Tabs let users switch between related content sections that are on the same level, helping organize information within a single view.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/795906-tabs)
Tabs let users switch between related content sections that are on the same level, helping organize information within a single view.


| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--main) |
| --- |

## Usage

* Use Tabs to switch between views or categories that are conceptually related and parallel in hierarchy (e.g., Vendors, Bills, Payments)
* Ideal when the number of tabs is limited and all options are important enough to be visible.
* Tab labels should be short, clear, and ideally one or two words.
* Avoid nesting tabs within tabs to prevent confusion and cognitive overload.

>🤓 **Tip**: Use Tabs when content changes without refreshing or routing the page. If navigation causes a full page refresh, consider using a [navigation bar](https://zeroheight.com/98bb1df01/p/271b02) instead.

## Applying a bottom border to Tabs

To achieve this visual separation, the Tabs component must be enclosed within a parent container element. Apply a `border-bottom` style to this container to ensure the boundary spans the full width of the component, providing a complete and professional delineation for the navigation bar.

The border-bottom style should be 1px and using the `semantic.border.static` color.

![Default](/Penny-documentation/components/tabs/tabs-default.png)

**Default**

---

![Manually wrapped with a div with a border-bottom](/Penny-documentation/components/tabs/tabs-with-border.png)

**Manually wrapped with a div with a border-bottom**

---

## Variants

### Full width

Tabs stretch across the full width of their container. **Use when** tabs need to be evenly spaced or when you have fewer tabs and want a balanced layout.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--full-width)  |
| --- |

### Neutral

A low-emphasis style that avoids using the Melio purple brand color. **Use when** tabs are part of a secondary or less prominent navigation section.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--neutral-variant)  |
| --- |

### With counters

Shows item counts in each tab [counters](https://zeroheight.com/98bb1df01/p/597fd1). **Use when** it's helpful for users to see how many items are in each category at a glance (e.g., unread, pending).

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--with-counters) |
| --- |

### With pills

Adds status indicators like "New" or "Pending Approval" as pills next to tab labels. **Use when** you want to highlight urgent or special attention items without showing exact counts.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--with-pills) |
| --- |

### With pills and counter by breakpoints

Pills are shown on larger screens and automatically collapse into counters on mobile.**Use when** you want rich tab labels on desktop while keeping things compact and readable on mobile.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-tabs--with-pills-and-counter-by-breakpoints) |
| --- |

## Mobile use

Avoid using too many tabs on mobile; consider collapsing into a dropdown if space is too limited.

## Do's and don'ts

### ✅ Do
**Use clear, short, and descriptive labels**

![Do example](/Penny-documentation/components/tabs/tabs-do-example.png)

### ❌ Don't
**Nest tabs inside other tabs**

![Don't example](/Penny-documentation/components/tabs/tabs-dont-example.png)

---

## Use cases

### **AP dashboard navigation**

Sepearates key accounts payable sections (**Vendors**, **Bills**, **Approvals**, **Payments**, and **Financing**) within the same dashboard view.

>![](/Penny-documentation/components/tabs/tabs-ap-dashboard.png)

### Accounts Receivable (Get Paid) workflows

Separates key views (**Invoices**, **Customers**, and **Payments)** to help users manage each AR function independently.

>![](/Penny-documentation/components/tabs/tabs-ar-dashboard.png)
>
>

## Accessibility

Use short, descriptive tab labels that clearly indicate purpose; avoid ambiguity like "Other" or "More".

## Related components