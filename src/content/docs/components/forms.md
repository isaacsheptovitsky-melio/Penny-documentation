---
title: Form Components
description: Input fields, selectors, and form controls for collecting and validating user data.
---

## Form Components

Form components are essential for collecting user input and data. They must be accessible, intuitive, and provide clear feedback to ensure successful form completion.

## Input Fields

### Text Input
Basic text input for single-line content.

**Usage:**
- Names, email addresses, single-line responses
- Search fields and filters
- Short text content

**Guidelines:**
- Provide clear labels above or within the field
- Use placeholder text sparingly and never as labels
- Implement proper input types for better mobile keyboards
- Validate input in real-time when possible

### Textarea
Multi-line text input for longer content.

**Usage:**
- Comments and descriptions
- Messages and feedback
- Long-form content entry

**Guidelines:**
- Set appropriate default height (3-4 lines)
- Allow vertical resizing when needed
- Provide character count when there are limits
- Consider auto-expanding for better UX

### Password Input
Secure text input with visibility toggle.

**Usage:**
- Login and registration forms
- Password change interfaces
- Secure data entry

**Guidelines:**
- Always include show/hide password option
- Provide clear password requirements
- Don't mask password during entry if not required
- Support password managers and autofill

## Selection Components

### Select Dropdown
Single-choice selection from a list of options.

**Usage:**
- Country/state selection
- Category choices
- Limited option sets

**Guidelines:**
- Use when there are 5+ options
- Provide search/filter for long lists
- Include clear default selection or placeholder
- Consider radio buttons for fewer than 5 options

### Multi-Select
Multiple choice selection from a list of options.

**Usage:**
- Tag selection
- Feature preferences
- Bulk operations

**Guidelines:**
- Show selected count when collapsed
- Provide clear way to remove selections
- Consider checkbox lists for better accessibility
- Limit visible selections to avoid overwhelming UI

### Radio Buttons
Single-choice selection from visible options.

**Usage:**
- Payment methods
- Subscription plans
- Binary or few choices

**Guidelines:**
- Use for 2-5 options maximum
- Always have one option selected by default
- Group related options visually
- Ensure labels are clickable

### Checkboxes
Multiple-choice selection from visible options.

**Usage:**
- Terms and conditions
- Feature toggles
- Multiple selections

**Guidelines:**
- Use for independent choices
- Provide clear labels for each option
- Consider indeterminate state for parent/child relationships
- Group related checkboxes logically

## Specialized Inputs

### Date Picker
Calendar-based date selection interface.

**Usage:**
- Birth dates and deadlines
- Event scheduling
- Date range selection

**Guidelines:**
- Provide keyboard input option alongside picker
- Support various date formats
- Include clear date validation
- Consider accessibility for screen readers

### File Upload
Interface for selecting and uploading files.

**Usage:**
- Document submission
- Profile photo upload
- Bulk file processing

**Guidelines:**
- Support drag-and-drop when possible
- Show clear file type and size limitations
- Provide upload progress feedback
- Allow file removal before submission

### Number Input
Numeric input with increment/decrement controls.

**Usage:**
- Quantities and amounts
- Age and numeric values
- Measurement inputs

**Guidelines:**
- Include appropriate min/max values
- Provide clear step increments
- Consider currency formatting for money
- Support both typing and button controls

## Form Layout

### Field Groups
Related form fields grouped together.

**Guidelines:**
- Use fieldsets and legends for screen readers
- Visually group related fields
- Maintain consistent spacing
- Provide clear section headers

### Inline vs Stacked
Layout options for form field arrangement.

**Stacked (Recommended):**
- Easier to scan and complete
- Better for mobile devices
- Accommodates longer labels
- Reduces cognitive load

**Inline:**
- Use sparingly for short, related fields
- Ensure adequate spacing between fields
- Maintain alignment and visual hierarchy
- Consider responsive behavior

## Validation and Feedback

### Real-time Validation
Immediate feedback as users complete fields.

**Guidelines:**
- Validate on blur, not on every keystroke
- Show success states for completed fields
- Provide specific, actionable error messages
- Don't overwhelm with too many simultaneous errors

### Error Handling
Clear communication of validation errors.

**Best Practices:**
- Place error messages immediately below fields
- Use clear, plain language
- Explain how to fix the error
- Maintain error visibility until resolved

### Success States
Positive feedback for correctly completed fields.

**Implementation:**
- Subtle visual indicators (green checkmark)
- Don't overwhelm with too much positive feedback
- Focus on final form submission success
- Consider progressive enhancement

## Form Actions

### Submit Buttons
Primary action for form completion.

**Guidelines:**
- Use specific labels like "Create Account" vs "Submit"
- Place submit button at the bottom right
- Disable during processing to prevent double-submission
- Provide clear loading states

### Secondary Actions
Alternative actions like cancel or reset.

**Guidelines:**
- Place cancel buttons to the left of submit
- Use caution with reset buttons
- Provide confirmation for destructive actions
- Consider save as draft functionality

## Accessibility

### Labels and Instructions
Clear identification and guidance for all fields.

**Requirements:**
- Every field must have an associated label
- Use required field indicators
- Provide helpful instructions before fields
- Link error messages to relevant fields

### Keyboard Navigation
Full keyboard accessibility for all form elements.

**Implementation:**
- Logical tab order through form
- Skip links for long forms
- Proper focus management
- Enter key submission where appropriate

### Screen Reader Support
Comprehensive support for assistive technologies.

**Requirements:**
- ARIA labels and descriptions
- Fieldset and legend for grouped fields
- Role and state announcements
- Clear error message association

## Mobile Considerations

### Touch Targets
Appropriate sizing for touch interaction.

**Guidelines:**
- Minimum 44px touch target size
- Adequate spacing between interactive elements
- Consider thumb-friendly placement
- Test on various device sizes

### Input Types
Mobile-optimized keyboards for different input types.

**Implementation:**
- Use input type="email" for email fields
- input type="tel" for phone numbers
- input type="number" for numeric input
- Consider inputmode attribute for additional control

## Best Practices

### Progressive Enhancement
Building forms that work across all capabilities.

**Approach:**
- Start with basic HTML forms
- Enhance with JavaScript progressively
- Ensure core functionality without JavaScript
- Graceful degradation for older browsers

### Performance
Optimizing form performance and user experience.

**Considerations:**
- Minimize form length when possible
- Use smart defaults and pre-population
- Implement client-side validation before server validation
- Consider progressive disclosure for complex forms

### Data Privacy
Respecting user data and privacy concerns.

**Guidelines:**
- Only collect necessary information
- Clearly explain why data is needed
- Provide privacy policy links
- Secure sensitive data appropriately