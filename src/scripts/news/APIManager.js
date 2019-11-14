// Author: Manila Bui
// All fetch calls associated with news
import { baseUrl } from "../utils/global.js";

export const getCurrUserArticles = id => {
	return fetch(`${baseUrl}users/${id}?_embed=articles`)
		.then(r => r.json());
};

export const deleteArticle = id => {
	return fetch(`${baseUrl}articles/${id}`, {
		method: "DELETE"
	})
		.then(r => r.json());
}

export const postArticle = article => {
	return fetch(`${baseUrl}articles`, {
    	method: "POST",
    	headers: {
        	"Content-Type": "application/json"
    	},
    	body: JSON.stringify(article)
	});
}