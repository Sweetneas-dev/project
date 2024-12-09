async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "46ac7a06404b55e97ff6e065c501a183";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }
        
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        
        document.getElementById("city-name").innerText = cityName;
        document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
        document.getElementById("description").innerText = `Weather: ${description}`;
        document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
        document.getElementById("windspeed").innerText = `Wind Speed: ${windSpeed} m/s`;
        
    } catch (error) {
        console.error("Error fetching weather data", error);
        alert("An error occurred. Please try again.");
    }
}
