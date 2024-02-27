const container = document.querySelector('#branding');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);

function game(team1, team2, t1score, t2score, gameOver) {
    this.team1 = team1;
    this.team2 = team2;
    this.t1score = t1score;
    this.t2score = t2score;
    this.gameOver = gameOver;
}

const game1 = new game("Duke", "Lehigh", 58, 73, true);

game.prototype.winner = function(){return (this.gameOver ? (this.t1score > this.t2score ? this.team1 : this.team2) : null);}



console.dir(game1);
console.dir(Object.getPrototypeOf(game1));
console.log(game1.winner())