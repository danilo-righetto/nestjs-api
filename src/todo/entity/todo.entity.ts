import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false, default: false })
  is_done: boolean;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  created_at: string;
}
