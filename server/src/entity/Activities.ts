import { Column, ManyToOne, Entity, BaseEntity } from 'typeorm'
import {PerBaseEntity} from '../entity/PerBaseEntity'


@Entity()
export class Activities extends PerBaseEntity{


  @Column()
  game: string;

  @Column({nullable: true})
  description: string;

  @Column({nullable: true})
  selfmade: string;

  @Column({nullable: true})
  costs: number;

  @Column({nullable: true})
  link: string;

  @Column({nullable: true})
  minParticipants: number

  @Column({nullable: true})
  maxParticipants: number;

  @Column({nullable: true})
  agePlayer: string;

  @Column({nullable: true})
  category: string;


}