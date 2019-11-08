/*
Author: Lauren Riddle
Purpose: This module holds all fetch calls for the tasks page
*/

const baseURL = "http://localhost:8088/"

export const getAllTasks = () => {
    return fetch(`${baseURL}tasks`)
      .then(response => response.json())
  }

  export const saveNewTask = (task) => {
    return fetch(`${baseURL}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
  }

  export const deleteSingleTask = (taskId) => {
    return fetch(`${baseURL}tasks/${taskId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}
 