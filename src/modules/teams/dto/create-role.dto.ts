import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  code: number;

  @IsOptional()
  @IsString()
  description?: string;
}
