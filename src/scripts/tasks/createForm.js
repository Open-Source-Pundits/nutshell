/*
Author: Lauren Riddle
Purpose: This module has functions that hold the HTML that will be rendered on the tasks page
*/
export const makeTaskComponent = (tasks, tasksPage) => {
    // Create HTML structure for a task
    let singleTaskHtml =  `
        <div id="taskNameContainer--${tasks.id}">
        <h3 id="task--${tasks.id}">${tasks.taskName}</h3>
        </div>
        <p>Due Date: ${tasks.dueDate}</p>
        
    `
    // if loading the tasks page, add a checkbox and button
    if(tasksPage === "tasksPage"){
        return `<section>
        ${singleTaskHtml}
        <label>Completed:</label>
        <input type="checkbox" name="complete" id="taskCheckbox--${tasks.id}">
        <button id="deleteButton--${tasks.id}">Delete</button>
        </section>`
    }
    // otherwise just load the name and date
    else {
        return `<section class="tasksSection">${singleTaskHtml}</section>`
    }
    
}


export const buildAndAppendNewTaskForm = () => {
    // make html for the new task form and put on the DOM
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
    // make html for the create new task button and put it on the DOM
    const createNewTaskButton = `
      <button id="newTaskButton">Create a New Task</button>
      `
    const formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = createNewTaskButton
}