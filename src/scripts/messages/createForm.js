export default {
    messageForm: () => {
        return `
        <h2>Messages</h2> 
            <form>
                <fieldset>
                <label class="inputField" id="messageTitle" for="messages">New Message:</label>
                <input type="textarea" name="messages" id="messageTextArea">
                </fieldset>
            </form>
            <button type="submit" id="messageButton">Submit Message</button>
        `
    },
    makeMessageEntryComponent:(entry) => {
        return ` 
        <h3 class="messages-${entry.id}">${entry.user.username} said: ${entry.message}</h3>
        `
    }
}