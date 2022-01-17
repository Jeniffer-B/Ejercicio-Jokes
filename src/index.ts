import {Acudit} from './Acudit'
import {Score} from './Score'
let weather = null;
let reportAcudits = [];
// Api del temps
const apiKey = "9cd0e93ef19b110a6e7403bd16c5bda7";
const latitud = 41.3879;
const longitud = 2.16992;
const apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&units=metric&lang=sp&exclude=hourly,daily,alerts&appid=${apiKey}`
fetch(apiEndpoint)   
.then(response => response.json())
.then (json => {
    weather = json.current.weather.shift()
    let temperature = Math.round(json.current.temp)
    if (weather !== null) {
        let icon = weather.icon
        const urlIcon = `http://openweathermap.org/img/wn/${icon}.png`
        let weatherImage = document.createElement('img');
        weatherImage.setAttribute('src', urlIcon)
        document.getElementById('iconDiv').appendChild(weatherImage)
        document.getElementById('temperatureDiv').textContent! = `${temperature}ºC`
    } else {
        document.getElementById('weatherDiv').innerHTML = "Temps no disponible"
    }
})
 
document.getElementById('newjoke').addEventListener("click", (e) =>{
    const joke = getRandomJoke();
    const score = getScore(event);
    saveJokeInfo(joke, score);
    document.getElementById('jokeDiv').innerHTML = joke.joke;
})

function getRandomJoke() {
    let joke;
    const jokeApis = ['first', 'chuck'];
    const randomjokeApi = jokeApis[Math.floor(Math.random() * jokeApis.length)];
    switch(randomjokeApi) {
        case 'first':
            joke = firstApiJokes();
            break;
        case 'chuck':
            joke = chuckJokes();
            break;
    }
    return new Acudit(joke);
}
// afegim un event per cada emoji i obtenim la puntució 
document.querySelectorAll(".emoji").forEach(item =>{
    item.addEventListener("click", getScore);
})
function getScore(event) {
    let scoreRandomJoke = parseInt(event.currentTarget.getAttribute("value"));
    return new Score (scoreRandomJoke)
}
// obtenim els acudits de la primera l'Api
async function firstApiJokes(){
    await fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
        return json.joke;
    })
}
// Obtenim els acudits de la segona Api d'acudits
async function chuckJokes() {
    await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        return json.value
    })
}

// 
function saveJokeInfo(joke: Acudit, scoreJokes: Score): void{
    if(scoreJokes == null){
        window.alert("tienes que puntuar el chiste")
    } else {
        reportAcudits.push(joke, scoreJokes);
    console.log(reportAcudits); 
    }
     
}


