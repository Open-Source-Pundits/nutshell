/*
Author: Lauren Riddle
Purpose: To render the html to the DOM and add event listeners
*/

import { makeTaskComponent, buildAndAppendNewTaskForm } from "./createForm"
import { postTask, deleteTask, completeTask } from "./eventHandlers"

// loop through tasks and add them to the DOM
export const renderTasks = (tasks) => {
  let HtmlForAllTasks = ""
  tasks.forEach(task => {
    if (task.completion !== true) {
      const taskHtml = makeTaskComponent(task)
      HtmlForAllTasks += taskHtml
    }
  })
  const container = document.querySelector(".contentContainer")
  container.innerHTML += HtmlForAllTasks
}

// attach event listener to the save button and call postTask when the button is clicked
export const attachEventListenerToSaveTaskButton = id => {
  const saveNewTaskButton = document.querySelector("#saveNewTaskButton")
  saveNewTaskButton.addEventListener("click", () => postTask(id))
}

// attach event listener to the create new task button and call buildAndAppendNewTaskForm and attachEventListenerToSaveTaskButton when the button is clicked
export const attachEventListenerToCreateNewTaskButton = id => {
  const createNewTaskButton = document.querySelector("#newTaskButton")
  createNewTaskButton.addEventListener("click", () => {
    buildAndAppendNewTaskForm()
    attachEventListenerToSaveTaskButton(id)
  })
}

// attach event listener to the delete task button and call deleteTask when the button is clicked
export const attachEventListenerToDeleteTaskButton = () => {
  const container = document.querySelector(".contentContainer")
  container.addEventListener("click", deleteTask)
}

export const attachEventListenerToCheckBox = () => {
  const container = document.querySelector(".contentContainer")
  container.addEventListener("change", completeTask)
}