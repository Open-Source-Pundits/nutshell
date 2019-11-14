// Author: Manila Bui
// Handle all events associated with news page
import { deleteArticle, getCurrUserArticles } from "./APIManager";
import { renderArticles, renderForm } from "./domManager";

// Executed when the delete
export const handleDeleteArticle = (userId, articleId) => {
	deleteArticle(articleId)
		.then(() => getCurrUserArticles(userId))
		.then(({ articles }) => renderArticles(userId, articles.reverse()));
};

export const handleFormSubmission = () => {
	
};

export const handleFormCreation = isNewArticle => isNewArticle ? renderForm(true) : renderForm(false);