---
title: Shadows
description: Shadows help convey depth and hierarchy in the UI.
---

# Shadows

Shadows help convey depth and hierarchy in the UI.


## Usage

* In our system, shadows are used to indicate **elevation**, not just for visual decoration. 
* Use them meaningfully - when elements need to stand out due to interaction, layering, or context.
* Avoid using shadows solely for aesthetic reasons. They should help users understand interface structure and interactions.


## Shadow Tokens

|   | **Token** | **Value** |
| --- | --- | --- |
| ![](/foundation/assets/shadows-image-1.png)  | `shadow-0` | `none` |
| ![](/foundation/assets/shadows-image-2.png)  | `shadow-200` | `1px 0px 0px #D8D8D8` |
| ![](/foundation/assets/shadows-image-3.png)  | `shadow-300` | `0px -5px 15px rgba(33, 33, 36, 0.05)` |
| ![](/foundation/assets/shadows-image-4.png)  | `shadow-400` | `0px 5px 10px rgba(33, 33, 36, 0.1)` |
| ![](/foundation/assets/shadows-image-5.png)  | `shadow-500` | `0px 5px 15px rgba(33, 33, 36, 0.1)` |
| ![](/foundation/assets/shadows-image-6.png)  | `shadow-600` | `0px 5px 15px rgba(33, 33, 36, 0.2)` |

Each level offers increasing visual weight and should be used depending on how elevated an element needs to appear.

## Use cases 

### Menus / Floating

Menus that open over content should have clear elevation. Use `shadow-500` for a floating effect.

![Shadow example](/foundation/assets/shadows-example.jpg)