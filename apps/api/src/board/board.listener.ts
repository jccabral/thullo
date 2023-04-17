import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { ListCreatedEvent } from 'src/list/list-created.event'
import { BoardService } from './board.service'
import { LIST_CREATED } from 'src/common/constants'

@Injectable()
export class BoardListener {
  constructor(private readonly boardService: BoardService) {}

  @OnEvent(LIST_CREATED)
  async handleListCreated(event: ListCreatedEvent) {
    return await this.boardService.appendList(event)
  }
}
