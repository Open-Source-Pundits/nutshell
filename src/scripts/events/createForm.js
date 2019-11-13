//Author: Trey Suiter

export default {

    //Creates HTML templates for events, new event form, and new event form button

    eventsFormHTML() {
        return /*html*/`
        <div id="mainEventsDiv">
            <form id="eventsForm">
                <input hidden id="hiddenID" value="" >
                <fieldset class="eventFormFieldset">
                    <label for "eventNameField">Name of Event:</label>
                    <input class="eventFormField" type="text" name="eventField" id="eventNameField">
                </fieldset>

                <fieldset class="eventFormFieldset">
                    <label for "eventDateField">Event Date:</label>
                    <input class="eventFormField" type="date" name="eventField" id="eventDateField" >
                </fieldset>

                <fieldset class ="eventFormFieldset">
                    <label for "eventLocationField">Location: </label>
                    <input class="eventFormField" type="text" name="eventField" id="eventLocationField">
                </fieldset>
                <button class="eventFormFieldset" type="button" id="saveEventButton">Save Event</button> 
            </form>
        </div>  
        `
    },
    eventsHTML(allEvents, dashFlag) {
        if (dashFlag) {

            return `
        <div class ="eventsDash" id="eventDiv--${allEvents.id}">
            <h3>Name of Event: ${allEvents.name}</h3>
            <p>Event Date: ${allEvents.date}</p>
            <p>Location: ${allEvents.location}</p>
        </div>`
        } else {

            return `
            <div class ="eventOnDOM" id="eventDiv--${allEvents.id}">
                <h3>Name of Event: ${allEvents.name}</h3>
                <p>Event Date: ${allEvents.date}</p>
                <p>Location: ${allEvents.location}</p>
                <button class="allDeleteButtons" id="deleteButton--${allEvents.id} ">
                Delete
                </button>
                <button class="allEditButtons" id="editButton--${allEvents.id}">Edit</button>
            </div>
        `
        }
    },
    newEventButton() {
        return /*html*/`
        <button class="eventFormFieldset" type="button" id="newEventButton">New Event</button>
        `
    }

}