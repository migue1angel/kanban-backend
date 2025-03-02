import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'src/config/envs';
import { DatabaseSeeder } from './seeders/database.seeder';
import { TeamsModule } from 'src/modules/teams/teams.module';

@Global()
@Module({
  imports: [
    TeamsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.DB_HOST,
      port: envs.DB_PORT,
      username: envs.DB_USERNAME,
      password: envs.DB_PASSWORD,
      database: envs.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      // dropSchema:true
    }),
  ],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder],
})
export class DatabaseModule {}
