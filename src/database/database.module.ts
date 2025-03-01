import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'src/config/envs';
import { pgDataSource } from 'src/shared/consts/datasource';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: pgDataSource,
      type: 'postgres',
      host: envs.DB_HOST,
      port: envs.DB_PORT,
      username: envs.DB_USERNAME,
      password: envs.DB_PASSWORD,
      database: envs.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      dropSchema:true
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
