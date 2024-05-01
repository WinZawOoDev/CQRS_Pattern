import { AggregateRoot } from "@nestjs/cqrs";
import { HeroKilledDragonEvent } from "../events/hero-killed-dragon.event";

export class Hero extends AggregateRoot {

    constructor(private readonly id: string) {
        super();
        this.autoCommit = true
    }

    killEnemy(enemyId: string) {
        this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }

}