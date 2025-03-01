import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}
