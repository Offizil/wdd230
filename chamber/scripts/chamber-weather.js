//  ---------SCRIPT FOR WEATHER FUNCTION-----------
const apiKey = "e8a706196182a36f8689bfcb03e2425f";
const city = "calabar";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=2346229&appid=${apiKey}`;
const currentTemp = document.querySelector('#tempValue');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
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
  // console.log(weatherData)
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  currentTemp.style.textDecoration = "none";

  

  // Create url for icon
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  // Create alt text
  const desc = weatherData.weather[0].description.capitalize();
  // Set properties
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

}

function processForecastData(forecastData) {
//  console.log(forecastData)
  // // Check if forecastData is an array and has at least one element
  if (!Array.isArray(forecastData.list) || forecastData.list.length === 0) {
    console.error('Invalid forecast data ooh');
    return; // Exit the function if forecastData is invalid
  }

  // Iterate over the first 3 forecast objects (for the next 3 days)
  for (let i = 1; i < 4; i++) {
    const forecast = forecastData.list[i*8]; // Get the current forecast object

    // Extract relevant information from the forecast object
    const dateTime = new Date(forecast.dt * 1000); // Convert timestamp to Date object
    const temperatureK = forecast.main.temp;
    const temp =  (temperatureK - 273.15) * 9/5 + 32;
    const temperature = temp.toFixed(0)

    const weatherDescription = forecast.weather[0].description;
    const iconCode = forecast.weather[0].icon;
    // html elements for display
    
    const forecastSection = document.querySelector("#day-forecast");

    const forecastDays = document.createElement("h3");
    const forecastTemp = document.createElement("p");
    const forecastDesc = document.createElement("p");
    const iconImage = document.createElement("img");




    // Format data for display
    const formattedDateTime = dateTime.toLocaleDateString(); // Format date and time
    const formattedTemperature = `${temperature} °F`; // Format temperature with units
    const formattedWeatherDescription = capitalizeFirstLetter(weatherDescription); // Capitalize weather description

// set values for the emelensts we created earlier
    forecastDays.innerHTML = `Date: ${formattedDateTime}<br>`;
    forecastTemp.textContent =  `Temperature: ${formattedTemperature}`;
    forecastDesc.innerHTML =  `Weather: ${formattedWeatherDescription}<br>`;
    // iconImage.src = `Icon: ${iconCode}`;
    iconImage.src  = 'https://openweathermap.org/img/w/' + iconCode + '.png';


    forecastSection.appendChild(forecastDays);
    forecastSection.appendChild(forecastTemp);
    forecastSection.appendChild(iconImage);
    forecastSection.appendChild(forecastDesc);
    
    // console.log(`Temperature: ${formattedTemperature}`);
  
  
  }
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

// Function to check if today is Monday, Tuesday, or Wednesday
function isBannerDay() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  return dayOfWeek >= 1 && dayOfWeek <= 3; // Display banner on Monday, Tuesday, or Wednesday
}

// Function to display the banner if today is a banner day
function displayBanner() {
  if (isBannerDay()) {
      document.getElementById("eventbanner").style.display = "block";
  }
}

// Call displayBanner function when the page loads
document.addEventListener("DOMContentLoaded", displayBanner);

