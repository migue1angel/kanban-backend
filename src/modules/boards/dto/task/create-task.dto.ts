import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { BoardEntity } from '../../entities/board.entity';
import {
  IsArray,
  ArrayNotEmpty,
  IsUUID as IsUUIDValidator,
} from 'class-validator';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { RoleEntity } from 'src/modules/teams/entities/role.entity';

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

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUUID('all', { each: true })
  taskAssignments: string[];
}
