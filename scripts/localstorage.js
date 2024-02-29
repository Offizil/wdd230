// initialize the display element variable
const visitsDisplay = document.querySelector("#visit-counter");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
}
else{
    visitsDisplay.textContent = `This is your first visit. Welcome your Highness😊`
}

numVisits++

localStorage.setItem("numVisits-ls", numVisits);
