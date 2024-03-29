const apiKeyy = "e8a706196182a36f8689bfcb03e2425f";
const cityy = "calabar";
const winchill = document.querySelector("#windchill");
const apiUrl3 = `https://api.openweathermap.org/data/2.5/weather?q=${cityy}&units=imperial&appid=${apiKeyy}`;
const temp = document.querySelector("#tempP");
const speed =  document.querySelector(("#velP"))


document.addEventListener("DOMContentLoaded", () => {
  
    callFetch(apiUrl3)
    .then((data) => Windchill(temp, speed, data))
    .catch((error) => console.error("Error fetching data:", error));
  })

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



document.querySelector("#submitBttn").addEventListener("click", Windchill);

function Windchill(temp, speed, weatherrdata) {
   
    temperature = weatherrdata.wind.speed.toFixed(0);
    velocity = weatherrdata.main.temp.toFixed(0);

    // temp.textContent = `${temperature}`;
    speed.textContent =  `Wind Speed: ${velocity} mph`;

    // if (parseFloat(temp.value) <= 50 || vel > 3)
    if (temperature <= 50 || velocity > 3) {
        let Ta = temperature;
        // Calculate
        let T = 35.74 + (0.6215 * Ta) - (35.75 * velocity) ** 0.16 + (0.4275 * Ta) ** 0.16;
        winchill.textContent = `Windchill: ${T.toFixed(2)} ℉ `;
    } else {
        winchill.textContent = "N/A";
    }
}

