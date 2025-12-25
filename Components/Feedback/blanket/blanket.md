# Blanket
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/2365d6-blanket)
The Blanket component is an overlay used to obscure background content.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main&args=isOpen:!true;variant:dark;icon:null;isFullScreen:!false;isLoading:!false;data-testid:blanket) |
| --- |

## Usage

* Use the overlay to help focus user attention on a specific task
* Use with the `isLoading` prop to mask a screen / component while data is being fetched, such as verifying a vendor's bank details

## Variants

### Appearance

#### Light

A subtle white obscuring, best for disabling specific items like a form field or table row.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main&args=variant:light)  |
| --- |

#### Dark

A dark overlay, typically used for full-screen overlays like Modals

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main)  |
| --- |

#### Darker

A darker overlay color, rarely used.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main&args=variant:darker)  |
| --- |

## Props

### Loading

Displays the [Loader](https://zeroheight.com/98bb1df01/p/412213) component centered within the blanket.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main&args=variant:light;isLoading:!true) |
| --- |

### With Icon

Displays a specific icon centered in the blanket, useful for upload states or empty states.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/feedback-components-blanket--main&args=icon:book)

## Use cases

### Component blanket

The blanket with an icon covers the file attachment, indicating it requires an image file.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/selection-inputs-components-file-attachment--main) |
| --- |

### Table blanket

The blanket in its Light variant, over the first 3 rows.

![Blanket over first 3 rows](./assets/blanket-image-1.png)

**Blanket over first 3 rows**

---

## Related components