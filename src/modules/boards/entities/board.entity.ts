import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { TeamMemberEntity } from 'src/modules/teams/entities/team-members.entity';

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

  @OneToMany(() => TaskEntity, (task) => task.board)
  tasks: TaskEntity[];

  @OneToMany(() => TeamMemberEntity, (team) => team.board)
  teamMembers: TeamMemberEntity[];

  @ManyToOne(() => UserEntity, (user) => user.boards, { nullable: false})
  @JoinColumn({
    name: 'owner_id',
  })
  owner: UserEntity;
}
