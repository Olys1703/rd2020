// "this" is a problem
export function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${this.firstName} ${this.lastName}`;
}
// Refactored Greeting
export class Person {
  constructor(name) {
    this.name = name;
  }

  greet(name) {
    return `Hello ${name}, my name is ${this.name}`;
  }
}
// The sortReloaded() method
Array.prototype.sortReloaded = function (asc = "asc") {
  if (asc === "asc") return this.concat().sort((a, b) => a - b);
  if (asc === "desc") return this.concat().sort((a, b) => b - a);
  return false;
};
// Make Class
export function makeClass(...properties) {
  return function (...values) {
    values.forEach((item, index) => {
      this[properties[index]] = item;
    });
  };
}
// "this" is an other problem
export class NamedOne {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const arrName = name.split(" ");
    if (arrName.length !== 2) {
      return false;
    }
    [this.firstName, this.lastName] = arrName;
    return true;
  }
}
// Simple Web Framework #1: Create a basic router
export class Router {
  constructor() {
    this.routes = {};
  }

  bind(url, method, res) {
    this.routes[method + url] = res;
  }

  runRequest(url, method) {
    const res = this.routes[method + url];
    return res ? res() : "Error 404: Not Found";
  }
}
// Function Composition
export function compose(...functions) {
  return functions.reduce((acc, item) => (...args) => acc(item(...args)));
}
// Snakes and Ladders
class Player {
  constructor(number) {
    this.number = number;
    this.position = 0;
  }
}
export class SnakesLadders {
  constructor() {
    this.firstPlayer = new Player(1);
    this.secondPlayer = new Player(2);
    this.transfer = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      16: 6,
      21: 42,
      28: 84,
      36: 44,
      46: 25,
      49: 11,
      51: 67,
      62: 19,
      64: 60,
      71: 91,
      74: 53,
      78: 98,
      87: 94,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    };
    this.currentPlayer = this.firstPlayer;
    this.gameOver = false;
  }

  play(die1, die2) {
    if (this.gameOver) {
      return "Game over!";
    }
    this.currentPlayer.position = this.step(
      this.currentPlayer.position,
      die1 + die2
    );
    if (this.checkWinner()) {
      return `Player ${this.currentPlayer.number} Wins!`;
    }
    const msg = `Player ${this.currentPlayer.number} is on square ${this.currentPlayer.position}`;
    if (die1 !== die2) {
      this.changePlayer();
    }
    return msg;
  }

  changePlayer() {
    this.currentPlayer =
      this.currentPlayer === this.firstPlayer
        ? this.secondPlayer
        : this.firstPlayer;
  }

  checkWinner() {
    this.gameOver = this.currentPlayer.position === 100;
    return this.gameOver;
  }

  step(position, sumDie) {
    let newPosition = position + sumDie;
    if (newPosition > 100) {
      newPosition = 200 - newPosition;
    }
    return this.transfer[newPosition] === undefined
      ? newPosition
      : this.transfer[newPosition];
  }
}
