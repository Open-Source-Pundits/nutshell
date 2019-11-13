// Author: Manila Bui
// All fetch calls associated with news
import { baseUrl } from "../utils/global.js";

export const getCurrUserArticles = id => {
	return fetch(`${baseUrl}users/${id}?_embed=articles`)
		.then(r => r.json());
};