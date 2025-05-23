import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return await this.tasksService.findAll();
  }
  @Get('board/:id')
  async findByBoard(@Param('id') boardId: string) {
    return await this.tasksService.findByBoard(boardId);
  }
}
