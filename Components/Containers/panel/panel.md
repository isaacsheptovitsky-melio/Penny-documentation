# Panel
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/18aa8b-panel)
The Panel is a container that can stick to the top, bottom, left, or right of its container.


| [Storybook](https://penny.melio.com/?path=/story/containers-panel--main) |
| --- |

>**🤓 Tip:** Scroll up and down to see the Panel's stick behavior

## Usage

* Use for fixed or sticky toolbars, footers, or contextual panels
* Set position to `sticky` (default) for panels that remain visible within scrollable containers
* Use `fixed` or `absolute` for overlays
* Adjust background color to match your use case


## Variants

### Position

Read about CSS positioning [here](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/).

#### Sticky (default)

Sticks within a scrollable container to either the top or bottom of its container.

>![](./assets/panel-image-1.gif)
>
>

#### Fixed

Remains in the same position relative to the viewport.

>![](./assets/panel-image-2.gif)
>
>

#### Absolute

Positioned relative to the nearest positioned ancestor.

>![](./assets/panel-image-3.gif)
>
>

### Placement

The panel can be placed in either of 4 sides of the screen:

![Top placement](./assets/panel-image-5.png)

**Top placement**

---

![Panel - Right](./assets/panel-image-6.png)

**Panel - Right**

---

![Panel - Bottom](./assets/panel-image-7.png)

**Panel - Bottom**

---

![Panel - Left](./assets/panel-image-8.png)

**Panel - Left**

---

### Transition

The Panel is using the [Slide](https://penny.melio.com/?path=/docs/foundations-transitions-slide--docs) transition by default; toggle panel to view transition.

| [Storybook](https://penny.melio.com/?path=/story/containers-panel--transition-config) |
| --- |

## Mobile use

The panel isn't shown on mobile devices, as it's challenging to display effectively on smaller screens.

## Use cases

The panel appears when one or more rows in a table are selected, allowing batch actions.

>![](./assets/panel-image-4.gif)
>*When vendors are selected, the panel appears to enable batch actions.*

## Related components