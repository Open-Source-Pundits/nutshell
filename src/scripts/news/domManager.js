// Author: Manila Bui
// All rendering associated with the news.
import createArticle from "./createArticle";
import { getCurrUserArticles } from "./APIManager";
import { handleDeleteArticle } from "./eventHandlers";

const renderArticle = article => {
	const contentContainer = document.querySelector(".contentContainer");

	contentContainer.innerHTML += createArticle(article);
};

// Executed when news footer on landing page is clicked.
export const renderNewsPage = id => {
	const formContainer = document.querySelector(".formContainer");
	
	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";

	getCurrUserArticles(id).then(({ articles }) => {
		articles.reverse().forEach(article => renderArticle(article));
		
		const deleteArticleEls = document.querySelectorAll(".delete-article");

		deleteArticleEls.forEach(el => {
			const id = el.id.split("--")[1];

			el.addEventListener("click", () => handleDeleteArticle(id));
		});
	});
};