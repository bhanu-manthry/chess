import {Board} from './board';
import {Piece} from './piece';
import {Spot} from './spot';

export class Knight extends Piece {
  private readonly relativeVertices = [
    {x: -2, y: -1},
    {x: -2, y: 1},
    {x: -1, y: -2},
    {x: -1, y: 2},
    {x: 1, y: -2},
    {x: 1, y: 2},
    {x: 2, y: -1},
    {x: 2, y: 1},
  ];

  canMove(board: Board, start: Spot, end: Spot): boolean {
    for (let vertex of this.relativeVertices) {
      let x = start.x + vertex.x;
      let y = start.y + vertex.y;
      if (end.x === x && end.y === y) {
        return true;
      }
    }
    
    return false;
  }

  getPossibleMoves(spot: Spot): { x: number; y: number; }[] {
    return this.relativeVertices.map(v => {
      return {
        x: spot.x + v.x,
        y: spot.y + v.y
      }
    })
  }
}
