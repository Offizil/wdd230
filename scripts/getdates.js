




  // Get the current date and time
  const lastModifiedString = new Date(document.lastModified);

  // Format the date as a string
  const formattedDate = lastModifiedString.toDateString();

  // Format the time as a string
  const formattedTime = lastModifiedString.toLocaleTimeString();

  // Get the element with the id "lastModified"
  const lastModifiedElement = document.getElementById("lastModified");

  // Update the content of the element
  lastModifiedElement.textContent = `Last modified: ${formattedDate} at ${formattedTime}`;




  // -----script for range functionality----
  const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("page-rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}