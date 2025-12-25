---
title: Search bar
description: The search bar component allows users to quickly find relevant information within an application. It provides an intuitive and efficient way to filter data, improving the overall user experience.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/243ebd-search-bar)
The search bar component allows users to quickly find relevant information within an application. It provides an intuitive and efficient way to filter data, improving the overall user experience.


|  [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-search-bar--on-search) |
| --- |

## Usage

*     * **Primary Use:** When users need to search for specific items in a large dataset or navigate content efficiently.
    * **Placement:** Typically positioned at the top of a page, inside a navigation bar, or within a filtering panel.
    * **Behavior:** Supports live search, autocomplete suggestions, and filtering options, depending on implementation.
    * Allow users to clear the search input easily with a clear button (✖️)

>👀 **Note:** For details on sizes, behaviors, and general guidelines applicable to all form components, refer to the[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[Form Field](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)documentation.

## Variants

| **Default**  | **On Search** |
| :--- | :--- |
|  Search icon is decorative  [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-search-bar--main) |  Search icon is an icon button [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-search-bar--on-search) |
|  Use this variant when the search field is used .**only for filtering**. content within a predefined list or menu. Example: A search field inside a dropdown menu that filters available options as the user types. |  Use this variant when the search field requires a user action to .**submit a search query**.. Example: A global search bar in a navigation header where the user types a term and clicks the button to initiate a search. The search button is interactive and executes a search function when clicked. |

### Size

Search bar has default width, but can get full width if needed.

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-search-bar--full-width)

### With label

Search bar can appear with with prefix of label, or not.

Ensure proper `aria-labels` for the input label.

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-search-bar--with-label)

## Do's and don'ts

### ✅ Do
**Allow users to clear the search input easily**
Allow users to clear the search input easily with a clear button (✖️)
![](/Penny-documentation/components/search-bar/search-bar-image-1.png)

### ❌ Don't
**Don't reset user input unexpectedly**
Don't reset user input unexpectedly when navigating or refreshing the page.
![](/Penny-documentation/components/search-bar/search-bar-image-2.png)

## Related components 