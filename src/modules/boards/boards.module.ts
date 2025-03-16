import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { BoardsService } from './services/boards.service';
import { TasksService } from './services/tasks.service';
import { TasksController } from './controllers/tasks.controller';
import { TaskEntity } from './entities/task.entity';
import { AttachmentsController, FeedbacksController } from './controllers';
import { AttachmentsService, FeedbacksService } from './services';
import { AttachmentEntity } from './entities/attachment.entity';
import { FeedbackEntity } from './entities/feedback.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity, TaskEntity, AttachmentEntity, FeedbackEntity]),
  ],
  controllers: [BoardsController, TasksController, AttachmentsController, FeedbacksController],
  providers: [BoardsService, TasksService, AttachmentsService, FeedbacksService],
})
export class BoardsModule {}
