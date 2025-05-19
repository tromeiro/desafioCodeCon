import ITeam from "../../../../types/ITeam";
import ITeamRepository from "../../repositories/ITeamRepository";

import { inject, injectable } from "tsyringe";
import { TEAM_REPOSITORY } from "../../../../shared/container";

@injectable()
class CreateTeamUseCase{
  constructor(@inject(TEAM_REPOSITORY) private readonly teamRepository: ITeamRepository ) { };

  //onde será desenvolvida as regras de negócio
  async execute(teams: ITeam[]){

  };
};

export default CreateTeamUseCase;