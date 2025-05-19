import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { BoardsModule } from './modules/boards/boards.module';
import { CommonModule } from './modules/common/common.module';
import { TeamsModule } from './modules/teams/teams.module';
import { DatabaseModule } from './database/database.module';
import { SharedModule } from './shared/shared.module';


@Module({
  imports: [
    AuthModule,
    BoardsModule,
    TeamsModule,
    CommonModule,
    DatabaseModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
