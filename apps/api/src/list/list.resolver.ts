import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ListService } from './list.service'
import { CreateListInput } from 'src/common/graphql'

@Resolver()
export class ListResolver {
  constructor(private readonly listService: ListService) {}

  @Query()
  async lists() {
    return await this.listService.findMany()
  }

  @Mutation()
  async createList(@Args('list') list: CreateListInput) {
    return await this.listService.create(list)
  }
}
