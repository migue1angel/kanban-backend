import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { UserEntity } from './entities/user.entity';
import { pgDataSource } from 'src/shared/consts/datasource';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([UserEntity], pgDataSource),
  ],
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
