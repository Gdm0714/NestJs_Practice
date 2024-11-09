import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BOARD_MESSAGES } from './constants/board.constants';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return [...this.boards];
  }

  createBoard(createboardDto: CreateBoardDto): Board {
    const board: Board = {
      id: randomUUID(),
      ...createboardDto,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push({ ...board });
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(BOARD_MESSAGES.NOT_FOUND(id));
    }
    return { ...found };
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const boardIndex = this.boards.findIndex(board => board.id === id);
    if (boardIndex === -1) {
      throw new NotFoundException(BOARD_MESSAGES.NOT_FOUND(id));
    }

    this.boards[boardIndex] = {
      ...this.boards[boardIndex],
      status
    };

    return { ...this.boards[boardIndex] };
  }

  deleteBoard(id: string): void {
    const boardIndex = this.findBoardIndex(id);
    this.boards.splice(boardIndex, 1);
  }

  private findBoardIndex(id: string): number {
    const boardIndex = this.boards.findIndex(board => board.id === id);
    if (boardIndex === -1) {
      throw new NotFoundException(BOARD_MESSAGES.NOT_FOUND(id));
    }
    return boardIndex;
  }
}