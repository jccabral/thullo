import { GraphQLModule } from '@nestjs/graphql'
import { BoardModule } from './board/board.module'
import { ListModule } from './list/list.module'
import { CardModule } from './card/card.module'
import { GRAPHQL_MODULE_CONFIG } from './common/constants'
    BoardModule,
    ListModule,
    CardModule,
    GraphQLModule.forRoot(GRAPHQL_MODULE_CONFIG)
