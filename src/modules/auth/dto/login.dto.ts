import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    
    @IsString()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}