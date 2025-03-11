import { Body, Controller, Post } from "@nestjs/common";
import { TaskAssigmentsService } from "../services/task-assigments.service";
import { CreateTaskAssigmentDto } from "../dto/task-assigment/create-task-assigment.dto";

@Controller('task-assigments')
export class TaskAssignmentsController {

    constructor(
        private readonly taskAssignmentsService: TaskAssigmentsService) {}

    @Post()
    async create(@Body() createTaskAssigmentsDto: CreateTaskAssigmentDto) {
        return this.taskAssignmentsService.create(createTaskAssigmentsDto);
    }
}