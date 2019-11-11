import createForm from "./createForm"
import APIManager from "./APIManager"

let messagesEntries = ""
export default {
    fillHTML: () => {
    let formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = createForm.populateHTML()
    },
    addHTML: (messages) => {
        let contentContainer = document.querySelector(".contentContainer")
        contentContainer.innerHTML = ""
        for(let i = 0; i< messages.length; i++){
            messagesEntries = messages[i];
            messagesEntries.innerHTML += createForm.makeMessageComponent(messagesEntries)
        }
        
    },
    createNewMessage: () => {
        return{
            "userId": userId,
            "message": message,
            "timestamp": timestamp
        }
    }
}
const messagesGetCall = ()=>{
    APIManager.getMessages()
    .then(entries => addHTML(entries))
}

