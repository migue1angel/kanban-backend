import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { RoleEntity } from '../entities/role.entity';
import { Type } from 'class-transformer';

export class CreateTeamMemberDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  boardId: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => RoleEntity)
  roles: RoleEntity[];
}
