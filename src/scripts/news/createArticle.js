// Author: Manila Bui
// creates HTML for a single article
export default ({ id, title, synopsis, url, timestamp }) => {
	return `
		<section class="pv1">
			<header>
				<div class="edit-article f3 fl pr6 pb2 gray hover-orange pointer" id="edit-article--${id}" alt="Edit article">&#x270E;</div>
				<a class="ttu f4 fw6 dib black link hover-blue" target="_blank" href="${url}">
					${title}
				</a>
			</header>
			<p class="i f6">${synopsis}</p>
			<footer class="f7 fw6">
				<div class="dib mr3">${timestamp}</div>
				<div class="delete-article ttu fr grow pointer orange" id="delete-article--${id}">Delete article</div>
			</footer>
		</section>
		<hr>
	`;
};