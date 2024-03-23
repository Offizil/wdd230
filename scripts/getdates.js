// -----------SCRIPT FOR LAST MODIFIES TIME---------------
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


// // ---------SCRIPT FOR WEATHER FUNCTION-----------
// const apiKey = "f19aad4a71ffe25effca9a92842b7ac5";
// const city = "owo";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// const currentTemp = document.querySelector('#tempValue');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');


// document.addEventListener("DOMContentLoaded", () => {
//   // Fetch API and display
//   apiFetch(url).then(data => displayResults(currentTemp, weatherIcon, captionDesc, data));
// });



// // Make the API request using fetch()
// async function Fetch(apiURL) {
//   // JSON data
//   let data;

//   try {
//       // Fetch url
//       const response = await fetch(apiURL);
//       // Verify response
//       if (response.ok) {
//       // Get JSON data
//       data = await response.json();
//       // Catch error
//       } else {
//           throw Error(await response.text());
//       }
//   // Catch error
//   } catch (error) {
//       console.log(error);
//       return null;
//   }
//   return data;
// }


 
// function displayResults(currentTemp, weatherIcon, captionDesc, weatherData) {
//     // Get the temperature in Fahrenheit without decimals
//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
//     // Create url for icon
//     const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     // Create alt text
//     const desc = weatherData.weather[0].description.capitalize();
//     // Set properties
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = desc;

    
// }






// /**
//  * Returns the same capitalized string
//  * @returns Capitalized String
//  */
// String.prototype.capitalize = function() {
//   // split the string by spaces
//   let arr = this.split(" ");
//   // capitalized array
//   let capArr = [];
//   // loop through every word
//   arr.forEach(word => {
//       // capitalize word
//       capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
//   });
//   // join array and return
//   return capArr.join(" ");
// }




