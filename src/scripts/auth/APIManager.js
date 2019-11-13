const baseURL = "http://localhost:8088/"

export const postNewUser = (user) => {
    return fetch(`${baseURL}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
}

export const getRegisteredUser = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(response => response.json())
}