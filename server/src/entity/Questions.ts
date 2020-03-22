import { Column, Entity } from 'typeorm'
import {PerBaseEntity} from '../entity/PerBaseEntity'

@Entity()
export class Questions extends PerBaseEntity{

  @Column()
  question: string;

  @Column({nullable: true})
  category: string;

  @Column({nullable: true})
  ageOfChild: string;

}
