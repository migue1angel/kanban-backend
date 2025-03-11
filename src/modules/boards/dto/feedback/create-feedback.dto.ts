import { IsString, IsUUID, MaxLength } from "class-validator";

export class CreateFeedbackDto {
    
    @IsString()
    @MaxLength(200)
    content: string;

    @IsUUID()
    userId: string;

    @IsUUID()
    taskId: string;
}