import { buildAndAppendNewFriendForm, makeFriendComponent, addNewFriendButton } from "./createForm"
import { getFriends, getFriendsForDash } from "./APIManager"
import addAFriend from "../messages/eventHandlers"

export const renderFriendsResults = (friends) => {
    let HtmlForAllFriends = ""
    friends.forEach(friend => {

        const friendsHtml = makeFriendComponent(friend)
        HtmlForAllFriends += friendsHtml

    })
    const friendsResultsContainer = document.querySelector("#friendsResultsContainer")
    friendsResultsContainer.innerHTML = ""
    friendsResultsContainer.innerHTML += HtmlForAllFriends
    // attachEventListenerToSaveFriendButton()
}

export const renderFriendsList = (friends) => {
    let HtmlForAllFriendsList = ""
    friends.forEach(friend => {

        const allFriendsHtml = makeFriendComponent(friend, "friendsPage")
        HtmlForAllFriendsList += allFriendsHtml

    })
    const allFriendsContainer = document.querySelector(".contentContainer")
    allFriendsContainer.innerHTML = ""
    allFriendsContainer.innerHTML += HtmlForAllFriendsList
}


export const attachEventListenerToAddFriendButton = id => {
    const addAFriendButton = document.querySelector("#newFriendButton")
    addAFriendButton.addEventListener("click", () => {
        buildAndAppendNewFriendForm()
    })
}

export const attachEventListenerToFindFriendButton = id => {
    const findAFriendButton = document.querySelector("#findFriend")
    findAFriendButton.addEventListener("click", () => {
        const friendsInput = document.querySelector("#userName").value
        getFriends(friendsInput)
        .then(response => {
            renderFriendsResults(response)
            attachEventListenerToSaveFriendButton()

            })
    })
}

export const friendsDashboardHTML = (friends) => {
    let friendsContainer = document.querySelector(".landingContentContainer-friends")
    let friendsEntries = ""

    for (let i = 0; i < friends.length; i++) {
        // friendsEntries = friends[i];
        // friendsContainer.innerHTML +=
    }
}

export const attachEventListenerToSaveFriendButton = id => {
    const friendsContainer = document.querySelector("#friendsResultsContainer")
    friendsContainer.addEventListener("click", event => {
        console.log(event)
        addAFriend.addFriend()
        getFriendsForDash()
        .then(response => renderFriendsList(response))
        const formContainer = document.querySelector(".formContainer")
        formContainer.innerHTML = ""
        addNewFriendButton()
        attachEventListenerToAddFriendButton()
        })

}
