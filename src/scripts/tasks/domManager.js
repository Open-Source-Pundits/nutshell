/*
Author: Lauren Riddle
Purpose: To render the html to the DOM and add event listeners
*/

import { makeTaskComponent, buildAndAppendNewTaskForm } from "./createForm"
import { postTask, deleteTask } from "./eventHandlers"

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
export const attachEventListenerToSaveTaskButton = () => {
  const saveNewTaskButton = document.querySelector("#saveNewTaskButton")
  saveNewTaskButton.addEventListener("click", postTask)
}

// attach event listener to the create new task button and call buildAndAppendNewTaskForm and attachEventListenerToSaveTaskButton when the button is clicked
export const attachEventListenerToCreateNewTaskButton = () => {
  const createNewTaskButton = document.querySelector("#newTaskButton")
  createNewTaskButton.addEventListener("click", event => {
    buildAndAppendNewTaskForm()
    attachEventListenerToSaveTaskButton()
  })
}

// attach event listener to the delete task button and call deleteTask when the button is clicked
export const attachEventListenerToDeleteTaskButton = () => {
  const container = document.querySelector(".contentContainer")
  container.addEventListener("click", deleteTask)
}