---
title: Flag icon
description: The Flag Icon component renders a country's national flag within a circular icon. It provides a quick visual reference for a country, identified by its two-letter ISO code.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/90e902-flag-icon)
The Flag Icon component renders a country's national flag within a circular icon. It provides a quick visual reference for a country, identified by its two-letter ISO code.


| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-flag-icon--main) |
| --- |

## Usage

* Use the Flag Icon to visually supplement country information, such as in a currency selector
* A valid two-letter `countryCode` in **ISO 3166-1 alpha-2** format (e.g., 'US', 'GB') is required to display a flag.

## Variants

### Size

The `size` prop controls the dimensions of the icon:

* **small**: Best for dense UIs like table rows or as a prefix in a `TextField`
* **medium** (Default): The standard size for most use cases

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-flag-icon--sizes) |
| --- |

### Disabled

Setting isDisabled to true desaturates the flag and prevents user interaction, signaling that the option is not currently available.

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-flag-icon--disabled) |
| --- |

## Country codes

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/data-display-components-flag-icon--country-codes) |
| --- |

## Related components