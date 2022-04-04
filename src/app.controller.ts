import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  appService: any;
   
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
