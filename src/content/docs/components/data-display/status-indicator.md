---
title: Status indicator
description: A small, colored dot applied to a component to visually communicate a specific status, such as 'paid' or 'active'.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/182563-status-indicator)
A small, colored dot applied to a component to visually communicate a specific status, such as 'paid' or 'active'.


![Status indicator on top of a Filter button, indicating filters have been applied.](/Penny-documentation/components/status-indicator/status-indicator-image-1.png)

**Status indicator on top of a Filter button, indicating filters have been applied.**

---

## Usage

* **Convey system or item status**: Use to communicate the state of an item
* **Signal notifications**: Place on a component like an Icon button to indicate new, unread activity.

>🤓 **Tip**: To ensure clarity and accessibility, always provide a textual equivalent for the status on hover using a **Tooltip**. Don't rely on color alone to convey meaning.

## Application

To apply the Status indicator  use the [Badge](https://zeroheight.com/98bb1df01/p/1887ca) component for placing the component on top of other components.

![Using the Badge component](/Penny-documentation/components/status-indicator/status-indicator-image-2.png)

**Using the Badge component**

---

## Variants

### Status

The `status` prop determines the indicator's color to align with its semantic meaning.

* **Critical:** Indicates an error, failure, or urgent action required
* **Warning:** Calls attention to a potential issue or time-sensitive information
* **Success:** Signals a positive status, active, or turned on
* **Informative:** Provides neutral, helpful information about an in-progress state
* **Brand:** Highlights a key feature or status related to the Melio brand
* **Neutral:** A default or non-critical status with no specific semantic meaning
* **Secondary:** A less prominent status for secondary information

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-status-indicator--all-statuses) |
| --- |

### States

Because the Status Indicator often accompanies interactive elements, it supports specific states to ensure consistent visual behavior with its container.

![Read only](/Penny-documentation/components/status-indicator/status-indicator-image-3.png)

**Read only**

---

![Disabled](/Penny-documentation/components/status-indicator/status-indicator-image-4.png)

**Disabled**

---

## Related components