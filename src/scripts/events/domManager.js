import HTMLforms from "../events/createForm.js"
import eventHandlers from "../events/eventHandlers"

export default {

    putEventFormOnDOM() {

        const eventFormContainer = document.querySelector(".formContainer")

        eventFormContainer.innerHTML = HTMLforms.eventsFormHTML()
        
        const saveButton = document.querySelector("#saveEventButton")

        saveButton.addEventListener("click", () => eventHandlers.attachEventSaveButton())


    },
    putEventsOnDOM(response) {

        const eventsContainer = document.querySelector(".contentContainer")

        let eventsHTML = ""

        for (let entry of response) {

            eventsHTML += HTMLforms.eventsHTML(entry)
            
        }

        eventsContainer.innerHTML = eventsHTML
    }

}