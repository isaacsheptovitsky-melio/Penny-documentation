---
title: Amount input
description: The Amount Input component allows users to enter or edit the amount to be paid. It supports different currencies, and enforces a limit to prevent users from entering an amount exceeding the bill's total
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/8944b3-amount-input)
The Amount Input component allows users to enter or edit the amount to be paid. It supports different currencies, and enforces a limit to prevent users from entering an amount exceeding the bill's total


| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-amount-input--main) |
| --- |

## Usage

* Used for entering or editing a payment amount
* Enforces an amount limit, preventing overpayment
* Supports error states with validation messaging
* Allows helper text to provide context (e.g., remaining balance)
* Can include an edit button tooltip for additional guidance
* Offers alignment options for description placement

## States

### Default state

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-amount-input--main) |
| --- |

### Edit mode

While editing the amount, the Pay CTA is temporarily disabled.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-amount-input--disabled-cta-while-editing) |
| --- |

### Error state

The error state is triggered when:

* The entered amount exceeds the bill total
* The entered amount is 0

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-amount-input--invalid) |
| --- |

## Use cases

The Amount input appears when making a bill payment.

>![](/Penny-documentation/components/amount-input/amount-input-image-1.png)

## Related components