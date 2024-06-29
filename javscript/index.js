function updateTime() {
//Paris
let parisElement =  document.querySelector("#paris");
if (parisElement) {
let parisDateElement =  parisElement.querySelector(".date");
let parisTimeElement =  parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM  Do, YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

//Kyiv
let kyivElement =  document.querySelector("#kyiv");
if (kyivElement) {
let kyivDateElement =  kyivElement.querySelector(".date");
let kyivTimeElement =  kyivElement.querySelector(".time");
let kyivTime = moment().tz("Europe/Kyiv");

kyivDateElement.innerHTML = kyivTime.format("MMMM Do, YYYY");
kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    //console.log(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " "). split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    //console.log(cityTime.format("MMMM Do YYYY"));
    let citiesElement =  document.querySelector("#cities");
    citiesElement.innerHTML = `
     <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>
       `;
}
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);