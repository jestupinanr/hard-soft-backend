import { baseEntity } from "src/base.entity";
import { Roles } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity('users')
export class User extends baseEntity {
  @Column({ type: 'varchar', length: 25, nullable: false })
  nit: string;
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;
  @Column({ type: 'varchar', length: 50, nullable: false, name: 'last_name' })
  lastName:string
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
  @Column({ type: 'varchar', length: 30, nullable: false })
  phone1: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  phone2: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  address: string;
  @Column({ type: 'timestamp', nullable: true, name: 'born_date' })
  bornDate: Date
  @OneToOne(() => Roles)
  @JoinColumn()
  role: Roles;
}
