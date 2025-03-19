import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    return await this.repository.save(user);
  }

  async findAll() {
    const user = this.repository.find({
      select: ['id', 'email'],
    });
    return user;
  }

  async findOneByEmail(email: string) {
    return await this.repository.findOne({
      where: { email }, 
    });
  }
}
