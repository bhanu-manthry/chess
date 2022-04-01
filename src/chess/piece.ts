import { Board } from "./board";
import { Spot } from "./spot";

export enum PieceColor {
  black,
  white
}

export abstract class Piece {
  private _color: PieceColor;
  private _killed: boolean;

  constructor(color: PieceColor) {
    this._color = color;
    this._killed = false;
  }

  get color(): PieceColor {
    return this._color;
  };

  get killed(): boolean {
    return this._killed;
  }

  set killed(killed: boolean) {
    this._killed = killed;
  }

  abstract canMove(board: Board, start: Spot, end: Spot): boolean;
  abstract getPossibleMoves(spot: Spot): Array<{x: number, y: number}>;
}