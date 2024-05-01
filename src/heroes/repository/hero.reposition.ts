import { Injectable, Logger } from "@nestjs/common";
import { Hero } from "../models/hero.model";

@Injectable()
export class HeroRepository {
    private readonly logger = new Logger(HeroRepository.name);
    private hero: Hero;
    constructor() {
        this.hero = new Hero(`31io3`);
    }

    async findOneById(id: string): Promise<Hero> {
        this.logger.log(id);
        return this.hero;
    }

    async findAll(): Promise<Hero[]> {
        return [this.hero];
    }

}