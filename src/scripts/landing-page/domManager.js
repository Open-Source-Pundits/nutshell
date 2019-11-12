// Author: Manila Bui
// Render landing page html + add event Listeners
import createLanding from "./createLanding";
import { handleFooterClick } from "./eventHandlers";

// Executed by renderApp
export const renderLanding = id => {
	
	const mainContainer = document.querySelector(".mainContainer");

	mainContainer.innerHTML = createLanding();
	
	const sectionFooters = document.querySelectorAll(".landingSectionFooter");

	sectionFooters.forEach(footer => {
		const currSection = footer.innerHTML.split(" ")[2];

		footer.addEventListener("click", () => handleFooterClick(id, currSection));
	});
};