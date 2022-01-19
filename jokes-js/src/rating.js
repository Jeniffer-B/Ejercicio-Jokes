class Rating {
    constructor(joke, score, date) {
        this._joke = joke;
        this._score = score;
        this._date = date;
    }
    set score(score) {
        this._score= score;
    }
    set date(date) {
        this._date= date;
    }
    get score() {
        return this._score;
    }
    get date() {
        return this._date;
    }    
}
    
    
