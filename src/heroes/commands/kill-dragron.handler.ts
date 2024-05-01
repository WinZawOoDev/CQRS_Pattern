import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { KillDragonCommand } from "./kill-dragron.command";
import { Logger } from "@nestjs/common";
import { HeroRepository } from "../repository/hero.reposition";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {

    private readonly logger = new Logger(KillDragonHandler.name);

    constructor(
        private repository: HeroRepository,
        private publisher: EventPublisher,
    ) { }

    async execute(command: KillDragonCommand): Promise<any> {
        const { dragronId, heroId } = command;
        const hero = this.publisher.mergeObjectContext(
            await this.repository.findOneById(heroId)
        );
        hero.killEnemy(dragronId);
    }
}