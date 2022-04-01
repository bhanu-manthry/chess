import { Piece } from "./piece";

export class Spot {
  private _piece: Piece | null;
  private x: number;
  private y: number;

  constructor(x: number, y: number, piece: Piece | null) {
    this.x = x;
    this.y = y;
    this._piece = piece;
  }

  get piece(): Piece | null {
    return this._piece;
  }
}