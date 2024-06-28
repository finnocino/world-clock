function updateTime() {

//Paris
let parisElement =  document.querySelector("#paris");
let parisDateElement =  parisElement.querySelector(".date");
let parisTimeElement =  parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

//Kyiv
let kyivElement =  document.querySelector("#kyiv");
let kyivDateElement =  kyivElement.querySelector(".date");
let kyivTimeElement =  kyivElement.querySelector(".time");
let kyivTime = moment().tz("Europe/Kyiv");

kyivDateElement.innerHTML = kyivTime.format("MMMM Do, YYYY");
kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[</small>]");

}

setInterval(updateTime,1000);