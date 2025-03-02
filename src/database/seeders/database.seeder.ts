import { Injectable } from '@nestjs/common';
import { RolesService } from 'src/modules/teams/services/roles.service';
import { data } from './data';

@Injectable()
export class DatabaseSeeder {
  constructor(private readonly rolesService: RolesService) {}

  async run() {
    const roles = await this.rolesService.insertMany(data.roles);
    return {
      roles,
    };
  }
}
