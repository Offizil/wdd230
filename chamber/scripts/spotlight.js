const url = "https://offizil.github.io/wdd230/data/members.json";

const spotCard = document.querySelector("#spotlights_adverts");
const newsCard = document.querySelector("#newssection");

// Add the 'gridview' class to set the grid as the default view on page load
spotCard.classList.add('listview');
newsCard.classList.add("newsStyle");



// news card
const news = document.createElement("div");

const newheader = document.createElement("p");
newheader.innerHTML = `📰 Local News Releases`;

const newsPara = document.createElement("p");
newsPara.innerHTML = `<p><b>Calabar, CRS</b> - The Calabar Chamber of Commerce proudly announced the winners of the state qualifying round of the Nigeria National Hackathon, a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program. Twenty secondary school student finalists from Hope Wadddel Training Institute, Federal Goverment Girls college, St. Patrick's College and other private schools participated in this competition.</p>`

news.appendChild(newheader);
news.appendChild(newsPara);

newsCard.appendChild(news);

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.chamberMembers);
    displaychamberMembers(data.chamberMembers);
}



const displaychamberMembers = (members) => {
    let goldSilverCount = 0; // Counter for gold or silver members displayed

    members.forEach((member) => {
        if ((member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver') && goldSilverCount < 3) {
            // Create elements
            let card = document.createElement('section');
            let iconImg = document.createElement('img');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let a = document.createElement('a');
            let spotTitle = document.createElement("h2");

            // Set attributes
            iconImg.src = member.imageURL;
            iconImg.alt = `Icon image for ${member.name}`;
            iconImg.loading = 'lazy';
            h2.textContent = member.name;
            p1.innerHTML = `${member.address}<br>Cross River State, Nigeria<br>${member.phone}`;
            p2.textContent = `${member.membershipLevel} membership`;
            a.textContent = member.websiteURLs;
            a.href = member.websiteURLs;
           

            // Append elements to card
            card.appendChild(iconImg);
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(a);
            
            // Append card to spotCard element
            spotCard.appendChild(card);
            spotCard.appendChild(document.createElement("hr"))
            

            goldSilverCount++; // Increment the counter
        }
    });
}

// initialization

// const addNewsContent = () => {
//    const news = document.createElement("div");
//     let newheader = document.createElement("p");
//     newheader.innerHTML = `📰 Local News Releases`;
//     const newsPara = document.createElement("p");
// newsPara.innerHTML = `<p><b>Calabar, CRS</b>  The Calabar Chamber of Commerce proudly announced the winners of the state qualifying round of the Nigeria National hackathon, a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program. Twenty secondary school student finalists from Hope Wadddel Training Institute, Federal Goverment Girls college, St. Patrick's College and other private schools participated in this competition.</p>`

// news.appendChild(newheader);
// news.appendChild(newsPara);
// // dynamicContent.insertAdjacentHTML('afterend', htmlToAdd);

// }



document.addEventListener("DOMContentLoaded", getMemberData);
// document.addEventListener("DOMContentLoaded", addNewsContent);
