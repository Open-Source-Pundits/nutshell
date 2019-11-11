
/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/


// Author: Manila Bui
// Executes function to render initial app view.
import { renderApp } from "./app/domManager.js";

// To test when there is no user, set it to 0.
sessionStorage.setItem("activeUser", 1);


// If there is no activeUser, the id is set to 0.
const activeUserId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;

renderApp(activeUserId);

