import HTMLforms from "../events/createForm.js"
import eventHandlers from "../events/eventHandlers"

const putEventFormOnDOM = () => {

    const eventFormContainer = document.querySelector(".formContainer")

    eventFormContainer.innerHTML = HTMLforms.eventsFormHTML()
    
    const saveButton = document.querySelector("#saveEventButton")

    saveButton.addEventListener("click", () => eventHandlers.attachEventSaveButton())

}

export default {

    putEventsOnDOM(response) {

        const eventsContainer = document.querySelector(".contentContainer")

        let eventsHTML = ""

        for (let entry of response) {

            eventsHTML += HTMLforms.eventsHTML(entry)
            
        }

        eventsContainer.innerHTML = eventsHTML
    },

    putNewEventButtonOnDOM() {

        const newEventButtonContainer = document.querySelector(".formContainer")

        newEventButtonContainer.innerHTML = HTMLforms.newEventButton()

        const newEventButton = document.querySelector("#newEventButton")

        newEventButton.addEventListener("click", () => putEventFormOnDOM())

    }
}