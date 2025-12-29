# Component Documentation Style Guide

This document captures the formatting standards and conventions established during the Button component documentation work. All component pages should follow these guidelines for consistency.

## File Structure & Format

### File Extension
- Use `.mdx` format for all component documentation to enable interactive features
- Never use `.md` for component pages

### Frontmatter
```yaml
---
title: [Component Name]
description: [Brief description of the component's purpose]
---
```

## Content Structure & Hierarchy

### Required Sections (in order)
**EVERY component page must start with this exact structure:**

1. **Title** (in frontmatter)
2. **Description** (in frontmatter)
3. **Storybook embed** - Single iframe example (first thing after frontmatter)
4. **CardGrid with LinkCards** - Figma and Storybook links
5. **Usage section** - When and how to use the component

**Then continue with:**
6. **Component-specific sections** (e.g., Variants, States, etc.)
7. **Desktop usage and treatment**
8. **Mobile usage and treatment**

### Removed Sections
- **Related components** - Remove this section entirely from all pages
- **Tabs** - Do not use tabs, single iframe embed is sufficient
- Redundant headings that duplicate the page title

## Heading Hierarchy

### Primary Structure
```markdown
# [Component Name] (page title - in frontmatter)
## Usage
## [Component-specific sections]
### [Subsections]
## Desktop usage and treatment
### Width
### Placement
## Mobile usage and treatment
### Width
### Placement
```

### Spacing Rules
- Remove `&nbsp;` elements before headings - headings provide sufficient spacing
- Keep `&nbsp;` elements after images for visual separation
- No extra spacing between sections

## Interactive Elements

### Storybook Integration
```markdown
<iframe
  src="https://penny.melio.com/iframe.html?id=[component-id]--main&viewMode=story"
  width="100%"
  height="300px"
  frameborder="0"
  allow="clipboard-write"
  style="border: 1px solid #e1e5e9; border-radius: 8px; margin: 16px 0;"
  title="[Component] Interactive Example"
></iframe>
```

### LinkCards Section
```markdown
<CardGrid>
  <LinkCard
    title="Figma"
    href="[figma-link]"
  />
  <LinkCard
    title="Storybook"
    href="[storybook-link]"
  />
</CardGrid>
```

## Image Guidelines

### File Naming Convention
- Use lowercase with hyphens: `button-primary.png`
- Never use spaces in filenames
- Be descriptive and consistent: `[component]-[variant/state].png`

### Image Placement & Spacing
- Images should be directly followed by their caption with NO spacing:
```markdown
![Image alt text](/path/to/image.png)
**Image caption**
```

- Add `&nbsp;` after caption for visual separation:
```markdown
![Image alt text](/path/to/image.png)
**Image caption**

&nbsp;
```

### Image Storage
- All images must be stored in `/public/components/[component-name]/`
- Never store images in `/src/` directories
- Use proper GitHub Pages path format: `/Penny-documentation/components/[component]/[image]`

## Do's and Don'ts Tables

### Side-by-Side Layout
```markdown
| ✅ **Do** | ❌ **Don't** |
| --------- | ------------ |
| ![](/path/to/do-image.png) <br/> **Title** <br/> Description | ![](/path/to/dont-image.png) <br/> **Title** <br/> Description |
```

### Image Positioning
- Images should be above text within table cells
- Use `<br/>` tags to separate image, title, and description
- Keep descriptions concise and clear

## Content Guidelines

### Writing Style
- Be concise and direct
- Use active voice
- Focus on practical guidance
- Avoid redundant information

### Usage Sections
- Lead with clear when/how guidance
- Use bullet points for easy scanning
- Include practical examples

### States and Variants
- Group related variants together
- Use consistent naming (Rest, Hover, Pressed, Loading, Disabled)
- Show visual examples for each state

## Component-Specific Sections

### Typical Sections for Action Components
- Hierarchy (Primary, Secondary, Tertiary, Critical)
- States (Rest, Hover, Pressed, Loading, Disabled)
- Inverse variants
- Sizes
- Left and right elements
- Critical patterns (if applicable)

### Desktop Treatment
- Width guidelines (hug content vs fill container)
- Placement rules (primary on right, secondary on left)
- Button count limits (max 3 per screen section)

### Mobile Treatment
- Width behavior (fill container recommended)
- Vertical placement guidelines
- Touch target considerations

## Aside Components

### Usage
```markdown
<Aside type="tip">
  Content here for helpful tips or exceptions to rules.
</Aside>
```

### When to Use
- For helpful tips that support main content
- For important exceptions to stated rules
- For accessibility notes or considerations

## Quality Checklist

Before publishing any component documentation, verify:

- [ ] Uses `.mdx` format
- [ ] Has proper frontmatter with title and description
- [ ] Includes interactive Storybook embed
- [ ] Has Figma and Storybook LinkCards
- [ ] Images follow naming convention (no spaces, hyphens)
- [ ] All images stored in `/public/components/[component]/`
- [ ] No spacing between images and captions
- [ ] Proper `&nbsp;` spacing after captions
- [ ] No `&nbsp;` before headings
- [ ] Removed "Related components" section
- [ ] Do's and don'ts use table format with images above text
- [ ] Follows established heading hierarchy
- [ ] Desktop and mobile sections included
- [ ] Content is concise and practical

## File Management

### Image Organization
- Clean up source directories after moving images to public
- Remove temporary files and unused assets
- Maintain consistent file structure

### Git Workflow
- Commit frequently with descriptive messages
- Include Claude Code attribution in commits
- Push to production after completing component documentation

---

## Version History

**v1.1** - Added mandatory page structure requirement (Title → Description → Storybook → CardGrid → Usage)
**v1.0** - Initial style guide established during Button component documentation work

*This style guide should be updated as we make additional formatting decisions to ensure consistency across all component documentation.*