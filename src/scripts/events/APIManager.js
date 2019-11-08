
const baseUrl = "http://127.0.0.1:8088/events"

export default {
    getEvents() {
        return fetch(baseUrl)
            .then(response => response.json())
    },
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

