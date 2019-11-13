// Author: Manila Bui
// Renders html for authorization page + adds event listeners
import { createRegistration, createWelcomePage } from "./createRegistration";
import { handleLogin, handleRegistration } from "./eventHandlers";
// TO DO: import event handlers

export const renderLogin = () => {
	const mainContainer = document.querySelector("#container");
	// container for login + registration forms for consistent styling
	mainContainer.innerHTML = "<div></div>";

	const authFormContainer = document.querySelector("div");

	authFormContainer.innerHTML = createWelcomePage();

	// const loginButton = document.querySelector("#loginButton")
	
	// loginButton.addEventListener("click", handleLogin)

	const registerAccount = document.querySelector(".registerAccount")
	registerAccount.addEventListener("click", renderRegistration)

};

export const renderRegistration = () => {
	const authFormContainer = document.querySelector("#container");

	authFormContainer.innerHTML = createRegistration();

	const registerButton = document.querySelector("#registerButton")
	registerButton.addEventListener("click", handleRegistration)
}