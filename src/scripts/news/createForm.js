// Author: Manila Bui
// create html for the form

export default () => {
	return `
		<form>
			<fieldset>
				<label for="date">Date</label>
				<input 
					class="input-date" 
					type="date" 
					name="date" 
					required 
				/>
			</fieldset>
			<fieldset>
			</fieldset>
		</form>
	`;
};