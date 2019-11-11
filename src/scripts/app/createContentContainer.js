// Author: Manila Bui
// Creates the html for secondary container, which goes into the main container.
// This container holds the side nav, primary content for the individual pages + form container.
const pages = ["Home", "Events", "Tasks", "Messages", "News", "Friends"];

const createNavLink = page => `<p class="navLink dim pointer">${page}</p>`;

export default currPage => {
	let navLinks = "";

	pages.map(page => {
		if (page === currPage) navLinks += `<p class="navLink disabled"${page}</p>`;
		navLinks += createNavLink(page);
	});

	return `
		<div class="flex center">
			<nav class="sideNav">${navLinks}</nav>
			<div class="contentContainer">
				<h2 class="pageTitle">${currPage}</h2>
			</div>
			<div class="formContainer"></div>
		</div>
	`;
};