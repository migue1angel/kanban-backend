import { CreateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskEntity } from "./task.entity";
import Joi from "joi";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class TaskAssigmentEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created_at: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        select: false
    })
    deleted_at: Date;

    @ManyToOne(() => TaskEntity, (task) => task.taskAssigments)
    @JoinColumn({ name: 'task_id' })
    task: TaskEntity;

    @ManyToOne(() => UserEntity, (user) => user.taskAssigments)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

}   