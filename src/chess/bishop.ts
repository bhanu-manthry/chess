import { Piece } from "./piece";

export class Bishop extends Piece {
  canMove(): boolean {
    throw new Error("Method not implemented.");
  }

  getPossibleMoves(): { x: number; y: number; }[] {
    throw new Error("Method not implemented.");
  }
}