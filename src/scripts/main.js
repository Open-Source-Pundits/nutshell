import { getAllTasks } from "./tasks/APIManager"
import { renderTasks, attachEventListenerToCreateNewTaskButton, attachEventListenerToDeleteTaskButton } from "./tasks/domManager"
import { createNewTaskButton } from "./tasks/createForm"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

sessionStorage.setItem("activeUser", 1)

document.querySelector("#container").innerHTML



getAllTasks()
.then(response => renderTasks(response))

createNewTaskButton()
attachEventListenerToCreateNewTaskButton()
attachEventListenerToDeleteTaskButton()