---
title: Tracker
description: The Tracker shows progress through a multi-step process.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/1121b7-tracker)
The Tracker shows progress through a multi-step process.


| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tracker-tracker--steps-atoms) |
| --- |

## Usage

* Use the Tracker to visualize progress through a linear process (e.g., onboarding, form completion, approval flows)
* Choose between **horizontal** and **vertical** layouts depending on the space and context
* Each step is represented by the `Tracker.Step` subcomponent
* Status colors communicate the nature of the process or its current state (e.g., success, warning)

>🤓 **Tip**: Pair the Tracker with **clear** **and concise** **copy** for extra clarity.

## Variants

### Layout

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tracker-tracker--variants) |
| --- |

### Statuses

Combine statuses logically to provide a clear, at-a-glance overview:

1. **Clarity first:** Ensure users instantly understand their current position, past progress, and any required actions.
2. **Mark completed steps:** Use 'Success' for all successfully finished steps.
3. **Signal future issues:** Use 'Warning' or 'Critical' for upcoming steps if known issues exist. 
4. **Keep it simple:** Avoid using too many different statuses in a single tracker; prioritize essential information and prevent visual clutter.

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tracker-tracker--statuses) |
| --- |

### Critical status

Indicate a failed/erroneous state using the `critical` fill color and the `error` icon:

![Tracker - Critical status](/Penny-documentation/components/tracker/tracker-image-5.png)

**Tracker - Critical status**

---

### Width

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tracker-tracker--width) |
| --- |

### Custom indicator

Use for unique or branded step indicators when custom visuals are needed.

| [Storybook](https://penny.melio.com/?path=/story/data-display-components-tracker-tracker--custom-indicator) |
| --- |

## Do's and don'ts

### ✅ Do
**Use clear, concise labels for each step**
Use clear, concise labels for each step.
![](/Penny-documentation/components/tracker/tracker-image-1.png)

### ❌ Don't
**Don't overload steps with too much text**
Overload steps with too much text—use supporting descriptions sparingly.
![](/Penny-documentation/components/tracker/tracker-image-2.png)

---

### ✅ Do
**Align the step order logically and sequentially**
Align the step order logically and sequentially.
![](/Penny-documentation/components/tracker/tracker-image-3.png)

### ❌ Don't
**Don't use critical statuses without user guidance**
Use critical or warning statuses without clear user guidance or resolution.
![](/Penny-documentation/components/tracker/tracker-image-4.png)

## Mobile use

Consider stacking the Tracker vertically on smaller screens for better readability

![Tracker](/Penny-documentation/components/tracker/tracker-image-6.png)

**Tracker**

---

## Use cases

* **Vendor onboarding:** Display steps like "Add Company Info", "Verify Bank Account", "Set Payment Preferences"
* **Bill approval flow:** Show where a bill is in the review, approval, and payment stages
* **User signup journey:** Visualize profile completion steps, such as "Create Account", "Verify Email", "Add Details"
* **Payout process:** Guide users through stages like "Request Sent", "Processing", "Payout Completed"

## Accessibility

* Use status colors with accompanying icons or text to ensure colorblind users can understand progress
* Use ARIA attributes like `aria-current` to indicate step status for screen readers

## Related components