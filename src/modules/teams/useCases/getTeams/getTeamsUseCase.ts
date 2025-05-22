import { inject, injectable } from "tsyringe";
import { TEAM_REPOSITORY } from "../../../../shared/container";

import ITeamRepository from "../../repositories/ITeamRepository";
@injectable()
class GetTeamsUseCase{
  constructor(@inject(TEAM_REPOSITORY) private readonly teamRepository: ITeamRepository) { };

  async execute(){
    const teamsInsights = await this.teamRepository.getTeamsInsights();

    return teamsInsights;
  };
};

export default GetTeamsUseCase;