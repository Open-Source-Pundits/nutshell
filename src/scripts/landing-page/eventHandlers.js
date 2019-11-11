// Author: Manila Bui
// Handle landing page events
import { renderContentContainer } from "../app/domManager";
import events from "../events/mainEvents.js"

const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

// This handles rendering the pages associated with the individual sections.
export const handleFooterClick = page => {
    if (page === "events") {
        events.callEvents()
    }
    renderContentContainer(capitalizeWord(page))
};