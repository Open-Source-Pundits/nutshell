// Author: Manila Bui
// Handle landing page events
import { renderContentContainer, renderApp } from "../app/domManager";
import { renderNewsPage } from "../news/domManager";
import events from "../events/mainEvents.js"
import { renderTasks, attachEventListenerToCreateNewTaskButton, attachEventListenerToDeleteTaskButton, attachEventListenerToCheckBox, attachEventListenerToTaskName } from "../tasks/domManager";
import { getAllTasks } from "../tasks/APIManager";
import { createNewTaskButton } from "../tasks/createForm";
import { renderMessagePage } from "../messages/domManager"
import { addNewFriendButton } from "../friends/createForm";
import { attachEventListenerToAddFriendButton } from "../friends/domManager";


const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

// This handles rendering the pages associated with the individual sections.
export const handleFooterClick = (id, page) => {
    renderContentContainer(capitalizeWord(page));

    if (page === "events") {
        events.callEvents(id)
    }
    if (page === "news") renderNewsPage(id);
    if (page === "tasks") {
        getAllTasks()
        .then(response => renderTasks(response))
      createNewTaskButton()
      attachEventListenerToCreateNewTaskButton(id)
      attachEventListenerToDeleteTaskButton()
      attachEventListenerToCheckBox()
      attachEventListenerToTaskName()
        // this is where your event handler for loading the tasks page goes.
    }
    if (page === "messages"){
        renderMessagePage()
    }
    if (page === "home"){
        renderApp(id)
    }
    if (page === "friends") {
        addNewFriendButton()
        attachEventListenerToAddFriendButton()
    }
};
