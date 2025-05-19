import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Only validate the fields that are declared in the dto and have a validation decorator
      forbidNonWhitelisted: true, // Reject the request if the payload contains fields that are not declared in the dto
      transform: true, // Transform the validated object to match the dto's shape
    }),
  );
  await app.listen(envs.PORT);
}
bootstrap();
