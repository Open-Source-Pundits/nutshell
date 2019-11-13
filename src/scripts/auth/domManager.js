// Author: Manila Bui
// Renders html for authorization page + adds event listeners
import createLogin from "./createLogin";
import createRegistration from "./createRegistration";
import { handleLogin } from "./eventHandlers";
// TO DO: import event handlers

export const renderLogin = () => {
	const mainContainer = document.querySelector("#container");
	console.log(mainContainer)
	// container for login + registration forms for consistent styling
	mainContainer.innerHTML = "<div></div>";

	const authFormContainer = document.querySelector("div");

	authFormContainer.innerHTML = createLogin();

	const loginButton = document.querySelector("#loginButton")
	console.log(loginButton)
	loginButton.addEventListener("click", handleLogin)

	const registerAccount = document.querySelector(".registerAccount")
	registerAccount.addEventListener("click", renderRegistration)

	// TO DO: Add event listeners
};

export const renderRegistration = () => {
	const authFormContainer = document.querySelector("#container");

	authFormContainer.innerHTML = createRegistration();
}