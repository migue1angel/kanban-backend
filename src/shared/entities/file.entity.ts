import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;

    @Column({name: 'file_name'})
    fileName: string;

    @Column('bigint')
    size: number;

    @Column()
    mimetype: string;

    @Column()
    entityId: string;

    @Column()
    entityType: string;

    @Column()
    cloudinaryUrl: string;

    @Column()
    publicId: string;
    
}
