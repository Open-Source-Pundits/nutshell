// Author: James Chapman
// This module has everything that will effect the actual DOM
import createForm from "./createForm.js"
import APIManager from "./APIManager.js"
import messageHandler from "../messages/eventHandlers.js"

let messagesEntries = ""


export const addHTML = (messages) => {
    let contentContainer = document.querySelector(".contentContainer")
    messagesEntries = ""
    for (let i = 0; i < messages.length; i++) {
        messagesEntries = messages[i];
        contentContainer.innerHTML += createForm.makeMessageComponent
            (messagesEntries)
    }

}

export const renderMessagePage = () => {
    
    const messagesGetCall = () => {
        APIManager.getMessages()
            .then(messages => addHTML(messages))
    
    }

    const newMessageButton = () => {
        let formContainer = document.querySelector(".formContainer")
        formContainer.innerHTML = createForm.newFormMessageButton()
    }

    messagesGetCall();
    newMessageButton();

    const newMessageForm = document.querySelector("#newFormMessageButton")
    newMessageForm.addEventListener("click", event => {
        console.log("click")
        messageHandler.fillFormHTML()
    })


}




