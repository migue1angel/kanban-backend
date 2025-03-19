import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(4)
    username: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8)
    password: string;
}