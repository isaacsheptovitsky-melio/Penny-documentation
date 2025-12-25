---
title: Calendar
description: The Calendar component allows users to select a date, while supporting additional functionalities such as marking primary and secondary selected dates, disabling holidays, and customizing selectable weekdays.
---

[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/48d510-calendar)
The Calendar component allows users to select a date, while supporting additional functionalities such as marking primary and secondary selected dates, disabling holidays, and customizing selectable weekdays.


| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-calendar--main) |
| --- |

## Usage

* Click any enabled date to select the primary date.
* The secondary date, shown with a simple gray outline, provides additional context, such as the vendor's payment receival date.
* Click the header to open the year list and select a different year.
* By default, the Calendar component includes an optional footer with a slot that can be replaced with a custom footer

## Variants

### Min-max date

The min and max variants limit users to selecting a date within a specified range, preventing choices that are too early or too late.

![calendar-image-3](/Penny-documentation/components/calendar/calendar-image-3.png)

**Minimum variant**

---

![Calendar - Max](/Penny-documentation/components/calendar/calendar-image-4.png)

**Calendar - Max**

---

### Date indications

The calendar component has 3 different date indications:

1. The Today indicator (July 9th), indicates the current day
2. The Secondary indicator (July 21st), indicates the vendor's payment recieval date
3. The Primary indicator (July 29th), indicates the user's selected date

![Calendar - Show today](/Penny-documentation/components/calendar/calendar-image-5.png)

**Calendar - Show today**

---

### Year & date selection

Clicking the month and year indicator (December 2023), opens a selection menu for quickly choosing a different month and year.

![User selection variant](/Penny-documentation/components/calendar/calendar-image-6.png)

**User selection variant**

---

### With legend

This variant shows a legend that explains the different date indicators to the user.

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-calendar--with-legend) |
| --- |

## Mobile use

The component opens in the same manner as desktop on mobile devices.

![](/Penny-documentation/components/calendar/calendar-image-1.png)

## Use cases

![](/Penny-documentation/components/calendar/calendar-image-2.png)
*When creating a new Bill, the Calendar component is used to set up the Invoice date and the Due date*

## Related components 