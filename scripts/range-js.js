// -----script for range functionality----
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("page-rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

