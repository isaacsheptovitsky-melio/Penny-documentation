---
title: Accessibility
description: Accessibility in our Design system ensures that our product is usable by everyone, including people with disabilities.
---

# Accessibility

Accessibility in our Design system ensures that our product is usable by everyone, including people with disabilities.

# Why accessibility matters

**Ethical**: Designing for accessibility means respecting the full spectrum of human diversity.

**Legal**: Laws like the **ADA (Americans with Disabilities Act)** and **Section 508** in the U.S., and equivalents worldwide, mandate accessible digital experiences. Violations can lead to lawsuits.

**Business**: Inclusive design increases market reach, enhances brand reputation, and improves usability for everyone (not just people with disabilities).

>✅ We've got you covered with a [Design system accessibility checklist!](https://drive.google.com/file/d/1JX0UIcpHpXNbXescO8OjA_Sta7ADAOuD/view?usp=sharing)

# 📚Terms

**WCAG (Web Content Accessibility Guidelines)** is a technical standard created by the W3C to guide web accessibility. It outlines how to make digital experiences perceivable, operable, understandable, and robust (the four POUR principles). WCAG has three levels of compliance:

**A** – Basic accessibility

**AA** – Recommended for most products (and usually the legal standard)

**AAA** – Enhanced accessibility, often used by government or highly inclusive platforms

 **ADA (Americans with Disabilities Act)** is a U.S. civil rights law, not a technical standard. It mandates equal access to goods, services, and communication — including digital content. While the ADA doesn't directly reference WCAG, courts and organizations commonly use **WCAG 2.1 AA** as the benchmark for ADA compliance.

| Level | Coverage | Realistic Goal | Helps with... |
| --- | --- | :--- | --- |
| A | Minimum | Required | Some disabilities |
| AA | Standard | Recommended (✅ Melio is here) | Most disabilities |
| AAA | Optimal | Ambitious  | All/complex disabilities |

>✅ **Melio is ADA-compliant**, meaning our digital experience meets accessibility requirements under U.S. law and follows **[WCAG 2.1 AA standards](https://www.w3.org/WAI/WCAG2AA-Conformance)**[ ](https://www.w3.org/WAI/WCAG2AA-Conformance)to ensure usability for all, including people with disabilities.

# 📃The DOM structure 

**DOM** stands for **"Document Object Model,"** and it represents the structure of a web document in a tree-like format. For webpages, the DOM is built from the HTML and starts with the `<html>` tag, followed by `<head>` and `<body>`, and then continues as a nested hierarchy of elements — such as headings, buttons, links, and forms.

Every element becomes a node in this tree. Web browsers use the DOM to render the page visually, while assistive technologies like screen readers rely on it to interpret and navigate the page's content.

✅ Use only one `<h1>` per page — it represents the main page title.

✅ Nest headings in logical, hierarchical order: `h2` under `h1`, `h3` under `h2`, etc.

❌ Avoid skipping heading levels (e.g., don't go from `h1` to `h4`).

❌ Do not duplicate headings unless their context is clearly different (add adjacent text if needed).

You can read more about HTML tags [here.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

# 🎯 Focus Order

Focus order is the sequence in which interactive elements (like links, buttons, and form fields) are accessed when navigating with a keyboard (usually by pressing `Tab`).

* It must follow a **logical, intuitive flow**—typically left to right, top to bottom, or according to reading order.
* Non-interactive elements should **not** be focusable.
* Avoid skipping elements or placing focus on hidden items.
* When using custom components, ensure that focus is **manually managed** so users don't get lost in the interface.
* When a component appears or disappears, focus moves appropriately, for example:
    * When a dialog opens, focus should go to the first interactive element.
    * When a dialog closes, focus should go back to where it was before.
    * When a new input is added, focus goes to it.
    * When a line is removed, focus goes to an appropriate place.

>💡**Tip**: Try navigating your design with just the Tab key. If something feels off, it probably is.

![Focus order navigation example](/foundation/accessibility-assets/focus-order-navigation.gif)
*While switching focus using the Tab key, the focus ring indicates where the focus is right now.*

# 🎨 Color & Contrast

To ensure content is readable for everyone — including users with visual impairments or color blindness — you must meet **minimum contrast ratios**:

contrast ratio is a number that shows how different two colors are from each other. It goes from 1:1 (colors are basically the same) to 21:1 (totally opposite, like black on white).

* **4.5:1** for normal text (under 18px or 14px bold)
* **3:1** for large text
* **3:1** for non-text elements like icons or borders that convey meaning

Exception: Disabled elements do not need to meet minimum contrast. 

>⚠️ Avoid using color **as the only indicator** for things like errors or status (e.g., red border only). Combine color with icons, labels, or underline styles.

![Color contrast example](/foundation/accessibility-assets/color-contrast-example.png)

# 🖼️ Images & Alt Text

Images must have **descriptive alternative text** (alt text) so that screen reader users can understand their purpose.

* **Informative images** (icons, photos, illustrations): Use meaningful alt text.
    * Example: `alt="Delivery truck icon indicating free shipping"`
* **Decorative images** (visual-only): Use an empty alt attribute (`alt=""`) so screen readers skip them.

>💡 The same image can be meaningful or decorative in different contexts.

| **Image Type** | **What to Do** | ✅ **Example** | ❌ **Don't Do This** |
| --- | --- | --- | --- |
| Informative Images | Use alt text that describes the purpose of the image. | `"Upload icon"` | `"A picture of an upload icon"` |
| Functional Images | For clickable images (e.g., buttons or links), describe the action. | `"Download PDF"` | `"PDF icon"` |
| Decorative Images | Use `alt=""` or mark as decorative. Indicate this in design handoff notes. | — | Adding unnecessary alt text |
| Complex Images | Provide a short description on the page and link to a full explanation if needed. | "Chart showing sales trend" with link to full data | Relying on alt text alone |
| Images of Text | Avoid. If used, ensure all content is also available as real text. | Real text placed below the image | Only text inside the image |

# 🧠 Alt Text vs. ARIA: What's the Difference?

* **Alt text** is used on `<img>` elements to describe what the image conveys.
* **ARIA** (Accessible Rich Internet Applications) is a broader set of attributes that enhance accessibility across all types of HTML elements, especially **non-semantic** or **custom UI components** (e.g., modals, tabs, dropdowns).

**Examples of Common ARIA Labels:**

`aria-label`: Gives an element a label when no visible text exists.Example: A button with just an icon → `aria-label="Close"`

`aria-labelledby`: Associates the element with an existing visible label (by `id`).

`aria-describedby`: Adds extra descriptive text for screen readers (help text, instructions).

`aria-live`: Used to notify screen readers of **dynamic content changes** (like form errors or toast notifications).

# 🧩 Interactive Elements:

Interactive elements — like buttons, links, inputs, and select — are core to user interaction. To ensure they are usable by **everyone**, including people using screen readers, keyboard navigation, or touch devices, follow these key accessibility guidelines:

## 1.  Keyboard Navigation

* All interactive elements must be accessible via the keyboard alone (usually via the `Tab`, `Enter`, `Space`, and `Arrow` keys).
* Follow a logical tab order that mirrors the visual layout and content hierarchy.
* Never remove focusable elements from the tab order (e.g., using `tabindex="-1"`) unless it's intentional and alternatives are provided.

>💡**Tip**: Try using your flow **without a mouse** to test keyboard accessibility.

## 2.  Screen Readers

* Use **semantic HTML** elements like `<button>`, `<a>`, `<input>` — they're automatically understood by screen readers.
* Add **ARIA labels** only when necessary (e.g., when a button has only an icon and no visible text).
* Provide clear, descriptive labels for all interactive elements so screen readers can announce their purpose and state.

## 3.  Target size areas

* Ensure all tappable elements have a **minimum target size of 24x24px** ([WCAG recommendation](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)).
* Avoid small icons or text links that are hard to tap, especially on mobile.
* Add adequate spacing around actions to prevent accidental taps.

![Target size example - Calendar component](/foundation/accessibility-assets/target-size-calendar.png)
*The Calendar component has several interactive elements, all adhere to the 24*24px rule.*

## 4. Focus States

* Always show a visible focus indicator when an element receives keyboard focus (outline, shadow, or border).
* Make sure focus is not hidden due to custom styling.
* For components like modals or menus, trap focus inside and return it to the previous element when closed.


## 5.  Font Size: Minimums

* Technically, WCAG does not set a fixed minimum font size. So the focus is on scalability and legibility, not a specific pixel size. Instead, it requires:

> **Text must be resizable up to 200% without loss of content or functionality.**(WCAG 2.1 Success Criterion 1.4.4 – [Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html))

* Avoid text in images whenever possible — it cannot be resized, read by screen readers, or translated.

Recommendations: 
* Minimum of 16px for body text (paragraphs, long-form content)
* 14px minimum for labels, buttons, form hints, and other short UI strings


## 6.  Borders and hover

Borders are often overlooked in contrast checks - especially in input fields, cards, and containers.

* Minimum contrast ratio for visible borders: **3:1 against the background.**
* For focus outlines, WCAG requires a visible indicator - often a 1.5px solid border or box-shadow that meets at least 3:1 contrast. 

All interactive elements should include **non-color** and **color-based feedback** for hover and focus. This ensures users can understand the state change even if they can't perceive color differences.

### Examples

* **Buttons/Links:**
    * Change background or border color on hover.
    * Add underline or bold on hover for links.
* **Focus State:**
    * Use a clearly visible outline or glow (`outline`, `box-shadow`, or border).
    * Should not rely on color alone — ensure there's a shape or contrast change too.
* **Active State:**
    * Optional but helpful for giving feedback, especially on mobile.


| **Element** | **What to Check** | **Minimum Contrast** |
| --- | --- | --- |
| Text on background | High enough contrast | 4.5:1 (normal), 3:1 (large) |
| Borders | Especially for form elements | 3:1 |
| Hover/Focus | Visible and non-color based cue | 3:1 for outlines |
| Disabled states | Legible but visually distinct | Should not be pure gray on white |

# 🌳 Nested Interactive Elements

Avoid placing interactive elements inside other interactive elements. This is a common accessibility and usability mistake that leads to conflicts in behavior and confusion for screen readers, keyboard users, and browsers.

## ❌ Why it's a problem

* HTML does not support nesting clickable elements (e.g., a `<button>` inside an `<a>` or another `<button>`).
* Only one element can be "clickable" — browsers will either ignore the inner element or behave unpredictably.
* Screen readers may not announce the correct role or label.
* Keyboard navigation might skip or duplicate interactions.

## ✅ Instead

Design and code components so that **only one interactive element wraps the interaction**. If both elements need to be clickable, restructure your layout.

![Nested interactive elements example](/foundation/accessibility-assets/nested-interactive-elements.png)
*On the left, an icon button within a selectable card; On the right, the selectable card is the only interactive element.*

# 📋 Forms & Inputs

Forms are one of the most critical parts of a product — and often the most prone to accessibility issues. A well-designed, accessible form ensures **all users** can understand what's being asked, fill it out confidently, and correct mistakes when needed.

* Always use visible labels for form inputs. Placeholders are not substitutes — they disappear on typing and can't be relied on for screen readers.
* Use placeholders for examples or hints, not required information.


| **Label** Form fields should always have a label. In rare cases where context is sufficient, text fields can appear without a visible label. It should still include an aria-label in HTML  | [Storybook](https://61716025a5ae25003ac448af-lgpuioqoxk.chromatic.com/?path=/story/selection-inputs-components-text-field--with-form-field)  |
| --- | --- |
|  **Required vs optional** Always mark required fields with an **asterisk (*)** for clarity. If a field is **optional**, remove the asterisk.  | [Storybook](https://61716025a5ae25003ac448af-zrnwqyeniu.chromatic.com/?path=/story/form-form-field--required)  |
|  **Helper text and placeholder** Avoid using placeholder text whenever possible. Make sure any critical information is communicated either in the field label or using helper text below the field.Don't show placeholder and help at the same time, unless when hinting the right format is needed.  **Avoid placeholders** for essential information because they disappear when typing, making it hard to reference. Also, screen readers may not always announce them properly.  **Help text overflow** When the help text is too long for the available horizontal space, it wraps to form another line.  | ![Helper text example](/foundation/accessibility-assets/helper-text-example.png) **Helper text example**  |
| ****Disabled vs read-only** **   **Disabled:** The control is inoperable. It is removed from tab order and skipped by keyboard navigation and form interactions. Its value is not submitted. **Use disabled** when the control is irrelevant or gated and should be skipped entirely until it becomes relevant.  **Read-only:** The control remains operable for navigation but not editing. It stays in tab order, can receive focus, be announced by screen readers. **Use read-only** when the value is relevant, must be perceivable/copyable, and may need to be included in submission but should not be edited.  | ![Disabled state example](/foundation/accessibility-assets/disabled-state.png) **Disabled** ![Read-only state example](/foundation/accessibility-assets/read-only-state.png) **Read only** |

# 📚 Lists

Screen readers interpret lists as groups of items, so using proper HTML list structure helps users understand how many items are in a list, and whether the order matters.

**When to Use Lists:**

| **List Type** | **Use When...** |
| --- | --- |
| Unordered List (`<ul>`) | Items have no particular order (e.g., tags, filter chips, navigation). |
| Ordered List (`<ol>`) | Sequence matters (e.g., steps in a process, rankings, instructions). |

# 🔍 Zoom and viewport support

Supporting zoom is a core requirement in [WCAG 2.2.](https://www.w3.org/TR/WCAG22/?utm_source=chatgpt.com#reflow) It ensures that users with low vision or visual impairments can scale content without losing access to information or functionality.

 **Why It Matters?**

Some users don't use screen readers — they zoom instead. Zooming is common for people with low vision who rely on magnifiers, browser zoom, or larger text settings.

## **What we support**

* **400% desktop zoom (reflow):** At 400% zoom on a 1280px-wide screen, the layout must reflow to a single column at **320 CSS px**. There should be no horizontal scrolling **except where unavoidable (e.g., data tables).**
* **Mobile page zoom:** Browsers like Safari and Chrome on mobile allow page zoom (e.g., 150%, 200%). This behaves like desktop zoom and is covered by the same **320 px minimum layout** requirement.
* **Pinch-zoom:** Gesture zoom on mobile magnifies the entire viewport with two-axis scrolling. Reflow isn't required here, but we must not block it (avoid user-scalable=no).
* **OS text size settings:** Both iOS and Android let users increase text size and display scale. Our components must remain usable under these settings, independently of page zoom.

## **Design guardrails**

* Always design for **320 px minimum viewport** — this satisfies WCAG and covers the smallest modern devices.
* Ensure all controls remain visible, operable, and keyboard/focus accessible at 320 px.

## **🛠 How to Design for It**

| **Tip** | **What to Do** |
| --- | --- |
| Use responsive layouts | Design with flexible containers, not fixed widths. |
| Avoid absolute sizing | Use relative units like `em`, `rem`, `%` instead of `px`. |
| Test at 400% | Use browser zoom (not just Figma scaling) to test a 1280px viewport at 400%. |
| Support vertical scrolling | Vertical scroll is fine — horizontal scroll is not for most text blocks. |
| Reflow instead of scale | Let content stack and reflow rather than shrinking or overflowing. |

>![Modal zooming to 400% example](/foundation/accessibility-assets/zoom-modal-400percent.gif)
>*Example of a modal zooming in to 400%*
>
>