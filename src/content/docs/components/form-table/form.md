---
title: Form
description: A form is a container that groups related input fields, guiding users to submit information efficiently and accurately.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/339d31-form)
A form is a container that groups related input fields, guiding users to submit information efficiently and accurately.


>Check out the [Feedback](https://zeroheight.com/98bb1df01/p/2752a5) UX pattern for Form validation

![Form in the Pay flow](/Penny-documentation/components/form/form-image-1.png)

**Form in the Pay flow**

---

## Usage

* **Group related information:** Use a form to collect a set of related data from a user, such as adding a new vendor's contact and payment details.
* **Structure complex tasks:** Break down complex processes like scheduling a payment into logical steps contained within a form.

## Variants

### Global states

The Form propagates these states to all nested form fields:

* **Default:** Standard interactive state for data entry.
* **Disabled (****`isDisabled`****):** Greys out all fields and prevents interaction. Use this when a user does not have permission to edit payment settings.
* **Read-Only (****`isReadOnly`****):** Allows users to select and copy text but prevents editing. Useful for reviewing past transactions.
* **View Mode (****`isViewMode`****):** Renders the values as plain text rather than input boxes, ideal for summary screens.
* **Loading (****`isLoading`****):** Indicates that form data is being refreshed or fetched.
* **Error State (****`errorState`****):** Forces an error state on all fields, typically used when a backend validation fails for the entire group.

## Layout

**Columns d**efine how child elements are arranged (e.g., 1 column for a simple stack, 2+ columns for wider screens).

| [Storybook](https://61716025a5ae25003ac448af-kxatgdwswo.chromatic.com/?path=/story/form-form--colspan) |
| --- |

## Related components