import { PieceColor, PieceType } from "src/chess/constants";
import { Spot } from "src/chess/spot";

const asciiPieces: Record<PieceColor, Record<PieceType, string>> = {
    black: {
      rook: '♜',
      knight: '♞',
      bishop: '♝',
      queen: '♛',
      king: '♚',
      pawn: '♟',
    },
    white: {
      rook: '♖',
      knight: '♘',
      bishop: '♗',
      queen: '♕',
      king: '♔',
      pawn: '♙',
    }
  }
  
  export class AsciiPieceDecorator {
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