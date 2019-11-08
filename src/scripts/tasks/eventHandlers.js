import { saveNewTask, getAllTasks } from "./APIManager"
import { renderTasks } from "./domManager"

export const postTask = () => {
    const date = document.querySelector("#taskDate").value
    const task = document.querySelector("#taskName").value

    const newTaskEntry = {
        userId: 1,
        taskName: task,
        dueDate: date,
        completion: true
    }
    saveNewTask(newTaskEntry)
        .then(getAllTasks)
        .then(response => {
            renderTasks(response)
            document.querySelector("#taskDate").value = ""
            document.querySelector("#taskName").value = ""
        })
}

