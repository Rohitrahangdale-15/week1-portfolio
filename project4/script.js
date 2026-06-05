const apiKey = "6c1e64efe8675ea493ea57132ebb20c7";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("weather").innerHTML =
        "<p>Loading...</p>";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        const icon = data.weather[0].icon;

        const now = new Date();

        document.getElementById("weather").innerHTML = `
            <h2>${data.name}</h2>

            <p>🌡 Temperature: ${data.main.temp}°C</p>

            <p>💧 Humidity: ${data.main.humidity}%</p>

            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>

            <p>☁ Weather: ${data.weather[0].description}</p>

            <p>📅 ${now.toLocaleString()}</p>
        `;

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "<p>❌ City not found</p>";
    }
}

document.getElementById("city").addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        getWeather();
    }

});