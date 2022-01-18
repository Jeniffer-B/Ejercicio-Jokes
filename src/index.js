"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Acudit_1 = require("./Acudit");
var Score_1 = require("./Score");
var weather = null;
var reportAcudits = [];
// Api del temps
var apiKey = "9cd0e93ef19b110a6e7403bd16c5bda7";
var latitud = 41.3879;
var longitud = 2.16992;
var apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(latitud, "&lon=").concat(longitud, "&units=metric&lang=sp&exclude=hourly,daily,alerts&appid=").concat(apiKey);
fetch(apiEndpoint)
    .then(function (response) { return response.json(); })
    .then(function (json) {
    weather = json.current.weather.shift();
    var temperature = Math.round(json.current.temp);
    if (weather !== null) {
        var icon = weather.icon;
        var urlIcon = "http://openweathermap.org/img/wn/".concat(icon, ".png");
        var weatherImage = document.createElement('img');
        weatherImage.setAttribute('src', urlIcon);
        document.getElementById('iconDiv').appendChild(weatherImage);
        document.getElementById('temperatureDiv').textContent = "".concat(temperature, "\u00BAC");
    }
    else {
        document.getElementById('weatherDiv').innerHTML = "Temps no disponible";
    }
});
document.getElementById('newjoke').addEventListener("click", function (e) {
    var joke = getRandomJoke();
    var score = getScore(event);
    saveJokeInfo(joke, score);
    document.getElementById('jokeDiv').innerHTML = joke.joke;
});
function getRandomJoke() {
    var joke;
    var jokeApis = ['first', 'chuck'];
    var randomjokeApi = jokeApis[Math.floor(Math.random() * jokeApis.length)];
    switch (randomjokeApi) {
        case 'first':
            joke = firstApiJokes();
            break;
        case 'chuck':
            joke = chuckJokes();
            break;
    }
    return new Acudit_1.Acudit(joke);
}
// afegim un event per cada emoji i obtenim la puntució 
document.querySelectorAll(".emoji").forEach(function (item) {
    item.addEventListener("click", getScore);
});
function getScore(event) {
    var scoreRandomJoke = parseInt(event.currentTarget.getAttribute("value"));
    return new Score_1.Score(scoreRandomJoke);
}
// obtenim els acudits de la primera l'Api
function firstApiJokes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://icanhazdadjoke.com/', {
                        headers: {
                            "Accept": "application/json"
                        }
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (json) {
                        return json.joke;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// Obtenim els acudits de la segona Api d'acudits
function chuckJokes() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')
                        .then(function (response) { return response.json(); })
                        .then(function (json) {
                        return json.value;
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 
function saveJokeInfo(joke, scoreJokes) {
    if (scoreJokes == null) {
        window.alert("tienes que puntuar el chiste");
    }
    else {
        reportAcudits.push(joke, scoreJokes);
        console.log(reportAcudits);
    }
}
