import { baseUrl } from "../utils/global"


export const getFriends = (userInput) => {
    return fetch(`${baseUrl}users?q=${userInput}`)
    .then(response => response.json())
  }