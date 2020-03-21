import { PerBaseEntity } from "./PerBaseEntity";
import { Entity, Column } from "typeorm";


@Entity()
export class FamilyMember extends PerBaseEntity {

  
  @Column()
  familyName: string

  @Column()
  firstName: string

  @Column()
  membership: string

  @Column()
  birthday: Date

  @Column()
  mailaddress: string



}