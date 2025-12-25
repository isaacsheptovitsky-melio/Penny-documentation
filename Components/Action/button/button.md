# Button
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/53251c-button)
The Button component is used to trigger actions or events, such as form submissions and navigation.


| [Storybook](https://penny.melio.com/?path=/story/action-components-button--main) |
| --- |

## Usage

* Use for proper actions, such as submitting forms or initiating key flows
* Secondary and tertiary variants should support less prominent actions
* Use the Disabled variant to prevent interactions when an action is unavailable
    * However, don't use a disabled button to indicate that form submission would be invalid

## Variants

### Hierarchy

The Button component has several levels of hierarchy:

![Primary](./assets/button-primary.png)

**Primary**

---

![Secondary](./assets/button-secondary.png)

**Secondary**

---

![Tertiary](./assets/button-tertiary.png)

**Tertiary**

---

![Critical](./assets/button-critical.png)

**Critical**

---

### States

All buttons share the same set of states:

* **Rest**: the default appearance
* **Hover**: When the user points at the button with the cursor
* **Pressed**: The moment the button is clicked or tapped
* **Loading**: While the system processes the action
* **Disabled**: When the action is unavailable 

![Primary button states](./assets/button-primary-states.png)

**Primary button states**

---

![Secondary button states](./assets/button-secondary-states.png)

**Secondary button states**

---

![Tertiary button states](./assets/button-tertiary-states.png)

**Tertiary button states**

---

![Critical button states](./assets/button-critical-states.png)

**Critical button states**

---

![Critical - Secondary button states](./assets/button-critical-secondary-states.png)

**Critical - Secondary button states**

---

### Inverse

Use the inverse variants on top of dark backgrounds.

![Primary - Inverse](./assets/button-primary-inverse.png)

**Primary - Inverse**

---

![Secondary - Inverse](./assets/button-secondary-inverse.png)

**Secondary - Inverse**

---

### Disabled state

All button types share the same disabled state.

| ![Disabeld state](./assets/button-disabled.png) **Disabeld state** |
| --- |

>🤓 **Tip**: If you're wondering whether the disabled state meets WCAG contrast requirements—no fear, accessibility-loving friend! Disabled elements don't have to follow contrast ratio rules.

### Sizes

Buttons are available in 3 sizes, with the Medium size being the default variant.

![Button sizes](./assets/button-sizes.png)

**Button sizes**

---

## Left and right elements

The button includes two slots, left and right elements, typically used for icons that either clarify the button's purpose or suggest UI behavior.

![Left element](./assets/button-left-element.png)

**Left element**

---

![Right element](./assets/button-right-element.png)

**Right element**

---

### Using both right and left elements

It's not recommended using both right and left elements too often, since it may clutter the UI and become repetitive, defeating the differentiating effect of the icon.

### ✅ Do
**Use the left element for global functions**
Use the left element for global functions, i.e. a single filter button on screen.
![](./assets/button-left-element-do.png)

### ❌ Don't
**Avoid repeating left icons for similar actions**
Avoid using the same left icon for similar actions with slight variations, as repeating the icon reduces its impact and clarity.
![](./assets/button-left-element-dont.png)

### Additional use cases

![Custom element](./assets/button-custom-element.png)

**Custom element**

---

## Critical button UX pattern

Destructive actions, like deleting content, follow a confirmatory flow to prevent accidental clicks. The initial trigger is typically a tertiary button labeled clearly (e.g., "Delete vendor"). This opens a modal asking the user to confirm the action.

>![](./assets/button-hover-animation.gif)
>*When deleting a bill, the user is first presented with a critical-text "Delete bill", that signals a destructive action. Clicking this button opens a confirmation modal.*

## Desktop usage and treatment

### Width 

![Hug content](./assets/button-hug-content.png)

**Hug content**

---

### ✅ Do
**Use hug contents to set the button's width**
Use hug contents to set the button's width
![](./assets/button-states.png)

### ❌ Don't
**Don't use fill container unless on mobile**
Use fill container; unless on mobile
![](./assets/button-layout.png)

### Placement

Place primary (essential) actions on the right and secondary or optional actions on the left.

![Button placement in a Bill details drawer](./assets/button-placement-drawer.png)

**Button placement in a Bill details drawer**

---

### ✅ Do
**Place buttons horizontally, next to each other**
Place buttons horizontally, next to each other
![Use hug contents to set the button's width](./assets/button-width-hug.png)

### ❌ Don't
**Don't place buttons vertically, one on top of the other**
Don't place buttons vertically, one on top of the other
![Don't use fill container](./assets/button-width-fill-dont.png)

### Do's and Don'ts

### ✅ Do
**Expose up to 3 buttons**
Expose up to 3 buttons
![](./assets/button-three-buttons-do.png)

### ❌ Don't
**Don't expose more than 3 buttons for a part of the screen**
Expose more than 3 buttons for a part of the screen
![](./assets/button-many-buttons-dont.png)

---

### ✅ Do
**Place the essential action on the far-right of the layout**
Place the essential action on the far-right of the layout
![](./assets/button-placement-do.png)

### ❌ Don't
**Don't place secondary buttons to the right of prominent buttons**
Place secondary or tertiary button to the right of the more prominent button
![](./assets/button-placement-dont.png)

>✅ These guidelines support consistent action arrangement. However, if an optional action needs extra emphasis due to its business impact, it's okay to break the rule.

---

## Mobile usage and treatment

### Width

![Fill container on mobile](./assets/button-mobile-fill-container.png)

**Fill container on mobile**

---

### Placement

When placing buttons side by side, let buttons hug content and their width be determined by the content of the button.

![Vertical placement](./assets/button-mobile-vertical-placement.png)

**Vertical placement**

---

## Content guidelines

## Related components