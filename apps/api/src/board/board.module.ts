import { Module } from '@nestjs/common'
import { BoardResolver } from './board.resolver'
import { BoardService } from './board.service'
import { BoardListener } from './board.listener'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [BoardResolver, BoardService, BoardListener]
})
export class BoardModule {}
