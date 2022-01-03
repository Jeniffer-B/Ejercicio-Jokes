let joke = null;
let chuckNorrisJokes = null;
let score = null;
let weather = null;
const scoreDate = new Date();
let date = scoreDate.toISOString();
let reportAcudits = [];
// Api del temps
const apiKey = "9cd0e93ef19b110a6e7403bd16c5bda7";
const latitud = 41.3879;
const longitud = 2.16992;
const apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&lang=sp&exclude=hourly,daily,alerts&appid=${apiKey}`
fetch(apiEndpoint)
.then(response => response.json())
.then (json => {
    weather = json.current.weather.shift()
    if (weather !== null) {
        document.getElementById('weatherDiv').innerHTML = weather.description
    } else {
        document.getElementById('weatherDiv').innerHTML = "Temps no disponible"
    }
})
// 
document.getElementById('newjoke').addEventListener("click", (e) =>{
    saveJokeInfo();
    firstApiJokes();
    chuckJokes();
    // debugger
    let randomJokes = [joke, chuckNorrisJokes];
    document.getElementById('jokeDiv').innerHTML = randomJokes[[Math.floor(Math.random() * randomJokes.length)]];
})
// obtenim els acudits de la primera l'Api
function firstApiJokes(){
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
        joke = json.joke
    })
}
// Obtenim els acudits de la segona Api d'acudits
function chuckJokes(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        chuckNorrisJokes = json.value
    })
}
// afegim un event per cada emoji i obtenim la puntució 
document.querySelectorAll(".emoji").forEach(item =>{
    item.addEventListener("click", scoreJoke);
})
function scoreJoke(event){  
    score = event.currentTarget.getAttribute("value");
}
// 
function saveJokeInfo(){
    let infoJoke = new Acudit (joke, score, date);
    reportAcudits.push(infoJoke);
    console.log(reportAcudits);  
}

