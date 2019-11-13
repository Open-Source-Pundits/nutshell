/* 
Author: Lauren Riddle
Purpose: to create HTML for login page
*/

// Creates html for login
export const createLogin = () => {
	// TO DO: Create the html for the login, which includes a login button + a link to switch the view to registration for new users.
	return `
	<h1 class="welcome">Welcome to Nutshell<h1>
	<div class="registerAccount dim pointer">Register a New Account</div>
	<form id="loginForm">
	<section>
		<label for="email-input">Email:</label>
		<input type="email" name="email-input" id="email">
	</section>
	<section>
		<label for="password-input">Password:</label>
		<input type="password" name="password-input" id="password">
	</section>
</form>
<button id="loginButton" class="dim pointer">Login</button>
	`;
};

