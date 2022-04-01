import { Piece } from "./piece";

export class Spot {
  private _piece: Piece | null;
  private _x: number;
  private _y: number;
  private _marked: boolean;

  constructor(x: number, y: number, piece: Piece | null) {
    this._x = x;
    this._y = y;
    this._piece = piece;
    this._marked = false;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get piece(): Piece | null {
    return this._piece;
  }

  set marked(m: boolean) {
    this._marked = m;
  }

  get marked() {
    return this._marked;
  }

  getPossibleMoves(): Array<{x: number, y: number}> {
    if (!this.piece) {
      return [];
    }

    return this.piece.getPossibleMoves(this)
  }
}