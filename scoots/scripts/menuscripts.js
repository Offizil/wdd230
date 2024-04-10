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



window.addEventListener('scroll', function() {
	var header = document.getElementById('header');
	var scrollThreshold = 150; // Adjust this value as needed
	
	if (window.scrollY > scrollThreshold) {
	  header.classList.add('scrolled');
	} else {
	  header.classList.remove('scrolled');
	}
  });
  



