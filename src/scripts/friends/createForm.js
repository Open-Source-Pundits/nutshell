import { attachEventListenerToFindFriendButton } from "./domManager"

export const addNewFriendButton = () => {
    // make html for the create new task button and put it on the DOM
    const addNewFriendButton = `
      <button id="newFriendButton">Add a Friend</button>
      `
    const formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = addNewFriendButton
}

export const buildAndAppendNewFriendForm = () => {
    // make html for the new task form and put on the DOM
    let newFriendForm =
        `<h1>Add a Friend</h1>
    <form id="friendsForm">
        <input type="hidden" name="id-input" id="id">
        <section>
            <label for="name-input">Enter Username:</label>
            <input type="text" name="name-input" id="userName">
        </section>
    </form>
    <button id="findFriend">Find Friend</button>
    <div id="friendsResultsContainer"></div>
    `
    const formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = newFriendForm
    attachEventListenerToFindFriendButton()
}

export const makeFriendComponent = (friend, friendsPage) => {
    // Create HTML structure for a task
    let singleFriendHtml =  `
        <div id="friendNameContainer--${friend.id}">
        <h3 id="friend--${friend.id}">${friend.username}</h3>
        </div>
        
        
    `
    // if loading the tasks page, add a checkbox and button
    if(friendsPage === "friendsPage"){
        return `<section class="friendsSection">
        <div id="friendNameContainer--${friend.id}">
        <h3 id="friend--${friend.id}">${friend.user.username}</h3>
        </div>
        <button id="deleteButton--${friend.id}">Delete</button>
        </section>`
    }
    // otherwise just load the name and date
    else {
        return `<section class="friendsSection">${singleFriendHtml}
        <button id="friends-${friend.id}">Save Friend</button>
        </section>`
    }
    
}