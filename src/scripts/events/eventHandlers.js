//Author: Trey Suiter

import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"

//Defines event handlers

export default {

    //Defines function for event form's save button

    attachEventSaveButton() {

        //Test for hidden ID to PUT instead if POST

        let hiddenEntryID = document.querySelector("#hiddenID")

        if (hiddenEntryID.value) {

            API.editEvent(hiddenEntryID.value)
                .then(API.getEvents)
                .then(DOM.putEventsOnDOM)
                .then(DOM.putNewEventButtonOnDOM)

            // activeUserID = sessionStorage.getItem("activeUser", user.id)

        } else {

            const activeUser = sessionStorage.getItem("activeUser")
            const activeUserId = parseInt(activeUser)

            const eventName = document.querySelector("#eventNameField")
            const eventDate = document.querySelector("#eventDateField")
            const eventLocation = document.querySelector("#eventLocationField")

            const newEventEntry = {
                "userId": activeUserId,
                "name": eventName.value,
                "date": eventDate.value,
                "location": eventLocation.value
            }

            API.newEvent(newEventEntry)
                .then(API.getEvents)
                .then(DOM.putEventsOnDOM)
                .then(DOM.putNewEventButtonOnDOM)
        }
    },

    //Add delete button to events

    attachEventDeleteButton() {

        if (event.target.id.startsWith("deleteButton--")) {
            const entryToDelete = event.target.id.split("--")[1]

            API.deleteEntry(entryToDelete)
                .then(API.getEvents)
                .then(DOM.putEventsOnDOM)
               
        }
    }
}