---
title: Image
description: A versatile component used to display images.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/637a00-image)
A versatile component used to display images.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/media-components-image--main) |
| --- |

## States

### Disabled

Lowers opacity to indicate the image or associated action is unavailable.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/media-components-image--disabled) |
| --- |

## Props

### Aspect ratio

Supports standard ratios:

* 1:1
* 4:3
* 16:9
* 7:3 

### Border Radius

Offers multiple rounding options ranging from `none` to `full`:

* `none`: 0px
* `50`: 2px
* `100`: 4px
* `200`: 8px
* `300`: 12px
* `400`: 16px
* `600`: 24px
* `full`: 9999px

### Object Fit

Control how the image fills its container using `cover` (fills the area), or `contain` (shows the whole image).

## Fallback

Automatically displays a placeholder if the image source is broken.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/media-components-image--fallback) |
| --- |

### Fallback Icon

Allows for a specific icon (like a "File" or "Warning" icon) to appear on load error.

## Related components