import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsOptional, IsBoolean, IsNumber, IsNumberString, IsInt } from "class-validator";

export class CreateCategorytDto{

    @IsNumber() 
    readonly id: number;   
    
    @IsString()
    readonly name: string;

    @IsBoolean()
    readonly active: boolean;

}