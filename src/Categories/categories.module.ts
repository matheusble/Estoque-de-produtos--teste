import { Module } from '@nestjs/common';
import { Product } from 'src/courses/entities/product.entity'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/courses/entities/categories.entity';
import { CategoryService } from 'src/courses/categories.service';
import { CategoriesController } from 'src/courses/categories.controller.';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Category])],
    controllers: [CategoriesController],
    providers: [CategoryService],
})
export class CategoriesModule {}