// Author: James Chapman
// This module has everything that will effect the actual DOM
import createForm from "./createForm.js"
import APIManager from "./APIManager.js"
import messageHandler from "../messages/eventHandlers.js"
import edit from "../messages/eventHandlers"

let messagesEntries = ""


export const addHTML = (messages) => {
    messages.sort(function(a, b){
        let d1 = new Date(a.timestamp);
        let d2 = new Date(b.timestamp);
        return d1-d2;
    })
    let contentContainer = document.querySelector(".contentContainer")
    messagesEntries = ""
    for (let i = 0; i < messages.length; i++) {
        messagesEntries = messages[i];
        contentContainer.innerHTML += createForm.makeMessageComponent
            (messagesEntries)
    }

}
export const newMessageButton = () => {
    let formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = createForm.newFormMessageButton()
}

export const renderMessagePage = () => {
    
    const messagesGetCall = () => {
        APIManager.getMessages()
            .then(messages => addHTML(messages))
    
    }

    
    messagesGetCall();
    newMessageButton();
    
    const newMessageForm = document.querySelector("#newFormMessageButton")
    newMessageForm.addEventListener("click", event => {
        console.log("click")
        messageHandler.fillFormHTML()
    })
    const editMessageEventListener = () => {
        const contentContainer = document.querySelector(".contentContainer")
        contentContainer.addEventListener("click", edit.editMessage)
    }
    editMessageEventListener()
}




