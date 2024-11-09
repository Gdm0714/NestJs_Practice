import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';
import { BOARD_MESSAGES } from '../constants/board.constants';

export class BoardStatusValidationPipe implements PipeTransform<string, BoardStatus> {
  private readonly statusOptions = Object.values(BoardStatus);

  transform(value: string): BoardStatus {
    const upperValue = value?.toUpperCase();

    if (!this.isStatusValid(upperValue)) {
      throw new BadRequestException(BOARD_MESSAGES.INVALID_STATUS(value));
    }

    return upperValue as BoardStatus;
  }

  private isStatusValid(status: string): boolean {
    return this.statusOptions.includes(status as BoardStatus);
  }
}