const apiKey = "1b2d77afb1fc083593c8516aeb843eec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();

   // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c ";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1146/1146869.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1850/1850736.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3093/3093390.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4005/4005817.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/6363/6363108.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
    
