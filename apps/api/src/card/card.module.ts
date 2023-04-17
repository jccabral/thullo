import { Module } from '@nestjs/common'
import { CardService } from './card.service'
import { CardResolver } from './card.resolver'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [CardService, CardResolver]
})
export class CardModule {}
