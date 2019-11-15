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
    `
    const formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = newFriendForm
}