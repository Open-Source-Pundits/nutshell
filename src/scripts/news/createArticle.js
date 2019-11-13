// Author: Manila Bui
// creates HTML for a single article
export default ({ id, title, synopsis, url, timestamp }) => {
	return `
		<section class="pv2">
			<a class="ttu f4 fw6 db black link hover-blue" target="_blank" href="${url}">
				${title}
			</a>
			<p class="i f6">${synopsis}</p>
			<footer class="f7 fw6">
				<div class="dib mr3">${timestamp}</div>
				<div class="delete-article ttu fr grow pointer orange" id="delete-article--${id}">Delete article</div>
			</footer>
		</section>
		<hr>
	`;
};