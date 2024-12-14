import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function conexion() {
  try {
    const app = await NestFactory.create(AppModule);

    app.use(
      session({
        secret: 'salaymendoza',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
      }),
    );

    app.enableCors({
      origin: 'http://localhost:5173', // Permite solicitudes desde el frontend
      methods: 'GET,POST',
      credentials: true,
    });

    app.use(morgan('dev'));
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(4000);
    console.log('Servidor corriendo en http://localhost:4000');
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

conexion();
