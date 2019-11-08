import { makeTaskComponent } from "./createForm"
import { postTask } from "./eventHandlers"

// loop through tasks and add them to the DOM
export const renderTasks = (tasks) => {
    let HtmlForAllTasks = ""
    tasks.forEach(task => {
      const taskHtml = makeTaskComponent(task)
      HtmlForAllTasks += taskHtml
    })
    const container = document.querySelector("#container")
    container.innerHTML = HtmlForAllTasks
  }

  export const attachEventListenerToTaskButton = () => {
    const newTaskButton = document.querySelector("#newTaskButton")
    newTaskButton.addEventListener("click", postTask)
  }