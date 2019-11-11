// Author: Manila Bui
// Renders html for authorization page + adds event listeners
import createLogin from "./createLogin";
import createRegistration from "./createRegistration";
// TO DO: import event handlers

export const renderLogin () => {
	const mainContainer = document.querySelector(".mainContainer");
	// container for login + registration forms for consistent styling
	mainContainer.innerHTML = `<div class="authFormContainer"></div>`;

	const authFormContainer = document.querySelector(".authFormContainer");

	authFormContainer.innerHTML = createLogin();

	// TO DO: Add event listeners
};

export const renderRegistration () => {
	const authFormContainer = document.querySelector(".authFormContainer");

	authFormContainer.innerHTML = createRegistration();
}