// Author: Manila Bui
// Handle landing page events
import { renderContentContainer } from "../app/domManager";
import { renderNewsPage } from "../news/domManager";
import events from "../events/mainEvents.js"
import { getAllTasks } from "../tasks/APIManager";
import { renderTasks, attachEventListenerToCreateNewTaskButton, attachEventListenerToDeleteTaskButton } from "../tasks/domManager";
import { createNewTaskButton } from "../tasks/createForm";
import { renderMessagePage } from "../messages/domManager"

const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

// This handles rendering the pages associated with the individual sections.
export const handleFooterClick = (id, page) => {
    renderContentContainer(capitalizeWord(page));

    if (page === "events") {
        events.callEvents()
    }
    if (page === "news") renderNewsPage(id);
    if (page === "tasks") {
        getAllTasks()
        .then(response => renderTasks(response))
        createNewTaskButton()
        attachEventListenerToCreateNewTaskButton(id)
        attachEventListenerToDeleteTaskButton()
        // this is where your event handler for loading the tasks page goes.
    }
    if (page === "messages"){
        renderMessagePage()
    }
};
