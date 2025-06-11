import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { AuthGuard } from '../guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('validate-token')
  async validateToken(@Request() req: Request) {
    const user = req['user'];
    const token = await this.authService.generateJwt(user.id);
    return { token, user };
  }
}
