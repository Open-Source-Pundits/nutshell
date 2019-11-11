//Put active user events and new form button on DOM

import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"

export default {

    callEvents(id) {
        console.log(id)
        API.getEvents(id)
            .then(DOM.putEventsOnDOM)
            .then(DOM.putNewEventButtonOnDOM)

    }
}
