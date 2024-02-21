// menuscripts.js'

// lets define the elements that we are going to use. 
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');



// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/


const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");



// const content = document.querySelector("#content");
// const allcontent = document.querySelectorAll('#content, #content *,  #header, #footer, #current_events, #spotlights_events, #weather_section, #forecast, #forecast *');


const footer = document.querySelector("footer");
const header = document.querySelector("header");
const events = document.querySelector("#current_events");
const advert = document.querySelector("#spotlights_adverts");
const weather = document.querySelector("#weather_section");
const forecast = document.querySelector(".forecast");
// const arti



modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
	// allcontent.classList.toggle('dark-mode');

	footer.classList.toggle("dark-mode");
	header.classList.toggle("dark-mode");
	events.classList.toggle("dark-mode");
	advert.classList.toggle("dark-mode");
	weather.classList.toggle("dark-mode");
	forecast.classList.toggle("dark-mode");
	


});


