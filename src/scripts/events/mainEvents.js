//Trey's Events Stuff

import API from "../events/APIManager.js"
import DOM from "../events/domManager.js"

export default {

    callEvents() {
        API.getEvents()
            .then(DOM.putEventsOnDOM)
            .then(DOM.putNewEventButtonOnDOM)

    }
}
