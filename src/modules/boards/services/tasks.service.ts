import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/task/create-task.dto';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskEntity)
        private readonly taskRepository: Repository<TaskEntity>,
    ) {}

    async create(createTaskDto: CreateTaskDto){
        const task = this.taskRepository.create(createTaskDto);
        return this.taskRepository.save(task);
    }

}
