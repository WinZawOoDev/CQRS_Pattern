import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { PostService } from './post.service';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService, PostService, UserService, PrismaService],
})
export class AppModule { }
