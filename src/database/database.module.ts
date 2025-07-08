import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'src/config/envs';
import { DatabaseSeeder } from './seeders/database.seeder';
import { TeamsModule } from 'src/modules/teams/teams.module';
import { AuthModule } from 'src/modules/auth/auth.module';

@Global()
@Module({
  imports: [
    TeamsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: envs.DB_HOST,
        port: envs.DB_PORT,
        username: envs.DB_USERNAME,
        password: envs.DB_PASSWORD,
        database: envs.DB_DATABASE,
        // ssl: {
        //   rejectUnauthorized: false,
        // },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsRun: true,
        synchronize: true,
      }),
    }),
  ],
  providers: [DatabaseSeeder],
  exports: [DatabaseSeeder],
})
export class DatabaseModule {}
