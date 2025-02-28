import { Module } from '@nestjs/common';
import { BoardsController } from './controllers/boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { BoardsService } from './services/boards.service';
import { pgDataSource } from 'src/shared/consts/datasource';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity], pgDataSource),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
