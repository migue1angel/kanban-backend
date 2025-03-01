import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity('feedbacks', { schema: 'boards' })
export class FeedbackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @Column({
    type: 'varchar',
    length: 200,
  })
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.feedbacks)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => TaskEntity, (task) => task.feedbacks)
  @JoinColumn({ name: 'task_id' })
  task: TaskEntity;
}
