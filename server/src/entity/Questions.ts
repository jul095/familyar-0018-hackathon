import { Column, Entity } from 'typeorm'
import {PerBaseEntity} from '../entity/PerBaseEntity'

@Entity()
export class Questions extends PerBaseEntity{

  @Column()
  questions: string;

  @Column()
  category: string;

  @Column()
  ageOfChild: string;

}
