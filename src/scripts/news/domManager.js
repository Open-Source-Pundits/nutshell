// Author: Manila Bui
// All rendering associated with the news.
import createArticle from "./createArticle";
import { getCurrUserArticles } from "./domManager";

const renderArticle = () => {

};

// Executed when news footer on landing page is clicked.
export const renderNewsPage = id => {
	const contentContainer = document.querySelector(".contentContainer");
	const formContainer = document.querySelector(".formContainer");
	
	// need to make a get request to grab all articles with this user id.
	getCurrUserArticles(id).then(articles => articles.forEach(article => renderArticle()));

	contentContainer.innerHTML += createArticle();
	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";
};

