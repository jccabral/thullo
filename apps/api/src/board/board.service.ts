import { Injectable } from '@nestjs/common'
import { DatabaseService } from 'src/database/database.service'
import type { CreateBoardInput } from 'src/common/graphql'
import { AppendListDTO } from './append-list.dto'

@Injectable()
export class BoardService {
  constructor(private databaseService: DatabaseService) {}

  async findMany() {
    return await this.databaseService.board.findMany()
  }

  async create(board: CreateBoardInput) {
    return await this.databaseService.board.create({ data: board })
  }

  async appendList(list: AppendListDTO) {
    const { board: boardId, id: listId } = list

    return await this.databaseService.board.update({
      where: { id: boardId },
      data: {
        lists: {
          push: listId
        }
      }
    })
  }
}
