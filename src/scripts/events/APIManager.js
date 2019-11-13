
//Author: Trey Suiter

const baseUrl = "http://localhost:8088/events"

export default {

    //fetch call for all event for active user

    getEvents() {
        const activeUser = sessionStorage.getItem("activeUser")
        const activeUserId = parseInt(activeUser)
        return fetch(`${baseUrl}?userId=${activeUserId}`)
            .then(response => response.json())
    },

    //POST to add new event for active user

    newEvent(event) {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)

        })
            .then(response => response.json())
    },

    //Fetch call to delete event

    deleteEntry(entryID) {

        return fetch(`${baseUrl}/${entryID}`, {
            method: "DELETE"
        })
    },

    // Populates form to edit

    updateEvent(entryID) {

        const hiddenID = document.querySelector("#hiddenID")
        const newName = document.querySelector("#eventNameField")
        const newDate = document.querySelector("#eventDateField")
        const newLocation = document.querySelector("#eventLocationField")

        return fetch(`http://localhost:8088/events/${entryID}`)
            .then(response => response.json())
            .then(thisEntry => {
                hiddenID.value = thisEntry.id
                newName.value = thisEntry.name
                newDate.value = thisEntry.date
                newLocation.value = thisEntry.location
            })
    },

    //POST fetch to save editted event

    editEvent(entryID) {

        const activeUser = sessionStorage.getItem("activeUser")
        const activeUserId = parseInt(activeUser)

        const updatedObject = {
            userId: activeUserId,
            name: document.querySelector("#eventNameField").value,
            date: document.querySelector("#eventDateField").value,
            location: document.querySelector("#eventLocationField").value
        }
        return fetch(`http://localhost:8088/events/${entryID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)

        })
            .then(response => response.json())
            .then(() => {
                document.querySelector("#hiddenID").value = ""
            })

    }
}

