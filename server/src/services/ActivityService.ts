import { Repository, getRepository } from "typeorm";
import { Activities } from "../entity/Activities";

export class ActivityService {
  private activityRepository: Repository<Activities> = getRepository(
    Activities
  );

  public constructor() {}

  //
  //  PUBLIC METHODS
  //

  public async findActivities(): Promise<Activities[]> {
    console.log("test");
    console.log(
      this.activityRepository
        .createQueryBuilder()
        .select()
        .execute()
    );
    return this.activityRepository
      .createQueryBuilder()
      .select()
      .execute();
  }

  public async findRandomActivities(): Promise<Activities[]> {
    return this.activityRepository
      .createQueryBuilder()
      .select()
      .orderBy("RANDOM()")
      .limit(1)
      .getMany();
  }
}
