import { Assigment } from "src/assigments/entities/assigment.entity";
import { baseEntity } from "src/base.entity";
import { Resources } from "src/resources/entities/resources.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { IncidentsStatus } from "./incidentsStatus.entity";

@Entity('incidents')
export class Incidents extends baseEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  title: string;

  @ManyToOne(() => Assigment, {  })
  @JoinColumn()
  assigment: Assigment;

  @ManyToOne(() => IncidentsStatus, {nullable: true})
  @JoinColumn()
  incidentStatus: IncidentsStatus;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  solution: string;
}
