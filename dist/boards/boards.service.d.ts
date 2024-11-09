import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(createboardDto: CreateBoardDto): Board;
    getBoardById(id: string): Board;
    updateBoardStatus(id: string, status: BoardStatus): Board;
    deleteBoard(id: string): void;
}
