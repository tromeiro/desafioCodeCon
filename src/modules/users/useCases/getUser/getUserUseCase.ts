import IUser from "../../../../types/IUser";
import IUserRepository from "../../repositories/IUserRepository";

import { inject, injectable } from "tsyringe";
import { USER_REPOSITORY } from "../../../../shared/container";

@injectable()
class SuperUsersUseCase{
  constructor(@inject(USER_REPOSITORY) private readonly userRepository: IUserRepository) { };

  async execute(){
    const superUsers = await this.userRepository.getUsers();

    return superUsers;
  }
};

export default SuperUsersUseCase;