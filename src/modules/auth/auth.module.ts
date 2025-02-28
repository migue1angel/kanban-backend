import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    DatabaseModule, TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
