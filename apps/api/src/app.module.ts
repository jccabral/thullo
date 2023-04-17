import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { BoardModule } from './board/board.module'
import { ListModule } from './list/list.module'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { CardModule } from './card/card.module'
import { GRAPHQL_MODULE_CONFIG } from './common/constants'

@Module({
  imports: [
    BoardModule,
    ListModule,
    CardModule,
    EventEmitterModule.forRoot({ delimiter: ':' }),
    GraphQLModule.forRoot(GRAPHQL_MODULE_CONFIG)
  ]
})
export class AppModule {}
