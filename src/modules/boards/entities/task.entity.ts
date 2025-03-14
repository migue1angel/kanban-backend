import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardEntity } from './board.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { AttachmentEntity } from './attachment.entity';
import { FeedbackEntity } from './feedback.entity';

@Entity('tasks', { schema: 'boards' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt: Date;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ enum: ['todo', 'in_progress', 'to_review', 'done'] })
  status: string;

  @Column()
  priority: boolean;

  @Column({
    name: 'due_date',
  })
  dueDate: Date;

  // relationships
  @ManyToOne(() => BoardEntity, (board) => board.tasks)
  @JoinColumn({ name: 'board_id' })
  board: BoardEntity;

  @OneToMany(() => AttachmentEntity, (attachment) => attachment.task)
  attachments: AttachmentEntity[];

  @ManyToMany(() => UserEntity, (user) => user.teamMembers)
  @JoinTable({
    name: 'tasks_assignments',
  })
  users: UserEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.task)
  feedbacks: FeedbackEntity[];
}
