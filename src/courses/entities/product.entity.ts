import { getEntityManagerToken, getRepositoryToken } from "@nestjs/typeorm";
import { IsBoolean } from "class-validator";
import { type } from "os";
import { Entity, Column, PrimaryGeneratedColumn,JoinTable,OneToMany,ManyToOne } from 'typeorm';
import {Repository} from 'typeorm';
import { Category } from "./categories.entity";


@Entity('products')
export class Product{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:255})
    name: string;

    @Column('int')
    quantity: number;

    @IsBoolean()
    active: boolean;

    
    @OneToMany(()=>Category, categories=>categories.products)
    categories: Category[];


    
}