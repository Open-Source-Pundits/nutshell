// Author: Manila Bui
// Creates the html for the containers in the landing page.
export default () => {
	return `
		<div class="landingContainer">
			<div class="landingCol">
				<section class="landingSectionContainer landingSectionContainer-events">
					<header class="landingSectionHeader">Events</header>
					<div class="landingContentContainer landingContentContainer-events"></div>
					<footer class="landingSectionFooter">+ More events</footer>
				</section>
				<section class="landingSectionContainer landingEventsContainer">
					<header class="landingSectionHeader">Tasks</header>
					<div class="landingContentContainer landingContentContainer-tasks"></div>
					<footer class="landingSectionFooter">+ More tasks</footer>
				</section>
			</div>
			<div class="landingCol">
				<section class="landingSectionContainer landingSectionContainer-messages">
					<header class="landingSectionHeader">Messages</header>
					<div class="landingContentContainer landingContentContainer-messages"></div>
					<footer class="landingSectionFooter">+ More messages</footer>
				</section>
			</div>
			<div class="landingCol">
				<section class="landingSectionContainer landingSectionContainer-news">
					<header class="landingSectionHeader">News</header>
					<div class="landingContentContainer landingContentContainer-news"></div>
					<footer class="landingSectionFooter">+ More news</footer>
				</section>
				<section class="landingSectionContainer landingSectionContainer-friends">
					<header class="landingSectionHeader">Friends</header>
					<div class="landingContentContainer landingContentContainer-friends"></div>
					<footer class="landingSectionFooter">+ More friends</footer>
				</section>
			</div>
		</div>
	`;
};