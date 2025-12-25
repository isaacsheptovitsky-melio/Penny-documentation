---
title: Breakpoints
description: Breakpoints represent how the screen resolution is broken down so we could support the responsiveness of the application across different devices.
---

# Breakpoints

Breakpoints represent how the screen resolution is broken down so we could support the responsiveness of the application across different devices.


# Usage

* **Apply spacing tokens** for margins, paddings, layout gaps, grid gutters, etc.
* **Avoid arbitrary pixel values** unless justified by a special case.
* Use **larger tokens** to separate sections or create breathing room.
* Use **smaller tokens** inside compact components or dense UI areas.


# Breakpoints 

| Breakpoint | Range | Device |
| --- | --- | --- |
| xs | 0px - 599px | Mobile |
| s | 600px - 904px | Mobile in landscape |
| m | 905px - 1239px | Tablet |
| l | 1240px - 1439px | Laptop |
| xl | < 1440px | Desktop |

>📌  We primarily design for two device types: mobile and desktop. Our main breakpoint is 1240px, meaning that at 1239px and below, components and layouts adapt to a mobile-friendly format.

# Container width

>🖥️ The max-width setting allows containers to expand up to the specified width (e.g., 900px) when there is enough space. For example, a container with a max-width of 900px will grow to fill the screen but will stop expanding once it reaches 600px.

![](/foundation/assets/breakpoints-image-1.png)
*Expanding the viewport to let the container increase in width, up to its maximum width of 900px.*

# Variants

We use several container width variants:

>![](/foundation/assets/breakpoints-image-2.png)

## 480px container width

This container width is used for the main login screen.

![](/foundation/assets/breakpoints-image-3.png)

## 600px max-width

**This is the default** width of the main container, primarily in the [Job layout](https://zeroheight.com/98bb1df01/p/63ec5f-layout/t/f738877dfd). Elements are stacked vertically to help users focus on one task at a time.

![](/foundation/assets/breakpoints-image-4.png)

## 900px container width

This width is used when the default 600px is too narrow. It features horizontally arranged elements and is commonly used for form fields.

![](/foundation/assets/breakpoints-image-5.png)
*The Create Invoice screen allows users to generate invoices in a traditional, familiar format with line items.*

## 1200px container width

This width is used when users need to view and compare detailed information.

>![](/foundation/assets/breakpoints-image-6.png)
>*The Choose a Plan screen requires users to compare 3 different plans*

## 100% container max-width

Used in the Resource screen and tables to optimize screen space.

>![Resource screen example](/foundation/breakpoints-assets/resource-screen-example.png)