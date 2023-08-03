import { IsBase64, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserRequest{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsBase64()
    @IsOptional()
    avatar: string;
}