// Author: James Chapman
// This module will handle all of the events that eventListeners brings to it
import messageForm from "../messages/createForm"
import APIManager from "../messages/APIManager"
import { addHTML } from "./domManager"

const activeUser = sessionStorage.getItem("activeUser")
const activeUserId = parseInt(activeUser)

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
    editMessage: () => {
        //figure out which message is targeted
        console.log(event.target)
        // console.log(event.target.class.startsWith("messages-"))
        if (event.target.id.startsWith("messages-")) {
            //make a variable that focuses on the target ID
            const messageToEdit = event.target.id.split("-")[1]
            //make a fetch call to return a single message
            APIManager.getSingleMessage(messageToEdit)
                .then(message => {
                    //targeting the container that will be edited
                    const messageContainer = document.querySelector(`.messageContainer-${messageToEdit}`)
                    //add in the text form that will be edited
                    messageContainer.innerHTML = `          
                    <input type="text" class="messageEdit-${messageToEdit}">
                    `
                    document.querySelector(`.messageEdit-${messageToEdit}`).value = message.message
                    //now that the text form has been populated I have to target the container to be edited
                    const messageInput = document.querySelector(`.messageEdit-${messageToEdit}`)
                    //putting an event listener to the message so that a input box will appear and when enter is pressed, do a PUT request and then a GET to repopulate the updated info
                    messageInput.addEventListener("keypress", event => {
                        // by adding this if statement if the ENTER button is pressed it will execute
                        if (event.charCode === 13) {
                            const messageInputValue = document.querySelector(`.messageEdit-${messageToEdit}`).value

                            const updatedMessage = {
                                userId: activeUserId,
                                message: messageInputValue
                            }
                            let contentContainer = document.querySelector(".contentContainer")
                            contentContainer.innerHTML = ""
                            
                            APIManager.editSingleMessage(messageToEdit, updatedMessage)
                            .then(APIManager.getMessages())
                            .then(messages => addHTML(messages))
                        }
                    }
                    )
                })
        }

    }
}

