---
title: Data Display Patterns
description: Patterns for presenting information in clear, scannable, and actionable formats.
---

# Data Display Patterns

Effective data display patterns help users quickly understand, scan, and act on information. These patterns ensure consistency across different types of content and data structures.

## Tables and Lists

### Data Tables
Structured presentation of tabular data with rows and columns.

**When to use:**
- For comparing multiple items across several attributes
- When users need to sort, filter, or search data
- For presenting structured, homogeneous data

**Guidelines:**
- Use clear, descriptive column headers
- Implement sorting for relevant columns
- Provide filtering and search when needed
- Use zebra striping for better readability
- Make tables responsive for mobile devices

### List Views
Vertical presentation of items with consistent structure.

**When to use:**
- For homogeneous collections of items
- When items have 2-4 key attributes to display
- For mobile-friendly data presentation

**Guidelines:**
- Maintain consistent item height and spacing
- Use clear visual hierarchy for information
- Include relevant actions (edit, delete, view)
- Consider infinite scroll or pagination for long lists

## Cards and Tiles

### Information Cards
Container pattern for grouped, related information.

**When to use:**
- For heterogeneous content that needs visual separation
- When items have multiple attributes and actions
- For dashboard-style layouts

**Guidelines:**
- Group related information logically
- Use consistent card structure across similar content
- Provide clear visual hierarchy within cards
- Include relevant actions at card level

### Summary Tiles
Compact presentation of key metrics or status information.

**When to use:**
- For dashboard KPIs and metrics
- When highlighting important status information
- For quick scanning of multiple data points

**Guidelines:**
- Keep information concise and scannable
- Use clear visual indicators for status
- Maintain consistent sizing and spacing
- Consider click-through for detailed views

## Charts and Visualizations

### Data Visualization
Graphical representation of quantitative information.

**When to use:**
- For showing trends, patterns, and relationships
- When data comparison is important
- For financial and analytical dashboards

**Guidelines:**
- Choose appropriate chart types for data
- Provide clear axes labels and legends
- Use accessible color combinations
- Include alternative text for screen readers
- Offer data table alternatives when needed

## Content Organization

### Information Hierarchy
Structured presentation of content with clear visual levels.

**Guidelines:**
- Use consistent heading styles (H1, H2, H3)
- Implement proper spacing and typography scale
- Group related content with visual containers
- Use white space effectively for breathing room

### Scanning Patterns
Layout optimized for quick information consumption.

**Common Patterns:**
- **F-Pattern**: Headers and left-aligned content for text-heavy pages
- **Z-Pattern**: For balanced layouts with key actions
- **Gutenberg Diagram**: For prioritizing important content placement

## Status and Indicators

### Status Badges
Visual indicators for item states, categories, or properties.

**When to use:**
- For showing item status (active, inactive, pending)
- For categorization and tagging
- For priority or urgency indicators

**Guidelines:**
- Use consistent color coding across the application
- Keep badge text concise
- Position consistently relative to content
- Ensure sufficient color contrast

### Progress Indicators
Visual representation of completion status or progress.

**Types:**
- **Progress bars**: For deterministic progress
- **Loading indicators**: For indeterminate processes
- **Step indicators**: For multi-step processes

## Responsive Considerations

### Mobile Data Display
Adapting complex data for smaller screens.

**Strategies:**
- Convert tables to card layouts
- Use horizontal scrolling for wide tables
- Implement expandable/collapsible sections
- Prioritize most important information
- Consider mobile-specific actions (swipe, pull-to-refresh)

### Progressive Disclosure
Revealing information progressively to avoid overwhelming users.

**Techniques:**
- Expandable sections for detailed information
- Modal overlays for secondary actions
- Tabs for organizing related content
- Collapsible navigation and filters

## Accessibility

- Provide proper table headers and scope attributes
- Use sufficient color contrast for text and backgrounds
- Include alternative text for charts and images
- Ensure keyboard navigation for interactive elements
- Use ARIA labels for complex data relationships
- Provide screen reader-friendly data alternatives

## Performance

- Implement pagination for large datasets
- Use virtualization for very long lists
- Consider lazy loading for images and complex content
- Optimize data fetching and caching strategies
- Provide loading states for better perceived performance

## Best Practices

1. **Prioritize Information** - Show most important data first
2. **Be Scannable** - Use visual hierarchy and consistent patterns
3. **Enable Action** - Make it easy for users to act on data
4. **Stay Consistent** - Use the same patterns for similar data types
5. **Test with Real Data** - Ensure patterns work with actual content volumes