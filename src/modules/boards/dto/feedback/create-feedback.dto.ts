import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { TaskEntity } from '../../entities/task.entity';

export class CreateFeedbackDto {
  @IsString()
  @MaxLength(200)
  content: string;

  @IsUUID()
  @IsNotEmpty()
  user: UserEntity;

  @IsUUID()
  @IsNotEmpty()
  task: TaskEntity;
}
