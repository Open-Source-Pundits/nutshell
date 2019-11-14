//Author: Trey Suiter

import HTMLforms from "../events/createForm.js"
import eventHandlers from "../events/eventHandlers"


//move these
import API from "../events/APIManager.js"
//Puts new event form on DOM (triggered by putNewEventButtonOnDOM())

const putEventFormOnDOM = () => {

    const eventFormContainer = document.querySelector(".formContainer")
    eventFormContainer.innerHTML = HTMLforms.eventsFormHTML()
    const saveButton = document.querySelector("#saveEventButton")
    saveButton.addEventListener("click", () => eventHandlers.attachEventSaveButton())
}


export default {

    //Puts all events of active user on DOM in order by date

    putEventsOnDOM(response) {
        response.sort(function (a, b) {
            let dateA = new Date(a.date), dateB = new Date(b.date)
            return dateA - dateB
        })
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

    },

    // Attaches event listener to delete button with attachEventDeleteButton

    delete() {

        const deleteButtons = document.querySelector(".contentContainer")

        deleteButtons.addEventListener("click", () => eventHandlers.attachEventDeleteButton())

    },

    //Attaches event listener for edit button

    edit() {

        const editButtons = document.querySelector(".contentContainer")
        
        let entryID = ""
        editButtons.addEventListener("click", event => {
            putEventFormOnDOM()
            if (event.target.id.startsWith("editButton--")) {
                entryID = event.target.id.split("--")[1]
                API.updateEvent(entryID)
            }
        })
    }
}