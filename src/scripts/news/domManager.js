// Author: Manila Bui
// All rendering associated with the news.
// These functions will render the html + add event listeners where applicable.
import createArticle from "./createArticle";
import createForm from "./createForm";
import { getCurrUserArticles } from "./APIManager";
import { handleDeleteArticle, handleFormCreation, handleFormSubmission } from "./eventHandlers";

// Executed when "Create new article" or "Edit article" is clicked
export const renderForm = (isNewArticle, userId, articleId) => {
	const formContainer = document.querySelector(".formContainer");

	formContainer.innerHTML = createForm(isNewArticle);

	const submitButton = isNewArticle ? document.querySelector(".button-save") : document.querySelector(".button-update");

	submitButton.addEventListener("click", () => handleFormSubmission(userId, articleId));
};

// Executed when the news page is initially rendered + after there's a change to a user's articles (delete, edit, create).
export const renderArticles = (userId, articles) => {
	const contentContainer = document.querySelector(".contentContainer");

	let articlesHTML = "";

	articles.forEach(article => articlesHTML += createArticle(article));

	contentContainer.innerHTML = articlesHTML;

	const deleteArticleEls = document.querySelectorAll(".delete-article");

	deleteArticleEls.forEach(el => {
		const articleId = el.id.split("--")[1];

		el.addEventListener("click", () => handleDeleteArticle(userId, articleId));
	});
};

// Executed when link is clicked on landing page or side nav to bring the user to the news page
export const renderNewsPage = id => {
	getCurrUserArticles(id)
		.then(({ articles }) => renderArticles(id, articles.reverse()));

	const formContainer = document.querySelector(".formContainer");

	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";

	const newArticleFormLink = document.querySelector(".newArticleFormLink");

	newArticleFormLink.addEventListener("click", () => handleFormCreation(true));
};