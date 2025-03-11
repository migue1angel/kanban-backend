import { IsBoolean, IsDate, IsInt, IsString, IsUUID } from "class-validator";

export class CreateTaskDto {

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsBoolean()
    priority: boolean;

    @IsDate()
    dueDate: Date;

    @IsInt()
    @IsUUID()
    boardId: string;

    @IsInt()
    @IsUUID()
    userId: string;
}