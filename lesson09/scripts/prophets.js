const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        // build the fullname
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // build the image card
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // append  section card  with created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);        

        
    });
}
