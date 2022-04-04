import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { targetModulesByContainer } from '@nestjs/core/router/router-module';
import { InjectRepository } from '@nestjs/typeorm';
import { relative } from 'path';
import {Repository} from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto} from './dto/update-product.dto'
import { Category } from './entities/categories.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ){}

    findAll(){
        return this.productRepository.find({relations:['categories']});
    }

    findById(id: string){
        const product = this.productRepository.findOne(id, {relations: ['categories']});

        if (!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return product;
    }

    async create(createProductDto: CreateProductDto){
        const categories = await Promise.all(createProductDto.categories.map((name)=> this.preloadCategoryById(name)));


        const product = this.productRepository.create({
            ...createProductDto,
            categories,
        });
        return this.productRepository.save(product);
    }

    async update(id: string, updateProductDto: UpdateProductDto){

        const categories = updateProductDto.categories && (
            await Promise.all(updateProductDto.categories.map((name)=>this.preloadCategoryById(name))));
        const product = await this.productRepository.preload({id: +id, ...updateProductDto, categories});

        if(!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return this.productRepository.save(product)
    }

    async remove(id: string){
        const product = await this.productRepository.findOne(id);

        if(!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return this.productRepository.remove(product)

    }

    private async preloadCategoryById(name: string): Promise<Category>{
        const category = await this.categoryRepository.findOne({ name });

        if(category){
            return category;
        }

        return this.categoryRepository.create({ name });
        
        
    }
}


