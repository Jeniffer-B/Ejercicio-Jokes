let weather = null;
let reportAcudits = [];
let currentJoke = null;
let valueJoke = null;
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
        document.getElementById('temperatureDiv').textContent= `${temperature}ºC`
    } else {
        document.getElementById('weatherDiv').innerHTML = "Temps no disponible"
    }
})
// cridar un acudit
    document.getElementById('newjoke').addEventListener("click", (e) =>{
    getRandomJoke().then(joke => {
        document.getElementById('jokeDiv').innerHTML = joke;
    });    
})
// obtenim els acudits aleatoriament
async function getRandomJoke() {
    if (valueJoke == null) {
        window.alert("tienes que puntuar el chiste")
    } else { 
        let joke;
        const jokeApis = ['first', 'chuck'];
        const randomjokeApi = jokeApis[Math.floor(Math.random() * jokeApis.length)];
        switch(randomjokeApi) {
            case 'first':
                joke = await firstApiJokes();
                break;
            case 'chuck':
                joke = await chuckJokes();
                break;
        }
        currentJoke = joke
        return joke
    }
}
// afegim un event per cada emoji i obtenim la puntució 
document.querySelectorAll(".emoji").forEach(item =>{
    item.addEventListener("click", rateJoke);
})
function rateJoke(event) {
    let date = new Date().toString();
    let scoreRandomJoke = event.currentTarget.getAttribute("value");
    const rating = new Rating(currentJoke, scoreRandomJoke, date)
    reportAcudits.push(rating);
    console.log(reportAcudits);  
}
// obtenim els acudits de la primera l'Api
async function firstApiJokes(){
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    });
    const jsonResponse = await response.json()    
    return jsonResponse.joke
}
// Obtenim els acudits de la segona Api d'acudits
async function chuckJokes() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const jsonResponse = await response.json()    
    return jsonResponse.value
}
