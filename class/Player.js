export default class Player {
    constructor(id ,username) {
        this.id = id;
        this.username = username;
        this.bestTime = 0;
        this.wins = 0;
    }

    async recordTime(start, end) {
        const seconds = (end - start) / 1000;
        this.bestTime = seconds;
    }
}