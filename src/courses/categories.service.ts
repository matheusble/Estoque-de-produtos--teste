import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateCategorytDto } from './dto/create-category.dto';
import { UpdateCategorytDto } from './dto/update-category.dto';
import { Category } from './entities/categories.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ){}

    findAll(){
        return this.categoryRepository.find();
    }

    findById(id: string){
        const product = this.categoryRepository.findOne(id);

        if (!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return product;
    }

    async create(createCategoryDto: CreateCategorytDto){
        const category = this.categoryRepository.create(createCategoryDto);

        return this.categoryRepository.save(category);
    }

    async update(id: string, updateCategoryDto: UpdateCategorytDto){

       
        const product = await this.categoryRepository.preload({id: +id, ...updateCategoryDto});

        if(!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return this.categoryRepository.save(product)
    }

    async remove(id: string){
        const product = await this.categoryRepository.findOne(id);

        if(!product){
            throw new NotFoundException(`Product ID ${id} not found`)
        }

        return this.categoryRepository.remove(product)

    }
}


