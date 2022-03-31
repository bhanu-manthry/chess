import { Bishop } from "./bishop";
import { white, black } from "./constants";
import { King } from "./king";
import { Knight } from "./knight";
import { Pawn } from "./pawn";
import { Piece } from "./piece";
import { Queen } from "./queen";
import { Rook } from "./rook";
import { Spot } from "./spot";

export class PieceFactory {
  static getPiece(charCode: string): Piece | null {
    switch (charCode) {
      // all white pieces
      case 'R': return new Rook(white);
      case 'N': return new Knight(white);
      case 'B': return new Bishop(white);
      case 'Q': return new Queen(white);
      case 'K': return new King(white);
      case 'P': return new Pawn(white);

      // all black pieces
      case 'r': return new Rook(black);
      case 'n': return new Knight(black);
      case 'b': return new Bishop(black);
      case 'q': return new Queen(black);
      case 'k': return new King(black);
      case 'p': return new Pawn(black);
      case '': return null;
      
      default: throw new Error('Illegal Piece charCode');
    }
  }
}

export class Board {
  private spots: any;
  private standardLayout = Object.freeze([
    'r n b q k b n r',
    'p p p p p p p p',
    '               ',
    '               ',
    '               ',
    '               ',
    'P P P P P P P P',
    'R N B Q K B N R'
  ]);

  public Board() {
    this.spots = null;
    this.resetBoard();
  }

  public resetBoard() {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        let piece = PieceFactory.getPiece(this.standardLayout[r][c])
        this.spots[r][c] = new Spot(r, c, piece)
      }
    }
  }
}