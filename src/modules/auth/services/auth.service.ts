import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/register.dto';
import { envs } from 'src/config/envs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException('Email not found');

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const token = await this.generateJwt(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.username,
      },
      token,
    };
  }

  async register(registerDto: RegisterDto) {
    const userFound = await this.usersService.findOneByEmail(registerDto.email);
    if (userFound) throw new BadRequestException('Email already exists');

    const user = await this.usersService.create({
      ...registerDto,
      password: await bcrypt.hash(registerDto.password, 10),
    });
    return {
      user,
      token: await this.generateJwt(user.id),
    };
  }

  async generateJwt(id: string) {
    return this.jwtService.sign({ id });
  }
}
