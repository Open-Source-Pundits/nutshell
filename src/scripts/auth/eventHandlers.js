// Author: Manila Bui
// All event handlers associated with events on the login + registration forms.
import { renderRegistration } from "./domManager";
import { renderApp } from "../app/domManager";
import { postNewUser, getRegisteredUser } from "./APIManager";

export const handleLogin = () => {
	// TO DO: Check validity of user with db. If valid, take them to landing page.
	sessionStorage.setItem("activeUser", 1);


	// If there is no activeUser, the id is set to 0.
	const activeUserId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;
	renderApp(activeUserId)
};

export const handleSignup = () => renderRegistration();

export const handleRegistration = () => {
	// TO DO: Save user to db.
	const name = document.querySelector("#name").value
	const email = document.querySelector("#email").value
	const password1 = document.querySelector("#password-1").value
	const password2 = document.querySelector("#password-2").value
	const userObject = {
		username: name,
		email: email,
		password: password2
	}

	if (password1 === password2 && email.includes("@")) {
	postNewUser(userObject)
	.then(getRegisteredUser(email))
	.then(user => {
		console.log(user.id)
		sessionStorage.setItem("activeUser", user.id)
		renderApp(user.id)
	})
	} else if (password2 !== password1) {
		alert("Passwords do not match")
	} else if (email.includes("@") !== true) {
		alert("Invalid Email Address")
	}
	// TO DO: Fetch call to get the user with email in order to get their id.
	// Call following 2 functions in the fetch:
	// sessionStorage.setItem("activeUser", id);
	// renderApp(id);
};