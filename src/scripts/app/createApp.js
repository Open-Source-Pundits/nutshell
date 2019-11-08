export default (title) => {
	// TO DO: grab user id from the system storage.
	let login = // user id;

	if (title === "Auth") {
		title = "Nutshell";
		login = `Login/Register`;
	};

	return `
		<nav>
			<div class="logo"><a href="index.html">NS</a></div>
			<h1 class="page-title">${title}</h1>
			<div class="login">${login}</div>
		</nav>
		<div class="mainContainer"><div>
	`;
};