import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly tasksService: TasksService
    ) {}

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return "Task created";
    }
}
