import HTMLforms from "./createForm.js"
import eventHandlers from "./eventHandlers"

export default {

    putEventFormOnDOM() {

        const eventFormContainer = document.querySelector("#formContainer")

        eventFormContainer.innerHTML = HTMLforms.eventsFormHTML()
        
        const saveButton = document.querySelector("#saveEventButton")

        saveButton.addEventListener("click", () => eventHandlers.attachEventSaveButton())


    },
    putEventsOnDOM(response) {

        const eventsContainer = document.querySelector("#eventsContainer")

        let eventsHTML = ""

        for (let entry of response) {

            eventsHTML += HTMLforms.eventsHTML(entry)
            
        }

        eventsContainer.innerHTML = eventsHTML
    }

}