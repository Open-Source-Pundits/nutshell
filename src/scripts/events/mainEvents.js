//Put active user events and new form button on DOM

import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"

export default {

    callEvents() {
        API.getEvents()
            .then(DOM.putEventsOnDOM)
            .then(DOM.putNewEventButtonOnDOM)
            .then(DOM.delete)

    }
}
