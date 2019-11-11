/*
Author: Lauren Riddle
Purpose: This module holds all of the fetch calls for the tasks page
*/

const baseURL = "http://localhost:8088/"

// GET all tasks from API
export const getAllTasks = () => {
  const activeUser = sessionStorage.getItem("activeUser")
  const activeUserId = parseInt(activeUser)
  return fetch(`${baseURL}tasks?userId=${activeUserId}`)
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


export const editSingleTask = (taskId, task) => {
  return fetch(`${baseURL}tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
}

export const getSingleTask = (taskId) => {
  return fetch(`${baseURL}tasks/${taskId}`)
      .then(response => response.json())
}