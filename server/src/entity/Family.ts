import { PerBaseEntity } from "./PerBaseEntity"
import { Entity, Column } from "typeorm"


@Entity()
export class Family extends PerBaseEntity {

  @Column()
  familyNameOwnCreated: string;

}