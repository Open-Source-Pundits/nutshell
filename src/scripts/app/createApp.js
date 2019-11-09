// Author: Manila Bui
// Creates the html for the top nav + main container.

export default username => {
	// If there is no username, then the greeting is blank.
	const userGreeting = !username ? "" : `Hi ${username}!`;

	return `
		<nav class="topNav">
			<div class="logo">NS</div>
			<div class="title">Nutshell</div>
			<div class="userGreeting">${userGreeting}</div>
		</nav>
		<div class="mainContainer"><div>
	`;
};