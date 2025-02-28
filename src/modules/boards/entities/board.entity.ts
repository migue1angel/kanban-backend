import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import { Task } from './task.entity';
import { Team } from 'src/modules/teams/entities/team.entity';

@Entity('boards', { schema: 'boards' })
export class BoardEntity {
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

  @Column()
  name: string;

  @Column()
  description: string;

  // relationships

  // @OneToMany(() => Task, (task) => task.board)
  // tasks: Task[];
  
  // @OneToMany(() => Team, (team) => team.board)
  // teams: Team[];
}
