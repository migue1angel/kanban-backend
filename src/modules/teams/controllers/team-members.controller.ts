import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { TeamMembersService } from '../services/team-members.service';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';

@Controller('teams')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamMemberDto) {
    return this.teamMembersService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamMembersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamMembersService.remove(+id);
  }
}
