import { Module } from '@nestjs/common';
import { Product } from 'src/courses/entities/product.entity';
import { ProductsController } from 'src/courses/products.controller';
import { ProductsService } from 'src/courses/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/courses/entities/categories.entity';
import { CategoryService } from 'src/courses/categories.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Category])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}

