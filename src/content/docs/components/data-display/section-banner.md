---
title: Section Banner
description: The Section Banner surfaces key information and status changes within a page section.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/46d766-section-banner)
The Section Banner surfaces key information and status changes within a page section.


| [Storybook](https://penny.melio.com/?path=/story/data-display-components-section-banner--main) |
| --- |

## Usage

Section banners provide key information or alerts within a specific part of a page. They are used to call attention to:

* Additional information
* Critical messages 
* Actions relevant to the current context

>🤓 **Tip**: Replace toasts with section banners for short, dismissible system notifications, [read more here](https://zeroheight.com/98bb1df01/p/46d766-section-banner/t/499378e798).

## Variants

### Types

![Outline](/Penny-documentation/components/section-banner/section-banner-image-5.png)

**Outline**

---

![Neutral](/Penny-documentation/components/section-banner/section-banner-image-6.png)

**Neutral**

---

![Informative](/Penny-documentation/components/section-banner/section-banner-image-7.png)

**Informative**

---

![Warning](/Penny-documentation/components/section-banner/section-banner-image-8.png)

**Warning**

---

![Critical](/Penny-documentation/components/section-banner/section-banner-image-9.png)

**Critical**

---

![Success](/Penny-documentation/components/section-banner/section-banner-image-10.png)

**Success**

---

![Brand](/Penny-documentation/components/section-banner/section-banner-image-11.png)

**Brand**

---

### Sizes

Section banners come in 2 sizes: Large and Compact.

#### Large

Large (default) size is used for:

* Critical information requiring immediate attention
* Detailed instructions
* Warnings
* Urgent updates

![Large](/Penny-documentation/components/section-banner/section-banner-image-12.png)

**Large**

---

>🚨 Use the Large variant for mobile, as the action button is positioned at the bottom of the banner rather than on the right, providing more horizontal space.

#### Compact

Compact size is used for:

* Brief feedback or minor updates
* Non-intrusive notifications
* Confirmations or simple acknowledgments

![Compact](/Penny-documentation/components/section-banner/section-banner-image-13.png)

**Compact**

---

### Width

Section banners are typically displayed in a fill-container layout.

* Default width: 476px
* Max content width: 920px

### Banner asset

The banner asset can be any of the following assets:

![Icon asset](/Penny-documentation/components/section-banner/section-banner-image-14.png)

**Icon asset**

---

![Brand symbol asset](/Penny-documentation/components/section-banner/section-banner-image-15.png)

**Brand symbol asset**

---

![Flag icon asset](/Penny-documentation/components/section-banner/section-banner-image-16.png)

**Flag icon asset**

---

#### Illustration asset

### ✅ Do
**Use the illustration only in the outline variant**
Use the illustration only in the outline variant, letting its colors stand out.
![](/Penny-documentation/components/section-banner/section-banner-image-17.png)

### ❌ Don't
**Don't place illustration on colored backgrounds**
Place the illustration on colored backgrounds to avoid clashing colors.
![](/Penny-documentation/components/section-banner/section-banner-image-18.png)

#### When to use an icon

Use an icon when it adds clarity to the message (e.g., status or attention). Avoid icons when the message is already clear and additional visual cues would be redundant.

### ✅ Do
**Use icon when not tied to primary context**
Use an icon when the section banner icon is not directly tied to the primary purpose of the context.
![The switch plan modal is a feature, while the section banner shows a system failure message.](/Penny-documentation/components/section-banner/section-banner-image-19.png)

### ❌ Don't
**Don't use redundant icons**
Use if the message is already very clear and easy to understand without the need for additional visual cues, an icon might be redundant.
![Don't use an icon when it might be redundant](/Penny-documentation/components/section-banner/section-banner-image-20.png)

>**📌 Important**: Use only icons provided by Penny.

### Action

Include an action when the user must resolve an issue or improve system performance. Other valid actions include contextual shortcuts relevant to the banner's message.

![Link (default)](/Penny-documentation/components/section-banner/section-banner-image-21.png)

**Link (default)**

---

![Naked button](/Penny-documentation/components/section-banner/section-banner-image-22.png)

**Naked button**

---

![Tertiary button](/Penny-documentation/components/section-banner/section-banner-image-23.png)

**Tertiary button**

---

### Dismiss

Allow dismissing of the banner when:

* The message is not critical
* The user isn't required to perform an action

![Dismiss](/Penny-documentation/components/section-banner/section-banner-image-24.png)

**Dismiss**

---

## Layout

Placement of the section banner is dependent on the context of the message it conveys. There are 2 types of placements for the section banner:

* Global placement
* Local placement

### Global placement

For important issues that impact the entire screen or process, position the message at the top of the screen, blocking the user's flow and demanding immediate attention.

>
>
>![Global placement in the Pay flow](/Penny-documentation/components/section-banner/section-banner-image-25.png)
>
>**Global placement in the Pay flow**
>
>---

>**🤓 Tip**: If you want to display Account or Organization level messages, use the Panel component.

### Local placement

Positioned directly above the section or element where the issue occurs, in order to highlight a localized issue within a specific section, field, or action on the page.

>![Local placement in a modal](/Penny-documentation/components/section-banner/section-banner-image-26.png)
>
>**Local placement in a modal**
>
>---

### Stacking

When placing section banners on top of each other, maintain a 12px gap between them.

>![Stacked section banners of different types](/Penny-documentation/components/section-banner/section-banner-image-27.png)
>
>**Stacked section banners of different types**
>
>---

## Use cases

### Substituting Toasts

Because toasts rely on transient, ephemeral messages that are often missed and can be inaccessible to assistive technologies, Penny replaces them with Section Banners.

Here are the guidelines for using the Section Banner as a substitute for a traditional toast:

* **Use the** **`compact`** **variant** of the Section Banner to better mimic the size of a toast.
* **Placement is critical:** Always position the Section Banner at the **very top of the page** content to ensure it's noticed immediately.
* **Stacking (if necessary):** If multiple notifications are required, stack the Section Banners. The **newest alert** (the latest change to the UI) must be placed on **top** to alert the user first.

>![](/Penny-documentation/components/section-banner/section-banner-image-1.png)
>*The success section banner indicates that the new vendor was added successfully.*

### Validating forms

Place a Section Banner above the form heading to summarize validation errors. Use a single banner to list multiple issues. Avoid showing more than one banner per section—especially of the same type (e.g., multiple critical banners). 

In the example below, the warning section banner notifies the user that additional details are needed. After submission, a critical banner appears, indicating that both vendor details and the payment amount are missing.

>![](/Penny-documentation/components/section-banner/section-banner-image-2.gif)
>*The warning section banner notifies the user that additional details are needed. After submission, a critical banner appears, indicating that both vendor details and the payment amount are missing.*

### Widget

When using section banners within a widget, it is alright to display them locally under the section's heading, since they inform about the action that happens in that widget.

>![](/Penny-documentation/components/section-banner/section-banner-image-3.gif)
>*The section banner appears under the Taxpayer info heading, informing the user the file upload was successful.*
>
>

### Destructive pattern

When an item is deleted, show the section banner in its success variant. While the action is destructive, it was completed successfully and aligned with the user's intent.

>![](/Penny-documentation/components/section-banner/section-banner-image-4.gif)
>
>

## Mobile

On mobile, use the Large variant. Actions appear at the bottom to preserve horizontal space.

![The Large variant is used in mobile](/Penny-documentation/components/section-banner/section-banner-image-28.png)

**The Large variant is used in mobile**

---

## Related components