const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const apiKey = "e8a706196182a36f8689bfcb03e2425f";
const city = "calabar";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
// const url = 

async function apiFetch(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;

        }
        else {
            throw Error(await response.text());

        }

    } catch (error) {
        console.log(error);

    }
}
// apiFetch();

function displayResults(currentTemp, weatherIcon, captionDesc, data) {
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong> &deg;F`;
    const desc = data.weather[0].description.capitalize();
    
    captionDesc.textContent = desc;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.src = iconsrc;
    weatherIcon.alt = desc;
}


document.addEventListener("DOMContentLoaded", ()=> {
   apiFetch(apiUrl)
  .then((data) => displayResults(data))
  .catch((error) => console.error("Error fetching data:", error));
});

// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const data = await apiFetch(apiUrl); // Await the API fetch
//         displayResults(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// });