// Author: Manila Bui
// Makes fetch call(s) relevant to the main app container.

const baseUrl = "http://localhost:8088/users/";

export const getUser = id => fetch(`${baseUrl}${id}`).then(response => response.json());