const baseURL = "https://offizil.github.io/wdd230/";

const linksURL = "https://offizil.github.io/wdd230/data/links.json";

async function getLinksData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);



    displayLinks(data);
}


// dynamicLinks

 function displayLinks(weeks) {
    weeks.forEach((week) => {

        // container element where i intend to append the dynamic links
        const container = document.getElementById('dynamicLinks');
        // const 

        const a = document.createElement("a");
        a.href = week.links.url;
        a.textContent = week.links.title;

        const weekNo = week.lesson;



        const weekly = `Week ${data.lessons}: ${a} `
        container.appendChild(weekly);

        container.appendChild(document.createElement('br'));


        // build the dyamic links

       








        
        
    });
 }





getLinksData();










