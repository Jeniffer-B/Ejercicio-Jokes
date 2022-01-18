export class Acudit {
    constructor(joke: string) {
        this.joke = joke;
    }
    set joke(joke:string) {
        this.joke= joke;
    }
    get joke(): string {
        return this.joke;
    }
}