---
title: Tooltip
description: Tooltip displays brief helper text on hover or focus to clarify an element's purpose without cluttering the UI
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/60e8d6-tooltip)
Tooltip displays brief helper text on hover or focus to clarify an element's purpose without cluttering the UI


| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--main) |
| --- |

## Usage

* Explain icon-only buttons or ambiguous UI elements.
* Provide extra information on hover (e.g., "Scheduled to send on May 2").
* Clarify disabled states or restricted access (e.g., "Only admins can edit roles")

>🤓 **Tip**: Tooltips are for hints, not full explanations. If it needs a sentence or more, consider a popover or modal

## Variants

### With title

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--with-title)  |
| --- |

### Label with line break

There's no character limit for the tooltip, however the tooltip's max-width is 296px. 

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--label-with-line-break)  |
| --- |

### Placement

The tooltip can be placed on either side of the triggering element, give it a try:

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--placement)  |
| --- |

### Focus trigger

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--should-add-trigger-focus)  |
| --- |

### Label with icon

|  [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--label-with-icon)  |
| --- |

### Controlled

Tooltips can be triggered by events beyond just hovering directly over them

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tooltip--controlled)  |
| --- |

## Mobile use

Tooltips do **not** appear on hover. For touch devices:

* Use alternative UI (e.g., help icons, modals, or inline text)
* Don't rely on hover-only interactions—ensure all info is accessible

## Do's and don'ts

### ✅ Do
**Use tooltips to explain icon purposes**
Use a tooltip to explain the purpose of an icon when there's no visible label
![](/Penny-documentation/components/tooltip/tooltip-image-1.png)

### ❌ Don't
**Don't use tooltips for critical info**
Use tooltips for critical info
![](/Penny-documentation/components/tooltip/tooltip-image-2.png)

## Accessibility

* Ensure tooltips can be triggered by both **hover** and **keyboard focus**
* Remember that **disabled elements** should still allow users to access their tooltip content
* Keep tooltip text **short, clear, and supportive**, it should never replace essential information
* Tooltips are meant to assist, not block task completion or hide important actions

## Related components