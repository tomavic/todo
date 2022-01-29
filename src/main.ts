import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('TODO')
    .setDescription('A documentation for notes')
    .setVersion('1.0')
    .addTag('Todo List', 'Hola')
    .build();
  const appDocument = SwaggerModule.createDocument(app, options, {
    include: [TodoModule],
  });

  SwaggerModule.setup('api/v1', app, appDocument);
  await app.listen(PORT);
}
bootstrap();
