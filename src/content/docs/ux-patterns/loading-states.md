---
title: Loading States
description: Managing user expectations during processing and data retrieval.
---

# Loading States

Loading states provide feedback during system processing, helping users understand that their action is being processed and maintaining engagement during wait times.

## Types of Loading States

### Determinate Progress
When the system knows how much work remains and can show specific progress.

**When to use:**
- File uploads with known size
- Multi-step processes with defined stages
- Data imports with countable items
- Form submissions with multiple validation steps

**Implementation:**
- Use progress bars with percentage completion
- Show current step and total steps
- Include estimated time remaining when possible
- Provide cancel option for long processes

### Indeterminate Progress
When the system is working but duration is unknown.

**When to use:**
- Initial page loads
- Search operations
- API calls with variable response times
- Complex calculations or processing

**Implementation:**
- Use spinning indicators or animated elements
- Avoid fake progress that doesn't reflect actual progress
- Include descriptive text about what's happening
- Set appropriate timeout expectations

## Loading Patterns

### Skeleton Screens
Placeholder content that mimics the structure of the final interface.

**When to use:**
- Content loading for familiar layouts
- List items and cards loading
- Profile pages and dashboards
- Any interface with predictable structure

**Benefits:**
- Perceived performance improvement
- Maintains layout stability
- Provides context about incoming content
- Reduces jarring layout shifts

**Guidelines:**
- Match the structure of final content
- Use subtle animation for visual interest
- Maintain consistent spacing and proportions
- Avoid overuse in simple loading scenarios

### Progressive Loading
Loading content in stages, showing the most important elements first.

**When to use:**
- Complex pages with multiple data sources
- News feeds and social media streams
- E-commerce product listings
- Dashboard widgets with varying load times

**Strategy:**
- Load critical content first (text, navigation)
- Progressive enhancement for images and media
- Load above-the-fold content before below-the-fold
- Graceful degradation for slow connections

### Lazy Loading
Loading content only when it's needed or about to be viewed.

**When to use:**
- Long lists with many items
- Image galleries and media content
- Infinite scroll implementations
- Tab interfaces with heavy content

**Implementation:**
- Use intersection observer for viewport detection
- Provide loading indicators for incoming content
- Implement proper error handling for failed loads
- Consider preloading for anticipated user actions

## Button Loading States

### Processing States
Visual feedback during button action processing.

**Standard Pattern:**
1. User clicks button
2. Button shows loading state (spinner + "Processing...")
3. Button disabled to prevent double-submission
4. Success or error feedback on completion

**Guidelines:**
- Change button text to indicate current action
- Include small spinner or loading indicator
- Maintain button size to prevent layout shift
- Disable button during processing
- Provide clear feedback on completion

### Form Submission Loading
Specialized loading states for form processing.

**Best Practices:**
- Show loading state on submit button
- Disable form fields during processing
- Maintain form data in case of errors
- Provide progress indication for multi-step validation
- Clear loading state on completion or error

## Page Loading Patterns

### Initial Load
Managing the experience when users first visit a page.

**Strategies:**
- Show basic layout structure immediately
- Progressive enhancement of content
- Critical CSS inlined for fastest rendering
- Meaningful loading messages
- Fallback content for failed loads

### Navigation Loading
Feedback during page transitions and route changes.

**Approaches:**
- Top-of-page progress bars
- Fade transitions between pages
- Breadcrumb loading states
- Persistent navigation during transitions

## Data Loading

### Search Results
Loading states for search and filtering operations.

**Patterns:**
- Immediate loading indicator on search input
- Results area placeholder during search
- Progressive loading for large result sets
- Clear indication when no results found
- Maintain search query during loading

### Real-time Data
Loading states for live updating content.

**Considerations:**
- Subtle indicators for background updates
- Batch updates to prevent UI thrashing
- Clear timestamps for last update
- Graceful handling of connection issues
- User control over refresh frequency

## Error and Timeout Handling

### Loading Failures
When loading processes fail or timeout.

**Recovery Options:**
- Retry button with exponential backoff
- Manual refresh option
- Alternative data sources when available
- Graceful degradation to cached content
- Clear error messaging with next steps

### Connection Issues
Handling poor or lost network connectivity.

**Strategies:**
- Offline mode indicators
- Cached content when available
- Queue actions for when connection returns
- Progressive enhancement based on connection quality
- User notification of connection status

## Accessibility

### Screen Reader Support
- Use ARIA live regions for loading announcements
- Provide descriptive text for loading indicators
- Announce completion of loading processes
- Use proper roles and properties for progress elements

### Visual Accessibility
- Ensure sufficient contrast for loading indicators
- Don't rely solely on color for loading states
- Provide alternative text for visual loading elements
- Consider reduced motion preferences

### Keyboard Navigation
- Maintain focus management during loading
- Provide keyboard alternatives for loading interactions
- Ensure loading states don't trap focus
- Clear focus indicators throughout loading process

## Performance Considerations

### Perceived Performance
- Use optimistic UI updates when appropriate
- Implement progressive loading strategies
- Cache frequently accessed data
- Preload anticipated user actions
- Minimize layout shifts during loading

### Actual Performance
- Optimize critical rendering path
- Implement efficient data fetching strategies
- Use appropriate caching mechanisms
- Monitor and optimize loading times
- Consider connection quality adaptations

## Best Practices

1. **Be Immediate** - Show loading feedback within 100ms of user action
2. **Be Informative** - Tell users what's happening during the wait
3. **Be Honest** - Don't fake progress that doesn't reflect reality
4. **Be Respectful** - Provide escape routes for long operations
5. **Be Consistent** - Use similar loading patterns throughout the application
6. **Be Accessible** - Ensure all users can understand loading states

## Timing Guidelines

- **0-100ms**: Instantaneous, no loading indicator needed
- **100ms-1s**: Brief loading indicator appropriate
- **1-10s**: Progress indicator with descriptive text
- **10s+**: Progress indicator with cancel option and estimated time