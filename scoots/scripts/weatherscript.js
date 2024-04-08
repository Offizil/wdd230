//  ---------SCRIPT FOR WEATHER FUNCTION-----------
const apiKey = "e8a706196182a36f8689bfcb03e2425f";
const city = "calabar";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
// const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=2346229&appid=${apiKey}`;
// const apiURL2 =`https://api.openweathermap.org/data/2.5/forecast/hourly?lat=20.4345&lon=-86.9257&appid=${apiKey};`
const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?lat=20.4345&lon=-86.92579&units=imperial&appid=${apiKey}`;

const currentTemp = document.querySelector('#tempValue');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-figcaption');
const tempTitle = document.querySelector("#tempTitle");
const tempHumidity = document.querySelector("#humdidity");
const maxTemp = document.querySelector("#max-temp-span");
const forecastTemp = document.querySelector("#forecastTempValue");
const weatherForecast = "";


document.addEventListener("DOMContentLoaded", () => {
  // Fetch API and display
  callFetch(apiUrl)
    .then((data) => displayResults(currentTemp, weatherIcon, captionDesc, data))
    .catch((error) => console.error("Error fetching data:", error));



});

document.addEventListener("DOMContentLoaded", () => {
  
  callFetch(apiURL2)
  .then((data) => processForecastData(data))
  .catch((error) => console.error("Error fetching data:", error));
})

// Make the API request using fetch()
async function callFetch(apiURL) {
  
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
//   console.log(weatherData)
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  currentTemp.style.textDecoration = "none";

  

  // Create url for icon
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  // Create alt text
  const desc = weatherData.weather[0].description.capitalize();
  const title = weatherData.weather[0].main.capitalize();
  tempHumidity.textContent = weatherData.main.humidity;
  maxTemp.textContent = weatherData.main.temp_max;

  tempTitle.textContent = title;
  // Set properties
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

}

function processForecastData(forecastData) {
 console.log(forecastData.list)
  // // Check if forecastData is an array and has at least one element
  if (!Array.isArray(forecastData.list) || forecastData.list.length === 0) {
    console.error('Invalid forecast data ooh');
    return; // Exit the function if forecastData is invalid
  }

  forecastTemp.textContent = forecastData.list[10].main.temp;
 
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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




// BANNER SCRIPT
// Function to close the banner
function closeBanner() {
  document.getElementById("eventbanner").style.display = "none";
}
// Function to display the banner if today is a banner day
function displayBanner() { 
    document.getElementById("eventbanner").style.display = "block";

}
// Call displayBanner function when the page loads
document.addEventListener("DOMContentLoaded", displayBanner);

