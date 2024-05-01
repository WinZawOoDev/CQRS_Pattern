import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { HeroKilledDragonEvent } from "./hero-killed-dragon.event";
import { HeroRepository } from "../repository/hero.reposition";
import { Logger } from "@nestjs/common";

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler implements IEventHandler<HeroKilledDragonEvent> {

    private readonly logger = new Logger(HeroKilledDragonHandler.name);

    constructor(private reposition: HeroRepository) { }

    handle(event: HeroKilledDragonEvent) {
        this.logger.log(`${JSON.stringify(event)}`);
    }
}