// Author: James Chapman
// Creates the forms to the DOM to either be added or edited
export default {
    messageForm: () => {
        return `
        <h2>Messages</h2> 
            <form>
                <fieldset>
                <label class="inputField" class="messageTitle" for="messages">New Message:</label>
                <input type="textarea" name="messages" class="messageTextArea">
                </fieldset>
            </form>
            <button type="submit" id="submitMessageButton">Submit Message</button>
        `
    },
    makeMessageComponent: (entry) => {
        return ` 
        <div class="messageContainer-${entry.id}">
        <h3 id="messages-${entry.id}">${entry.user.username} said: ${entry.message}</h3>
        </div>
        `
//adding a timestamp to the message with  at ${entry.timestamp}
    },
    newFormMessageButton: () => {
        return `
        <button type="submit" id="newFormMessageButton">New Message</button>
        `
    }
}