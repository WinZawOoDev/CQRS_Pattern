import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetHeroesQuery } from "./get-heroes.query";
import { HeroRepository } from "../repository/hero.reposition";
import { Logger } from "@nestjs/common";

@QueryHandler(GetHeroesQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroesQuery> {

    private readonly logger = new Logger(GetHeroesHandler.name);

    constructor(private readonly repository: HeroRepository) { }

    execute(query: GetHeroesQuery): Promise<any> {
        this.logger.log(JSON.stringify(query));
        return;
    }
}