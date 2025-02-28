import { FeedbackEntity } from 'src/modules/boards/entities/feedback.entity';
import { Task } from 'src/modules/boards/entities/task.entity';
import { Team } from 'src/modules/teams/entities/team.entity';
import {
  Column,
  Entity,
  ManyToMany,
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

  // @ManyToMany(()=> Team, team => team.users)
  // teams: Team[];

  // @ManyToMany(() => Task, (task) => task.users)
  // tasks: Task[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.user)
  feedbacks: FeedbackEntity[];
}
