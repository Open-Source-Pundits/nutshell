// Author: James Chapman
// This module has everything that will effect the actual DOM
import createForm from "./createForm.js"
import APIManager from "./APIManager.js"
import saveMessageHandler from "../messages/eventHandlers.js"

let messagesEntries = ""
export default {
    fillHTML: () => {
    let formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = createForm.messageForm()
    },
    addHTML: (messages) => {
        let contentContainer = document.querySelector(".contentContainer")
        messagesEntries = ""
        for(let i = 0; i< messages.length; i++){
            messagesEntries = messages[i];
            contentContainer.innerHTML += createForm.makeMessageEntryComponent(messagesEntries)
        }
        
    },
    createNewMessage: () => {
        return{
            "userId": userId,
            "message": message,
            "timestamp": timestamp
        }
    },
}

messagesGetCall: ()=>{
    APIManager.getMessages()
    .then(entries => this.addHTML(entries))
}

const messageSubmit = document.querySelector(".submitMessageButton")
messageSubmit.addEventListener("click", event=>{
    saveMessageHandler.saveMessageHandler(event)
})


