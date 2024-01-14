

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