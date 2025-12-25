---
title: Virtual card
description: A composite component used to visually display digital credit card details.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/204a13-virtual-card)
A composite component used to visually display digital credit card details.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-virtual-card-virtual-card-pattern--main) |
| --- |

The Virtual Card component is made out of the following atomic components:

* [Base Virtual Card](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/docs/data-display-components-virtual-card-base-virtual-card--docs)
* [Card number](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/docs/data-display-components-virtual-card-card-number--docs)
* [CVV](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/docs/data-display-components-virtual-card-cvv-number--docs)
* [Expiration date](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/docs/data-display-components-virtual-card-expiration-date--docs)
* [Details](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/docs/data-display-components-virtual-card-details--docs)


## Usage

Use this component to:

* Present the necessary details for a user or vendor to process a payment online
* Display the issuing network using the `brandType` prop
* Control the visibility of sensitive information (like the full card number and CVV) using the `showDetails` prop.
* show the specific value loaded onto the card or the remaining limit using the `amount` prop

## Variants

### Visual styles

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-virtual-card-virtual-card-pattern--variants)

Or use the BackgroundImage prop to render any image as the background:

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-virtual-card-virtual-card-pattern--with-background-image)

### Data Visibility

Details Hidden `showDetails=false` masks sensitive information, likely showing only the last 4 digits or asterisks, suitable for initial views.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-virtual-card-virtual-card-pattern--hidden-details)

### Customize details

Avoid overriding the default card details unless absolutely necessary, as the standard layout is optimized for readability.

[Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-virtual-card-virtual-card-pattern--customize-details)

## Related components