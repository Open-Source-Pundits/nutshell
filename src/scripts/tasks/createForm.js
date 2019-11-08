/*
Author: Lauren Riddle
Purpose: This module has functions that hold the HTML that will be rendered on the page
*/
export const makeTaskComponent = (tasks) => {
    // Create HTML structure for a task
    return `
      <section>
        <h3 id="task--${tasks.id}">${tasks.taskName}</h3>
        <p>Due Date: ${tasks.dueDate}</p>
        <label>Completed:</label><input type="checkbox" name="vehicle1" svalue="Bike">
        <button id="deleteButton--${tasks.id}">Delete</button>
        </section>
    `
  }


  export const  buildAndAppendNewTaskForm = () => {
    let newTaskForm =
        `<h1>New Task</h1>
    <form id="tasksForm">
        <input type="hidden" name="id-input" id="id">
        <section>
            <label for="date-input">Task:</label>
            <input type="text" name="name-input" id="taskName">
        </section>
        <section>
            <label for="date-input">Desired Completion Date:</label>
            <input type="date" name="date-input" id="taskDate">
        </section>
    </form>
    <button id="saveNewTaskButton">Save New Task</button>
`
const formContainer = document.querySelector(".formContainer")
formContainer.innerHTML = newTaskForm
  }

  export const createNewTaskButton = () => {
      const createNewTaskButton = `
      <button id="newTaskButton">Create a New Task</button>
      `
      const formContainer = document.querySelector(".formContainer")
      formContainer.innerHTML = createNewTaskButton
  }