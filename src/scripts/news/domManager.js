// Author: Manila Bui
// All rendering associated with the news.
import createArticle from "./createArticle";
import { getCurrUserArticles } from "./APIManager";
import { handleDeleteArticle } from "./eventHandlers";

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

// Executed when news footer on landing page is clicked.
export const renderNewsPage = id => {
	const formContainer = document.querySelector(".formContainer");
	
	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";

	getCurrUserArticles(id)
		.then(({ articles }) => renderArticles(id, articles.reverse()));
};