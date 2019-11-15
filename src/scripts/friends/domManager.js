
l
export const friendsDashboardHTML = (friends) =>{
    let friendsContainer = document.querySelector(".landingContentContainer-friends")
    let friendsEntries = ""

    for (let i = 0; i < friends.length; i++) {
        friendsEntries = friends[i];
        friendsContainer.innerHTML +=
    }
}