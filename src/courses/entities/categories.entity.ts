import { Entity, Column, PrimaryGeneratedColumn,OneToMany,ManyToOne } from 'typeorm';
import { IsBoolean } from "class-validator";
import { Product } from './product.entity';


export class Categories {}

@Entity('categories')
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:255})
    public name: string;
    
    @ManyToOne(() => Product, products => products.categories) // note: we will create author property in the Photo class below
    products: Product[];

    @IsBoolean()
    active: boolean;
    static active: any;
}
