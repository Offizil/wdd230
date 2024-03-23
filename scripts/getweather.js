//  ---------SCRIPT FOR WEATHER FUNCTION-----------
const apiKey = "e8a706196182a36f8689bfcb03e2425f";
const city = "owo";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const currentTemp = document.querySelector('#tempValue');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

document.addEventListener("DOMContentLoaded", () => {
  // Fetch API and display
  Fetch(apiUrl)
    .then((data) => displayResults(currentTemp, weatherIcon, captionDesc, data))
    .catch((error) => console.error("Error fetching data:", error));
});

// Make the API request using fetch()
async function Fetch(apiURL) {
  
  try {
    // Fetch url
    const response = await fetch(apiURL);
    // Verify response
    if (!response.ok) {
      throw Error(await response.text());
    }
    // Get JSON data
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.log(error);
    return null;
  }
}

function displayResults(currentTemp, weatherIcon, captionDesc, weatherData) {
  // Get the temperature in Fahrenheit without decimals
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  // Create url for icon
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  // Create alt text
  const desc = weatherData.weather[0].description.capitalize();
  // Set properties
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

/**
 * Returns the same capitalized string
 * @returns Capitalized String
 */
String.prototype.capitalize = function() {
  // split the string by spaces
  let arr = this.split(" ");
  // capitalized array
  let capArr = [];
  // loop through every word
  arr.forEach(word => {
    // capitalize word
    capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
  });
  // join array and return
  return capArr.join(" ");
}
