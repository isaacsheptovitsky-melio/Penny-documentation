# Layout
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/77e418-layout)
The **Layout** component creates the foundational structure for a page, defining Header, Content, and Footer areas. Use it to control the main content's maximum width.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-layout--layout-600) |
| --- |

## Usage

* Use the **Layout** component as the top-level container for every page in the application
* Select a `maxWidth` for the content area to prevent content from becoming too wide on large desktop screens
* Use the `isLoading` state to provide visual feedback to the user when the page is fetching data

>🤓 **Tip**: Use narrower widths like `600px` for pages with focused tasks, like the `Job` layout that displays forms, to improve user focus.

## Structure

The layout is divided into three distinct slots:

* **Header**: A slot at the top of the page. It can be set to `isSticky` to remain visible as the user scrolls
* **Content**: The main body of the page where your primary components will live. This is the area affected by the `maxWidth` property
* **Footer**: A slot at the bottom of the page. It can also be set to `isSticky`

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-layout--sticky-header-and-footer) |
| --- |

## Variants

### Max-width

This controls the maximum width of the `Content` section, which is always centered horizontally.

![Max width variants](./assets/layout-image-1.png)

**Max width variants**

---

### Common use cases

Read more about Layout and what max-width you should use [here](https://zeroheight.com/98bb1df01/p/63ec5f).

>💎 You can set your own custom max-width by passing your own value, e.g. '1140px' , however try to avoid that in order to keep the layout consistent across the platform.

### Background color

You can set the background color for the main content area.

* **default**: The standard, slightly off-white background color for most pages
* **white**: A pure white background
* **lightest**: A very light gray, useful for creating subtle separation between page sections

>💎 For accessibility, ensure any background color you choose provides sufficient contrast with the text. Avoid combinations that are difficult to read.

### Loading state

In its loading the state, a loading indicator over the content area is displayed. This blocks interaction with the content until loading is complete.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/layouts-layout--is-loading) |
| --- |

## Mobile use

On mobile devices, the `maxWidth` property has less impact as the screen width is typically narrower than the available options. The layout will naturally adapt to fit the screen, and the content will reflow vertically.

Read more about how laying out screens in mobile with regard to accessibility [here](https://zeroheight.com/98bb1df01/p/8911b4).

## Related components