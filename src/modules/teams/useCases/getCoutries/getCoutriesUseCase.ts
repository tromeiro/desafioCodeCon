import { inject, injectable } from "tsyringe";
import { TEAM_REPOSITORY } from "../../../../shared/container";

import ITeamRepository from "../../repositories/ITeamRepository";

@injectable()
class GetCoutriesUseCase{
  constructor(@inject(TEAM_REPOSITORY) private readonly teamRepository: ITeamRepository) { };

  async execute(){
    const coutries = await this.teamRepository.getCoutries();
  }
};

export default GetCoutriesUseCase;