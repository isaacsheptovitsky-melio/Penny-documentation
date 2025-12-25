---
title: Action Bar
description: The Action Bar is a pattern, based on the Panel component, that is used for managing bulk actions.
---

## Action Bar

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/722aae-action-bar)

The Action Bar is a pattern, based on the Panel component, that is used for managing bulk actions.

[Storybook](https://penny.melio.com/?path=/story/action-components-action-bar-pattern--main)

## Usage

* The Action bar is a pattern based on the [Panel](https://zeroheight.com/98bb1df01/p/18aa8b) component
* Use when a user selects multiple items and needs to apply an action to all of them
* Only show the bar when selections are made
* Display a clear summary of the selected items on the left

## Variants

### Max width

Supports fixed values (1600px, 1200px, etc.) or custom numbers. Default is 1600px.

![Action bar with 1600px and 1200px max widths, respectively.](/Penny-documentation/components/action-bar/action-bar-image-1.gif)

**Action bar with 1600px and 1200px max widths, respectively.**

---

>🤓 **Tip**: Align the action bar's max width with the Layout grid (e.g., 1600px) to maintain visual consistency.

### Loading state

Indicates wether the Action bar is loading.

[Storybook](https://penny.melio.com/?path=/story/action-components-action-bar-pattern--loading)

### Background color

Background color is customizable to any of the Penny's colors, however it uses the `semantic.surface.inverse` by default.

![Action bar using background colors inverse and brand, respectively.](/Penny-documentation/components/action-bar/action-bar-image-2.png)

**Action bar using background colors inverse and brand, respectively.**

---

## Mobile use

The Action bar is not available on mobile, as bulk actions are not supported in mobile views.

## Use cases

The Action bar appears in all Resource layouts and is triggered when one or more row items are selected.

![](/Penny-documentation/components/action-bar/action-bar-image-1.gif)

## Related components