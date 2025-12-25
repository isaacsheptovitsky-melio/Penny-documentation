---
title: Error Handling
description: Helping users understand and recover from errors gracefully.
---

# Error Handling

Error handling patterns help users understand what went wrong and provide clear paths to recovery. Good error handling builds user confidence and prevents frustration during unexpected situations.

## Types of Errors

### User Input Errors
Errors caused by incorrect or invalid user input.

**Common Examples:**
- Form validation failures
- Invalid format entries (email, phone, etc.)
- Missing required information
- Character limit violations

**Handling Strategy:**
- Validate input in real-time when possible
- Provide specific guidance on correct format
- Highlight problematic fields clearly
- Preserve user input to avoid re-entry

### System Errors
Errors caused by technical problems or system failures.

**Common Examples:**
- Server errors (500, 503, etc.)
- Network connectivity issues
- Database connection problems
- Third-party service failures

**Handling Strategy:**
- Use user-friendly language instead of technical codes
- Provide estimated resolution time when possible
- Offer alternative actions or workarounds
- Include contact information for persistent issues

### Permission Errors
Errors related to user access rights and permissions.

**Common Examples:**
- Unauthorized access attempts
- Expired session tokens
- Insufficient privileges for actions
- Account suspension or restrictions

**Handling Strategy:**
- Explain permission requirements clearly
- Provide guidance on obtaining necessary access
- Offer appropriate login or upgrade paths
- Maintain user dignity and avoid blame

### Data Errors
Errors related to data integrity, availability, or processing.

**Common Examples:**
- Corrupted or missing files
- Outdated information conflicts
- Import/export failures
- Synchronization issues

**Handling Strategy:**
- Explain what data is affected
- Provide recovery or backup options
- Offer manual alternatives when possible
- Preserve as much user work as possible

## Error Message Guidelines

### Message Content
Writing clear, helpful error messages.

**Best Practices:**
- Use plain language, avoid technical jargon
- Be specific about what went wrong
- Provide actionable next steps
- Take responsibility with positive tone
- Avoid blaming the user

**Good Examples:**
- "Please enter a valid email address (example: user@domain.com)"
- "Your password must be at least 8 characters long"
- "We're having trouble connecting to our servers. Please try again in a few minutes."

**Poor Examples:**
- "Invalid input"
- "Error 500: Internal server error"
- "You entered the wrong information"

### Message Placement
Positioning error messages for maximum visibility and context.

**Inline Errors:**
- Position near the relevant form field or content
- Use red color coding with appropriate icons
- Ensure sufficient contrast and readability
- Clear errors when issues are resolved

**Page-Level Errors:**
- Place at top of page or form
- Use prominent but not alarming styling
- Include links to specific problematic areas
- Persist until user acknowledges or resolves

**Global Errors:**
- Use notification systems for system-wide issues
- Position consistently (typically top of screen)
- Allow user dismissal when appropriate
- Avoid overwhelming with multiple simultaneous errors

## Error Recovery

### Immediate Recovery
Quick fixes users can apply right away.

**Strategies:**
- Auto-correct obvious typos when possible
- Provide format examples or templates
- Offer suggestions for similar alternatives
- Enable quick retry actions for transient errors

### Progressive Recovery
Step-by-step guidance for complex error resolution.

**Approaches:**
- Break resolution into manageable steps
- Provide checkboxes or progress indicators
- Save progress between recovery attempts
- Offer help or contact options at each step

### Alternative Paths
Providing workarounds when primary actions fail.

**Options:**
- Offline alternatives for connectivity issues
- Manual processes for automated failures
- Simplified versions of complex features
- Contact methods for personalized assistance

## Error Prevention

### Proactive Validation
Catching errors before they occur.

**Techniques:**
- Real-time input validation
- Format hints and examples
- Constraint indicators (character limits, etc.)
- Progressive disclosure to reduce complexity

### User Guidance
Helping users avoid common mistakes.

**Methods:**
- Clear instructions and labeling
- Examples of correct input format
- Contextual help and tooltips
- Progressive onboarding for complex features

### System Resilience
Building systems that gracefully handle problems.

**Strategies:**
- Graceful degradation for feature failures
- Automatic retry mechanisms with exponential backoff
- Fallback options for primary service failures
- Comprehensive error logging and monitoring

## Specific Error Scenarios

### Form Validation Errors
Handling input validation failures effectively.

**Pattern:**
1. Validate on field blur or form submission
2. Show specific error message near problematic field
3. Use red styling with error icons
4. Maintain form state and user input
5. Clear errors when field is corrected
6. Provide summary of all errors at form level

### Network and Connectivity Errors
Managing connection-related problems.

**Approaches:**
- Detect offline state and show appropriate messaging
- Queue actions for when connection returns
- Provide offline alternatives when possible
- Show connection status indicators
- Implement automatic retry with user feedback

### Authentication and Session Errors
Handling login and session management issues.

**Strategies:**
- Clear session expiration warnings before timeout
- Preserve user work during re-authentication
- Provide easy path back to intended action
- Explain security reasons for session limits
- Offer "remember me" options where appropriate

### File Upload Errors
Managing file upload and processing failures.

**Elements:**
- Clear file size and format requirements
- Progress indicators with error states
- Specific error messages for different failure types
- Resume capability for interrupted uploads
- Alternative upload methods (drag-drop, browse, etc.)

## Accessibility

### Screen Reader Support
Making errors understandable for assistive technology.

**Requirements:**
- Use ARIA live regions for dynamic error announcements
- Associate error messages with form controls using aria-describedby
- Provide meaningful error message text
- Ensure error messages are announced when they appear

### Visual Accessibility
Ensuring errors are perceivable by all users.

**Guidelines:**
- Use sufficient color contrast for error text
- Don't rely solely on color to indicate errors
- Include icons or symbols alongside color coding
- Ensure error messages are clearly distinguishable

### Keyboard Accessibility
Supporting keyboard-only error handling workflows.

**Considerations:**
- Focus management during error states
- Keyboard shortcuts for common error recovery actions
- Logical tab order through error messages and recovery options
- Clear focus indicators on error-related elements

## Mobile Considerations

### Touch-Friendly Error Handling
Optimizing error experiences for mobile devices.

**Guidelines:**
- Ensure error messages are readable on small screens
- Use appropriate touch target sizes for error recovery actions
- Consider thumb-friendly placement of recovery options
- Optimize error message length for mobile viewing

### Mobile-Specific Errors
Handling errors unique to mobile experiences.

**Scenarios:**
- Orientation change interruptions
- Background app termination
- Mobile network connectivity issues
- Touch input accuracy problems

## Best Practices

1. **Be Human** - Write error messages in friendly, conversational language
2. **Be Specific** - Provide exact information about what went wrong
3. **Be Helpful** - Always include actionable next steps
4. **Be Forgiving** - Make recovery as easy as possible
5. **Be Preventive** - Help users avoid errors in the first place
6. **Be Consistent** - Use similar patterns and language across all errors

## Testing and Monitoring

### Error Testing
Ensuring error handling works effectively.

**Testing Types:**
- Unit tests for error conditions
- Integration tests for system failures
- User testing of error recovery workflows
- Accessibility testing of error states

### Error Monitoring
Tracking and improving error experiences.

**Metrics:**
- Error occurrence rates and patterns
- User recovery success rates
- Time to error resolution
- Support contact rates following errors
- User satisfaction with error handling