import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks', { schema: 'boards' })
export class Task {
    // Entity properties
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    priority: number;

    @Column()
    due_date: Date;
}