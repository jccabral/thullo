import { Module } from '@nestjs/common'
import { ListResolver } from './list.resolver'
import { ListService } from './list.service'
import { DatabaseModule } from 'src/database/database.module'
import { ListListener } from './list.listener'

@Module({
  imports: [DatabaseModule],
  providers: [ListResolver, ListService, ListListener]
})
export class ListModule {}
