---
title: Feedback Components
description: Components that communicate system status, user actions, and important information.
---

## Feedback Components

Feedback components provide essential communication between the system and users, informing them about actions, states, errors, and important information. These components are crucial for creating transparent and trustworthy user experiences.

## Alert Components

### Success Alerts
Positive feedback confirming successful actions or states.

**Usage:**
- Form submission confirmations
- Successful data saves
- Completed processes
- Achievement notifications

**Guidelines:**
- Use green color scheme for consistency
- Include checkmark or success icon
- Keep messaging positive and specific
- Provide next steps when appropriate

### Error Alerts
Critical feedback for errors and failures.

**Usage:**
- Form validation errors
- System errors and failures
- Permission denied messages
- Critical issues requiring attention

**Guidelines:**
- Use red color scheme with high contrast
- Include error or warning icon
- Provide clear, actionable error messages
- Suggest solutions or next steps

### Warning Alerts
Important information that requires user attention.

**Usage:**
- Potential issues or risks
- Important system announcements
- Actions requiring confirmation
- Status changes requiring awareness

**Guidelines:**
- Use yellow/orange color scheme
- Include warning icon
- Explain the implications clearly
- Provide options for addressing the warning

### Info Alerts
General information and neutral announcements.

**Usage:**
- System updates and maintenance
- Feature announcements
- Helpful tips and guidance
- Neutral status updates

**Guidelines:**
- Use blue color scheme
- Include information icon
- Keep messaging concise and relevant
- Avoid overwhelming users with too many info alerts

## Toast Notifications

### Toast Types
Temporary notifications that appear and auto-dismiss.

**Success Toasts:**
- Brief confirmation messages
- "Settings saved" or "File uploaded"
- Positive action confirmations

**Error Toasts:**
- Brief error notifications
- "Connection failed" or "Save unsuccessful"
- Non-critical error messages

**Info Toasts:**
- Status updates and information
- "Download starting" or "Changes detected"
- Process notifications

### Toast Behavior
Timing and interaction patterns for toast messages.

**Guidelines:**
- Auto-dismiss after 4-6 seconds for success/info
- Persist error toasts until manually dismissed
- Allow manual dismissal with close button
- Stack multiple toasts vertically
- Animate entrance and exit smoothly

## Status Indicators

### Loading Indicators
Visual feedback during processing and data loading.

**Spinner Components:**
- Small inline spinners for button loading
- Large spinners for page/section loading
- Determinate progress bars with percentages

**Usage Guidelines:**
- Show immediately for operations over 200ms
- Provide context about what's loading
- Use appropriate size for the context
- Consider skeleton loading for better perceived performance

### Progress Bars
Visual representation of completion progress.

**Types:**
- Determinate progress with specific percentage
- Indeterminate progress for unknown duration
- Step-based progress for multi-stage processes

**Implementation:**
- Show percentage when known
- Provide time estimates when possible
- Allow cancellation of long processes
- Update progress smoothly

### Status Badges
Small indicators showing state or category information.

**Usage:**
- Item status in lists and tables
- User roles and permissions
- Process states and phases
- Category tags and labels

**Guidelines:**
- Use consistent colors for status types
- Keep text concise (1-2 words)
- Ensure sufficient contrast for accessibility
- Consider icon + text combinations

## Modal Dialogs

### Confirmation Dialogs
Critical confirmations for destructive or important actions.

**Usage:**
- Delete confirmations
- Irreversible action warnings
- Important decision points
- Data loss prevention

**Guidelines:**
- Clearly explain the consequences
- Use specific action language in buttons
- Provide escape options
- Make primary action button style match action severity

### Information Dialogs
Modal presentations of important information.

**Usage:**
- Detailed error explanations
- Important announcements
- Help and guidance content
- Terms and policy presentations

**Guidelines:**
- Keep content scannable and concise
- Provide clear navigation options
- Ensure mobile accessibility
- Support keyboard navigation

### Form Dialogs
Modal forms for focused data collection.

**Usage:**
- Quick data entry tasks
- Settings and preferences
- Contact and feedback forms
- Login and registration

**Guidelines:**
- Keep forms as short as possible
- Provide clear submission feedback
- Handle validation errors gracefully
- Support form abandonment scenarios

## Tooltips and Popovers

### Tooltips
Contextual help and additional information on hover/focus.

**Usage:**
- Icon explanations
- Form field help text
- Button and link descriptions
- Abbreviated content expansion

**Guidelines:**
- Keep content brief and helpful
- Position to avoid covering important content
- Support both mouse and keyboard users
- Don't repeat obvious information

### Popovers
Rich content overlays for detailed information.

**Usage:**
- User profile previews
- Detailed help content
- Action confirmations with context
- Rich media previews

**Guidelines:**
- Provide clear interaction affordances
- Support dismissal through multiple methods
- Position intelligently based on available space
- Ensure content is accessible

## Accessibility

### Screen Reader Support
Comprehensive feedback for assistive technologies.

**Requirements:**
- ARIA live regions for dynamic updates
- Proper role and state announcements
- Descriptive labels for all feedback components
- Clear association between triggers and feedback

### Visual Accessibility
Clear visual design for all users.

**Guidelines:**
- Sufficient color contrast for all feedback states
- Don't rely solely on color to convey information
- Clear iconography with text alternatives
- Consistent visual patterns across feedback types

### Keyboard Navigation
Full keyboard support for interactive feedback components.

**Implementation:**
- Focusable dismiss buttons for persistent alerts
- Keyboard shortcuts for common actions
- Logical tab order through modal content
- Escape key support for closing overlays

## Timing and Animation

### Animation Guidelines
Smooth, purposeful animations for feedback components.

**Principles:**
- Use animation to draw attention appropriately
- Keep animations short (200-400ms)
- Provide reduced motion alternatives
- Ensure animations don't interfere with content

### Timing Considerations
Appropriate duration for different feedback types.

**Guidelines:**
- Success messages: 4-5 seconds auto-dismiss
- Error messages: Persist until manually dismissed
- Warning messages: 6-8 seconds auto-dismiss
- Info messages: 3-4 seconds auto-dismiss

## Content Guidelines

### Message Content
Clear, helpful text for all feedback scenarios.

**Best Practices:**
- Use plain language, avoid technical jargon
- Be specific about what happened and why
- Provide actionable next steps
- Match tone to the severity of the situation

### Error Message Guidelines
Specific guidance for error communication.

**Approach:**
- Explain what went wrong
- Suggest how to fix the problem
- Avoid blame or negative language
- Provide alternative actions when possible

## Responsive Behavior

### Mobile Considerations
Feedback components adapted for mobile interfaces.

**Adaptations:**
- Full-width toasts on small screens
- Larger touch targets for dismissal
- Appropriate sizing for readability
- Consider device-specific feedback (haptics)

### Cross-Platform Consistency
Maintaining feedback patterns across different platforms.

**Guidelines:**
- Consistent timing and behavior
- Platform-appropriate visual styling
- Unified content and messaging
- Accessible across all platforms

## Best Practices

### Feedback Hierarchy
Appropriate use of different feedback mechanisms.

**Priority Levels:**
- Critical: Modal dialogs for urgent attention
- Important: Persistent alerts for awareness
- Informational: Toasts for brief updates
- Contextual: Tooltips for helpful details

### User Experience
Creating positive feedback experiences.

**Principles:**
- Provide feedback for all user actions
- Make feedback timely and relevant
- Balance information with interface cleanliness
- Test feedback comprehension with real users

### Performance
Optimizing feedback component performance.

**Considerations:**
- Lazy load complex feedback components
- Optimize animation performance
- Manage toast queue efficiently
- Consider bandwidth implications for rich feedback