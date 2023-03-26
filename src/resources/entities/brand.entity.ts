import { baseEntity } from "src/base.entity";
import { Column, Entity, } from "typeorm";

@Entity('resource_brand')
export class ResourceBrand extends baseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  resource: string;

}
