import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
        constructor(private readonly productsService: ProductsService){}

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: string){
        return this.productsService.findById(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto){
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.productsService.remove(id);
    }

}

