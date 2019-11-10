// Author: Manila Bui
// Creates the html for the top nav + main container.
export default username => {
	// If there is no username, then the greeting is blank.
	const userGreeting = !username ? "" : `Sup, ${username}.`;

	return `
		<nav class="topNav flex items-center pa2">
			<div class="logo dim ma1 f5">NS</div>
			<h1 class="siteTitle center ttu">Nutshell</h1>
			<div class="userGreeting">${userGreeting}</div>
		</nav>
		<div class="mainContainer"></div>
	`;
};