import { PrimaryGeneratedColumn } from "typeorm";


export class PerBaseEntity {

  @PrimaryGeneratedColumn()
  readonly id: number;

}