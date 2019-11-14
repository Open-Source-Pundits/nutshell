const baseURL = "http://localhost:8088/"

export const postNewUser = (user) => {
    return fetch(`${baseURL}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
}

export const getRegisteredUser = (email) => {
    return fetch(`${baseURL}users?email=${email}`)
    .then(response => response.json())
}

export const getUserEmail = (userInput) => {
  return fetch(`${baseURL}users?q=${userInput}`)
  .then(response => response.json())
}
