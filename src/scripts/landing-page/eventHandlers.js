// Author: Manila Bui
// Handle landing page events
import messages from "../messages/domManager.js"
import { renderContentContainer } from "../app/domManager";

const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

// This handles rendering the pages associated with the individual sections.
export const handleFooterClick = page => {
    renderContentContainer(capitalizeWord(page));
    if (page === "messages") {
    }
}