export const BOARD_MESSAGES = {
  NOT_FOUND: (id: string) => `해당 id의 게시글이 없습니다. id: ${id}`,
  INVALID_STATUS: (status: string) => `올바르지 않은 게시글 상태입니다. status=${status}`,
} as const;