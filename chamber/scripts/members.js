const url = "https://offizil.github.io/wdd230/chamber/scripts/members.js";

const dirCard = document.querySelector(".directory-grid");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.chamberMembers);
    // displaychamberMembers(datachamberMembers);
}

