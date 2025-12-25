Border radius
Our design system applies a structured approach to border radius tokens to ensure consistency, scalability, and support for theming. The token system is organized into three levels: Global, Semantic, and Component.


# Global tokens
The following are the global border radius tokens applied across components for consistent border radius:

| Token | Value |
| --- | --- |
| `border-radius.none` | 0px |
| `border-radius.50` | 2px |
| `border-radius.100` | 4px |
| `border-radius.200` | 8px |
| `border-radius.300` | 12px |
| `border-radius.400` | 16px |
| `border-radius.600` | 24px |
---

# Semantic tokens
The following are semantic border radius tokens, used to define the default border radius of component categories:

| Token | Value | Use cases |
| --- | --- | --- |
| `border-radius.action.default` | `border-radius.200` | Most action components |
| `border-radius.input.default` | `border-radius.200` | Most inputs components |

# Action components

The following component use the `border-radius.action.default` token:

* [Button](https://zeroheight.com/98bb1df01/p/53251c)
* [Date picker](https://zeroheight.com/98bb1df01/p/901cd4)
* [Icon button ](https://zeroheight.com/98bb1df01/p/42635f)

# Selection & Inputs components

The following component use the `border-radius.input.default` token:

* [Amount field](https://zeroheight.com/98bb1df01/p/30ad65)
* [Combobox](https://zeroheight.com/98bb1df01/p/063a89)
* [Date field](https://zeroheight.com/98bb1df01/p/731e70)
* [File attachement](https://zeroheight.com/98bb1df01/p/855f03)
* [File upload](https://zeroheight.com/98bb1df01/p/51202c)
* [Large file upload](https://zeroheight.com/98bb1df01/p/248e54)
* [Multi select](https://zeroheight.com/98bb1df01/p/451878)
* [Phone field](https://zeroheight.com/98bb1df01/p/13fa62)
* [Search bar](https://zeroheight.com/98bb1df01/p/243ebd)
* [Secured text field](https://zeroheight.com/98bb1df01/p/502a15)
* [Segmented control](https://zeroheight.com/98bb1df01/p/3999b7)
* [Select](https://zeroheight.com/98bb1df01/p/97d613)
* [Text area](https://zeroheight.com/98bb1df01/p/627fc8)
* [Text field](https://zeroheight.com/98bb1df01/p/84d686)
* **[Verification code field](https://zeroheight.com/98bb1df01/p/31f1cb)**
---

# Component tokens
The following are component-specific border radius tokens:

| Token | Value | Component |
| --- | --- | --- |
| `border-radius.pill.default` | `border-radius.full (999px)` | [Pill](https://zeroheight.com/98bb1df01/p/68afcb) |
---