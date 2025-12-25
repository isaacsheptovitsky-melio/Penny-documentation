# Feedback
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/2752a5-feedback)
Feedback messages provide users with system status or response to actions.


Use [Section Banner's](https://zeroheight.com/98bb1df01/p/46d766) Compact variant to surface errors and validation summaries where they're most discoverable and actionable.

![Section Banner's Compact variant](.././assets/section-banner-compact.png)

**Section Banner's Compact variant**

---

## **Global feedback**

For important issues that impact the entire screen or process, position the message at the top of the screen, interrupting the user's flow and demanding immediate attention.

![Global feedback overview](.././assets/global-feedback-overview.png)

### Examples

![Dashboard and Resources layout](.././assets/dashboard-resources-layout.png)

**Dashboard and Resources layout**

---

![Resource: Details](.././assets/resource-details.png)

**Resource: Details**

---

![Job layout](.././assets/job-layout.png)

**Job layout**

---

## **Local feedback**

>📌 **Global placement** is the standard for most use cases. However, use **Local placement** when an action is isolated to a specific section and keeping the feedback near the trigger provides necessary context.

Positioned directly above the section or element where the issue occurs, in order to highlight a localized issue within a specific section, field, or action on the page.

![Local feedback overview](.././assets/local-feedback-overview.png)

### Examples

![Local feedback interaction](.././assets/local-feedback-interaction.gif)

## Form validation

Form validation ensures data accuracy and integrity through two distinct stages: validating the input format (client-side) and validating the data quality (server-side).

![Local feedback example](.././assets/local-feedback-example.png)
*Once a form is submitted it is being validated both on input format, and the data in quality.*

### Client-Side validation

This validation occurs locally in the browser before data is sent to the server.

* **When to use:** Use this for feedback on required fields or formatting errors (e.g., an incomplete routing number or a missing vendor name).
* **Behavior:** Since the input is technically incorrect, the request is not sent to the server.
* **Visual style:** Display these errors using the **Critical state** of the specific Form Field component.

![Server-side feedback example](.././assets/server-side-feedback-example.png)
*Upon submission, the Vendor name and Bill amount fields are flagged as invalid because they are required but were left empty.*

### Server-Side validation

This validation occurs after the user **successfully** submits the form and the server processes the data to verify its validity.

* **When to use:** Use this when the data format is correct, but the content causes a system error (e.g., the vendor already exists or the payment amount exceeds the limit)
* **Behavior:** The server returns a validation response indicating issues with the data
* **Visual style:** Display these errors using a **Section Banner** at the top of the form context.

![Feedback - Modal](https://zeroheight-uploads.s3.eu-west-1.amazonaws.com/cc8d94f043cc36623083aa?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3AVNYHQK6K7NON45%2F20251222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20251222T151012Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=729b28a219108c8e70e618ccb93057d3038f8102aeeab1140c78a44b420ae63a)

**Feedback - Modal**

---

### Validation logic & placement

Follow this order of operations to ensure a smooth user experience:

1. **Validate fields first:** Upon submission, check for client-side formatting issues first. Highlight these using the input's critical state to alert the user to specific fields that need attention.
2. **Validate data second:** Once the form is successfully submitted to the server, display any resulting errors.
3. **Banner placement:**
    * Use a **Section Banner** to summarize the server-side errors
    * Place the banner directly above the form heading
    * If there are multiple issues, consolidate them into a single banner list to avoid clutter

>🤓 Avoid showing more than one banner per section—especially of the same type (e.g., multiple critical banners)

## **Actions and dismissal**

* Include an **action or an explanation** when the user must resolve the error
* Typically, do **not** allow dismissal for critical errors or when an action is required; dismissal is appropriate only when the message is not critical and no action is needed