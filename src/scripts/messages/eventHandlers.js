// Author: James Chapman
// This module will handle all of the events that eventListeners brings to it
import messageForm from "../messages/createForm"
export default {
    saveMessageHandler: (event) => {
        const userId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;
        const message = document.querySelector(".messageTextArea").value;
        const timestamp = date.now();
    
        const messageArray = [userId, message, timestamp]
    
        const newMessage = this.createNewMessage(userId, message, timestamp)
        APIManager.saveMessages(newMessage)
            .then(entry => messagesGetCall(entry))
        messageArray.forEach(messageField =>{
            messageField = ""
        })
    },
    newFormHTML: () => {
        const fillFormHTML = () => {
            let formContainer = document.querySelector(".formContainer")
            formContainer.innerHTML = messageForm.messageForm()
        }
    }
}
