import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { KillDragonCommand } from "./kill-dragron.command";
import { Logger } from "@nestjs/common";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {

    private readonly logger = new Logger(KillDragonHandler.name);

    execute(command: KillDragonCommand): Promise<any> {
        this.logger.log(`${JSON.stringify(command)}`);
        return;
    }
}