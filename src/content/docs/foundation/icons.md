---
title: Icons
description: Icons help communicate actions, statuses, and information at a glance.
---

# Icons

Icons help communicate actions, statuses, and information at a glance.


Melio has an icon bank with about 300 custom pixel-perfect icons

![](/foundation/icons-assets/icons-image-1.png)

# Grid & Sizes

Each icon has two versions–on a 16px and on a 24px grid

![](/foundation/icons-assets/icons-image-2.png)

## Large: 24px Grid

On the large 24px grid, the stroke width will be 2px with rounded ends, the round corners will usually be 2px (except in exceptional cases), with a 1px margin (frame).

![](/foundation/icons-assets/icons-image-3.png)

## Small: 16px Grid

On the small 16px grid, the stroke width will be 1.5px with rounded ends, the round corners will usually be 1.5px (except in exceptional cases), with a 1px margin (frame).

![](/foundation/icons-assets/icons-image-4.png)

![](/foundation/icons-assets/icons-image-5.png)

# Color

Icons are used exclusively in the following colors depending on the context of use.

We have color tokens family for icons

| Token | Value | Description |
| --- | --- | --- |
| Colors.Icon.brand | {Colors.brand.700} |   |
| Colors.Icon.critical | {Colors.critical.700} |   |
| Colors.Icon.disabled | {Colors.neutral.500} |   |
| Colors.Icon.info | {Colors.informative.700} |   |
| Colors.Icon.inverse | {Colors.neutral.100} |   |
| Colors.Icon.inverse-disabled | {Colors.neutral.A35} |   |
| Colors.Icon.primary | {Colors.neutral.1000} |   |
| Colors.Icon.read-only | {Colors.neutral.700} |   |
| Colors.Icon.success | {Colors.success.700} |   |
| Colors.Icon.warning | {Colors.warning.700} |   |

```json
{
  "Colors": {
    "Icon": {
      "brand": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "critical": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "info": {
        "$type": "color",
        "$value": "{Colors.informative.700}"
      },
      "inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "inverse-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.A35}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "read-only": {
        "$type": "color",
        "$value": "{Colors.neutral.700}"
      },
      "success": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      },
      "warning": {
        "$type": "color",
        "$value": "{Colors.warning.700}"
      }
    }
  }
}
```

![](/foundation/icons-assets/icons-image-6.png)

# Adding icons to Penny

[How to add a new icon to Penny](https://www.notion.so/meliopayments/How-to-add-a-new-icon-to-Penny-16c66d69640a807580e2d0eaaf0f6d33)

![](/foundation/icons-assets/icons-image-7.png)

![](/foundation/icons-assets/icons-image-8.png)

# Accessibility 

When choosing or naming an icon, focus on **what it does**, not just what it looks like.

| ❌ Don't Use | ✅ Use Instead |
| --- | --- |
| Trash | Delete |
| Pencil | Edit |
| Cross | Close |
| Tick | Check |
| Magnifier | Search |

>❗️Ask yourself: *If I couldn't see the icon, would the name still help me understand what it does?*