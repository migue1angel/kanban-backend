import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";

export class UpdateBoardDto extends PartialType(CreateTaskDto){}