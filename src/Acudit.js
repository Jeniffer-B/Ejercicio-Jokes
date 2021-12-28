class Acudit {
    constructor(joke, score, date) {
        this._joke = joke;
        this._score = score;
        this._date = date;
    }
    set joke(joke){
        this._joke= joke;
    }
    get joke(){
        return this._joke;
    }
    set score(score){
        this._name= score;
    }
    get score(){
        return this._score;
    }
    set date(date){
        this._date= date;
    }
    get date(){
        return this._date;
    }
    reportJokes(){
        return this._joke + " " + "tiene" + " "+ this._score +"puntos." + " "+this._date;
    }
}