import { Delete } from "@nestjs/common";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('attachments', { schema: 'boards' })
export class Attachment {
    // Entity properties
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column()
    file_name: string;

    @Column()
    file_url: string;

    @Column()
    file_size: string;

    @Column()
    content_type: string;
}
