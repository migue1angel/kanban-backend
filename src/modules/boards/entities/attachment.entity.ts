import { Delete } from "@nestjs/common";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity('attachments', { schema: 'boards' })
export class AttachmentEntity {
    // Entity properties
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        select: false
    })
    deleted_at: Date;

    @Column({
        name:'file_name'
    })
    fileName: string;

    @Column({
        name:'file_url'
    })
    fileUrl: string;

    @Column({
        name: 'file_size',
    })
    fileSize: string;

    @Column()
    content_type: string;

    // relationships
    @ManyToOne(() => TaskEntity, (task) => task.attachments)
    task: TaskEntity;
}
