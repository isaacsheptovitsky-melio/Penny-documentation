# Form field
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/6854b6-form-field)
The **FormField** component is a wrapper that ensures form fields (like **TextField**) are consistent in structure, validation, and state management. It helps simplify form interactions while maintaining alignment with the design system.


## Design guidelines
| [Storybook](https://penny.melio.com/?path=/story/form-form-field--main&args=helperText:) |
| --- |

## Usage

* Provides a standardized way to manage form field state and validation.
* Ensures UI consistency across different form components.
* Can be used beyond forms to manage UI alignment and interactions.Users can either choose a new value or clear the current selection.

## Anatomy

![Anatomy](./assets/form-field-image-3.png)

**Anatomy**

---

## Variants

### Sizes

Small- 40px height

Large- 48px height 

[Storybook](https://penny.melio.com/?path=/story/form-form-field--sizes)

### States

![Asset States](./assets/form-field-image-4.png)

**Asset States**

---

## Props

### shouldReserveSpaceForHelperText
Whether to reserve the space for the helper/error text so the UI won't jump when it appears/disappears.

**Type:** Boolean  
**Default:** false

This prop helps maintain layout stability by preserving space for helper text even when it's not visible, preventing content shifting when validation messages appear or disappear.

---

## Accessibility Guidelines  

| **Label** Form fields should always have a label. In rare cases where context is sufficient, text fields can appear without a visible label. It should still include an aria-label in HTML  | [Storybook](https://61716025a5ae25003ac448af-lgpuioqoxk.chromatic.com/?path=/story/selection-inputs-components-text-field--with-form-field)  |
| --- | --- |
|  **Required vs optional** Always mark required fields with an **asterisk (*)** for clarity. If a field is **optional**, remove the asterisk.  | [Storybook](https://61716025a5ae25003ac448af-zrnwqyeniu.chromatic.com/?path=/story/form-form-field--required)  |
|  **Helper text and placeholder** Avoid using placeholder text whenever possible. Make sure any critical information is communicated either in the field label or using helper text below the field.Don't show placeholder and help at the same time, unless when hinting the right format is needed.  **Avoid placeholders** for essential information because they disappear when typing, making it hard to reference. Also, screen readers may not always announce them properly.  **Help text overflow** When the help text is too long for the available horizontal space, it wraps to form another line.  |   |
| ****Disabled vs read-only** **   **Disabled:** The control is inoperable. It is removed from tab order and skipped by keyboard navigation and form interactions. Its value is not submitted. **Use disabled** when the control is irrelevant or gated and should be skipped entirely until it becomes relevant.  **Read-only:** The control remains operable for navigation but not editing. It stays in tab order, can receive focus, be announced by screen readers. **Use read-only** when the value is relevant, must be perceivable/copyable, and may need to be included in submission but should not be edited.  |   |

## Do's and don'ts

### ✅ Do
**Use helper text for formatting tips and context**
Use helper text for formatting tips, additional context, or clarifications.
![](./assets/form-field-image-1.png)

### ❌ Don't
**Avoid critical information in placeholders**
Avoid putting critical information in placeholders—they disappear when typing.
![](./assets/form-field-image-2.png)

## Form field types

Within the input, all of these can be form field type:

* [Amount field](https://zeroheight.com/98bb1df01/p/46dbaf)
* [Checkbox](https://zeroheight.com/98bb1df01/p/46dbaf)
* [Combobox](https://zeroheight.com/98bb1df01/p/063a89-combobox)
* [Date field](https://zeroheight.com/98bb1df01/p/731e70-date-field)
* [File upload](https://zeroheight.com/98bb1df01/p/51202c-file-upload)
* [Large file upload](https://zeroheight.com/98bb1df01/p/248e54-large-file-upload)
* Form line items
* [Phone field](https://zeroheight.com/98bb1df01/p/13fa62)
* [Radio group](https://zeroheight.com/98bb1df01/p/79a7b5-radio-group)
* [Secured field](https://zeroheight.com/98bb1df01/p/502a15)
* Select
* [Multi select](https://zeroheight.com/98bb1df01/p/451878-multi-select)
* [Switch](https://zeroheight.com/98bb1df01/p/78000a-switch)
* [Text area](https://zeroheight.com/98bb1df01/p/627fc8)
* [Text field ](https://zeroheight.com/98bb1df01/p/84d686-text-field)


## Related components 
---

## Content guidelines
Text 

| Rule | Image | Caption | Description |
| :--- | :--- | :--- | :--- |
| Do |   |   | Do |
| Don't |   |   | Don't |
| Do |   |   |   |
| Don't |   |   |   |
---