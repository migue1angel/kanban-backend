import { Injectable } from '@nestjs/common';
import { RolesService } from 'src/modules/teams/services/roles.service';
import { roles, users } from './data';
import { UsersService } from 'src/modules/auth/services/users.service';
import { DataSource } from 'typeorm';
@Injectable()
export class DatabaseSeeder {
  constructor(
    private readonly rolesService: RolesService,
    private readonly usersService: UsersService,
    private dataSource: DataSource
  ) {
    this.createSchemas
  }

  private async createSchemas() {
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.connect();

      // Crear esquemas
      await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "auth"');
      await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "teams"');
      await queryRunner.query('CREATE SCHEMA IF NOT EXISTS "boards"');

      console.log('Esquemas creados exitosamente');
    } catch (error) {
      console.error('Error creando esquemas:', error);
    } finally {
      await queryRunner.release();
    }
  }

  async run() {
    const newRoles = await this.rolesService.insertMany(roles);
    const newUsers = await this.usersService.insertMany(users);
    return {
      newRoles,
      newUsers,
    };
  }
}
