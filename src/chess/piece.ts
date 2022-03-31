
export class PieceColor {
  static white: true;
  static black: false;
}

export abstract class Piece {
  private _color: boolean;

  constructor(color: boolean) {
    this._color = color;
  }

  get color(): boolean {
    return this._color;
  };

  abstract canMove(): boolean;
}