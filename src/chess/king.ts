import {Board} from './board';
import {Piece} from './piece';
import {Spot} from './spot';

export class King extends Piece {
  private readonly relativeVertices = [
    {x: -1, y: -1},
    {x: -1, y: 0},
    {x: -1, y: 1},
    {x: 0, y: -1},
    {x: 0, y: 1},
    {x: 1, y: -1},
    {x: 1, y: 0},
    {x: 1, y: 1},
  ];

  canMove(board: Board, start: Spot, end: Spot): boolean {
    if (start.piece?.color === end.piece?.color) {
      return false;
    }

    const x = Math.abs(start.x - end.x);
    const y = Math.abs(start.y - end.y);
    if (x < 2 && y < 2 && x + y > 0) {
      return true;
    }

    return false;
  }

  getPossibleMoves(spot: Spot): {x: number; y: number}[] {
    return this.relativeVertices.map(v => {
      return {
        x: spot.x + v.x,
        y: spot.y + v.y,
      };
    });
  }
}
