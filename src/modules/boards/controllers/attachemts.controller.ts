import { Body, Controller, Post } from "@nestjs/common";
import { AttachmentsService } from "../services/attachments.service";
import { CreateAttachmentDto } from "../dto/attachment/create.attachments.dto";

@Controller('attachments')
export class AttachmentsController {
  constructor(
    private readonly attachmentsService: AttachmentsService) {}

  @Post()
    async create(@Body() createAttachmentDto: CreateAttachmentDto){
        return this.attachmentsService.create(createAttachmentDto);
    };
}
