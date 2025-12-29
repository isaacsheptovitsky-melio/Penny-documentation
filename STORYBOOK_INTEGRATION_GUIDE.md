# Design System Documentation Guide

This guide explains how to structure and organize design system documentation with comprehensive asset management, typography systems, and component organization patterns. The documentation follows specific patterns for assets, fonts, and content structure.

## Project Overview

The design system documentation includes:
- **Typography**: Linear Sans font family with complete weight coverage
- **Asset Management**: Centralized asset organization
- **Content Format**: Structured documentation for components and foundations
- **Interactive Examples**: Integration patterns for live component examples

## Core Architecture

### Documentation Structure
```
- Comprehensive component documentation
- Foundation system documentation
- Asset management strategy
- Typography and color systems
```

## Folder Structure

```
design-system-docs/
├── assets/                          # Static assets
│   ├── fonts/                      # Linear Sans font files (.otf)
│   ├── components/                 # Component screenshots/images
│   │   ├── action-bar/
│   │   ├── button/
│   │   ├── icon-button/
│   │   └── [component-name]/
│   └── foundation/                 # Foundation system assets
│       ├── typography-assets/
│       ├── icons-assets/
│       └── [foundation-topic]/
├── documentation/
│   ├── foundation/                 # Design system foundations
│   │   ├── typography.md
│   │   ├── colors.md
│   │   └── spacing.md
│   ├── components/                 # Component documentation
│   │   ├── action/
│   │   ├── navigation/
│   │   └── [category]/
│   └── ux-patterns/               # UX pattern documentation
├── styles/
│   └── theme.css                  # Typography and color definitions
└── COMPONENT_STYLE_GUIDE.md       # Documentation standards
```

## Font Configuration

### Linear Sans Font Family
The project uses Linear Sans as the primary typeface with complete weight coverage:

```css
/* Font weights included: */
- Regular (400)
- Light (300) 
- SemiBold (600)
- Bold (700)
- Heavy (800)
- Black (900)
/* Plus italic variants for each weight */
```

### Font Integration
1. **Font Files**: Stored in `/assets/fonts/` as `.otf` files
2. **CSS Setup**: Defined in your theme CSS file
3. **Implementation**: Applied globally via CSS custom properties

```css
:root {
    --primary-font: 'Linear Sans', ui-sans-serif, system-ui, -apple-system, /* fallbacks */
}
```

## Color System

### Theme Configuration
```css
/* Dark mode */
--accent-color-low: #231a49
--accent-color: #6d36ee  
--accent-color-high: #c5c0fd

/* Light mode */
--accent-color-low: #d4d1ff
--accent-color: #6f38f0
--accent-color-high: #32206d
```

## Asset Management Strategy

### Image Organization
```
/assets/components/[component-name]/
├── [component]-image-1.png
├── [component]-image-2.png
├── [component]-states.png
└── [component]-usage-example.gif
```

### Asset Guidelines
- **Naming**: Use lowercase with hyphens (`button-primary-states.png`)
- **Location**: All component images in `/assets/components/`
- **Formats**: PNG for static, GIF for animations
- **Consistent Structure**: Organize by component categories

## Interactive Examples Integration

### Live Component Examples
Documentation can include live component examples through various integration patterns:

```html
<!-- Embedded iframe example -->
<iframe
  src="https://your-storybook-url.com/iframe.html?id=component-id--variant"
  width="100%"
  height="300px"
  frameborder="0"
  allow="clipboard-write"
  style="border: 1px solid #e1e5e9; border-radius: 8px; margin: 16px 0;"
  title="Component Interactive Example"
></iframe>
```

### External Resource Links
```html
<!-- Links to design and development resources -->
<div class="resource-links">
  <a href="https://figma.com/design/component-link" target="_blank">
    Design Specs
  </a>
  <a href="https://storybook-url.com/?path=/story/component--variant" target="_blank">
    Live Examples
  </a>
</div>
```

## Content Structure Standards

### Documentation Format
Every component page follows this structure:

```markdown
# Component Name

Brief component description

## Interactive Example
[Live component example or visual representation]

## External Resources
[Links to design specs, code examples, etc.]

## Usage
- When to use guidelines
- Key behaviors

## Variants
- Component variations
- State definitions

## Desktop usage and treatment
### Width
### Placement

## Mobile usage and treatment  
### Width
### Placement
```

### Documentation Standards
- **Format**: Markdown or MDX for enhanced features
- **Images**: Direct markdown syntax with immediate captions
- **Spacing**: Consistent spacing after captions and between sections
- **Tables**: For Do's/Don'ts with side-by-side layout

## Navigation Structure

### Hierarchical Organization
```javascript
navigation: [
  {
    label: 'Foundation',
    items: [
      'Typography',
      'Color System', 
      'Spacing',
      'Layout System',
      // ... more foundation topics
    ],
  },
  {
    label: 'Components', 
    items: [
      {
        label: 'Action Components',
        items: [
          'Button',
          'Icon Button',
          'Split Button',
          // ... component items
        ],
      },
    ],
  },
]
```

## Typography System

### Design Token Structure
Based on the typography documentation:

```
Display Styles:
- Display 1 Semi: 48px/60px desktop, 40px/48px mobile
- Display 2 Semi: 40px/48px desktop, 32px/40px mobile

Body Text:
- Body 1 Semi: 20px/28px (all screens)
- Body 2 Semi: 16px/24px (all screens) 
- Body 3 Semi: 14px/20px (all screens)

Captions:
- Caption 1: 10px/14px
- Caption 2: 8px/12px
```

## Implementation Setup

### 1. Asset Organization
```bash
# Organize your documentation assets
/assets/
  /fonts/           # Linear Sans font files
  /components/      # Component images and examples
  /foundation/      # Foundation system assets
```

### 2. Configure Interactive Examples
Update documentation to point to your component library:
```html
src="https://your-component-library.com/iframe.html?id=component-id--story"
```

### 3. Font Integration
```css
/* Add font definitions to your CSS */
@font-face {
  font-family: 'Linear Sans';
  src: url('./assets/fonts/LinearSans-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

:root {
  --primary-font: 'Linear Sans', sans-serif;
  --accent-color: #6d36ee;
}
```

### 4. Content Structure
```
/documentation/
  /foundation/
    typography.md
    colors.md
    spacing.md
  /components/
    /action/
      button.md
      icon-button.md
    /navigation/
      tabs.md
      pagination.md
```

## Implementation Checklist

When implementing this documentation pattern:

### Assets
- [ ] Organize Linear Sans fonts in `/assets/fonts/`
- [ ] Structure component images in `/assets/components/`
- [ ] Create consistent asset naming conventions

### Configuration
- [ ] Update component library URLs in documentation
- [ ] Set up font loading in your CSS
- [ ] Configure typography and color systems

### Content
- [ ] Follow established documentation structure
- [ ] Use consistent heading hierarchy
- [ ] Include interactive component examples
- [ ] Add external resource links (design specs, code)

### Styling
- [ ] Apply Linear Sans typography system
- [ ] Implement color token system
- [ ] Set up responsive design considerations

## Best Practices

### Performance
- Use `font-display: swap` for web fonts
- Optimize images for web (compress PNG/JPG, use appropriate formats)
- Consider lazy loading for large image galleries

### Accessibility  
- Maintain semantic HTML structure separate from visual typography
- Ensure color contrast meets WCAG standards
- Provide alternative text for all images
- Use proper heading hierarchy for screen readers

### Maintenance
- Follow consistent naming conventions for assets
- Document any deviations from established patterns
- Keep component documentation updated with design changes
- Version control both assets and documentation together

## Best Practices Summary

### Asset Organization
1. **Consistent Structure**: Use predictable folder organization
2. **Naming Conventions**: Lowercase with hyphens for all files
3. **File Formats**: PNG for static, GIF for animations, SVG for icons
4. **Image Quality**: Balance file size with visual quality

### Typography Implementation
1. **Font Loading**: Implement proper font loading strategies
2. **Fallbacks**: Always provide system font fallbacks
3. **Responsive Design**: Ensure typography scales across devices
4. **Performance**: Subset fonts when possible to reduce file size

### Documentation Standards
1. **Structure**: Follow consistent page structure across all components
2. **Examples**: Include both static images and interactive examples
3. **Context**: Provide clear usage guidelines and best practices
4. **Links**: Connect to relevant design and development resources

This guide provides a framework-agnostic approach to organizing and maintaining design system documentation with proper asset management, typography systems, and integration patterns for interactive examples.