Color tokens
Our design system uses a structured approach to color tokens to support consistency, scalability, and white-label theming. Our token system is divided into three levels: **Global, Semantic, and Component-Based**. 


# Semantic tokens
Semantic tokens map global tokens to a functional meaning, defining usage intent rather than specific colors. These tokens help unify visual language across the system while allowing controlled customization.

| Token | Value | Description |
| --- | --- | --- |
| Colors.Action.critical-primary | {Colors.critical.700} |   |
| Colors.Action.critical-primary-disabled | {Colors.neutral.300} |   |
| Colors.Action.critical-primary-hover | {Colors.critical.800} |   |
| Colors.Action.critical-primary-pressed | {Colors.critical.900} |   |
| Colors.Action.critical-secondary | {Colors.neutral.A0} |   |
| Colors.Action.critical-secondary-disabled | {Colors.neutral.300} |   |
| Colors.Action.critical-secondary-hover | {Colors.critical.100} |   |
| Colors.Action.critical-secondary-pressed | {Colors.critical.200} |   |
| Colors.Action.inverse-primary | {Colors.neutral.100} |   |
| Colors.Action.inverse-primary-disabled | {Colors.neutral.300} |   |
| Colors.Action.inverse-primary-hover | {Colors.neutral.A80} |   |
| Colors.Action.inverse-primary-pressed | {Colors.neutral.A60} |   |
| Colors.Action.inverse-secondary | {Colors.neutral.A0} |   |
| Colors.Action.inverse-secondary-disabled | {Colors.neutral.300} |   |
| Colors.Action.inverse-secondary-hover | {Colors.neutral.A15} |   |
| Colors.Action.inverse-secondary-pressed | {Colors.neutral.A35} |   |
| Colors.Action.inverse-tertiary | {Colors.neutral.A0} |   |
| Colors.Action.inverse-tertiary-disabled | {Colors.neutral.300} |   |
| Colors.Action.inverse-tertiary-hover | {Colors.neutral.A15} |   |
| Colors.Action.inverse-tertiary-pressed | {Colors.neutral.A35} |   |
| Colors.Action.primary | {Colors.brand.700} |   |
| Colors.Action.primary-disabled | {Colors.neutral.300} |   |
| Colors.Action.primary-hover | {Colors.brand.800} |   |
| Colors.Action.primary-pressed | {Colors.brand.900} |   |
| Colors.Action.secondary | {Colors.neutral.A0} |   |
| Colors.Action.secondary-disabled | {Colors.neutral.300} |   |
| Colors.Action.secondary-hover | {Colors.brand.100} |   |
| Colors.Action.secondary-pressed | {Colors.brand.200} |   |
| Colors.Action.success | {Colors.success.700} |   |
| Colors.Action.success-disabled | {Colors.neutral.300} |   |
| Colors.Action.success-hover | {Colors.success.800} |   |
| Colors.Action.success-pressed | {Colors.success.900} |   |
| Colors.Action.tertiary | {Colors.neutral.A0} |   |
| Colors.Action.tertiary-disabled | {Colors.neutral.300} |   |
| Colors.Action.tertiary-hover | {Colors.neutral.300} |   |
| Colors.Action.tertiary-pressed | {Colors.neutral.400} |   |
| Colors.Background.background-brand-primary | {Colors.brand.700} |   |
| Colors.Background.background-brand-secondary | {Colors.brand.100} |   |
| Colors.Background.background-secondary | {Colors.neutral.200} |   |
| Colors.Background.primary | {Colors.neutral.100} |   |
| Colors.Border.Inverse | {Colors.neutral.100} |   |
| Colors.Border.brand | {Colors.brand.700} |   |
| Colors.Border.critical | {Colors.critical.700} |   |
| Colors.Border.info | {Colors.informative.700} |   |
| Colors.Border.interactive-disabled | {Colors.neutral.400} |   |
| Colors.Border.interactive-hover | {Colors.neutral.1000} |   |
| Colors.Border.interactive-rest | {Colors.neutral.600} |   |
| Colors.Border.interactive-selected | {Colors.brand.700} |   |
| Colors.Border.neutral | {Colors.neutral.1000} |   |
| Colors.Border.static | {Colors.neutral.400} |   |
| Colors.Border.success | {Colors.success.700} |   |
| Colors.Border.warning | {Colors.warning.700} |   |
| Colors.Fill.brand-primary | {Colors.brand.700} |   |
| Colors.Fill.brand-secondary | {Colors.brand.100} |   |
| Colors.Fill.critical-primary | {Colors.critical.700} |   |
| Colors.Fill.critical-secondary | {Colors.critical.100} |   |
| Colors.Fill.decorative-1 | {Colors.decorative.1} |   |
| Colors.Fill.decorative-2 | {Colors.decorative.2} |   |
| Colors.Fill.decorative-3 | {Colors.decorative.3} |   |
| Colors.Fill.decorative-4 | {Colors.decorative.4} |   |
| Colors.Fill.decorative-5 | {Colors.decorative.5} |   |
| Colors.Fill.disabled | {Colors.neutral.300} |   |
| Colors.Fill.info-primary | {Colors.informative.700} |   |
| Colors.Fill.info-secondary | {Colors.informative.100} |   |
| Colors.Fill.inverse | {Colors.neutral.1000} |   |
| Colors.Fill.primary | {Colors.neutral.100} |   |
| Colors.Fill.read-only | {Colors.neutral.700} |   |
| Colors.Fill.secondary | {Colors.neutral.300} |   |
| Colors.Fill.success-primary | {Colors.success.700} |   |
| Colors.Fill.success-secondary | {Colors.success.100} |   |
| Colors.Fill.tertiary | {Colors.neutral.400} |   |
| Colors.Fill.warning-primary | {Colors.warning.700} |   |
| Colors.Fill.warning-secondary | {Colors.warning.100} |   |
| Colors.Focus.inverse | {Colors.focus.Inverse} |   |
| Colors.Focus.primary | {Colors.focus.primary} |   |
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
| Colors.Illustration.background | {Colors.neutral.100} |   |
| Colors.Illustration.border | {Colors.neutral.1000} |   |
| Colors.Illustration.brand-primary | {Colors.brand.700} |   |
| Colors.Illustration.brand-secondary | {Colors.brand.100} |   |
| Colors.Illustration.critical | {Colors.critical.700} |   |
| Colors.Illustration.success | {Colors.success.700} |   |
| Colors.Link.inverse | {Colors.neutral.100} |   |
| Colors.Link.inverse-disabled | {Colors.neutral.A35} |   |
| Colors.Link.inverse-hover | {Colors.neutral.A80} |   |
| Colors.Link.inverse-pressed | {Colors.neutral.A60} |   |
| Colors.Link.primary | {Colors.neutral.1000} |   |
| Colors.Link.primary-disabled | {Colors.neutral.500} |   |
| Colors.Link.primary-hover | {Colors.neutral.1000} |   |
| Colors.Link.primary-pressed | {Colors.neutral.700} |   |
| Colors.Link.secondary | {Colors.brand.700} |   |
| Colors.Link.secondary-disabled | {Colors.neutral.500} |   |
| Colors.Link.secondary-hover | {Colors.brand.800} |   |
| Colors.Link.secondary-pressed | {Colors.brand.900} |   |
| Colors.Surface.inverse | {Colors.neutral.1000} |   |
| Colors.Surface.primary | {Colors.neutral.100} |   |
| Colors.Surface.primary-disabled | {Colors.neutral.300} |   |
| Colors.Surface.primary-hover | {Colors.neutral.300} |   |
| Colors.Surface.primary-pressed | {Colors.neutral.400} |   |
| Colors.Surface.primary-selected | {Colors.brand.100} |   |
| Colors.Surface.secondary | {Colors.neutral.200} |   |
| Colors.Surface.secondary-disabled | {Colors.neutral.300} |   |
| Colors.Surface.secondary-hover | {Colors.neutral.400} |   |
| Colors.Surface.secondary-pressed | {Colors.neutral.500} |   |
| Colors.Surface.secondary-selected | {Colors.brand.100} |   |
| Colors.Surface.tertiary | {Colors.neutral.400} |   |
| Colors.Surface.tertiary-disabled | {Colors.neutral.300} |   |
| Colors.Surface.tertiary-hover | {Colors.neutral.500} |   |
| Colors.Surface.tertiary-pressed | {Colors.neutral.600} |   |
| Colors.Surface.tertiary-selected | {Colors.neutral.100} |   |
| Colors.Text.brand | {Colors.brand.700} |   |
| Colors.Text.brand-hover | {Colors.brand.800} |   |
| Colors.Text.brand-on-color | {Colors.brand.900} |   |
| Colors.Text.brand-pressed | {Colors.brand.900} |   |
| Colors.Text.critical | {Colors.critical.700} |   |
| Colors.Text.critical-hover | {Colors.critical.800} |   |
| Colors.Text.critical-on-color | {Colors.critical.900} |   |
| Colors.Text.critical-pressed | {Colors.critical.900} |   |
| Colors.Text.disabled | {Colors.neutral.500} |   |
| Colors.Text.info | {Colors.informative.700} |   |
| Colors.Text.info-hover | {Colors.informative.800} |   |
| Colors.Text.info-on-color | {Colors.informative.900} |   |
| Colors.Text.info-pressed | {Colors.informative.900} |   |
| Colors.Text.inverse | {Colors.neutral.100} |   |
| Colors.Text.primary | {Colors.neutral.1000} | Neutral 1000 |
| Colors.Text.secondary | {Colors.neutral.700} |   |
| Colors.Text.succese-hover | {Colors.success.800} |   |
| Colors.Text.succese-pressed | {Colors.success.900} |   |
| Colors.Text.success | {Colors.success.700} |   |
| Colors.Text.success-on-color | {Colors.success.900} |   |

```json
{
  "Colors": {
    "Action": {
      "critical-primary": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "critical-primary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "critical-primary-hover": {
        "$type": "color",
        "$value": "{Colors.critical.800}"
      },
      "critical-primary-pressed": {
        "$type": "color",
        "$value": "{Colors.critical.900}"
      },
      "critical-secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.A0}"
      },
      "critical-secondary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "critical-secondary-hover": {
        "$type": "color",
        "$value": "{Colors.critical.100}"
      },
      "critical-secondary-pressed": {
        "$type": "color",
        "$value": "{Colors.critical.200}"
      },
      "inverse-primary": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "inverse-primary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "inverse-primary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.A80}"
      },
      "inverse-primary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.A60}"
      },
      "inverse-secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.A0}"
      },
      "inverse-secondary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "inverse-secondary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.A15}"
      },
      "inverse-secondary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.A35}"
      },
      "inverse-tertiary": {
        "$type": "color",
        "$value": "{Colors.neutral.A0}"
      },
      "inverse-tertiary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "inverse-tertiary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.A15}"
      },
      "inverse-tertiary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.A35}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "primary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "primary-hover": {
        "$type": "color",
        "$value": "{Colors.brand.800}"
      },
      "primary-pressed": {
        "$type": "color",
        "$value": "{Colors.brand.900}"
      },
      "secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.A0}"
      },
      "secondary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "secondary-hover": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "secondary-pressed": {
        "$type": "color",
        "$value": "{Colors.brand.200}"
      },
      "success": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      },
      "success-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "success-hover": {
        "$type": "color",
        "$value": "{Colors.success.800}"
      },
      "success-pressed": {
        "$type": "color",
        "$value": "{Colors.success.900}"
      },
      "tertiary": {
        "$type": "color",
        "$value": "{Colors.neutral.A0}"
      },
      "tertiary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "tertiary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "tertiary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      }
    },
    "Background": {
      "background-brand-primary": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "background-brand-secondary": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "background-secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.200}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      }
    },
    "Border": {
      "Inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "brand": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "critical": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "info": {
        "$type": "color",
        "$value": "{Colors.informative.700}"
      },
      "interactive-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "interactive-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "interactive-rest": {
        "$type": "color",
        "$value": "{Colors.neutral.600}"
      },
      "interactive-selected": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "neutral": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "static": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "success": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      },
      "warning": {
        "$type": "color",
        "$value": "{Colors.warning.700}"
      }
    },
    "Fill": {
      "brand-primary": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "brand-secondary": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "critical-primary": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "critical-secondary": {
        "$type": "color",
        "$value": "{Colors.critical.100}"
      },
      "decorative-1": {
        "$type": "color",
        "$value": "{Colors.decorative.1}"
      },
      "decorative-2": {
        "$type": "color",
        "$value": "{Colors.decorative.2}"
      },
      "decorative-3": {
        "$type": "color",
        "$value": "{Colors.decorative.3}"
      },
      "decorative-4": {
        "$type": "color",
        "$value": "{Colors.decorative.4}"
      },
      "decorative-5": {
        "$type": "color",
        "$value": "{Colors.decorative.5}"
      },
      "disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "info-primary": {
        "$type": "color",
        "$value": "{Colors.informative.700}"
      },
      "info-secondary": {
        "$type": "color",
        "$value": "{Colors.informative.100}"
      },
      "inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "read-only": {
        "$type": "color",
        "$value": "{Colors.neutral.700}"
      },
      "secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "success-primary": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      },
      "success-secondary": {
        "$type": "color",
        "$value": "{Colors.success.100}"
      },
      "tertiary": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "warning-primary": {
        "$type": "color",
        "$value": "{Colors.warning.700}"
      },
      "warning-secondary": {
        "$type": "color",
        "$value": "{Colors.warning.100}"
      }
    },
    "Focus": {
      "inverse": {
        "$type": "color",
        "$value": "{Colors.focus.Inverse}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.focus.primary}"
      }
    },
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
    },
    "Illustration": {
      "background": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "border": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "brand-primary": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "brand-secondary": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "critical": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "success": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      }
    },
    "Link": {
      "inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "inverse-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.A35}"
      },
      "inverse-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.A80}"
      },
      "inverse-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.A60}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "primary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "primary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "primary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.700}"
      },
      "secondary": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "secondary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "secondary-hover": {
        "$type": "color",
        "$value": "{Colors.brand.800}"
      },
      "secondary-pressed": {
        "$type": "color",
        "$value": "{Colors.brand.900}"
      }
    },
    "Surface": {
      "inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "primary": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "primary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "primary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "primary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "primary-selected": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.200}"
      },
      "secondary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "secondary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "secondary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "secondary-selected": {
        "$type": "color",
        "$value": "{Colors.brand.100}"
      },
      "tertiary": {
        "$type": "color",
        "$value": "{Colors.neutral.400}"
      },
      "tertiary-disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.300}"
      },
      "tertiary-hover": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "tertiary-pressed": {
        "$type": "color",
        "$value": "{Colors.neutral.600}"
      },
      "tertiary-selected": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      }
    },
    "Text": {
      "brand": {
        "$type": "color",
        "$value": "{Colors.brand.700}"
      },
      "brand-hover": {
        "$type": "color",
        "$value": "{Colors.brand.800}"
      },
      "brand-on-color": {
        "$type": "color",
        "$value": "{Colors.brand.900}"
      },
      "brand-pressed": {
        "$type": "color",
        "$value": "{Colors.brand.900}"
      },
      "critical": {
        "$type": "color",
        "$value": "{Colors.critical.700}"
      },
      "critical-hover": {
        "$type": "color",
        "$value": "{Colors.critical.800}"
      },
      "critical-on-color": {
        "$type": "color",
        "$value": "{Colors.critical.900}"
      },
      "critical-pressed": {
        "$type": "color",
        "$value": "{Colors.critical.900}"
      },
      "disabled": {
        "$type": "color",
        "$value": "{Colors.neutral.500}"
      },
      "info": {
        "$type": "color",
        "$value": "{Colors.informative.700}"
      },
      "info-hover": {
        "$type": "color",
        "$value": "{Colors.informative.800}"
      },
      "info-on-color": {
        "$type": "color",
        "$value": "{Colors.informative.900}"
      },
      "info-pressed": {
        "$type": "color",
        "$value": "{Colors.informative.900}"
      },
      "inverse": {
        "$type": "color",
        "$value": "{Colors.neutral.100}"
      },
      "primary": {
        "$description": "Neutral 1000",
        "$type": "color",
        "$value": "{Colors.neutral.1000}"
      },
      "secondary": {
        "$type": "color",
        "$value": "{Colors.neutral.700}"
      },
      "succese-hover": {
        "$type": "color",
        "$value": "{Colors.success.800}"
      },
      "succese-pressed": {
        "$type": "color",
        "$value": "{Colors.success.900}"
      },
      "success": {
        "$type": "color",
        "$value": "{Colors.success.700}"
      },
      "success-on-color": {
        "$type": "color",
        "$value": "{Colors.success.900}"
      }
    }
  }
}
```
---

# Component based tokens
Component-based tokens are the most specific level, defining colors for individual components. These tokens reference semantic tokens to maintain a clear relationship between design and function.

| Token | Value | Description |
| --- | --- | --- |
| Pill.default | {Border radius.full} |   |
| Tabs.default-hover | {Colors.Text.brand-hover} |   |
| Tabs.default-pressed | {Colors.Text.brand-pressed} |   |
| Tabs.default-rest | {Colors.Text.secondary} |   |
| Tabs.default-selected | {Colors.Text.brand} |   |
| Tabs.neutral-hover | {Colors.Text.primary} |   |
| Tabs.neutral-pressed | {Colors.Text.primary} |   |
| Tabs.neutral-rest | {Colors.Text.secondary} |   |
| Tabs.neutral-selected | {Colors.Text.primary} |   |
| Text button.critical-disabled | {Colors.Text.disabled} |   |
| Text button.critical-hover | {Colors.Text.critical-hover} |   |
| Text button.critical-pressed | {Colors.Text.critical-pressed} |   |
| Text button.critical-rest | {Colors.Text.critical} |   |
| Text button.inverse-disabled | {Colors.Link.inverse-disabled} |   |
| Text button.inverse-hover | {Colors.Link.inverse-hover} |   |
| Text button.inverse-pressed | {Colors.Link.inverse-pressed} |   |
| Text button.inverse-rest | {Colors.Link.inverse} |   |
| Text button.primary-disabled | {Colors.Text.disabled} |   |
| Text button.primary-hover | {Colors.Text.brand} |   |
| Text button.primary-pressed | {Colors.Text.brand-hover} |   |
| Text button.primary-rest | {Colors.Text.primary} |   |
| Text button.secondary-disabled | {Colors.Text.disabled} |   |
| Text button.secondary-hover | {Colors.Text.brand-hover} |   |
| Text button.secondary-pressed | {Colors.Text.brand-pressed} |   |
| Text button.secondary-rest | {Colors.Text.brand} |   |

```json
{
  "Pill": {
    "default": {
      "$type": "number",
      "$value": "{Border radius.full}"
    }
  },
  "Tabs": {
    "default-hover": {
      "$type": "color",
      "$value": "{Colors.Text.brand-hover}"
    },
    "default-pressed": {
      "$type": "color",
      "$value": "{Colors.Text.brand-pressed}"
    },
    "default-rest": {
      "$type": "color",
      "$value": "{Colors.Text.secondary}"
    },
    "default-selected": {
      "$type": "color",
      "$value": "{Colors.Text.brand}"
    },
    "neutral-hover": {
      "$type": "color",
      "$value": "{Colors.Text.primary}"
    },
    "neutral-pressed": {
      "$type": "color",
      "$value": "{Colors.Text.primary}"
    },
    "neutral-rest": {
      "$type": "color",
      "$value": "{Colors.Text.secondary}"
    },
    "neutral-selected": {
      "$type": "color",
      "$value": "{Colors.Text.primary}"
    }
  },
  "Text button": {
    "critical-disabled": {
      "$type": "color",
      "$value": "{Colors.Text.disabled}"
    },
    "critical-hover": {
      "$type": "color",
      "$value": "{Colors.Text.critical-hover}"
    },
    "critical-pressed": {
      "$type": "color",
      "$value": "{Colors.Text.critical-pressed}"
    },
    "critical-rest": {
      "$type": "color",
      "$value": "{Colors.Text.critical}"
    },
    "inverse-disabled": {
      "$type": "color",
      "$value": "{Colors.Link.inverse-disabled}"
    },
    "inverse-hover": {
      "$type": "color",
      "$value": "{Colors.Link.inverse-hover}"
    },
    "inverse-pressed": {
      "$type": "color",
      "$value": "{Colors.Link.inverse-pressed}"
    },
    "inverse-rest": {
      "$type": "color",
      "$value": "{Colors.Link.inverse}"
    },
    "primary-disabled": {
      "$type": "color",
      "$value": "{Colors.Text.disabled}"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "{Colors.Text.brand}"
    },
    "primary-pressed": {
      "$type": "color",
      "$value": "{Colors.Text.brand-hover}"
    },
    "primary-rest": {
      "$type": "color",
      "$value": "{Colors.Text.primary}"
    },
    "secondary-disabled": {
      "$type": "color",
      "$value": "{Colors.Text.disabled}"
    },
    "secondary-hover": {
      "$type": "color",
      "$value": "{Colors.Text.brand-hover}"
    },
    "secondary-pressed": {
      "$type": "color",
      "$value": "{Colors.Text.brand-pressed}"
    },
    "secondary-rest": {
      "$type": "color",
      "$value": "{Colors.Text.brand}"
    }
  }
}
```
---

# Global tokens
Global tokens are the foundational values of our color system. These are raw color values that are not tied to a specific meaning or usage. They serve as the core palette from which all other tokens derive.

| Token | Value | Description |
| --- | --- | --- |
| Colors.brand.100 | #f6f2fd |   |
| Colors.brand.200 | #e4dbff |   |
| Colors.brand.300 | #d9ccff |   |
| Colors.brand.400 | #c8b5fe |   |
| Colors.brand.500 | #b79eff |   |
| Colors.brand.600 | #9470ff |   |
| Colors.brand.700 | #7849ff |   |
| Colors.brand.800 | #5f33e6 |   |
| Colors.brand.900 | #4315cb |   |
| Colors.brand.1000 | #321098 |   |
| Colors.brand-secondary.100 | #f3f0ff |   |
| Colors.brand-secondary.200 | #e4dbff |   |
| Colors.brand-secondary.300 | #d9ccff |   |
| Colors.brand-secondary.400 | #c9b6ff |   |
| Colors.brand-secondary.500 | #b79eff |   |
| Colors.brand-secondary.600 | #9470ff |   |
| Colors.brand-secondary.700 | #7849ff |   |
| Colors.brand-secondary.800 | #5f33e6 |   |
| Colors.brand-secondary.900 | #4315cb |   |
| Colors.brand-secondary.1000 | #321098 |   |
| Colors.critical.100 | #fde7e9 |   |
| Colors.critical.200 | #fac4c9 |   |
| Colors.critical.300 | #f9b4ba |   |
| Colors.critical.400 | #f79ca4 |   |
| Colors.critical.500 | #f57f89 |   |
| Colors.critical.600 | #f14755 |   |
| Colors.critical.700 | #d80e25 |   |
| Colors.critical.800 | #c50c22 |   |
| Colors.critical.900 | #8d0411 |   |
| Colors.critical.1000 | #6d030d |   |
| Colors.decorative.1 | #ead6d4 |   |
| Colors.decorative.2 | #ffe0d6 |   |
| Colors.decorative.3 | #ffd0ea |   |
| Colors.decorative.4 | #d9e1fd |   |
| Colors.decorative.5 | #c9f8f8 |   |
| Colors.focus.Inverse | #3798f2 |   |
| Colors.focus.primary | #0548cf |   |
| Colors.informative.100 | #e6f0fe |   |
| Colors.informative.200 | #c7dafd |   |
| Colors.informative.300 | #b5cefc |   |
| Colors.informative.400 | #a2c1fb |   |
| Colors.informative.500 | #8fb4fa |   |
| Colors.informative.600 | #5484f8 |   |
| Colors.informative.700 | #306af7 |   |
| Colors.informative.800 | #2256d6 |   |
| Colors.informative.900 | #0351c0 |   |
| Colors.informative.1000 | #023d91 |   |
| Colors.neutral.100 | #ffffff |   |
| Colors.neutral.200 | #f8fafc |   |
| Colors.neutral.300 | #f1f5f8 |   |
| Colors.neutral.400 | #e4e7ec |   |
| Colors.neutral.500 | #c3cad5 |   |
| Colors.neutral.600 | #8b95a9 |   |
| Colors.neutral.700 | #646f87 |   |
| Colors.neutral.800 | #475467 |   |
| Colors.neutral.900 | #344054 |   |
| Colors.neutral.1000 | #18191b |   |
| Colors.neutral.A0 | rgba(255, 255, 255, 0.0000) |   |
| Colors.neutral.A15 | rgba(255, 255, 255, 0.1500) |   |
| Colors.neutral.A35 | rgba(255, 255, 255, 0.3500) |   |
| Colors.neutral.A60 | rgba(255, 255, 255, 0.6000) |   |
| Colors.neutral.A80 | rgba(255, 255, 255, 0.8000) |   |
| Colors.success.100 | #dff5e7 |   |
| Colors.success.200 | #b1e2c4 |   |
| Colors.success.300 | #9bdab3 |   |
| Colors.success.400 | #7dcf9d |   |
| Colors.success.500 | #54bf7e |   |
| Colors.success.600 | #41ae6c |   |
| Colors.success.700 | #028838 |   |
| Colors.success.800 | #00702d |   |
| Colors.success.900 | #014b1f |   |
| Colors.success.1000 | #012811 |   |
| Colors.warning.100 | #fff8e6 |   |
| Colors.warning.200 | #fff0ca |   |
| Colors.warning.300 | #ffe9b2 |   |
| Colors.warning.400 | #ffe299 |   |
| Colors.warning.500 | #ffd875 |   |
| Colors.warning.600 | #fdc535 |   |
| Colors.warning.700 | #fdb702 |   |
| Colors.warning.800 | #e6a702 |   |
| Colors.warning.900 | #b88501 |   |
| Colors.warning.1000 | #986e01 |   |

```json
{
  "Colors": {
    "brand": {
      "100": {
        "$type": "color",
        "$value": "#f6f2fd"
      },
      "200": {
        "$type": "color",
        "$value": "#e4dbff"
      },
      "300": {
        "$type": "color",
        "$value": "#d9ccff"
      },
      "400": {
        "$type": "color",
        "$value": "#c8b5fe"
      },
      "500": {
        "$type": "color",
        "$value": "#b79eff"
      },
      "600": {
        "$type": "color",
        "$value": "#9470ff"
      },
      "700": {
        "$type": "color",
        "$value": "#7849ff"
      },
      "800": {
        "$type": "color",
        "$value": "#5f33e6"
      },
      "900": {
        "$type": "color",
        "$value": "#4315cb"
      },
      "1000": {
        "$type": "color",
        "$value": "#321098"
      }
    },
    "brand-secondary": {
      "100": {
        "$type": "color",
        "$value": "#f3f0ff"
      },
      "200": {
        "$type": "color",
        "$value": "#e4dbff"
      },
      "300": {
        "$type": "color",
        "$value": "#d9ccff"
      },
      "400": {
        "$type": "color",
        "$value": "#c9b6ff"
      },
      "500": {
        "$type": "color",
        "$value": "#b79eff"
      },
      "600": {
        "$type": "color",
        "$value": "#9470ff"
      },
      "700": {
        "$type": "color",
        "$value": "#7849ff"
      },
      "800": {
        "$type": "color",
        "$value": "#5f33e6"
      },
      "900": {
        "$type": "color",
        "$value": "#4315cb"
      },
      "1000": {
        "$type": "color",
        "$value": "#321098"
      }
    },
    "critical": {
      "100": {
        "$type": "color",
        "$value": "#fde7e9"
      },
      "200": {
        "$type": "color",
        "$value": "#fac4c9"
      },
      "300": {
        "$type": "color",
        "$value": "#f9b4ba"
      },
      "400": {
        "$type": "color",
        "$value": "#f79ca4"
      },
      "500": {
        "$type": "color",
        "$value": "#f57f89"
      },
      "600": {
        "$type": "color",
        "$value": "#f14755"
      },
      "700": {
        "$type": "color",
        "$value": "#d80e25"
      },
      "800": {
        "$type": "color",
        "$value": "#c50c22"
      },
      "900": {
        "$type": "color",
        "$value": "#8d0411"
      },
      "1000": {
        "$type": "color",
        "$value": "#6d030d"
      }
    },
    "decorative": {
      "1": {
        "$type": "color",
        "$value": "#ead6d4"
      },
      "2": {
        "$type": "color",
        "$value": "#ffe0d6"
      },
      "3": {
        "$type": "color",
        "$value": "#ffd0ea"
      },
      "4": {
        "$type": "color",
        "$value": "#d9e1fd"
      },
      "5": {
        "$type": "color",
        "$value": "#c9f8f8"
      }
    },
    "focus": {
      "Inverse": {
        "$type": "color",
        "$value": "#3798f2"
      },
      "primary": {
        "$type": "color",
        "$value": "#0548cf"
      }
    },
    "informative": {
      "100": {
        "$type": "color",
        "$value": "#e6f0fe"
      },
      "200": {
        "$type": "color",
        "$value": "#c7dafd"
      },
      "300": {
        "$type": "color",
        "$value": "#b5cefc"
      },
      "400": {
        "$type": "color",
        "$value": "#a2c1fb"
      },
      "500": {
        "$type": "color",
        "$value": "#8fb4fa"
      },
      "600": {
        "$type": "color",
        "$value": "#5484f8"
      },
      "700": {
        "$type": "color",
        "$value": "#306af7"
      },
      "800": {
        "$type": "color",
        "$value": "#2256d6"
      },
      "900": {
        "$type": "color",
        "$value": "#0351c0"
      },
      "1000": {
        "$type": "color",
        "$value": "#023d91"
      }
    },
    "neutral": {
      "100": {
        "$type": "color",
        "$value": "#ffffff"
      },
      "200": {
        "$type": "color",
        "$value": "#f8fafc"
      },
      "300": {
        "$type": "color",
        "$value": "#f1f5f8"
      },
      "400": {
        "$type": "color",
        "$value": "#e4e7ec"
      },
      "500": {
        "$type": "color",
        "$value": "#c3cad5"
      },
      "600": {
        "$type": "color",
        "$value": "#8b95a9"
      },
      "700": {
        "$type": "color",
        "$value": "#646f87"
      },
      "800": {
        "$type": "color",
        "$value": "#475467"
      },
      "900": {
        "$type": "color",
        "$value": "#344054"
      },
      "1000": {
        "$type": "color",
        "$value": "#18191b"
      },
      "A0": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 0.0000)"
      },
      "A15": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 0.1500)"
      },
      "A35": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 0.3500)"
      },
      "A60": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 0.6000)"
      },
      "A80": {
        "$type": "color",
        "$value": "rgba(255, 255, 255, 0.8000)"
      }
    },
    "success": {
      "100": {
        "$type": "color",
        "$value": "#dff5e7"
      },
      "200": {
        "$type": "color",
        "$value": "#b1e2c4"
      },
      "300": {
        "$type": "color",
        "$value": "#9bdab3"
      },
      "400": {
        "$type": "color",
        "$value": "#7dcf9d"
      },
      "500": {
        "$type": "color",
        "$value": "#54bf7e"
      },
      "600": {
        "$type": "color",
        "$value": "#41ae6c"
      },
      "700": {
        "$type": "color",
        "$value": "#028838"
      },
      "800": {
        "$type": "color",
        "$value": "#00702d"
      },
      "900": {
        "$type": "color",
        "$value": "#014b1f"
      },
      "1000": {
        "$type": "color",
        "$value": "#012811"
      }
    },
    "warning": {
      "100": {
        "$type": "color",
        "$value": "#fff8e6"
      },
      "200": {
        "$type": "color",
        "$value": "#fff0ca"
      },
      "300": {
        "$type": "color",
        "$value": "#ffe9b2"
      },
      "400": {
        "$type": "color",
        "$value": "#ffe299"
      },
      "500": {
        "$type": "color",
        "$value": "#ffd875"
      },
      "600": {
        "$type": "color",
        "$value": "#fdc535"
      },
      "700": {
        "$type": "color",
        "$value": "#fdb702"
      },
      "800": {
        "$type": "color",
        "$value": "#e6a702"
      },
      "900": {
        "$type": "color",
        "$value": "#b88501"
      },
      "1000": {
        "$type": "color",
        "$value": "#986e01"
      }
    }
  }
}
```
---