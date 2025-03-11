import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskAssigmentEntity } from '../entities/task-assigment.entity';
import { Repository } from 'typeorm';
import { CreateTaskAssigmentDto } from '../dto/task-assigment/create-task-assigment.dto';

@Injectable()
export class TaskAssigmentsService {

    constructor(
        @InjectRepository(TaskAssigmentEntity)
        private readonly taskAssigmentRepository: Repository<TaskAssigmentEntity>
    ) {}

    async create(createTaskAssigmentDto: CreateTaskAssigmentDto){
        const taskAssigment = this.taskAssigmentRepository.create(createTaskAssigmentDto);
        return this.taskAssigmentRepository.save(taskAssigment);
    }
}
