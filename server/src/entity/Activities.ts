import { Column, ManyToOne, Entity, BaseEntity } from 'typeorm'
import {PerBaseEntity} from '../entity/PerBaseEntity'

export enum Selfmade {
  YES,
  NO,
  MAYBE
}

@Entity()
export class Activities extends PerBaseEntity{


  @Column()
  game: string;

  @Column()
  description: string;

  @Column()
  selfmade: Selfmade;

  @Column()
  costs: number;

  @Column()
  link: string;

  @Column()
  numberPlayers: string;

  @Column()
  agePlayer: string;

  @Column()
  category: string;


}