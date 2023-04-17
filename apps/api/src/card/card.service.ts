import { CreateCardInput } from 'src/common/graphql'
import { DatabaseService } from '../database/database.service'
import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { CardCreatedEvent } from './card-created.event'
import { CARD_CREATED } from 'src/common/constants'

@Injectable()
export class CardService {
  constructor(
    private readonly database: DatabaseService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  async findMany() {
    return await this.database.card.findMany()
  }

  async create(card: CreateCardInput) {
    const newCard = await this.database.card.create({ data: card })
    const cardCreatedEvent = new CardCreatedEvent()

    cardCreatedEvent.id = newCard.id
    cardCreatedEvent.list = newCard.listId

    this.eventEmitter.emit(CARD_CREATED, cardCreatedEvent)

    return newCard
  }
}
