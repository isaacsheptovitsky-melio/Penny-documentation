---
title: External layout
description: A layout for pages viewed by external users, such as vendors or guest payers.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/9850c0-extrenal-layout)
A layout for pages viewed by external users, such as vendors or guest payers.


| [Storybook](https://penny.melio.com/?path=/story/layouts-external-layout--main) |
| --- |

>**🤓 Tip:** When creating white-labeled experiences for partners, utilize the `logo` prop to replace the default Melio branding with the partner's logo.

## Anatomy

* **Header:** The area positioned at the top right. Use this for auxiliary actions like "Login" or "Help."
* **Logo:** By default, this displays the Melio logo. It can be overridden with a custom `ReactElement` for specific branding requirements.
* **Content:** The primary workspace of the screen. This is where the form inputs, payment details, or confirmation messages reside.
* **Footer:** The bottom section, typically used for legal disclaimers, copyright info, or secondary links.

## Props

### Loading state

A boolean state (`isLoading`) that overlays the layout to indicate background processing, preventing user interaction during critical updates.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-external-layout--loading)

### Hide logo

Removes the logo in the header.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-external-layout--hide-logo)

### Override logo

Allows overriding the logo displayed.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-external-layout--override-logo)

## Mobile use

The layout is fully responsive. On mobile devices, the internal padding adjusts to maximize screen real estate. Ensure that the `content` and `footer` elements stack vertically and remain legible on smaller touchscreens.

## Related components