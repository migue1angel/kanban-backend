import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBoardDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}

