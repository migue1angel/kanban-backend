import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Like, Repository } from 'typeorm';
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

  async findByEmailOrUsername(identifier: string) {
    const sanitizedIdentifier = identifier.replace(/\s+/g, '%');
    return await this.repository.find({
      where: [
      { email: Like(`%${sanitizedIdentifier}%`) },
      { username: Like(`%${sanitizedIdentifier}%`) },
      ],
      select: ['id', 'email', 'username'],
    });
  }

  async insertMany(createUserDto: CreateUserDto[]) {
    const users = createUserDto.map((user) => {
      return this.repository.create(user);
    });
    return await this.repository.save(users);
  }
}
