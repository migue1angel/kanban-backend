import { Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { BoardEntity } from '../../entities/board.entity';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsEnum(['urgent', 'regular', 'important'])
  priority: string;

  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  dueDate: Date;

  @IsUUID()
  board: BoardEntity;
  
  // @IsString()
  // @IsEnum(['todo', 'in_progress', 'to_review', 'done'])
  // status: string;

}
