import { Module } from '@nestjs/common';
import { KoncertService } from './koncert.service';
import { KoncertController } from './koncert.controller';

@Module({
  controllers: [KoncertController],
  providers: [KoncertService],
})
export class KoncertModule {}
