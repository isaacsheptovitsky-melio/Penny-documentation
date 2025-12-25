---
title: Link
description: The **Link** component navigates users to another page or location when they click on it.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/921cd5-link)
The **Link** component navigates users to another page or location when they click on it.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--main) |
| --- |

## Usage

Use a link when you want to:

* Navigate to a different page within the Melio app (e.g., from the dashboard to the "Payables" page)
* Direct users to an external URL, such as a help article or a partner website

>🤓 **Tip**: To prevent user confusion, always make sure link text clearly describes its destination. For example, use "View invoice details" instead of a generic "Click here."

## Variants

### Type

Links come in two main types:

* **Standalone**: Used for navigation that stands on its own, such as in a navigation menu or as a primary call to action. It has more styling options like size and boldness.
* **Inline**: Used within a sentence or a block of text to link specific words without disrupting the flow of the content. For example: "Please review the `Terms of Service` before proceeding."

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--main) |
| --- |

### Color

You can apply different colors to a link to fit its context:

* **Default**: The standard link color for most use cases
* **Secondary**: The brand color for more prominent links
* **Inverse**: For use on dark backgrounds to ensure high contrast
* **Inherit**: The link will inherit the color of its parent text element

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--colors) |
| --- |

### Size

Standalone links can be set to two sizes:

* **Medium**: The default size for most standalone links (Using `Body3` style)
* **Large**: Used for more prominent navigational links that need to draw more attention (Using `Body2` style)

![Link sizes](/Penny-documentation/components/link/link-image-1.png)

**Link sizes**

---

### Bold

Make a standalone link bold to give it more visual weight.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--bold) |
| --- |

### Disabled

A disabled link is not clickable and appears grayed out.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--disabled) |
| --- |

### Ellipsis

Use the ellipsis style when the link text might be too long for its container. It will truncate the text and add "..." to the end.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/navigation-components-link--with-ellipsis) |
| --- |

>⚠️ Truncated links can pose an accessibility challenge. Prioritize clear and concise link labels that fit the available space whenever possible.

## Accessibility

**Descriptive labels**: Ensure the link's text accurately describes its purpose. For screen reader users, avoid vague text like "Learn More."

**Truncated Links**: If a link label must be truncated, ensure a tooltip displays the full text on hover and focus. Most importantly, the link's accessible name must be the full, untruncated text so a screen reader announces its complete purpose. Use the `title` attribute or a custom tooltip for this.

## Related components