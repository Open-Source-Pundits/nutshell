// Author: Manila Bui
// Handle all events associated with news page
import { postArticle, deleteArticle, getCurrUserArticles } from "./APIManager";
import { renderArticles, renderForm, renderNewsPage } from "./domManager";

const getValue = selector => {
	const input = document.querySelector(selector);

	return input.checkValidity() ? input.value : false;
};

// Executed when create new article is clicked and when edit button is clicked
export const handleFormCreation = (userId, articleId) => renderForm(userId, articleId);

// Executed when edit icon is clicked on an article
export const handleEditArticle = (userId, articleId) => {
	renderForm(userId, articleId);

};
	// // TO DO: continue twerking on dis shiznizz
	// putArticle(article)
	// 	.then(() => renderNewsPage(userId));

// Executed when delete is clicked on an article
export const handleDeleteArticle = (userId, articleId) => {
	deleteArticle(articleId)
		.then(() => renderNewsPage(userId));
};

// Executed when save or update is clicked on the form
export const handleFormSubmission = (userId, articleId) => {
	const title = getValue(".articleInput-title");
	const synopsis = getValue(".articleInput-synopsis");
	const url = getValue(".articleInput-url");
	const timestamp = Date();

	if (!title || !synopsis || !url) return console.log("Invalid entry.");

	const article = { title, synopsis, url, timestamp, userId };

	postArticle(article)
		.then(() => renderNewsPage(userId));
};