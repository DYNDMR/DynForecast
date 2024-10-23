const apiKey = "98288def1959f4cac07efdfa5fa40c7e";


function createWeatherScreen(data){
    console.log(data)
    document.querySelector(".city-title").innerHTML = "Weather in " + data.name;
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".text-forecast").innerHTML = data.weather[0].description;
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
} 


async function searchCity(cityName) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`).then(
        response => response.json()
    )

    createWeatherScreen(data)

}

function inputValue() {
    const cityName = document.querySelector(".input-city").value;

    searchCity(cityName)
}