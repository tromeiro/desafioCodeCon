import IUser from "../../../../types/IUser";
import IUserRepository from "../IUserRepository";

import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { PRISMA_CLIENT } from "../../../../service/prisma-client/symbols";

//implementação dos repositórios
@injectable()
class UserRepository implements IUserRepository{
  constructor(@inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  async create(user: IUser[]): Promise<number>{
  //acessar o banco do prisma para criar o usuario
   return 0;
  };

};

export default UserRepository;