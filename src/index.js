let joke = null;
let score = null;
const scoreDate = new Date();
let date = scoreDate.toISOString();
let reportAcudits = [];
// obtenim els acudits de l'Api
document.getElementById('newjoke').addEventListener("click", (e) =>{
    let infoJoke = saveJokeInfo()
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            "Accept": "application/json"
        }
    })
    .then(response => response.json()
    .then(json => {
        joke = json.joke
        document.getElementById('jokeDiv').innerHTML = joke
    })
)})
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

