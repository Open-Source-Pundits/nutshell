/*
Author: Lauren Riddle
Purpose: To create event handlers that POST, PUT, and DELETE a task
*/

import { saveNewTask, getAllTasks, deleteSingleTask, getSingleTask, editSingleTask } from "./APIManager"
import { renderTasks, attachEventListenerToCreateNewTaskButton, attachEventListenerToTaskName, attachEventListenerToNameInput } from "./domManager"
import { createNewTaskButton } from "./createForm"
const activeUser = sessionStorage.getItem("activeUser")
const activeUserId = parseInt(activeUser)

// this function grabs the value of the input box, and POSTs the new data to the API, then renders the new data on the DOM
export const postTask = id => {
    const date = document.querySelector("#taskDate").value
    const task = document.querySelector("#taskName").value

    const newTaskEntry = {
        userId: activeUserId,
        taskName: task,
        dueDate: date,
        completion: false
    }
    saveNewTask(newTaskEntry)
        .then(getAllTasks)
        .then(response => {
            const container = document.querySelector(".contentContainer")
            container.innerHTML = "<h2>Tasks</h2>"
            renderTasks(response)
            document.querySelector("#taskDate").value = ""
            document.querySelector("#taskName").value = ""
            createNewTaskButton()
            attachEventListenerToCreateNewTaskButton()
        })
}


// this function DELETEs the selected task from the API and renders the new task list to the DOM
export const deleteTask = () => {
    if (event.target.id.startsWith("deleteButton--")) {
        // Extract entry id from the button's id attribute
        const taskToDelete = event.target.id.split("--")[1]

        // Invoke the delete method, then get all entries and render them
        deleteSingleTask(taskToDelete)
            .then(getAllTasks)
            .then(response => {
                const container = document.querySelector(".contentContainer")
                container.innerHTML = "<h2>Tasks</h2>"
                renderTasks(response)
            })
    }
}

// this function performs a PUT on the task that will changed the completed property to True when the checkbox is checked
export const completeTask = () => {
    if (event.target.id.startsWith("taskCheckbox--")) {
        // Extract entry id from the checkbox's id attribute
        const taskToComplete = event.target.id.split("--")[1]
        console.log(taskToComplete)
        getSingleTask(taskToComplete)
            .then(task => {
                // change the completion property to "true"
                const updatedTaskEntry = {
                    userId: activeUserId,
                    taskName: task.taskName,
                    dueDate: task.dueDate,
                    completion: true
                }
                editSingleTask(taskToComplete, updatedTaskEntry)
                    .then(getAllTasks)
                    .then(response => {
                        const container = document.querySelector(".contentContainer")
                        container.innerHTML = "<h2>Tasks</h2>"
                        renderTasks(response)
                    })
            })
    }
}

const saveTaskNameEdit = () => {

}
export const editTask = () => {
    if (event.target.id.startsWith("task--")) {
        // Extract entry id from the checkbox's id attribute
        const taskToEdit = event.target.id.split("--")[1]
        getSingleTask(taskToEdit)
            .then(task => {
                const taskNameContainer = document.querySelector(`#taskNameContainer--${taskToEdit}`)
                taskNameContainer.innerHTML = `            <input type="text" name="name-input" id="taskNameEdit--${task.id}">
                `
                document.querySelector(`#taskNameEdit--${taskToEdit}`).value = task.taskName

                const nameInput = document.querySelector(`#taskNameEdit--${taskToEdit}`)
                nameInput.addEventListener("keypress", event => {
                    if (event.charCode === 13) {
                        const nameInputValue = document.querySelector(`#taskNameEdit--${taskToEdit}`).value
                        const updatedTask = {
                            userId: activeUserId,
                            taskName: nameInputValue,
                            dueDate: task.dueDate,
                            completion: false
                        }
                        editSingleTask(taskToEdit, updatedTask)
                            .then(getAllTasks)
                            .then(response => {
                                const container = document.querySelector(".contentContainer")
                                container.innerHTML = "<h2>Tasks</h2>"
                                renderTasks(response)
                            })

                    }
                })
            })
    }
}





