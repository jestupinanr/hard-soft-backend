import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export class baseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn({ nullable: true })
  create_at?: Date

  @CreateDateColumn({ nullable: true })
  update_at?: Date
}
