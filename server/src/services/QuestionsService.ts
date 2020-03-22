import { Questions } from "../entity/Questions";
import { Repository, getRepository } from "typeorm";

export class QuestionsService {
  private questionRepository: Repository<Questions> = getRepository(Questions);

  public constructor() {}

  //
  //  PUBLIC METHODS
  //
  public findRandomQuestion(): Promise<Questions[]> {
    return this.questionRepository
      .createQueryBuilder()
      .select()
      .orderBy("RANDOM()")
      .limit(1)
      .getMany();
  }

  public findSuitableQuestion(ageOfChild: number): Promise<Questions[]> {
    return this.questionRepository
      .createQueryBuilder()
      .select()
      .where("'ageOfChild' >= :age", { age: ageOfChild })
      .orderBy("RANDOM()")
      .limit(1)
      .getMany();
  }
}
