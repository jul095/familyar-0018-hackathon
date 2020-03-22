import { PerBaseEntity } from "./PerBaseEntity";
import { Entity, Column, ManyToOne } from "typeorm";
import { Family } from "./Family";


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

  @ManyToOne(_type => FamilyMember, family => family.family)
  family: Family

}