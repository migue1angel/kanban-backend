import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { BoardsService } from './services/boards.service';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TaskAssigmentsService } from './services/task-assigments.service';
import { TaskAssignmentsController } from './controllers/task-assigments.controller';
import { TaskEntity } from './entities/task.entity';
import { TaskAssigmentEntity } from './entities/task-assigment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity, TaskEntity, TaskAssigmentEntity]),
  ],
  controllers: [BoardsController, TasksController, TaskAssignmentsController],
  providers: [BoardsService, TasksService, TaskAssigmentsService],
})
export class BoardsModule {}
