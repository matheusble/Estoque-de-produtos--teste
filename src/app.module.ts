import { Module } from '@nestjs/common';
import { PDFModule } from '@t00nday/nestjs-pdf';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './courses/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { CategoriesController } from './courses/categories.controller.';
import { CategoryService } from './courses/categories.service';
import { CategoriesModule } from './Categories/categories.module';




@Module({
  
  imports:[ProductsModule,CategoriesModule,TypeOrmModule.forRoot({
    /*Configuração do banco de dados*/
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
