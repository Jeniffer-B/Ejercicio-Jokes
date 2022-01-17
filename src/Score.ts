export class Score {
    constructor(score: number) {
        this.score = score;
    }
    set score(score:number) {
        this.score= score;
    }
    get score(): number {
        return this.score;
    }
}