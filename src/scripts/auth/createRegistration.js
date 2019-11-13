// Rendered when the button to register is clicked on the login form.
export default () => {
	// TO DO: Create registration html, which includes registration button.
	return `
	<h1 class="welcome">Register a New Account</h1>
	<form id="registerForm">
		<section>
			<label for="name-input">Name:</label>
			<input type="text" name="name-input" id="name">
		</section>
		<section>
			<label for="email-input">Email:</label>
			<input type="email" name="email-input" id="email" required>
		</section>
		<section>
			<label for="password-input-1">Password:</label>
			<input type="password" name="password-input" id="password-1" required>
		</section>
		<section>
			<label for="password-input-2">Password:</label>
			<input type="password" name="password-input" id="password-2" required>
		</section>
	</form>
	<button id="registerButton" class="dim pointer">Register</button>
	`;
};