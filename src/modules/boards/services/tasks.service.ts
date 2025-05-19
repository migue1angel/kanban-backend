import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/task/create-task.dto';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const { taskAssignments, ...rest } = createTaskDto;
    const users = await this.userRepository.findBy({
      id: In(taskAssignments),
    });

    const task = this.taskRepository.create({
      ...rest,
      taskAssignments: users,
    });
    return this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }
  async findByBoard(boardId: string) {
    return await this.taskRepository.findBy({ board: { id: boardId } });
  }
}
