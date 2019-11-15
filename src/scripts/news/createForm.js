// Author: Manila Bui
// create html for the form
export default articleId => {
	const header = articleId ? "Edit Article" : "Create New Article";
	const button = articleId
		? `
			<input 
				class="button-update f6 fw5 bg-white orange hover-white hover-bg-green pointer pa2 pv1 mt2 mb3 mr3 fr br2"
				form="articleForm"
				type="submit" 
				name="updateArticle" 
				value="Update"
			/>
		`
		:`
			<input 
				class="button-save f6 pv1 ph3 mv3 mr3 fr br2"
				form="articleForm"
				type="submit" 
				name="saveArticle" 
				value="Save"
			/>
		`;

	return `
		<div class="article-form ph5 pt4 pb5 mt5 mr3 br3 shadow-1">
			<h3>${header}</h3>
			<form id="articleForm">
				<fieldset>
					<label for="title" class="f6 b db mb2">Title</label>
					<input 
						class="articleInput-title w-100" 
						type="text" 
						name="title" 
						required 
					/>
				</fieldset>
				<fieldset>
					<label for="synopsis" class="f6 b db mb2">Synopsis</label>
					<textarea 
						class="articleInput-synopsis w-100"
						name="synopsis"
						placeholder="Tell me bout it"
						required
					></textarea>
				</fieldset>
				<fieldset>
					<label for="url" class="f6 b db mb2">Url</label>
					<input 
						class="articleInput-url w-100"
						type="text"
						name="url"
						required
					/>
				</fieldset>
				<input
					class="articleInput-timestamp" 
					type="text" 
					name="timestamp" 
					hidden
				/>
				<input 
					class="articleInput-id" 
					type="number" 
					name="id" 
					hidden
				/>
			</form>
			${button}
		</div>
	`;
};