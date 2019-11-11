// Author: Manila Bui
// Renders the initial view to the DOM.
// If no activeUser, authorization page is displayed. Otherwise, landing is displayed.
import { getUser } from "./APIManager";
import { renderLanding } from "../landing-page/domManager";
import createApp from "./createApp";
import createContentContainer from "./createContentContainer";

// Executed on main using the activeUser id + after a new user registers.
export const renderApp = id => {
	const container = document.querySelector("#container");
	// If id is 0, login page is rendered since there is no activeUser.
	!id
		? (container.innerHTML = createApp(id), renderAuth())
		// Otherwise, landing page is rendered.
		: getUser(id)
			.then(user => {
				container.innerHTML = createApp(user.username);
				renderLanding(id);
			});
};

// Executed by the individual page's render functions
export const renderContentContainer = currPage => {
	const mainContainer = document.querySelector(".mainContainer");

	mainContainer.innerHTML = createContentContainer(currPage);

	// TODO: add event listener to logo and all side nav page links

};