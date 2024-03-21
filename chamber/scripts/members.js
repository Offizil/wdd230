const url = "https://offizil.github.io/wdd230/data/members.json";

const dirCard = document.querySelector(".directory-grid");

// Add the 'gridview' class to set the grid as the default view on page load
dirCard.classList.add('gridview');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.chamberMembers);
    displaychamberMembers(data.chamberMembers);
}



const displaychamberMembers = (members) => {
    members.forEach((member) => {
    // dirCard.innerHTML= "";
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');

    iconImg.setAttribute('src', member.imageURL);
    iconImg.setAttribute('alt', `Icon image for ${member.name}`);
    iconImg.setAttribute('loading', 'lazy');

    h2.textContent = `${member.name}`;

    p1.innerHTML =  member.address + "<br>Cross River State, Nigeria<br>" + member.phone;
    p2.textContent = ` ${member.membershipLevel} membership`;
    a.textContent = member.websiteURLs;
    a.setAttribute("href", member.websiteURLs);

    card.appendChild(iconImg);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
    
    dirCard.appendChild(card);

    })
}
// initialization
getMemberData();


const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');


gridbutton.addEventListener('click', function() {
    dirCard.classList.remove('listview');
    dirCard.classList.add('gridview');

});

listbutton.addEventListener('click', function() {
    dirCard.classList.add('listview');
    dirCard.classList.remove('gridview');

});
