import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/user/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }
  
  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    const user = await this.usersService.findByEmailOrUsername(email);
    return user;
  }


}
