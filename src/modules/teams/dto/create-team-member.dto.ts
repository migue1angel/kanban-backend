import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTeamMemberDto {
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsNotEmpty()
    @IsUUID()
    boardId: string;
    
    @IsArray() 
    @IsNotEmpty()
    @IsUUID('all', {each: true})
    roleIds: string[];
}
