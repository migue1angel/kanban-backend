import { IsString, IsUUID } from "class-validator";

export class CreateAttachmentDto {  
    @IsString()
    fileName: string;
    
    @IsString()
    fileUrl: string;    

    @IsString()
    fileSize: string;

    @IsString()
    contentType: string;

    @IsUUID()
    taskId: string;
}