import { inject, injectable } from "tsyringe";
import { LOG_REPOSITORY } from "../../../shared/container";
import ILogRepository from "../repositories/ILogRepository";

@injectable()
class ActiveUsersUseCase {
  constructor(@inject(LOG_REPOSITORY) private readonly logRepository: ILogRepository) {};

  async execute() {
    await this.logRepository.activeUsers();
  };
};

export default ActiveUsersUseCase;