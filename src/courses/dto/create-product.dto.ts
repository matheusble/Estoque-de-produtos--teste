import { IsString,IsOptional, IsBoolean, IsNumber, IsNumberString, IsInt } from "class-validator";

export class CreateProductDto{

    @IsNumber() @IsOptional() readonly id: number;   
    
    @IsString()
    readonly name: string;

    @IsInt()
    readonly quantity: number;

    @IsBoolean()
    readonly active: boolean;

    @IsString({ each: true })
    readonly categories: string[];

}
