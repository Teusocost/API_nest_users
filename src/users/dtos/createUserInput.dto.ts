import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


 export class CreateUserInputDTO  {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:false}) // não obrigatorio
    password: string
}