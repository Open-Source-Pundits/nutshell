// Rendered when the button to register is clicked on the login form.
export default () => {
	// TO DO: Create registration html, which includes registration button.
	return `
		<h1 class="welcome">Register a New Account</h1>
	<form id="registerForm">
	<section>
		<label for="email-input">Email:</label>
		<input type="email" name="email-input" id="email">
	</section>
	<section>
		<label for="password-input-1">Password:</label>
		<input type="password" name="password-input" id="password-1">
	</section>
	<section>
		<label for="password-input-2">Password:</label>
		<input type="password" name="password-input" id="password-2">
	</section>
</form>
<button id="registerButton" class="dim pointer">Register</button>
	`;
};