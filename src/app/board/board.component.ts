import { Component, OnInit } from '@angular/core';
import { Bishop } from 'src/chess/bishop';
import { Board } from 'src/chess/board';
import { asciiPieces, black, white } from 'src/chess/constants';
import { King } from 'src/chess/king';
import { Knight } from 'src/chess/knight';
import { Pawn } from 'src/chess/pawn';
import { Piece } from 'src/chess/piece';
import { Queen } from 'src/chess/queen';
import { Rook } from 'src/chess/rook';
import { Spot } from 'src/chess/spot';

export class PieceDecorator {
  private _ascii: string;

  constructor(piece: Piece | null) {
    if (piece instanceof Rook && piece.color == black) {
      this._ascii = asciiPieces.black.rook;
    }

    else if (piece instanceof Knight && piece.color == black) {
      this._ascii = asciiPieces.black.knight;
    }

    else if (piece instanceof Bishop && piece.color == black) {
      this._ascii = asciiPieces.black.bishop;
    }

    else if (piece instanceof Queen && piece.color == black) {
      this._ascii = asciiPieces.black.queen;
    }

    else if (piece instanceof King && piece.color == black) {
      this._ascii = asciiPieces.black.king;
    }

    else if (piece instanceof Pawn && piece.color == black) {
      this._ascii = asciiPieces.black.pawn;
    }

    else if (piece instanceof Rook && piece.color == white) {
      this._ascii = asciiPieces.white.rook;
    }

    else if (piece instanceof Knight && piece.color == white) {
      this._ascii = asciiPieces.white.knight;
    }

    else if (piece instanceof Bishop && piece.color == white) {
      this._ascii = asciiPieces.white.bishop;
    }

    else if (piece instanceof Queen && piece.color == white) {
      this._ascii = asciiPieces.white.queen;
    }

    else if (piece instanceof King && piece.color == white) {
      this._ascii = asciiPieces.white.king;
    }

    else if (piece instanceof Pawn && piece.color == white) {
      this._ascii = asciiPieces.white.pawn;
    }
    
    else {
      this._ascii = '';
    }

  }

  get ascii(): string {
    return this._ascii;
  }
}


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public board: Board;
  public uiBoard: PieceDecorator[][] = new Array(8);


  constructor() {
    this.board = new Board();
  }

  ngOnInit(): void {
    this.updateBoard(this.board.getCurrentBoard());    
  }

  updateBoard(spots: Spot[][]) {
    for (let r = 0; r < 8; r++) {
      this.uiBoard[r] = new Array(8);
      for (let c = 0; c < 8; c++) {
        this.uiBoard[r][c] = new PieceDecorator(spots[r][c].piece);
      }
    }
  }

}
