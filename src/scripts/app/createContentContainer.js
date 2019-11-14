// Author: Manila Bui
// Creates the html for secondary container, which goes into the main container.
// This container holds the side nav, primary content for the individual pages + form container.
const pages = ["Home", "Events", "Tasks", "Messages", "News", "Friends"];

const createNavLink = page => `<p class="navLink dim pointer" id="link--${page}">${page}</p>`;

export default currPage => {
	let navLinks = "";

	pages.map(page => {
		if (page === currPage) return navLinks += `<p class="navLink disabled">${page}</p>`;
		navLinks += createNavLink(page);
	});

	return `
		<div class="flex center">
			<nav class="sideNav shadow-3 pa5">${navLinks}</nav>
			<div class="contentContainer-outer ma3 ph4">
				<h2 class="pageTitle pb3">${currPage}</h2>
				<hr>
				<div class="contentContainer">
				</div>
			</div>
			<div class="formContainer ph4"></div>
		</div>
	`;
};