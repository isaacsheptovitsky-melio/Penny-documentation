---
title: Partnerships
description: Melio partners with other companies through full-screen and iframe integrations. We adapt to different partner needs, ensuring a seamless experience while driving business growth.
---

# Partnerships

Melio partners with other companies through **full-screen** and **iframe** integrations. We adapt to different partner needs, ensuring a seamless experience while driving business growth.


# Use cases

---

# Integrations
Melio integrates with partners via two methods: **full-screen** and **iframe**. These integrations allow the partner's users to access Melio's payment features.

>![](/foundation/assets/partnerships-image-1.png)
>*The two types of integration with partners: full-screen and iframe.*

# Full-screen integration

The full-screen experience is one where Melio owns the entire screen (both code and design). Users reach this experience via a **redirect**, meaning they click a button or link that either **changes the URL** or **opens a new tab**.

>![](/foundation/assets/partnerships-image-2.png)
>*Melio embedded in Capital One using the full-screen experience.*

## Entry points

The full-screen integration is typically accessed through a redirect, by clicking a menu item or a dedicated button:

>![](/foundation/assets/partnerships-image-3.png)
>*User reaches the melio environment through an entry point*

## Pros and cons

✅ **Pro**: Since Melio is fully in control of the UI, we aren't constrained by the partner's design system. This allows us to deliver a **better, more consistent UX**, while also reducing implementation costs.

❌ **Con**: Switching to a new URL creates a **context shift** for the user, as the experience is visually different from the partner's environment.

# iframe experience

Melio can also be embedded **within the partner's interface** using an **iframe**. There are two common layouts.

## Sandwiched iframe

The iframe is placed between the bank's header and footer.

>![](/foundation/assets/partnerships-image-4.png)
>*Melio embedded in US Bank using the Sandwiched iframe experience*

## Sticky shell

The iframe is wrapped by the partners UI as a **sticky shell**.

>![](/foundation/assets/partnerships-image-5.png)
>*Melio embedded in Clover using the Sticky shell iframe experience*

## Entry point

Users access the iframe experience by clicking a tab in the partner's menu.

>![](/foundation/assets/partnerships-image-6.png)

## Pros and cons

✅ **Pro:** The user remains in the partner's interface, creating a more **seamless experience** with less context switching.

❌ **Con:** Since the iframe is constrained within the partner's design, Melio must **adapt** to UI restrictions, which may limit flexibility.

# Exceptions to the rule

Some partners require unique integration methods tailored to their needs.

## Shopify

Uses the Sticky shell iframe method, however the UI follows **Shopify's design system (Polaris)** instead of Melio's. This ensures consistency within Shopify's ecosystem.

>![](/foundation/assets/partnerships-image-7.png)
>*Melio embedded in the Shopify admin, using the Sticky shell method*

## QuickBooks Desktop

A **custom solution** developed by Melio's engineers and designers. This integration does not follow standard iframe or full-screen methods.

>![](/foundation/assets/partnerships-image-8.png)
>*QuickBooks Desktop*

# Partners

All partners and their current implementation method ([view visual reference here](https://www.figma.com/design/NPZXYKU4SvuSubB8RVvHVh/Dashboard-mapping?node-id=1-4498&p=f&t=mEget5dkIqIKwssQ-11)):

| Partner | Method |
| --- | --- |
| Melio | Full-screen integration |
| Cap1 - SBC | Full-screen integration |
| Cap1 - SBB | Full-screen integration |
| WaFd (fiserv) | Full-screen integration |
| Clover | iframe experience |
| USB (fiserv) | iframe experience |
| Gusto | iframe experience |
| Paypal | iframe experience |
| Shopify | Custom implementation |
| QBDT | Custom implementation |
| ADP | iframe experience |
---

# Org structure
# Overview

Penny Design System serves three main audiences: **Melio, Financial Institutions, and Non-Financial Institutions**. Each has distinct needs and interacts with the design system in different ways.

![](/foundation/assets/partnerships-image-9.png)

# Melio

Penny supports multiple domains within Melio, ensuring a cohesive experience across different product areas:

![](/foundation/assets/partnerships-image-10.png)
*Melio's org structure*

**Cash flow central** – Helps businesses manage cash flow.

**Accounts Payable (AP)** – Enables businesses to pay vendors and bills.

**Accounts Receivable (AR)** – Supports invoicing and payment collection.

**Accountants** – Features tailored for accountants managing client finances.

**Growth & Activation** – Focuses on user onboarding and retention.

**Communication** – Handles transactional emails.

**Accounts** – Manages user profiles, billing, and account settings.

# Financial institutions

Financial Institutions are **regulated entities** that provide financial services such as banking, lending, and payment processing. Penny supports these institutions by ensuring their integration with Melio's payment infrastructure is seamless and ADA compliant.

![](/foundation/assets/partnerships-image-11.png)
*Current partnerships with financial institutions, April 2025*

# Non financial institutions

Non-Financial Institutions are **business platforms** that integrate financial services but do not primarily function as banks or lenders. They use Melio's financial infrastructure, while Penny ensures a smooth and branded experience for these platforms.

![](/foundation/assets/partnerships-image-12.png)
---