import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BoardService } from './board.service'
import type { CreateBoardInput } from 'src/common/graphql'

@Resolver('Board')
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query()
  async boards() {
    return await this.boardService.findMany()
  }

  @Mutation()
  async createBoard(@Args('board') board: CreateBoardInput) {
    return await this.boardService.create(board)
  }
}
