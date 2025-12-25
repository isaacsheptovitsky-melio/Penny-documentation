---
title: Navigation item
description: Handles navigation, making it ideal for use in navigation bars and navigation lists.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/271b02-navigation-item)
Handles navigation, making it ideal for use in navigation bars and navigation lists.


| [Storybook](https://penny.melio.com/?path=/story/navigation-components-navigation-item--main) |
| --- |

## Usage

* Ensure the label of each Navigation item concisely communicates its destination
* Arrange Navigation items logically, prioritizing frequently accessed sections or actions
* Can include icons to indicate the destination

>🤓 **Tip**: Use icon-only variants sparingly and only when the icon meaning is universally clear or paired with a tooltip.

## Variants

### Selected

Represents the active state, visually indicating the user's current location or selected navigation option.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-navigation-item--selected)  |
| --- |

### Custom content

Allows for embedding custom structures, such as combining icons and text (arranged vertically, horizontally, or icon-only), to create richer content within the navigation item.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-navigation-item--custom-content)  |
| --- |

### Full width

A layout option where the navigation item expands to occupy the entire width of its parent container.

| [Storybook](https://penny.melio.com/?path=/story/navigation-components-navigation-item--full-width)  |
| --- |

### As link

Specifies that the item should render as a semantic HTML link (`<a>` tag), used for navigating to different URLs or page sections.

|  [Storybook](https://penny.melio.com/?path=/story/navigation-components-navigation-item--as-link)  |
| --- |

## Mobile use

* Navigation often collapses into "hamburger" menus
* Frequently used items might appear in a bottom navigation bar
* Prioritize visibility of critical items

## Accessibility

* **Use icons meaningfully:** When incorporating icons, ensure they are paired with clear text labels or, if used alone, that their meaning is understood and an accessible name is provided for screen reader users
* **Write descriptive labels:** Design with clear, concise labels that accurately describe the destination or action. This helps users understand the purpose of each item without needing extra context.
* **Specify role (link vs. button):** Clearly indicate in your design specifications whether an item is intended to navigate (link) or perform an action (button), as this impacts how developers will implement it for accessibility.

## Do's and don'ts

### ✅ Do
**Keep labels clear and concise**
Keep labels clear and concise
![](/Penny-documentation/components/navigation-item/navigation-item-image-1.png)

### ❌ Don't
**Don't use vague or long, truncated labels**
Use vague or long, truncated labels
![](/Penny-documentation/components/navigation-item/navigation-item-image-2.png)

## Related components