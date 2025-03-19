import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {

    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException('Email not found');

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid)throw new UnauthorizedException('Invalid credentials');

    const payload = { email: user.email };
    const token = this.jwtService.sign(payload);

    return { user, token };
  }

  async register(registerDto : RegisterDto) {

    const user = await this.usersService.findOneByEmail(registerDto.email);
    if (user) throw new BadRequestException('Email already exists');
    
     return await this.usersService.create({ 
      ...registerDto, 
      password: await bcrypt.hash(registerDto.password, 10),  
    });
  }
}
