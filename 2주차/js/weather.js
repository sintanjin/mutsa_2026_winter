
const API_KEY = "2ed209b9dfd733a8279c0487641a7109";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((respnse) => respnse.json()).then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        
        
    });
}

function onGeoError(){
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);