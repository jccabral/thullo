import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CardService } from './card.service'
import { CreateCardInput } from 'src/common/graphql'

@Resolver()
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Query()
  async cards() {
    return await this.cardService.findMany()
  }

  @Mutation()
  async createCard(@Args('card') card: CreateCardInput) {
    return await this.cardService.create(card)
  }
}
