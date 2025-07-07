import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch('change-status/:id')
  async changeStatus(
    @Param('id') taskId: string,
    @Body('status') status: 'todo' | 'in_progress' | 'to_review' | 'done',
  ) {
    return await this.tasksService.changeStatus(taskId, status);
  }
}
