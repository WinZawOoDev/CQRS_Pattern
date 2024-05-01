import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { KillDragonHandler } from './commands/kill-dragron.handler';

@Module({
  imports: [CqrsModule],
  controllers: [HeroesController],
  providers: [HeroesService, KillDragonHandler],
})
export class HeroesModule { }
