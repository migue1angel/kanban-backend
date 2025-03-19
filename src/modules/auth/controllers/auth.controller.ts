import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { RegisterDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    const user = await this.authService.login(loginDto);
    return user;
  }

  @Post('register')
  async register (@Body() registerDto : RegisterDto){
    const user = await this.authService.register(registerDto);

    return user;
  }
}
