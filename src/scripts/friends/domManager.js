import { buildAndAppendNewFriendForm, makeFriendComponent } from "./createForm"
import { getFriends } from "./APIManager"


export const renderFriendsResults = (friends) => {
    let HtmlForAllFriends = ""
    friends.forEach(friend => {
      
        const friendsHtml = makeFriendComponent(friend)
        HtmlForAllFriends += friendsHtml

    })
    const friendsResultsContainer = document.querySelector("#friendsResultsContainer")
    friendsResultsContainer.innerHTML = ""
    friendsResultsContainer.innerHTML += HtmlForAllFriends
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
        attachEventListenerToAddFriendButton()

      })
    })
  }