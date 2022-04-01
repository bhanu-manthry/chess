import { Board } from "./board";
import { Spot } from "./spot";

export class Game {
  private selectedSpot: Spot | null;
  private board: Board;

  constructor() {
    this.board = new Board();
    this.board.resetBoard();
    this.selectedSpot = null;
  }

  selectSpot(spot: Spot) {
    this.selectedSpot = spot;
    this._markPossibleMoves();
  }

  private _markPossibleMoves() {
    if (!this.selectedSpot) {
      return;
    }

    const board = this.board.getCurrentBoard();
    for (const row of board) {
      for (const box of row) {
        box.marked = false;
      }
    }

    let vertices = this.selectedSpot.getPossibleMoves();

    for (const v of vertices) {
      if (v.x < 0 || v.x > 7 || v.y < 0 || v.y > 7) {
        continue;
      }
    
      board[v.x][v.y].marked = true;
    }
  }

  public newGame() {
    this.board.resetBoard();
  }

  public getCurrentBoard() {
    return this.board.getCurrentBoard();
  }

  public undoMove() {}
}