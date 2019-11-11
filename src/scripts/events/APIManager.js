
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
        console.log(event)
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)

        })
    }
}

