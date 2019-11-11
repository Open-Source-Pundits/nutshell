import HTMLforms from "../events/createForm.js"
import eventHandlers from "../events/eventHandlers"

//Puts new event form on DOM (triggered by putNewEventButtonOnDOM())

const putEventFormOnDOM = () => {

    const eventFormContainer = document.querySelector(".formContainer")

    eventFormContainer.innerHTML = HTMLforms.eventsFormHTML()
    
    const saveButton = document.querySelector("#saveEventButton")

    saveButton.addEventListener("click", () => eventHandlers.attachEventSaveButton())

}

//Puts all events of active user on DOM

export default {

    putEventsOnDOM(response) {

        const eventsContainer = document.querySelector(".contentContainer")

        let eventsHTML = ""

        for (let entry of response) {

            eventsHTML += HTMLforms.eventsHTML(entry)
            
        }

        eventsContainer.innerHTML = eventsHTML
    },

    //puts "new event" button on DOM (includes putEventFormOnDOM())

    putNewEventButtonOnDOM() {

        const newEventButtonContainer = document.querySelector(".formContainer")

        newEventButtonContainer.innerHTML = HTMLforms.newEventButton()

        const newEventButton = document.querySelector("#newEventButton")

        newEventButton.addEventListener("click", () => putEventFormOnDOM())

    }
}