import { PieceColor, PieceType } from "src/chess/constants";
import { Spot } from "src/chess/spot";

const asciiPieces: Record<PieceColor, Record<PieceType, string>> = {
    black: {
      rook: 'b_rook.png',
      knight: 'b_knight.png',
      bishop: 'b_bishop.png',
      queen: 'b_queen.png',
      king: 'b_king.png',
      pawn: 'b_pawn.png',
    },
    white: {
      rook: 'w_rook.png',
      knight: 'w_knight.png',
      bishop: 'w_bishop.png',
      queen: 'w_queen.png',
      king: 'w_king.png',
      pawn: 'w_pawn.png',
    }
  }
  
  export class ImagePieceDecorator {
    private _ascii: string; 
    public readonly spot: Spot;
  
    constructor(spot: Spot) {
      const piece = spot.piece;
      this.spot = spot;
  
      if (piece?.color != null && piece?.constructor.name) {
        const pieceName: PieceType = piece?.constructor.name.toLocaleLowerCase() as PieceType;
        this._ascii = asciiPieces[piece.color][pieceName]
      }
      
      else {
        this._ascii = '';
      }
    }
  
    get ascii(): string {
      return this._ascii;
    }
  }