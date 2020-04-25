// Singleton Pattern
function Singleton() {
  if (Singleton.instance) return Singleton.instance;
  Singleton.instance = this;
  return Singleton.instance;
}
// Connect 4
class Connect4 {
  constructor() {
    this.gameMap = this.createMap(7, 6);
    this.players = [1, 2];
    this.currentPlayer = 0;
    this.gameOver = false;
  }

  play(colm) {
    if (this.gameOver) return "Game has finished!";
    if (this.isFull(colm)) return "Column full!";
    const row = this.turn(colm);
    if (this.checkOver(colm, row)) {
      return `Player ${this.players[this.currentPlayer]} wins!`;
    }

    const msg = `Player ${this.players[this.currentPlayer]} has a turn`;
    this.changePlayer();
    return msg;
  }

  static createMap(colm, row) {
    return new Array(Number(colm))
      .fill(0)
      .map(() => new Array(Number(row)).fill(0));
  }

  changePlayer() {
    this.currentPlayer =
      this.currentPlayer + 1 >= this.players.length
        ? 0
        : this.currentPlayer + 1;
  }

  isFull(colm) {
    return this.gameMap[colm][this.gameMap[colm].length - 1] !== 0;
  }

  turn(colm) {
    const indexRow = this.gameMap[colm].indexOf(0);
    this.gameMap[colm][indexRow] = this.players[this.currentPlayer];
    return indexRow;
  }

  checkOver(colm, row) {
    const hor =
      this.checkPositions(colm, row, this.right) +
      this.checkPositions(colm, row, this.left);
    const vert =
      this.checkPositions(colm, row, this.top) +
      this.checkPositions(colm, row, this.bottom);
    const mainDiag =
      this.checkPositions(colm, row, this.mainDiagRight) +
      this.checkPositions(colm, row, this.mainDiagLeft);
    const addDiag =
      this.checkPositions(colm, row, this.addDiagRight) +
      this.checkPositions(colm, row, this.addDiagLeft);
    this.gameOver = hor >= 3 || vert >= 3 || mainDiag >= 3 || addDiag >= 3;
    return this.gameOver;
  }

  static checkPositions(colm, row, vector) {
    let colmNumb = colm;
    let rowNumb = row;
    let counter = 0;
    while (this.gameMap) {
      [colmNumb, rowNumb] = vector(colmNumb, rowNumb);
      if (
        colmNumb > this.gameMap.length - 1 ||
        colmNumb < 0 ||
        rowNumb > this.gameMap[colmNumb].length - 1 ||
        rowNumb < 0
      ) {
        return counter;
      }
      if (
        this.gameMap[colmNumb][rowNumb] === this.players[this.currentPlayer]
      ) {
        counter += 1;
      } else return counter;
    }
    return counter;
  }

  static left(colm, row) {
    colm -= 1;
    return [colm, row];
  }

  static right(colm, row) {
    colm += 1;
    return [colm, row];
  }

  static top(colm, row) {
    row += 1;
    return [colm, row];
  }

  static bottom(colm, row) {
    row -= 1;
    return [colm, row];
  }

  static mainDiagRight(colm, row) {
    row -= 1;
    colm += 1;
    return [colm, row];
  }

  static mainDiagLeft(colm, row) {
    row += 1;
    colm -= 1;
    return [colm, row];
  }

  static addDiagLeft(colm, row) {
    row -= 1;
    colm -= 1;
    return [colm, row];
  }

  static addDiagRight(colm, row) {
    row += 1;
    colm += 1;
    return [colm, row];
  }
}
// Curry me softly
function CurryIt(func) {
  let funcArgs = [];
  let that;
  return function (...args) {
    that = that || this;
    if (args.length === 0) {
      const res = func.apply(that, funcArgs);
      funcArgs.length = 0;
      return res;
    }
    funcArgs = funcArgs.concat(args);
  };
}
