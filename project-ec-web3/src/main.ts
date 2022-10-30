import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DateFormat } from './utils/tools/DateFormat';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // !后台API接口网页
  const config = new DocumentBuilder()
    .setTitle('EchartsApi')
    .setDescription('技术分享网站的后台API' + new DateFormat().dateFormat())
    .setVersion('版本1.0')
    .addTag('dev')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
}
bootstrap();
