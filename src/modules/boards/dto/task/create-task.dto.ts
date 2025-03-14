import { IsBoolean, IsDate, IsEnum, IsString, IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  priority: boolean;

  @IsDate()
  dueDate: Date;

  @IsUUID()
  @IsEnum(['todo', 'in_progress', 'to_review', 'done'])
  boardId: string;

  @IsString()
  state: string;

  @IsUUID()
  userId: string;
}
