// Author: Manila Bui
// All event handlers associated with events on the login + registration forms.
import { renderRegistration } from "./domManager";
import { renderApp } from "../app/domManager";

export const handleLogin = () => {
	// TO DO: Check validity of user with db. If valid, take them to landing page.
};

export const handleSignup = () => renderRegistration();

export const handleRegistration = () => {
	// TO DO: Save user to db. 

	// TO DO: Fetch call to get the user with email in order to get their id.
		// Call following 2 functions in the fetch:
			// sessionStorage.setItem("activeUser", id);
			// renderApp(id);
};