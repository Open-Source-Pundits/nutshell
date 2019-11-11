
const baseUrl = "http://127.0.0.1:8088/events"

export default {

    //fetch call for all event for active user

    getEvents(id) {
        console.log(id)
        return fetch(`${baseUrl}?userId=${id}`)
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
    }
}

