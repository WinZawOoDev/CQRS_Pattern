import { Injectable } from '@nestjs/common';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { CommandBus } from '@nestjs/cqrs';
import { KillDragonDto } from './dto/kill-dragon.dto';
import { KillDragonCommand } from './commands/kill-dragron.command';

@Injectable()
export class HeroesService {

  constructor(private commandBus: CommandBus) { }

  async killDragon(heroId: string, killDragonDto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(heroId, killDragonDto.dragonId));
  }

  create(createHeroDto: CreateHeroDto) {
    return 'This action adds a new hero';
  }

  findAll() {
    return `This action returns all heroes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
