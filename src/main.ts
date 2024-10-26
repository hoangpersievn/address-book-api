import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all
  // app.enableCors();

  // Allow CORS by specific domain
  app.enableCors({
    origin: [
      'http://abc.com', // the specific domain you want to allow
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // the HTTP methods you want to allow
  });

  await app.listen(3000);
}
bootstrap();
