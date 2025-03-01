import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleEntity } from './entities/role.entity';
import { TeamMemberEntity } from './entities/team-members.entity';
import { RolesController } from './controllers/roles.controller';
import { TeamMembersController } from './controllers/team-members.controller';
import { RolesService } from './services/roles.service';
import { TeamMembersService } from './services/team-members.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity, TeamMemberEntity]),
  ],
  controllers: [TeamMembersController, RolesController],
  providers: [TeamMembersService, RolesService],
  exports: [TeamMembersService, RolesService],
})
export class TeamsModule {}
