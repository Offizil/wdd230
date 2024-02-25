
const winchill = document.querySelector("#windchill");

document.querySelector("#submitBttn").addEventListener("click", Windchill);

function Windchill() {
    const temp = document.querySelector("#temp");
    // const tempValue = temp.querySelector("span");
    const speed = document.querySelector("#vel").value;
    // const vel = parseFloat(speed.querySelector("span").textContent);

    if (parseFloat(temp.value) <= 50 || vel > 3) {
        let Ta = parseFloat(temp.value);
        // Calculate
        let T = 35.74 + (0.6215 * Ta) - (35.75 * speed) ** 0.16 + (0.4275 * Ta) ** 0.16;
        winchill.textContent = `Windchill: ${T.toFixed(2)} ℉ `;
    } else {
        winchill.textContent = "N/A";
    }
}

