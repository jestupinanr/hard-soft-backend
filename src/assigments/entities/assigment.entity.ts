import { baseEntity } from "src/base.entity";
import { Resources } from "src/resources/entities/resources.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity('assigments')
export class Assigment extends baseEntity {
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Resources)
  @JoinColumn()
  resource: Resources;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'timestamp', nullable: true, name: 'return_date' })
  returnDate: Date;
}
