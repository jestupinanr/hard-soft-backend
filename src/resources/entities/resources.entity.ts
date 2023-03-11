import { baseEntity } from "src/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, } from "typeorm";
import { Hardware } from "./hardware.entity";
import { Software } from "./software.entity";

@Entity('resources')
export class Resources extends baseEntity {
  @ManyToOne(() => Hardware, {nullable: true})
  @JoinColumn()
  hardware: Hardware;

  @ManyToOne(() => Software, {nullable: true})
  @JoinColumn()
  software: Software;

  @Column({ type: 'int', default: 0,  name: 'is_assigned' })
  isAssigned:string
}
