import { baseEntity } from "src/base.entity";
import { StatusResources } from "src/status-resources/entities/statusResources.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity('software')
export class Software extends baseEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  name: string;
  @OneToOne(() => StatusResources)
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
  @Column({ type: 'timestamp', nullable: false })
  acquisitionDate: Date
}
