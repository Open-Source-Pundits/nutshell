// Author: Manila Bui
// Handle all events associated with news page
import { deleteArticle, getCurrUserArticles } from "./APIManager";
import { renderArticles } from "./domManager";

export const handleDeleteArticle = (userId, articleId) => {
	deleteArticle(articleId)
		.then(() => getCurrUserArticles(userId))
		.then(({ articles }) => renderArticles(userId, articles.reverse()));
};