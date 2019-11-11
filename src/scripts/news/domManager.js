// Author: Manila Bui
// All rendering associated with the news.
import createArticle from "./createArticle";

// Executed when news footer on landing page is clicked.
export const renderNewsPage = () => {
	const contentContainer = document.querySelector(".contentContainer");
	const formContainer = document.querySelector(".formContainer");
	
	contentContainer.innerHTML += createArticle();
	formContainer.innerHTML = "<div class='newArticleFormLink dim pointer'>+ Create new article</div>";
};