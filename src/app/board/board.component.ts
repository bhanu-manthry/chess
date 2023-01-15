import { Component, OnInit } from '@angular/core';
import { Game } from 'src/chess/game';
import { Spot } from 'src/chess/spot';
// import { AsciiPieceDecorator } from 'src/decorators/AsciiPieceDecorator';
import { ImagePieceDecorator } from 'src/decorators/png/ImagePieceDecorator';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public game: Game;
  public uiBoard: ImagePieceDecorator[][] = new Array(8);

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.game.getCurrentBoard();
    this.updateBoard(this.game.getCurrentBoard());  
  }

  updateBoard(spots: Spot[][]) {
    for (let r = 0; r < 8; r++) {
      this.uiBoard[r] = new Array(8);
      for (let c = 0; c < 8; c++) {
        this.uiBoard[r][c] = new ImagePieceDecorator(spots[r][c]);
      }
    }
  }

  onSelect(spot: Spot) {
    this.game.selectSpot(spot);
  }
}
