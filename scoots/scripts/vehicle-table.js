const url =
  "https://offizil.github.io/wdd230/data/vehicles.json";
const table = document.querySelector("#table");

async function getVehicleData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.vehicles);
  displayVehicles(data.vehicles);
}

const prices = document.querySelector("#price");
const capacityTag = document.querySelector("#capacity");

const displayVehicles = (vehicles) => {
  vehicles.forEach((vehicle) => {
    let table_entry = document.createElement("tr");

    let name = document.createElement("td");
    let capacity = document.createElement("td");//mmeeeee
    let halfReserv = document.createElement("td");
    let fullReserv = document.createElement("td");
    let halfWalk = document.createElement("td");
    let fullWalk = document.createElement("td");


    // // let first_row = `${vehicle.capacity[2]}`;
    




    // let bold = first_row.textContent;
    // bold.style.fontWeight = "bold";


    name.textContent = `${vehicle.type}`;
    capacity.textContent = `${vehicle.capacity}`
    halfReserv.textContent = `${vehicle.halfDayReserv}`;
    fullReserv.textContent = `${vehicle.fullDayReserv}`;
    halfWalk.textContent = `${vehicle.halfDayWalkin}`;
    fullWalk.textContent = `${vehicle.fullDayWalkin}`;

    // name.style.fontWeight = "bold";
    table_entry.appendChild(name);
    table_entry.appendChild(capacity)
    table_entry.appendChild(halfReserv);
    table_entry.appendChild(fullReserv);
    table_entry.appendChild(halfWalk);
    table_entry.appendChild(fullWalk);
    
    table.appendChild(table_entry);
  });
};
getVehicleData();
