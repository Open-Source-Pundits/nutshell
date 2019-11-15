//Author: Trey Suiter

//Put active user events and new form button on DOM

import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"

export default {

    //Calls initial events page

    callEvents() {
        API.getEvents()
            .then(DOM.putEventsOnDOM)
        DOM.putNewEventButtonOnDOM()
        DOM.deleteEvent()
        DOM.edit()
    }
}
