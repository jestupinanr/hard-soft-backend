import { baseEntity } from "src/base.entity";
import { Column, Entity, } from "typeorm";

@Entity('status_resources')
export class StatusResources extends baseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
}
