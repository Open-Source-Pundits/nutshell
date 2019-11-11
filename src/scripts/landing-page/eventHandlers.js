// Author: Manila Bui
// Handle landing page events
import { renderContentContainer } from "../app/domManager";
import { getAllTasks } from "../tasks/APIManager";
import { renderTasks, attachEventListenerToCreateNewTaskButton, attachEventListenerToDeleteTaskButton } from "../tasks/domManager";
import { createNewTaskButton } from "../tasks/createForm";

const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

// This handles rendering the pages associated with the individual sections.
export const handleFooterClick = page => {
    renderContentContainer(capitalizeWord(page))
    if (page === "tasks") {

        getAllTasks()
        .then(response => renderTasks(response))
        createNewTaskButton()
        attachEventListenerToCreateNewTaskButton()
        attachEventListenerToDeleteTaskButton()
        // this is where your event handler for loading the tasks page goes.
    }

};