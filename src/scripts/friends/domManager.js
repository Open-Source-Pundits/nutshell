import { buildAndAppendNewFriendForm } from "./createForm"

export const attachEventListenerToAddFriendButton = id => {
    const addAFriendButton = document.querySelector("#newFriendButton")
    addAFriendButton.addEventListener("click", () => {
      buildAndAppendNewFriendForm()
    })
  }