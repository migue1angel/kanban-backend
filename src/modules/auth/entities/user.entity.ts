import { BoardEntity } from 'src/modules/boards/entities/board.entity';
import { FeedbackEntity } from 'src/modules/boards/entities/feedback.entity';
import { TaskAssigmentEntity } from 'src/modules/boards/entities/task-assigment.entity';
import { TeamMemberEntity } from 'src/modules/teams/entities/team-members.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users', { schema: 'auth' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  // relationships
  @OneToMany(() => TeamMemberEntity, (teamMember) => teamMember.user)
  teamMembers: TeamMemberEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.user)
  feedbacks: FeedbackEntity[];

  @OneToMany(() => BoardEntity, (board) => board.owner)
  boards: BoardEntity[];

  @OneToMany(() => TaskAssigmentEntity, (taskAssigment) => taskAssigment.user)
  taskAssigments: TaskAssigmentEntity[];

}
