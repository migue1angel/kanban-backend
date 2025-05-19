import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { BoardsService } from './services/boards.service';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TaskEntity } from './entities/task.entity';
import { FeedbacksController } from './controllers';
import { FeedbacksService } from './services';
import { FeedbackEntity } from './entities/feedback.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      BoardEntity,
      TaskEntity,
      FeedbackEntity,
    ]),
  ],
  controllers: [BoardsController, TasksController, FeedbacksController],
  providers: [BoardsService, TasksService, FeedbacksService],
})
export class BoardsModule {}
