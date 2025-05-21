import IUser from "../../../../types/IUser";
import ILogRepository from "../../../logs/repositories/ILogRepository";
import IUserRepository from "../../repositories/IUserRepository";
import ITeamRepository from "../../../teams/repositories/ITeamRepository";
import IProjectRepository from "../../../projects/repositories/IProjectRepository";

import { inject, injectable } from "tsyringe";
import { LOG_REPOSITORY, PROJECT_REPOSITORY, TEAM_REPOSITORY, USER_REPOSITORY } from "../../../../shared/container";
@injectable()
class CreateUsersUseCase {
  constructor(
    @inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @inject(TEAM_REPOSITORY) private readonly teamRepository: ITeamRepository,
    @inject(PROJECT_REPOSITORY) private readonly projectRepository: IProjectRepository,
    @inject(LOG_REPOSITORY) private readonly logRepository: ILogRepository
  ) { }

  //regra de negocio
  async execute(users: IUser[]){
    const teams = users.map( user => user.team)

    await this.teamRepository.create(teams);
    await this.projectRepository.create(teams); 
    await this.userRepository.create(users);
    await this.logRepository.create(users);
  };

};

export default CreateUsersUseCase;

