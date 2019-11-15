// Author: Manila Bui
// All rendering associated with the news.
// These functions will render the html + add event listeners where applicable.
import createArticle from "./createArticle";
import createForm from "./createForm";
import { getArticle, getCurrUserArticles } from "./APIManager";
import { handleDeleteArticle, handleEditArticle, handleFormCreation, handleFormSubmission } from "./eventHandlers";

// TO DO
const populateForm = articleId => {
	getArticle(articleId)
		.then(({ title, synopsis, url, id }) => {
			document.querySelector(".articleInput-title").value = title;
			document.querySelector(".articleInput-synopsis").value = synopsis;
			document.querySelector(".articleInput-url").value = url;
			document.querySelector(".articleInput-id").value = id;
		})
};

// Executed when "Create new article" or "Edit article" is clicked
export const renderForm = (userId, articleId) => {
	const formContainer = document.querySelector(".formContainer");

	formContainer.innerHTML = createForm(articleId);

	const submitButton = articleId ? document.querySelector(".button-update") : document.querySelector(".button-save");

	submitButton.addEventListener("click", e => {
		e.preventDefault();
		handleFormSubmission(userId, articleId);
	});

	if (articleId) populateForm(articleId);
};

// Executed when the news page is initially rendered + after there's a change to a user's articles (delete, edit, create).
export const renderArticles = (userId, articles) => {
	const contentContainer = document.querySelector(".contentContainer");

	let articlesHTML = "";

	articles.forEach(article => articlesHTML += createArticle(article));

	contentContainer.innerHTML = articlesHTML;

	const deleteArticleEls = document.querySelectorAll(".delete-article");
	const editArticleEls = document.querySelectorAll(".edit-article");

	deleteArticleEls.forEach(el => {
		const articleId = el.id.split("--")[1];

		el.addEventListener("click", () => handleDeleteArticle(userId, articleId));
	});

	editArticleEls.forEach(el => {
		const articleId = el.id.split("--")[1];

		el.addEventListener("click", () => handleEditArticle(userId, articleId));
	});
};

// Executed when link is clicked on landing page or side nav to bring the user to the news page
export const renderNewsPage = id => {
	const userId = parseInt(id);

	getCurrUserArticles(userId)
		.then(({ articles }) => renderArticles(userId, articles.reverse()));

	const formContainer = document.querySelector(".formContainer");

	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";

	const newArticleFormLink = document.querySelector(".newArticleFormLink");

	newArticleFormLink.addEventListener("click", () => handleFormCreation(userId, 0));
};