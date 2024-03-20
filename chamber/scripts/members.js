const url = "https://offizil.github.io/wdd230/chamber/scripts/members.js";

const dirCard = document.querySelector(".directory-grid");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.chamberMembers);
    // displaychamberMembers(datachamberMembers);
}



const displaychamberMembers = (members) => {
    prophets.forEach((member) => {

    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');

    iconImg.setAttribute('src', member.imageurl);
    iconImg.setAttribute('alt', `Icon image for ${member.name}`);
    iconImg.setAttribute('loading', 'lazy');

    h2.textContent = `${member.name}`;

    p1.innerHTML =  member.address + "<br>Vancouver, WA 98661<br>" + member.phone;
    p2.textContent = member.membershipLevel;
    a.textContent = member.websiteURLs;
    a.setAttribute("href", "member.websiteURLs");

    card.appendChild(iconImg);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
    })
}