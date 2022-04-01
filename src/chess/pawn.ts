import { Board } from "./board";
import { Piece } from "./piece";
import { Spot } from "./spot";

export class Pawn extends Piece {
  canMove(board: Board, start: Spot, end: Spot): boolean {
    throw new Error("Method not implemented.");
  }

  getPossibleMoves(spot: Spot): { x: number; y: number; }[] {
    throw new Error("Method not implemented.");
  }
}