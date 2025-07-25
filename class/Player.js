export default class Player {
    constructor(username) {
        this.username = username;
        this.bestTime = 0;
    }

    recordTime(start, end) {
        const seconds = (end - start) / 1000;
        this.times.push(seconds);
    }

    showStats() {
        const totalTime = this.times.reduce((sum, i) => sum + i, 0);
        const averageTime = totalTime / this.times.length;

        console.log(`This ${this.name}'s stats: `);
        console.log("Total Time: " + totalTime);
        console.log("Average Time: " + averageTime);
    }
}