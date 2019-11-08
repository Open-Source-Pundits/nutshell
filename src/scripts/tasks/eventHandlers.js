import { saveNewTask, getAllTasks, deleteSingleTask } from "./APIManager"
import { renderTasks } from "./domManager"
import { createNewTaskButton } from "./createForm"

export const postTask = () => {
    const date = document.querySelector("#taskDate").value
    const task = document.querySelector("#taskName").value

    const newTaskEntry = {
        userId: 1,
        taskName: task,
        dueDate: date,
        completion: false
    }
    saveNewTask(newTaskEntry)
        .then(getAllTasks)
        .then(response => {
            renderTasks(response)
            document.querySelector("#taskDate").value = ""
            document.querySelector("#taskName").value = ""
            createNewTaskButton()
        })
}


export const deleteTask = () => {
    if (event.target.id.startsWith("deleteButton--")) {
        // Extract entry id from the button's id attribute
        const taskToDelete = event.target.id.split("--")[1]

        // Invoke the delete method, then get all entries and render them
        deleteSingleTask(taskToDelete)
            .then(getAllTasks)
            .then(response => renderTasks(response))
    }
}


