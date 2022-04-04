import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './categories.service';
import { CreateCategorytDto } from './dto/create-category.dto';
import { UpdateCategorytDto } from './dto/update-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
        constructor(private readonly categoriesService: CategoryService){}

    

    @Get()
    findAll(){
        return this.categoriesService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: string){
        return this.categoriesService.findById(id);
    }

    @Post()
    create(@Body() createProductDto: CreateCategorytDto) {
        return this.categoriesService.create(createProductDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateCategorytDto){
        return this.categoriesService.update(id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.categoriesService.remove(id);
    }

}

