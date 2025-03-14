import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { BoardsService } from './services/boards.service';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TaskEntity } from './entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity, TaskEntity]),
  ],
  controllers: [BoardsController, TasksController],
  providers: [BoardsService, TasksService],
})
export class BoardsModule {}
