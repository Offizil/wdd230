

  // Get the current date and time
  const currentDate = new Date();

  // Format the date as a string
  const formattedDate = currentDate.toDateString();

  // Format the time as a string
  const formattedTime = currentDate.toLocaleTimeString();

  // Get the element with the id "lastModified"
  const lastModifiedElement = document.getElementById("lastModified");

  // Update the content of the element
  lastModifiedElement.textContent = `Last modified: ${formattedDate} at ${formattedTime}`;




  let welcomePara = document.querySelector("#welcome-card");

  const msToDays = 8460000;

  document.addEventListener("DOMContentLoaded", function () {
    // Check if localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Get the current date and time
        let currentDate =  new Date();

        // Check if lastVisiitDate is stored in localStorage
        if (localStorage.getItem("lastVisitDate") !== null) {
            // Retrieve the last visit date from localStorage
            let lastVisitDate = new Date(localStorage.getItem("lastVisitDate"));

            // Calculate the time difference in milliseconds
            let timeDifference = currentDate - lastVisitDate;
            
            // let timeDifference =  ( currentDate - lastVisitDate ) / msToDays;
            
            // Calculate the time difference in days
            let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // Display appropriate message based on the time difference
            if (daysDifference <1) {
              welcomePara.textContent = "Back so soon! Awesome!";
            } else {
              welcomePara.textContent = `You last visited ${daysDifference} days ago.`;
            }
        } else {
          // If it's the first visit, display a welcome message
          welcomePara.textContent = "Welcome! Let us know if you have any questions.";
        }

        // Store the current date and time in localStorage
        localStorage.setItem("lastVisitDate", currentDate.toString());
    } else {
        alert("Sorry, your browser does not support Web Storage. Last visit date cannot be stored.");
    }
});



const hiddenfield = document.querySelector("#getdate");
document.addEventListener("DOMContentLoaded", ()=> {
hiddenfield.innerHTML = `${formattedDate} at ${formattedTime}`;
});