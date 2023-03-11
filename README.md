### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif" alt="password manager" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the website input, username input, and password input should be empty and [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When non-empty values are provided for the website, username, and password and the **Add** button is clicked,
  - A new password item should be added to the list of passwords
  - The passwords count should be incremented by one
  - The **stars image** should be displayed in the password items instead of the passwords
  - The value of the input fields for website, username, and password should be updated to their initial values
  - When the **Show Password** is checked, then the password should be displayed instead of the **stars image**
- When a non-empty value is provided in the search input field, then password items whose website is matched with the search input value irrespective of the case should be displayed
- When a non-empty value is provided in the search input field, and if the website of any password item does not match the value given in the search input, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When the delete button of a password item is clicked,
  - The respective password item should be deleted from the list of passwords
  - The passwords count should be decremented by one
- When all password items are deleted, then [No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
</details>
