import { IsInt, IsNotEmpty, IsUUID } from "class-validator";

export class CreateTaskAssigmentDto {
    @IsNotEmpty()
    @IsUUID()
    taskId: string;

    @IsNotEmpty()
    @IsUUID()
    userId: string;
}