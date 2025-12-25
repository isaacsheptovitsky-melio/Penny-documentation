---
title: Avatar
description: The **Avatar** component is used to represent a user or an entity. It can display a custom image, the user's initials, or a generic icon as a fallback.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/38376c-avatar)
The **Avatar** component is used to represent a user or an entity. It can display a custom image, the user's initials, or a generic icon as a fallback.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--main) |
| --- |

## Usage

* Use an avatar to visually identify a user or company in the interface
* If an image source is not provided or fails to load, the component will display the initials derived from the `name` prop.
* Avatars can include a `badge` to convey status, such as online presence or notifications.
* They are available in multiple sizes to fit various layout contexts, from compact lists to prominent profile headers.

## Variants

### Shape

* **Circle** (Default): The standard circular shape
* **Square**: A squared shape with rounded corners

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--variants) |
| --- |

### Sizes

The `size` prop adjusts the dimensions of the avatar for different contexts.

* extra-small: 16px
* small: 24px
* medium (Default): 32px
* large: 56px 
* extra-large: 120px

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--sizes) |
| --- |

### State

Avatars can have different visual states to reflect their status.

#### **Selected**

The `isSelected` prop applies a visual indicator (like a ring or border) to show the avatar has been selected.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--selected) |
| --- |

#### **Disabled**

The `isDisabled` prop applies a grayscale filter and disables pointer events, making the avatar non-interactive.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--disabled) |
| --- |

### Background Color

When no image `src` is provided, a background color can be set using the `bgColor` prop. This helps in visually distinguishing between different users based on a consistent color. Options include `avatar1`, `avatar2`, etc.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-avatar--background-colors) |
| --- |

## Related components