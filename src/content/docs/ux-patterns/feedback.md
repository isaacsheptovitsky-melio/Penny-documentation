---
title: Feedback Patterns
description: How we communicate system status, success states, and user actions to build trust and clarity.
---

# Feedback Patterns

Feedback patterns ensure users understand what's happening in the system, whether their actions were successful, and what they should do next. Good feedback builds trust and confidence in the user experience.

## Types of Feedback

### Success Feedback
Confirmation that user actions completed successfully.

**When to use:**
- After form submissions
- When data is saved or updated
- After successful transactions
- When tasks complete successfully

**Implementation:**
- Use green color scheme with checkmark icons
- Position near the relevant action or at top of page
- Include specific details about what happened
- Auto-dismiss after appropriate time (4-6 seconds)

### Error Feedback
Communication when something goes wrong or fails.

**When to use:**
- When form validation fails
- During system errors or failures
- When user actions cannot be completed
- For connectivity or timeout issues

**Implementation:**
- Use red color scheme with warning/error icons
- Provide specific, actionable error messages
- Position near the source of the error
- Persist until user acknowledges or fixes the issue

### Warning Feedback
Alerts for potentially problematic situations that need attention.

**When to use:**
- Before destructive actions (delete, remove)
- When system limits are approaching
- For data that may be lost
- When actions have significant consequences

**Implementation:**
- Use yellow/orange color scheme with warning icons
- Include clear call-to-action buttons
- Explain the consequences of proceeding
- Provide alternative actions when possible

### Informational Feedback
Neutral communication about system status or helpful information.

**When to use:**
- For system maintenance notifications
- Providing helpful tips or guidance
- Sharing feature updates or announcements
- Contextual help information

**Implementation:**
- Use blue color scheme with info icons
- Keep messaging concise and relevant
- Position appropriately for context
- Allow users to dismiss when appropriate

## Feedback Delivery Methods

### Toast Notifications
Temporary messages that appear overlay-style on the screen.

**Best for:**
- Quick confirmations
- Non-critical information
- Actions that don't require immediate attention

**Guidelines:**
- Position consistently (typically top-right or bottom)
- Auto-dismiss with appropriate timing
- Don't stack too many simultaneously
- Include dismiss button for user control

### Inline Messages
Feedback that appears within the page content flow.

**Best for:**
- Form validation messages
- Section-specific feedback
- Persistent information that needs attention

**Guidelines:**
- Position near relevant content
- Use appropriate spacing and visual hierarchy
- Maintain clear association with related elements
- Style consistently with surrounding content

### Modal Dialogs
Focused feedback that requires user attention or action.

**Best for:**
- Critical errors that block workflow
- Destructive action confirmations
- Important system announcements

**Guidelines:**
- Use sparingly for truly important messages
- Include clear primary and secondary actions
- Prevent background interaction during display
- Ensure easy dismissal method

### Status Indicators
Persistent visual cues about system or content status.

**Best for:**
- Connection status indicators
- Save status displays
- Content synchronization states
- User online/offline status

**Guidelines:**
- Keep indicators subtle but visible
- Use consistent iconography and colors
- Update in real-time when possible
- Provide tooltips for additional context

## Timing and Animation

### Message Duration
Appropriate display time based on content and importance.

**Guidelines:**
- Success messages: 4-6 seconds
- Error messages: Persist until addressed
- Warning messages: User-controlled dismissal
- Info messages: 6-8 seconds or user dismissal

### Animation and Transitions
Smooth visual feedback that feels responsive and polished.

**Best Practices:**
- Use subtle easing for appearance/dismissal
- Keep animations under 300ms for responsiveness
- Provide reduced motion options for accessibility
- Ensure animations enhance rather than distract

## Contextual Feedback

### Form Validation
Real-time and submission feedback for form inputs.

**Patterns:**
- Real-time validation on field blur
- Inline success indicators for completed fields
- Summary error messages for form-level issues
- Clear indication of required vs. optional fields

### Loading and Processing
Feedback during system processing and data loading.

**Approaches:**
- Progress bars for determinate processes
- Spinners for indeterminate loading
- Skeleton screens for content loading
- Estimated time indicators for long processes

### Empty States
Feedback when no content or data is available.

**Elements:**
- Helpful illustration or icon
- Clear explanation of the empty state
- Actionable next steps for users
- Guidance on how to populate the area

## Accessibility Considerations

### Screen Reader Support
- Use proper ARIA live regions for dynamic messages
- Provide meaningful text for screen readers
- Ensure messages are announced appropriately
- Use semantic HTML for message structure

### Visual Accessibility
- Maintain sufficient color contrast ratios
- Don't rely solely on color to communicate meaning
- Use icons and text together for clarity
- Ensure focus management for keyboard users

### Motor Accessibility
- Provide adequate target sizes for interactive feedback
- Ensure touch targets meet minimum size requirements
- Consider timing for users with motor impairments
- Provide alternative interaction methods

## Best Practices

1. **Be Immediate** - Provide feedback as soon as possible after user actions
2. **Be Specific** - Give clear, actionable information about what happened
3. **Be Consistent** - Use the same patterns and styling throughout the application
4. **Be Contextual** - Show feedback where users expect to see it
5. **Be Accessible** - Ensure all users can perceive and understand feedback
6. **Be Helpful** - Guide users toward successful task completion

## Common Anti-patterns

- **Generic error messages** - "Something went wrong" without specifics
- **No feedback** - Leaving users unsure if actions completed
- **Overwhelming notifications** - Too many messages at once
- **Poor timing** - Messages that disappear too quickly or persist too long
- **Inconsistent styling** - Different patterns for similar feedback types