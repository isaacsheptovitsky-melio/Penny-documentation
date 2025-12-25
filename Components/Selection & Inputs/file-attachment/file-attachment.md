# File attachement
[Web URL](https://zeroheight.com/98bb1df01/v/latest/p/855f03-file-attachement)
The **File attachment** component allows users to upload and display files. It provides customization options for width and delete button text.


| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-file-attachment--main) |
| --- |

## Usage

* Enables users to **upload and display files** within a form or interface.
* Allows customization of **width** to fit different layouts.
* Supports overriding the **delete button text** for better contextual clarity.

>🤓 **Tip**: For other use cases, consider using the **[File upload](https://zeroheight.com/98bb1df01/p/51202c)** or **[Large file upload](https://zeroheight.com/98bb1df01/p/248e54)** components.

## Variants

### States

The File attachment has 3 main states:

* View
* Edit
* Error loading preview

#### View

* **Rest**: Displays an uploaded file in a non-editable format
* **With file**: Shows the uploaded file
* **With file and Read-only**: Displays the file without any modification or deletion options

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-file-attachment--view-mode) |
| --- |

#### Edit

* **Rest**: The default state before a file is uploaded
* **Loading**: Indicates an ongoing file upload process.
* **With file**: A file has been successfully uploaded and is displayed
* **Loading with File:** Shows an uploaded file while a new file is being processed

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-file-attachment--edit-state) |
| --- |

>🤓 **Tip**: It's possible to change the Delete file button label, however adhere to content guidelines.

#### Error loading preview

* **Edit**: Allows the user to reattempt the upload or modify file details
* **View**: Displays an error message while preventing further interaction
* **Override File Name** – Enables renaming when the preview cannot be generated

| [Storybook](https://penny.melio.com/?path=/story/selection-inputs-components-file-attachment--error-loading-preview) |
| --- |

## Use cases

The File attachment is used, among other places, in the Bill details drawer to display a file that has been uploaded to the bill.

>![](./assets/file-attachment-image-1.png)

## Related components