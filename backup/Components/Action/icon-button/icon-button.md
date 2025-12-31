# Icon Button
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/42635f-icon-button)
The Icon button is a compact button that displays only an icon, without a text label. It is typically used for less prominent actions, such as editing, deleting, or closing.


| [Storybook](https://penny.melio.com/?path=/story/action-components-icon-button--main) |
| --- |

## Usage

* Use for actions that can be easily understood through an icon alone
* Always pair with a tooltip or aria-label to convey meaning
* Avoid using for primary actions (e.g., form submissions)

>🤓 **Tip**: Use icon buttons to declutter interfaces, especially in dense areas like tables or cards.

## Variants

### Types

The Icon button component has several levels of hierarchy:

![Primary](./assets/icon-button-image-1.png)

**Primary**

---

![Naked](./assets/icon-button-image-2.png)

**Naked**

---

![Brand](./assets/icon-button-image-3.png)

**Brand**

---

### States

All buttons share the same set of states:

* **Rest**: the default appearance
* **Hover**: When the user points at the button with the cursor
* **Pressed**: The moment the button is clicked or tapped
* **Disabled**: When the action is unavailable 

![Primary icon button states](./assets/icon-button-image-4.png)

**Primary icon button states**

---

![Brand icon button states](./assets/icon-button-image-5.png)

**Brand icon button states**

---

![Naked icon button states](./assets/icon-button-image-6.png)

**Naked icon button states**

---

### Sizes

Buttons are available in 3 sizes, with the Large size being the default variant.

![Icon button sizes](./assets/icon-button-image-7.png)

**Icon button sizes**

---

### Inverse

Use the inverse variants on top of dark backgrounds.

![Primary inverse](./assets/icon-button-image-8.png)

**Primary inverse**

---

![Brand inverse](./assets/icon-button-image-9.png)

**Brand inverse**

---

![Naked inverse](./assets/icon-button-image-10.png)

**Naked inverse**

---

## With tooltip

Icon buttons include tooltips, which also appear on disabled buttons to support accessibility.

| [Storybook](https://penny.melio.com/?path=/story/action-components-icon-button--with-tooltip)  |
| --- |

## Related components