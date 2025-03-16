import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AttachmentEntity } from "../entities/attachment.entity";
import { CreateAttachmentDto } from "../dto/attachment/create.attachments.dto";

@Injectable()
export class AttachmentsService {
    constructor(
        @InjectRepository(AttachmentEntity)
        private readonly attachmentRepository: Repository<AttachmentEntity>
    ) {}

    async create(createAttachmentDto: CreateAttachmentDto) {
        const attachment = await this.attachmentRepository.create(createAttachmentDto);
        console.log("Create attachment");
        return this.attachmentRepository.save(attachment);
    }
}