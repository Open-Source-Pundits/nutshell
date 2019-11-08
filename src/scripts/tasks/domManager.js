import { makeTaskComponent, buildAndAppendNewTaskForm } from "./createForm"
import { postTask, deleteTask } from "./eventHandlers"

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

  export const attachEventListenerToSaveTaskButton = () => {
    const saveNewTaskButton = document.querySelector("#saveNewTaskButton")
    saveNewTaskButton.addEventListener("click", postTask)
  }

  export const attachEventListenerToCreateNewTaskButton = () => {
    const createNewTaskButton = document.querySelector("#newTaskButton")
    createNewTaskButton.addEventListener("click", event =>{
      buildAndAppendNewTaskForm()
      attachEventListenerToSaveTaskButton()
    })
  }

 export const attachEventListenerToDeleteTaskButton = () => {
  const container = document.querySelector("#container")
container.addEventListener("click", deleteTask)
 }