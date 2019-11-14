// Author: Manila Bui
// create html for the form

export default () => {
	return `
		<form id="articleForm">
			<fieldset>
				<label for="title" class="f6 b db mb2">Title</label>
				<input 
					class="articleInput-title" 
					type="text" 
					name="title" 
					required 
				/>
			</fieldset>
			<fieldset>
				<label for="synopsis" class="f6 b db mb2">Synopsis</label>
				<textarea 
					class="articleInput-synopsis"
					name="synopsis"
					placeholder="Tell me bout it"
					required
				></textarea>
			</fieldset>
			<fieldset>
				<label for="url" class="f6 b db mb2">Url</label>
				<input 
					class="articleInput-url" 
					type="text" 
					name="url" 
					required 
				/>
			</fieldset>
			<input 
				class="input-id" 
				type="number" 
				name="id" 
				hidden
			/>
		</form>
		<input 
			class="button-save"
			form="articleForm"
			type="submit" 
			name="saveArticle" 
			value="Save"
		/>
		<input 
			class="button-update"
			form="articleForm"
			type="submit" 
			name="updateArticle" 
			value="Update"
			hidden
		/>
	`;
};