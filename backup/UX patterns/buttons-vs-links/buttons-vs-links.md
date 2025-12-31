# Buttons vs. Links
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/47242c-buttons-vs-links)
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

![Clicking "Create an invoice" triggers the appropriate flow.](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/89a5b04c763fc76a052bf2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=660fc30a3aef01a2809b25fe0fbc661d0dab562937e61c0426897aca47c60f09)

**Clicking "Create an invoice" triggers the appropriate flow.**

---

## When to use links

**Links are primarily used for navigation.** They change the URL and location of the user in the system, without performing an action.

Use links to:

* **Navigate internally**, redirecting the user to a new page or a specific anchor within the same page
* **Navigate externally**, redirecting to a different domain or document

![Clicking "View roles" redirects the user to the relevant help center article](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/5c7e227eccf7673736b763?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=16d6dcd0979f32f4384d3fd748ce058820ab16e76a2d32e0855444cee3aac46a)

**Clicking "View roles" redirects the user to the relevant help center article**

---

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

![Use a primary button for "Confirm payment"](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/bfa95f8792bc68155e4487?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2a9947dc2d6aec01a6107ff1aa6d5ce054ef32fecfc2a094601cdb42ae4f80ea)

### ❌ Don't
**Use buttons for generic navigation**

Avoid using buttons for simply loading a new page without saving or changing data, as this confuses the user's expectation of "submitting" something.

![Do not use a button for "Read more" links](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/580c57205bd372a4e7c54b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=be11ce47f89a7d4ccea9f936fdc623fb50ccda6776ae057e51cae74930bf679a)

---

### ✅ Do
**Use button styling for primary navigation focus**

Use button styling for navigation links when they are the singular, primary focus of their area/page.

![Button styling for primary focus](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/3fdad9a446873045697361?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b82fad3c9a8577efdc50446fb8c17f3a51ccbf036a6e9c1f3a1378c503cca4f2)

### ❌ Don't
**Style links as buttons when they compete with actions**

Style links as buttons if they compete with actual functional buttons (like "Pay" or "Save") or if they clutter the visual hierarchy of a dense interface.

![Don't style competing links as buttons](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/4be100a93560506898191c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151013Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d02ba3ce44527db3aeeb41bd9c1a8871eb21dc944384cb42dadc376f28318ba7)

---