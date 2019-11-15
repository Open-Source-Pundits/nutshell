

const baseurl = "http://localhost:8088/"
// saveMessageFriend author James Chapman
export const saveMessageFriend = (friendRequest) => {
    return fetch(`${baseurl}friends`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendRequest)
    })
}

export const getFriendsForDash = (activeUser) => {
    return fetch(`${baseurl}friends?_expand=user`)
        .then(response => response.json())
}
