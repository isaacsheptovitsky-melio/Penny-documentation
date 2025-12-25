# Switch
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/78000a-switch)
The Switch (Toggle) component allows users to enable or disable a setting with a single tap or click. It represents a binary state (on/off) and is commonly used for preferences, settings, and feature toggles.


| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-switch--main) |
| --- |

>👀 **Note:** For details on sizes, behaviors, and general guidelines applicable to all form components, refer to the[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[Form Field](https://zeroheight.com/98bb1df01/p/6854b6-form-field)**[ ](https://zeroheight.com/98bb1df01/p/6854b6-form-field)documentation.

## Usage

Switches are best used to adjust settings and other standalone options. They make a binary selection, like on and off or true and false.

The effects of a switch should start immediately, without needing to save.

Use a Switch to:

* Toggle a single item on or off
* Immediately activate or deactivate something

>🤓 **Tip**: Switches control binary options, not opposing ones. A light can be turned OR off, however the AC can't be set on hot OR cold, but rather a range of degrees.

## Variants

### Sizes

The switch is available in 2 sizes: 16px and 20px high, however both have a 24px target area, in order to adhere to accessibility guidelines.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-switch--sizes) |
| --- |

### States

#### Off

![Enabled](./assets/switch-image-5.png)

**Enabled**

---

![Read only](./assets/switch-image-6.png)

**Read only**

---

![Disabled](./assets/switch-image-7.png)

**Disabled**

---

#### On

![Enabled](./assets/switch-image-8.png)

**Enabled**

---

![Read only](./assets/switch-image-9.png)

**Read only**

---

![Disabled](./assets/switch-image-10.png)

**Disabled**

---

### Full width

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-switch--full-width) |
| --- |

## Do's and Don'ts

### ✅ Do
**Use a switch when the option is binary**
Use a checkbox when the option is binary.
![](./assets/switch-image-1.png)

### ❌ Don't
**Don't use radio for binary options**
Don't use radio for binary options.
![](./assets/switch-image-2.png)

---

### ✅ Do
**Use checkboxes for multiple selections**
Use checkboxes (not switches) to let users select one or more options from a list.
![](./assets/switch-image-3.png)

### ❌ Don't
**Avoid switches for options requiring save actions**
Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead.
![](./assets/switch-image-4.png)

## Related components 