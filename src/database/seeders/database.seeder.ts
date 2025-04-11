import { Injectable } from '@nestjs/common';
import { RolesService } from 'src/modules/teams/services/roles.service';
import { roles } from './data';
import { UsersService } from 'src/modules/auth/services/users.service';
import { users } from './data';
;

@Injectable()
export class DatabaseSeeder {
 constructor(private readonly rolesService: RolesService, private readonly usersService:UsersService) {}

  async run() {
    const newRoles = await this.rolesService.insertMany(roles);
    const newUsers = await this.usersService.insertMany(users);
    return {
      newRoles,
      newUsers,
    };
  }
}
