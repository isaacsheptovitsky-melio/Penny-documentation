---
title: Layout system
description: Layouts are here to help with the structure and alignment of elements within a design, ensuring consistent arrangement, responsiveness, and spacing.
---

# Layout system

Layouts are here to help with the **structure** and alignment of elements within a design, ensuring consistent arrangement, **responsiveness**, and **spacing**.


We strive to offer the best layout for each screen's function, addressing various user needs:

* Consuming information
* Manipulating information
* Performing basic and complex tasks
* Configuring the system to their needs

To achieve this, we have consolidated the number of layouts into the following basic structure patterns:

![](/foundation/assets/layout-system-image-1.png)

# Dashboard layout

Used for the main dashboard, this layout is optimizes for system notification and high-level system overview, and it includes:

* Payments overview
* Pro-tips
* Client table

>![](/foundation/assets/layout-system-image-2.png)

>#### 🖥️ Max width 
>
>The dashboard layout has a max width of 1600px, utilizing the full screen space to maximize information display.

# Resources layout

Used for viewing a single resource screen, such as Vendors and Bills. It consists of: 

* Search and filter controls at the top
* Table or grid layout for displaying data
* Inline actions for items (e.g., edit, delete, view details)
* Pagination for large datasets

>![](/foundation/assets/layout-system-image-3.png)

>#### 🖥️ Max width 
>
>The Resources layout has a max width of 100%, utilizing the full screen space to maximize information display.

## Mobile interpretation

The table in the Resource layout is interpreted as a list of items on mobile

>![](/foundation/assets/layout-system-image-4.png)

# Resource details layout

For drilling down into information that cannot be displayed inline within a table, data is displayed in a drawer:

* Drawer view with detailed information
* Additional data will be displayed
* Action buttons for the main and additional actions
* Light editing of entity's details

>![](/foundation/assets/layout-system-image-5.png)

>#### 🖥️ Drawer width 
>
>The Resource details' drawer supports three widths:
>
> * **480px**: Used for short and simple entities, such as Bill  (without an attachment)
> * **708px**: Used for regular entities, such as Vendor
> * **1216px**: Used for regular entities with an attachment such as Bill details (with an attachment)
>
>[Read more](https://zeroheight.com/98bb1df01/p/63ec5f-layout/t/06e9b87f5c) about the drawer component.

# Job layout

This layout is used for creating new information and includes:

* Multi-column grid or single-column form fields
* Clear section headers for complex forms
* Action button for completing or canceling the task

>![](/foundation/assets/layout-system-image-6.png)

>#### 🖥️ Container width 
>
>The Job layout supports three widths:
>
> * **600px**: The default and most commonly used width
> * **900px**: A broader layout with elements arranged horizontally, commonly used for form fields
> * **1200px:** For content and actions that need additional width, such as side-by-side element comparison.

# Job: Multiple steps layout

>🚨 Deprecated

This layout is designed for complex tasks that span multiple domains and pages.

>![](/foundation/assets/layout-system-image-7.png)

>#### 🖥️ Max width 
>
>The Page: Multiple steps layout supports three widths:
>
> * **600px**: The default and most commonly used width in the system
> * **900px**: A wider layout for more complex forms
> * **1200px:** For content and actions that require extra space

# Settings layout

This layout is dedicated to system configuration and includes:

* Sidebar navigation for different settings categories
* Form fields or toggles for adjusting preferences

>![](/foundation/assets/layout-system-image-8.png)

>#### 🖥️ Max width 
>
>The Settings screen uses a max width of 100%, utilizing the full screen space to maximize information display.

# Vendor Experience

This layout is for external users, and is viewed by customers of our users.

>![](/foundation/assets/layout-system-image-9.png)

>#### 🖥️ Max width 
>
>The Vendor experience layout uses a max width of 600px, utilizing the full screen space to maximize information display.

# Split layouts

Unlike other layouts, the split layout doesn't convey a specific function or meaning. Instead, it simply organizes elements into two horizontally arranged panels.

>![](/foundation/assets/layout-system-image-10.png)
>*1:1 split layout*

>👉 Read more about the Split layout [here](https://zeroheight.com/98bb1df01/p/9191e9).

# Grid

When designing new screens that are without an existing layout, use the **12 col grid** style, provided by Penny.

>![](/foundation/assets/layout-system-image-11.png)
>*Desktop layout with the main container using the 12 col grid.*

The grid is a standard 12-column layout with 24px gutters and no margins, used for designing on desktop.

When designing for smaller screens use the 8-col-grid and 4-col-grid, for tablet and mobile respectively.

>![Responsive grid example](/foundation/layout-system-assets/grid-responsive.gif)