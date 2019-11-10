// Author: Manila Bui
// Makes fetch call(s) relevant to the main app container.
import { baseUrl } from "../utils/global";

export const getUser = id => fetch(`${baseUrl}users/${id}`).then(response => response.json());