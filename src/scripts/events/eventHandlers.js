import API from "./APIManager.js"
import DOM from "./domManager.js"

export default {

    attachEventSaveButton() {

        // activeUserID = sessionStorage.getItem("activeUser", user.id)

        const saveButtonEvent = document.querySelector("#saveEventButton")
        
        const eventName = document.querySelector("#eventNameField")
        const eventDate = document.querySelector("#eventDateField")
        const eventLocation = document.querySelector("#eventLocationField")

        const newEventEntry = {
            "userId": 1,
            "name": eventName.value,
            "date": eventDate.value,
            "location": eventLocation.value
        }

        API.newEvent(newEventEntry)
        .then(API.getEvents)
        .then(DOM.putEventsOnDOM)

    }

}