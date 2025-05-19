import { Injectable } from '@nestjs/common';
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamMemberEntity } from '../entities/team-members.entity';

@Injectable()
export class TeamMembersService {
  constructor(
    @InjectRepository(TeamMemberEntity)
    private readonly repository: Repository<TeamMemberEntity>,
  ) {}

  async create(createTeamMemberDto: CreateTeamMemberDto) {
    const teamMember = this.repository.create(createTeamMemberDto);
    return await this.repository.save(teamMember);
  }

  async createMany(createTeamMemberDtos: CreateTeamMemberDto[]) {
    const createdMembers = await Promise.all(
      createTeamMemberDtos.map((teamMember) => this.create(teamMember)),
    );
    return createdMembers;
  }

  async findAll() {
    return `This action returns all teams`;
  }

  async findByBoard(boardId: string) {
    return await this.repository.find({
      where: { board: { id: boardId } },
      relations: {
        user: true,
        roles: false,
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  async remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
