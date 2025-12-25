---
title: Text area
description: The Text Area component is a multi-line text input, allowing users to enter longer content such as descriptions, messages, or comments. 
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/627fc8-text-area)
The Text Area component is a multi-line text input, allowing users to enter longer content such as descriptions, messages, or comments. 


|  [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-text-area--main) |
| --- |

## Usage

* Unlike a standard text field, which is intended for single-line input, the text area is optimized for handling large amounts of text with improved usability and visibility.
* Use a text area when users need to enter multiple lines of text, such as: comments and feedback forms, descriptions and notes, messages or email drafts

>👀 **Note:** For details on sizes, behaviors, and general guidelines applicable to all form components, refer to the[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[Form Field](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)documentation.

## Variants

### Size

The input has a default height of 4 rows, which is the equivalent of 128px. The default height could be set by overriding the default `numberOfRows` to a different value.

### Max chars

* **Character Limit**: Use the `maxChars` prop to define the maximum number of characters allowed (e.g., `maxChars={10}`).
* **Visual Counter**: To display the character count, wrap the `TextArea` component in a `FormField`.

[Storybook](https://penny.melio.com/?path=/story/form-form-field--with-max-chars)

## Do's and don'ts

### ✅ Do
**Use a text area for multiple lines of text**
Use a text area when users need to enter multiple lines of text.
![](/Penny-documentation/components/text-area/text-area-image-1.png)

### ❌ Don't
**Don't use text area for short single-line inputs**
Don't use a text area for short inputs where a single-line text field is more appropriate.
![](/Penny-documentation/components/text-area/text-area-image-2.png)

## Related components 