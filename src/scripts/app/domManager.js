// Author: Manila Bui
// Renders the initial view to the DOM.
// If no activeUser, authorization page is displayed. Otherwise, landing is displayed.
import { getUser } from "./APIManager";
import { renderLanding } from "../landing-page/domManager";
import createApp from "./createApp";
import createContentContainer from "./createContentContainer";
import { renderLogin } from "../auth/domManager";
import { handleFooterClick } from "../landing-page/eventHandlers"

const activeUser = sessionStorage.getItem("activeUser")
const id = parseInt(activeUser)

// Executed on main using the activeUser id + after a new user registers.
export const renderApp = id => {
	const container = document.querySelector("#container");
	// If id is 0, login page is rendered since there is no activeUser.
	!id
		? (container.innerHTML = createApp(id), renderLogin())
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

	//working code for nav

	const navLinkArray = document.querySelector(".sideNav")
	navLinkArray.addEventListener("click", event => {
		if (event.target.id.startsWith("link--")) {
			const pageToLoad = event.target.id.split("--")[1]
			// console.log(pageToLoad)
			const lowercaseWord = word => `${word[0].toLowerCase()}${word.slice(1)}`;
			const page = lowercaseWord(pageToLoad)
			handleFooterClick(id, page)
		}

		const pages = ["Home", "Events", "Tasks", "Messages", "News", "Friends"];
		//import pages or put a variable with that array somewhere on this page
		pages.map(page => {
			if (page === currPage) return // add event listener here ;
		})
		}
	)

		
	// TODO: add event listener to logo and all side nav page links

};