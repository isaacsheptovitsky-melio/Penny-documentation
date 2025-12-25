---
title: Select
description: The select component allows users to choose a single option from a predefined list. It is commonly used in forms where a dropdown selection is required.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/97d613-select)
The select component allows users to choose a single option from a predefined list. It is commonly used in forms where a dropdown selection is required.


| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--main) |
| --- |

>👀 **Note:** For details on sizes, behaviors, and general guidelines applicable to all form components, refer to the[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[Form Field](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)documentation.

## Usage

* Select is typically used when you have 5-8 items to choose from
* Users can either choose a new value or clear the current selection
* When organizing menu items, sort the list in a logical order by putting the most selected option at the top

>🤓 **Tip**: If server calls are necessary, consider using the**[ Combobox](https://zeroheight.com/98bb1df01/p/063a89-combobox)** component instead 

## Variants

### Sizes

| Small - 40px height | Large - 48px height  |
| --- | --- |

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--sizes)

### Empty state

Empty state can be customised based on your needs 

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--empty-state)

### Clear button 

On default, clear button will appear after a value is selected. There's an option to hide it if needed.

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--hide-clear-button)

### Search bar 

* For cases where the **Select** component contains a large number of options, consider adding a search bar inside the floating menu.

* This allows users to quickly filter and find the relevant option without excessive scrolling. 

* The search field should be positioned at the top of the menu.
*  If the list is dynamic, ensure that filtering updates the visible options in real time. However, if users need more advanced search capabilities, a **[Combobox](https://zeroheight.com/98bb1df01/p/063a89-combobox)** may be a better alternative.

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--with-search-bar)

### Custom trigger content 

The Select component supports customization for both the trigger and menu options. Instead of a standard button, the trigger can be customized to include elements like avatars, icons or brand symbols. 

Similarly, menu options can be enhanced with multi-line descriptions, additional metadata, or visual elements such as icons or images.

[Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-select-new--multi-line-custom-trigger-and-option-content)

|   |
| --- |

## Do's and don'ts

### ✅ Do
**Use a Select when there are multiple predefined options**
Use a Select when there are multiple predefined options.
![](/Penny-documentation/components/select/select-image-1.png)

### ❌ Don't
**Use Radio Buttons for very few options**
Don't use a Select when there are very few options—consider Radio Buttons instead.
![](/Penny-documentation/components/select/select-image-2.png)

## Am I using the right component?

![](/Penny-documentation/components/select/select-image-3.png)

## Related components 