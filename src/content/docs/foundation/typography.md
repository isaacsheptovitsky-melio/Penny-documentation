---
title: Typography
description: Typography defines the visual appearance of text elements across our product.
---

# Typography

Typography defines the visual appearance of text elements across our product.

## Font Family 

We use **Poppins** in two weights:

* **Regular** – weight 400
* **SemiBold** – weight 600

>ℹ️ Currently, we only have tokens for the Font family 

# Accessibility & DOM Structure

Visual hierarchy is not the same as document structure.

Even if a font size or style looks like a headline (e.g., Display 1), it doesn't necessarily mean it should be wrapped in an `<h1>` tag in code. The **semantic structure** of the page should follow content order, not just appearance.

## Best Practices

* Each page should have **only one** **`<h1>`**, which represents the main topic or title of the page.
* Subsequent headings should follow the logical structure: `<h2>`, `<h3>`, etc.
* If a Display 1 style is visually used for a section title but it's the second main section on the page, it should be an `<h2>` in the DOM — **not** an `<h1>`.
* Think of typography as a **visual layer**, and semantic HTML tags as the **structural layer**.

This separation ensures:

* Screen readers can correctly navigate the content
* Users relying on assistive tech aren't confused by out-of-order heading levels

## Display & Headings

| ![Typography headings example](/foundation/typography-assets/typography-image-1.png)  |
| --- |

| Style | Weight | Desktop Size | Mobile Size |
| --- | --- | --- | --- |
| **Display 1 Semi** | SemiBold | 48px / 60px | 40px / 48px |
| **Display 2 Semi** | SemiBold | 40px / 48px | 32px / 40px |
| **Display 2** | Regular | 40px / 48px | 32px / 40px |
| **Heading 1 Semi** | SemiBold | 32px / 40px | 28px / 36px |
| **Heading 2 Semi** | SemiBold | 24px / 32px | 24px / 32px |
| **Heading 2** | Regular | 24px / 32px | 24px / 32px |
| **Heading 3 Semi** | SemiBold | 20px / 28px | 20px / 28px |

---

## Body Text

| ![Typography body text example](/foundation/typography-assets/typography-image-2.png)  |
| --- |

| Style | Weight | Desktop Size | Mobile Size |
| --- | --- | --- | --- |
| **Body 1 Semi** | SemiBold | 20px / 28px | 20px / 28px |
| **Body 1** | Regular | 20px / 28px | 20px / 28px |
| **Body 2 Semi** | SemiBold | 16px / 24px | 16px / 24px |
| **Body 2** | Regular | 16px / 24px | 16px / 24px |
| **Body 3 Semi** | SemiBold | 14px / 20px | 14px / 20px |
| **Body 3** | Regular | 14px / 20px | 14px / 20px |
| **Body 4 Semi** | SemiBold | 12px / 16px | 12px / 16px |
| **Body 4** | Regular | 12px / 16px | 12px / 16px |
| **Body 5 Semi** | SemiBold | 10px / 16px | 10px / 16px |

---

## Captions

| ![Typography captions example](/foundation/typography-assets/typography-image-3.png)  |
| :--- |

| Style | Weight | Desktop Size | Mobile Size |
| --- | --- | --- | --- |
| **Caption 1 Semi** | SemiBold | 10px / 14px | 10px / 14px |
| **Caption 1** | Regular | 10px / 14px | 10px / 14px |
| **Caption 2 Semi** | SemiBold | 8px / 12px | 8px / 12px |

---

## Links

| Style | Weight | Desktop Size | Mobile Size |
| --- | --- | --- | --- |
| **Link 1 Semi** | SemiBold | 16px / 24px | 16px / 24px |
| **Link 1** | Regular | 16px / 24px | 16px / 24px |
| **Link 1 Hover** | Regular | 16px / 24px | 16px / 24px |
| **Link 2 Semi** | SemiBold | 14px / 20px | 14px / 20px |
| **Link 2** | Regular | 14px / 20px | 14px / 20px |
| **Link 2 Hover** | Regular | 14px / 20px | 14px / 20px |

---

## Naked Buttons

| Style | Weight | Desktop Size | Mobile Size |
| --- | --- | --- | --- |
| **Naked Button L** | SemiBold | 16px / 24px | 16px / 24px |
| **Naked Button L Hover** | SemiBold | 16px / 24px | 16px / 24px |
| **Naked Button M** | SemiBold | 14px / 20px | 14px / 20px |
| **Naked Button M Hover** | SemiBold | 14px / 20px | 14px / 20px |