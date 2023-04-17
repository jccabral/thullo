import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { CARD_CREATED } from 'src/common/constants'
import { ListService } from './list.service'
import { CardCreatedEvent } from 'src/card/card-created.event'

@Injectable()
export class ListListener {
  constructor(private readonly listService: ListService) {}

  @OnEvent(CARD_CREATED)
  async handleCardCreated(event: CardCreatedEvent) {
    return await this.listService.appendCard(event)
  }
}
