// Author: Manila Bui
// All event handlers associated with events on the login + registration forms.
import { renderRegistration } from "./domManager";
import { renderApp } from "../app/domManager";

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
	console.log("this was clicked")

	const name = document.querySelector("#name").value
	const email = document.querySelector("#email").value
	const password1 = document.querySelector("#password-1").value
	const password2 = document.querySelector("#password-2").value

	console.log(name, email, password1, password2)
	// TO DO: Fetch call to get the user with email in order to get their id.
		// Call following 2 functions in the fetch:
			// sessionStorage.setItem("activeUser", id);
			// renderApp(id);
};