import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

export class CreateBoardDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsUUID()
    owner: UserEntity;
}

