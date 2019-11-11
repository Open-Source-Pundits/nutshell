// Author: Manila Bui
// Executes function to render initial app view.
import { renderApp } from "./app/domManager.js";

// const message = "Time to build an application that gives you all the information you need in a Nutshell"

// document.querySelector("#container").innerHTML = `<h1>${message}</h1>`

// console.log(message)

// To test when there is no user, set it to 0.
sessionStorage.setItem("activeUser", 1);

// If there is no activeUser, the id is set to 0.
const activeUserId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;

renderApp(activeUserId);
