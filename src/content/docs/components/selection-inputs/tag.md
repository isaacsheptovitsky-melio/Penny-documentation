---
title: Tag
description: The **Tag** component is a compact, styled element used for displaying labels, categories, or metadata.The **Tag** is for static labels, while the **Interactive Tag** adds click and remove functionality.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/98c253-tag)
The **Tag** component is a compact, styled element used for displaying labels, categories, or metadata.The **Tag** is for static labels, while the **Interactive Tag** adds click and remove functionality.


## Tag
| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-tag-new--main) |
| --- |

## Usage

* Use tags to categorize or label content clearly
* Keep tag text short and concise
* Use the remove button only when the user needs to dismiss a tag dynamically

>🤓 **Tip**: For using the tag component as a **trigger** or an **entry point**, use the Interactive tag component.

## Anatomy

![](/Penny-documentation/components/tag/tag-image-1.png)

1. Tag body
2. Left element slot
3. Label, divided into **key** and **value**
4. Right element slot
5. Close button 

This anatomy allows overriding default settings, here are a few examples:

![Custom left element - Flag](/Penny-documentation/components/tag/tag-image-8.png)

**Custom left element - Flag**

---

![Custom left element - Avatar](/Penny-documentation/components/tag/tag-image-9.png)

**Custom left element - Avatar**

---

![Custom left element and content](/Penny-documentation/components/tag/tag-image-10.png)

**Custom left element and content**

---

![Custom right element - Link](/Penny-documentation/components/tag/tag-image-11.png)

**Custom right element - Link**

---

## Variants

### Removable tag

Includes a remove button

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-tag-new--removable) |
| --- |

### Grouped tags

Tag in a Group are spaced evenly and rearrange themselves upon removal of a tag.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-tag-new--group-of-tags) |
| --- |

## Use case

The Removable tag is mainly used for managing filters, showing the applied filters and enabling their removal.

>![](/Penny-documentation/components/tag/tag-image-2.png)
>*Filtering the Bills table by Due and Creation date*

### ✅ Do
**Keep Tag labels concise**
Keep Tag labels concise—ideally two words or fewer
![](/Penny-documentation/components/tag/tag-image-3.png)

### ❌ Don't
**Don't mix removable and non-removable Tags**
Mix removable and non-removable Tags in a group. Instead, separate them to maintain a clear pattern for users.
![](/Penny-documentation/components/tag/tag-image-4.png)

## Related components

* 
---

## Interactive tag
| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-tag-new--main) |
| --- |

## Usage

* Use when an interactive label or tag is needed
* Supports clickable interaction
* Allows users to remove the tag using a configurable remove button
* Automatically spaces multiple children elements
* Ensures accessibility by managing focus and preventing nested interactive elements

>🤓 **Tip**: The tag's content is a Slot component, allowing flexibility in replacing it with any element. However, keep in mind that this component is also designed for data display and has a fixed height of 24px.

## Anatomy

![](/Penny-documentation/components/tag/tag-image-5.png)

1. Tag body
2. Left element slot
3. Label, divided into **key** and **value**
4. Right element slot
5. Close button 

## Variants

### States

Since the component is interactive it has several state:

#### Default

A basic interactive tag that supports free content.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--main) |
| --- |

#### Clickable

Triggers an action when clicked.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--clickable) |
| --- |

#### Removable

Displays a remove button

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--removable) |
| --- |

**Clickable and Removable**

Supports both click and remove interactions

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--clickable-and-removable) |
| --- |

#### Disabled

Prevents user interaction.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--disabled) |
| --- |

### Grouped tags

Tag in a Group are spaced evenly and rearrange themselves upon removal of a tag.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-tags-interactive-tag-new--group-of-interactive-tags) |
| --- |

## Do's and Don'ts

### ✅ Do
**Keep Tag labels concise**
Keep Tag labels concise—ideally two words or fewer
![](/Penny-documentation/components/tag/tag-image-3.png)

### ❌ Don't
**Don't mix removable and non-removable Tags**
Mix removable and non-removable Tags in a group. Instead, separate them to maintain a clear pattern for users.
![](/Penny-documentation/components/tag/tag-image-4.png)

## Related components

* Badge
* Button
* Pill
---