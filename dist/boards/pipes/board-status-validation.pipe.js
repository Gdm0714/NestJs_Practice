"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const board_model_1 = require("../board.model");
class BoardStatusValidationPipe {
    constructor() {
        this.StatusOptions = [board_model_1.BoardStatus.PUBLIC, board_model_1.BoardStatus.PRIVATE];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`올바르지 않은 게시글 상태입니다. status=${value}`);
            return value;
        }
    }
    isStatusValid(status) {
        return this.StatusOptions.indexOf(status) !== -1;
    }
}
exports.BoardStatusValidationPipe = BoardStatusValidationPipe;
//# sourceMappingURL=board-status-validation.pipe.js.map