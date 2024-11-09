"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const board_model_1 = require("./board.model");
let BoardsService = class BoardsService {
    constructor() {
        this.boards = [];
    }
    getAllBoards() {
        return this.boards;
    }
    createBoard(createboardDto) {
        const { title, description } = createboardDto;
        const board = {
            id: (0, crypto_1.randomUUID)(),
            title,
            description,
            status: board_model_1.BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }
    getBoardById(id) {
        const found = this.boards.find((board) => board.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`해당 id의 게시글이 없습니다. id: ${id}`);
        }
        return found;
    }
    updateBoardStatus(id, status) {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
    deleteBoard(id) {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== found.id);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map