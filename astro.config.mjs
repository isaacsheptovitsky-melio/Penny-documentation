// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
// Configured for GitHub Pages deployment
export default defineConfig({
  site: "https://isaacsheptovitsky-melio.github.io",
  base: "/Penny-documentation",
  output: "static",
  adapter: undefined,
  integrations: [
    starlight({
      title: "Penny Design System",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      favicon: "/penny-symbol-light.png",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/isaacsheptovitsky-melio/Penny-documentation",
        },
      ],
      sidebar: [
        {
          label: "Foundation",
          items: [
            {
              label: "Values & Principles",
              slug: "foundation/values-principles",
            },
            { label: "Accessibility", slug: "foundation/accessibility" },
            { label: "Borders", slug: "foundation/borders" },
            { label: "Border Radius", slug: "foundation/border-radius" },
            { label: "Breakpoints", slug: "foundation/breakpoints" },
            { label: "Color Tokens", slug: "foundation/color-tokens" },
            { label: "Icons", slug: "foundation/icons" },
            { label: "Illustrations", slug: "foundation/illustrations" },
            { label: "Layout System", slug: "foundation/layout-system" },
            { label: "Loader", slug: "foundation/loader" },
            { label: "Mobile Patterns", slug: "foundation/mobile-patterns" },
            { label: "Partnerships", slug: "foundation/partnerships" },
            { label: "Shadows", slug: "foundation/shadows" },
            { label: "Spacing", slug: "foundation/spacing" },
            { label: "Status Icons", slug: "foundation/status-icon-solid" },
            { label: "Typography", slug: "foundation/typography" },
          ],
        },
        {
          label: "UX Patterns",
          items: [
            {
              label: "Buttons vs. Links",
              slug: "ux-patterns/buttons-vs-links",
            },
            { label: "Delete", slug: "ux-patterns/delete" },
            { label: "Feedback", slug: "ux-patterns/feedback" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "Overview", slug: "components/overview" },
            {
              label: "Action Components",
              collapsed: true,
              items: [
                { label: "Action Bar", slug: "components/action/action-bar" },
                { label: "Button", slug: "components/action/button" },
                { label: "Icon Button", slug: "components/action/icon-button" },
                {
                  label: "Naked Button",
                  slug: "components/action/naked-button",
                },
                {
                  label: "Split Button",
                  slug: "components/action/split-button",
                },
              ],
            },
            {
              label: "Container Components",
              collapsed: true,
              items: [
                {
                  label: "Base Sheet",
                  slug: "components/containers/base-sheet",
                },
                { label: "Card", slug: "components/containers/card" },
                { label: "Container", slug: "components/containers/container" },
                { label: "Drawer", slug: "components/containers/drawer" },
                { label: "Floating", slug: "components/containers/floating" },
                { label: "Group", slug: "components/containers/group" },
                { label: "Menus", slug: "components/containers/menus" },
                { label: "Modal", slug: "components/containers/modal" },
                { label: "Panel", slug: "components/containers/panel" },
                { label: "Popover", slug: "components/containers/popover" },
                {
                  label: "Stacked Container",
                  slug: "components/containers/stacked-container",
                },
              ],
            },
            {
              label: "Data Display",
              collapsed: true,
              items: [
                { label: "Avatar", slug: "components/data-display/avatar" },
                {
                  label: "Avatar Group",
                  slug: "components/data-display/avatar-group",
                },
                { label: "Badge", slug: "components/data-display/badge" },
                { label: "Brand", slug: "components/data-display/brand" },
                {
                  label: "Brand Symbol",
                  slug: "components/data-display/brand-symbol",
                },
                { label: "Counter", slug: "components/data-display/counter" },
                { label: "Currency", slug: "components/data-display/currency" },
                { label: "Divider", slug: "components/data-display/divider" },
                {
                  label: "Flag Icon",
                  slug: "components/data-display/flag-icon",
                },
                { label: "Pill", slug: "components/data-display/pill" },
                {
                  label: "Section Banner",
                  slug: "components/data-display/section-banner",
                },
                {
                  label: "Status Indicator",
                  slug: "components/data-display/status-indicator",
                },
                { label: "Tooltip", slug: "components/data-display/tooltip" },
                { label: "Tourtip", slug: "components/data-display/tourtip" },
                { label: "Tracker", slug: "components/data-display/tracker" },
                {
                  label: "Virtual Card",
                  slug: "components/data-display/virtual-card",
                },
              ],
            },
            {
              label: "Feedback",
              collapsed: true,
              items: [
                { label: "Blanket", slug: "components/feedback/blanket" },
                {
                  label: "Circular Progress",
                  slug: "components/feedback/circular-progress",
                },
                {
                  label: "Linear Progress",
                  slug: "components/feedback/linear-progress",
                },
                { label: "Skeletons", slug: "components/feedback/skeletons" },
              ],
            },
            {
              label: "Form & Table",
              collapsed: true,
              items: [
                { label: "Columns", slug: "components/form-table/columns" },
                { label: "Form", slug: "components/form-table/form" },
                {
                  label: "Header Cells",
                  slug: "components/form-table/header-cells",
                },
                { label: "Row Cells", slug: "components/form-table/row-cells" },
                { label: "Rows", slug: "components/form-table/rows" },
                { label: "Table", slug: "components/form-table/table" },
              ],
            },
            {
              label: "Layout",
              collapsed: true,
              items: [
                {
                  label: "External Layout",
                  slug: "components/layout/external-layout",
                },
                { label: "Layout", slug: "components/layout/layout" },
                {
                  label: "Split Layout",
                  slug: "components/layout/split-layout",
                },
                {
                  label: "Split Screen",
                  slug: "components/layout/split-screen",
                },
              ],
            },
            {
              label: "Media",
              collapsed: true,
              items: [
                { label: "Image", slug: "components/media/image" },
                { label: "Lottie", slug: "components/media/lottie" },
                { label: "Video", slug: "components/media/video" },
              ],
            },
            {
              label: "Navigation",
              collapsed: true,
              items: [
                { label: "Link", slug: "components/navigation/link" },
                {
                  label: "Navigation Item",
                  slug: "components/navigation/navigation-item",
                },
                {
                  label: "Pagination",
                  slug: "components/navigation/pagination",
                },
                { label: "Tabs", slug: "components/navigation/tabs" },
              ],
            },
            {
              label: "Selection & Inputs",
              collapsed: true,
              items: [
                {
                  label: "Amount Field",
                  slug: "components/selection-inputs/amount-field",
                },
                {
                  label: "Amount Input",
                  slug: "components/selection-inputs/amount-input",
                },
                {
                  label: "Avatar Image Control",
                  slug: "components/selection-inputs/avatar-image-control",
                },
                {
                  label: "Calendar",
                  slug: "components/selection-inputs/calendar",
                },
                {
                  label: "Checkbox",
                  slug: "components/selection-inputs/checkbox",
                },
                {
                  label: "Combobox",
                  slug: "components/selection-inputs/combobox",
                },
                {
                  label: "Date Field",
                  slug: "components/selection-inputs/date-field",
                },
                {
                  label: "Date Picker",
                  slug: "components/selection-inputs/date-picker",
                },
                {
                  label: "File Attachment",
                  slug: "components/selection-inputs/file-attachment",
                },
                {
                  label: "File Upload",
                  slug: "components/selection-inputs/file-upload",
                },
                {
                  label: "Form Field",
                  slug: "components/selection-inputs/form-field",
                },
                {
                  label: "Large File Upload",
                  slug: "components/selection-inputs/large-file-upload",
                },
                {
                  label: "Multi Select",
                  slug: "components/selection-inputs/multi-select",
                },
                {
                  label: "Phone Field",
                  slug: "components/selection-inputs/phone-field",
                },
                {
                  label: "Radio Group",
                  slug: "components/selection-inputs/radio-group",
                },
                {
                  label: "Search Bar",
                  slug: "components/selection-inputs/search-bar",
                },
                {
                  label: "Secured Text Field",
                  slug: "components/selection-inputs/secured-text-field",
                },
                {
                  label: "Segmented Control",
                  slug: "components/selection-inputs/segmented-control",
                },
                { label: "Select", slug: "components/selection-inputs/select" },
                { label: "Switch", slug: "components/selection-inputs/switch" },
                { label: "Tag", slug: "components/selection-inputs/tag" },
                {
                  label: "Text Area",
                  slug: "components/selection-inputs/text-area",
                },
                {
                  label: "Text Field",
                  slug: "components/selection-inputs/text-field",
                },
                {
                  label: "Verification Code Field",
                  slug: "components/selection-inputs/verification-code-field",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
