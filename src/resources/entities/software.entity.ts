import { baseEntity } from "src/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { StatusResources } from "./status-resources.entity";

@Entity('software')
export class Software extends baseEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;
  @ManyToOne(() => StatusResources)
  @JoinColumn()
  status: StatusResources;
  @Column({ type: 'varchar', length: 100, nullable: false })
  brand: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  licenseNumber: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  type: string;
  @Column({ type: 'varchar', length: 300, nullable: false })
  observations: string;
  @Column({ type: 'timestamp', nullable: false, name: 'acquisition_date' })
  acquisitionDate: Date
}
