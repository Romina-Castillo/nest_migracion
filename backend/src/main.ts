import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware para sesiones
  app.use(
    session({
      secret: 'salaymendoza', // Clave secreta para firmar las cookies de sesión
      resave: false,          // Evita guardar la sesión si no hay cambios
      saveUninitialized: true, // Guarda nuevas sesiones sin inicializar
      cookie: { secure: false },
    }),
  );

  // Middleware para logs HTTP con morgan
  app.use(morgan('dev'));

  // Habilitar validación global de DTOs
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3005);
  console.log('Server running on http://localhost:3005/');
}

bootstrap();
