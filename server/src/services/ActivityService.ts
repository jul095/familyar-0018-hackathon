import { Repository, getRepository } from "typeorm";
import { Activities } from "src/entity/Activities";


export class ActivityService {

  private activityRepository: Repository<Activities> = getRepository(Activities)

  public constructor() {

  }


  // 
  //  PUBLIC METHODS
  //


  

}