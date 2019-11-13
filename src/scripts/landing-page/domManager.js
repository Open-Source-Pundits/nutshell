// Author: Manila Bui
// Render landing page html + add event Listeners
import createLanding from "./createLanding";
import { handleFooterClick } from "./eventHandlers";
import { getAllTasks } from "../tasks/APIManager";
import { makeTaskComponent } from "../tasks/createForm";

// Executed by renderApp
export const renderLanding = id => {

	const mainContainer = document.querySelector(".mainContainer");

	mainContainer.innerHTML = createLanding();

	const sectionFooters = document.querySelectorAll(".landingSectionFooter");

	sectionFooters.forEach(footer => {
		const currSection = footer.innerHTML.split(" ")[2];

		footer.addEventListener("click", () => handleFooterClick(id, currSection));
	})
	// display a preview of tasks on landing page
	const tasksContainer = document.querySelector(".landingContentContainer-tasks")

	getAllTasks()
		.then(tasks => {
			for (let i = 0; i < 3; i++) {
				let HtmlForAllTasks = ""
				tasks.forEach(task => {
					if (task.completion !== true) {
						const taskHtml = makeTaskComponent(task)
						HtmlForAllTasks += taskHtml
					}
					tasksContainer.innerHTML = HtmlForAllTasks
				})
			}
		})

}