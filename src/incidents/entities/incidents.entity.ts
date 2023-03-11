import { baseEntity } from "src/base.entity";
import { Resources } from "src/resources/entities/resources.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { IncidentsStatus } from "./incidentsStatus.entity";

@Entity('incidents')
export class Incidents extends baseEntity {
  @ManyToOne(() => User, {  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Resources, {nullable: false})
  @JoinColumn()
  resource: Resources;

  @ManyToOne(() => IncidentsStatus, {nullable: true})
  @JoinColumn()
  incidentStatus: IncidentsStatus;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;
}
