// Author: James Chapman
// This module will handle all of the events that eventListeners brings to it
import messageForm from "../messages/createForm"
import APIManager from "../messages/APIManager"
import { addHTML } from "./domManager"



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
                        //need to implement the sorting function but I time boxed it and will get back to it later
                        // messages.sort(function(a,b){
                        //     return a.timestamp - b.timestamp;
                        // })
                        // messages[timestamp].sort( a,b){
                        //     let d1 = new Date(a);
                        //     let d2 = new Date(b);
                        //     return d1-d2;
                        // }
                })
            messageArray.forEach(messageField => {
                messageField = ""
            })
        })
    },
    editMessage:() => {
        if(event.target.id.startsWith("task--")){
            const messageToEdit = event.target.id.split("--")[1]
            APIManager.getSingleMessage(messageToEdit)
        }

    }
}

