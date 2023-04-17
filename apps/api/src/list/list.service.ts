import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { DatabaseService } from 'src/database/database.service'
import { CreateListInput } from 'src/common/graphql'
import { ListCreatedEvent } from './list-created.event'
import { LIST_CREATED } from 'src/common/constants'
import { AppendCardDTO } from './append-card.dto'

@Injectable()
export class ListService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  async findMany() {
    return await this.databaseService.list.findMany()
  }

  async create(list: CreateListInput) {
    const newList = await this.databaseService.list.create({ data: list })
    const createdListEvent = new ListCreatedEvent()

    createdListEvent.id = newList.id
    createdListEvent.board = newList.boardId

    this.eventEmitter.emit(LIST_CREATED, createdListEvent)
    return newList
  }

  async appendCard(card: AppendCardDTO) {
    return await this.databaseService.list.update({
      where: { id: card.list },
      data: {
        cards: {
          push: card.id
        }
      }
    })
  }
}
