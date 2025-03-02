import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('roles', { schema: 'teams' })
export class RoleEntity {
  // Entity properties
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  name: string;

  @Column({
    type:'int'
  })
  code: number;

  @Column({
    nullable: true,
  })
  description: string;

  // relationships
}
