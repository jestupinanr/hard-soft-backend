import { baseEntity } from "src/base.entity";
import { Column, Entity } from "typeorm";

@Entity('roles')
export class Roles extends baseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;
}
