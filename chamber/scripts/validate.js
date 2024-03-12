const userInput = document.querySelector("#position").value; // Replace this with the actual user input
const regex = /^[a-zA-Z\- ]{7,}$/;

if (regex.test(userInput)) {
    console.log("Valid input");
} else {
    console.log("Invalid input");
}


