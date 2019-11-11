/*
Author: Lauren Riddle
Purpose: This module holds all of the fetch calls for the tasks page
*/

const baseURL = "http://localhost:8088/"

// GET all tasks from API
export const getAllTasks = () => {
  return fetch(`${baseURL}tasks`)
    .then(response => response.json())
}

// POST a single task to the API
export const saveNewTask = (task) => {
  return fetch(`${baseURL}tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
}

// DELETE a single task from the API
export const deleteSingleTask = (taskId) => {
  return fetch(`${baseURL}tasks/${taskId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
}
