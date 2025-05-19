import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config/envs';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: envs.JWT_SECRET,
      signOptions: {
        expiresIn: '15m'
      }
    })
  ],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
  exports: [
    UsersService,
    TypeOrmModule // Exporta el módulo para que el repositorio UserEntity esté disponible en otros módulos
  ],
})
export class AuthModule {}
