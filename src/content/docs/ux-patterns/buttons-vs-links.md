---
title: Buttons vs. Links
description: Distinguish between buttons and links based on function, not appearance.
---

## Buttons vs. Links

Distinguish between buttons and links based on function, not appearance.

## tl;dr

* **Use** **[buttons](https://zeroheight.com/98bb1df01/p/53251c)** for triggering an action
* **Use** **[links](https://zeroheight.com/98bb1df01/p/921cd5)** for navigation

## When to use buttons

**Buttons trigger actions and guide users through workflows.** They generally carry the highest visual emphasis on the screen.

Use buttons to:

* **Complete a task**, such as submitting a payment form
* **Change the state** of elements within the interface
* **Open a secondary view**, like a modal or drawer

## When to use links

**Links are primarily used for navigation.** They change the URL and location of the user in the system, without performing an action.

Use links to:

* **Navigate internally**, redirecting the user to a new page or a specific anchor within the same page
* **Navigate externally**, redirecting to a different domain or document

>📌 **Note:** External links must always include the external link icon trailing the text.

## Implementation & accessibility

Even when a link is styled to visually resemble a button (or vice versa), the underlying HTML must match the element's function. Screen readers rely on specific tags to tell users whether they are about to perform an action or navigate to a new location.

### As a button

The `<button>` tag is used for actionable elements. This informs screen readers that interacting with the element will trigger an in-page event, such as submitting data or opening a modal.

**/index.html**

```html
<div>
  <button type="button" onClick={handleAddVendor}>Add vendor</button>
</div>
```

**/styles.css**

```css
button {
  padding: 0 16px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #7849ff;
  color: white;
  font-size: 16px;
  font-family: Poppins, sans-serif;
}

div {padding: 24px;}
```

**/index.js**

```js
import "./styles";
```

**/package.json**

```json
{"dependencies":{},"main":"/index.js"}
```

---

### As a link

The `<a>` (anchor) tag is used for navigation. This informs screen readers that the element is a link, allowing users to anticipate a change in URL or page context.

**/index.html**

```html
<div>
  <a href="/dashboard">Back to dashboard</a>
</div>
```

**/styles.css**

```css
a {
  padding: 12px 16px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #7849ff;
  color: white;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  font-family: Poppins, sans-serif;
}

div {padding: 24px;}
```

**/index.js**

```js
import "./styles";
```

**/package.json**

```json
{"dependencies":{},"main":"/index.js"}
```

---

>**🤓 Nerdy tip:** The `<a>` tag also enables browser-native behaviors like "Open in new tab."

## Do's and Don'ts

### ✅ Do
**Use buttons for data-altering actions**

Use buttons for a data-altering action: save information and move forward, submit a form, or save a new vendor.

### ❌ Don't
**Use buttons for generic navigation**

Avoid using buttons for simply loading a new page without saving or changing data, as this confuses the user's expectation of "submitting" something.

---

### ✅ Do
**Use button styling for primary navigation focus**

Use button styling for navigation links when they are the singular, primary focus of their area/page.

### ❌ Don't
**Style links as buttons when they compete with actions**

Style links as buttons if they compete with actual functional buttons (like "Pay" or "Save") or if they clutter the visual hierarchy of a dense interface.

---