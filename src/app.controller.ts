import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseSeeder } from './database/seeders/database.seeder';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseSeeder: DatabaseSeeder,
  ) {}

  @Post('init')
  async init() {
    const data = await this.databaseSeeder.run();
    return {
      data,
      messsage: 'done',
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
