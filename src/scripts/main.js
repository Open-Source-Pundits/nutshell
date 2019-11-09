// Author: Manila Bui
// Execute functions to render the initial app views.
import renderApp from "./app/domManager.js";
import renderLanding from "./landing-page/domManager.js";
import renderLogin from "./auth/domManager.js";

// To test when there is no user, set it to 0.
sessionStorage.setItem("activeUser", 1);

// If there is no activeUser, the id is set to 0.
const activeUserId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;

renderApp(activeUserId);

// If there is an active user, then we render the landing. Otherwise, we render the login.
activeUserId ? renderLanding() : renderAuth();