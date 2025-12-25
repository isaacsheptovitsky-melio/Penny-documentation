---
title: Buttons
description: Interactive elements that trigger actions and navigate users through the application.
---

## Buttons

Buttons are interactive elements that trigger actions, submit forms, and guide users through workflows. They are one of the most important components for user interaction and should be used consistently across the application.

## Button Types

### Primary Buttons
Used for the most important action on a page or in a section.

**Usage Guidelines:**
- Only one primary button should be visible per page or modal
- Use for main actions like "Save", "Continue", "Submit"
- Always place primary buttons on the right in button groups
- Ensure sufficient contrast for accessibility

**When to use:**
- Form submissions
- Primary calls-to-action
- Confirmation actions in dialogs

### Secondary Buttons
Used for important but not primary actions.

**Usage Guidelines:**
- Can have multiple secondary buttons on a page
- Use for actions like "Cancel", "Back", "Edit"
- Place to the left of primary buttons in groups
- Should be visually distinct but not compete with primary buttons

**When to use:**
- Alternative actions
- Navigation actions
- Secondary calls-to-action

### Tertiary Buttons (Ghost/Text)
Used for subtle actions that don't require visual prominence.

**Usage Guidelines:**
- Use sparingly to avoid visual noise
- Good for less important actions
- Often used for "Learn more" or "Skip" actions
- Should maintain accessibility requirements

**When to use:**
- Optional actions
- Link-like behaviors within content
- Actions in dense interfaces

## Button States

### Default State
The normal, interactive state when the button is ready for user interaction.

### Hover State
Visual feedback when users hover over the button with a cursor.

### Active/Pressed State
Visual indication when the button is being clicked or tapped.

### Focus State
Keyboard navigation indicator that shows which button has focus.

### Disabled State
Non-interactive state when the button cannot be used.

**Disabled Button Guidelines:**
- Use sparingly and provide clear reasons
- Consider loading states instead of disabled states
- Ensure disabled buttons are still accessible to screen readers
- Provide alternative ways to complete actions when possible

### Loading State
Shows that an action is in progress after the button is clicked.

**Loading State Guidelines:**
- Replace button text with loading indicator
- Disable button interaction during loading
- Provide clear visual feedback about progress
- Set appropriate timeout expectations

## Button Sizes

### Large (L)
Used for prominent actions and mobile interfaces.
- Height: 48px
- Padding: 16px horizontal
- Font: Body 2 Semi (16px)

### Medium (M)
Standard size for most use cases.
- Height: 40px
- Padding: 16px horizontal
- Font: Body 3 Semi (14px)

### Small (S)
Used in compact interfaces and dense layouts.
- Height: 32px
- Padding: 12px horizontal
- Font: Body 4 Semi (12px)

## Icon Buttons

### Icon with Text
Combines an icon with descriptive text for clarity.

**Guidelines:**
- Place icon to the left of text (left-to-right languages)
- Ensure 8px spacing between icon and text
- Use 16px icons for medium buttons, 14px for small
- Choose icons that clearly represent the action

### Icon Only
Uses only an icon without text labels.

**Guidelines:**
- Always provide accessible labels (aria-label or title)
- Use only for universally understood actions
- Ensure minimum 44px touch target size
- Consider tooltips for additional context

## Button Groups

### Horizontal Groups
Multiple buttons arranged side by side.

**Layout Guidelines:**
- Primary button on the right
- Secondary/tertiary buttons to the left
- 12px spacing between buttons
- Ensure consistent alignment

### Vertical Groups
Buttons stacked vertically for mobile or narrow layouts.

**Layout Guidelines:**
- Primary button at the top
- 8px spacing between stacked buttons
- Full-width buttons in mobile contexts
- Maintain consistent order from horizontal layout

## Accessibility

### Keyboard Navigation
- All buttons must be focusable with Tab key
- Activate with Enter or Space keys
- Clear focus indicators required
- Logical tab order maintained

### Screen Reader Support
- Descriptive button text that explains the action
- Use aria-label for icon-only buttons
- Provide context for ambiguous labels
- Announce state changes (loading, disabled)

### Visual Accessibility
- Minimum 3:1 contrast ratio for text
- 4.5:1 contrast for smaller text
- Focus indicators must be clearly visible
- Don't rely solely on color to convey information

## Content Guidelines

### Button Text
- Use action verbs that clearly describe what happens
- Keep text concise (1-3 words ideal)
- Use sentence case, not title case
- Be specific: "Save Changes" vs "Save"

### Writing Style
- Active voice: "Delete item" not "Item will be deleted"
- Positive framing when possible
- Consistent terminology across the application
- Avoid technical jargon in user-facing buttons

## Best Practices

### Do's
- Use consistent button styles throughout the application
- Provide clear visual hierarchy with button types
- Ensure buttons are large enough for touch interaction
- Give immediate feedback for button interactions
- Place primary actions where users expect them

### Don'ts
- Don't use too many primary buttons on one page
- Don't make buttons too small for accessibility
- Don't use vague labels like "OK" or "Submit"
- Don't disable buttons without clear explanation
- Don't use buttons for navigation (use links instead)

## Implementation Notes

### Technical Considerations
- Buttons should prevent double-clicking during async operations
- Implement proper loading states for form submissions
- Ensure buttons work with keyboard navigation
- Test button behavior across different screen sizes

### Performance
- Optimize button animations for smooth interactions
- Consider button rendering performance in large lists
- Implement proper error handling for failed actions
- Cache button states appropriately