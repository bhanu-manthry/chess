import { PieceFactory } from "./PieceFactory";
import { Spot } from "./spot";

export class Board {
  private boxes: Spot[][] = new Array(8);
  private standardLayout = Object.freeze([
    'r n b q k b n r',
    'p p p p p p p p',
    '- - - - - - - -',
    '- - - - - - - -',
    '- - - - - - - -',
    '- - - - - - - -',
    'P P P P P P P P',
    'R N B Q K B N R',
  ]);

  public constructor() {
    this.resetBoard();
  }

  public resetBoard(): Spot[][] {
    console.log('in reset board')
    for (let r = 0; r < 8; r++) {
      this.boxes[r] = new Array(8)
      let rowPieces = this.standardLayout[r].split(' ');
      for (let c = 0; c < 8; c++) {
        let piece = PieceFactory.getPiece(rowPieces[c])
        this.boxes[r][c] = new Spot(r, c, piece)
      }
    }

    return this.boxes;
  }

  public getCurrentBoard(): Spot[][] {
    return this.boxes;
  }
}