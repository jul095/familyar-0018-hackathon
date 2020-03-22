import { Questions } from "../entity/Questions";
import { Repository, getRepository } from "typeorm";

export class QuestionsService {
  private activityRepository: Repository<Questions> = getRepository(Questions);

  public constructor() {}

  //
  //  PUBLIC METHODS
  //

  public findRandomQuestion(): Promise<Questions> {
      return this.activityRepository
      .createQueryBuilder()
      .select()
      .orderBy("RANDOM()")
      .limit(1).getOne()
  }
}
