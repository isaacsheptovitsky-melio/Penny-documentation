---
title: Loader
description: The loader component indicates that a page or component is loading
---

# Loader

The loader component indicates that a page or component is loading


| [Storybook](https://61716025a5ae25003ac448af-ybucnlbkxz.chromatic.com/?path=/story/foundations-loader--main) |
| --- |

## Usage

Use the Loader component when:

* A page or section of the UI is awaiting data

* A user-initiated action triggers a delay (e.g., submitting a form or fetching data)
* It's important to reassure users that the system is actively working

## Specifications

You can customize the Loader's color using any color from the Penny palette; by default, it uses `brand.700` .

| [Storybook](https://61716025a5ae25003ac448af-ybucnlbkxz.chromatic.com/?path=/story/foundations-loader--colors) |
| --- |

## Examples

The Loader is used in two scenarios: when a screen is waiting for data to load, and when an asynchronous action is in progress.

## Screen data loading

Saving or paying a bill is an asynchronous action that requires a server response for confirmation.

>![](/Penny-documentation/foundation/assets/loader-image-1.png)
>
>

## Async action

Saving or paying a bill is an asynchronous action that requires a server response for confirmation.

>![](/Penny-documentation/foundation/assets/loader-image-2.png)
>
>

## Accessibility

By default, the loader component uses an aria-label of "Loading…", which will be announced by screen readers. You can override this text to announce a custom message if needed by setting the `loadingText`attribute.

## Related topics 