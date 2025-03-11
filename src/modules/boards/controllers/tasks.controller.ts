import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { TasksService } from '../services/tasks.service';

@Controller('task')
export class TasksController {
    constructor(
        private readonly taskService: TasksService
    ) {}

    //@Post()
    //async create(@Body() createTaskDto: CreateTaskDto) {

    //}
}
