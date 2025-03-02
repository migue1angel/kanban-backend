import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly repository: Repository<RoleEntity>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = this.repository.create(createRoleDto);
    return await this.repository.save(role);
  }

  async insertMany(createRolesDto: CreateRoleDto[]) {
    const roles = createRolesDto.map((role) => {
      return this.repository.create(role);
    });
    return await this.repository.save(roles);
  }
}
