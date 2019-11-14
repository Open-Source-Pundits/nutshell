// Author: Manila Bui
// Handle all events associated with news page
import { deleteArticle, getCurrUserArticles } from "./APIManager";
import { renderArticles, renderForm } from "./domManager";

const getValue = selector => {
	const input = document.querySelector(selector);

	return input.checkValidity() ? input.value : false;
};

// Executed when the delete
export const handleDeleteArticle = (userId, articleId) => {
	deleteArticle(articleId)
		.then(() => getCurrUserArticles(userId))
		.then(({ articles }) => renderArticles(userId, articles.reverse()));
};

// Executed when save or update is clicked on the form
export const handleFormSubmission = (userId, articleId) => {
	const title = getValue(".input-title");
	const synopsis = getValue(".input-synopsis");
	const url = getValue(".input-url");
	const timestamp = Date();

	if (!title || !synopsis || !url) return console.log("Invalid entry.");

	const article = { title, synopsis, url, timestamp };
	console.log(article)
	// postEntry(newEntry)
	// 	.then(getEntries)
	// 	.then(entries => renderEntries(entries));
};

export const handleFormCreation = (isNewArticle, userId, articleId) => {
	return isNewArticle 
		? renderForm(true, userId, articleId) 
		: renderForm(false, userId, articleId)
};