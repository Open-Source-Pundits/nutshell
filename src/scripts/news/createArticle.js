// Author: Manila Bui
// creates HTML for a single article
export default ({ title, synopsis, url }) => {
	return `
		<h3 class="ttu f4 fw7">${title}</h3>
		<a class="f6 fw7 blue no-underline underline-hover" target="_blank" href="${url}">
			Link to article
		</a>
		<p>${synopsis}</p>
		<hr/>
	`;
};