---
title: Navigation Patterns
description: Guidelines for helping users move through applications efficiently and intuitively.
---

# Navigation Patterns

Navigation patterns help users understand where they are, where they can go, and how to get there. Consistent navigation builds user confidence and reduces cognitive load.

## Primary Navigation

### Global Navigation
The main navigation system that appears across all pages of an application.

**When to use:**
- For top-level sections and primary user tasks
- When users need quick access to core features
- For navigation that should always be visible

**Guidelines:**
- Keep navigation items to 7 or fewer for optimal usability
- Use clear, descriptive labels
- Indicate current location with visual highlighting
- Maintain consistent ordering across sessions

### Breadcrumbs
A secondary navigation pattern showing the user's location within the site hierarchy.

**When to use:**
- In applications with deep page hierarchies
- When users need to understand their current location
- For easy navigation back to parent pages

**Guidelines:**
- Start with the highest level (usually "Home")
- Use separators (/) or arrows (>) between levels
- Make all levels except current one clickable
- Keep breadcrumb labels concise

## Secondary Navigation

### Sidebar Navigation
Vertical navigation typically used for section-specific or contextual navigation.

**When to use:**
- For category or section-specific navigation
- In admin interfaces or dashboards
- When horizontal space is limited

**Guidelines:**
- Group related items together
- Use visual hierarchy to show sub-navigation
- Consider collapsible sections for long lists
- Maintain adequate touch targets (minimum 44px)

### Tab Navigation
Horizontal navigation for organizing related content into distinct views.

**When to use:**
- For switching between related content or views
- When content is mutually exclusive
- For organizing complex forms or settings

**Guidelines:**
- Limit to 5-7 tabs for optimal usability
- Clearly indicate active/selected tab
- Use consistent tab sizing
- Consider responsive behavior for mobile

## Mobile Navigation

### Hamburger Menu
Collapsible navigation menu commonly used on mobile devices.

**When to use:**
- On mobile devices where space is limited
- For secondary navigation items
- When primary actions are more important than navigation

**Guidelines:**
- Use recognizable hamburger icon (≡)
- Provide clear open/close animations
- Include primary navigation items
- Consider adding user profile access

### Bottom Navigation
Tab bar navigation at the bottom of mobile screens.

**When to use:**
- For primary mobile navigation (3-5 main sections)
- When users frequently switch between top-level views
- For core user tasks

**Guidelines:**
- Limit to 3-5 primary sections
- Use clear icons with optional labels
- Highlight current section
- Ensure adequate touch targets

## Accessibility Requirements

- Provide keyboard navigation support
- Use proper ARIA labels and landmarks
- Maintain logical tab order
- Ensure sufficient color contrast
- Provide focus indicators
- Support screen reader navigation

## Best Practices

1. **Be Consistent** - Use the same navigation patterns throughout the application
2. **Be Predictable** - Place navigation where users expect to find it
3. **Be Clear** - Use descriptive labels that users understand
4. **Be Efficient** - Minimize the number of clicks to reach important content
5. **Be Responsive** - Adapt navigation for different screen sizes and devices