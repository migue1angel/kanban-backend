import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMemberEntity } from '../entities/team-members.entity';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectRepository(TeamMemberEntity)
    private teamMembersRepository: Repository<TeamMemberEntity>,
  ) {}

  create(createTeamDto: CreateTeamMemberDto) {
    return 'This action adds a new team';
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
