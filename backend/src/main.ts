import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret: 'salaymendoza',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }));

  app.use(morgan('dev'));

  await app.listen(3005);
  console.log('Server running on http://localhost:3005/');
}
bootstrap();
