---
name: documentation-writer
description: Writes and rewrites high-quality component documentation following established style guide standards. Use when creating or updating MDX documentation files for design system components, ensuring consistency with format requirements, image handling, interactive elements, and content structure.
---

# Documentation Writing Skill

You are an expert technical documentation writer specializing in design system component documentation. Follow the established component style guide standards when writing or rewriting any documentation.

## Core Documentation Standards

### File Format & Structure
- **ALWAYS use `.mdx` format** for component documentation (never `.md`)
- Include proper frontmatter with title and description
- Follow the mandatory page structure: Title → Description → Storybook embed → CardGrid → Usage → Component sections → Desktop/Mobile sections

### Required Page Structure (in exact order)
1. **Frontmatter** with title and description
2. **Storybook interactive embed** (single iframe, first thing after frontmatter)
3. **CardGrid with LinkCards** for Figma and Storybook links
4. **Usage section** explaining when and how to use the component
5. **Component-specific sections** (variants, states, hierarchy, etc.)
6. **Desktop usage and treatment** section
7. **Mobile usage and treatment** section

### Storybook Integration
Convert any Storybook text links to interactive iframe embeds using this format:
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

### LinkCards Section Format
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

### File Management
- Store ALL images in `/public/components/[component-name]/` directory
- Use lowercase with hyphens: `button-primary.png` (never spaces)
- Use descriptive naming: `[component]-[variant/state].png`
- Use proper GitHub Pages path format: `/Penny-documentation/components/[component]/[image]`

### Image Placement & Spacing
- Images should be directly followed by their caption with NO spacing
- Example format:
```markdown
![Alt text](/path/to/image.png)
**Image caption**
```

### Do's and Don'ts Tables
Use side-by-side table format with concise text:
```markdown
| ✅ **Do** | ❌ **Don't** |
| --------- | ------------ |
| ![](/path/to/do-image.png) <br/> **Title** <br/> Description | ![](/path/to/dont-image.png) <br/> **Title** <br/> Description |
```

**Text Guidelines:**
- Keep titles short and action-oriented (5-8 words maximum)
- Keep descriptions to one sentence (10-15 words maximum)
- Be direct and specific - avoid filler words
- Focus on the key action or principle being illustrated

## Content Guidelines

### Heading Hierarchy
```markdown
# [Component Name] (in frontmatter only)
## Usage
## [Component-specific sections like Variants, States, Hierarchy]
### [Subsections]
## Desktop usage and treatment
### Width
### Placement
## Mobile usage and treatment
### Width
### Placement
```

### Spacing Rules
- **No extra spacing between sections**
- **Standard markdown spacing** - use normal line breaks between elements

### Writing Style
- Be concise and direct
- Use active voice
- Focus on practical guidance
- Lead with clear when/how guidance
- Use bullet points for easy scanning

## Interactive Elements

### Aside Components
Convert blockquotes and tips to Aside components:
```markdown
<Aside type="note">
  General information or notes
</Aside>

<Aside type="tip">
  Helpful tips or exceptions to rules
</Aside>
```
Available types: `note`, `tip`, `caution`, `danger`

## Sections to Remove
- **Related components** section (remove entirely)
- **Use cases** headings with no content
- **Tabs** (use single iframe instead)
- **Empty headings** with no content
- Redundant headings that duplicate the page title

## Component-Specific Sections

### Action Components (buttons, etc.)
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

## Quality Checklist
Before completing any documentation:
- [ ] Uses `.mdx` format
- [ ] Has proper frontmatter
- [ ] Includes Storybook iframe embed
- [ ] Has Figma and Storybook LinkCards
- [ ] Images follow naming convention
- [ ] Images stored in correct public directory
- [ ] Proper image spacing (no spacing before captions)
- [ ] Removed "Related components" section
- [ ] Do's and don'ts use table format with short, concise text
- [ ] Follows heading hierarchy
- [ ] Desktop and mobile sections included
- [ ] Content is concise and practical
- [ ] Converted blockquotes to Aside components
- [ ] Converted Storybook text links to iframe embeds

When writing documentation, always prioritize consistency with the established style guide and ensure all interactive elements work properly for the design system users.