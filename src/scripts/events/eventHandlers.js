import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"
const activeUser = sessionStorage.getItem("activeUser")
const activeUserId = parseInt(activeUser)

//Defines event handlers

export default {

    attachEventSaveButton() {

        // activeUserID = sessionStorage.getItem("activeUser", user.id)

        const saveButtonEvent = document.querySelector("#saveEventButton")

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

    }

}