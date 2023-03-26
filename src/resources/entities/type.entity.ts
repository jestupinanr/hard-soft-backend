import { baseEntity } from "src/base.entity";
import { Column, Entity, } from "typeorm";

@Entity('resource_type')
export class ResourceType extends baseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  resource: string;

}
