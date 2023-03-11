import { baseEntity } from "src/base.entity";
import { Column, Entity } from "typeorm";

@Entity('incidents_status')
export class IncidentsStatus extends baseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
}
