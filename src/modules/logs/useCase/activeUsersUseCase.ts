import { inject, injectable } from "tsyringe";
import { LOG_REPOSITORY } from "../../../shared/container";
import ILogRepository from "../repositories/ILogRepository";
@injectable()
class ActiveUsersUseCase {
  constructor(@inject(LOG_REPOSITORY) private readonly logRepository: ILogRepository) {};

  async execute() {
    const logs = await this.logRepository.activeUsers();

    return logs;
  };
};

export default ActiveUsersUseCase;