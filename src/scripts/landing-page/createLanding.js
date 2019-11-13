// Author: Manila Bui
// Creates the html for the containers in the landing page.
export default () => {
	return `
		<div class="landingContainer flex ma4">
			<div class="landingCol w-100">
				<section class="landingSectionContainer landingSectionContainer-events">
					<header class="landingSectionHeader">Events</header>
					<div class="landingContentContainer landingContentContainer-events"></div>
					<footer class="landingSectionFooter dim pointer">+ More events</footer>
				</section>
				<section class="landingSectionContainer landingEventsContainer">
					<header class="landingSectionHeader">Tasks</header>
					<div class="landingContentContainer overflow-auto landingContentContainer-tasks"></div>
					<footer class="landingSectionFooter dim pointer">+ More tasks</footer>
				</section>
			</div>
			<div class="landingCol w-100">
				<section class="landingSectionContainer landingSectionContainer-messages">
					<header class="landingSectionHeader">Messages</header>
					<div class="landingContentContainer overflow-auto landingContentContainer-messages"></div>
					<footer class="landingSectionFooter dim pointer">+ More messages</footer>
				</section>
			</div>
			<div class="landingCol w-100">
				<section class="landingSectionContainer landingSectionContainer-news">
					<header class="landingSectionHeader">News</header>
					<div class="landingContentContainer landingContentContainer-news"></div>
					<footer class="landingSectionFooter dim pointer">+ More news</footer>
				</section>
				<section class="landingSectionContainer landingSectionContainer-friends">
					<header class="landingSectionHeader">Friends</header>
					<div class="landingContentContainer landingContentContainer-friends"></div>
					<footer class="landingSectionFooter dim pointer">+ More friends</footer>
				</section>
			</div>
		</div>
	`;
};