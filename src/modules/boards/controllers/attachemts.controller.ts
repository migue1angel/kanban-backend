import { Body, Post } from "@nestjs/common";
import { AttachmentsService } from "../services/attachments.service";
import { CreateAttachmentDto } from "../dto/attachment/create.attachments.dto";

export class AttachmentsController {
  constructor(
    private readonly attachmentsService: AttachmentsService) {}

  @Post()
    async create(@Body() createAttachmentDto: CreateAttachmentDto){
        return this.attachmentsService.create(createAttachmentDto);
    };
}
