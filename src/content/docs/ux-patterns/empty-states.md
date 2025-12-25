---
title: Empty States
description: Guiding users when there's no content to display and encouraging positive actions.
---

# Empty States

Empty states occur when there's no data or content to display. Well-designed empty states help users understand why content is missing and guide them toward productive actions.

## Types of Empty States

### First Use
When users encounter a feature or section for the first time.

**Common Scenarios:**
- New user onboarding screens
- Empty dashboards for new accounts
- Unused features or tools
- Fresh installations or setups

**Design Goals:**
- Welcome users and reduce anxiety
- Explain the value of the feature
- Provide clear next steps
- Make the first action obvious and easy

### User Cleared
When users have intentionally removed or completed all content.

**Common Scenarios:**
- Completed task lists
- Archived or deleted items
- Cleared notifications or messages
- Finished workflows

**Design Goals:**
- Acknowledge user accomplishment
- Provide options for new content
- Suggest related actions
- Maintain momentum in user workflow

### No Results
When searches, filters, or queries return no matching content.

**Common Scenarios:**
- Search results with no matches
- Filtered lists with no items
- Date ranges with no data
- Category selections with no content

**Design Goals:**
- Confirm search parameters were understood
- Suggest alternative search terms
- Provide ways to broaden results
- Offer related content or suggestions

### Error States
When content fails to load due to errors or system issues.

**Common Scenarios:**
- Network connectivity problems
- Server errors or timeouts
- Permission or access issues
- Data corruption or loading failures

**Design Goals:**
- Explain what went wrong in user-friendly terms
- Provide clear recovery actions
- Offer alternative paths forward
- Maintain user confidence in the system

## Content Strategy

### Messaging Tone
Appropriate communication style for different empty state contexts.

**Encouraging and Helpful:**
- Use positive, supportive language
- Focus on possibilities rather than limitations
- Provide specific guidance and next steps
- Avoid technical jargon or error codes

**Example Good Messages:**
- "Ready to create your first project?"
- "No invoices yet. Let's get started!"
- "Your dashboard will fill up once you add some data."

**Example Poor Messages:**
- "No data found"
- "Nothing here"
- "Error: 0 results returned"

### Visual Hierarchy
Organizing empty state elements for clarity and action.

**Recommended Structure:**
1. **Illustration or Icon** - Visual representation of the concept
2. **Headline** - Clear, concise explanation of the state
3. **Description** - Additional context or explanation (optional)
4. **Primary Action** - Most important next step
5. **Secondary Actions** - Alternative options (if relevant)

## Visual Design

### Illustrations and Icons
Visual elements that support the empty state message.

**Guidelines:**
- Use illustrations that match your brand style
- Keep visuals simple and purposeful
- Avoid overly complex or distracting imagery
- Ensure illustrations are accessible with alt text
- Consider empty state illustrations as part of your design system

**Common Visual Approaches:**
- **Minimalist icons** - Simple, clean iconography
- **Friendly illustrations** - Approachable, human-centered imagery
- **Product-specific graphics** - Visual representations of the missing content type
- **Abstract shapes** - Geometric patterns that create visual interest

### Layout and Spacing
Positioning empty states within the broader interface.

**Best Practices:**
- Center content within the available space
- Use generous white space around elements
- Maintain consistent spacing with other UI patterns
- Consider the container context (full page vs. widget)
- Ensure responsive behavior across screen sizes

## Actionable Elements

### Primary Actions
The main action users should take from an empty state.

**Guidelines:**
- Make the primary action visually prominent
- Use action-oriented button text ("Create Project", "Add Invoice")
- Ensure the action directly addresses the empty state
- Place buttons consistently within the empty state layout

### Secondary Actions
Supporting actions that provide alternative paths.

**Common Secondary Actions:**
- Import or upload existing data
- Browse templates or examples
- Access help documentation
- Contact support or get assistance
- Return to previous screen

### Progressive Disclosure
Revealing additional options without overwhelming users.

**Techniques:**
- Expandable sections for advanced options
- "Show more" links for additional actions
- Contextual help that appears on demand
- Modal overlays for complex workflows

## Context-Specific Patterns

### Dashboard Empty States
When dashboard widgets or sections have no data.

**Considerations:**
- Show value proposition of each widget
- Provide setup or configuration actions
- Link to data sources or integrations
- Offer sample data or demo mode

### List Empty States
When lists, tables, or collections have no items.

**Patterns:**
- Show add/create actions prominently
- Provide import or bulk creation options
- Display list headers/structure even when empty
- Offer filtering or search guidance

### Search Empty States
When search queries return no results.

**Elements:**
- Confirm the search query
- Suggest alternative search terms
- Provide spelling corrections
- Offer to broaden search criteria
- Link to popular or trending content

## Mobile Considerations

### Screen Space Optimization
Adapting empty states for smaller screens.

**Strategies:**
- Simplify or remove illustrations on small screens
- Stack elements vertically for better flow
- Use shorter, more concise messaging
- Ensure touch targets meet size requirements
- Consider thumb-friendly button placement

### Touch Interactions
Optimizing empty states for mobile interaction patterns.

**Guidelines:**
- Use appropriate button sizes for touch
- Consider swipe gestures where relevant
- Provide clear visual feedback for interactions
- Optimize for one-handed use when possible

## Accessibility

### Screen Reader Support
Making empty states understandable for assistive technology.

**Requirements:**
- Provide meaningful alt text for images
- Use proper heading structure
- Ensure logical reading order
- Include ARIA labels where helpful
- Test with actual screen readers

### Keyboard Navigation
Ensuring empty states work with keyboard-only interaction.

**Guidelines:**
- Make all interactive elements keyboard accessible
- Provide clear focus indicators
- Use logical tab order
- Include skip links where appropriate
- Test keyboard navigation thoroughly

## Best Practices

1. **Be Empathetic** - Understand user emotions in empty states
2. **Be Helpful** - Provide clear guidance on next steps
3. **Be Contextual** - Tailor empty states to specific situations
4. **Be Consistent** - Use similar patterns across your application
5. **Be Actionable** - Always provide a way forward
6. **Be Honest** - Don't hide system limitations or errors

## Measurement and Optimization

### Metrics to Track
Understanding empty state effectiveness.

**Key Metrics:**
- Conversion rate from empty state to first action
- Time spent on empty state screens
- User drop-off rates at empty states
- Support ticket volume related to empty states

### A/B Testing
Optimizing empty state design and messaging.

**Test Variables:**
- Different illustration styles
- Variations in messaging tone
- Alternative call-to-action text
- Different layout approaches
- Various secondary action options