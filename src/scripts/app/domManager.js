// Author: Manila Bui
// Renders the parts of the app that are visible in every view to the DOM.
import { getUser } from "./APIManager.js";
import createApp from "./createApp.js";

export default id => {
	const container = document.querySelector("#container");
	// if id is 0, then we just create the app without username
	!id
		? container.innerHTML = createApp(id)
		: getUser(id)
			.then(user => container.innerHTML = createApp(user.username));
};