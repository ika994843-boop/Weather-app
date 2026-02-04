import { Daily } from "./components/Daily.js"
import { Hourly } from "./components/Hourly.js"
import { render, renderHourly } from "./libs/render.js"

let daily_box = document.querySelector(".daily_box")
let hourly_box = document.querySelector(".hourly_box")
let temp_now = document.querySelector(".temperature")
let status = document.querySelector(".status")
const video = document.querySelector("#bg-video");
const source = video.querySelector("source");
let stats = {
    0: "Sunny ☀️",
    3: "Cloudy ☁️",
    61: "Rain 🌧️",
    71: "Snow ❄️"
}
let videos = {
    0: "./media/sunny.mp4",
    3: "./media/pasm.mp4",
    61: "./media/rainy.mp4",
    71: "./media/snowy.mp4"
}

fetch('https://api.open-meteo.com/v1/forecast?latitude=39.654&longitude=66.9597&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto')
    .then(res => res.json())
    .then(data => {
        let temps = data.daily.temperature_2m_max
        console.log(data);


        render(temps, daily_box, Daily)
    })

fetch('https://api.open-meteo.com/v1/forecast?latitude=39.6&longitude=66.9&current_weather=true')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let pogoda = data.current_weather.weathercode
        console.log(pogoda);

        status.textContent = stats[pogoda]
        source.src = videos[pogoda]
        video.load()

        let temp = data.current_weather.temperature
        let celsi = data.current_weather_units.temperature

        let cels = document.createElement("span")
        cels.classList.add("cels")
        cels.textContent = celsi
        temp_now.textContent = temp
        temp_now.append(cels)
    })


fetch('https://api.open-meteo.com/v1/forecast?latitude=39.654&longitude=66.9597&hourly=temperature_2m,relative_humidity_2m,weathercode&timezone=auto')
    .then(res => res.json())
    .then(data => {
        let nowTime = new Date().getHours()
        renderHourly(
            data.hourly.temperature_2m.slice(nowTime, nowTime + 13),
            data.hourly.time.slice(nowTime, nowTime + 13),
            hourly_box,
            Hourly
        )
    })

console.log("Hello world");
