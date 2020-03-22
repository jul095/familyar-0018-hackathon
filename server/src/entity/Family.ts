import { PerBaseEntity } from "./PerBaseEntity"
import { Entity, Column, JoinColumn, ManyToOne } from "typeorm"
import { FamilyMember } from "./FamilyMember";


@Entity()
export class Family extends PerBaseEntity {

  @Column()
  familyNameOwnCreated: string;

  @ManyToOne(_type => FamilyMember, familyMember => familyMember.familyName)
  @JoinColumn()
  familyMember: FamilyMember

}