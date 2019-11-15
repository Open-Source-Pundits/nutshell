// Author: Manila Bui
// create html for landing page news snippets
export default ({ url, title, timestamp }) => {
	timestamp = timestamp.split(" ").slice(0,5).join(" ");

	return `
		<div>
        	<h3><a class="black link hover-blue" target="_blank" href="${url}">${title}</a></h3>
        	<div>${timestamp}</div>
        </div>
        <hr>
    `;
};