import { baseUrl } from "../utils/global"


export const getFriends = (userInput) => {
    return fetch(`${baseUrl}users?q=${userInput}`)
    .then(response => response.json())
  }


// saveMessageFriend author James Chapman
export const saveMessageFriend = (friendRequest) => {
    return fetch(`${baseUrl}friends`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendRequest)
    })
}

export const getFriendsForDash = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const activeUserId = parseInt(activeUser)
    return fetch(`${baseUrl}friends?_expand=user&loggedInUserId=${activeUserId}`)
        .then(response => response.json())
}
