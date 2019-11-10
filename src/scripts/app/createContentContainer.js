// Author: Manila Bui
// Creates the html for secondary container, which goes into the main container.
// This container holds the side nav, primary content for the individual pages + form container.
import { pages } from "../utils/global";

const createNavLink = page => `<p class="navLink">${page}</p>`;

export default currPage => {
	let navLinks = "";

	pages.map(page => {
		if (page === currPage) navLinks += `<p class="navLink disabled"${page}</p>`;
		navLinks += createNavLink(page);
	});

	return `
		<nav class="sideNav">${navLinks}</nav>
		<div class="contentContainer">
			<h2 class="pageTitle">${currPage}</h2>
		</div>
		<div class="formContainer"></div>
	`;
};