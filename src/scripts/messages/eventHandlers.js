// Author: James Chapman
// This module will handle all of the events that eventListeners brings to it
import messageForm from "../messages/createForm"
import APIManager from "../messages/APIManager"
import { addHTML, messagesGetCall } from "./domManager"


export default {

    fillFormHTML: () => {
        let formContainer = document.querySelector(".formContainer")
        formContainer.innerHTML = messageForm.messageForm()

        const messageSubmit = document.querySelector("#submitMessageButton")
        messageSubmit.addEventListener("click", event => {
            console.log("click2")
            const userId = sessionStorage.getItem("activeUser") ? sessionStorage.getItem("activeUser") : 0;
            const message = document.querySelector(".messageTextArea").value;
            const timestamp = Date.now();

            const createNewMessage = () => {
                return {
                    "userId": userId,
                    "message": message,
                    "timestamp": timestamp
                }
            }

            const messageArray = [userId, message, timestamp]

            const newMessage = createNewMessage(userId, message, timestamp)
            let contentContainer = document.querySelector(".contentContainer")
            contentContainer.innerHTML = ""
            APIManager.saveMessages(newMessage)
                .then(messages => {
                    APIManager.getMessages()
                        .then(messages => addHTML(messages))
                })
            messageArray.forEach(messageField => {
                messageField = ""
            })
        })
    }
}

