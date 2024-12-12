// para validar los datos del registro

import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  nombre_usuario: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  contraseña: string;
}
