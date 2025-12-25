---
title: Group 
description: The Group component is used to group multiple elements within a single container. It provides consistent spacing, layout direction, and optional dividers, helping structure UIs with clean, aligned patterns.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/596a7b-group)
The Group component is used to group multiple elements within a single container. It provides consistent spacing, layout direction, and optional dividers, helping structure UIs with clean, aligned patterns.


| [Storybook](https://penny.melio.com/?path=/story/containers-group--main) |
| --- |

## Usage

* Use when multiple components should appear as a unified section.
* Adjust spacing to control the visual rhythm between items using design tokens.
* Use variant to switch between horizontal or vertical layout.
* Use hasDivider for visual separation between elements.

>🤓 **Tip**: Use the Figma [Group Lvl. 2](https://www.figma.com/design/X7oG85653Gwwg7eDTrDUYW/%F0%9F%A4%8D-DS-Components-%F0%9F%A4%8D?node-id=29916-532118&t=SIqolpvrLo3kBWk9-11) to nest groups within groups

## Variants

### Direction

![Horizontal (default): Items are laid out in a row.](/Penny-documentation/components/group/group-image-2.png)

**Horizontal (default): Items are laid out in a row.**

---

![Vertical: Items are stacked in a column.](/Penny-documentation/components/group/group-image-3.png)

**Vertical: Items are stacked in a column.**

---

### With dividers

![Turn dividers on/off for visual separation.](/Penny-documentation/components/group/group-image-4.png)

**Turn dividers on/off for visual separation.**

---

### Horizontal scrolling

`allowOverflowX` lets content scroll horizontally, which is useful for dynamic lists.

|  [Storybook](https://penny.melio.com/?path=/story/containers-group--with-overflow-x) |
| --- |

>🚨 Horizontal scrolling can be challenging for accessibility—avoid it when possible. 

## How to use

Use the Group component to create complex components. Simply replace the slots with other components, and adjust sizing.

![](/Penny-documentation/components/group/group-image-1.gif)