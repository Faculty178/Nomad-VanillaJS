const API_KEY = "8d12e03ee32d68217c0b9c06d0866819";
const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
            city.innerText = `@:${data.name}`;
        })
    //fetch는 promise 
    //바로 실행되지 않으으으음 서버가 답할때까지 기다려야함. 그래서 then이 붙음 
    //response.json은 데이터 추출 
    
}

function onGeoError(){
    alert("Can't Find you. There'll be no weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);