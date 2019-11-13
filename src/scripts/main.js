// Author: Manila Bui
// Executes function to render initial app view.
import { renderApp } from "./app/domManager.js";

// If there is no activeUser, the id is set to 0.
const activeUserId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;

renderApp(activeUserId);