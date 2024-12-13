import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';  //se importa auth module
import { UserModule } from './user/user.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { DireccionesModule } from './direcciones/direcciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin1234',
      database: 'crudmalargue',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    AuthModule,
    UserModule,
    PacientesModule,
    DireccionesModule,
  ],
})
export class AppModule {}
