import { UserEntity } from 'src/modules/auth/entities/user.entity';
import { BoardEntity } from 'src/modules/boards/entities/board.entity';
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
import { RoleEntity } from './role.entity';

@Entity('team_members', { schema: 'teams' })
export class TeamMemberEntity {
  // Entity properties
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => UserEntity, (user) => user.teamMembers)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => BoardEntity, (board) => board.teamMembers)
  @JoinColumn({ name: 'board_id' })
  board: BoardEntity;

  @ManyToMany(() => RoleEntity, { eager: true })
  @JoinTable({
    name: 'team_members_roles',
  })
  roles: RoleEntity[];
}
