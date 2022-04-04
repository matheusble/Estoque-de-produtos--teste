import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Tecredi')
    .setDescription('Tecredi teste')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /*Validação de dados*/ 
  app.useGlobalPipes(new ValidationPipe({
    /*Valida a lista dos atributos do Dto*/ 
    whitelist: true,
    /*Não permite elementos extras fora do que está validada no DTO ao enviar via POST, possibilitando maior segurança.*/ 
    forbidNonWhitelisted: true,
    /*Faz a tipagem do objeto com os dados definidos no DTO*/
    transform: true,
  }));
  await app.listen(3000);
}
bootstrap();
