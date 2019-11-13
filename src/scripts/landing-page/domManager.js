// Author: Manila Bui
// Render landing page html + add event Listeners
import createLanding from "./createLanding";
import { handleFooterClick } from "./eventHandlers";
import { getFirstThreeTasks } from "../tasks/APIManager";
import { makeTaskComponent } from "../tasks/createForm";
import API from "../events/APIManager.js"
import HTMLForms from "../events/createForm.js"

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
	getFirstThreeTasks()
		.then(tasks => {
			let HtmlForAllTasks = ""
			tasks.forEach(task => {
				if (task.completion !== true) {
					const taskHtml = makeTaskComponent(task)
					HtmlForAllTasks += taskHtml
				}

				tasksContainer.innerHTML = HtmlForAllTasks

			})
		})
	

	// display preview of events on landing page

	const eventsContainer = document.querySelector(".landingContentContainer-events")
	API.getEventsOnDash()
		.then(events => {
			let HTMLForAllEvents = ""
			EventSource.forEach(event => {
				const eventHTML = dashEvents(event, "dash")
				HTMLForAllEvents += eventHTML
			})
			eventsContainer.innerHTML = HTMLForAllEvents
		})

}