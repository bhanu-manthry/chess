import { Bishop } from "./bishop";
import { white, black } from "./constants";
import { King } from "./king";
import { Knight } from "./knight";
import { Pawn } from "./pawn";
import { Piece } from "./piece";
import { Queen } from "./queen";
import { Rook } from "./rook";


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

      default: throw new Error(`Illegal Piece Code "${charCode.toString()}"`);
    }
  }
}
