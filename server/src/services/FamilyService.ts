import { Repository, getRepository } from "typeorm";
import { Family } from "../entity/Family";
import { FamilyMember } from "../entity/FamilyMember";

export class FamilyService {


  familyRepository: Repository<Family> = getRepository(Family)
  familyMemberRepository: Repository<FamilyMember> = getRepository(FamilyMember)


  public constructor() {

  }


  public newFamily(family: Family): Promise<Family> {

    return this.familyRepository.save(
      family
    )
  }

} 